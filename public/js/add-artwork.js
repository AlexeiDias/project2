$(document).ready(function(){

    var titleInput = $("#artwork-title");
    var imageInput = $("#artwork-image");
    var artworkForm = $("#artworkform");
    var artistSelect = $("#artists");
    var citySelect = $("#city");
    var genreSelect = $("#genre");
  
    $.get("/api/city", function(data) {
      
      for (var i = 0; i < data.length; i++) {
        var listOption = $("<option>");
        listOption.attr("value", data[i].id);
        listOption.text(data[i].name);
        citySelect.append(listOption);
      }

    });

    $.get("/api/artists", function(data) {
      
        for (var i = 0; i < data.length; i++) {
          var listOption = $("<option>");
          listOption.attr("value", data[i].id);
          listOption.text(data[i].name);
          artistSelect.append(listOption);
        }

      });
  
    artworkForm.on("submit", function(event){
      event.preventDefault();
      console.log("submitted");
      if(!titleInput.val().trim() || !imageInput.val().trim()) {
        return;
      }
  
      var newArtwork = {
        title: titleInput.val().trim(),
        image: imageInput.val().trim(),
        genre: genreSelect.val(),
        CityId: citySelect.val(),
        ArtistId: artistSelect.val()
      };
  
      $.post("/api/artwork", newArtwork).then(function(data){
        console.log(data);
      });
  
    })
  })
$(document).ready(function(){

  var nameInput = $("#artist");
  var artistForm = $("#artistform");
  var citySelect = $("#city");

  $.get("/api/city", function(data) {
    

    for (var i = 0; i < data.length; i++) {
      var listOption = $("<option>");
      listOption.attr("value", data[i].id);
      listOption.text(data[i].name);
      citySelect.append(listOption);
    }
  });

  artistForm.on("submit", function(event){
    event.preventDefault();
    console.log("submitted");
    if(!nameInput.val().trim()) {
      return;
    }

    var newArtist = {
      name: nameInput.val().trim(),
      CityId: citySelect.val()
    };

    $.post("/api/artists", newArtist).then(function(data){
      console.log(data);
    });

  })
})
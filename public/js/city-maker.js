$(document).ready(function () {

    var nameInput = $("#city");
    var cityForm = $("#cityform");
    var imageInput = $("#city-image");

    cityForm.on("submit", function (event) {
        event.preventDefault();
        console.log("submitted");
        if (!nameInput.val().trim()) {
            return;
        }

        var newcity = {
            name: nameInput.val().trim(),
            image: imageInput.val().trim()
        };

        $.post("/api/city", newcity).then(function (data) {
            console.log(data);
        });

    })

    function getArtists() {

        $("#artistDelete").empty();

        $.get("/api/artists", function (data) {

            console.log(data);

            for (var i = 0; i < data.length; i++) {
                var artistDiv = $("<div>");
                artistDiv.addClass("col-12");
                var deleteBtn = $("<button>");
                artistDiv.append("<h4>" + data[i].name + "</h4>");
                artistDiv.append(deleteBtn)
                deleteBtn.addClass("deleteArtist btn btn-dark");
                deleteBtn.text("DELETE");
                deleteBtn.attr("data-id", data[i].id);
                $("#artistDelete").append(artistDiv);
            }


        })
    }
    getArtists();

    $(document).on("click", ".deleteArtist", function () {

        var artistID = $(this).attr("data-id");

        $.ajax({
            method: "DELETE",
            url: "/api/artists/" + artistID
        }).then(getArtists());
    })



    function getArtworks() {

        $("#artworkDelete").empty();

        $.get("/api/artwork", function (data) {

            console.log(data);

            for (var i = 0; i < data.length; i++) {
                var artworkDiv = $("<div>");
                artworkDiv.addClass("col-12");
                var deleteBtn = $("<button>");
                artworkDiv.append("<h4>" + data[i].title + "</h4>");
                artworkDiv.append(deleteBtn)
                deleteBtn.addClass("deleteArtwork btn btn-dark");
                deleteBtn.text("DELETE");
                deleteBtn.attr("data-id", data[i].id);
                $("#artworkDelete").append(artworkDiv);
            }


        })
    }
    getArtworks();

    $(document).on("click", ".deleteArtwork", function () {

        var artworkID = $(this).attr("data-id");

        $.ajax({
            method: "DELETE",
            url: "/api/artwork/" + artworkID
        }).then(getArtworks());
    })

})


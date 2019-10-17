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
})
//appends the cities to their div

$.get("/api/city", function (data) {

    console.log(data);

    for (var i = 0; i < data.length; i++) {

        var citySection = $("<div>");
        citySection.addClass("col-md-3");

        var cardholder = $("<div>");
        cardholder.addClass("cardholder");

        var card = $("<div>");
        card.addClass("card");

        var image = $("<img>");
        image.attr("src", data[i].image);
        image.attr("data-id", data[i].id);
        image.addClass("image");
        image.addClass("city");

        var caption = $("<div>");
        caption.addClass("carousel-caption d-none d-md-block");
        caption.append("<h5>" + data[i].name + "</h5>");

        citySection.append(cardholder);
        cardholder.append(card);
        card.append(image);
        card.append(caption);

        $("#cities").append(citySection);
    }
})

//appends the art to their div

$(document).on("click", ".city", function () {
$("#art").empty();

var cityID = $(this).attr("data-id");
console.log(cityID);

    $.get("/api/city/" + cityID + "/artwork", function (data) {

        console.log(data);

        for (var i = 0; i < data.length; i++) {

            var artSection = $("<div>");
            artSection.addClass("col-md-3 col-6");

            var card = $("<div>");
            card.addClass("card2");

            var image = $("<img>");
            image.attr("src", data[i].image);
            image.attr("data-id", data[i].id);
            image.addClass("image");
            image.addClass("art");

            artSection.append(card);
            card.append(image);

            $("#art").append(artSection);
        }

    })
})
//appends the single artwork to its div

artWorkSection.on("click", function (event) {

    $.get("/api/artwork/:id", function (data) {

        console.log(data);

        for (var i = 0; i < data.length; i++) {

            var artWorkSection = $("<div>");
            artWorkSection.addClass("col-md-3");

            var card = $("<div>");
            card.addClass("card");

            var image = $("<img>");
            image.attr("src", data[i].image);
            image.attr("data-id", data[i].id);
            image.addClass("image");
            image.addClass("art");

            artWorkSection.append(card);
            card.append(image);

            $("#art").append(artWorkSection);
        }

    })
})
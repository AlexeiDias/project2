

$.get("/api/city", function(data) {

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
        image.attr("data-cityid", data[i].id);
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


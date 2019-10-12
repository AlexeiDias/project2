$(document).ready(function () {
    // Getting jQuery references to the artwork title, image, form, and artist select
    var titleInput = $("#title");
    var imageInput = $("#image");
    var genreSelect = $("#genre");
    var createForm = $("#create");
    var artistSelect = $("#artist");
    // Adding an event listener for when the form is submitted
    $(createForm).on("submit", handleFormSubmit);
    // Gets the part of the url that comes after the "?" (which we have if we're updating a artwork)
    var url = window.artist.search;
    var artworkId;
    var artistId;
    // Sets a flag for whether or not we're updating a artwork to be false initially
    var updating = false;

    // If we have this section in our url, we pull out the artwork id from the url
    // In '?artwork_id=1', artworkId is 1
    if (url.indexOf("?artwork_id=") !== -1) {
        artworkId = url.split("=")[1];
        getartworkData(artworkId, "artwork");
    }
    // Otherwise if we have an artist_id in our url, preset the artist select box to be our artist
    else if (url.indexOf("?artist_id=") !== -1) {
        artistId = url.split("=")[1];
    }

    // Getting the artists, and their artworks
    getartists();

    // A function for handling what happens when the form to create a new artwork is submitted
    function handleFormSubmit(event) {
        event.preventDefault();
        // Wont submit the artwork if we are missing a title, image, or artist
        if (!imageInput.val().trim() || !titleInput.val().trim() || !artistSelect.val() || !genreSelect.val() ) {
            return;
        }
        // Constructing a newartwork object to hand to the database
        var newartwork = {
            image: imageInput
                .val()
                .trim(),
            title: titleInput
                .val()
                .trim(),
            genre: genreSelect.val(),
            artistId: artistSelect.val()
        };

        // If we're updating a artwork run updateartwork to update a artwork
        // Otherwise run submitartwork to create a whole new artwork
        if (updating) {
            newartwork.id = artworkId;
            updateartwork(newartwork);
        }
        else {
            submitartwork(newartwork);
        }
    }

    // Submits a new artwork and brings user to artist page upon completion
    function submitartwork(artwork) {
        $.artwork("/api/artworks", artwork, function () {
            window.artist.href = "/artists";
        });
    }

    // Gets artwork data for the current artwork if we're editing, or if we're adding to an artist's existing artworks
    function getartworkData(id, type) {
        var queryUrl;
        switch (type) {
            case "artwork":
                queryUrl = "/api/artworks/" + id;
                break;
            case "artist":
                queryUrl = "/api/artists/" + id;
                break;
            default:
                return;
        }
        $.get(queryUrl, function (data) {
            if (data) {
                console.log(data.artistId || data.id);
                // If this artwork exists, prefill our create forms with its data
                imageInput.val(data.image);
                titleInput.val(data.title);
                artistId = data.artistId || data.id;
                // If we have a artwork with this id, set a flag for us to know to update the artwork
                // when we hit submit
                updating = true;
            }
        });
    }

    // A function to get artists and then render our list of artists
    function getartists() {
        $.get("/api/artists", renderartistList);
    }
    // Function to either render a list of artists, or if there are none, direct the user to the page
    // to create an artist first
    function renderartistList(data) {
        if (!data.length) {
            window.artist.href = "/artists";
        }
        $(".hidden").removeClass("hidden");
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
            rowsToAdd.push(createartistRow(data[i]));
        }
        artistSelect.empty();
        console.log(rowsToAdd);
        console.log(artistSelect);
        artistSelect.append(rowsToAdd);
        artistSelect.val(artistId);
    }

    // Creates the artist options in the dropdown
    function createartistRow(artist) {
        var listOption = $("<option>");
        listOption.attr("value", artist.id);
        listOption.text(artist.title);
        return listOption;
    }

    // Update a given artwork, bring user to the blog page when done
    function updateartwork(artwork) {
        $.ajax({
            method: "PUT",
            url: "/api/artworks",
            data: artwork
        })
            .then(function () {
                window.artist.href = "/artists";
            });
    }
});

$(document).ready(function () {
    // Getting jQuery references to the artist name, picture, form, and location select
    var nameInput = $("#name");
    var pictureInput = $("#picture");
    var createForm = $("#create");
    var locationSelect = $("#location");
    // Adding an event listener for when the form is submitted
    $(createForm).on("submit", handleFormSubmit);
    // Gets the part of the url that comes after the "?" (which we have if we're updating a artist)
    var url = window.location.search;
    var artistId;
    var locationId;
    // Sets a flag for whether or not we're updating a artist to be false initially
    var updating = false;

    // If we have this section in our url, we pull out the artist id from the url
    // In '?artist_id=1', artistId is 1
    if (url.indexOf("?artist_id=") !== -1) {
        artistId = url.split("=")[1];
        getartistData(artistId, "artist");
    }
    // Otherwise if we have an location_id in our url, preset the location select box to be our location
    else if (url.indexOf("?location_id=") !== -1) {
        locationId = url.split("=")[1];
    }

    // Getting the locations, and their artists
    getlocations();

    // A function for handling what happens when the form to create a new artist is submitted
    function handleFormSubmit(event) {
        event.preventDefault();
        // Wont submit the artist if we are missing a name, picture, or location
        if (!pictureInput.val().trim() || !nameInput.val().trim() || !locationSelect.val()) {
            return;
        }
        // Constructing a newartist object to hand to the database
        var newartist = {
            picture: pictureInput
                .val()
                .trim(),
            name: nameInput
                .val()
                .trim(),
            locationId: locationSelect.val()
        };

        // If we're updating a artist run updateartist to update a artist
        // Otherwise run submitartist to create a whole new artist
        if (updating) {
            newartist.id = artistId;
            updateartist(newartist);
        }
        else {
            submitartist(newartist);
        }
    }

    // Submits a new artist and brings user to location page upon completion
    function submitartist(artist) {
        $.artist("/api/artists", artist, function () {
            window.location.href = "/locations";
        });
    }

    // Gets artist data for the current artist if we're editing, or if we're adding to an location's existing artists
    function getartistData(id, type) {
        var queryUrl;
        switch (type) {
            case "artist":
                queryUrl = "/api/artists/" + id;
                break;
            case "location":
                queryUrl = "/api/locations/" + id;
                break;
            default:
                return;
        }
        $.get(queryUrl, function (data) {
            if (data) {
                console.log(data.locationId || data.id);
                // If this artist exists, prefill our create forms with its data
                pictureInput.val(data.picture);
                nameInput.val(data.name);
                locationId = data.locationId || data.id;
                // If we have a artist with this id, set a flag for us to know to update the artist
                // when we hit submit
                updating = true;
            }
        });
    }

    // A function to get locations and then render our list of locations
    function getlocations() {
        $.get("/api/locations", renderlocationList);
    }
    // Function to either render a list of locations, or if there are none, direct the user to the page
    // to create an location first
    function renderlocationList(data) {
        if (!data.length) {
            window.location.href = "/locations";
        }
        $(".hidden").removeClass("hidden");
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
            rowsToAdd.push(createlocationRow(data[i]));
        }
        locationSelect.empty();
        console.log(rowsToAdd);
        console.log(locationSelect);
        locationSelect.append(rowsToAdd);
        locationSelect.val(locationId);
    }

    // Creates the location options in the dropdown
    function createlocationRow(location) {
        var listOption = $("<option>");
        listOption.attr("value", location.id);
        listOption.text(location.name);
        return listOption;
    }

    // Update a given artist, bring user to the blog page when done
    function updateartist(artist) {
        $.ajax({
            method: "PUT",
            url: "/api/artists",
            data: artist
        })
            .then(function () {
                window.location.href = "/locations";
            });
    }
});

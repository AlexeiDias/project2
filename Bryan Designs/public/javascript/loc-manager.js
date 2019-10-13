$(document).ready(function() {
    // Getting references to the name input and author container, as well as the table body
    var locationInput = $("#location-name");
    var locationList = $("tbody");
    var locationContainer = $(".location-container");
    // Adding event listeners to the form to create a new object, and the button to delete
    // an Author
    $(document).on("submit", "#location-form", handleLocationFormSubmit);
    $(document).on("click", ".delete-location", handleDeleteButtonPress);
  
    // Getting the initial list of Authors
    getLocations();
  
    // A function to handle what happens when the form is submitted to create a new Author
    function handleLocationFormSubmit(event) {
      event.preventDefault();
      // Don't do anything if the name fields hasn't been filled out
      if (!locationInput.val().trim().trim()) {
        return;
      }
      // Calling the upsertAuthor function and passing in the value of the name input
      upsertLocation({
        location: locationInput
          .val()
          .trim()
      });
    }
  
    // A function for creating an author. Calls getAuthors upon completion
    function upsertLocation(locationData) {
      $.post("/api/location", locationData)
        .then(getLocation);
    }
  
    // Function for creating a new list row for authors
    function createLocationRow(locationData) {
      var newTr = $("<tr>");
      newTr.data("location", locationData);
      newTr.append("<td>" + locationData.location + "</td>");
      if (locationData.Locations) {
        newTr.append("<td> " + locationData.Locations.length + "</td>");
      } else {
        newTr.append("<td>0</td>");
      }location
      newTr.append("<td><a href='/blog?location_id=" + locationData.id + "'>Go to Locations</a></td>");
      newTr.append("<td><a href='/cms?location_id=" + locationData.id + "'>Create a Location</a></td>");
      newTr.append("<td><a style='cursor:pointer;color:red' class='delete-location'>Delete Location</a></td>");
      return newTr;
    }
  
    // Function for retrieving authors and getting them ready to be rendered to the page
    function getLocations() {
      $.get("/api/locations", function(data) {
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
          rowsToAdd.push(createLocationRow(data[i]));
        }
        renderLocationList(rowsToAdd);
        locationInput.val("");
      });
    }
  
    // A function for rendering the list of authors to the page
    function renderLocationList(rows) {
      locationList.children().not(":last").remove();
      locationContainer.children(".alert").remove();
      if (rows.length) {
        console.log(rows);
        locationList.prepend(rows);
      }
      else {
        renderEmpty();
      }
    }
  
    // Function for handling what to render when there are no authors
    function renderEmpty() {
      var alertDiv = $("<div>");
      alertDiv.addClass("alert alert-danger");
      alertDiv.text("You must create an Location before you can add an Artist.");
      locationContainer.append(alertDiv);
    }
  
    // Function for handling what happens when the delete button is pressed
    function handleDeleteButtonPress() {
      var listItemData = $(this).parent("td").parent("tr").data("location");
      var id = listItemData.id;
      $.ajax({
        method: "DELETE",
        url: "/api/locations/" + id
      })
        .then(getRegions);
    }
  });
  
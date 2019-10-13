$(document).ready(function() {
    // Getting references to the name input and author container, as well as the table body
    var regionInput = $("#region-name");
    var regionList = $("tbody");
    var regionContainer = $(".region-container");
    // Adding event listeners to the form to create a new object, and the button to delete
    // an Author
    $(document).on("submit", "#region-form", handleRegionFormSubmit);
    $(document).on("click", ".delete-region", handleDeleteButtonPress);
  
    // Getting the initial list of Authors
    getRegions();
  
    // A function to handle what happens when the form is submitted to create a new Author
    function handleRegionFormSubmit(event) {
      event.preventDefault();
      // Don't do anything if the name fields hasn't been filled out
      if (!regionInput.val().trim().trim()) {
        return;
      }
      // Calling the upsertAuthor function and passing in the value of the name input
      upsertRegion({
        region: regionInput
          .val()
          .trim()
      });
    }
  
    // A function for creating an author. Calls getAuthors upon completion
    function upsertRegion(regionData) {
      $.post("/api/regions", regionData)
        .then(getRegions);
    }
  
    // Function for creating a new list row for authors
    function createRegionRow(regionData) {
      var newTr = $("<tr>");
      newTr.data("region", regionData);
      newTr.append("<td>" + regionData.region + "</td>");
      if (regionData.Locations) {
        newTr.append("<td> " + regionData.Locations.length + "</td>");
      } else {
        newTr.append("<td>0</td>");
      }
      newTr.append("<td><a href='/blog?region_id=" + regionData.id + "'>Go to Locations</a></td>");
      newTr.append("<td><a href='/cms?region_id=" + regionData.id + "'>Create a Location</a></td>");
      newTr.append("<td><a style='cursor:pointer;color:red' class='delete-region'>Delete Region</a></td>");
      return newTr;
    }
  
    // Function for retrieving authors and getting them ready to be rendered to the page
    function getRegions() {
      $.get("/api/regions", function(data) {
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
          rowsToAdd.push(createRegionRow(data[i]));
        }
        renderRegionList(rowsToAdd);
        regionInput.val("");
      });
    }
  
    // A function for rendering the list of authors to the page
    function renderRegionList(rows) {
      regionList.children().not(":last").remove();
      regionContainer.children(".alert").remove();
      if (rows.length) {
        console.log(rows);
        regionList.prepend(rows);
      }
      else {
        renderEmpty();
      }
    }
  
    // Function for handling what to render when there are no authors
    function renderEmpty() {
      var alertDiv = $("<div>");
      alertDiv.addClass("alert alert-danger");
      alertDiv.text("You must create an Region before you can create a Location.");
      regionContainer.append(alertDiv);
    }
  
    // Function for handling what happens when the delete button is pressed
    function handleDeleteButtonPress() {
      var listItemData = $(this).parent("td").parent("tr").data("region");
      var id = listItemData.id;
      $.ajax({
        method: "DELETE",
        url: "/api/regions/" + id
      })
        .then(getRegions);
    }
  });
  
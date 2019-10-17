$(document).ready(function() {
  // Getting references to the name input and author container, as well as the table body
  var nameInput = $("#artist-name");
  var artistList = $("tbody");
  var artistContainer = $(".artist-container");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an Author
  $(document).on("submit", "#artist-form", handleArtistFormSubmit);
  $(document).on("click", ".delete-artist", handleDeleteButtonPress);

  // Getting the initial list of Authors
  getArtists();

  // A function to handle what happens when the form is submitted to create a new Author
  function handleArtistFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!nameInput.val().trim().trim()) {
      return;
    }
    // Calling the upsertAuthor function and passing in the value of the name input
    upsertArtist({
      name: nameInput
        .val()
        .trim()
    });
  }

  // A function for creating an author. Calls getAuthors upon completion
  function upsertArtist(artistData) {
    $.post("/api/artists", artistData)
      .then(getArtists);
  }

  // Function for creating a new list row for authors
  function createArtistRow(artistData) {
    var newTr = $("<tr>");
    newTr.data("artist", artistData);
    newTr.append("<td>" + artistData.name + "</td>");
    if (artistData.Posts) {
      newTr.append("<td> " + artistData.Posts.length + "</td>");
    } else {
      newTr.append("<td>0</td>");
    }
    newTr.append("<td><a href='/gallery?artist_id=" + artistData.id + "'>Go to Posts</a></td>");
    newTr.append("<td><a href='/cms?artist_id=" + artistData.id + "'>Create a Post</a></td>");
    newTr.append("<td><a style='cursor:pointer;color:red' class='delete-artist'>Delete Artist</a></td>");
    return newTr;
  }

  // Function for retrieving authors and getting them ready to be rendered to the page
  function getArtists() {
    $.get("/api/artists", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createArtistRow(data[i]));
      }
      renderArtistList(rowsToAdd);
      nameInput.val("");
    });
  }

  // A function for rendering the list of authors to the page
  function renderArtistList(rows) {
    artistList.children().not(":last").remove();
    artistContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      artistList.prepend(rows);
    }
    else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no authors
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("You must create an Artist before you can post an Artwork.");
    artistContainer.append(alertDiv);
  }

  // Function for handling what happens when the delete button is pressed
  function handleDeleteButtonPress() {
    var listItemData = $(this).parent("td").parent("tr").data("artist");
    var id = listItemData.id;
    $.ajax({
      method: "DELETE",
      url: "/api/artists/" + id
    })
      .then(getArtists);
  }
});

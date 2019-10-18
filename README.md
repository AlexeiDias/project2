# Hidden Talents
## Deployed Link:
[Hidden Talents](https://polar-meadow-22968.herokuapp.com/)


## Description
Hidden Talents is a web app that easily connects the local art community. Users are able to navigate to a city of their choice and take a look at examples of art in that area. Artwork can be uploaded by the Artists themelseves, alternatively fans of the arts can upload artwork they like and attriubite it to the artist.


## Images of site
![splash page](https://i.imgur.com/Rfmisx6.png)
![Main Page](https://i.imgur.com/JDfjKEj.png)


## User guide
Users are greeted with a splash page containing some preview images. Clicking that pulls up an interactive page turner that allows you to see several images. Navigating to the sidebar, you can then Go To the Gallery and begin browsing images of artwork based on the locations give. The side bar also has options to add in a new artists and artwork to the gallery. Note adding artwork requires an artist to already be in the database, as well as a URL link to the artworks 


## Code examples
![Turn.JS](https://i.imgur.com/0s1SHX1.png "Turn.JS")
This snippet shows how the page loads on to the index.html homepage. 
Every images that is saved from an image folder will append to the html page by using

“img.attr(‘src’, ‘folder route’ + page + ‘name of the picture file’);

### JS client side with Route
This is one aspect of how the app functions:
![gif](https://i.imgur.com/Okja4I8.gif)

Here is the corresponding code for that:

Code:
![code](https://i.imgur.com/VuQyaNF.png)

To code listens for a click on one of the cities (It uses the get route below) and appends the images it gets from there into onto individual cards in the div labeled artSection.

Route:
![route](https://i.imgur.com/u1SaHTS.png)

This is the get route that queries our data base for artwork and finds all photos assiciated with the cityID of the city clicked.

## Schema Associations
![gif](https://i.imgur.com/KI8OQiv.jpg)



## Technology used
* Visual Studio Codes
* Node.JS
* MySQL
* Express
* Sequelize
* Turn.JS


## Learning points
This project was a great excercize in dynamically manipulating databases with user (and admin) input via interactivity within the app. Being able to add something in and instantly see it added into the right areas of the page was one of the biggest obstacles and main points of our app. 

Technology aside, another huge learning point was group dynamics and just how important keeping up with communication and being on the same page helps immensly with being efficient overall and having a coherent, concise back end and easy to interface front end.


## Future Development
* Add a login feature to allow artists to delete their own specific posts or profiles
* Administrator features to allow more control of our site 
* Like button on each photo with a comment section as well
* Message inbox to begin collaborating or purchasing art from other users
* Commenting on each Pictures

## Author Links
[Bryan Jacinto](https://github.com/bryanjacinto1994)

[Jerry Dudum](https://github.com/Jerry-Dudum)

[Alexei Dias](https://github.com/AlexeiDias)

[Raj Sodhi](https://github.com/Rajsodhi1)






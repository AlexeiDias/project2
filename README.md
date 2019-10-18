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


## Code snippet
![Turn.JS](https://i.imgur.com/0s1SHX1.png "Turn.JS")
This snippet shows how the page loads on to the index.html homepage. 

- By using the jQuery method to make a new image tag, I placed it in a variable called image. The image tag is then executed by using the mousedown method. The mousedown method will occur where the mouse button is clicked on the selected element. Also by using the preventDefault method, it will allow to cancel the event if it is cancellable, so that action where the belonging event takes place, will not occur at all.
- How the pages are loaded on to the flip-book design (Turn.JS library), the load() method was used. This method will load the data from the server and then will place the returned HTML into the matched elements I want to look for.
- The CSS method was used to set a style property so the width and height can be set at 100% once the page is loaded.
The pages will then get appended to the pageElement which serves as an argument that is held in a parameter that holds the whole functions itself.
- By using the argument called pageElement from the parameter, it will search for a class called ".loader" which is a web browser loader that parses the URLs and requires the images we want it to look for from our folder routes. By searching for the class, the "find()" method is used to search for that element and it will then be removed by using the "remove()" method.
The attribute method was used to find the source of where our pages/images are located within out folder routes.



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






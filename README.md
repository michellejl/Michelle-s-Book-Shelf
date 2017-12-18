# My Reads App
This is a project for Udacity's [React Developer Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019). I have added several features to this application to take it above and beyond what was required for the course. I am not using any of the provided starter code from Udacity. This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Use of Images / Text
* All images of book covers and summary text comes from [GoodReads](https://www.goodreads.com)

## Project Description:
Create a bookshelf app that allows the user to select and categorize books you have read, are currently ready, and want to read. 

## This Project Requires a Bit of Setup:
You should be able to set this project up fairly easily. I used Yarn.
1. Clone this repo to your local machine.
1. ```cd``` into the newly cloned directory
1. Open the file src/exampleFirebase.js
  1. Create a new project on [Firebase](https://console.firebase.google.com/)
  1. Click the "Add Firebase to your web app" button to see your config object.
  1. Copy needed information from your config object to the one in exampleFirebase.js file.
  1. Rename file to firebase.js
  1. In Firebase, go to your real time databsae, click on the stacked dots on the right and select Import JSON
  1. Navigate to and select the file src/startingpoint.json
1. Run ```yarn install``` to download the dependencies
1. Run ```yarn start``` to run the app. This should open a webpage up to [http://localhost:3000/](http://localhost:3000/) where you will see the app running.

## Extras
1. I am using [Styled Components](https://www.styled-components.com/) to write custom styling for this application.
1. I am using Firebase to create and maintain my own database of books
1. I have added a form to add a new book to my database. This feature is only available when a user is logged in
1. I wrote all the styles for this project instead of using the provided styles

## Things I want to add later:
1. Edit book information from within app
1. Form for people to recommend books for me to read
1. Add a way for books to be sorted by author name
1. Display my rating
1. Remove a book from the app
1. Add a 'more by author' section to book details page

## Resources I found particularly helpful while building this:
* [Udacity React Nanodegree videos](https://www.udacity.com/course/react-nanodegree--nd019)
* [Tyler McGinnis --> React Router Firebase Auth](https://github.com/tylermcginnis/react-router-firebase-auth)
* [Kent C. Dodds' The Beginner's Guide to ReactJS on egghead.io](https://egghead.io/courses/the-beginner-s-guide-to-reactjs)
* [Firebase Documentation](https://firebase.google.com/docs/)
* [CSS-Tricks: All About React Router 4](https://css-tricks.com/react-router-4/)

___________________




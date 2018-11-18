# MyReads Project

## Overview

Project Six for Udacity's Front End Nanodegree involved working with starter code for a hard-coded bookshelf application called myReads which was bootstrapped with Create React App. From this point, React's key capabilities for providing upgraded functionality to the app's front-end experience were integrated and tested. Now that the project is completed, myReads allows its users to select and categorize a collection of books as well as search for new books to add to their collection.

### Learning React to Complete The myReads Project

This project challenged my ability to research and analyze the lesson material as well as consult React's own documentation to understand and then integrate the fundamental concepts and architecture for building the front-end aspect of a React application.

The main concepts involved working with components and their lifecycle in addition to understanding props and state within React's data flow to render the UI. In regards to learning important features of React's component lifecycle, the project also required rendering data fetched from an external resource to incorporate into the render

Finally, React Router was also added to the project as a way to create the experience of a single-page application for myReads.

## View The Project Online

You can view a deployed version of my myReads application at the following address: http://jamoverjelly.github.io/React-Project-MyReads/

## Running The Project

1. Clone or download this repository
2. Install the project dependencies using `npm install`
3. Run the development server with `npm start`
4. In your browser, navigate to http://localhost:3000 to view a running instance of the application

## Navigating myReads App

The main page of the website allows the user to track and categorize their collection of books onto three "bookshelves" which specify the user's reading status for a given book:

- **Currently Reading**
- **Want to Read**
- **Read**

Using the control tied the display of each book instance, a user can sort which shelf their book is organized to or select 'None' to remove it from their collection.

In the bottom-right of the UI, the user can click the 'Add' icon button to navigate to the application's search page. On the search page, an input field is provided where the user can enter a search term which dynamically updates the display of available books. This display is filtered according to the text entered into the search input. myReads is limited to a select collection of terms. To view the allowed search-terms, visit the [SEARCH_TERMS.md](https://github.com/Jamoverjelly/React-Project-MyReads/blob/master/SEARCH_TERMS.md) file from the project's starter repository.

Note that because React Router is integrated into the project's dependencies, the user is able to navigate between the pages of the app using either the controls provided in the UI or by providing the url page address in the browser's address bar:

- path: "/" for the myReads main page
- path: "/search" for the myReads search page

## Resources

#### Course Resources

- [Udacity Course: React Fundamentals](https://www.udacity.com/course/react-nanodegree--nd019) from Udacity's React Nanodegree

- [Starter Code](https://github.com/udacity/reactnd-project-myreads-starter)

- [Project Spec](https://review.udacity.com/#!/rubrics/918/view)

#### External Resources

- [React Docs](https://reactjs.org/docs/getting-started.html?no-cache=1)

- [React Docs: Thinking in React](https://reactjs.org/docs/thinking-in-react.html)

- [MDN: Conditional (ternary) Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

- This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

- [React Router](https://reacttraining.com/react-router/core/guides/philosophy) was integrated into the project to create a single-page experience in the app.

#### Attributions

- Referenced helper code for in-lining styles in React JSX on StackOverflow: [React: why is double brace syntax, style{{..}}, required for inline styles](https://stackoverflow.com/questions/47950833/react-why-is-double-brace-syntax-style-required-for-inline-styles) on October 8, 2018

- Watched and reviewed notes from [Maeva NAP's Study Jam 21/07 - FEND P7 - My Reads](https://www.youtube.com/watch?v=i6L2jLHV9j8) on YouTube for analyzing initial project action steps and required functionality on October 3, 2018

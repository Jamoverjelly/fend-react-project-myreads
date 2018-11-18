import React from 'react'
import './App.css'

import SearchPage from './searchPage'
import MainPage from './mainPage'

import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    // array container for holding dynamic state data for books
    booksList: []
  }

  // perform fetch once component has completed initial render
  componentDidMount() {
    // retrieving book data from API returns Promise
    BooksAPI.getAll().then((books) => {
      // update state for booksList, triggers re-render
      this.setState({ booksList: books })
    })
  }

  // create method for changing shelf status of book on both the main page and search page
  updateShelf = (book, shelf) => {
    // utilizing update method from BooksAPI, pass in parameters
    BooksAPI.update(book, shelf);

    // Re-run fetch request for books data, update state of booksList
    BooksAPI.getAll().then((books) => {
      this.setState({ booksList: books })
    })
  }

  render() {
    return (
      <div className="app">
        {/* route for rendering main page */}
        <Route exact path='/' render={() => (
          <MainPage
            // booksList state can be passed to MainPage component as immutable props, books
            books={this.state.booksList}
            // provide access to updateShelf method in MainPage component, passing data down through children components
            updateShelf={this.updateShelf}
          />
        )}/>
        {/* route for rendering search page */}
        <Route path='/search' render={() => (
          <SearchPage
            // provide access to updateShelf method in SearchPage component
            updateShelf={this.updateShelf}
            // send current state of booksList to SearchPage component
            booksList={this.state.booksList}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp

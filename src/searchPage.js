import React, { Component } from 'react'
import Book from './book'

import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

class SearchPage extends Component {
  state = {
    query: '',
    // books added to this array will be filtered by current query state
    retrievedBooks: []
  }

  udpateQuery = (query) => {
    // modify query state based on argument passed into updateQuery as 'query'
    this.setState({
      query: query
    })

    // each time the query state changes in response to text input, call updateRetrievedBooks passing query.
    // This will update the component state causing re-render
    this.updateRetrievedBooks(query);
  }

  // method will update state of retrievedBooks array so they can be rendered to the page as search results based on the query state
  updateRetrievedBooks = (query) => {
    // if query state is truthy
    if (query) {
      // utilize search method, passing query state as string argument, this returns a Promise which resolves to JSON collection obj
      BooksAPI.search(query).then((retrievedBooks) => {
        // if no books are actually retrieved by current input,
        // an error is thrown when .map is encountered as no array has been passed
        // so, handle the error
        if (retrievedBooks.error) {
          // if nothing is retrieved, empty state array while still returning an array object to pass to .map
          this.setState( {retrievedBooks: []} )
        } else {
          // when books are successfully retrieved, then update state of retrievedBooks array
          this.setState( {retrievedBooks} )
        }
      })
      // when query state is falsy, i.e., no text input
    } else {
        // update state so retrievedBooks renders nothing, i.e, by default, retrievedBooks is an empty array
        this.setState( {retrievedBooks: []} )
    } 
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          {/* adding link functionality from React Router */}
          <Link
            // specify url path for viewing main page
            to="/fend-react-project-myreads/"
            className="close-search"          
          >Close</Link>
          
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              // set value of input field to current query state
              value={this.state.query}
              // any text entered in input is captured as event and passed into udpateQuery, updating the query state
              onChange={(event) => this.udpateQuery(event.target.value)}
            />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {/* search results will be rendered here */}
            {
              // map over current state of retrievedBooks array and render to the page
              this.state.retrievedBooks.map(retrievedBook => {
                // mutable variable shelf will specify default value, 'none' to pass for books which haven't been shelved
                let shelf = 'none';
                
                // map over array of all books passed as props from BooksApp
                this.props.booksList.map(book => (
                  // check if current book id matches id of retrieved book
                  book.id === retrievedBook.id ?
                  // if match is truthy, set this book's shelf to same as book.shelf
                  shelf = book.shelf :
                  // if match is falsy, book is un-shelved so do nothing
                  ''
                ));
                
                return (
                  // must add unique key prop to each retrieved book as they're rendered
                  <li key={retrievedBook.id}>
                    <Book
                      // pass retrievedBooks data to Book component
                      book={retrievedBook}
                      // pass updateShelf method to Book component using props
                      updateShelf={this.props.updateShelf}
                      // set up attribute to pass default shelf state to Book component
                      currentShelf={shelf}
                    />
                  </li>
                )
              })
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
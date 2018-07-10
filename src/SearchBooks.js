import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SingleBook from './SingleBook.js'

class SearchBooks extends Component {
  state = {
    query: ''
  }
  updateQuery = (query) => {
    this.setState(() => ({
      query: query
    }))
  }
  render() {

    const showingBooks = this.state.query === ''
      ? this.props.books
      : this.props.books.filter((b) => (
        b.title.toLowerCase().includes(this.state.query.toLowerCase())
      ))

    return(
      <div className="search-books">

        <div className="search-books-bar">
          <Link className="close-search" to='/'>
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event)=> this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks.map((book) => {
                return (
                  <SingleBook key={book.id} title={book.title} authors={book.authors} image={book.imageLinks.smallThumbnail} />
                )
            })}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks

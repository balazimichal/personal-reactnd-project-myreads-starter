import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SingleBook from './SingleBook.js'
import * as BooksAPI from './BooksAPI'


class SearchBooks extends Component {
  state = {
    query: '',
    books: [],
    searchBooks: []
  }


  componentDidMount() {
    this.setState(() => ({
      books: this.props.books
    }))
  }



  updateQuery = (query) => {
    this.setState(() => ({
      query
    }), () => {
        this.searchBooks(this.state.query)
        //console.log(this.state.query)
    })

  }

  


  searchBooks(query) {
    if (query !== '') {
      BooksAPI.search(query)
        .then((searchBooks) => {
          // TODO: reconcile two states searchBooks and books
          if(searchBooks.length > 0) {
            this.state.books.filter((book) => {
              searchBooks.filter((b) => {

                if (b.id === book.id) {
                  b.shelf = book.shelf
                  console.log(b.id, b.shelf, book.shelf)
                }
              })


            })
          }




          this.setState(() => ({
            searchBooks: searchBooks
          }))
        })
    } else {
      this.setState(() => ({
        searchBooks : ''
      }))
    }
  }





  
  render() {


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
                onChange={(event) => this.updateQuery(event.target.value)}
              />



          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">

            {this.state.searchBooks && this.state.searchBooks.length > 0 && this.state.searchBooks.map((searchBook) => {
                return (
                  <SingleBook key={searchBook.id} book={searchBook} changeShelf={this.props.changeShelf} />
                )
            })}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
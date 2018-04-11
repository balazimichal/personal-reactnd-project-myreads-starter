import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SingleBook from './SingleBook.js'


class ListBooks extends Component {
  render() {
    console.log(this.props.books)
    return (
      //const books = this.props.books

      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books.map((book) => {
                    if(book.shelf === 'currentlyReading'){
                      return (
                        <SingleBook key={book.id} title={book.title} authors={book.authors} image={book.imageLinks.smallThumbnail} />
                      )
                    }
                  })}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books.map((book) => {
                    if(book.shelf === 'wantToRead'){
                      return (
                          <SingleBook key={book.id} title={book.title} authors={book.authors} image={book.imageLinks.smallThumbnail} />
                      )
                    }
                  })}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books.map((book) => {
                    if(book.shelf === 'read'){
                      return (
                        <SingleBook key={book.id} title={book.title} authors={book.authors} image={book.imageLinks.smallThumbnail} />
                      )
                    }
                  })}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>
            Add a book
          </Link>
        </div>
      </div>
    )
  }
}

export default ListBooks

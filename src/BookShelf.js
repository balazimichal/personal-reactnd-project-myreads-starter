import React, { Component } from 'react'
import SingleBook from './SingleBook.js'

class BookShelf extends Component {
    render() {
        return (

            <div className="bookshelf">
                <h2 className="bookshelf-title">
                    {this.props.shelf == 'currentlyReading' && 'Currently reading'}
                    {this.props.shelf == 'wantToRead' && 'Want to read'}
                    {this.props.shelf == 'read' && 'Read'}
                 </h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book) => {
                            if (book.shelf === this.props.shelf) {
                                return (
                                    <SingleBook key={book.id} book={book} changeShelf={this.props.changeShelf} />
                                )
                            }
                        })}
                    </ol>
                </div>
            </div>

        )
    }
}


export default BookShelf
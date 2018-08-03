import React, { Component } from 'react'
import SingleBook from './SingleBook.js'

const BookShelf = ( props ) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">
            {props.shelf === 'currentlyReading' && 'Currently reading'}
            {props.shelf === 'wantToRead' && 'Want to read'}
            {props.shelf === 'read' && 'Read'}
        </h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {props.books.map((book) => {
                    if (book.shelf === props.shelf) {
                        return (
                            <SingleBook key={book.id} book={book} changeShelf={props.changeShelf} />
                        )
                    }
                })}
            </ol>
        </div>
    </div>
);

export default BookShelf
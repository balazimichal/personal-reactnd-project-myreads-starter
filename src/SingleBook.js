import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class SingleBook extends Component {

  changeShelf = (book, shelf) => {
    console.log(book);
    console.log(shelf);
    BooksAPI.update(book, shelf);
  };

  render(){
    return(
      <li>
        <div className="book">
          <div className="book-top">

            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})` }}></div>

            <div className="book-shelf-changer">
              <select onChange={(event) => this.changeShelf(this.props.book.id, event.target.value)} value={this.props.book.shelf || 'none'}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors}</div>
        </div>
      </li>
    )
  }
}

export default SingleBook

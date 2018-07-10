import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class SingleBook extends Component {

  changeShelf = (book, shelf) => {
    console.log(book);
    BooksAPI.update(book, shelf);
  };

  render(){
    return(
      <li key={this.props.key}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.image})` }}></div>
            <div className="book-shelf-changer">
              <select onChange={(event) => this.changeShelf(this.props.id, event.target.value)} value={this.props.shelf || 'none'}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.title}</div>
          <div className="book-authors">{this.props.authors}</div>
        </div>
      </li>
    )
  }
}

export default SingleBook

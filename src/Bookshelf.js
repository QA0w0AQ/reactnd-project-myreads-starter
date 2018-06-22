import React, { Component } from 'react';
import BooksList from './BooksList';


class Bookshelf extends Component {

    
    render () {
        const { updateShelf,books } = this.props
        return (
            <div>
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <BooksList books = {books.filter(book=>book.shelf === "currentlyReading")} updateShelf = { updateShelf }
                />
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    <BooksList books = {books.filter(book=>book.shelf === "wantToRead")} updateShelf = { updateShelf }/>
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    <BooksList books = {books.filter(book=>book.shelf === "read")} updateShelf = { updateShelf }/>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
            </div>
        )
    }
}

export default Bookshelf;
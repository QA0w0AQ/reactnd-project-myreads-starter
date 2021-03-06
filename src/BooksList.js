import React, { Component } from 'react';


class BooksList extends Component {
    
    
    render () {
        const { updateShelf,books } = this.props    
        return (
        <ol className="books-grid">
            {books.map((book,index)=>(
                <li key={index}>
                <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, 
                    height: 193, 
                    backgroundImage: `url("${book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : 'noImage'}")` 
                    }}></div>
                    <div className="book-shelf-changer">
                        <select name="select" value={book.shelf} onChange={(event) => updateShelf(book, event.target.value)}>
                        <option value="move">Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                        </select>
                    </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                    </div>
                </li>
            ))}
        </ol>
        )
    }
}

export default BooksList;
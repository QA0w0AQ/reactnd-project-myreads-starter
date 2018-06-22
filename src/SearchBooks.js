import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BooksList from './BooksList';

class SearchBooks extends Component {
    state = {
        books: [],
        query: '',
        newBooks: []
    }
    
    Search = (event) => {
        
        const query = event.target.value.trim()
        this.setState({ query: query })
            
        if (query) {
            BooksAPI.search(query).then((books) => {
              if(books.length > 0) {
                this.setState({books})
              }else {
                this.setState({ books: []})
              }
            })
        } else this.setState({books: []})
    }

    check = () => {
        const  nowBooks= [...this.state.books]
        const beforeBooks = [...this.props.books]
        for (const nowBook of nowBooks) {
            for (const beforeBook of beforeBooks) {
                if (nowBook.id  === beforeBook.id) {
                    nowBook.shelf = beforeBook.shelf
                }
            }
        }return nowBooks
    }

    render () {
        
        const { updateShelf } = this.props
        
        let searchMessage;
        if (this.state.query ==='') {
            searchMessage = (
                <h3 style={{ textAlign :'center'}}>
                    Please write one or more words to search books.
                </h3>
            )
        } else if (this.state.books.length ===0) {
            searchMessage = (
                <h3 style={{ textAlign :'center'}}>
                    There are no match books, Please try different keywords.
                </h3>
            )
        }
        



        return (
            <div>
                <div className="search-books">
                <div className="search-books-bar">
                <Link to='/' className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                <input 
                    type="text"
                    placeholder="Search by title or author"
                    onChange={this.Search}
                    value={this.state.query}
                />
                </div>
                </div>
                <div className="search-books-results">
                {searchMessage}
               
                    <BooksList books={this.check()}
                    updateShelf = { updateShelf }
                    />

                </div>
                </div>
            </div>
        )
    }
}

export default SearchBooks;
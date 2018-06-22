import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import './App.css'
import Bookshelf from './Bookshelf';
import SearchBooks from './SearchBooks';
import { Link } from 'react-router-dom';

class BooksApp extends Component {
  state = {  
    books:[]
  }


  componentDidMount () {
    BooksAPI.getAll().then((books) => {
      this.setState({books});
    })
  } 

  updateShelf = (currentBook, currentShelf) => {
    BooksAPI.update(currentBook, currentShelf).then(() => {
      currentBook.shelf = currentShelf
      const updatedBooks = this.state.books.filter(book=>book.id !==currentBook.id)
      updatedBooks.push(currentBook);
      this.setState({books: updatedBooks})
    })
  }

  render() {
      return (
      <div className="app">
        <Route exact path='/' render={()=>(
        <div>
        <Bookshelf 
        books={this.state.books}
        updateShelf = {this.updateShelf}  
        />
        <div className="open-search">
        <Link to='/search'>Add a book</Link>
        </div>
        </div>
      )}/>
        <Route path='/search' render={()=>(
        <SearchBooks
        books={this.state.books}
        updateShelf = {this.updateShelf}
        />
      )}/>
      </div>
    )
  }
}

export default BooksApp;

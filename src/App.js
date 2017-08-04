import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends React.Component {
    state = {
        books: [],
    };

    componentDidMount() {
        this._getBooks();
    }

    _getBooks = () => {
        BooksAPI.getAll().then((books) => {
            this._setBooks(books)
        });
    };

    _setBooks = (books) => {
        this.setState({
            books,
        });
    };

    _onUpdateShelf = (updatedBook, shelf) => {
        const {books} = this.state;
        let updatedBooks = books;

        const bookInCollection = books.some((book) => {
            return book.id === updatedBook.id;
        });

        if (bookInCollection) {
            updatedBooks = books.map((book) => {
                if (book.id === updatedBook.id) {
                    BooksAPI.update(book, shelf);
                    book.shelf = shelf;
                }
                return book;
            });
        } else {
            updatedBooks.push(updatedBook);
            BooksAPI.update(updatedBook, shelf);
        }

        this.setState({books: updatedBooks});
    };

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <ListBooks
                        books={this.state.books}
                        onUpdateShelf={this._onUpdateShelf}
                    />
                )}/>
                <Route path="/search" render={() => (
                    <SearchBooks
                        books={this.state.books}
                        onUpdateShelf={this._onUpdateShelf}
                    />
                )}/>
            </div>
        )
    }
}

export default BooksApp

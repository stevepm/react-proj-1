import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Books from './Books'

class SearchBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateShelf: PropTypes.func.isRequired
    };

    state = {
        queryResults: []
    };

    _searchBooks = (query) => {
        if (query.length > 0) {
            BooksAPI.search(query, 10).then(
                (books) => {
                    this._updateBooks(books)
                },
                (err) => {
                    console.log("error" + err)
                }
            )
        } else {
            this.setState({queryResults: []})
        }
    };

    _updateBooks = (books) => {
        if (Array.isArray(books)) {
            const booksObj = {};
            this.props.books.forEach((book) => {
                booksObj[book.id] = book.shelf
            });

            const updatedBooks = books.map((book) => {
                const shelf = booksObj[book.id];
                if (shelf) {
                    book.shelf = shelf;
                }

                return book;
            });

            this.setState({queryResults: updatedBooks})
        } else {
            this.setState({queryResults: []})
        }
    };

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to="/"
                        className="close-search">
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={(event) => this._searchBooks(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <Books books={this.state.queryResults} onUpdateShelf={this.props.onUpdateShelf}/>
                </div>
            </div>
        )
    }
}

export default SearchBooks
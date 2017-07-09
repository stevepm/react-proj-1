import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Books from './Books'

class SearchBooks extends Component {
    state = {
        books: []
    }

    _searchBooks = (query) => {
        if (query.length > 0) {
            BooksAPI.search(query, 10).then(
                (books) => {
                    this._maybeUpdateBooks(books)
                },
                (err) => {
                    console.log("error" + err)
                }
            )
        } else {
            this.setState({books: []})
        }
    }

    _maybeUpdateBooks = (books) => {
        if (Array.isArray(books)) {
            this.setState({books})
        } else {
            this.setState({books: []})
        }
    }

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
                    <Books books={this.state.books}/>
                </div>
            </div>
        )
    }
}

export default SearchBooks
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'

class ListBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateShelf: PropTypes.func.isRequired
    };

    _booksState = (books) => {
        let reading = [], wantToRead = [], read = [];
        books.forEach((book) => {
            switch (book.shelf) {
                case "currentlyReading":
                    reading.push(book);
                    break;
                case 'wantToRead':
                    wantToRead.push(book);
                    break;
                default:
                    read.push(book);
                    break;
            }
        });

        return {
            reading: reading,
            wantToRead: wantToRead,
            read: read
        };
    };

    render() {
        const {books, onUpdateShelf} = this.props,
            booksObj = this._booksState(books);


        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf books={booksObj.reading} title="Currently Reading" onUpdateShelf={onUpdateShelf}/>
                        <BookShelf books={booksObj.wantToRead} title="Want to Read" onUpdateShelf={onUpdateShelf}/>
                        <BookShelf books={booksObj.read} title="Read" onUpdateShelf={onUpdateShelf}/>
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>
                        Add a book
                    </Link>
                </div>
            </div>
        )
    }
}

export default ListBooks
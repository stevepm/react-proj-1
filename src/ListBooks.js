import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Books from './Books'

class ListBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reading: [],
            wantToRead: [],
            read: []
        };
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
                this._initializeBooks(books)
            }
        );
    }

    _initializeBooks = (books) => {
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

        this.setState({
            reading: reading,
            wantToRead: wantToRead,
            read: read
        });
    };

    render() {
        const {reading, wantToRead, read} = this.state;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <Books books={reading}/>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <Books books={wantToRead}/>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <Books books={read}/>
                            </div>
                        </div>
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
import React, {Component} from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class Books extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateShelf: PropTypes.func.isRequired
    };

    render() {
        return (
            <ol className="books-grid">
                {this._books()}
            </ol>
        )
    }

    _books = () => {
        const {onUpdateShelf, books} = this.props;

        if (books.length > 0) {
            return books.map((book) => {
                return <Book key={book.id} book={book} onUpdateShelf={onUpdateShelf}/>
            })
        } else {
            return (
                <div>No books for given query!</div>
            )
        }
    }
}

export default Books
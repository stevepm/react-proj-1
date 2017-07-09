import React, {Component} from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class Books extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired
    }

    render() {
        return (
            <ol className="books-grid">
                {this._books()}
            </ol>
        )
    }

    _books = () => {
        const {books} = this.props

        if (books.length > 0) {
            return books.map((book) => {
                return <Book key={book.id} book={book}/>
            })
        } else {
            return (
                <div>No books available for given query</div>
            )
        }
    }
}

export default Books
import React, {Component} from 'react'
import Book from './Book'

class Books extends Component {
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
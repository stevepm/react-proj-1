import React, {Component} from 'react'
import Books from './Books'
import PropTypes from 'prop-types'

class BookShelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateShelf: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired
    };

    render() {
        const {books, title, onUpdateShelf} = this.props;

        if (books.length > 0) {
            return (
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{title}</h2>
                    <div className="bookshelf-books">
                        <Books books={books} onUpdateShelf={onUpdateShelf}/>
                    </div>
                </div>
            )
        }
        return null
    }
}

export default BookShelf
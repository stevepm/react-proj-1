import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BookOptions from './BookOptions'

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        onUpdateShelf: PropTypes.func.isRequired
    };

    updateShelfWithBook = (event) => {
        this.props.onUpdateShelf(this.props.book, event.target.value)
    };

    render() {
        const {book} = this.props;

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128,
                            height: 193,
                            backgroundImage: 'url(' + book.imageLinks.thumbnail + ')'
                        }}></div>
                        <BookOptions bookShelf={book.shelf} onUpdateShelf={this.updateShelfWithBook}/>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )
    }
}

export default Book
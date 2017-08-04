import React, {Component} from 'react'
import PropTypes from 'prop-types'

class BookOptions extends Component {
    static propTypes = {
        bookShelf: PropTypes.string.isRequired,
        onUpdateShelf: PropTypes.func.isRequired
    };

    render() {
        const {onUpdateShelf, bookShelf} = this.props;

        return (
            <div className="book-shelf-changer">
                <select onChange={onUpdateShelf} defaultValue={bookShelf}>
                    {this._shelves()}
                </select>
            </div>
        )
    }

    _shelves = () => {
        const shelves = ["currentlyReading", "wantToRead", "read", "none"],
            shelfText = {
                "currentlyReading": "Currently Reading",
                "wantToRead": "Want to Read",
                "read": "Read",
                "none": "None"
            };

        const shelfList = shelves.map((shelf) =>
            <option key={shelf} value={shelf}>{shelfText[shelf]}</option>
        );
        shelfList.unshift(<option value="none" key={"none1"} disabled>Move to...</option>);

        return shelfList;
    }
}

export default BookOptions
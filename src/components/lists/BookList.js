import React, { Component } from 'react';
import Book from '../representation/Book';

// const BookList = props => {
//     return (
//         props.books.map((book, index) => {
//             return (
//                 <Book
//                     bookName={book.bookName}
//                     writer={book.writer}
//                     delete={() => props.deleteBookState(index)}
//                     key={book.id}
//                     inputName={(event) => props.changeWithInputState(event, index)}
//                 />
//             );
//         })
//     );
// }

class BookList extends Component {
    constructor(props) {
        super(props);
        console.log("BookList constructor");
    }

    componentDidMount() {
        console.log("BookList componentDidMount!");
    }

    UNSAFE_componentWillMount() {
        console.log("BookList componentWillMount!");
    }

    render() {
        console.log("BookList render");
        return (
            this.props.books.map((book, index) => {
                return (
                    <Book
                        bookName={book.bookName}
                        writer={book.writer}
                        delete={() => this.props.deleteBookState(index)}
                        key={book.id}
                        inputName={(event) => this.props.changeWithInputState(event, index)}
                    />
                );
            })
        );
    }
}

export default BookList;
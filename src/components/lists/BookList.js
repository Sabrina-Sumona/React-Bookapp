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

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("U BookList componentWillReceiveProps!", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("U BookList shouldComponentUpdate!", nextProps, nextState);
        return true;
        // return false;
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log("U BookList componentWillUpdate!");
    }

    componentDidUpdate() {
        console.log("U BookList componentDidUpdate!");
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
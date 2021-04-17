import React from 'react';
// import React, { Component } from 'react';
import Book from '../representation/Book';
import { withRouter } from 'react-router-dom';

const BookList = props => {
    // console.log(props);
    return (
        props.books.map((book, index) => {
            return (
                <Book
                    bookName={book.bookName}
                    writer={book.writer}
                    // delete={() => props.deleteBookState(index)}
                    key={book.id}
                    // inputName={(event) => props.changeWithInputState(event, index)}
                    // inputName={(event) => props.selectedBookHandler(book.id)
                    // }
                    // selectedBookHandler={() => props.selectedBookHandler(book)}
                    selectedBookHandler={() => props.selectedBookHandler(book.id)}
                />
            );
        })
    );
}

// wrapping with router to show the router related props
export default withRouter(BookList);


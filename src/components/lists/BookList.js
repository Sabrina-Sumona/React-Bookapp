import React from 'react';
import Book from '../representation/Book';

const BookList = (props) => {
    return (
        props.books.map((book, index) => {
            return (
                <Book
                    bookName={book.bookName}
                    writer={book.writer}
                    delete={() => this.deleteBookState(index)}
                    key={book.id}
                    inputName={(event) => this.changeWithInputState(event, index)}
                />
            );
        })
    );
}

export default BookList;
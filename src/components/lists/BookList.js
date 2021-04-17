import React from 'react';
// import React, { Component } from 'react';
import Book from '../representation/Book';
import { withRouter, Link } from 'react-router-dom';

const BookList = props => {
    // console.log(props);
    return (
        props.books.map((book, index) => {
            return (
                // <Link to={"/" + book.id} key={book.id} style={{ textDecoration: "none", color: "darkblue" }}>
                //  <Link to={"/books/" + book.id} key={book.id} style={{ textDecoration: "none", color: "darkblue" }}>
                <Link to={"/book" + book.id} key={book.id} style={{ textDecoration: "none", color: "darkblue" }}>
                    <Book
                        bookName={book.bookName}
                        writer={book.writer}
                        selectedBookHandler={() => props.selectedBookHandler(book.id)}
                    />
                </Link>
            );
        })
    );
}

// wrapping with router to show the router related props
export default withRouter(BookList);


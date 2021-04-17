import React from 'react';

const BookDetail = props => {
    // console.log(props.book);
    // console.log(props);
    if (props.book === null) return <div></div>
    return (
        <div style={{ textDecoration: "none", color: "darkblue" }}>
            <h1>{props.book.bookName}</h1>
            <h3>{props.book.writer}</h3>
            <p style={{ textAlign: "justify", color: "black", padding: "10px" }}>{props.book.description}</p>
        </div>
    );
}

export default BookDetail;
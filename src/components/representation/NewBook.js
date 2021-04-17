import React from 'react';

const NewBook = props => {
    // console.log(props);
    const style = {
        border: "5px solid darkblue",
        borderRadius: "5px",
        backgroundColor: "black",
        color: "white",
        display: "inline-block",
        paddingLeft: "10px",
        paddingRight: "15px",
        cursor: "default",
    };
    return (
        <div>
            <h1 style={style}>New Book Entry</h1>
        </div>
    );
}

export default NewBook;
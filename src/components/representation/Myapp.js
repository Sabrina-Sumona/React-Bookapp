import React from 'react';

function Myapp() {
    const mystyle = {
        color: "white",
        backgroundColor: "Blue",
        padding: "20px",
      };
    //  using JSX
    //  similar to html but there are some differences
    // we can do other js codes here
    return (
        // here div is a root element
        // in jsx there are only one root element can exist
        <div className="Myapp" style={mystyle}>
            <h1>Hello World!!</h1>
            <ul>
                <li> Sabrina</li>
                <li> Naorin</li>
                <li> Sumona</li>
            </ul>
            <h4>Thank you!</h4>
            <div>
                <h1>Hello World!!</h1>
                <h1>Hello World!!</h1>
                <h1>Hello World!!</h1>
            </div>
        </div>

    );
}

export default Myapp;
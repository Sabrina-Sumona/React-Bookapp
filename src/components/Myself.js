// import React, { Component } from 'react';
import React from 'react';

// static function
// function Myself() {
//     return (
//       <div>
//         <h3>This is Sabrina Naorin Sumona...</h3>
//       </div>
//     );
//     // return React.createElement('div', null, React.createElement('h1', null, "This is Sabrina Naorin Sumona..."));
//   }

// arrow function
// dynamic function
let Myself = (props) => {
    // here props is the argument which is an object with the property & it's value
    console.log(props);
    return (
        <div>
            {/* we can write js code between {...} */}
            {/* Math.random() is a js method */}
            <h4>Random number: {Math.random()}</h4>
            <h3>{props.number}. Hello {props.name}!</h3>
            <h4>{props.children} Thank you.</h4>
        </div>
    );
}

// // dynamic class
// class Myself extends Component {
//     // constructor(props) {
//     //     super(props);
//     // }
//     render() {
//         console.log(this.props);
//         return (
//             <div>
//                 <h4>Random number: {Math.random()}</h4>
//                 <h3>{this.props.number}. Hello {this.props.name}!</h3>
//                 <h4>{this.props.children} Thank you.</h4>
//             </div>
//         );
//     }
// }

export default Myself;
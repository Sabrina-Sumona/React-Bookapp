import React, { Component } from 'react';
import './App.css';
// import Myself from './components/Myself';
// import Myapp from './components/Myapp';
import Book from './components/Book';

// generally component renames as the file name which will be exported

// // Functional Component
// function App() {
//   //  using JSX
//   //  similar to html but there are some differences
//  // we can do other js codes here
//   return (
//     // here div is a root element
//     // in jsx there are only one root element can exist
//     // <div className="App">
//     //   <h1>Hello World!</h1>
//     //   <Myself />
//     // </div>
//   );
//   // using react method React.createElement
//   // return React.createElement('div', { className: "App" }, React.createElement('h1', null, "Hello World!"), <Myself />);
// }

// // Class Component
// class App extends Component {
//     // we can do other js codes here
//     render() {
//         // Component is a class
//         // let obj = new Component();
//         // console.log(obj);
//         return (
//             <div className="App">
//                 {/* <h1>Hello World!!</h1>
//         <Myself number="1" name="Sabrina">Welcome to React.</Myself>
//         <Myself number="2" name="Naorin" />
//         <Myself number="3" name="Sumona" /> */}
//                 <h1>Book List</h1>
//                 <Book bookName="1984" writer="George Orwell" />
//                 <Book bookName="The Da Vinci Code" writer="Dan Brown" />
//                 <Book bookName="The Alchemist" writer="Paulo Coelho" />
//                 {/* <div><Myapp /></div> */}
//             </div>
//         );
//     }
// }

class App extends Component {
    // State
    // after react version 16.8, state can be defined without constructor
    // State is the own info of a component
    // where props is the passing info from the outside of the components
    // if we want to display some props related info we can use functional component
    // but we want to deal with states we have to use class components
    // state is basicallly an object
    // constructor() {
    //   super();
    //   this.state = {};
    // }
    state = {
        books: [
            { bookName: "1984", writer: "George Orwell" },
            { bookName: "The Da Vinci Code", writer: "Dan Brown" },
            { bookName: "The Alchemist", writer: "Paulo Coelho" }
        ],
        // we can write different properties also in the state
        // otherProp: "I am some other Prop"
    }

    // method
    changeBookState = newBookName => {
        // normal js: this.state.books[0].bookName = "1974" 
        // but it's wrong
        // if we want to change in state, we must use setState method of component class
        // other properties remain unchanged 
        this.setState({
            books: [
                // { bookName: "Nineteen Eighty-Four", writer: "George Orwell" },
                { bookName: newBookName, writer: "George Orwell" },
                { bookName: "The Da Vinci Code", writer: "Dan Brown" },
                { bookName: "Metmorphosis", writer: "Franz Kafka" }
            ]
        });
    }

    changeWithInputState = event => {
        this.setState({
          books: [
            { bookName: event.target.value, writer: "George Orwell" },
            { bookName: "The Da Vinci Code", writer: "Dan Brown" },
            { bookName: "Metmorphosis", writer: "Franz Kafka" }
          ]
        });
      }

    render() {
        // console.log(this.state);
        // styling as object
        const style = {
            border: "2px solid blue",
            borderRadius: "5px",
            backgroundColor: "black",
            color: "white",
          };
        return (
            <div className="App">
                <h1 style={style}>Book List</h1>
                {/* <Book bookName={this.state.books[0].bookName} writer={this.state.books[0].writer} />
                <Book bookName={this.state.books[1].bookName} writer={this.state.books[1].writer} />
                <Book bookName={this.state.books[2].bookName} writer={this.state.books[2].writer} /> */}
                {/* this button will be clicked automatically as page loaded if we use () after the method */}
                {/* <button onClick={this.changeBookState()}>Change State</button> */}
                {/* <button onClick={this.changeBookState}>Change State</button> */}
                {/* <button onClick={this.changeBookState.bind(this, "Nineteen Eighty-Four")}>Change State</button> */}
                <button onClick={() => this.changeBookState("Nineteen Eighty-Four")}>Change State</button>
                <input type="text" onChange={this.changeWithInputState} />
                <Book
                    bookName={this.state.books[0].bookName}
                    writer={this.state.books[0].writer}
                    inputName={this.changeWithInputState} />
                <Book
                    bookName={this.state.books[1].bookName}
                    writer={this.state.books[1].writer} />
                <Book
                    bookName={this.state.books[2].bookName}
                    writer={this.state.books[2].writer}
                    // change={this.changeBookState} 
                    change={this.changeBookState.bind(this, "Nineteen 84")}  
                    />
            </div>
        );
    }
}

export default App;
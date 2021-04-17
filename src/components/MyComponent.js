
// import Myself from './representation/Myself';
// import Myapp from './representation/Myapp';
// import Book from './representation/Book';
// books: [
        //     // each components are the child which needs unique id
        //     // if we delete any compenent & insert another one that will contain another unique id
        //     //    we can pass the id into key
        //     { id: 1, bookName: "1984", writer: "George Orwell" },
        //     { id: 2, bookName: "The Da Vinci Code", writer: "Dan Brown" },
        //     { id: 3, bookName: "The Alchemist", writer: "Paulo Coelho" }
        // ],
        // // we can write different properties also in the state
        // // otherProp: "I am some other Prop"
        // showBooks: true
        // // showBooks: false
// generally component renames as the file name which will be exported
// // Functional Component
// function MainComponent() {
    // console.log("MainCompoent render");
        // console.log(this.state);
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
// class MainComponent extends Component {
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

    // here MainComponent is a stateful component & BookList, Book, Myapp, Myself etc. are stateless component
    // stateful component has props & states
    // stateless component has only props
    // stateful component is also called container component
    // stateless component is also called presentational component
    // we can do logical works in container component
    // we can represent informations in presentational component
    // basically functional component is used to represent the presentational component
    // basically class component is used to represent the container component
    // but we can also represent the container component by using the functional component by using react hooks
    // and we can also represent the presentational component by using the class
    // but we should always try to use the functional in case of presentational component
    // and we should try to maximize the presentational component rather than the container componet to make the working easy
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         books: books,
    //         showBooks: true
    //     }
    //     // console.log("MainComponent constructor!");
    // }
// // method
    // changeBookState = newBookName => {
    //     // normal js: this.state.books[0].bookName = "1974" 
    //     // but it's wrong
    //     // if we want to change in state, we must use setState method of component class
    //     // other properties remain unchanged 
    //     this.setState({
    //         books: [
    //             // { bookName: "Nineteen Eighty-Four", writer: "George Orwell" },
    //             { bookName: newBookName, writer: "George Orwell" },
    //             { bookName: "The Da Vinci Code", writer: "Dan Brown" },
    //             { bookName: "Metmorphosis", writer: "Franz Kafka" }
    //         ]
    //     });
    // }

    // changeWithInputState = event => {
    //     this.setState({
    //         books: [
    //             { bookName: event.target.value, writer: "George Orwell" },
    //             { bookName: "The Da Vinci Code", writer: "Dan Brown" },
    //             { bookName: "Metmorphosis", writer: "Franz Kafka" }
    //         ]
    //     });
    // }

    // changeWithInputState = (event, index) => {
    //     const book = {
    //         ...this.state.books[index]
    //     }
    //     book.bookName = event.target.value;
    //     const books = [...this.state.books];
    //     books[index] = book;

    //     this.setState({ books: books });
    // }

    // deleteBookState = index => {
    //     // const books = this.state.books;
    //     // const books = this.state.books.slice();
    //     // const books = this.state.books.map(item => item);
    //     const books = [...this.state.books];
    //     books.splice(index, 1);
    //     this.setState({
    //         books: books
    //     });
    // };

    // toggleBooks = () => {
    //     this.setState({ showBooks: !this.state.showBooks });
    // }

    // // UNSAFE_componentWillMount() {
    // //     console.log("MainComponent componentWillMount!");
    // // }


    // // UNSAFE_componentWillUpdate(nextProps, nextState) {
    // //     console.log("U MainComponent componentWillUpdate!");
    // // }

    // componentDidMount() {
    //     console.log("MainComponent componentDidMount!");
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("U MainComponent shouldComponentUpdate!", nextProps, nextState);
    //     return true;
    //     // return false;
    // }

    // componentDidUpdate() {
    //     console.log("U MainComponent componentDidUpdate!");
    // }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log("MainComponent getDerivedStateFromProps", nextProps, prevState);
    //     return prevState;
    // }

    // getSnapshotBeforeUpdate() {
    //     console.log("U MainComponent getSnapshotBeforeUpdate");
    // }

        //const booksState = this.state.books;
        //console.log(booksState);
        //map(function(item,index,array))
        // const books = booksState.map(function (book) {
        //     // console.log(book);
        //     // console.log(book.bookName);
        //     // console.log(book.writer);
        // });

        // //dynamic way
        // const books = this.state.books.map((book, index) => {
        //     return (
        //         // <Book />
        //         <Book
        //             bookName={book.bookName}
        //             writer={book.writer}
        //             delete={() => this.deleteBookState(index)}
        //             key={book.id}
        //             inputName={(event) => this.changeWithInputState(event, index)}
        //         />
        //     );
        // });
        // // console.log(books);

        // better solution

        // let books = null;
        // if (this.state.showBooks) {
        // books = <BookList
        //     books={this.state.books}
        //     deleteBookState={this.deleteBookState}
        //     changeWithInputState={this.changeWithInputState}
        // />;
        // }
        // if (this.state.showBooks) {
        //     books = this.state.books.map((book, index) => {
        //         return (
        //             <Book
        //                 bookName={book.bookName}
        //                 writer={book.writer}
        //                 delete={() => this.deleteBookState(index)}
        //                 key={book.id}
        //                 inputName={(event) => this.changeWithInputState(event, index)}
        //             />
        //         );
        //     });
        // }
        // const books = <BookList
        //     books={this.state.books}
        // // deleteBookState={this.deleteBookState}
        // // changeWithInputState={this.changeWithInputState}
        // />;
        // console.log(books);
        // return (
        // <div className="App">
        //     <h1 style={style}>Book List</h1>
        //     {/* <Book bookName={this.state.books[0].bookName} writer={this.state.books[0].writer} />
        //     <Book bookName={this.state.books[1].bookName} writer={this.state.books[1].writer} />
        //     <Book bookName={this.state.books[2].bookName} writer={this.state.books[2].writer} /> */}
        //     {/* this button will be clicked automatically as page loaded if we use () after the method */}
        //     {/* <button onClick={this.changeBookState()}>Change State</button> */}
        //     {/* <button onClick={this.changeBookState}>Change State</button> */}
        //     {/* <button onClick={this.changeBookState.bind(this, "Nineteen Eighty-Four")}>Change State</button> */}
        //     {/* <button onClick={() => this.changeBookState("Nineteen Eighty-Four")}>Change State</button>
        //     <input type="text" onChange={this.changeWithInputState} /> */}
        //     {/* <Book
        //         bookName={this.state.books[0].bookName}
        //         writer={this.state.books[0].writer}
        //         inputName={this.changeWithInputState} />
        //     <Book
        //         bookName={this.state.books[1].bookName}
        //         writer={this.state.books[1].writer} />
        //     <Book
        //         bookName={this.state.books[2].bookName}
        //         writer={this.state.books[2].writer}
        //         // change={this.changeBookState} 
        //     change={this.changeBookState.bind(this, "Nineteen 84")} />*/}
        //     {/* {books} */}
        //     // <button onClick={this.toggleBooks}>Toggle Books</button>
        //     {/* {this.state.showBooks ? books : null} */}
        //     {books}
        // </div>
        // );
        //     }
        // }
        // "scripts": {
        //   "start": "react-scripts start",
        //   "build": "react-scripts build",
        //   "test": "react-scripts test",
        //   "eject": "react-scripts eject"
        // },

        // export default MainComponent;

        // class BookList extends Component {
//     constructor(props) {
//         super(props);
//         console.log("BookList constructor");
//     }

//     // componentDidMount() {
//     //     console.log("BookList componentDidMount!");
//     // }

//     // // UNSAFE_componentWillMount() {
//     // //     console.log("BookList componentWillMount!");
//     // // }

//     // // UNSAFE_componentWillReceiveProps(nextProps) {
//     // //     console.log("U BookList componentWillReceiveProps!", nextProps);
//     // // }

//     // // UNSAFE_componentWillUpdate(nextProps, nextState) {
//     // //     console.log("U BookList componentWillUpdate!");
//     // // }

//     // shouldComponentUpdate(nextProps, nextState) {
//     //     console.log("U BookList shouldComponentUpdate!", nextProps, nextState);
//     //     return true;
//     //     // return false;
//     // }


//     // componentDidUpdate() {
//     //     console.log("U BookList componentDidUpdate!");
//     // }

//     // static getDerivedStateFromProps(nextProps, prevState) {
//     //     console.log("BookList getDerivedStateFromProps", nextProps, prevState);
//     //     return prevState;
//     // }

//     // getSnapshotBeforeUpdate() {
//     //     console.log("U BookList getSnapshotBeforeUpdate");
//     // }

//     render() {
//         // console.log("BookList render");
//         return (
//             this.props.books.map((book, index) => {
//                 return (
//                     <Book
//                         bookName={book.bookName}
//                         writer={book.writer}
//                         delete={() => this.props.deleteBookState(index)}
//                         key={book.id}
//                         inputName={(event) => this.props.changeWithInputState(event, index)}
//                     />
//                 );
//             })
//         );
//     }
// }

// export default BookList;

// const Book = props => {
//     // console.log("I am from Book");
//     // console.log(props);
//     return (
//         <div className="Book">
//             {/* <h3 onClick={props.change}>Book: {props.bookName}</h3> */}
//             <h3 onClick={props.delete}>Book: {props.bookName}</h3>
//             <h4>Writer: {props.writer}</h4>
//             {/* <input type="text" onChange={props.inputName} /> */}
//             <input type="text" onChange={props.inputName} value={props.bookName} />
//         </div>

//     );
// }

// export default withRouter(Book);
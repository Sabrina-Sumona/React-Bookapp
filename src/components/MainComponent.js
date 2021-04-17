import React, { Component } from 'react';
import BookList from './lists/BookList';
import books from '../resources/books';
import NewBook from './representation/NewBook';
import BookDetail from './representation/BookDetail';
import { Route, NavLink } from 'react-router-dom';

class MainComponent extends Component {
    state = {
        books: books,
        // showBooks: true
        selectedBook: null
    }
    selectedBookHandler = bookId => {
        // filter an object array according to the passing id
        const book = this.state.books.filter(book =>
            book.id === bookId)[0];
        this.setState({
            selectedBook: book
        })
    }

    render() {
        // styling as object
        const style = {
            border: "2px solid blue",
            borderRadius: "5px",
            backgroundColor: "black",
            color: "white",
        };

        const books = <BookList
            books={this.state.books}
            selectedBookHandler={this.selectedBookHandler}
        />;

        return (
            <div className="App">
                {/* when NavLink is used, we can use Nav in the place of div tag */}
                <nav className="nav-bar">
                    <ul>
                        {/* we can use Link and NavLink in the place of a tag */}
                        <li><NavLink to="/" exact>Home</NavLink></li>
                        <li><NavLink to="/new-book">New Book</NavLink></li>
                    </ul>
                </nav>
                {/* it routes when exactly match */}
                <Route path="/" exact render={() =>
                    // if import by using render (not component), we can't see the routers props
                    <div>
                        <h1 style={style}>Book List</h1>
                        {/* <button onClick={this.toggleBooks}>Toggle Books</button> */}
                        {books}
                    </div>}>
                </Route>
                {/* <Route path="/new-book" exact render={() => <NewBook />}></Route> */}
                <Route path="/new-book" exact component={NewBook}></Route>
                <BookDetail book={this.state.selectedBook} />
            </div>
        );
    }
}

export default MainComponent;

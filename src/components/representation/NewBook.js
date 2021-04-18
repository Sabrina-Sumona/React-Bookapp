import React, { Component } from 'react';

// using uncontrolled component
class NewBook extends Component {
    constructor(props) {
        super(props);
        // if createRef is imported we can write createRef(), else React.createRef()
        this.bookName = React.createRef();
        this.writer = React.createRef();
        this.description = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = event => {
        // return an obj
        // console.log(this.bookName);
        console.log(this.bookName.current.name + ": " + this.bookName.current.value);
        // console.log(this.writer);
        // return the current value
        console.log(this.writer.current.name + ": " + this.writer.current.value);
        // console.log(this.description);
        console.log(this.description.current.name + ": " + this.description.current.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>New Book Entry</h1>
                {/* we can handle a form by using controlled component (controlled by state) or uncontrolled component (directly connection with the inputs) */}
                <form onSubmit={this.handleSubmit}>
                    <label>Book Name: </label>
                    <br />
                    <input type="text" name="bookName" ref={this.bookName} />
                    <br />
                    <label>Writer: </label>
                    <br />
                    <input type="text" name="writer" ref={this.writer} />
                    <br />
                    <label>Description: </label>
                    <br />
                    <textarea name="description" ref={this.description} />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div >
        );
    }
}

export default NewBook;
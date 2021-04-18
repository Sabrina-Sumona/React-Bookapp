import React, { Component } from 'react';

class NewBook extends Component {
    // using controlled component
    constructor(props) {
        super(props);
        this.state = {
            bookName: "",
            writer: "",
            description: ""
        }
        // binding all input fields , now each input field does not require to bind in the form*/}
        this.handleInputChange = this.handleInputChange.bind(this);
        // binding the form , now the form does not require to bind inside*/}
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = event => {
        // console.log(event.target);
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name+": "+value);
        this.setState({
            // [] is used to store the function's internal var
            [name]: value
        })
    }

    // componentDidUpdate() {
    //     console.log(this.state);
    // }

    handleSubmit = event => {
        console.log(this.state);
        // we can send info to db from here
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1 className="heading">New Book Entry</h1>
                {/* we can handle a form by using controlled component (controlled by state) or uncontrolled component */}
                <form onSubmit={this.handleSubmit}>
                    {/* if we use binding in the form, then each input field does not require to bind */}
                    <label>Book Name:</label>
                    <br />
                    <input type="text" name="bookName" value={this.state.bookName} onChange={this.handleInputChange} />
                    <br />
                    <label>Writer:</label>
                    <br />
                    <input type="text" name="writer" value={this.state.writer} onChange={this.handleInputChange} />
                    <br />
                    <label>Description:</label>
                    <br />
                    <textarea name="description" value={this.state.description} onChange={this.handleInputChange} />
                    <br />
                    <input type="submit" value="submit" />
                </form>
            </div >
        );
    }
}

export default NewBook;
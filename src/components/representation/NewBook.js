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

    componentDidUpdate() {
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1 className="heading">New Book Entry</h1>
                {/* we can handle a form by using controlled component (controlled by state) or uncontrolled component */}
                <form>
                    <label>Book Name:</label>
                    <br />
                    <input type="text" name="bookName" value={this.state.bookName} onChange={(event) => this.handleInputChange(event)} />
                    <br />
                    <label>Writer:</label>
                    <br />
                    <input type="text" name="writer" value={this.state.writer} onChange={(event) => this.handleInputChange(event)} />
                    <br />
                    <label>Description:</label>
                    <br />
                    <textarea name="description" value={this.state.description} onChange={(event) => this.handleInputChange(event)} />
                    <br />
                    <input type="submit" value="submit" />
                </form>
            </div >
        );
    }
}

export default NewBook;
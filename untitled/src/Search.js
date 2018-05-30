import React, { Component } from 'react'

import { FormControl } from 'react-bootstrap'

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            value: 'hello'
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        // console.log("hello")
        this.setState({ value: e.target.value });
        // console.log(this)
    }

    render() {
        return (
            <div>
                <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder="Search problems"
                    onChange={ this.handleChange }
                />
            </div>
        );
    }
}

export default Search
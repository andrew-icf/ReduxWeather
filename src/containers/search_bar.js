import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};

        this.onInputChange = this.onInputChange.bind(this); // take the existing Fn bind it to this(SearchBar) and then replace the existing Fn with it
    }
    onInputChange(event) {
        this.setState({term: event.target.value}); // this alone will break, need to bind this Fn to the constructor Fn
    }
    onFormSubmit(event) {
        event.preventDefault();
        // Go and fetch Weather Data
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a 5 day forecast"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                 />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

// function mapStateToProps(state) {
//
// }
//
//  connect(mapStateToProps)(SearchBar);

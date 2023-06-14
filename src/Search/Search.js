import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchResultList from './SearchResultList';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
        };
    }

    setResults = (results) => {
        this.setState({ results });
    }

    render() {
        const { results } = this.state;
        return (
            <div className='form-control'>
                <SearchBar setResults={this.setResults} />
                <SearchResultList results={results} />
            </div>
        );
    }
}

export default Search;

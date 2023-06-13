import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="main">
                {/* Another variation with a button */}
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search this blog"
                    />

                    <div className="input-group-append">
                        <button
                            className="btn btn-secondary"
                            type="button"
                            style={{ backgroundColor: "#f26522", borderColor: "#f26522" }}
                        >
                            <i className="fa fa-search" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
import React, { Component } from "react";

class Searchbar extends Component {
    state = {
        searchBar: "",
    };

    handleInputChange = (e) => {
        this.setState({ searchBar: e.target.value });
    };

    handleSearchSubmit = () => {
        this.props.onSearchSubmit(this.state.searchBar);
    };

    render() {
        return (
            <div className="Searchbar">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    this.handleSearchSubmit();
                }
                } className="SearchForm">
                    <button type="submit" className="SearchForm-button" >Search</button>
                    <input
                        className="SearchForm-input"
                        type="text"
                        value={this.state.searchBar}
                        onChange={this.handleInputChange}
                    />
                </form>

            </div >
        );
    }
}

export default Searchbar;

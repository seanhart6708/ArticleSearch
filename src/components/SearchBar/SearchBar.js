import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchCriteria: ''
        };

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleCriteriaChange(event) {
        this.setState({ searchCriteria: event.target.value });
    };

    handleSearch(event) {
        this.props.searchNYT(this.state.searchCriteria);

        event.preventDefault();
    };

    render() {
        return (
            <form>
                <label htmlFor="chooseCriteria"/>
                <select onChange={this.handleCriteriaChange} name="chooseCriteria">
                    <option value="Arts">Arts</option>
                    <option value="Automobiles">Automobiles</option>
                    <option value="Blogs">Blogs</option>
                </select>
            </form>
        )
    }
}

module.exports = SearchBar;
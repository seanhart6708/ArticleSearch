import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTopic: ''
        };

        this.handleTopicChange = this.handleTopicChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleTopicChange(event) {
        this.setState({ searchTopic: event.target.value });
    };

    handleSearch(event) {
        this.props.searchNYT(this.state.searchTopic);

        event.preventDefault();
    };

    render() {
        return (
            <form>
                <label htmlFor="chooseCriteria">Select the most popular articles in the last week</label>
                <select onChange={this.handleTopicChange} name="chooseCriteria">
                    <option value="emailed">Emailed</option>
                    <option value="shared">Shared</option>
                    <option value="viewed">Viewed</option>
                </select>
                <input onClick={this.handleSearch} type="submit">Submit Request</input>
            </form>
        )
    }
}

module.exports = SearchBar;
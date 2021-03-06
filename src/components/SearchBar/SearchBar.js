import React from 'react';
import './SearchBar.css'

// When the search bar is clicked, App.js makes a request to the NYT api with the current state of the search bar (aka the topic)

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTopic: 'viewed'
        };

        this.handleTopicChange = this.handleTopicChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleTopicChange(event) {
        const searchTopic = document.getElementById('chooseCriteria').value;
        this.setState({ searchTopic: searchTopic });
        this.handleSearch();
    };

    handleSearch() {
        this.props.searchNYT(this.state.searchTopic);

        //event.preventDefault();
    };

    render() {
        return (
            <form>
                <span id="label">Check out the most </span>
                <select onChange={this.handleTopicChange} name="chooseCriteria" id="chooseCriteria">
                    <option value="emailed">Emailed</option>
                    <option value="shared">Shared</option>
                    <option value="viewed">Viewed</option>
                </select>
                <span> articles of the week from the New York Times.</span>
            </form>
        )
    }
}

export default SearchBar;
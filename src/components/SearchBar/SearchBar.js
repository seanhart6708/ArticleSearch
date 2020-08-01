import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            salePrice: ''
        };

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleTermChange(event) {
        this.setState({ salePrice: event.target.value });
    };

    handleSearch(event) {
        this.props.searchWalmart(this.state.salePrice);

        event.preventDefault();
    };

    render() {
        return (
            <form>
                <input onChange={this.handleTermChange} placeholder='Type in the price of the item'/>
                <input onClick={this.handleSearch} type='submit'/>
            </form>
        )
    }
}
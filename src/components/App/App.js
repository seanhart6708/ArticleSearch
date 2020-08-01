import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar.js';
import ItemList from '../ItemList/ItemList.js';
import Walmart from '../../util/Walmart.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }

    this.searchWalmart = this.searchWalmart.bind(this);
  }

  searchWalmart() {
    Walmart.search(price).then(items => {
      this.setState({ items: items })
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>Walmart Item Search</h1>
        <SearchBar searchWalmart={this.searchWalmart}/>
        <ItemList items={this.state.items}/>
      </div>
    );
  }
}

export default App;

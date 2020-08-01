import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }
  }
  
  render() {
    return (
      <div className="App">
        <h1>Walmart Item Search</h1>
        <SearchBar />
        <ItemList items={this.state.items}/>
      </div>
    );
  }
}

export default App;

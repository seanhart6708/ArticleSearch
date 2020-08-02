import React from 'react';
import './App.css';

import SearchBar from './Components/SearchBar/SearchBar.js';
import ArticleList from './Components/ArticleList/ArticleList.js';
import NYT from './util/NYT.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    }

    this.searchNYT = this.searchNYT.bind(this);
  }

  // After receiving the order to query the api from the search bar, App.js makes a request to the api
  // The results of the request are then set to the articles state of App.js; one example article would be { id: 1, title: ArticleTitle, ... }
  // After setting its articles state as the results of the request, App.js calls Article list with the App.js articles state
  searchNYT(topic) {
    NYT.search(topic).then(articles => {
      this.setState({ articles: articles })
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>NYT Article Search</h1>
        <SearchBar searchNYT={this.searchNYT}/>
        <ArticleList articles={this.state.articles}/>
      </div>
    );
  }
}

export default App;

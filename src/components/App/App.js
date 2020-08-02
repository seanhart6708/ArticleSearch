import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar.js';
import ArticleList from '../ArticleList/ArticleList.js';
import NYT from '../../util/NYT.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    }

    this.searchNYT = this.searchNYT.bind(this);
  }

  searchNYT() {
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

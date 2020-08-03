import React from 'react';

import Article from '../Article/Article.js';
import './ArticleList.css';

class ArticleList extends React.Component {
    // Article List takes each article that App.js sent to it, and renders an article using the article component
    render() {
        return (
            <div className="flex-container">
                {
                    this.props.articles.map(article => {
                        return <Article article={article} key={article.id}/>
                    })
                }
            </div>
        )
    }
}

export default ArticleList;
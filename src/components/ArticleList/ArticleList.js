import React from 'react';

import Article from '../Article/Article.js';

class ArticleList extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.articles.map(article => {
                        return <Article article={article} key={article.id}/>
                    })
                }
            </div>
        )
    }
}

module.exports = ArticleList;
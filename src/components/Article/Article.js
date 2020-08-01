import React from 'react';

class Article extends React.Component {
    render() {
        return (
            <div>
                <h4>{this.props.article.title}</h4>
                <a href={this.props.article.url}>View Article</a>
            </div>
        )
    }
}

module.exports = Article;
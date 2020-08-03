import React from 'react';

class Article extends React.Component {
    // The article component takes the articles from article list and displays their information
    render() {
        return (
            <div>
                <h4>{this.props.article.title}</h4>
                {/*<a href={this.props.article.url}>View Article</a>*/}
                <p>{this.props.article.byline} | {this.props.article.section} | {this.props.article.publishedDate}</p>
                <a href={this.props.article.url} target='_blank'>Read Article</a>
            </div>
        )
    }
}

export default Article;
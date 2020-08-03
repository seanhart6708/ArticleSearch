import React from 'react';

class Article extends React.Component {
    constructor(props) {
        super(props);

        this.checkByline = this.checkByline.bind(this);
    }

    // The article component takes the articles from article list and displays their information

    checkByline() {
        if (this.props.article.byline) {
            return (
                <span>{this.props.article.byline} | </span>
            )
        }
        return;
    }

    render() {

        return (
            <div>
                <h4>{this.props.article.title}</h4>
                <p>{this.checkByline(this.props.article)}{this.props.article.section} | {this.props.article.publishedDate}</p>
                <a href={this.props.article.url} target='_blank' rel="noopener noreferrer">Read Article</a>
            </div>
        )
    }
}

export default Article;
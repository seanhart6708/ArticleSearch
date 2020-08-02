const apiKey='yw0nFPkh4OElSGN5youzKK5A0SG6pOj3';

const NYT = {
    search(topic) {
        // used to search with hyphen
        const mediaMetadata = 'media-metadata';

        fetch(`https://api.nytimes.com/svc/mostpopular/v2/${topic}/7.json?api-key=${apiKey}`)
            .then(response => {
                return response.json();
            })
            .then(jsonResponse => {
                return jsonResponse.results.map(article => {
                    return {
                        id: article.id,
                        title: article.title,
                        section: article.section,
                        link: article[mediaMetadata].url
                    }
                })
            })
    }
}

module.exports = NYT;
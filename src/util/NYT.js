const apiKey=''

const NYT = {
    search(topic) {
        fetch(`https://api.nytimes.com/svc/mostpopular/v2/${topic}/7.json?api-key=${apiKey}`)
            .then(response => {
                return response.json();
            })
            .then(jsonResponse => {
                return jsonResponse.results.map(article => {
                    return {
                        title: article.title,
                        section: article.section,
                        link: article.media.media-metadata.url
                    }
                })
            })
    }
}
const apiKey='yw0nFPkh4OElSGN5youzKK5A0SG6pOj3';

const NYT = {
    convertToDate(date) {
        // 2020-07-30
    },

    search(topic) {

        return fetch(`https://api.nytimes.com/svc/mostpopular/v2/${topic}/7.json?api-key=${apiKey}`)
            .then(response => {
                return response.json();
            })
            .then(jsonResponse => {
                return jsonResponse.results.map(article => {
                    return {
                        id: article.id,
                        title: article.title,
                        byline: article.byline,
                        section: article.section,
                        publishedDate: article.published_date,
                        url: article.url
                    }
                })
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export default NYT;
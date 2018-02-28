(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;

//UNSPLASH:
fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
headers: {
Authorization: 'Client-ID 88749a56533e089a22da8d123400b33b4f88353b31a25ac5d706aef186058ca5'
}
}).then(response => response.json())
.then(addImage)
.catch(e => requestError(e, 'image'));  //e is the error

//NYT:
fetch(`http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=b283ac9b48744e7da3654f95b2e6f76f`)
.then(response => response.json())
.then(addArticles)
.catch(e => requestError(e, 'articles'));

//UNSPLASH:
function addImage(data) {
    let htmlContent = '';
    const firstImage = data.results[0];

    if (firstImage) {
        htmlContent = `<figure>
            <img src="${firstImage.urls.small}" alt="${searchedForText}">
            <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
        </figure>`;
    } else {
        htmlContent = 'Unfortunately, no image was returned for your search.'
    }
    responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
}

function requestError(e, part) {
    console.log(e);
    responseContainer.insertAdjacentHTML('beforeend', `<p class="network-warning">Oh no! There was an error making a request for the ${part}.</p>`);
}

//NYT:
      function addArticles(data) {
        let htmlContent = '';
        if (data.response && data.response.docs && data.response.docs.length > 1) {
          const articles = data.response.docs;
          htmlContent = '<ul>' + articles.map(article => `<li class="article">
          <h2><a href="${article.web_url}">${article.headline.main}</a></h2>
          <p>${article.snippet}</p>
          </li>`
        ).join('') + '</ul>';
      } else {
        htmlContent = '<div class="error-no-articles">No articles available</div>';
      }
        responseContainer.insertAdjacentHTML('beforeend', htmlContent);
      }

    });
})();

/* eslint-env jquery */

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
    $.ajax({
    url: `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`,
    headers: {
      Authorization: 'Client-ID 88749a56533e089a22da8d123400b33b4f88353b31a25ac5d706aef186058ca5'
    }
}).done(addImage);

//NYT:
      $.ajax({
      url: `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=b283ac9b48744e7da3654f95b2e6f76f`
      }).done(addArticles);

//UNSPLASH:
function addImage(data) {
    let htmlContent = '';

    if (data && data.results && data.results.length > 1) {
      const firstImage = data.results[0];
      htmlContent = `<figure>
              <img src="${firstImage.urls.small}" alt="${searchedForText}">
              <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
          </figure>`
        } else {
          htmlContent = '<div class="error-no-image">No images available</div>';
        }
      responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
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

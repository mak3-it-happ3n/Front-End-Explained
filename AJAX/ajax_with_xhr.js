(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText = 'new york';
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;



// const searchedForText = 'hippos';
const unsplashRequest = new XMLHttpRequest();

unsplashRequest.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
unsplashRequest.onload = addImage;
unsplashRequest.setRequestHeader('Authorization', 'Client-ID 88749a56533e089a22da8d123400b33b4f88353b31a25ac5d706aef186058ca5');
unsplashRequest.send();

function addImage(){
  let htmlContent = '';
  const data = JSON.parse(this.responseText);

  if (data && data.results && data.results[0]) {
    const firstImage = data.results[0];
    htmlContent = `<figure>
      <img src="${firstImage.urls.regular}" alt="${searchedForText}">
      <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
    </figure>`;
  } else {
    htmlContent = '<div class="error-no-image">No images available</div>';
  }

  responseContainer.insertAdjacentHTML('afterbegin', htmlContent);

  }

  // function addArticles () {}
  const articleRequest = new XMLHttpRequest();
  articleRequest.onload = addArticles;
  articleRequest.open('GET', `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=b283ac9b48744e7da3654f95b2e6f76f`);
  articleRequest.send();

  function addArticles () {
    let htmlContent = '';
    const data = JSON.parse(this.responseText);

    if (data.response && data.response.docs && data.response.docs.length >1) {
      // const firstArticle = data.results[0];
      htmlContent = '<ul>' + data.response.docs.map(article => `<li class="article">
      <h2><a href="${article.web_url}">${article.headline.main}</a></h2>
      <p>${article.snippet}</p>
      </li>`
    ).join('') + '</ul>';
  } else {
    htmlContent = '<div class ="error-no-articles">No articles available</div>';

  }

  responseContainer.insertAdjacentHTML('beforeend', htmlContent);
}

  });

})();

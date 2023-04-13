//PLEASE DO NOT CHANGE OR ADD IN ANY CODE IN THIS 

/*
const API_KEY = '67cf05ba0165320632072ea097183ef3';
const URL = 'https://api.themoviedb.org/3/discover/tv?api_key=' + API_KEY + '&with_genres=35';

const showsContainer = document.getElementById('shows');

async function getShows() {
  let page = 1;
  let total_pages = 1;

  while (page <= total_pages) {
    const response = await fetch(URL + '&page=' + page);
    const data = await response.json();
    const shows = data.results;

    total_pages = data.total_pages;

    shows.forEach(show => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');

      const imgElement = document.createElement('img');
      imgElement.classList.add('card-img-top');
      imgElement.src = 'https://image.tmdb.org/t/p/w500' + show.poster_path;
      imgElement.alt = show.name;

      const cardBodyElement = document.createElement('div');
      cardBodyElement.classList.add('card-body');

      const titleElement = document.createElement('h5');
      titleElement.classList.add('card-title');
      titleElement.textContent = show.name;

      const releaseElement = document.createElement('p');
      releaseElement.classList.add('card-text');
      releaseElement.textContent = 'Release Year: ' + show.first_air_date.substring(0, 4);

      const overviewElement = document.createElement('p');
      overviewElement.classList.add('card-text');
      overviewElement.textContent = show.overview;

      cardBodyElement.appendChild(titleElement);
      cardBodyElement.appendChild(releaseElement);
      cardBodyElement.appendChild(overviewElement);

      cardElement.appendChild(imgElement);
      cardElement.appendChild(cardBodyElement);

      showsContainer.appendChild(cardElement);
    });

    page++;
  }
}

getShows();
*/

const API_KEY = '67cf05ba0165320632072ea097183ef3';
const URL = 'https://api.themoviedb.org/3/discover/tv?api_key=' + API_KEY + '&with_genres=35';

const showsContainer = document.getElementById('shows');

async function getShows() {
  let page = 1;
  let total_pages = 1;

  while (page <= total_pages) {
    const response = await fetch(URL + '&page=' + page);
    const data = await response.json();
    const shows = data.results;

    total_pages = data.total_pages;

    shows.forEach(show => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');

      const imgElement = document.createElement('img');
      imgElement.classList.add('card-img-top');
      imgElement.src = 'https://image.tmdb.org/t/p/w500' + show.poster_path;
      imgElement.alt = show.name;

      const cardBodyElement = document.createElement('div');
      cardBodyElement.classList.add('card-body');

      const titleElement = document.createElement('h5');
      titleElement.classList.add('card-title');
      titleElement.textContent = show.name;

      const releaseElement = document.createElement('p');
      releaseElement.classList.add('card-text');
      releaseElement.textContent = 'Release Year: ' + show.first_air_date.substring(0, 4);

      const overviewElement = document.createElement('p');
      overviewElement.classList.add('card-text');
    //  overviewElement.textContent = show.overview;

      const detailsButton = document.createElement('button');
      detailsButton.classList.add('btn', 'btn-primary');
      detailsButton.textContent = 'Show Details';

      detailsButton.addEventListener('click', () => {
        const detailsElement = document.createElement('div');
        detailsElement.classList.add('card', 'bg-light', 'mt-2');

        const detailsBodyElement = document.createElement('div');
        detailsBodyElement.classList.add('card-body');

        const detailsTitleElement = document.createElement('h5');
        detailsTitleElement.classList.add('card-title');
        detailsTitleElement.textContent = show.name;

        const detailsOverviewElement = document.createElement('p');
        detailsOverviewElement.classList.add('card-text');
        detailsOverviewElement.textContent = show.overview;

        detailsBodyElement.appendChild(detailsTitleElement);
        detailsBodyElement.appendChild(detailsOverviewElement);

        detailsElement.appendChild(detailsBodyElement);

        cardElement.appendChild(detailsElement);
      });

      cardBodyElement.appendChild(titleElement);
      cardBodyElement.appendChild(releaseElement);
      cardBodyElement.appendChild(overviewElement);
      cardBodyElement.appendChild(detailsButton);

      cardElement.appendChild(imgElement);
      cardElement.appendChild(cardBodyElement);

      showsContainer.appendChild(cardElement);
    });

    page++;
  }
}

getShows();


//PLEASE DO NOT CHANGE OR ADD IN ANY CODE IN THIS FILE
/*
const apiKey = '67cf05ba0165320632072ea097183ef3';
const baseUrl = 'https://api.themoviedb.org/3';

const fetchDramaTvShows = async () => {
  let page = 1;
  let total_pages = 1;
  const dramaTvShows = [];

  while (page <= total_pages) {
    const response = await fetch(`${baseUrl}/discover/tv?api_key=${apiKey}&with_genres=18&page=${page}`);
    const data = await response.json();
    total_pages = data.total_pages;

    if (data.results && Array.isArray(data.results)) {
      dramaTvShows.push(...data.results);
    }

    page++;
  }

  return dramaTvShows;
}

const createTvShowCards = (tvShows) => {
  const cardContainer = document.querySelector('.card-container');

  tvShows.forEach(tvShow => {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.src = `https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`;
    image.alt = tvShow.name;
    card.appendChild(image);

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    card.appendChild(cardContent);

    const title = document.createElement('h2');
    title.classList.add('card-title');
    title.textContent = tvShow.name;
    cardContent.appendChild(title);

    const overview = document.createElement('p');
    overview.classList.add('card-overview');
    overview.textContent = tvShow.overview;
    cardContent.appendChild(overview);

    cardContainer.appendChild(card);
  });
}

(async () => {
  const dramaTvShows = await
fetchDramaTvShows();
createTvShowCards(dramaTvShows);
})();
*/

const apiKey = '67cf05ba0165320632072ea097183ef3';
const baseUrl = 'https://api.themoviedb.org/3';

const fetchDramaTvShows = async () => {
  let page = 1;
  let total_pages = 1;
  const dramaTvShows = [];

  while (page <= total_pages) {
    const response = await fetch(`${baseUrl}/discover/tv?api_key=${apiKey}&with_genres=18&page=${page}`);
    const data = await response.json();
    total_pages = data.total_pages;

    if (data.results && Array.isArray(data.results)) {
      dramaTvShows.push(...data.results);
    }

    page++;
  }

  return dramaTvShows;
}


const createTvShowCards = (tvShows) => {
  const cardContainer = document.querySelector('.card-container');

  tvShows.forEach(tvShow => {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.src = `https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`;
    image.alt = tvShow.name;
    card.appendChild(image);

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    card.appendChild(cardContent);

    const title = document.createElement('h2');
    title.classList.add('card-title');
    title.textContent = tvShow.name;
    cardContent.appendChild(title);

    const overview = document.createElement('p');
    overview.classList.add('card-overview');
    overview.textContent = tvShow.overview;
    cardContent.appendChild(overview);

    // Create a button to show details
    const button = document.createElement('button');
    button.classList.add('card-button');
    button.textContent = 'Show Details';
    cardContent.appendChild(button);

    // Add a click event listener to the button
    button.addEventListener('click', () => {
      // Show the details of the TV show
      alert(`Details for ${tvShow.name}: ${tvShow.overview}`);
    });

    cardContainer.appendChild(card);
  });
};

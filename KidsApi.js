//PLEASE DO NOT CHANGE OR ADD IN ANY CODE IN THIS FILE

const API_KEY = '67cf05ba0165320632072ea097183ef3';
const API_URL = 'https://api.themoviedb.org/3/discover/tv?with_genres=10762&api_key=' + API_KEY;

const showsContainer = document.getElementById('shows');

async function getShows() {
let page = 1;
let total_pages = 1;

while (page <= total_pages) {
const response = await fetch(API_URL + '&page=' + page);
const data = await response.json();
const shows = data.results;
  total_pages = data.total_pages;

shows.forEach(show => {
  const showCard = document.createElement('div');
  showCard.classList.add('card');

  const cardImg = document.createElement('img');
  cardImg.src = 'https://image.tmdb.org/t/p/w500' + show.poster_path;
  cardImg.alt = show.name;

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const cardTitle = document.createElement('h2');
  cardTitle.textContent = show.name;

  const cardReleaseYear = document.createElement('p');
const releaseDate = new Date(show.first_air_date);
const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
cardReleaseYear.textContent = 'Release Date: ' + releaseDate.toLocaleDateString('en-US', options).replace(/\//g, '-');

  const cardOverview = document.createElement('p');
//  cardOverview.textContent = show.overview;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardReleaseYear);
  cardBody.appendChild(cardOverview);

  showCard.appendChild(cardImg);
  showCard.appendChild(cardBody);

  showsContainer.appendChild(showCard);
});

page++;
}
}

getShows();



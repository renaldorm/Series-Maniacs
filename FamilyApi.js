const apiKey = '67cf05ba0165320632072ea097183ef3';
const apiUrl = `https://api.themoviedb.org/3/discover/tv?with_genres=10751&api_key=${apiKey}`;

const tvShowsContainer = document.getElementById('tv-shows');

async function getTvShows() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  const tvShows = data.results;

  tvShows.forEach(tvShow => {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = `https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`;
    img.alt = `${tvShow.name} poster`;
    card.appendChild(img);

    const title = document.createElement('h3');
    title.textContent = tvShow.name;
    card.appendChild(title);

    const overview = document.createElement('p');
    overview.textContent = tvShow.overview;
    card.appendChild(overview);

    tvShowsContainer.appendChild(card);
  });
}

getTvShows();

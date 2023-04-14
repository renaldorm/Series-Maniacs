//PLEASE DO NOT CHANGE OR ADD IN ANY CODE IN THIS FILE

const apiKey = '67cf05ba0165320632072ea097183ef3';
const apiUrl = `https://api.themoviedb.org/3/discover/tv?with_genres=10751&api_key=${apiKey}&page=1`;

const tvShowsContainer = document.getElementById('tv-shows');

async function getTvShows() {
  let page = 1;
  let total_pages = 1;

  while (page <= total_pages) {
    const response = await fetch(`${apiUrl}&page=${page}`);
    const data = await response.json();
    const tvShows = data.results;
    total_pages = data.total_pages;

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

      const releaseDate = document.createElement('p');
      releaseDate.textContent = `Release Date: ${tvShow.first_air_date}`;
      card.appendChild(releaseDate);

      const overview = document.createElement('p');
   //   overview.textContent = tvShow.overview;
      card.appendChild(overview);

      tvShowsContainer.appendChild(card);
    });

    page++;
  }
}

getTvShows();

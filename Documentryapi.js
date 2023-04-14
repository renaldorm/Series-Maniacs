//PLEASE DO NOT CHANGE OR ADD IN ANY CODE IN THIS FILE

const API_KEY = '67cf05ba0165320632072ea097183ef3';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const showsContainer = document.getElementById('shows');

// Make API request for all documentary TV shows
fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=99`)
  .then(response => response.json())
  .then(data => {
    // Get total number of pages of results
    const totalPages = data.total_pages;

    // Iterate through each page of results and create an element for each TV show
    for (let page = 1; page <= totalPages; page++) {
      fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=99&page=${page}`)
        .then(response => response.json())
        .then(data => {
          data.results.forEach(show => {
            const showCard = document.createElement('div');
            showCard.classList.add('card');

            const cardImage = document.createElement('div');
            cardImage.classList.add('card-image');

            const image = document.createElement('img');
            image.src = `${IMAGE_BASE_URL}${show.poster_path}`;
            cardImage.appendChild(image);
            showCard.appendChild(cardImage);

            const cardContent = document.createElement('div');
            cardContent.classList.add('card-content');

            const title = document.createElement('h2');
            title.textContent = show.name;
            cardContent.appendChild(title);

        //    const overview = document.createElement('p');
       //     overview.textContent = show.overview;
        //    cardContent.appendChild(overview);

            const releaseDate = document.createElement('p');
releaseDate.textContent = `Release Date: ${show.first_air_date.split('-').reverse().join('-')}`;
cardContent.appendChild(releaseDate);

            showCard.appendChild(cardContent);
            showsContainer.appendChild(showCard);
          });
        })
        .catch(error => {
          console.error(error);
        });
    }
  })
  .catch(error => {
    console.error(error);
  });

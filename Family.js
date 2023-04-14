//PLEASE DO NOT CHANGE OR ADD IN ANY CODE IN THIS FILE
//this version of the code uses tmdb api
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const searchResults = document.querySelector('#search-results');

// Listen for form submission
searchForm.addEventListener('submit', e => {
  e.preventDefault();

  // Retrieve search query
  const query = searchInput.value;

  // Clear previous search results
  searchResults.innerHTML = '';

  // Fetch TV show data from API
  fetch(`https://api.themoviedb.org/3/search/tv?api_key=67cf05ba0165320632072ea097183ef3&query=${query}`)
    .then(response => response.json())
    .then(data => {

      // Loop through TV show results and create HTML elements
      data.results.forEach(show => {
        const showDiv = document.createElement('div');
        showDiv.classList.add('card', 'mb-3');
        showDiv.innerHTML = `
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="${show.poster_path ? 'https://image.tmdb.org/t/p/w185/' + show.poster_path : ''}" class="card-img" alt="${show.name} poster">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${show.name}</h5>
               
                <p class="card-text"><small class="text-muted">Release date: ${show.first_air_date}</small></p>
              </div>
            </div>
          </div>
        `;
        searchResults.appendChild(showDiv);
      });
    })
    .catch(error => console.log(error));
});



/*
// Retrieve elements from the DOM
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const searchResults = document.querySelector('#search-results');

// Listen for form submission
searchForm.addEventListener('submit', e => {
	e.preventDefault();

	// Retrieve search query
	const query = searchInput.value;

	// Clear previous search results
	searchResults.innerHTML = '';

	// Fetch movie data from API
	fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
		.then(response => response.json())
		.then(data => {
			// Loop through movie results and create HTML elements
			data.forEach(show => {
				const showDiv = document.createElement('div');
				showDiv.classList.add('card', 'mb-3');
				showDiv.innerHTML = `
					<div class="row no-gutters">
						<div class="col-md-4">
							<img src="${show.show.image ? show.show.image.medium : ''}" class="card-img" alt="${show.show.name} poster">
						</div>
						<div class="col-md-8">
							<div class="card-body">
								<h5 class="card-title">${show.show.name}</h5>
								
							</div>
						</div>
					</div>
				`;
				searchResults.appendChild(showDiv);
			});
		})
		.catch(error => console.log(error));
});
*/
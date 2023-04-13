//DO NOT TOUCH ANYTHING NOT ONE THING NOTHING!!!!!!!

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
								<p class="card-text">${show.show.summary}</p>
							</div>
						</div>
					</div>
				`;
				searchResults.appendChild(showDiv);
			});
		})
		.catch(error => console.log(error));
});

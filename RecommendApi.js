//PLEASE DO NOT CHANGE OR ADD IN ANY CODE IN THIS FILE

const showCards = document.getElementById('show-cards');

fetch('https://api.tvmaze.com/shows')
  .then(response => response.json())
  .then(data => {
    data.forEach(show => {
      const card = document.createElement('div');
      card.classList.add('card');

      const image = document.createElement('img');
      image.src = show.image ? show.image.medium : '';
      image.alt = show.name;
      image.classList.add('card-img-top');
      card.appendChild(image);

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const name = document.createElement('h5');
      name.classList.add('card-title');
      name.textContent = show.name;
      cardBody.appendChild(name);

  //    const language = document.createElement('p');
  //    language.classList.add('card-text');
   //   language.textContent = 'Language: ' + show.language;
   //   cardBody.appendChild(language);

     // const premiered = document.createElement('p');
     // premiered.classList.add('card-text');
     // premiered.textContent = 'Premiered: ' + show.premiered;
     // cardBody.appendChild(premiered);

      const releaseDate = document.createElement('p');
      releaseDate.classList.add('card-text');
      releaseDate.textContent = 'Release Date: ' + show.premiered;
      cardBody.appendChild(releaseDate);

    //  const summary = document.createElement('p');
    //  summary.classList.add('card-text');
      //summary.innerHTML = show.summary;
    //  cardBody.appendChild(summary);

      card.appendChild(cardBody);
      showCards.appendChild(card);
    });
  })
  .catch(error => console.error(error));

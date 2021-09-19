const cardsElement = document.querySelector('.cards');

fetch('./data/links.json')
  .then((response) => response.json())
  .then((data) => {
    data?.links.map((link) => {
      const cardElement = `
         <div class="card">
          <div class="card__header">
            <a href="${link?.url}" class="card__header__title">${link?.title}</a>
            <button class="card__header__button">
              <svg
                class="card__header__button__icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                ></path>
              </svg>
            </button>
          </div>
          <p class="card__body">
            ${link?.body}
          </p>
        </div>
      `;
      cardsElement.innerHTML += cardElement;
    });
  })
  .catch((error) => console.log(error));
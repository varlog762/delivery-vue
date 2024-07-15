export const restFunc = () => {
  const cardsContainer = document.querySelector('#cards-box');

  const loading = () => {
    cardsContainer.innerHTML =
      '<p style="width: 100%; text-align: center;">Загрузка</p>';
  };

  const renderRests = array => {
    cardsContainer.innerHTML = '';

    array.forEach(element => {
      cardsContainer.insertAdjacentHTML(
        'beforeend',
        `
        <a href="./tanuki.html"><div class="card">
          <div class="card-img">
            <img src="${element.imagePath}" alt="6">
          </div>
          <div class="card-description">
            <div class="card-name-box">
              <h3 class="card-name">${element.title}</h3>
              <div class="card-time">${element.time} мин</div>
            </div>
            <div class="card-info-box">
              <div class="card-rating"><img src="./assets/icons/star-icon.svg" alt="star icon">${element.rating}</div>
              <div class="card-price">От ${element.price} &#8381; &bull; ${element.type} </div>
            </div>
          </div>
        </div></a>
      `
      );
    });
  };

  const fetchData = () => {
    fetch('/assets/json/rests.json')
      .then(res => {
        if (!res.ok) {
          throw new Error('Error data fetching!');
        }

        return res.json();
      })
      .then(data => renderRests(data))
      .catch(error => {
        console.error(error);
        cardsContainer.innerHTML =
          '<p style="width: 100%; text-align: center; color: red;">Ошибка загрузки данных</p>';
      });
  };

  if (cardsContainer) {
    loading();
    setTimeout(() => fetchData(), 1500);
  }
};

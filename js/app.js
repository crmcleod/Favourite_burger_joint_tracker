document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.querySelector('#new-item-form');
    saveButton.addEventListener('submit', handleSaveButtonSubmit);
    
    const orderInput = document.querySelector('#burger');
    orderInput.addEventListener('input', handleOrderInput);

    const clearButton  = document.querySelector('#delete-all');
    clearButton.addEventListener('click', handleClearButtonClick);

})

const handleSaveButtonSubmit = function (event) {
    event.preventDefault();
    const restaurantListItem = createRestaurantListItem(event.target);
    const restaurantList = document.querySelector('#restaurant-list');
    restaurantList.appendChild(restaurantListItem);
    event.target.reset();
}

const handleOrderInput = function (event) {
    console.log('somethings happening');
        const resultParagraph = document.querySelector('#order-result');
        resultParagraph.textContent = `${event.target.value}`;
}
const createRestaurantListItem = function (form) {
    const restaurantListItem = document.createElement('li');
    restaurantListItem.classList.add('restaurant-list-item');

    const restaurant = document.createElement('h2');
    restaurant.textContent = form.restaurant.value;
    restaurantListItem.appendChild(restaurant);

    const country = document.createElement('h4');
    country.textContent = form.country.value;
    restaurantListItem.appendChild(country);

    const city = document.createElement('h4');
    city.textContent = form.city.value;
    restaurantListItem.appendChild(city);

    const speciality = document.createElement('h4');
    speciality.textContent = form.speciality.value;
    restaurantListItem.appendChild(speciality);

    const burger = document.createElement('h4');
    burger.textContent = form.burger.value;
    restaurantListItem.appendChild(burger);

    const rating = document.createElement('h4');
    rating.textContent = form.rating.value;
    restaurantListItem.appendChild(rating);

    return restaurantListItem;
}

const handleClearButtonClick = function (event) {
    const restaurantList = document.querySelector('#restaurant-list');
    restaurantList.innerHTML = '';
}
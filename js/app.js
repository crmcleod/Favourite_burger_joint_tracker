document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.querySelector('#new-item-form');
    saveButton.addEventListener('submit', handleSaveButtonSubmit);
    
})

const handleSaveButtonSubmit = function (event) {
    event.preventDefault();

    const restaurantListItem = createRestaurantListItem(event.targer);
    const restaurantList = document.querySelector('#restaurant-list');
    restaurantList.appendChild(restaurantListItem);
    event.target.reset();
}
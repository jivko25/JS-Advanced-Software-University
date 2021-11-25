import {html} from '../../node_modules/lit-html/lit-html.js';
import * as carService from '../services/carService.js';

// brand: "Audi"
// description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
// imageUrl: "/images/audia3.jpg"
// model: "A3"
// price: 25000
// year: 2018
// _createdOn: 1616162253496
// _id: "3987279d-0ad4-4afb-8ca9-5b256ae3b298"
// _ownerId: "35c62d76-8152-4626-8712-eeb96381bea8"

const carTemplate = (car) => html`
    <div class="listing">
        <div class="preview">
            <img src="${car.imageUrl}">
        </div>
        <h2>${car.brand} ${car.model}</h2>
        <div class="info">
            <div class="data-info">
                <h3>Year: ${car.year}</h3>
                <h3>Price: ${car.price} $</h3>
            </div>
            <div class="data-buttons">
                <a href="/listing/${car._id}" class="button-carDetails">Details</a>
            </div>
        </div>
    </div>
`;

const listingTemplate = (cars = []) => html`
    <!-- All Listings Page -->
    <section id="car-listings">
            <h1>Car Listings</h1>
            <div class="listings">
                ${cars.length != 0 ? cars.map(car => carTemplate(car)) :
                html`<p class="no-cars">No cars in database.</p>`}
            </div>
        </section>
`;

export const renderListing = (ctx) => {
    carService.getAll()
        .then(cars => {
                ctx.render(listingTemplate(cars));
        })
};
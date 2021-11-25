import {html} from '../../node_modules/lit-html/lit-html.js';
import * as carService from '../services/carService.js';
import * as authService from '../services/authService.js';


// brand: "Audi"
// description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
// imageUrl: "/images/audia3.jpg"
// model: "A3"
// price: 25000
// year: 2018
// _createdOn: 1616162253496
// _id: "3987279d-0ad4-4afb-8ca9-5b256ae3b298"
// _ownerId: "35c62d76-8152-4626-8712-eeb96381bea8"

const detailsCarTemplate = (car) => html`
<!-- Listing Details Page -->
<section id="listing-details">
            <h1>Details</h1>
            <div class="details-info">
                <img src=${car.imageUrl}>
                <hr>
                <ul class="listing-props">
                    <li><span>Brand:</span>${car.brand}</li>
                    <li><span>Model:</span>${car.model}</li>
                    <li><span>Year:</span>${car.year}</li>
                    <li><span>Price:</span>${car.price}</li>
                </ul>

                <p class="description-para">${car.description}</p>

                ${
                    authService.getUser() ?
                    authService.getUser()._id == car._ownerId ? 
                    html`
                    <div class="listings-buttons">
                    <a href="/listing/${car._id}/edit" class="button-list">Edit</a>
                    <a href="/listing/${car._id}/delete" class="button-list">Delete</a>
                    </div>`
                    : null : null
                }
            </div>
        </section>
`;

export const renderCarDetails = (ctx) => {
    carService.getOne(ctx.params.carId)
            .then(car => {
                ctx.render(detailsCarTemplate(car));
            })
}; 
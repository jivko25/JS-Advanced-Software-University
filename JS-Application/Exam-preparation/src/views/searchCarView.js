import {html} from '../../node_modules/lit-html/lit-html.js';
import * as carService from '../services/carService.js';

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

const searchTemplate = (onSearch, cars) => html`
        <!-- Search Page -->
        <section id="search-cars">
            <h1>Filter by year</h1>

            <div class="container">
                <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
                <button class="button-list" @click=${onSearch}>Search</button>
            </div>

            <h2>Results:</h2>
            <div class="listings">

                ${
                    cars ? cars.map(car => carTemplate(car)) : null
                }
                <!-- Display if there are no matches -->
                ${
                    cars ? null : html`<p class="no-cars"> No results.</p>`
                }
            </div>
        </section>
`;

export const renderSearchView = (ctx) => {
    function search(e){
        const value = e.currentTarget.parentElement.querySelector('input').value;
        carService.getCarsByYear(value)
                .then(cars => ctx.render(searchTemplate(search, cars)));
    }

    ctx.render(searchTemplate(search));
};
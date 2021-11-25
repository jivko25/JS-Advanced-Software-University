import {html} from '../../node_modules/lit-html/lit-html.js';
import * as carService from '../services/carService.js';

const createCarTemplate = (onSubmit) => html`
        <section id="create-listing">
            <div class="container">
                <form id="create-form" @submit=${onSubmit}>
                    <h1>Create Car Listing</h1>
                    <p>Please fill in this form to create an listing.</p>
                    <hr>

                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand">

                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model">

                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description">

                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year">

                    <p>Car Image</p>
                    <input type="text" placeholder="Enter Car Image" name="imageUrl">

                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price">

                    <hr>
                    <input type="submit" class="registerbtn" value="Create Listing">
                </form>
            </div>
        </section>
`;

export const renderCreateCar = (ctx) => {

    const onSubmit = (e) => {
        e.preventDefault();

        let car = Object.fromEntries(new FormData(e.currentTarget));

        if(Object.values(car).some(x => !x)){
            alert('empty fields');
            return;
        }

        car.year = Number(car.year);
        car.price = Number(car.price);

        carService.createCar(car)
                    .then(() => {
                        ctx.page.redirect('/listing/');
                    });

        // let formData = new FormData(e.currentTarget);
        // let brand = formData.get('brand');
        // let model = formData.get('model');
        // let description = formData.get('description');
        // let year = formData.get('year');
        // let imageUrl = formData.get('imageUrl');
        // let price = formData.get('price');

    }

    ctx.render(createCarTemplate(onSubmit));
}
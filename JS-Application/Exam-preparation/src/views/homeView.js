import {html} from '../../node_modules/lit-html/lit-html.js';

const homeTemplate = () => html`
    <!-- Home Page -->
    <section id="main">
            <div id="welcome-container">
                <h1>Welcome To Car Tube</h1>
                <img class="hero" src="/images/car-png.webp" alt="carIntro">
                <h2>To see all the listings click the link below:</h2>
                <div>
                    <a href="/listing" class="button">Listings</a>
                </div>
            </div>
        </section>
    `;

export function renderHomePage(ctx){
    ctx.render(homeTemplate());
}
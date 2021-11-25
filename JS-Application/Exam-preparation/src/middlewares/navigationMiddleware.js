import {render} from '../../node_modules/lit-html/lit-html.js';
import {renderNavigation} from '../views/NavigationView.js';

const navigationElement = document.querySelector('header.navigation');

export function navigationMiddleWare(ctx, next){

    render(renderNavigation(ctx), navigationElement);

    next();
}
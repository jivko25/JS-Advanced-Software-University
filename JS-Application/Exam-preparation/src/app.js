import {navigationMiddleWare} from './middlewares/navigationMiddleware.js';
import { renderMiddleware } from './middlewares/renderMiddleware.js';
import { renderRegister } from './views/registerView.js';
import {renderLogin} from './views/loginView.js';

import page from '../node_modules/page/page.mjs';
import { renderHomePage } from './views/homeView.js';
import { authMiddleware } from './middlewares/authMiddleware.js';
import { renderLogout } from './views/logoutView.js';
import { renderListing } from './views/listingView.js';
import { renderCreateCar } from './views/createCarView.js';
import { renderCarDetails } from './views/detailsCarView.js';
import { renderEditView } from './views/editCarView.js';
import { renderDelete } from './views/deleteCarView.js';
import { renderProfileView } from './views/profileView.js';
import { renderSearchView } from './views/searchCarView.js';

page(authMiddleware);
page(navigationMiddleWare);
page(renderMiddleware);


page('/', renderHomePage);
page('/login', renderLogin);
page('/logout', renderLogout);
page('/listing', renderListing)
page('/register', renderRegister);
page('/create', renderCreateCar);
page('/listing/:carId', renderCarDetails);
page('/listing/:carId/edit', renderEditView);
page('/listing/:carId/delete', renderDelete);
page('/profile', renderProfileView);
page('/search', renderSearchView);


page.start();
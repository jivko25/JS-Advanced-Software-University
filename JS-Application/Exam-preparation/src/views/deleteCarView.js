import * as carService from '../services/carService.js';

export const renderDelete = (ctx) => {
    carService.deleteCar(ctx.params.carId)
            .then(ctx.page.redirect('/listing'));
}
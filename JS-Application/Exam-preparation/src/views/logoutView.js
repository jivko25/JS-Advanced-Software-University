import * as authService from '../services/authService.js';

export async function renderLogout(ctx){
    await authService.logout()
                .then(() => {
                    ctx.page.redirect('/listing');
                });
}
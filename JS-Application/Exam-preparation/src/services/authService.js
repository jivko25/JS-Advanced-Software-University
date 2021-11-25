import * as api from './api.js';
import * as request from './requester.js';

const USER_KEY = 'user';

export const login = (username, password) => {
    return request.post(api.login, {username, password})
                .then(user => {
                    saveUser(user);
                    console.log(user);
                    return user;
                });
}

export async function logout(){
    await request.get(api.logout)
            .finally(() => {
                localStorage.removeItem(USER_KEY);
            });
}

export const register = (username, password) => {
    return request.post(api.register, {username, password})
            .then(user => {
                saveUser(user);
                console.log(user);
                return user;
            });
}

function saveUser(data){
    localStorage.setItem(USER_KEY, JSON.stringify(data));
}

export function getUser(){
    let user = localStorage.getItem(USER_KEY);

    if(user){
        return JSON.parse(user);
    }
}
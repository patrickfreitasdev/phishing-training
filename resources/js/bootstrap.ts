import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import Echo from 'laravel-echo';
 
import Pusher from 'pusher-js';
// ignore this error
// @ts-ignore
window.Pusher = Pusher;
 
// @ts-ignore
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    forceTLS: false
});

// @ts-ignore
window.Echo.channel('game-channel')
// @ts-ignore
    .listen('.user-joined', (event) => {
        console.log(event.message);
        // Update the UI, e.g., show the number of users
    });
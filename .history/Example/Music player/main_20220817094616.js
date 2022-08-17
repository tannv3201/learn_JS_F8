const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/**
    1. Render song
    2. Scroll top
    3. Play / pause/ seek
    4. CD rotate
    5. Next / prev
    6. Random
    7. Next / repeat when ended
    8. Active Song
    9. Scroll active song into view
    10. Play song when click 
 */

const app = {
    songs: [
        {
            name: 'Tự sự',
            singer: 'Orange',
            path: './assets/music/tusu.mp3',
            image: './assets/imgs/tusu.jpg'
        },
        {
            name: 'Hai mươi hai',
            singer: 'Amee',
            path: './assets/music/haimuoihai.mp3',
            image: './assets/imgs/haimuoihai.jpg'
        },
    ],

    // Phương thức start() để bắt đầu
    start: function () {

    }
}

app.start();
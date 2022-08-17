
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
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


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
        {
            name: 'Hai mươi hai',
            singer: 'Amee',
            path: './assets/music/haimuoihai.mp3',
            image: './assets/imgs/haimuoihai.jpg'
        },
        {
            name: 'Hai mươi hai',
            singer: 'Amee',
            path: './assets/music/haimuoihai.mp3',
            image: './assets/imgs/haimuoihai.jpg'
        },
        {
            name: 'Hai mươi hai',
            singer: 'Amee',
            path: './assets/music/haimuoihai.mp3',
            image: './assets/imgs/haimuoihai.jpg'
        },
        {
            name: 'Hai mươi hai',
            singer: 'Amee',
            path: './assets/music/haimuoihai.mp3',
            image: './assets/imgs/haimuoihai.jpg'
        },
        {
            name: 'Hai mươi hai',
            singer: 'Amee',
            path: './assets/music/haimuoihai.mp3',
            image: './assets/imgs/haimuoihai.jpg'
        },
        {
            name: 'Hai mươi hai',
            singer: 'Amee',
            path: './assets/music/haimuoihai.mp3',
            image: './assets/imgs/haimuoihai.jpg'
        },
        {
            name: 'Hai mươi hai',
            singer: 'Amee',
            path: './assets/music/haimuoihai.mp3',
            image: './assets/imgs/haimuoihai.jpg'
        },
        {
            name: 'Hai mươi hai',
            singer: 'Amee',
            path: './assets/music/haimuoihai.mp3',
            image: './assets/imgs/haimuoihai.jpg'
        },
        {
            name: 'Hai mươi hai',
            singer: 'Amee',
            path: './assets/music/haimuoihai.mp3',
            image: './assets/imgs/haimuoihai.jpg'
        },
    ],
    render: function () {
        const htmls = this.songs.map(song => {
            return `
            <div class="song">
                <div class="thumb" style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            `
        })
        $('.playlist').innerHTML = htmls.join('');
    },

    // Xử lý sự kiện
    handleEvents: function () {
        // Lấy ra Element "cd"
        const cd = $('.cd');
        const cdWidth = cd.offsetWidth;

        document.onscroll = function () {
            const scrollTop = document.documentElement.scrollTop || window.scrollY;
            const newCdWidth = cdWidth - scrollTop;
            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0; // check nếu kéo nhanh quá giá trị về < 0 thì lấy = 0
        }
    },

    // Phương thức start() để bắt đầu
    start: function () {
        this.handleEvents();
        this.render();
    }
}

app.start();
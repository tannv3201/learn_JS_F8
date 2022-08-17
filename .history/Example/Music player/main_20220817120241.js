
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

// Lấy ra các element 
const heading = $('header h2');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const cd = $('.cd');
const playBtn = $('.btn-toggle-play');
const player = $('.player');

const app = {
    currentIndex: 0,
    isPlaying: false,
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

    // Định nghĩa thuộc tính
    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs[this.currentIndex];
            }
        })
    },

    // Xử lý sự kiện
    handleEvents: function () {
        const _this = this; // Định nghĩa từ khóa this ở ngoài
        // Lấy ra Element "cd"
        const cdWidth = cd.offsetWidth; // Lấy width của cd.

        // Xử lý phóng to / thu nhỏ cd
        document.onscroll = function () {
            const scrollTop = document.documentElement.scrollTop || window.scrollY;
            const newCdWidth = cdWidth - scrollTop;
            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0; // check nếu kéo nhanh quá giá trị về < 0 thì lấy = 0
            cd.style.opacity = newCdWidth / cdWidth; // mờ dần khi scroll
        }

        // Xử lý khi click play
        playBtn.onclick = function () {
            if (_this.isPlaying) {
                audio.pause();
            }
            else {
                audio.play();
            }
            // Khi bài hát được play 
            audio.onplay = function () {
                _this.isPlaying = true;
                player.classList.add('playing') // chuyển btn play thành btn pause
            };
            // Khi bài hát bị dừng
            audio.onpause = function () {
                _this.isPlaying = false;
                player.classList.remove('playing') // chuyển btn pause thành btn play
            }

            // Khi tiến độ bài hát thay đổi
            audio.ontimeupdate = function () {
                console.log(audio.currentTime);
            }
        }
    },

    loadCurrentSong: function () {
        // Gán giá trị bài hát hiện tại 
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('./${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
    },

    // Phương thức start() để bắt đầu
    start: function () {
        // Định nghĩa ra các thuộc tính cho object
        this.defineProperties();

        // Lắng nghe, xử lý các sự kiện (DOM event)
        this.handleEvents();

        // Tải thông tin bài hát đầu tiền vào UI khi chạy ứng dụng
        this.loadCurrentSong();


        // Render playlist 
        this.render();
    }
}

app.start();
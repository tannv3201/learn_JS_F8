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

const PLAYER_STORAGE_KEY = 'F8_PLAYER';

// Lấy ra các element 
const heading = $('header h2');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const cd = $('.cd');
const playBtn = $('.btn-toggle-play');
const player = $('.player');
const progress = $('#progress');
const volume = $('#volume');
const nextBtn = $('.btn-next');
const prevBtn = $('.btn-prev');
const randomBtn = $('.btn-random');
const repeatBtn = $('.btn-repeat');
const playlist = $('.playlist');
const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
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
            name: 'Suýt nữa thì',
            singer: 'ANDIEZ x BITI\'S HUNTER',
            path: './assets/music/suytnuathi.mp3',
            image: './assets/imgs/suytnuathi.jpg'
        },
        {
            name: 'Đồi hoa mặt trời',
            singer: 'Hoàng Yến Chibi',
            path: './assets/music/doihoamattroi.mp3',
            image: './assets/imgs/doihoamattroi.jpg'
        },
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
            name: 'Suýt nữa thì',
            singer: 'ANDIEZ x BITI\'S HUNTER',
            path: './assets/music/suytnuathi.mp3',
            image: './assets/imgs/suytnuathi.jpg'
        },
        {
            name: 'Đồi hoa mặt trời',
            singer: 'Hoàng Yến Chibi',
            path: './assets/music/doihoamattroi.mp3',
            image: './assets/imgs/doihoamattroi.jpg'
        },
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
            name: 'Suýt nữa thì',
            singer: 'ANDIEZ x BITI\'S HUNTER',
            path: './assets/music/suytnuathi.mp3',
            image: './assets/imgs/suytnuathi.jpg'
        },
        {
            name: 'Đồi hoa mặt trời',
            singer: 'Hoàng Yến Chibi',
            path: './assets/music/doihoamattroi.mp3',
            image: './assets/imgs/doihoamattroi.jpg'
        },
    ],
    setConfig: function (key, value) {
        this.config[key] = value;
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
    },
    render: function () {
        const htmls = this.songs.map((song, index) => {
            return `
            <div  class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
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
        playlist.innerHTML = htmls.join('');
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

        // Xử lý CD quay và dừng
        const cdThumbAnimate = cdThumb.animate([
            {
                transform: 'rotate(360deg)'
            }
        ], {
            duration: 10000, // 10 giây
            iterations: Infinity // Chạy vô hạn
        })
        cdThumbAnimate.pause()

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
        };
        // Khi bài hát được play 
        audio.onplay = function () {
            _this.isPlaying = true;
            player.classList.add('playing') // chuyển btn play thành btn pause
            cdThumbAnimate.play()
        };
        // Khi bài hát bị dừng
        audio.onpause = function () {
            _this.isPlaying = false;
            player.classList.remove('playing') // chuyển btn pause thành btn play
            cdThumbAnimate.pause()
        }

        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function () {
            if (audio.duration) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
                progress.value = progressPercent;
            }
        }

        // xử lý khi tua bài hát
        progress.onchange = function (e) {
            const seekTime = audio.duration * e.target.value / 100;
            audio.currentTime = seekTime;
        }

        // Xử lý volume
        volume.onchange = function (e) {
            const vol = e.target.value / 100;
            audio.volume = vol;
        }

        // xử lý khi tua bài hát

        // Next bài
        nextBtn.onclick = function () {
            if (_this.isRandom) {
                _this.playRandomSong()
            }
            else {
                _this.nextSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
        }

        // Prev  bài
        prevBtn.onclick = function () {
            if (_this.isRandom) {
                _this.playRandomSong()
            }
            else {
                _this.prevSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
        }

        // xử lý next khi hết bài
        audio.onended = function () {
            if (!_this.isRepeat) {
                nextBtn.click();
            }
            else {
                audio.play()
            }
        }

        // Xử lý repeat bài hát hiện tại
        repeatBtn.onclick = function () {
            _this.isRepeat = !_this.isRepeat;
            _this.setConfig('isRepeat', _this.isRepeat);
            repeatBtn.classList.toggle('active', _this.isRepeat);
        }

        // Xử lý random bài hát
        randomBtn.onclick = function () {
            _this.isRandom = !_this.isRandom
            _this.setConfig('isRandom', _this.isRandom);
            randomBtn.classList.toggle('active', _this.isRandom);
        }

        // Xử lý click bài hát ở playlist
        playlist.onclick = function (e) {
            const songNode = e.target.closest('.song:not(.active)');

            if (songNode || e.target.closest('.option')) {
                // Xử lý khi click vào song
                if (songNode) {
                    // _this.currentIndex = songNode.getAttribute('data-index');
                    _this.currentIndex = Number(songNode.dataset.index);
                    _this.loadCurrentSong();
                    audio.play();
                    _this.render();
                }

                // Xử lý khi click vào song option
                if (e.target.closest('.option')) {

                }
            }
        }
    },
    // Load config 
    loadConfig: function () {
        this.isRandom = this.config.isRandom;
        this.isRepeat = this.config.isRepeat;
    },

    loadCurrentSong: function () {
        // Gán giá trị bài hát hiện tại 
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('./${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
    },
    scrollToActiveSong: function () {
        setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'end',
            });
        }, 300);
    },

    // Next 
    nextSong: function () {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },
    // Previous
    prevSong: function () {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },

    // Random 
    playRandomSong: function () {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        } while (newIndex === this.currentIndex)
        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },

    // Phương thức start() để bắt đầu
    start: function () {

        // Load config
        this.loadConfig()

        // Định nghĩa ra các thuộc tính cho object
        this.defineProperties();

        // Lắng nghe, xử lý các sự kiện (DOM event)
        this.handleEvents();

        // Tải thông tin bài hát đầu tiền vào UI khi chạy ứng dụng
        this.loadCurrentSong();

        // Render playlist 
        this.render();

        // Hiển thị trạng thái ban đầu của button Repeat & random
        repeatBtn.classList.toggle('active', this.isRepeat);
        randomBtn.classList.toggle('active', this.isRandom);
    }
}

app.start();
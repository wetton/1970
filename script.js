window.addEventListener(
    "keydown",
    function(e) {
        // space and arrow keys
        if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    },
    false
);

let songArr = [
    "audio/Emerson, Lake & Palmer - The Barbarian.mp3",
    "audio/Emerson, Lake & Palmer - Take a Pebble.mp3",
    "audio/Emerson, Lake & Palmer - Knife-Edge.mp3",
    "audio/Emerson, Lake & Palmer - The Three Fates.mp3",
    "audio/Emerson, Lake & Palmer - Tank.mp3",
    "audio/Emerson, Lake & Palmer - Lucky Man.mp3"
];

let currentSong = 0;
let song = new Audio();
window.onload = function() {
    playSong();
};

function playSong() {
    song.src = songArr[currentSong];
    let cover = document.getElementById("cover")
    cover.src = "images/cover.jpg"
    let bg = document.getElementById("background-image")
    bg.style.backgroundImage = "url(images/cover.jpg)"
    let songTitle = document.getElementById("songTitle");
    songTitle.textContent = songArr[currentSong].slice(31, -4);
}

function playOrPauseSong() {
    let play = document.getElementById("play");

    if (song.paused) {
        song.play();
        play.src = "images/pause.png";
    } else {
        song.pause();
        play.src = "images/play.png";
    }
}

song.addEventListener("timeupdate", function() {
    convertTime(song.currentTime);
    if (song.ended) {
        next();
    }
});

function convertTime(seconds) {
    let currentTime = document.getElementById("currentTime");
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    currentTime.textContent = min + ":" + sec;
    totalTime(Math.floor(song.duration));
}

function totalTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    currentTime.textContent += " / " + min + ":" + sec;
}

function next() {
    currentSong++;
    if (currentSong >= songArr.length) {
        currentSong = 0;
    }
        playSong();
        song.play();

    play.src = "images/pause.png";
}

function prev() {
    currentSong--;
    if (currentSong < 0) {
        currentSong = songArr.length - 1;
    }
    playSong();
    song.play();
    play.src = "images/pause.png";
}


document.addEventListener("keydown", function(event) {
    if (event.keyCode === 39) {
        next();
    } else if (event.keyCode === 37) {
        prev();;
    } else if (
        event.keyCode === 32
    ) {
        playOrPauseSong();
    }
});

volumeslider = document.getElementById("volumeslider");
volumeslider.addEventListener("mousemove", setvolume);

function setvolume() {
    song.volume = volumeslider.value / 100;
}

function Emerson(){
    let photo = document.getElementById("photo")
    let cover = document.getElementById("cover")
    cover.style.opacity = 0;
    photo.src = "images/keith.jpg"
    photo.style.opacity = 1;
}

function Lake(){
    let photo = document.getElementById("photo")
    let cover = document.getElementById("cover")
    cover.style.opacity = 0;
    photo.src = "images/greg.jpg"
    photo.style.opacity = 1;
}

function Palmer(){
    let photo = document.getElementById("photo")
    let cover = document.getElementById("cover")
    cover.style.opacity = 0;
    photo.src = "images/carl.jpg"
    photo.style.opacity = 1;
}

function normalizeCover(){
    let photo = document.getElementById("photo")
    let cover = document.getElementById("cover")
    cover.style.opacity = 1;
    photo.style.opacity = 0;
}
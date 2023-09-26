

let songs = [

    "audio/Ayesha_x_Righteous_Feeling_Righteously_Yummy (1).mp3",
    "audio/Pr1videnye.mp3"
]

const path = songs[Math.floor(Math.random()*songs.length)];
var sound = new Audio();
sound.src = path;

function togglePlay() {
    if (sound.paused) {
        sound.play();
    }
    else {
        sound.pause();
    }
}

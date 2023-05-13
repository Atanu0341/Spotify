console.log("Welcome to Spotify");
// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('Tera_Zikr-Darshan_Raval.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    { songName: "Tera Zikr", filePath: "songs/Tera_Zikr-Darshan_Raval.mp3", coverPath: "cover1.jpg" },
    { songName: "Tera Zikr", filePath: "songs/Tera_Zikr-Darshan_Raval.mp3", coverPath: "cover1.jpg" },
    { songName: "Tera Zikr", filePath: "songs/Tera_Zikr-Darshan_Raval.mp3", coverPath: "cover1.jpg" },
]

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
})
// Listen to Events
document.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // update Seekbar
})

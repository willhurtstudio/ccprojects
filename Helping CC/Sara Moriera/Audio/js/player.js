console.log("hello world")
const currenTime = document.getElementById("current-time");
const totalTime = document.getElementById("total-time");
const playPauseButton = document.getElementById("play-pause-button");
const seekBar = document.getElementById("seek-bar");
const audio = new Audio ("AUDIO-2022.webm");
let isSeeking = false
playPauseButton.onclick = function(){
    if(audio.paused){
        audio.play();
    }else{
        audio.pause();
    }
}
//AUDIO LISTENERS
//event triggered once audio loaded
audio.oncanplaythrough = function(){
    seekBar.disabled = false;
}
//event triggered when audio plays
audio.onplay = function(){
    playPauseButton.src = "images/pause.svg"
}
//event triggered when audio paused
audio.onpause = function (){
    playPauseButton.src = "images/play.svg"
}
//event triggered by meta data load
audio.onloadedmetadata = function(){
    totalTime.innerHTML = formatTime(audio.duration);
    currenTime.innerHTML = formatTime(0);
    seekBar.max = Math.floor(audio.duration);
}
// event triggered when playback time updates
audio.ontimeupdate = function(){
    currenTime.innerHTML = formatTime(audio.currentTime)
    if(!isSeeking){
        seekBar.value = Math.floor(audio.currentTime)
    }

}
//event triggered when audio ends
audio.onended = function(){
    currenTime.innerHTML = formatTime(0);
    seekBar.value = 0;
    playPauseButton.src = "images/play.svg";
}
//SEEK BAR LISTENERS
//event triggered on intercation with seek bar
seekBar.oninput = function(){
    isSeeking = true;
}
//event triggered when  seek bar changed manually
seekBar.onchange = function (){
    audio.currentTime = seekBar.value;
    isSeeking = false

}

//UTILITY FUNCTIONS
// takes total seconds (number) and returns a formatted string 
function formatTime(secs) {
    let hours = Math.floor(secs / 3600);
    let minutes = Math.floor((secs - (hours * 3600)) / 60);
    let seconds = Math.floor((secs - (hours * 3600)) - minutes * 60);
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (hours > 0) {
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return hours + ":" + minutes + ":" + seconds;
    } else {
        return minutes + ":" + seconds;
    }
}
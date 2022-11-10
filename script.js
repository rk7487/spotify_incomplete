console.log("welcome to Spotify");
// Initialize the variable
let songInded = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songsItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName:"Duniya", filePath: "song/Duniya.mp3", coverPath: "covers/Duniya.jpg" },
    {songName:"khairiyat", filePath: "song/khairiyat.mp3", coverPath: "covers/khairiyat.jpg" },
    {songName:"lut gaye", filePath: "song/lut gaye.mp3", coverPath: "covers/lut gaye.jpg" },
    {songName:"machri", filePath: "song/machri.mp3", coverPath: "covers/machri.jpg" },
    {songName:"nadi beeche", filePath: "song/nadi beeche.mp3", coverPath: "covers/nadi beeche.jpg" },
]

songsItems.forEach((element, i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;


})
//handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value/100)*audioElement.duration;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
        })    
}

Array.from(document.getElementsByClassName('.songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songsItems.
        audioElement.currentTime = 0;
        audioElement.play();
    })

})
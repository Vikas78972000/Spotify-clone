//Initialize the variables
let songIndex = 0;
let audioElement = new Audio("audio/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  { songName: "Elvish Yadav Rao Sahab Rollin Music", filePath: "audio/1.mp3", coverPath: "img/1.jpg" },
  { songName: "Imran Khan Amplifier Official Music", filePath: "audio/2.mp3", coverPath: "img/2.jpg" },
  { songName: "Sarkar Jaura Phagwara Official ", filePath: "audio/3.mp3", coverPath: "img/3.jpg" },
  { songName: "Chhor Denge Parampara Tandon Sachet ", filePath: "audio/4.mp3", coverPath: "img/4.jpg" },
  { songName: "DILBAR Lyrical Satyameva Jayate John ", filePath: "audio/5.mp3", coverPath: "img/5.jpg" },
  { songName: "Full Song O SAKI SAKI Batla House Nora Fatehi ", filePath: "audio/6.mp3", coverPath: "img/6.jpg" },
  { songName: "Kamli Song Dhoom 3 Katrina Kaif Aamir Khan ", filePath: "audio/7.mp3", coverPath: "img/7.jpg" },
  { songName: "Laila Main Laila Raees Shah Rukh Khan ", filePath: "audio/8.mp3", coverPath: "img/8.jpg" },
  { songName: "Munni Badnaam Hui Full Song Dabangg ", filePath: "audio/9.mp3", coverPath: "img/9.jpg" },
  {
    songName: "PREM RATAN DHAN PAYO Title Song",
    filePath: "audio/10.mp3",
    coverPath: "img/10.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
// audioElement.play();
//Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-regular", "fa-circle-play");
    masterPlay.classList.add("fa-regular", "fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-regular", "fa-circle-pause");
    masterPlay.classList.add("fa-regular", "fa-circle-play");
    gif.style.opacity = 0;
  }
});
//Listen to Events
audioElement.addEventListener("timeupdate", () => {
  //update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      songIndex = parseInt(e.target.id);
      audioElement.src = `audio/${songIndex+1}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-regular", "fa-circle-play");
    masterPlay.classList.add("fa-regular", "fa-circle-pause");
    masterSongName.innerText = songs[songIndex].songName;
    });
  }
);

document.getElementById('next').addEventListener('click', () =>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
songIndex += 1;
    }
    audioElement.src = `audio/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-regular", "fa-circle-play");
  masterPlay.classList.add("fa-regular", "fa-circle-pause");
  masterSongName.innerText = songs[songIndex].songName;
})

document.getElementById('previous').addEventListener('click', () =>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
songIndex -= 1;
    }
    audioElement.src = `audio/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-regular", "fa-circle-play");
  masterPlay.classList.add("fa-regular", "fa-circle-pause");
  masterSongName.innerText = songs[songIndex].songName;
})

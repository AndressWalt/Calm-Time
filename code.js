const songs = [
    {
        title: "Ruins - Nick Nitro",
        file: "./audio/Ruins-NickNitro.mp3",
    },
    {
        title: "Hopes - Lofi Lia",
        file: "./audio/HopesAndDreams-LofiLia.mp3",
    },
    {
        title: "Bonetrousle - Jonas Munk",
        file: "./audio/Bonetrousle-JonasMunk.mp3",
    },
    {
        title: "Bonetrousle - Jonas Munk",
        file: "./audio/Bonetrousle-JonasMunk.mp3",
    },
    {
        title: "Bonetrousle - Jonas Munk",
        file: "./audio/Bonetrousle-JonasMunk.mp3",
    },
    {
        title: "Bonetrousle - Jonas Munk",
        file: "./audio/Bonetrousle-JonasMunk.mp3",
    },
];
songs.sort(()=> Math.random()-0.5);

let index = 0;

const playClass = "fa-circle-play";
const pauseClass = "fa-circle-pause";

let songName = document.getElementById("song");
let totalSongs = document.getElementById("total-songs");
let firstNum = document.getElementById("firstNum");
let lastNum = document.getElementById("lastNum");
lastNum.textContent = songs.length

const backButton = document.querySelector(".left-button");
const playButton = document.querySelector(".play-button");
const nextButton = document.querySelector(".right-button");

const audio = document.getElementById("audio");


playButton.addEventListener("click",() => {
    if(audio.paused){
        playSong();
    } else {
        pauseSong();
    }
});


function actualSong(index  = 1) {
    songName.textContent = songs[index].title;
    audio.src = songs[index].file;
};
actualSong();


function playSong() {
    audio.play();
    changeIcon();
};
function pauseSong(){
    audio.pause();
    changeIcon();
};


function changeIcon() {
    if(audio.paused) {
        playButton.classList.remove(pauseClass);
        playButton.classList.add(playClass);
    } else {
        playButton.classList.add(pauseClass);
        playButton.classList.remove(playClass);
    }

    if(index == 0) backButton.classList.add("unabled");
    else backButton.classList.remove("unabled");
    
    if(index == songs.length-1) nextButton.classList.add("unabled");
    else nextButton.classList.remove("unabled");

    backButton.addEventListener("click", ()=> {
        if(backButton.classList.contains("unabled")) {
            backButton.classList.add("blocked");
            setTimeout(()=> backButton.classList.remove("blocked"), 600);
        };
    });
    nextButton.addEventListener("click", ()=> {
        if(nextButton.classList.contains("unabled")) {
            nextButton.classList.add("blocked");
            setTimeout(()=> nextButton.classList.remove("blocked"), 600);
        };
    });
};
changeIcon()

function buttonShake(){
    if(backButton.classList.contains("unabled")) backButton.classList.add("blocked");
};



function backSong(){
    if(index > 0 && index <= songs.length -1 ){
        index -= 1;
        actualSong(index);
        playSong();
        firstNum.textContent = index + 1;
    }
}
function nextSong(){
    if(index >= 0 && index < songs.length -1 ){
        index += 1;
        actualSong(index);
        playSong();
        firstNum.textContent = index + 1;
    }
}


backButton.addEventListener("click",() => {
    backSong();
});
nextButton.addEventListener("click",() => {
    nextSong();
});


audio.addEventListener("ended", () => {
    if(index == songs.length-1) {
        playButton.classList.remove(pauseClass);
        playButton.classList.add(playClass);
    } else {
        nextSong
    }
})


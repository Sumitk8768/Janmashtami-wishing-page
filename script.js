let PlayBtn = document.querySelector(".play");
let videoContainer = document.querySelector(".video-container");
let video = document.getElementById("myVideo");
let bigContainer = document.querySelector(".biggest-container");
let btnContainer = document.querySelector(".back-container");
let goBack = document.querySelector(".backBtn");

PlayBtn.addEventListener("click", () => { 
    bigContainer.classList.add("hide");
    videoContainer.classList.remove("hide");
    goBack.classList.remove("hide");
    btnContainer.classList.remove("hide");
    video.muted = false;
    restartVideo()
})

goBack.addEventListener("click",() => {
    bigContainer.classList.remove("hide");
    videoContainer.classList.add("hide");
    goBack.classList.add("hide");
    btnContainer.classList.add("hide");
    video.muted = true;
})

function restartVideo() {
    var video = document.getElementById("myVideo");
    video.currentTime = 0; // Set the current time to 0 (start of the video)
    video.play(); // Play the video from the beginning
  }

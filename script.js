var carregando = document.getElementById("carregando")
function inicia() {
    setTimeout(() => {
        carregando.style.display = "none"
        conteudo.style.display = "block"
    }, 500);
}

var videoElement = document.querySelector("#video");
var playPauseButton = document.querySelector("#playPauseButton span");
var playPauseButtonc = document.querySelector("#playPauseButtonc");
var playPauseButtoncs = document.querySelector("#playPauseButtonc span");
var currentTimeSpan = document.querySelector("#currentTime");
var durationSpan = document.querySelector("#duration");
var progressBar = document.querySelector("#progressBar");
var downloadLink = document.querySelector("#downloadLink");
var videoControls = document.querySelector("#video-controls");
var videoBtnCell = document.querySelector("#video-btn-cell");
var videoBtn = document.querySelector("#video-btn span");
var videoBtnAfter = document.querySelector("#video-btn-after");
var telaCheia = document.querySelector("#tela-cheia span");
var isPlaying = false;
var isFullscreen = false;

videoElement.addEventListener("loadedmetadata", function () {
    durationSpan.textContent = formatTime(videoElement.duration);
    progressBar.max = videoElement.duration;
});

videoElement.addEventListener("timeupdate", function () {
    currentTimeSpan.textContent = formatTime(videoElement.currentTime);
    progressBar.value = videoElement.currentTime;
});

function togglePlayPause() {
    if (videoElement.paused) {
        videoElement.play();
        playPauseButton.innerHTML = "pause";
        playPauseButtoncs.innerHTML = "pause";
    } else {
        videoElement.pause();
        playPauseButton.innerHTML = "play_arrow";
        playPauseButtoncs.innerHTML = "play_arrow";
    }
    isPlaying = !isPlaying;
}

function seekVideo() {
    videoElement.currentTime = progressBar.value;
}

function btnControl() {
    if (videoControls.style.display === "flex") {
        if (window.matchMedia("screen and ('orientation:landscape')")) {
            vire.style.display = "none"
        }
        videoBtnCell.innerHTML = "<span class='material-symbols-rounded'>visibility</span>Assistir video"
        videoBtnAfter.innerHTML = "Assistir video"
        videoBtnAfter.style.justifyContent = "center"
        videoBtn.innerHTML = "visibility"
        videoControls.style.display = "none";
        playPauseButtonc.style.display = "none";
        divVideo.style.zIndex = -1
        videoElement.play()
        playPauseButton.innerHTML = "pause";
        playPauseButtoncs.innerHTML = "pause";
    } else {
        vire.style.display = "flex"
        videoBtnCell.innerHTML = "<span class='material-symbols-rounded'>visibility</span>Parar de assistir"
        videoBtnAfter.innerHTML = "Parar de assistir"
        videoBtnAfter.style.justifyContent = "end"
        videoBtn.innerHTML = "visibility_off"
        videoControls.style.display = "flex";
        playPauseButtonc.style.display = "flex";
        divVideo.style.zIndex = 100
        for (let i = 0; i < divTitulos.length; i++) {
            divTitulos[i].classList.remove("abrir-texto")
            setTimeout(() => {
                divInterna[i - 1].style.opacity = 0
                divTextoH1[i].style.display = "block"
                divInterna[i - 1].style.display = "none"
                divTextoH1[i].style.opacity = 1
            }, 500);
        }
    }
}

function toggleFullscreen() {
    if (!isFullscreen) {
        telaCheia.innerHTML = "fullscreen_exit"
        if (divVideo.requestFullscreen) {
            divVideo.requestFullscreen();
        } else if (divVideo.mozRequestFullScreen) { // Firefox
            divVideo.mozRequestFullScreen();
        } else if (divVideo.webkitRequestFullscreen) { // Chrome, Safari and Opera
            divVideo.webkitRequestFullscreen();
        } else if (divVideo.msRequestFullscreen) { // IE/Edge
            divVideo.msRequestFullscreen();
        }
    } else {
        telaCheia.innerHTML = "fullscreen"
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
    }
}

// Evento chamado quando o modo de tela cheia é ativado ou desativado
document.addEventListener("fullscreenchange", function() {
    isFullscreen = !isFullscreen;
    if (isFullscreen) {
        divVideo.classList.add("fullscreen");
        telaCheia.innerHTML = "fullscreen_exit"
    } else {
        divVideo.classList.remove("fullscreen");
        telaCheia.innerHTML = "fullscreen"
    }
});
document.addEventListener("webkitfullscreenchange", function() {
    isFullscreen = !isFullscreen;
    if (isFullscreen) {
        divVideo.classList.add("fullscreen");
        telaCheia.innerHTML = "fullscreen_exit"
    } else {
        divVideo.classList.remove("fullscreen");
        telaCheia.innerHTML = "fullscreen"
    }
});
document.addEventListener("mozfullscreenchange", function() {
    isFullscreen = !isFullscreen;
    if (isFullscreen) {
        divVideo.classList.add("fullscreen");
        telaCheia.innerHTML = "fullscreen_exit"
    } else {
        divVideo.classList.remove("fullscreen");
        telaCheia.innerHTML = "fullscreen"
    }
});
document.addEventListener("MSFullscreenChange", function() {
    isFullscreen = !isFullscreen;
    if (isFullscreen) {
        divVideo.classList.add("fullscreen");
        telaCheia.innerHTML = "fullscreen_exit"
    } else {
        divVideo.classList.remove("fullscreen");
        telaCheia.innerHTML = "fullscreen"
    }
});

function formatTime(timeInSeconds) {
    var minutes = Math.floor(timeInSeconds / 60);
    var seconds = Math.floor(timeInSeconds % 60);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

var vire = document.querySelector("#vire")
function aparecerControle() {
    playPauseButtonc.style.display = "flex"
    videoControls.style.display = "flex"
    setTimeout(() => {
        videoControls.style.opacity = 1
        playPauseButtonc.style.opacity = 1
    }, 1);
    clearTimeout(videoElement.timeoutId)
    videoElement.timeoutId = setTimeout(() => {
            playPauseButtonc.style.opacity = 0
            videoControls.style.opacity = 0
            setTimeout(() => {
                playPauseButtonc.style.display = "none"
                videoControls.style.display = "none"
            }, 500);
        
    }, 1000);
}


var c = 0;
var videos = ["russia.webm", "agricultura.webm", "pecuaria.webm", "energia.webm", "industria.webm", "populacao.webm", "conflitos.webm"];
var videoElement = document.querySelector("#video");
var divVideo = document.querySelector("#divVideo");
var divSeta1 = document.querySelector("#div-seta1");
var divSeta2 = document.querySelector("#div-seta2");
var divSeta1Cell = document.querySelector("#div-seta1-cell");
var divSeta2Cell = document.querySelector("#div-seta2-cell");
var divTitulos = document.querySelectorAll(".div-titulo")
var videoPlaceholder = document.querySelector("#video-placeholder");

function next() {
    c++;

    videoElement.src = `videos/${videos[c]}`;
    videoElement.load();
    videoElement.play().catch(error => {
        console.error("Error playing video:", error);
    });

    if (c >= videos.length - 1) {
        divSeta2.classList.add("desativado");
        divSeta2Cell.classList.add("desativado");
    } else {
        divSeta2.classList.remove("desativado");
        divSeta2Cell.classList.remove("desativado");
    }
    for (var i = 0; i < divTitulos.length; i++) {
        if (i === c) {
            divTitulos[i].style.display = "flex";
        } else {
            divTitulos[i].style.display = "none";
        }
    }
    divSeta1.classList.remove("desativado");
    divSeta1Cell.classList.remove("desativado");
    for (let i = 1; i < divTitulos.length; i++) {
        divTitulos[i].classList.remove("abrir-texto")
        divTextoH1[i].style.display = "block"
        setTimeout(() => {
            divTextoH1[i].style.opacity = 1
            divInterna[i - 1].style.opacity = 0
            divInterna[i - 1].style.display = "none"
        }, 500);
    }
}

function prev() {
    c--;

    videoElement.src = `videos/${videos[c]}`;
    videoElement.load();
    videoElement.play().catch(error => {
        console.error("Error playing video:", error);
    });

    if (c >= videos.length) {
        divSeta2.classList.add("desativado");
        divSeta2Cell.classList.add("desativado");
    } else {
        divSeta2.classList.remove("desativado");
        divSeta2Cell.classList.remove("desativado");
    }
    if (c === 0) {
        divSeta1.classList.add("desativado");
        divSeta1Cell.classList.add("desativado");
    } else {
        divSeta1.classList.remove("desativado");
        divSeta1Cell.classList.remove("desativado");
    }
    for (var i = 0; i < divTitulos.length; i++) {
        if (i === c) {
            divTitulos[i].style.display = "flex";
        } else {
            divTitulos[i].style.display = "none";
        }
    }
    for (let i = 1; i < divTitulos.length; i++) {
        divTitulos[i].classList.remove("abrir-texto")
        divTextoH1[i].style.display = "block"
        setTimeout(() => {
            divTextoH1[i].style.opacity = 1
            divInterna[i - 1].style.display = "none"
            divInterna[i - 1].style.opacity = 0
        }, 500);
    }
}

var divTextoH1 = document.querySelectorAll(".div-titulo h1")
var divInterna = document.querySelectorAll(".div-interna")
function abrir(n) {
    if (divTitulos[n].classList.contains("abrir-texto")) {
        if (window.matchMedia("(orientation:landscape)").matches) {
            divTitulos[n].classList.remove("abrir-texto")
            divInterna[n - 1].style.opacity = 0
            divTextoH1[n].style.display = "block"
            divInterna[n - 1].style.display = "none"
            setTimeout(() => {
                divTextoH1[n].style.opacity = 1
            }, 500);
        }
    } else {
        divTitulos[n].classList.add("abrir-texto")
        divTextoH1[n].style.opacity = 0
        divTextoH1[n].style.display = "none"
        divInterna[n - 1].style.display = "block"
        setTimeout(() => {
            divInterna[n - 1].style.opacity = 1
        }, 500);
    }
}

function fecharCell(n) {
    divInterna[n - 1].style.opacity = 0
    divTextoH1[n].style.display = "block"
    divInterna[n - 1].style.display = "none"
    setTimeout(() => {
        divTitulos[n].classList.remove("abrir-texto")
    }, 1);
    setTimeout(() => {
        divTextoH1[n].style.opacity = 1
    }, 500);
}




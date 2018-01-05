/* SABER LASER */

$(".toggle-icon").click(function() {
  $(".overlay").toggleClass("anim");
});

$(".toggle-icon").click(function() {
  $("#nav-container").toggleClass("pushed");
});

/* EDUCATION & EXPERIENCE TABS */

$(".startabs").tabs({ 
  show: ('slow', { duration: 800 }) ,
  hide: ('slow', { duration: 400 }) 
});

$("#educacion").tabs({ 
  show: ('slow', { duration: 600 }) ,
  hide: ('slow', { duration: 300 }) 
});

/* VIDEO PLAYER */

//GET ELEMENTS

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress-bar');
const playerToggle = player.querySelector('.playertoggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player-slider');


//FUNCTIONS

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  const playicon = '<i class="fa fa-play"></i>';
  const pauseicon = '<i class="fa fa-pause"></i>';
  const playericon = this.paused ? playicon : pauseicon;
  playerToggle.innerHTML = playericon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function progressBarUpdater() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / profress.offsetWidth) * videoduration;
  video.currentTime = scrubTime;  
}

//EVENT LISTENERS

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

playerToggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', progressBarUpdater));
ranges.forEach(range => range.addEventListener('mousemove', progressBarUpdater));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
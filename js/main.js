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
const playerToggle = player.querySelector('.playertoggle');
const mute = player.querySelector('.mute-button');
const controls = player.querySelector('.hide-controls');
const expandclass = player.querySelector('.fa-expand');


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

function mutePush() {
  if( $("video").prop('muted') ) {
    $("video").prop('muted', false);
  } else { $("video").prop('muted', true);
  }
  const muteON = '<i class="fa fa-volume-up"></i>';
  const muteOFF = '<i class="fa fa-volume-off"></i>';
  const muteicon = $("video").prop('muted') ? muteOFF : muteON;
  mute.innerHTML = muteicon;
}

function expandToggle() {
  const toexpand = '<i class="fa fa-expand expand-function"></i>';
  const compress = '<i class="fa fa-compress expand-function"></i>';
  if ($(".fa-expand")) {
    expandclass.classList.toggle('fa-compress');
  }
}

//EVENT LISTENERS

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
mute.addEventListener('click', mutePush);
playerToggle.addEventListener('click', togglePlay);
expandclass.addEventListener('click', expandToggle);
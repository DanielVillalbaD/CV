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
const playerIcon = player.querySelector('.fa');
//const expand = player.querySelector('.fa-expand');
//const compress = player.querySelector('.expand-video');


//FUNCTIONS

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
  if ($(".fa-play")) {
    playerIcon.classList.toggle('fa-pause');
  }
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

//EVENT LISTENERS

// expand.addEventListener('click', expandToggle);
video.addEventListener('click', togglePlay);
mute.addEventListener('click', mutePush);
playerToggle.addEventListener('click', togglePlay);
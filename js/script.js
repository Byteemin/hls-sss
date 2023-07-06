var video = document.querySelector('video');
var play_stope_bool = false;
document.addEventListener('keydown', function(event) {
  if (event.code === 'Space' & play_stope_bool) {
    video.play();
    play_stope_bool = false;
  }
  else {
    video.pause();
    play_stope_bool = true;  
  }
});
document.addEventListener('click', function() {
  if (play_stope_bool) {
    video.play();
    play_stope_bool = false;
  }
  else {
    video.pause();
    play_stope_bool = true;  
  }
});


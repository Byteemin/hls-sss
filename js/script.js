document.addEventListener('DOMContentLoaded', function() {

  var video = document.getElementById('video');
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
  
  var timeline = document.querySelector('player-sidebar__time-line');
  //не хочет выполнять
  var progress = document.getElementById('proggress');
  
  
  video.addEventListener('timeupdate', function() {
    var currentTime = video.currentTime;
    var duration = video.duration;
    var percentage = (currentTime / duration) * 100;
    percentage = percentage.toFixed(2).toString() + '%';
    //не хочет выполнять
    progress.style.width = percentage + '%'; 
  });

});
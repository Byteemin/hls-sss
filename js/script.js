document.addEventListener('DOMContentLoaded', function() {

  var seconds_for_rewind = 10;

  if (Hls.isSupported()) {
    var video = document.getElementById('video');
    var config = {
      autoStartLoad: true,
    };
    
    var hls = new Hls(config);

    hls.on(Hls.Events.MEDIA_ATTACHED, function () {
      console.log('video and hls.js are now bound together !');
    });
    hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
      console.log(
        'manifest loaded, found ' + data.levels.length + ' quality level'
      );
    });
    hls.loadSource('https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8');
    // bind them together
    hls.attachMedia(video);
  }




// Пауза и старт виде по нажатию Пробела или клику по видео
  var video = document.getElementById('video');
  var play_stope_bool = false;
  document  .addEventListener('keydown', function(event) {
    if (event.code === 'Space' & play_stope_bool) {
      video.play();
      play_stope_bool = false;
    }
    else {
      video.pause();
      play_stope_bool = true;  
    }
  });
  video.addEventListener('click', function() {
    if (play_stope_bool) {
      video.play();
      play_stope_bool = false;
    }
    else {
      video.pause();
      play_stope_bool = true;  
    }
  });
  

  // Полоса видео и сколько осталось в минутах
  var timeline = document.querySelector('.player-sidebar__time-line');
  var progress = document.querySelector('.player-sidebar__time-line--filling');
  var timeLeft  = document.querySelector('.controls__vidoe-time');

// Клик по тайм лайн
  timeline.addEventListener('click', function(event) {
    var timelineWidth = timeline.offsetWidth;
    var offsetX = event.offsetX;
    var percentage = (offsetX / timelineWidth) * 100;
    var currentTime = (video.duration / 100) * percentage;
    video.currentTime = currentTime;
  });
  

// Полоса видео
  video.addEventListener('timeupdate', function() {
    var currentTime = video.currentTime;
    var duration = video.duration;
    var percentage = (currentTime / duration) * 100;
    progress.style.width = percentage + '%'; 
  });

// Время до конца видео
  video.addEventListener('timeupdate', function() {
    var remainingTime = video.duration - video.currentTime;
    var minutes = Math.floor(remainingTime / 60);
    // var seconds = Math.floor(remainingTime % 60);
    var formattedTime = "Еще " + minutes + " минут";
    timeLeft.textContent = formattedTime;
  });

// Обработчик события нажатия на клавишу
  document.addEventListener('keydown', function(event) {
    switch (event.key) {
      case 'ArrowLeft':
        rewindVideo(-10); // перемотка назад на 10 секунд
        break;
      case 'ArrowRight':
        rewindVideo(10); // перемотка вперед на 10 секунд
        break;
    }
  });

  // Функция для перемотки видео
  function rewindVideo(seconds_for_rewind) {
    video.currentTime += seconds_for_rewind;
  }

  // var timeLeft  = document.querySelector('.controls');
  // var mouseMoved = false;
// Обработчик события движения мыши
  // document.addEventListener('mousemove', function() {
  //   mouseMoved = true;
  //   showHiddenPanel();
  // });

// // Обработчик события скроллинга
//   document.addEventListener('scroll', function() {
//     if (mouseMoved) {
//       showHiddenPanel();
//     }
//   });

// Функция для отображения скрытой панели
  // function showHiddenPanel() {
  //   if (hiddenPanel.style.display === 'none') {
  //     // hiddenPanel.style.display = 'flex';
  //   }
  // }
});
document.addEventListener('DOMContentLoaded', function() {

  var seconds_for_rewind = 10;
  var video = document.getElementById('video');
  var hiddenPanel = document.querySelector('.controls');
  var timeout;
  var isClickEvent = false; // Флаг для определения события клика

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


 var mouseReaction = true;


  document.addEventListener('mousemove', appearanceControls);   // Обработчик события движения мыши

// Появление/скрытие панели
  function appearanceControls(event) {
    if (event.type ==='mousemove' && mouseReaction) {
      hiddenPanel.style.display = 'flex';
      resetTimer();
    }
    else {
      if (video.paused) {
        hiddenPanel.style.display = 'none';
        mouseReaction = false;
      }
      else {
        hiddenPanel.style.display = 'flex';
        mouseReaction = false;
      }
    }
  }

// Таймер для сброса значения mouseMoved
  function resetTimer() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      hiddenPanel.style.display = 'none';
    }, 2000); // Время задержки перед сокрытием панели (2 секунды)
  }

  





// Обработчик события нажатия клавиши Пробел
  document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' && !isClickEvent) {
      appearanceControls(event);       
      togglePlayPause();
    }
  });
  
// Обработчик события клика на видео
  video.addEventListener('click', function(event) {
    isClickEvent = true;
    appearanceControls(event);
    togglePlayPause();
  });
  
// Обработчик события окончания клика на видео
  video.addEventListener('mouseup', function() {
    isClickEvent = false;
  });

// Функция для переключения паузы и старта видео
function togglePlayPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

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


  // Включение полноэкранного режима по нажатию на клавишу "Enter"
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    video.requestFullscreen();
    video.controls = false;
  }
});
});
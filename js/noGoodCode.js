document.addEventListener('DOMContentLoaded', function() {

  var video = document.getElementById('video');
  var hiddenPanel = document.querySelector('.controls');
  var timeout;
  var seconds_for_rewind = 10;                                                        // Секунды для перемотки
  var isClickEvent = false;                                                          // Флаг для определения события клика
  var timeline = document.querySelector('.player-sidebar__time-line');
  var progress = document.querySelector('.player-sidebar__time-line--filling');
  var timeLeft  = document.querySelector('.controls__vidoe-time');

// Данные из апи
  var tvName = document.querySelector('.tv-program__name');    // Имя телеканала
  var tvIcon = document.querySelector('.tv-program__icon');   // Иконка телеканала
  var tvnext = document.querySelector('.tv-about__next');    // Следуящая программа
  var tvtype = document.querySelector('.tv-program__type'); // Тип программы


// баг убрать со скрытием/появлением при стоп и движении мыши
// Прописать замену для апишки
// Переход по каналам для стрелок вверх/вниз
// Шрифты
// Структуризация кода






// Поддержка hls
  // if (Hls.isSupported()) {
  //   var video = document.getElementById('video');
  //   var config = {
  //     autoStartLoad: true,
  //   };
  //   var hls = new Hls(config);
  //   hls.loadSource('https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8');
  //   // bind them together
  //   hls.attachMedia(video);
  // }

  document.addEventListener('mousemove', appearanceControls); // Обработчик события движения мыши
  video.addEventListener('mouseup', endClickMouse);          // Обработчик события окончания клика на видео





// // Обработчик события нажатия клавиши Пробел
//   document.addEventListener('keydown', function(event) {
//     if (event.code === 'Space' && !isClickEvent) {     
//       togglePlayPause();
//     }
//   });
// // Обработчик события нажатия на клавишу
// document.addEventListener('keydown', function(event) {
//   switch (event.key) {
//     case 'ArrowLeft':
//       rewindVideo(-10); // перемотка назад на 10 секунд
//       break;
//     case 'ArrowRight':
//       rewindVideo(10); // перемотка вперед на 10 секунд
//       break;
//   }
// });
// Включение полноэкранного режима по нажатию на клавишу "Enter"
  // document.addEventListener('keydown', function(event) {
  //   if (event.key === 'Enter') {
  //     video.requestFullscreen();
  //     video.controls = false;
  //   }
  // });



// Обработчик события клика на видео
// video.addEventListener('click', function(event) {
  isClickEvent = true;
//   togglePlayPause();
// });

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


// Таймер для сброса панели
function resetTimer() {
  clearTimeout(timeout);
  timeout = setTimeout(function() {
    hiddenPanel.style.display = 'none';
  }, 2000); // Время задержки перед сокрытием панели (2 секунды)
}

// 
function endClickMouse() {
  isClickEvent = false;
}

// // Функция для переключения паузы/старта видео
//   function togglePlayPause() {
//     if (video.paused) {
//       video.play();
//       appearanceControls();
//     } else {
//       video.pause();
//       appearanceControls();
//     }
//   }
  // Функция появление/скрытие панели
  function appearanceControls() {
    if (!video.paused) { // Если видео не на паузе показ панели и сброс через 2 секунды
      hiddenPanel.style.display = 'flex';
      resetTimer();
    }
    else {
      hiddenPanel.style.display = 'flex';
    }
  }

// // Функция для перемотки видео
//   function rewindVideo(seconds_for_rewind) {
//     video.currentTime += seconds_for_rewind;
//   }
});
document.addEventListener('DOMContentLoaded', main);
// Реакция на клавишы              сделана
// Реакция на клики
// Появление  панели




function main() {
  var video = document.getElementById('video'); // тег видео для загрузки hls плеера

  addHls('https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8');
  document.addEventListener('keydown', handlerKeyboards);
  // video.addEventListener('click', handlerClickVideo);

}
// Добавим на страницу видео 
function addHls(src_video) {
  if (Hls.isSupported(video)) {
    var config = {
      autoStartLoad: true,
    };
    var hls = new Hls(config);
    hls.loadSource(src_video);
    // bind them together
    hls.attachMedia(video);
  }
}

// Обраюотка клавиатуры
function handlerKeyboards(event) {
  var isSpacePressed = false;
  var powerVolume = 0; // мощность звука 

  event.preventDefault(); // выключим все действия по умолчанию
  switch (event.code) {
    case 'Enter':
      video.requestFullscreen();
    break;
    case 'Space':
      tumblerPauseOrPlay();
    break;
    case 'ArrowLeft':
      rewindVideo(false);
    break;
    case 'ArrowRight':
      rewindVideo(true);
    break;
    case 'ArrowUp':
      shiftChannel(true);
    break;
    case 'ArrowDown':
      shiftChannel(false);
    break;
    case 'Equal':
      controlSound('+');
    break;
    case 'Backslash':
      controlSound('*');
    break;
    case 'Minus':
      controlSound('-');
    break;
  }
  
}

// Обработка пробела
function handleSpaceKey() {
  if (!isSpacePressed) {
    isSpacePressed = true;
    tumblerPauseOrPlay();
  }
}

// Переключатель паузы и стопа
function tumblerPauseOrPlay() {
  if (video.paused) {
    video.play();
  }
  else {
    video.pause();
  }
}

// Перемотка видео вперед/назад
function rewindVideo(optionRewind) {
  var seconds_for_rewind = 10;
  if (optionRewind) {
    video.currentTime += seconds_for_rewind;
  }
  else {
    video.currentTime -= seconds_for_rewind;
  }
}

// Переключение каналов
function shiftChannel(optionShift) {
  console.log('in developing^^');
  // if (optionShift) {
    
  // }
  // else {

  // }
}

// Управление звуком по клавишам
function controlSound(optionSound) {
  var stepVolume = 0.1 // шаг переключения
  switch (optionSound) {
    case '+':
      video.volume += stepVolume;
      break;
      case '*':
        if (video.volume === 0) {
          video.volume = powerVolume; // Восстановление предыдущего значения громкости
        } else {
          powerVolume = video.volume; // Сохранение текущего значения громкости
          video.volume = 0;
        }
      break;
      case '-':
      video.volume -= stepVolume;
      break;
  }
}


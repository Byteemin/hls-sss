document.addEventListener('DOMContentLoaded', main);
// Реакция на клавишы              сделана
// Реакция на клики                сделана
// Появление  панели               сделана


function main() {
  var video = document.getElementById('video'); // тег видео для загрузки hls плеера
  addHls('https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8');
  document.addEventListener('keydown', handlerKeyboards);                 // Отслеживаем клавиши
  document.addEventListener('click', handlerClickVideo);                 // Отслеживаем клики
  video.addEventListener('timeupdate', changeTimeLine);                 // Обновляем полосу прогресса
  video.addEventListener('pause', appearanceOrDisappearanceControls);  // Отслеживаем остановку видео
  video.addEventListener('play', appearanceOrDisappearanceControls);  // Отслеживаем старт видео
  document.addEventListener('mousemove', peekControls);              // Обработчик события движения мыши


  const url = 'https://pl.iptv2021.com/api/v4/playlist';
  // Занесем тестовый URL в переменную
  // const url = 'https://jsonplaceholder.typicode.com/users';
  sendRequest('GET', url) 
    .then(data => console.log(data)) 
    .catch(err => console.log(err)) 

  

  

}


function sendRequest(method, url, body = null) {
  const headers = {
    'User-Agent': '{"platform":"android","app":"limehd.ru.ctv.nsk","version_name":"2.8.3","version_code":"286","sdk":"29","name":"PHONE","device_id":"43592e017890be21"}'
  };
  return fetch(url, {
    method: method,
    headers: headers
  }).then( response => {
    return response.json()
  })
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

// Обработка клавиатуры
function handlerKeyboards(event) {
  var powerVolume = 0; // мощность звука 

  switch (event.code) {
    case 'Enter':
      video.requestFullscreen();
      handleFullscreenChange()
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

// Переключатель паузы и стопа
function tumblerPauseOrPlay() {
  video.paused ? video.play() : video.pause();
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

// Обработка кликов на странице
function handlerClickVideo(event) {
  switch (event.target.classList[0]) {
    case 'player__video':
      tumblerPauseOrPlay();
    break;
    case 'player-sidebar__time-line':
      jumpVideo(event);
    break;
    case 'player-sidebar__time-line--filling':
      jumpVideo(event);
    break;
  }
}

// Прыжки в видео по шкале в перед
function jumpVideo(event) {
  video.currentTime = (video.duration / 100) * (event.offsetX / document.querySelector('.player-sidebar__time-line').offsetWidth) * 100;
}

// Изменение шкалы видео под момент который происходит
function changeTimeLine(params) {
  document.querySelector('.player-sidebar__time-line--filling').style.width = (video.currentTime /video.duration) * 100 + '%'; 
}

// Появление панели и исчезновение на стоп/старт
function appearanceOrDisappearanceControls() {
  document.querySelector('.controls').style.visibility = video.paused ? 'visible' : 'hidden';
}

// Появление панели на секунды
function peekControls() {
  document.querySelector('.controls').style.visibility = 'visible';
  setTimeout(function() {
    if (checkPauseForMouse()) {
      document.querySelector('.controls').style.visibility = 'hidden';
    }
  }, 2000); // 2 секунды (2000 миллисекунд)
}

//Проверка на паузу для мыши
function checkPauseForMouse() {
  return video.paused ? false : true;
}

// Реализовать панель в полноэкранном режиме
function handleFullscreenChange() {
//  
// 
// 
// 
// 
// 
// 
// 
// 
// 
//   
}



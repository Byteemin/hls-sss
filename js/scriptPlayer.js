// Запуск основного файла после загрузки страницы
document.addEventListener('DOMContentLoaded', main);

// временно
let data = {
  "channels":  [
                   {
                       "our_id":  17389,
                       "name_ru":  "Россия-1",
                       "address":  "rossiya-1",
                       "public":  true,
                       "number":  219,
                       "image":  "https://assets-iptv2022.cdnvideo.ru/static/channel/17389/logo_256_1684846706.png",
                       "is_foreign":  false,
                       "foreign_url":  "",
                       "region_code":  0,
                       "sort":  21,
                       "with_archive":  false,
                       "day_archive":  0,
                       "href_enabled":  false,
                       "href":  "",
                       "drm_status":  0,
                       "is_federal":  false,
                       "use_foreign_player":  false,
                       "owner":  "nsk",
                       "title":  "Россия-1",
                       "pack":  "",
                       "categories":  "",
                       "vitrina_events_url":  "",
                       "promo":  false,
                       "fav":  false,
                       "hasEpg":  true,
                       "current":  "",
                       "stimezone":  3,
                       "with_url_sound":  false,
                       "foreign_player_key":  false,
                       "foreign_player":  "@{sdk=; url=; valid_from=0}",
                       "available":  true,
                       "index":  0,
                       "is_vitrina":  false,
                       "stream":  "@{common=https://mhd.iptv2022.com/p/zee4nH1gEwpe8l5_JaeqoA,1690136335/streaming/rossia1_test/324/1/index.m3u8; sound=https://mhd.iptv2022.com/p/zee4nH1gEwpe8l5_JaeqoA,1690136335/streaming/rossia1_test/324/1/tracks-a1/mono.m3u8; cdn=https://mhd.iptv2022.com/p/zee4nH1gEwpe8l5_JaeqoA,1690136335/streaming/rossia1_test/324/1/index.m3u8; archive=}",
                       "url":  "https://mhd.iptv2022.com/p/zee4nH1gEwpe8l5_JaeqoA,1690136335/streaming/rossia1_test/324/1/index.m3u8",
                       "url_sound":  "https://mhd.iptv2022.com/p/zee4nH1gEwpe8l5_JaeqoA,1690136335/streaming/rossia1_test/324/1/tracks-a1/mono.m3u8",
                       "cdn":  "https://mhd.iptv2022.com/p/zee4nH1gEwpe8l5_JaeqoA,1690136335/streaming/rossia1_test/324/1/index.m3u8",
                       "url_archive":  ""
                   },
                   {
                       "our_id":  88,
                       "name_ru":  "МИР",
                       "address":  "mir",
                       "public":  true,
                       "number":  18,
                       "image":  "https://assets-iptv2022.cdnvideo.ru/static/channel/88/logo_256_1655448812.png",
                       "is_foreign":  false,
                       "foreign_url":  "",
                       "region_code":  0,
                       "sort":  22,
                       "with_archive":  true,
                       "day_archive":  5,
                       "href_enabled":  false,
                       "href":  "",
                       "drm_status":  0,
                       "is_federal":  true,
                       "use_foreign_player":  true,
                       "owner":  "nsk",
                       "title":  "МИР",
                       "pack":  "232",
                       "categories":  "2 1 4",
                       "vitrina_events_url":  "https://vitrina.iptv2021.com/api/v4/vitrina-config/mir/lime_hd_tv_ott/5ea97ab6a4752/sdk.json",
                       "promo":  false,
                       "fav":  false,
                       "hasEpg":  true,
                       "current":  "",
                       "stimezone":  3,
                       "with_url_sound":  true,
                       "foreign_player_key":  false,
                       "foreign_player":  "@{sdk=vitrinatv; url=; valid_from=0}",
                       "available":  true,
                       "index":  1,
                       "is_vitrina":  false,
                       "stream":  "@{common=https://mhd.iptv2022.com/p/yNPhkT0LU3wJgOTY2wLC0A,1690136335/streaming/mirott/324/1/index.m3u8; sound=https://mhd.iptv2022.com/p/yNPhkT0LU3wJgOTY2wLC0A,1690136335/streaming/mirott/324/1/tracks-a1/mono.m3u8; cdn=https://mhd.iptv2022.com/p/yNPhkT0LU3wJgOTY2wLC0A,1690136335/streaming/mirott/324/1/index.m3u8; archive=http://hlsarchive.iptv2022.com:8191/f7970207b6bc6db15c7aec5497a1ee4f017025/}",
                       "url":  "https://mhd.iptv2022.com/p/yNPhkT0LU3wJgOTY2wLC0A,1690136335/streaming/mirott/324/1/index.m3u8",
                       "url_sound":  "https://mhd.iptv2022.com/p/yNPhkT0LU3wJgOTY2wLC0A,1690136335/streaming/mirott/324/1/tracks-a1/mono.m3u8",
                       "cdn":  "https://mhd.iptv2022.com/p/yNPhkT0LU3wJgOTY2wLC0A,1690136335/streaming/mirott/324/1/index.m3u8",
                       "url_archive":  "http://hlsarchive.iptv2022.com:8191/f7970207b6bc6db15c7aec5497a1ee4f017025/"
                   },
                   {
                       "our_id":  17424,
                       "name_ru":  "Телекомпания НТВ",
                       "address":  "n-t-v",
                       "public":  true,
                       "number":  220,
                       "image":  "https://assets-iptv2022.cdnvideo.ru/static/channel/17424/logo_256_1685511762.png",
                       "is_foreign":  false,
                       "foreign_url":  "",
                       "region_code":  0,
                       "sort":  100,
                       "with_archive":  false,
                       "day_archive":  0,
                       "href_enabled":  false,
                       "href":  "",
                       "drm_status":  0,
                       "is_federal":  false,
                       "use_foreign_player":  false,
                       "owner":  "nsk",
                       "title":  "Телекомпания НТВ",
                       "pack":  "",
                       "categories":  "",
                       "vitrina_events_url":  "",
                       "promo":  false,
                       "fav":  false,
                       "hasEpg":  true,
                       "current":  "",
                       "stimezone":  3,
                       "with_url_sound":  false,
                       "foreign_player_key":  false,
                       "foreign_player":  "@{sdk=; url=; valid_from=0}",
                       "available":  true,
                       "index":  2,
                       "is_vitrina":  false,
                       "stream":  "@{common=https://mhd.iptv2022.com/p/TV02vrLouMTUw_COrTBpxA,1690136335/streaming/ntvnn_test/324/1/index.m3u8; sound=https://mhd.iptv2022.com/p/TV02vrLouMTUw_COrTBpxA,1690136335/streaming/ntvnn_test/324/1/tracks-a1/mono.m3u8; cdn=https://mhd.iptv2022.com/p/TV02vrLouMTUw_COrTBpxA,1690136335/streaming/ntvnn_test/324/1/index.m3u8; archive=}",
                       "url":  "https://mhd.iptv2022.com/p/TV02vrLouMTUw_COrTBpxA,1690136335/streaming/ntvnn_test/324/1/index.m3u8",
                       "url_sound":  "https://mhd.iptv2022.com/p/TV02vrLouMTUw_COrTBpxA,1690136335/streaming/ntvnn_test/324/1/tracks-a1/mono.m3u8",
                       "cdn":  "https://mhd.iptv2022.com/p/TV02vrLouMTUw_COrTBpxA,1690136335/streaming/ntvnn_test/324/1/index.m3u8",
                       "url_archive":  ""
                   },
                   {
                       "our_id":  17585,
                       "name_ru":  "ТВ ЦЕНТР - Москва",
                       "address":  "t-v-c-e-n-t-r-moskva",
                       "public":  true,
                       "number":  900,
                       "image":  "https://assets-iptv2022.cdnvideo.ru/static/channel/17585/logo_256_1687343114.png",
                       "is_foreign":  false,
                       "foreign_url":  "",
                       "region_code":  0,
                       "sort":  999,
                       "with_archive":  false,
                       "day_archive":  0,
                       "href_enabled":  false,
                       "href":  "",
                       "drm_status":  0,
                       "is_federal":  true,
                       "use_foreign_player":  false,
                       "owner":  "nsk",
                       "title":  "ТВ ЦЕНТР - Москва",
                       "pack":  "",
                       "categories":  "",
                       "vitrina_events_url":  "",
                       "promo":  false,
                       "fav":  false,
                       "hasEpg":  false,
                       "current":  "",
                       "stimezone":  3,
                       "with_url_sound":  false,
                       "foreign_player_key":  false,
                       "foreign_player":  "@{sdk=; url=; valid_from=0}",
                       "available":  true,
                       "index":  3,
                       "is_vitrina":  false,
                       "stream":  "@{common=https://mhd.iptv2022.com/p/mhrmRPH6l-1ydLEBa0Vj0Q,1690136335/streaming/tvc_test/324/1/index.m3u8; sound=https://mhd.iptv2022.com/p/mhrmRPH6l-1ydLEBa0Vj0Q,1690136335/streaming/tvc_test/324/1/tracks-a1/mono.m3u8; cdn=https://mhd.iptv2022.com/p/mhrmRPH6l-1ydLEBa0Vj0Q,1690136335/streaming/tvc_test/324/1/index.m3u8; archive=}",
                       "url":  "https://mhd.iptv2022.com/p/mhrmRPH6l-1ydLEBa0Vj0Q,1690136335/streaming/tvc_test/324/1/index.m3u8",
                       "url_sound":  "https://mhd.iptv2022.com/p/mhrmRPH6l-1ydLEBa0Vj0Q,1690136335/streaming/tvc_test/324/1/tracks-a1/mono.m3u8",
                       "cdn":  "https://mhd.iptv2022.com/p/mhrmRPH6l-1ydLEBa0Vj0Q,1690136335/streaming/tvc_test/324/1/index.m3u8",
                       "url_archive":  ""
                   }
               ],
  "source":  "c",
  "valid":  1690121935,
  "cmethod":  "S",
  "total":  4,
  "paid_packs":  [

                 ],
  "cacheKey":  "Playlist_V4_421_1.3_3_gen1SET",
  "limit":  30,
  "page":  1,
  "utimezone":  3,
  "date_activate_v":  0,
  "date_activate_m":  0
}

let needChannel = 0;         // Канал который будет включен из главного меню

// Основная функция плеера
function main() {
  document.querySelector('.tv-program__name').textContent = data.channels[needChannel].name_ru;
  document.querySelector('.tv-program__icon').src = data.channels[needChannel].image;
  addHls('https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8');

  const video = document.getElementById('video');                           // тег видео для загрузки hls плеера
  document.addEventListener('click', handlerClickVideo);                   // Отслеживаем клики ***ниже подключение потокового видео
  // addHls('https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8');
  document.addEventListener('keydown', handlerKeyboards);                // Отслеживаем клавиши
  video.addEventListener('timeupdate', changeTimeLine);                 // Обновляем полосу прогресса
  video.addEventListener('pause', appearanceOrDisappearanceControls);  // Отслеживаем остановку видео
  video.addEventListener('play', appearanceOrDisappearanceControls);  // Отслеживаем старт видео
  document.addEventListener('mousemove', peekControls);              // Обработчик события движения мыши
  video.addEventListener('timeupdate',trackingTime);                // Обновляем время до конца видео
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
  let powerVolume = 0; // мощность звука 
  let needChannel = 0;

  switch (event.code) {
    case 'Enter':
      document.querySelector('.player').requestFullscreen();
      // handleFullscreenChange() //Болванка на доп функции для страници
    break;
    case 'ArrowLeft':
      rewindVideo(false);
    break;
    case 'ArrowRight':
      rewindVideo(true);
    break;
    case 'ArrowUp':
      // event.preventDefault();
      shiftChannel(1);
    break;
    case 'ArrowDown':
      // event.preventDefault();
      shiftChannel(-1);
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
    case 'Escape':
      checkBackManu();
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
  needChannel = (needChannel + optionShift + data.channels.length) % data.channels.length;
  processData(data, needChannel);
}

// Управление звуком по клавишам
function controlSound(optionSound) {
  var stepVolume = 0.1 // шаг переключения
  switch (optionSound) {
    case '+':
      if (video.volume > 1) {
        video.volume += stepVolume;
      }
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
      if (video.volume < 1) {
        video.volume -= stepVolume;
      }
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


// Обновление времени в блоке
function trackingTime() {
    document.querySelector('.controls__vidoe-time').textContent = "Еще " + Math.floor((video.duration - video.currentTime) / 60) + " минут";
}

// возвращение в главное меню чере 'Escape'
function checkBackManu() {
  // проверка на полноэкранный режим
  if (document.fullscreenElement !== document.querySelector('.player')) {
    console.log('заглушка возврата');
  }
}
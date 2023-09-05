import * as helpers from './assistance.js';

// Запуск основного файла после загрузки страницы
document.addEventListener('DOMContentLoaded', main);

let data;                     // Данные из апи

// temp
const url = 'https://pl.iptv2021.com/api/v4/playlist';

// Основная управляющая функция
function main() {
  fetchDataAndUseIt('GET', url);      // Вызываем функцию для получения данных и использования их на сайте 
  buttonRendering(data)              // загрузка меню количество каналов используя апи
  
  // Получаем все элементы с классом "card"
  var cardBlocks = document.querySelectorAll('.card');

  // Перебираем все блоки и добавляем обработчик события "click"
  cardBlocks.forEach(function(cardBlock, index) {
    cardBlock.addEventListener('click', function() {
      const encodedData = encodeURIComponent(JSON.stringify(data));
      window.location.href = "player.html?index=" + index; 
    });
  });
}

// Создаем структуру сайта с нуля
function buttonRendering(data, ) {
  let   contentPage = document.querySelector('.content-page');

  for (var channelCard = 0; channelCard < data.channels.length; channelCard++) {
    var cardDiv = document.createElement('div');
    cardDiv.className = 'card';

    var image = document.createElement('img');
    image.src = data.channels[channelCard].image;
    image.className = 'logo';

    var channelDiv = document.createElement('div');
    channelDiv.className = 'channels';

    var nameDiv = document.createElement('h2');
    nameDiv.className = 'channels__name';
    nameDiv.textContent = data.channels[channelCard].name_ru;

    var programmDiv = document.createElement('p');
    programmDiv.className = 'channels__programm';
    programmDiv.textContent = 'Новости';

    // Вложение элементов: сначала создаем иерархию, затем добавляем в блок .card
    channelDiv.appendChild(nameDiv);
    channelDiv.appendChild(programmDiv);
    cardDiv.appendChild(image);
    cardDiv.appendChild(channelDiv);
    contentPage.appendChild(cardDiv);
  }
}

// Получение данных с сервера и вызов последующей обработки
async function fetchDataAndUseIt(method, url) {
  try {
    // Отправляем запрос к API с помощью функции sendRequest
    //  data = await helpers.sendRequest(method, url);
    // console.log(data);
    //
    // 
    // 
    // 
    //  temp 
    data = {
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
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
  }
}
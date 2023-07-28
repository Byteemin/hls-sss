const apiKey = 'https://pl.iptv2021.com/api/v4/playlist';
// Занесем тестовый URL в переменну


// Феч запрос к серверу
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

// Функция для подключения другого файла css
function loadCSSFile(filename) {
  const head = document.head;
  const link = document.createElement('link');

  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = filename;

  head.appendChild(link);
}



const mainManu = `
  <div class="center-container">
  <div class="container">

    <div class="card">
      <img class="logo" src="img/icon/Logos.png">
      <div class="channels">
        <div class="channels__name">CNN</div>
        <div class="channels__programm">Новости</div>
      </div>
    </div>

    <div class="card">
      <img class="logo" src="img/icon/Logos.png">
      <div class="channels">
        <div class="channels__name">CNN</div>
        <div class="channels__programm">Новости</div>
      </div>
    </div>
    <div class="card">
      <img class="logo" src="img/icon/Logos.png">
      <div class="channels">
        <div class="channels__name">CNN</div>
        <div class="channels__programm">Новости</div>
      </div>
    </div>
    <div class="card">
      <img class="logo" src="img/icon/Logos.png">
      <div class="channels">
        <div class="channels__name">CNN</div>
        <div class="channels__programm">Новости</div>
      </div>
    </div>
  </div>
</div>
`;

const player = `
<div class="container">
<div class="player">
  <video class="player__video" id="video" poster="img/world-map.jpg" autoplay controls></video>
  <div class="controls">
    <div class="controls__vidoe-time">Ещё 60 минут</div> 
    <div class="info-video">
      <div class="tv">
        <div class="tv-program">
          <img class="tv-program__icon" src="img/icon/Logos.png">
          <div class="tv-program__name">СNN</div>
        </div>
        <div class="tv-about">
          <div class="tv-about__next">Далее: Турминатор 2</div>
          <div class="tv-about__type">Новости</div>
        </div>
      </div>
      <div class="player-sidebar">
        <!-- <div class="player-sidebar__release-time">Ещё 60 минут</div> -->
          <div class="player-sidebar__time-line">
            <div id="proggress" class="player-sidebar__time-line--filling"></div>
          </div>
      </div>
    </div>
  </div>
</div>
</div>
`;

export { apiKey, mainManu, player, sendRequest, loadCSSFile };
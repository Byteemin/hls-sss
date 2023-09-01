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

export { apiKey, sendRequest, loadCSSFile };
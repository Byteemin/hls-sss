const apiKey = 'https://jsonplaceholder.typicode.com/users';
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

export { apiKey, sendRequest};
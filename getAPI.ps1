$headers = @{
    'User-Agent' = '{"platform":"android","app":"limehd.ru.ctv.nsk","version_name":"2.8.3","version_code":"286","sdk":"29","name":"PHONE","device_id":"43592e017890be21"}'
}

$response = Invoke-RestMethod -Uri 'https://pl.iptv2021.com/api/v4/playlist' -Headers $headers

# Преобразуем полученные данные в JSON-строку
$jsonString = $response | ConvertTo-Json

# Укажите путь и имя файла, в который нужно сохранить результаты в формате JSON
$outputFile = "C:\SSS\rez.json"

# Сохраняем JSON-строку в файл
$jsonString | Out-File -FilePath $outputFile -Encoding UTF8

Write-Host "Результаты сохранены в $outputFile в формате JSON"

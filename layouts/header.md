<style>
td {
    padding: 8px;
}
tr:nth-child(even) {
    background: #f2f2f2;
}
</style>

## 授權說明
API加密方式為`Hash('sha-256', 場站代號)`，每個場站透過場站代號Hash後產生Token。

當訪問須通過驗證的API 時，您必須在每次請求的headers 內加入以下欄位: 
* Accept: application/json
* Authorization: Bearer {{Token}}

## HEADER內容
值得注意的是，您必須在每次請求的headers 內加入`Accept: application/json`，若系統未收到相對應的Accept 時會將這項請求認為是瀏覽器的請求，屆時您可能會收到無法預期的回應。

## 成功回應
成功回傳格式定義如下: 
```
{
    "RetCode": 1,
    "RetVal": [
        {
            // data
        }
    ]
}
```

## 錯誤回應
錯誤回傳格式定義如下: 
```
{
    "RetCode": 0,
    "RetMsg": "error message"
}
```
錯誤種類如下:
- token 的格式錯誤 
- 在需要提供token 的請求上尚未提供token
- Header 未加上Accept: application/json

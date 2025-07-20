/* 設計
1.コンフィグJSON定義
2.トークン取得関数定義
3.API実行＆ファイルダウンロード関数（メイン関数）定義
4.トークン文字列とコンフィグオブジェクトをメイン関数に渡してファイルダウンロード、これを必要種類分実行する
※ 処理パターンを追加する場合はコンフィグとメイン関数の実行を追加する
*/

// 1.コンフィグJSON定義
const api_configs = [
    {
        "id": "user_list",
        "method": "GET",
        "url": "https://example.com/api/user/list",
        "options": "?maxResult=100"
    },
    {
        "id": "content_list",
        "method": "POST",
        "url": "https://example.com/api/content/list",
        "options": "?maxResult=100",
        "body" : "application/json"
    }
];

function getConfigById(id) {
    return api_configs.find(config => config.id === id);
}

// 2.トークン取得関数定義
function getToken() {
    return "token_string";
};

// 3.データ取得関数定義
function retrieveData(_token, _config) {
    console.log(`▪️▪️▪️ Initiate retrieval of ${_config.id} ... ▪️▪️▪️`);
    console.log(_token);
    console.log(`HTTP Method: ${_config.method}`);
    console.log(`API Endpoint URL: ${_config.url}${_config.options}`);
    console.log(`File Name: ${_config.id}.json`);
    _config.method === "POST" ? console.log(`Body: ${_config.body}`) : null;
    console.log(`▪️▪️▪️ Complete retrieval of ${_config.id} ! ▪️▪️▪️`);
};

// 4.メイン処理実行
const token = getToken();
retrieveData(token, getConfigById('user_list'));
retrieveData(token, getConfigById('content_list'));

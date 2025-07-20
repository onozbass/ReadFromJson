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
        "options": "?maxResult=100"
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
    console.log("データ取得開始");
    console.log(_token);
    console.log(_config);
    console.log("ID: " + _config.id);
    console.log("HTTP Method: " + _config.method);
    console.log("API Endpoint URL: " + _config.url);
    console.log("API Options: " + _config.options);
    console.log("File Name: " + _config.id + ".json");
    console.log("データ取得終了");
};

// 4.メイン処理実行
const token = getToken();
retrieveData(token, getConfigById('user_list'));
retrieveData(token, getConfigById('content_list'));

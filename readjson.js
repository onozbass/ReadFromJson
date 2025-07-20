/* 設計
1.コンフィグJSON定義
2.トークン取得関数定義
3.API実行＆ファイルダウンロード関数（メイン関数）定義
4.トークン文字列とコンフィグオブジェクトをメイン関数に渡してファイルダウンロード、これを必要種類分実行する
※ 処理パターンを追加する場合はコンフィグとメイン関数の実行を追加する
*/

// 1.コンフィグJSON定義
const configs = [
    {
        "id": "user_list",
        "method": "GET",
        "url": "https://example.com/api/user/list",
        "options": "?maxResult=100",
        "filename": "user_list.json"
    },
    {
        "id": "content_list",
        "method": "POST",
        "url": "https://example.com/api/content/list",
        "options": "?maxResult=100",
        "filename": "content_list.json"
    }
];

function getConfigById(id) {
    return configs.find(config => config.id === id);
}

/* // 使用例
let config;
config = getConfigById('user_list');
console.log(config.method);
console.log(config.url + config.options);
console.log(config.filename);

config = getConfigById('content_list');
console.log(config.method);
console.log(config.url + config.options);
console.log(config.filename); */

// 2.トークン取得関数定義
function getToken() {
    return "token";
};

// 3.データ取得関数定義
function main(_token, _config) {
    console.log("データ取得実行");
    console.log(_token);
    console.log(_config);
};

// 4.メイン処理実行
const token = getToken();
config = getConfigById('user_list');
main(token, config);
main(token, getConfigById('content_list'));

// Basic認証でトークンを取得する関数
async function getTokenWithBasicAuth(apiUrl, clientId, clientSecret) {
    try {
        // Basic認証のためのエンコード（Base64）
        const credentials = btoa(`${clientId}:${clientSecret}`);

        // APIリクエストの設定
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${credentials}`,
                'Content-Type': 'application/x-www-form-urlencoded',
                //'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                grant_type: 'client_credentials',
                user_id: '{{USER_ID}}' //要変更
            })
        });

        // レスポンスの確認
        if (!response.ok) {
            throw new Error(`HTTPエラー: ${response.status} ${response.statusText}`);
        }

        // JSONレスポンスを取得
        const data = await response.json();

        // トークンの取得と返却
        if (data.access_token) {
            console.log('トークン取得成功');
            return {
                success: true,
                token: data.access_token,
                tokenType: data.token_type || 'Bearer',
                expiresIn: data.expires_in
            };
        } else {
            throw new Error('レスポンスにアクセストークンが含まれていません');
        }

    } catch (error) {
        console.error('トークン取得エラー:', error.message);
        return {
            success: false,
            error: error.message
        };
    }
}

// 使用例
async function getToken() {
    const baseUrl = 'https://ms-cell-002.api.lumapps.com';
    const organizationId = 'your_organization_id'; //要変更
    const API_URL = `${baseUrl}/v2/organizations/${organizationId}/application-token`;
    const CLIENT_ID = 'your_client_id'; //要変更
    const CLIENT_SECRET = 'your_client_secret'; //要変更

    const result = await getTokenWithBasicAuth(API_URL, CLIENT_ID, CLIENT_SECRET);

    if (result.success) {
        console.log('取得したトークン:', result.token);
        console.log('トークンタイプ:', result.tokenType);
        console.log('有効期限:', result.expiresIn, '秒');
    } else {
        console.error('トークン取得に失敗しました:', result.error);
    }
}

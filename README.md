# Beta API
## 特徴
クラウドサーバーに直接接続し、データを取得することができるAPIです。
## エンドポイント一覧
|パス|内容|レスポンスタイプ|レスポンス|
|:---:|:---:|:---:|:---:|
|/api/data|保存されている名前とIDの情報を取得する|JSON|{名前:{id:対応するID}...}|
|/api/id/ターゲットの名前|ターゲットのIDを取得する　取得したIDは保存され、次回以降は保存されたデータが参照される|JSON|{name:ターゲットの名前,data:ターゲットのID}|
|/api/auth/ターゲットの名前|ターゲットのIDを含む認証情報をを取得する|JSON|{name:ターゲットの名前,data:認証情報}|
|/api/user/ターゲットの名前/自分の名前|ターゲットの情報を取得する|JSON|{data:整形済みデータ,raw:生データ}|
|/api/ranking/40line/自分の名前|40lineのランキングを取得する|JSON|{data:整形済みデータ,raw:生データ}|
|/api/ranking/20line/自分の名前|20lineのランキングを取得する|JSON|{data:整形済みデータ,raw:生データ}|
|/api/ranking/marathon/自分の名前|Marathonのランキングを取得する|JSON|{data:整形済みデータ,raw:生データ}|
|/api/ranking/ultra/自分の名前|Ultraのランキングを取得する|JSON|{data:整形済みデータ,raw:生データ}|
|/api/ranking/rate/自分の名前|neoでのレートのランキングを取得する|JSON|{data:整形済みデータ,raw:生データ}|
|/api/ranking/level/自分の名前|レベルのランキングを取得する|JSON|{data:整形済みデータ,raw:生データ}|
|/api/ranking/apm/自分の名前|neoでのAPMのランキングを取得する|JSON|{data:整形済みデータ,raw:生データ}|
|/api/ranking/pps/自分の名前|neoでのPPSのランキングを取得する|JSON|{data:整形済みデータ,raw:生データ}|
|/api/ranking/playtime/自分の名前|Betaのプレイタイムのランキングを取得する|JSON|{data:整形済みデータ,raw:生データ}|
|/api/ranking/follower/自分の名前|フォロワーのランキングを取得する|JSON|{data:整形済みデータ,raw:生データ}|

# TetrisBeta API
## 特徴
クラウドサーバーに直接接続し、データを取得することができるAPIです。
## インストール

```bash
npm install @chitose-jp/tetrisbeta-api
```


## 使い方
```js
import {Beta} from "@chitose-jp/tetrisbeta-api";

const api = new Beta();
```
関数一覧
|関数|内容|レスポンスタイプ|レスポンス|
|:-:|:--:|:-:|:--:|
|getId(target)|ターゲットのIDを取得する 取得したIDは一時的に保存され、次回以降は保存されたデータから参照される|String|ID|
|getData()|保存されたIDデータを取得する|JSON|`{ユーザー名:{id:プレイヤーID}...}`|
|getAuth(target)|ターゲットのIDを含む認証情報を取得する|String|認証情報|
|getUser(target,name)|ターゲットのユーザーデータを取得する。引数`name`には、自分のユーザー名を渡す|JSON|`{data:整形済みデータ,raw:生データ}`|
|getRanking(type,name)|ランキングを取得する　ランキングタイプは以下を参照|JSON|`{data:整形済みデータ,raw:生データ}`|

ランキングタイプ
|ランキングタイプ|内容|
|:-:|:-:|
|0|40line|
|1|20line|
|2|Marathon|
|3|Ultra|
|4|Rate|
|5|Level|
|6|APM|
|7|PPS|
|8|PlayTime|
|9|Follower|

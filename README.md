# uzume
[BackendConnectorリポジトリ](https://github.com/Saigo1997/uzume-backend-connector)<br>
[uzumeLPリポジトリ](https://github.com/Saigo1997/uzume-LP)

## やりたいこと
* NASにある画像をPCで見たい
* スマホからも同様に見たい

## 機能一覧
* 画像一覧機能(サムネイル)
* 画像表示機能(一枚)

## 仕様
### オフライン時のスマホの扱いについて
`未分類`扱いとして画像をスマホ内に保存しておき、オンライン復帰時にNASにアップロードする

## ブランチ戦略
* issue番号0を作業する場合、`feature/0`ブランチを作成する。
* 作業が終わったら`main`ブランチに対してPRを作成する。
* PRに`resolves #0`と記載する。そうするとPRがマージされたときにissueを自動でクローズしてくれる。

## pushする前にすること
### backend/blueprint以下を編集したとき
* `backend/blueprint/converter.sh`を実行し、生成される`docs/index.html`をコミットに含める

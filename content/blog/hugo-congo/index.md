---
title: GitHubPagesとHugoCongoでブログを作成する手順
description: "Hugoのテーマの一つCongoとGitHub Pagesでブログを作りました。"
date: 2024-03-03
draft: false
tags:
  - blog
categories:
  - blog
---

Hugoのテーマの一つCongoとGitHub Pagesでブログを作りました。

## はじめに

こんにちは、IKです。

自分が行ったことを文書として記録しておこうと考え、記述します。

今回は、参考にしたリンクと手順を箇条書きで書いていく形の簡単な文書であるため、適宜リンク先に飛び参考にしてください。

---

## 環境

| 筆者の環境       |                                                 |
| ----------- | ----------------------------------------------- |
| OS          | Windows10                                       |
| デプロイ方法      | GitHub Pages                                    |
| 使用テーマ（Hugo） | [Congo](https://themes.gohugo.io/themes/congo/) |

---

## Hugoのインストール

まず、Hugoのインストール、環境構築から始めます。

下記のリンクが参考にします。<br>
Hugoのテーマ設定前まで参考にして、Hugoの環境を構築してください。

[Hugo使ってみた](https://zenn.dev/ttr0108/articles/1_hugo_introduction)

---

## Congoのインストール

Hugoのテーマの一つであるCongoのインストールを行います。

下記のリンクを参考にします。<br>
インストール手順の中の「Install using git」を参考にしてください。

[Congo公式ドキュメント（Installation）](https://jpanther.github.io/congo/docs/installation/)


具体的には、下記のコマンドを利用してください。<br>
※ `mywebsite`は任意の名称（`quickstart`など）になります。

``` cmd
cd mywebsite
git init
git submodule add -b stable https://github.com/jpanther/congo.git themes/congo
```

---

## Configの構造設定

Configのディレクトリ構造変更を行っていきます。

下記のリンクを参考にします。<br>
「Organising content」 , 「Basic configuration」の順で参考にしてください。

[Congo公式ドキュメント（Getting Started）](https://jpanther.github.io/congo/docs/getting-started/)

具体的には、下記の図のようなディレクトリ構造にします。

```
.
├── assets
│   └── img
│       └── author.jpg
├── config
│   └── _default
├── content
│   ├── _index.md
│   ├── about.md
│   └── posts
│       ├── _index.md
│       ├── first-post.md
│       └── another-post
│           ├── aardvark.jpg
│           └── index.md
└── themes
    └── congo
```


- 変更手順 （quickstartは任意の名称）

1. 既存の設定ファイル（quickstart直下の`.toml`ファイル）を削除。
2. `quickstart/themes/congo/config` のディレクトリをquickstart直下にコピー。

---

## Configの内容変更

Config（./config/\_defalut/）の内容を変更していきます。

下記のリンクを参考にします。<br>
Special thanks to [sunset0916](https://github.com/sunset0916) !

[Congo公式ドキュメント（Configuration）](https://jpanther.github.io/congo/docs/configuration/)

[GitHub sunset0916.net](https://github.com/sunset0916/sunset0916.net/tree/main/config/_default)


- 変更手順

1. `languages.en.toml` から `languages.ja.toml` に変更。
2. `menus.en.toml` から `menus.ja.toml` に変更。
3. それぞれの`.toml`ファイルの中身を[sunest0916.net](https://github.com/sunset0916/sunset0916.net/tree/main/config/_default)の内容を参考にしながら変更。

---

## コンテンツやアイコンの追加

コンテンツやアイコン（favicon）を追加していきます

下記のリンクを参考にします。

- Content<br>
	[Congo公式ドキュメント（Content Examples）](https://jpanther.github.io/congo/docs/content-examples/)
- Favicon<br>
	[Congo公式ドキュメント（Partials）](https://jpanther.github.io/congo/docs/partials/)


適宜、`hugo serve -D` でサーバを起動し、[http://localhost:1313](http://localhost:1313/)で確認しながら進めてください。


---

## デプロイ方法

最後に、GitHub Pagesでブログを公開しましょう。

### GitHub PagesでWebサイトを公開

まず、GitHub PagesでWebサイトを公開します。

下記のリンクを参考にします。

[github.ioを使ってMySiteを作ろう](https://qiita.com/MokeeeMokeee/items/4b33691b829aaf119bbf)

---

### 静的ページの生成

次に、ローカル環境で作成したサイトを静的ページ（HTML化）として生成します。

下記のリンクの「静的ページの生成」を参考にします。

[ゼロからHugoでWebページをつくって，GitHub Pagesで公開するまで](https://qiita.com/2Gken1029/items/c7eadefc45590cc55a5e)

- 手順

1. `hugo` コマンドを入力。
2. `quickstart/public`直下にhtml、css、jsで作成されたページが作成される。

※public直下の`index.html`を開いてもディレクトリの参照形式の関係で綺麗に表示されませんが、気にしないでください。

---

### GitHub Pagesにブログを公開

最後に、作成した静的ページをGitHub Pagesに公開します。

「GitHub PagesでWebサイトを公開」の際に作成したローカルディレクトリに`public`直下のファイルをすべてコピーしてpushしてください。

※反映までに5分ほどかかることがあります。

---

## ブログ内に画像を入れる方法

このブログを上げる際に手こずったのでそれについても書いておきたいと思います。

まず、ブログのヘッダ画像を入れる方法で困りましたが、<br>
ヘッダ画像ファイルの名称に`thumb`を付けることで解決しました。

`feature`を付けると、ブログ内でヘッダ画像が冒頭に表示されます。

次に、ブログ内に画像を入れる方法で困りましたが、<br>
Hugoの拡張機能（Hugo Extended）を入れることで解決しました。

具体的なコマンド
```cmd
winget install Hugo.Hugo.Extended
```

役に立ったリンク<br>

[Resize : image this feature is not available in your current Hugo version](https://discourse.gohugo.io/t/resize-image-this-feature-is-not-available-in-your-current-hugo-version/34682)<br>
[Windows Hugo](https://gohugo.io/installation/windows/)

---

## 終わりに

Hugo Congo インストールからGitHub Pagesに公開まで行いました。<br>
Hugo Congoは公式ドキュメントがかなりわかりやすかったので基本的にはそこを参考に作成しました。

気が向いたらQiitaなどにも上げようと思います。

初めてのブログであるため、分かりにくい部分が多かったと思いますがご了承ください。<br>
お読みいただきありがとうございました。

---
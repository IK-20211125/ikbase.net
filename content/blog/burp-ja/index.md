---
title: MacOS BurpSuite 日本語化手順
description: MacOS上でBurpSuiteを日本語化する手順をたどります。
date: 2024-05-27
draft: false
tags: 
categories:
  - blog
---

MacOS上でBurpSuiteを日本語化する手順をたどります。

---

## はじめに

こんにちは、IKです。

自分が行ったことを文書として記録しておこうと考え、記述します。

今回は、MacOS上でBurpSuiteを日本語化する手順を解説します。

※ この記事は2024年5月に作成されたものです。

---

## 環境

| 筆者の環境 |                  |
| ----- | ---------------- |
| OS    | macOS 14.5 arm64 |
| SoC   | Apple M3         |


---

## BurpSuiteインストール

まず、Mac版BurpSuiteをインストールします。

今回はHomebrewを使用します。<br>（Homebrewをインストールされていない方は下記コマンドでインストールしてください）

- Homebrew インストール
```zsh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

下記のコマンドをターミナルで実行します。

- BurpSuite インストール
``` zsh
brew install --cask burp-suite
```


---

## 日本語化モジュールをダウンロード

次に、日本語化するために必要なモジュールをGitHubからダウンロードします。

必要なファイルはこの3つです。

- **belle.jar**
- **javassist.jar**
- **user.vmoptions**

下記URLからダウンロードしてください。

[ankokuty / Belle / Releases](https://github.com/ankokuty/Belle/releases)

ダウンロードした belle.zip を解凍してください。

提供者の方はMBSDという企業に所属されている方です。

Thanks to [Yutaka Kokubu | GitHub](https://github.com/ankokuty) ,  [Yutaka Kokubu | MBSD](https://www.mbsd.jp/research/y.kokubu/)

---

## 日本語化ファイルを配置

ダウンロードした3つのファイルを適切な場所に配置します。

下記のフォルダ直下に配置してください。<br>（環境によって変わる可能性があります）
```
/Applications/Burp Suite Community Edition.app/Contents/Resources/app
```

---

## Java環境構築

Javaの環境がすでにある方はここの章は飛ばしてください。

私の場合、MacOSに初期から入っているJavaでは動かなかったため、新しくHomebrewでインストールしました。

- openjdk インストール
```zsh
brew install openjdk
```

インストールしただけでは環境変数に登録されなかったので、`.zshrc` に環境変数を登録するスクリプトを書きました。<br>（`.zshrc` は初期状態では作成されていないため、自身で作成してください）

`.zshrc` に下記文を入力して保存してください。<br>（※ version や path は自身の環境のものに変更してください）

- `.zshrc` にopenjdkの環境変数を登録
```zsh
export PATH="/opt/homebrew/Cellar/openjdk/21.0.3/bin/:$PATH"
```

---

## 日本語化BurpSuiteを起動

では、BurpSuiteを日本語化モジュールを使用してBurpSuiteを起動しましょう。

単にBurpSuiteを起動するだけでは日本語化されません。

まず、実行するフォルダに移動しましょう

- 実行するフォルダに移動
```
cd /Applications/Burp\ Suite\ Community\ Edition.app/Contents/Resources/app
```

下記コマンドでBurpSuiteを実行してください。

- 日本語化BurpSuiteを起動
```zsh
java -javaagent:belle.jar -Xmx1024m -jar burpsuite_community.jar
```


---

## BurpSuite実行シェルスクリプト作成

起動するたびに上記のコマンドを打つのは面倒なのでシェルスクリプトで書いておきましょう。

お好きな名称のシェルスクリプトファイル（私の場合は `burp-ja.sh` ）を作成してください。

作成したファイルに下記のスクリプトを記述して保存してください。

- 日本語化BurpSuite実行シェルスクリプト
```zsh
#! /bin/zsh

cd /Applications/Burp\ Suite\ Community\ Edition.app/Contents/Resources/app

java -javaagent:belle.jar -Xmx1024m -jar burpsuite_community.jar
```

---

## 終わりに

MacOS上でBurpSuiteを日本語化する手順をたどりました。

以前、Windows環境では行ったことが合ったのですが、MacOSの方だと少し苦戦したため備忘録として記述しました。

日本語化モジュールを開発、提供されている方には感謝しかないですね。

最後までお読みいただきありがとうございました。

---
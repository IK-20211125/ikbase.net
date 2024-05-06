---
title: MacBookへのpowerline-shell導入手順
description: MacBookでpowerline-shellを導入した手順。
date: 2024-04-06
draft: false
tags: 
categories:
  - blog
---

まず、powerline-shellのインストール、環境構築から始めます。

## はじめに

こんにちは、IKです。<br>

自分が行ったことを文書として記録しておこうと考え、記述します。

公式ドキュメントも適宜利用してください。

[b-ryan / powerline-shell](https://github.com/b-ryan/powerline-shell)


---

## 環境

| 筆者の環境    |                    |
| -------- | ------------------ |
| OS       | macOS 14.4.1 arm64 |
| SoC      | Apple M3           |
| インストール方法 | Python3 (pip3)     |


---

## powerline-shellのインストール

まず、powerline-shellのインストール、環境構築から始めます。

インストール方法に<u>pip3</u>を使います。

Python3の環境、またはpip3がPCに入っていない場合、適宜導入してください。<br>
(Macbook M3 にはデフォルトでPython3がインストールされていました)

``` shell
pip3 install powerline-shell
```


---

## .zshrc ファイルの作成

今回、zshの設定を変更していくため、`.zshrc`ファイルを作成します。

作成するディレクトリはユーザのホームディレクトリ直下です。<br>
(デフォルトでは作成されていないため、自身で作成してください)


---

## Python3の環境変数設定

Python3の環境変数が筆者の環境では設定されていなかったため、設定します。

先ほど作成した`.zshrc`ファイル内に下記を記述してください。<br>
(pathは自身の環境のPythonのpathに置き換えてください)

``` shell
export PATH="/Users/USER/Library/Python/3.9/bin:$PATH"
```


---

## .zshrc にpowerline-shell用のスクリプトを記述

`.zshrc`内にpowerline-shell用のスクリプトを記述します。

`.zshrc` 内に下記のスクリプトを記述してください。

```
function powerline_precmd() {
    PS1="$(powerline-shell --shell zsh $?)"
}

function install_powerline_precmd() {
  for s in "${precmd_functions[@]}"; do
    if [ "$s" = "powerline_precmd" ]; then
      return
    fi
  done
  precmd_functions+=(powerline_precmd)
}

if [ "$TERM" != "linux" -a -x "$(command -v powerline-shell)" ]; then
    install_powerline_precmd
fi
```


---

## powerline-shellの設定ファイルを作成

powershell用の設定ファイルを作成します。

下記のようなディレクトリ構造になるように作成してください。<br>
`~/.config/powerline-shell/config.json`

`config.json`に下記の設定を記述してください。<br>
(筆者が現在使用している設定、ユーザ名、PC名を表示しないようにしています)

``` json
{
    "segments": [
      "virtual_env",
      "ssh",
      "cwd",
      "git",
      "hg",
      "jobs",
      "root"
    ]
}
```


---

## フォントの設定

現状だとshellを開いても文字化けしていると思います。

そのため、powerline-shell用のフォントをインストールします。

下記のリンク先のリポジトリをクローンして、`install.sh`を用いてフォントをインストールし、shellのフォントを変更してください。

[powerline / fonts](https://github.com/powerline/fonts)


---

## 終わりに

MacBookにpowerline-shellを導入しました。

気が向いたらQiitaなどにも上げようと思います。

お読みいただきありがとうございました。


---
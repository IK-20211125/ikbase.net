---
title: Hugo+GitHubPagesにGoogleAnalyticsを埋め込み、GoogleSearchConsoleに対応させた手順
description: Hugo&GitHubPagesにGoogleAnalyticsを埋め込み、GoogleSearchConsoleに対応させた手順
date: 2024-04-28
draft: false
tags: 
categories:
  - blog
---

## はじめに

こんにちは、IKです。

自分が行ったことを文書として記録しておこうと考え、記述します。

公式ドキュメントも適宜利用してください。

今回は、参考にしたリンクと手順を箇条書きで書いていく形の簡単な文書であるため、適宜リンク先に飛び参考にしてください。


---

## 環境

| 筆者の環境       |                    |
| ----------- | ------------------ |
| OS          | macOS 14.4.1 arm64 |
| SoC         | Apple M3           |
| 使用テーマ（Hugo） | Congo              |


---

## GoogleAnalyticsの埋め込み

下記サイトを参考にしてGoogleAnalyticsを埋め込みました

[GitHub Pages+HugoでつくったブログにGoogle Analyticsを埋め込む](https://blog.uzimihsr.com/post/2019-08-26-google-analytics/)

使用しているテーマがCongoの場合は`config/_default/config.toml`に設定を追記してください。

---

## GoogleSearchConsole

下記サイトを参考にしてGoogleSearchConsoleに対応させました。

[HUGO + GitHub Pages で作ったブログをGoogle Search Consoleに登録する方法](https://zetton86.github.io/blog/20200114/)

---

## 終わりに

このサイトにクローラーが来てくれなかったため、今回、GoogleAnalytics、GoogleSearchConsoleに対応させました。

Google以外の検索エンジンにも対応させたいですね。

あと、そろそろ自分のドメインも購入したいですね。

お読みいただきありがとうございました。

---
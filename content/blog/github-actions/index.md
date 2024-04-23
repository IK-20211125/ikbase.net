---
title: HugoをGitHubActionsでビルド、デプロイした手順
description: HugoをGitHubActionsでビルド、デプロイした手順
date: 2024-04-23
draft: false
tags: 
categories:
  - blog
---

## はじめに

こんにちは、IKです。

自分が行ったことを文書として記録しておこうと考え、記述します。

今回は、参考にしたリンクと手順を箇条書きで書いていく形の簡単な文書であるため、適宜リンク先に飛び参考にしてください。


---

## 環境

| 筆者の環境 |                    |
| ----- | ------------------ |
| OS    | macOS 14.4.1 arm64 |
| SoC   | Apple M3           |
| ビルド方法 | GitHub Actions     |


---

## GitHub Actionsを用いてのビルド

今回は、かなり簡単な手順になります。

下記のサイト（公式）を参照して、GitHubActionsを導入しました。

[Host on GitHub Pages](https://gohugo.io/hosting-and-deployment/hosting-on-github/)


---

## 静的にビルドする方法

先日に作成した下記の記事で紹介しています。

[GitHubPagesとHugoCongoでブログを作成する手順](https://ik-20211125.github.io/blog/2024/03/03/hugo-congo/)

---

## 終わりに

Hugoで作成したブログをGitHub Actionsを用いてビルドからデプロイまで行いました。

ローカルでビルドしてからのデプロイよりも、GitHub Actionsを使ってクラウド上で行ったほうが楽ですね。

お読みいただきありがとうございました。

---
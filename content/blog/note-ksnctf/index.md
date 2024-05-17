---
title: "[note] ksnctf"
description: ksnctfで学んだことを自分用にまとめておきます。
date: 2024-05-17
draft: false
tags: 
categories:
  - blog
  - note
---

ksnctfで学んだことを自分用にまとめておきます。

## はじめに

こんにちは、IKです。

自分が学んだことを文書として記録しておこうと考え、記述します。

今回から新しく\[note]という形を取り、自分用にまとめていくというカテゴリーを作りました。

問題で学んだことを簡単に書いて行こうと思います。

もしかしたら、誰かの役に立つかもしれません。

よろしくお願いします。

---

## 環境

| 筆者の環境 |                                          |
| ----- | ---------------------------------------- |
| OS    | macOS arm64                              |
| SoC   | Apple M3                                 |
| CTF   | [ksnctf](https://ksnctf.sweetduet.info/) |


---

## Q1 「Test Problem」

![ksnctf-q1.png](ksnctf-q1.png)

今回は、[ksnctf](https://ksnctf.sweetduet.info/)という常駐CTFを進めていきます。

常駐CTFはまだ制覇したことがないため、SECCON Beginners 2024までに制覇するのが目標です。

どのCTFもテストプログラムがあるでしょうから、そこの欄は意気込みなどを書いていきたいと考えています。

では、始めていきましょう！

---

## Q2 「Easy Cipher」

![ksnctf-q2.png](ksnctf-q2.png)

ドットやカンマが入っている文章なのでシーザー暗号っぽいですね。

下記のサイトを使って突破しました。東京電気大学さんありがとうございます。

[シーザー暗号解読機](http://www.net.c.dendai.ac.jp/crypto/caesar2.html)


---

## Q3 「Crawling Chaos」

![ksnctf-q3.png](ksnctf-q3.png)

unya ?? → 「うにゃ」

「うにゃ」というばこれですね。ソースコードのヘッダ内にやっぱりありました。

[(」・ω・)」うー!(/・ω・)/にゃー!encode](https://sanya.sweetduet.info/unyaencode/)

デコードすると、unicodeとjavascriptのコードが現れました。

「\\u0024\\u0028」この形はunicodeエスケープシーケンス。下記サイトで文字列に変えました。

[Unicode Escape Sequence | KWONLINE.ORG](https://www.kwonline.org/u_esc_seq.php)

完全なjavascriptコードに直して、あとはアルゴリズムを確認するだけですね。

重要だったのは、`charCodeAt` と `fromCharCode` でした。

- `charCodeAt` は 文字からUTF-16コードへ
- `fromCharCode` はUTF-16コードから文字へ

---

## Q5 「Onion」

![ksnctf-q5.png](ksnctf-q5.png)

Onion? 

OnionといえばTorだが、Torみたいに何重にも暗号化されているということかな？

文字列の並び的にBase64っぽいし、Base64で16回デコードしたら、こんな文字列が、

```
begin 666 <data>
51DQ!1U]&94QG4#-3:4%797I74$AU
 
end
```

begin 666 で調べたら、Base64の一つ前の形式であるuuencodeなるものらしい。

下記サイトを使って、デコードしてFLAGを得ることができました。

[uuencode方式エンコード、デコード変換](https://www.motohasi.net/Misc/UUConv.php)

こうやって、いろんな形式のエンコードやデコードをするサイトを提供してくれる方には感謝しかないですね。

---

## Q8 「Basic is secure?」

![ksnctf-q8.png](ksnctf-q8.png)

お、pcapファイルだ。

ネットワークのパケットをキャプチャしたログが入っているファイルですね。

早速、Wiresharkでみたところ、HTTPでBASIC認証を行っておりパスワード（Flag）を平文で見ることができました。

---

## Q10 「#! 」

![ksnctf-q10.png](ksnctf-q10.png)

「#!」← これの名前を聞いているんですかね？

Pythonの先頭の行に使うこれ。

名前は「Shebang」というらしいです。

Unix系システムにおいて、ファイルに書かれたプログラム文をどの実行ファイルで実行するのかという指定らしいですね。

---

## Q20 「G00913」

![ksnctf-q20.png](ksnctf-q20.png)

「πの連続する桁で見つかる最初の10桁の素数」を探せと

ChatGPTに代わりに探して貰いました。

あんまり、LLMは使わないほうがいいのかな？

この問題の性質的に使ってもいいかなと思い使いました。

---

## Q25 「Reserved」

![ksnctf-q25.png](ksnctf-q25.png)

length , print , else ... と読める文字が多いので暗号化はされていないようですね。

プログラミング言語っぽいので `endprotoent` 辺りの関数を検索してみたところPerlかCかという感じ。

ひとまず、文字列を[paiza.io](https://paiza.io/ja/projects/new)を使って、Perlで実行してみたところFlagを得ることができました。

余談ですが、[paiza.io](https://paiza.io/ja/projects/new)かなり便利ですよね。

paizaさんいつもありがとうございます。

---

## Q32 「Simple Auth」

![ksnctf-q32.png](ksnctf-q32.png)

ソースを見たところパスワードの検証に `strcasecmp` を使っているようです。

この関数には脆弱性があり、配列を入力して実行すると0（値の一致）が返ってきてしまいます。

ブラウザのデベロッパーモードを開き、nameを配列型にします。

```
name = "password" → name = "password[]"
```

Flagを得ることができました。

また、`strcasecmp`は大文字、小文字も区別しないのでその点も注意ですね。

[strcasecmp](https://www.php.net/manual/ja/function.strcasecmp.php)

---

## Q35 Simple Auth II

![ksnctf-q35.png](ksnctf-q35.png)

ソースを見たところ、database.dbが相対パス指定されていたためauth.phpと同じ階層にあるのではと思い、URLを打ち込んだところダウンロードできました。

[DB Browser for SQLite](https://sqlitebrowser.org/)を使い、Flagを得ることができました。

---

## 終わりに

ksnectfを制覇できるまでどんどん追記していきます。

最後までお読みいただきありがとうございました。

---
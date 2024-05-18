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

## Q14 「John」

![ksnctf-q14.png](ksnctf-q14.png)

John ということで [John the ripper](https://www.openwall.com/john/) を使うやつだろうという予測。

user99に 「SHA512 is strong」 と 「Dictionary is here URL」という文字がありました。

なるほど、John the ripperを使ってUNIX形式のshadowファイルに対して辞書攻撃をするということか

早速、Jon the ripper（john-jumboの方）の使い方を調べて使ってみました

- shadow.txt → /etc/shadow 形式のファイル
- dictionary.txt → 辞書攻撃に使用するパスワードリスト

```
john shadow.txt --wordlist=dictionary.txt
john --show shadow.txt
```

あとは縦読みです。

いくら強力なSHA512といえども、辞書攻撃で破られてしまうような簡単なパスワードでは意味がないということがよくわかりました。

余談ですが、MacにJohn the ripperが入っていなかったため、brewでインストールしようとしたら「john」「john-jumbo」と２つあり悩みました。

「john」が公式のものであり、「john-jumbo」はコミュニティが開発している拡張版らしいですね。

あと、こういうツールを使うときは使い方に細心の注意を払わないと行けないですね。

## Q17 「Math II」

![ksnctf-q17.png](ksnctf-q17.png)

まあ、とりあえずM3に任せてゴリ押ししてみるよね。

無理だよね。

どうやら二分探索を使うのが正攻法らしいです。

``` python
x = "長すぎるので省略"

lo = 0
hi = 10**100

while True:
    md = (lo + hi) // 2
    print(md)
    if md**101 > x:
        hi = md - 1
    elif md**101 < x:
        lo = md + 1
    else:
        print("--- Flag ---")
        print("FLAG_" + str(md))
        break
```

time.sleep(0.05)を入れると二分探索の偉大さがよくわかりました。

下記が参考にしたサイトです。ありがとうございました。

[ksnctf Q17 mathII](https://kaffebreak.github.io/blog/ksnctf-Q17-mathII.html)

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

## Q29 「Double Blind」

![ksnctf-q29.png](ksnctf-q29.png)

お、Wordファイルか。

Officeファイルはとりあえず.zipをつけて解凍してしまうもの。

メインであるdocument.xmlを開いたら中に書いてました。

余談ですが、Macbook純正の解凍アプリだとOfficeファイルにzip拡張子をつけても解凍できませんでした。

サードパーティ製アプリの[The Unarchiver](https://theunarchiver.com/)を使うことで解凍することができました。

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
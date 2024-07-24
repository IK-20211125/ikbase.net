---
title: Git Commit Message 書き方
description: Git Commit Message 書き方
date: 2024-07-24
draft: false
tags: 
categories:
  - blog
---

Git Commit Message の書き方についてまとめました。

---

## はじめに

こんにちは、IKです。

自分が行ったことを文書として記録しておこうと考え、記述します。

今回、Gitで使うコミットメッセージを自分の中で策定しておこうと思い、記事にしました。

他の方の記事を参考にしています。

適宜追記を行う可能性が高いため、追記を行った際は日付を残します。

---

## 参考記事

下記の記事を参考にしました。

- [Gitのコミットメッセージの書き方（2023年ver.）](https://zenn.dev/itosho/articles/git-commit-message-2023)

- [Semantic Commit Messages](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)

- [How to Write a Git Commit Message](https://cbea.ms/git-commit/)

---

## Type

- `feat`: （新しい機能の実装、例：ログイン機能の実装）

- `fix`: （バグの修正、例：ログイン機能のバグ修正）

- `remove`: （実装した機能やファイルの削除、例：ログイン機能の削除）

- `docs`: （ドキュメントの変更、例：READMEの変更）

- `style`: （フォーマットなどの軽微な変更、例：不要なコメントの削除）

- `refactor`: （実稼働コードのリファクタリング、例：変数名の変更）

- `test`: （テスト関連の追加、例：デバッグ用のコードの追加）

- `chore`: （プロジェクトの維持や管理のために必要な作業、例：ライブラリの更新）

---

## Example

基本的には[Semantic Commit Messages](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)に準拠しています。

```
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, remove, or test.
```

---

## 終わりに

ほぼ「Semantic Commit Messages」と同じになってしまいました。

唯一、「remove」だけ追加しました。

実装した機能やファイルの削除を行う場合のtypeが欲しかったので追加してみました。

お読みいただきありがとうございました。

---
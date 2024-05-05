---
title: CVE関連の用語まとめてみた
description: CVE関連の用語をまとめてみました。
date: 2024-05-05
draft: false
tags: 
categories:
  - blog
---

## はじめに

こんにちは、IKです。

自分が学んだことを文書として記録しておこうと考え、記述します。

今回はCVE関連の用語についてまとめてみました。


---

## CVEとは

<u><font color="#f79646">個別製品中の脆弱性を対象</font></u>として、米国政府の支援を受けた非営利団体のMITRE社が採番している識別子です。

脆弱性検査ツールや脆弱性対策情報提供サービスの多くがCVEを利用しています。

IPAが運営しているJVNなどもCVEと同期しています。

[CVE（公式）](https://cve.mitre.org/)


---

## CVE関連用語まとめ


| 項目   | 名称                                   | 詳細                                            | 運営組織                                                  | CVEとの同期 |
| ---- | ------------------------------------ | --------------------------------------------- | ----------------------------------------------------- | ------- |
| CVE  | Common Vulnerabilities and Exposures | セキュリティ上の脆弱性に対する共通の識別子を提供する標準的な辞書。             | MITRE Corporation                                     | はい      |
| CWE  | Common Weakness Enumeration          | ソフトウェアやハードウェアの脆弱性に関する共通の弱点を定義する辞書。            | MITRE Corporation                                     | いいえ     |
| CVSS | Common Vulnerability Scoring System  | 脆弱性の深刻度を数値化するためのフレームワーク。                      | FIRST (Forum of Incident Response and Security Teams) | いいえ     |
| NVD  | National Vulnerability Database      | アメリカ国立標準技術研究所（NIST）が提供するCVEに関する情報をまとめたデータベース。 | NIST (National Institute of Standards and Technology) | はい      |
| JVN  | Japan Vulnerability Notes            | IPA（情報処理推進機構）が提供する脆弱性情報ポータル。日本国内での脆弱性情報を提供。   | IPA (Information-Technology Promotion Agency, Japan)  | はい      |


---

## CVEとCWEの違い


| 特徴     | CVE                                                                                         | CWE                                                                                                |
| ------ | ------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| **定義** | セキュリティ上の脆弱性に対する共通の識別子を提供する標準的な辞書。<br><u><font color="#f79646">個別製品中の脆弱性を対象</font></u>としている。 | ソフトウェアやハードウェアの脆弱性に関する<br><u><font color="#f79646">共通の弱点</font></u>を定義する辞書。<br>例：XSS,SQLインジェクション など |
| **目的** | 脆弱性の識別子を統一して管理し、情報の共有と追跡を容易にする。                                                             | 脆弱性の根本的な原因や弱点を定義し、開発者やセキュリティ専門家に対して教育的な役割を果たす。                                                     |
| **組織** | MITRE Corporation                                                                           | MITRE Corporation                                                                                  |
| **種類** | 識別子                                                                                         | 弱点                                                                                                 |


---

## CWE といえばこれ

![CWE](CWE.png)

[共通脆弱性タイプ一覧CWE概説 - IPA](https://www.ipa.go.jp/security/vuln/scap/cwe.html)


---

## 終わりに

CVE関連の用語についてまとめました。

基本的には生成AIに書かせましたが、ある程度は正確そうですね。

最後までお読みいただきありがとうございました。


---
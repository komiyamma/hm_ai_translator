# HmAiTranslator

![HmAiTranslator v1.0.2](https://img.shields.io/badge/HmAiTranslator-v1.0.2-6479ff.svg)
[![MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
![Hidemaru 9.25](https://img.shields.io/badge/Hidemaru-v9.25-6479ff.svg)
![HmOpenAiGpt v1.1.2.9](https://img.shields.io/badge/HmOpenAiGpt-v1.1.2.9-6479ff.svg)
![HmGoogleGemini v1.1.2.9](https://img.shields.io/badge/HmGoogleGemini-v1.1.2.9-6479ff.svg)

## 概要

「秀丸エディタ」上で、**Google Gemini** または **OpenAI GPT** を利用してテキスト翻訳を行うためのマクロです。
エディタで選択したテキストを、簡単な操作で日本語や英語に翻訳できます。

## 主な機能

- **2つのAIモデルに対応**:
  - Google Gemini
  - OpenAI GPT
- **双方向翻訳**:
  - 選択したテキストを日本語へ翻訳
  - 選択したテキストを英語へ翻訳
- **簡単な導入**:
  - ZIPファイルをダウンロードし、秀丸のマクロフォルダに展開するだけで利用を開始できます。

## 導入手順

1. **リリースのダウンロード**:
   - このリポジトリに含まれる、利用したいAIの `.zip` ファイルをダウンロードします。
     - `HmAiTranslatorOpenAiGpt.zip` (OpenAI GPT版)
     - `HmAiTranslatorGoogleGemini.zip` (Google Gemini版)
2. **マクロの展開**:
   - ダウンロードした `.zip` ファイルを、秀丸エディタのマクロフォルダに展開（解凍）してください。
   - マクロフォルダの場所が分からない場合は、秀丸エディタの `メニュー` > `その他` > `動作環境` > `パス` > `マクロファイル` で確認できます。

## 設定: APIキーの登録

本マクロを利用するには、各AIサービスのAPIキーが必要です。

1. **APIキーの取得**:
   - 利用したいサービスの公式サイトからAPIキーを取得してください。
     - [OpenAI Platform](https://platform.openai.com/api-keys)
     - [Google AI for Developers](https://aistudio.google.com/app/apikey)
2. **APIキーの設定**:
   - `.zip` を展開した際に生成される、以下のファイルを開いてAPIキーを設定します。
     - OpenAI版: `HmOpenAiGpt` フォルダ内の `HmOpenAiGpt.mac`
     - Gemini版: `HmGoogleGemini` フォルダ内の `HmGoogleGemini.mac`
   - **（※注意）** これらのファイルは、zip展開後に初めて現れます。ファイル内のコメントや指示に従って、ご自身のAPIキーを記入してください。

## 使い方

1. **テキストの選択**:
   - 秀丸エディタで翻訳したい文章や単語を選択します。
2. **マクロの実行**:
   - 実行したい翻訳のマクロを呼び出します。
     - **日本語へ翻訳**:
       - (OpenAI版) `HmOpenAiGpt\HmAiTranslatorToJp.mac`
       - (Gemini版) `HmGoogleGemini\HmAiTranslatorToJp.mac`
     - **英語へ翻訳**:
       - (OpenAI版) `HmOpenAiGpt\HmAiTranslatorToEn.mac`
       - (Gemini版) `HmGoogleGemini\HmAiTranslatorToEn.mac`
3. **翻訳結果の挿入**:
   - 選択範囲が翻訳されたテキストに置き換わります。

**（ヒント）**
`メニュー` > `マクロ` > `マクロ登録` から、よく使う翻訳マクロをメニューやキーボードショートカットに登録しておくと、素早く呼び出すことができて便利です。

## 詳細情報とダウンロード

より詳しい情報や最新版のダウンロードについては、以下のリンク先をご参照ください。

- **HmOpenAiGpt版**: https://秀丸マクロ.net/?page=nobu_tool_hm_openaigpt_call_trans
- **HmGoogleGemini版**: https://秀丸マクロ.net/?page=nobu_tool_hm_googlegemini_call_trans

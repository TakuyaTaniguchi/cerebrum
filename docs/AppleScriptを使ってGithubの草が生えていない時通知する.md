---
title: AppleScriptを使ってGithubの草が生えていない時通知する
sidebar_position: 1
---

# AppleScriptを使ってGithubの草が生えていない時通知する

Macのスクリプトエディタで動作確認ができるので利用する。

ドキュメントは少し見にくいがこちら
- https://developer.apple.com/library/archive/documentation/AppleScript/Conceptual/AppleScriptLangGuide/reference/ASLR_cmds.html#//apple_ref/doc/uid/TP40000983-CH216-SW59

```js
display notification "コミットしましょう！" with title "今日は草が生えていません！"
```
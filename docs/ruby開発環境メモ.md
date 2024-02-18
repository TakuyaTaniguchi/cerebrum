---
title: ruby開発環境メモ
sidebar_position: 1
---

# ruby開発環境を作成する

## asdfでversion管理ツールを入れる
```
asdf plugin add ruby https://github.com/asdf-vm/asdf-ruby.git
```

 - 最新バージョンをインストール
 ```
 asdf install ruby 3.3.0
 asdf global ruby 3.3.0
 ```

 - 使いたいディレクトリで適用する
 ```
  asdf local ruby 3.0.2
 ```

- vscodeに必要な拡張機能を入れる
Ruby
Ruby LSP
ruby-robocop-revived
VSCode rdbg Ruby Debugger


- setting.jsonの設定

```json
    "[ruby]": {
        "editor.defaultFormatter": "Shopify.ruby-lsp",
        "editor.formatOnSave": true,
        "editor.formatOnType": true,
        "editor.tabSize": 2,
        "editor.insertSpaces": true,
        "files.trimTrailingWhitespace": true,
        "files.insertFinalNewline": true,
        "files.trimFinalNewlines": true,
        "editor.rulers": [
            120
        ],
        "editor.semanticHighlighting.enabled": true,
        "rubyLsp.rubyVersionManager": "asdf",
        "rubyLsp.formatter": "rubocop",
    },
```
---
title: pnpm deployで「A deploy is only possible from inside a workspace」エラーになる。
sidebar_position: 5
---

pnpm deployはpnpmの予約後にあたるため、scriptsで動かす場合は下記で実行できる。  

```
pnpm run deploy
```

link: https://github.com/BuilderIO/qwik/issues/4253#issuecomment-1556340036
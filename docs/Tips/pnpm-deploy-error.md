---
title: 「A deploy is only possible from inside a workspace」
sidebar_position: 5
---

pnpm deployはpnpmの予約後にあたるため、そのまま実行すると、「A deploy is only possible from inside a workspace」エラーになり実行できない。  
  
scriptsで動かす場合は下記で実行できる。  

```
pnpm run deploy
```

link: https://github.com/BuilderIO/qwik/issues/4253#issuecomment-1556340036
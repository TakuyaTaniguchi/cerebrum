---
title: GithubのGraphQLを叩く
sidebar_position: 1
---

# GithubのGraphQLを叩く


GithubのPATを作成する。
gh経由でアクセスする際はPATを設定してログインする
```
gh auth login
```
必要な権限は 'repo', 'read:org', 'admin:public_key'.の三つ


```

gh api graphql -f query='
  query {
    user(login: "TakuyaTaniguchi") {
      repositories(first: 80, orderBy: {field: CREATED_AT, direction: DESC}) {
        nodes {
          id
          name
          owner {
            login
          }
        }
      }
    }
  }'

```

https://zenn.dev/yuichkun/articles/b207651f5654b0
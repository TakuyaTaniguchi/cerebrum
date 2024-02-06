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


contributionsの取得
```
gh api graphql -f mutation='
  query {
    user(login: "TakuyaTaniguchi") {
        createLabel(input:{
            title: "Create issue from GraphQL", repositoryId:"repository-id-xxxxxxxxxxxxxxxxxxx",
            projectIds:"project-id-xxxx", 
            labelIds: ["label-id-xxxxxxx"]}) {
            issue {
            id
            }
        }
    }
  }'
```

全てのmutationを取得してファイルに書き出す

```
gh api graphql -f query='
  query {
    __schema {
      mutationType {
        fields {
          name
        }
      }
    }
  }' --jq '.data.__schema.mutationType.fields' > ~/Desktop/mutations.json
```


```
gh api graphql -f query='
  query {
    user(login: "TakuyaTaniguchi") {
     contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }
    }
    }
  }'
```

https://zenn.dev/yuichkun/articles/b207651f5654b0
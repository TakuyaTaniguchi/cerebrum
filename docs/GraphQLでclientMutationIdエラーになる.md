---
title: GraphQLでclientMutationIdエラーになる
sidebar_position: 1
---

# GraphQLでclientMutationIdエラーになる

clientMutationIdはクライアントからGraphQlを実行する際に暗黙的発行される追跡用の値です。
多くの場合実装者は意識しなくていいのですが、GraphiQL IDEなどでデバックする際には、
値が含まれおらず、エラーは発生する可能性があります。


`"message": "Field 'mutation' is missing required arguments: input",`

対処方法としては、下記のように任意の値を入れてリクエストしてあげればOKです。

```
mutation {
  debug(input:{
    clientMutationId: "1"
  }) {
    clientMutationId
    message
  }
}
```
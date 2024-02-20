---
title: rubyリファレンスの読み方
sidebar_position: 1
---

# rubyリファレンスの読み方のメモ


https://docs.ruby-lang.org/ja/latest/method/Array/i/count.html


例

メソッド名 -> 返り値
メソッド名(引数) -> 返り値
メソッド名{} -> 返り値

count -> Integer[permalink][rdoc][edit]
count(item) -> Integer
count {|obj| ... } -> Integer
レシーバの要素数を返します。

引数を指定しない場合は、配列の要素数を返します。

引数を一つ指定した場合は、レシーバの要素のうち引数に一致するものの個数をカウントして返します(一致は == で判定します)。

ブロックを指定した場合は、ブロックを評価して真になった要素の個数をカウントして返します。


※ ary.count{|x|x%2==0}は体感的にわかりにくいが、要は中に関数を渡している状態
map((x)=> {x})と同じようなものと捉える
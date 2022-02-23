---
title: 読書メモ「Linuxで動かしながら学ぶTCP/IPネットワーク入門」
date: 2022-02-21
---
タイトル通り、ハンズオン形式でネットワークを学ぶのにうってつけの書籍です。LinuxのNetwork Namespaceの機能を使い、仮想的なネットワークの構築を通じて実践的に学べます。

## この本が向いている人

書籍では「ネットワークが専門ではないITエンジニア、あるいはそれを志す学生の皆さん」が想定読者に挙げられています。

他にも、実践で使えるネットワークの基礎技術を身につけたい、Linuxに触れたい、基本情報や応用情報、ネットワークスペシャリストの勉強など、さまざまなニーズに合いそうです。

私はネスぺの学習に際し、テキストを読むのとは違う角度からネットワークの理解を深めたいと思って読みました。

## 学習内容

VagrantとVirtualBoxを使って仮想環境（Ubuntu）を準備してから、Network Namespaceによる実験用ネットワークの構築を繰り返し実践します。

Network Namespaceはネットワーク的にシステムから独立した領域を作れる機能。仮想的なコンピュータを何台でも作り、IPアドレスやMACアドレスを好きに割り当てることができます。

作成した仮想的なコンピュータの間でpingを送り、tcpdumpでパケットをキャプチャする、という形で学習を進めていきます。最初は同一のネットワークセグメント間、次はルーターを挟んで別々のセグメント間といった具合に、段階を踏んでステップアップしていく点が取り組みやすかったです。

具体的には、以下のような内容をコマンドベースで体験していきます。

- ARPによるアドレス解決
- UDP、TCPを使ったクライアントとサーバー間でのメッセージの送受信
- DNSによる名前解決
- DHCPによるIPアドレスやルーティングテーブルの自動設定
- NAT（NAPT）によるIPアドレスの書き換え

著者のブログでも内容や執筆の背景が詳しく紹介されています。

[「Linuxで動かしながら学ぶTCP/IPネットワーク入門」という本を書きました - CUBE SUGAR CONTAINER](https://blog.amedama.jp/entry/linux-tcpip-book)

## よかった点

全体的に平易な文章で書かれていて、パケットの流れを例え話で解説している点も理解しやすかったです。実行するコマンドについてもオプションを含めて意味が説明されていました。

本来はネットワーク機器を実際に揃えて物理ネットワークを自分の手で組むのが勉強という意味では一番かもしれませんが、仮想環境さえ用意すれば学習が始められることはハードルが低くてよいと思います。

実際にコマンドを叩いてパケットの流れを追うため頭に入りやすく、本を読むだけではなかなか知識が定着しないという人には特におすすめです。

<div class="booklog_html"><table><tr><td class="booklog_html_image"><a href="https://www.amazon.co.jp/dp/B085BG8CH5?tag=shirosejp-22&linkCode=ogi&th=1&psc=1" target="_blank"><img src="https://m.media-amazon.com/images/I/51kU2EFP5UL._SL160_.jpg" width="106" height="150" style="border:0;border-radius:0;" /></a></td><td class="booklog_html_info" style="padding-left:20px;"><div class="booklog_html_title" style="margin-bottom:10px;font-size:14px;font-weight:bold;"><a href="https://www.amazon.co.jp/dp/B085BG8CH5?tag=shirosejp-22&linkCode=ogi&th=1&psc=1" target="_blank">Linuxで動かしながら学ぶTCP/IPネットワーク入門</a></div><div style="margin-bottom:10px;"><div class="booklog_html_author" style="margin-bottom:15px;font-size:12px;;line-height:1.2em">著者 : <a href="https://booklog.jp/author/%E3%82%82%E3%81%BF%E3%81%98%E3%81%82%E3%82%81" target="_blank">もみじあめ</a></div><div class="booklog_html_manufacturer" style="margin-bottom:5px;font-size:12px;;line-height:1.2em"></div><div class="booklog_html_release" style="font-size:12px;;line-height:1.2em">発売日 : </div></div><div class="booklog_html_link_amazon"><a href="https://booklog.jp/item/1/B085BG8CH5" style="font-size:12px;" target="_blank">ブクログでレビューを見る»</a></div></td></tr></table></div>

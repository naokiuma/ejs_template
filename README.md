-- 参考にしたサイト<br>
構築：https://webdrawer.net/tools/ejs.html<br>
一般的な使い方：https://haniwaman.com/ejs/<br>

-- 便利機能などの情報<br>
https://qiita.com/y_hokkey/items/31f1daa6cecb5f4ea4c9#%E3%83%AB%E3%83%BC%E3%83%97

-- コマンド<br>
gulp ejs コンパイル

<br>

--- 両端にアンダーバーをつけると空白が取り除かれる<br>
<%_ if (meta.css !== '') { _%>
    <link rel="stylesheet" href="./assetes/css/<%= meta.css %>.css">        
<%_ } _%>
<br>
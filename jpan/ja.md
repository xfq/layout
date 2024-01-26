# 日语

本文简单整理了日语书写系统于排版上的需求。本文的主要讨论对象是图书，但许多需求也适用于其他出版物。

本文参考了JIS X 4051标准和W3C《日文排版需求》文档。

## 使用的文字和基本原则

日文的书写方向有直排及横排两种。

日文排版主要使用的文字为汉字、平假名和片假名。

![汉字、平假名和片假名](./images/kanji-hiragana-katakana.png "汉字、平假名和片假名")

原则上，日文排版所使用的汉字、平假名和片假名比例皆为1:1的正方形，无缝隙并列排成版面。

## 汉字、平假名和片假名

汉字、平假名和片假名大小相同，有着正方形的文字外框。文字外框的正中央，有着比文字外框小的字面（反过来说，字面的上下左右与文字外框之间有若干空白。根据不同的字面设计，空白的大小会有所不同）。

<p><a class="termref" href="#term.character-size">文字尺寸</a>指的是文字外框的尺寸。</p>

## 词汇表

<table>
<thead>
<tr>
<th>英语</th>
<th>日语</th>
<th>简体中文</th>
<th>定义</th>
</tr>
</thead>

<tbody>
<tr id="term.base-character">
<td>base character</td>
<td lang="ja">親文字</td>
<td>基文</td>
<td> </td>
</tr>
<tr id="term.bleed">
<td>bleed</td>
<td lang="ja">裁切り</td>
<td>出血</td>
<td> </td>
</tr>
<tr id="term.character-advance">
<td>character advance</td>
<td lang="ja">字幅</td>
<td>字幅</td>
<td> </td>
</tr>
<tr id="term.character-frame">
<td>character frame</td>
<td lang="ja">外枠</td>
<td>文字外框</td>
<td> </td>
</tr>
<tr id="term.character-size">
<td>character size</td>
<td lang="ja">文字サイズ</td>
<td>文字尺寸</td>
<td> </td>
</tr>
<tr id="term.column">
<td>column</td>
<td lang="ja">段</td>
<td>栏</td>
<td> </td>
</tr>
<tr id="term.column-gap">
<td>column gap</td>
<td lang="ja">段間</td>
<td>栏间距</td>
<td> </td>
</tr>
<tr id="term.emphasis-dots">
<td>emphasis dots</td>
<td lang="ja">圏点</td>
<td>着重号</td>
<td> </td>
</tr>
<tr id="term.european-numerals">
<td>European numerals</td>
<td lang="ja">アラビア数字</td>
<td>阿拉伯数字</td>
<td> </td>
</tr>
<tr id="term.font">
<td>font</td>
<td lang="ja">フォント</td>
<td>字体</td>
<td> </td>
</tr>
<tr id="term.full-width">
<td>full-width</td>
<td lang="ja">全角</td>
<td>全角</td>
<td> </td>
</tr>
<tr id="term.group-ruby">
<td>group-ruby</td>
<td lang="ja">グループルビ</td>
<td> </td>
<td> </td>
</tr>
<tr id="term.half-width">
<td>half-width</td>
<td lang="ja">半角</td>
<td>半角</td>
<td> </td>
</tr>
<tr id="term.horizontal-writing-mode">
<td>horizontal writing mode</td>
<td lang="ja">横組</td>
<td>横排</td>
<td> </td>
</tr>
<tr id="term.hyphenation">
<td>hyphenation</td>
<td lang="ja">ハイフネーション</td>
<td> </td>
<td> </td>
</tr>
<tr id="term.japanese-and-western-mixed-text-composition">
<td>Japanese and Western mixed text composition</td>
<td lang="ja">和欧文混植</td>
<td>日、西文混排</td>
<td> </td>
</tr>
<tr id="term.jouyou-kanji-table">
<td>Jouyou Kanji Table</td>
<td lang="ja">常用漢字表</td>
<td>常用汉字表</td>
<td> </td>
</tr>
<tr id="term.line-adjustment">
<td>line adjustment</td>
<td lang="ja">行の調整処理</td>
<td>行内调整</td>
<td> </td>
</tr>
<tr id="term.mincho-typeface">
<td>Mincho typeface</td>
<td lang="ja">明朝体</td>
<td>宋体</td>
<td> </td>
</tr>
</tbody>
</table>

## 参考文献

* Hiroyuki Chiba; et al. Requirements for Japanese Text Layout 日本語組版処理の要件. 11 August 2020. NOTE. URL: https://www.w3.org/TR/jlreq/
* JIS X 4051：2004（日本語文書の組版方法，Formatting rules for Japanese documents），日本規格協会，東京，2004年
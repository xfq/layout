# 现代标准阿拉伯语

本文简单整理了阿拉伯字母及其在现代标准阿拉伯语中使用的基本信息，并就如何使用Unicode书写阿拉伯语提供建议。本文不包括古兰经的用法。

阿拉伯字母是一种<a class="termref" href="https://xfq.github.io/glossary/i18n/#term.abjad">辅音音素文字</a>，通常使用辅音和长元音来区分单词。除了阿拉伯语之外，乌尔都语和维吾尔语等语言也使用阿拉伯字母来拼写，不过并非所有这些语言都是辅音音素文字。

阿拉伯语用阿拉伯字母从右往左书写，而其中包含的数字和拉丁字母则从左往右书写。

阿拉伯字母会根据所处的位置（词首、词中或词尾）不同，有不同的书写形式。

阿拉伯字母不区分大小写。

## 本文所涵盖的语言

**现代标准阿拉伯语**是北非和西亚国家在书面和大多数正式演讲中使用的阿拉伯语变体。阿拉伯语的其他变体在排版上可能会有所不同。

## 基本原则

阿拉伯字母的一些特征对字体设计师来说是具有挑战性的。

### 纵向连接

字母除了由右至左连接，还可以纵向（自上而下）连接，不过并非所有字体都支持。

<figure id="fig_vertical_joining">
<table>
<tbody>
<tr>
<td style="text-align: center;"><img style="text-align: center; width: 65px; height: 70px;" alt="纵向连接" src="./images/vertivalJoin.jpg"></td>

<td style="text-align: center;"><img style="text-align: center; width: 69px; height: 46px;" alt="横向连接" src="./images/horizontalJoin.jpg"></td>
</tr>
</tbody>
</table>
<figcaption>几乎是纵向的的连接（左）和水平的连接（右）</figcaption>
</figure>

需要注意的是，这不仅具有审美上的意义，而且还会影响文字两端对齐时的宽度。在手写文本中，作者可自行决定选择适合指定行长的连接方式。

### “牙齿”字母

当连续字母的中部形式一致时，它们就可以呈现出类似牙齿的形状。

<figure id="fig_teeth_letters">
<div><img style="width: 276px; height: 74px;" alt="牙齿字母" src="./images/teeth.jpg"></div>
<figcaption>“牙齿”字母</figcaption>
</figure>

## 伊斯兰手稿传统

### 起源

阿拉伯字母属于闪语族书写系统，由纳巴泰字母演变而来，在公元4世纪产生，与叙利亚字母和希伯来字母关系密切。

伊斯兰教认为，先知穆罕默德是用阿拉伯语接受启示的，因此阿拉伯语被赋予了宗教含义。穆罕默德于公元632年去世后，在阿布·伯克尔和奥斯曼两位哈里发的带领下，他的启示首次以书面形式进行了汇编和标准化，由此产生的经典《古兰经》成为了信仰的核心载体。因此，阿拉伯字母随着伊斯兰文明的传播而超越了其起源地，并开始用于书写其他语言。由于伊斯兰教的广泛传播，过去和现在都有许多不同的语言使用阿拉伯字母书写，因此出现了不同的正字法。

### 常用字体风格

伊斯兰手稿是随着伊斯兰艺术和文明的发展而演变的。早在公元7世纪，在岩石圆顶的马赛克中就可以找到装饰性的阿拉伯字母。除了在建筑中频繁出现之外，书法也成为伊斯兰最重要的艺术形式之一。通过抄写书籍和书法艺术，手稿逐渐成为伊斯兰文明的核心要素。

随着时间的推移，字体风格也在不断演变，很多字体已不再被使用，也有一些保留了下来。

TBD

## 字符

### 字符编码

阿拉伯字母在Unicode标准中是按**语义**编码的。也就是说，不管一个字母有多少种形式，都只有一个Unicode码位，

Unicode还为阿拉伯字母提供了部分**非语义**编码字符，分布在**阿拉伯字母表达形式-A**（Arabic Presentation Forms-A）和**阿拉伯字母表达形式-B**（Arabic Presentation Forms-B）两个区块中。这些字符已被弃用，不应在一般的信息交换中使用。

## 字符列表

下面的表格列出了用阿拉伯字母书写现代标准阿拉伯语时使用的Unicode字符。

### 字母

| **字符** | **码位** | **名称**                                                      |
|----------|----------|---------------------------------------------------------------|
| ء        | U+0621   | ARABIC LETTER HAMZA                                           |
| آ        | U+0622   | ARABIC LETTER ALEF WITH MADDA ABOVE                           |
| أ        | U+0623   | ARABIC LETTER ALEF WITH HAMZA ABOVE                           |
| ؤ        | U+0624   | ARABIC LETTER WAW WITH HAMZA ABOVE                            |
| إ        | U+0625   | ARABIC LETTER ALEF WITH HAMZA BELOW                           |
| ئ        | U+0626   | ARABIC LETTER YEH WITH HAMZA ABOVE                            |
| ا        | U+0627   | ARABIC LETTER ALEF                                            |
| ب        | U+0628   | ARABIC LETTER BEH                                             |
| ة        | U+0629   | ARABIC LETTER TEH MARBUTA                                     |
| ت        | U+062A   | ARABIC LETTER TEH                                             |
| ث        | U+062B   | ARABIC LETTER THEH                                            |
| ج        | U+062C   | ARABIC LETTER JEEM                                            |
| ح        | U+062D   | ARABIC LETTER HAH                                             |
| خ        | U+062E   | ARABIC LETTER KHAH                                            |
| د        | U+062F   | ARABIC LETTER DAL                                             |
| ذ        | U+0630   | ARABIC LETTER THAL                                            |
| ر        | U+0631   | ARABIC LETTER REH                                             |
| ز        | U+0632   | ARABIC LETTER ZAIN                                            |
| س        | U+0633   | ARABIC LETTER SEEN                                            |
| ش        | U+0634   | ARABIC LETTER SHEEN                                           |
| ص        | U+0635   | ARABIC LETTER SAD                                             |
| ض        | U+0636   | ARABIC LETTER DAD                                             |
| ط        | U+0637   | ARABIC LETTER TAH                                             |
| ظ        | U+0638   | ARABIC LETTER ZAH                                             |
| ع        | U+0639   | ARABIC LETTER AIN                                             |
| غ        | U+063A   | ARABIC LETTER GHAIN                                           |
| ف        | U+0641   | ARABIC LETTER FEH                                             |
| ق        | U+0642   | ARABIC LETTER QAF                                             |
| ك        | U+0643   | ARABIC LETTER KAF                                             |
| ل        | U+0644   | ARABIC LETTER LAM                                             |
| م        | U+0645   | ARABIC LETTER MEEM                                            |
| ن        | U+0646   | ARABIC LETTER NOON                                            |
| ه        | U+0647   | ARABIC LETTER HEH                                             |
| و        | U+0648   | ARABIC LETTER WAW                                             |
| ى        | U+0649   | ARABIC LETTER ALEF MAKSURA                                    |
| ي        | U+064A   | ARABIC LETTER YEH                                             |
| ٯ        | U+066F   | ARABIC LETTER DOTLESS QAF                                     |
| پ        | U+067E   | ARABIC LETTER PEH                                             |
| چ        | U+0686   | ARABIC LETTER TCHEH                                           |
| ژ        | U+0698   | ARABIC LETTER JEH                                             |
| ڜ        | U+069C   | ARABIC LETTER SEEN WITH THREE DOTS BELOW AND THREE DOTS ABOVE |
| ڢ        | U+06A2   | ARABIC LETTER FEH WITH DOT MOVED BELOW                        |
| ڤ        | U+06A4   | ARABIC LETTER VEH                                             |
| ڥ        | U+06A5   | ARABIC LETTER FEH WITH THREE DOTS BELOW                       |
| ڧ        | U+06A7   | ARABIC LETTER QAF WITH DOT ABOVE                              |
| ڨ        | U+06A8   | ARABIC LETTER QAF WITH THREE DOTS ABOVE                       |
| ک        | U+06A9   | ARABIC LETTER KEHEH                                           |
| گ        | U+06AF   | ARABIC LETTER GAF                                             |
| ی        | U+06CC   | ARABIC LETTER FARSI YEH                                       |

### 音符

<table>
<thead>
<tr>
<th>字符</th>
<th>码位</th>
<th>名称</th>
</tr>
</thead>

<tbody>
<tr id="def_U+064B">
<td class="rtlTermCell" dir="rtl" lang="ar"><img src="./images/characters/U+064B.svg" alt="ARABIC FATHATAN" class="charimage">
</td>

<td class="uname">U+064B</td>
<td class="uname">ARABIC FATHATAN</td>
</tr>


<tr id="def_U+064C">
<td class="rtlTermCell" dir="rtl" lang="ar"><img src="./images/characters/U+064C.svg" alt="ARABIC DAMMATAN" class="charimage">
</td>

<td class="uname">U+064C</td>
<td class="uname">ARABIC DAMMATAN</td>
</tr>


<tr id="def_U+064D">
<td class="rtlTermCell" dir="rtl" lang="ar"><img src="./images/characters/U+064D.svg" alt="ARABIC KASRATAN" class="charimage">
</td>

<td class="uname">U+064D</td>
<td class="uname">ARABIC KASRATAN</td>
</tr>


<tr id="def_U+064E">
<td class="rtlTermCell" dir="rtl" lang="ar"><img src="./images/characters/U+064E.svg" alt="ARABIC FATHA" class="charimage">
</td>

<td class="uname">U+064E</td>
<td class="uname">ARABIC FATHA</td>
</tr>


<tr id="def_U+064F">
<td class="rtlTermCell" dir="rtl" lang="ar"><img src="./images/characters/U+064F.svg" alt="ARABIC DAMMA" class="charimage">
</td>

<td class="uname">U+064F</td>
<td class="uname">ARABIC DAMMA</td>
</tr>


<tr id="def_U+0650">
<td class="rtlTermCell" dir="rtl" lang="ar"><img src="./images/characters/U+0650.svg" alt="ARABIC KASRA" class="charimage">
</td>

<td class="uname">U+0650</td>
<td class="uname">ARABIC KASRA</td>
</tr>


<tr id="def_U+0651">
<td class="rtlTermCell" dir="rtl" lang="ar"><img src="./images/characters/U+0651.svg" alt="ARABIC SHADDA" class="charimage">
</td>

<td class="uname">U+0651</td>
<td class="uname">ARABIC SHADDA</td>
</tr>


<tr id="def_U+0652">
<td class="rtlTermCell" dir="rtl" lang="ar"><img src="./images/characters/U+0652.svg" alt="ARABIC SUKUN" class="charimage">
</td>

<td class="uname">U+0652</td>
<td class="uname">ARABIC SUKUN</td>
</tr>

</tbody>
</table>

### 数字

| **字符** | **码位** | **名称**                 |
|----------|----------|--------------------------|
| ٠        | U+0660   | ARABIC-INDIC DIGIT ZERO  |
| ١        | U+0661   | ARABIC-INDIC DIGIT ONE   |
| ٢        | U+0662   | ARABIC-INDIC DIGIT TWO   |
| ٣        | U+0663   | ARABIC-INDIC DIGIT THREE |
| ٤        | U+0664   | ARABIC-INDIC DIGIT FOUR  |
| ٥        | U+0665   | ARABIC-INDIC DIGIT FIVE  |
| ٦        | U+0666   | ARABIC-INDIC DIGIT SIX   |
| ٧        | U+0667   | ARABIC-INDIC DIGIT SEVEN |
| ٨        | U+0668   | ARABIC-INDIC DIGIT EIGHT |
| ٩        | U+0669   | ARABIC-INDIC DIGIT NINE  |

## 词汇表

| **英语**                | **简体中文**        |
|-------------------------|---------------------|
| baseline                | 基线                |
| bleed                   | 出血                |
| block (Unicode)         | 区块，块（Unicode） |
| code point              | 码位                |
| contextual form         | 内文形式            |
| diacritics              | 音符                |
| Eastern Arabic numerals | 阿拉伯文数字        |
| European numerals       | 阿拉伯数字          |
| final form              | 尾部形式            |
| font                    | 字体                |
| horizontal writing mode | 横排                |
| initial form            | 首部形式            |
| isolated form           | 独立形式            |
| medial form             | 中部形式            |
| vertical writing mode   | 直排                |

## 参考文献

Richard Ishida. Arabic & Persian Layout Requirements. 12 December 2023. W3C Note. URL: https://www.w3.org/TR/alreq/
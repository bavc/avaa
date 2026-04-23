---
layout: post
title: 降噪系统（Noise Reduction）
categories: audio analog
namevar: [Dolby, dbx, Compander]
tags: [Analog, Audio, Cassette, Noise, Open Reel Tape]
lang: 中文
---

在模拟磁带的录制与回放流程中引入降噪（NR）系统，是为了减少信号链中音频设备所引入的噪声。降噪系统通过压缩录制时音频信号的动态范围，并在回放时进行扩展，将信号的原始动态范围恢复原状。<sup><a href="#fn1" id="ref1">1</a></sup> 有效的降噪处理能在不产生可闻"喘息"瑕疵（即主信号电平起伏波动）的前提下，掩蔽不需要的噪声。

多年来，基于这种压缩-扩张设计已演生出多种系统。回放时所用降噪系统必须与录制时完全匹配，才能正确还原信号。最为常见的系统包括 Dolby（含专业级 Dolby A 和 SR，以及消费级 Dolby B / C / S）、dbx I 型和 II 型，以及 TelCom。<sup><a href="#fn2" id="ref2">2</a></sup> 更为详尽的系统列表可在 Richard Hess 的博客中找到。<sup><a href="#fn3" id="ref3">3</a></sup> 上述所有系统至今均以硬件形式存在。截至本文撰写时，尚无任何降噪插件可供使用，这意味着以特定降噪系统编码的磁带，必须在回放时使用对应的硬件降噪系统进行解码。

译注：此处的“插件”应指为DAW软件开发的能够将“使用降噪处理录制的录音带”在“无降噪功能的录音机播放出来后”处理为“使用具备降噪功能的录音机播放出的效果”的插件。

## 是否可以修复？

若一盒磁带被确认使用了某种降噪系统录制（例如盒式磁带标签上的"NR"选项已勾选，或录制操作员在磁盒上标注了 dbx 或 Dolby），请勿想当然地认为磁带一定编码了降噪。同理，若磁带上未提及任何降噪系统，也不能认定其未使用降噪编码。

如何判断磁带是否使用了降噪系统？一份题为《音频磁带保存与 Dolby 降噪系统：辅助识别、回放与转录入门指南》的白皮书<sup><a href="#fn4" id="ref4">4</a></sup>包含对 Dolby 的详细论述，其中大量摘录记录了盒式磁带格式相关消费级降噪类型之间的差异。当文档缺失时，仅凭听觉进行判断可能导致错误转录。如有疑问，建议将同一条目转录两次：一次不加降噪（直通），一次进行解码。

## 示例

<img src="{{ site.baseurl }}/images/Mandelbrot_dolbyB.png">
<img src="{{ site.baseurl }}/images/Mandelbrot_flat.png">

<sub>一盒以 Dolby B 编码录制的盒式磁带，以 Dolby B 解码回放（左）与不加 Dolby B 解码回放（右）的音频波形片段对比。</sub>

<img src="{{ site.baseurl }}/images/Mandelbrot_spectrum_dolbyb.jpg">

## 参考资料

<sup id="fn1">1. Kevin Bradley（编），《数字音频对象的制作与保存指南》，[IASA TC-04](http://www.iasa-web.org/tc04/audio-preservation)（第2版，2009年）。 <a href="#ref1" title="Jump back to footnote 1 in the text.">↩</a></sup>
<sup id="fn2">2. 同上。 <a href="#ref2" title="Jump back to footnote 2 in the text.">↩</a></sup>
<sup id="fn3">3. Richard Hess 博客，降噪系统列表。 <a href="#ref3" title="Jump back to footnote 3 in the text.">↩</a></sup>
<sup id="fn4">4. 相关白皮书。 <a href="#ref4" title="Jump back to footnote 4 in the text.">↩</a></sup>

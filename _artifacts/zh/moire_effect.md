---
layout: post
title: 摩尔纹效应（Moiré Effect）
categories: video analog
tags: [Interference, Video, Analog]
lang: 中文
---

摩尔纹仅影响复合彩色视频信号，而不影响 RGB、S-Video 或色差信号。摩尔纹可能产生于原始磁带回放过程，也可能在视频信号录制阶段就已存在。

在数学、物理和艺术领域，摩尔纹（/mwɑrˈeɪ/；法语：[mwaˈʁe]）是一种次生的视觉叠加图案，例如当两个相同的（通常是透明的）图案（如从某点向外辐射的密集直线或网格）在平面或曲面上叠放，并相互发生轻微位移或旋转时所产生的效果。<sup><a href="#fn1" id="ref1">1</a></sup>

<blockquote>"摩尔纹"作为通称，指以规则图案出现或以不规则、躁动方式移动的细密周期结构。它们可能叠加在整个画面区域，与图像内容无关；也可能仅叠加在部分图像区域，取决于画面内容。在第二种情况下，可进一步区分两种类型：（1）图像内容中的细节区域被叠加上闪烁的色彩效果，最容易在图案细腻的服装上察觉；（2）高饱和度色彩区域和强对比色调的彩色垂直边缘处被叠加上亮度中的细条纹图案。<sup><a href="#fn2" id="ref2">2</a></sup></blockquote>

摩尔纹由解调过程中对信号分量的错误解读引起。若亮度信号被解读为色度信号，该效应称为"彩色串扰"（cross-color）；其对应的"亮度串扰"（cross-luma）效应详见[点爬行（Dot Crawl）]({{ site.baseurl }}/artifacts/dot_crawl.html)条目。从磁带读取并处理复合编码视频信号时，解调过程中亮度载波与色度副载波合并形成完整图像。全基带视频频谱为 5 MHz，色度副载波频率为 3.58 MHz。由于两者共用同一传输通路（通常为一根同轴视频连接线），复用过程中数据可能被错误解读，在图像细节丰富的区域产生"彩虹"效果。

使用分量或 S-Video 等其他信号传输方式时，由于亮度和色度分开传输，这些效应可被消除。

## 是否可以修复？

转录原始内容时，应始终使用 S-Video 或分量视频信号格式。若必须使用复合视频信号，请使用能以 3D 梳状滤波器精确处理源视频的设备。

## 示例

<img src="{{ site.baseurl }}/images/Moire_640x480.jpg">

## 参考资料

<sup id="fn1">1. 维基百科，[摩尔纹](https://en.wikipedia.org/wiki/Moir%C3%A9_pattern)。 <a href="#ref1" title="Jump back to footnote 1 in the text.">↩</a></sup>
<sup id="fn2">2. Johannes Gfeller、Agathe Jarczyk、Joanna Phillips，《模拟视频影像错误大全》（瑞士艺术研究所编，苏黎世：Scheidegger & Spiess，2012年）。 <a href="#ref2" title="Jump back to footnote 2 in the text.">↩</a></sup>

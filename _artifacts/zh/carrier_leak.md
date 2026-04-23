---
layout: post
title: 载波泄漏
namevar: [载波平衡不良, 不对称载波, 残余载波]
categories: video analog
tags: [Analog, Video, Device Error]
lang: 中文
---

载波泄漏是指源于视频播放设备的黑白视频问题。该术语有时出现在机器维护和校准的语境中，因为该瑕疵与设备状态直接相关。载波泄漏可以录制进二代视频副本中，从而成为视频信号的一部分。

在录制黑白视频时，FM（调频）过程用于对视频信号（黑白约为 3 MHz）进行调制后存储于录像磁带。播放时，[调频信号](http://en.wikipedia.org/wiki/Frequency_modulation)由一对[视频磁头](http://en.wikipedia.org/wiki/Tape_head)读取，经播放机内部电路放大并解调。若处理不够精确，导致两个播放磁头读取信号的放大量不平衡，视频图像上就会叠加出一种纹理化的条带图案。该失真是调制载波泄漏进解调后视频信号的结果，并在监视器播放期间显示出来。

Gfeller 等人对此解释如下：

<blockquote>在较早的视频格式中出现这种干扰现象，主要有两个原因。<br>
（1）相对简单的视频设备通常由用户自行维护，即由非技术人员操作，因此并非总能得到正确调整。<br>
（2）在部分最古老的格式中，调制往往发生在处于视频信号基带带宽范围内的频段。<sup><a href="#fn1" id="ref1">1</a></sup></blockquote>

## 是否可以修复？

若载波泄漏已录制进图像中，则无法修复。若载波泄漏源于设备故障，则可能需要对录像机进行维修。

## 示例

<img src="{{ site.baseurl }}/images/CarrierLeak_Flat.jpg">
<sub>载波泄漏在整个视频图像上呈现为纹理化的人字形图案。</sub>

## 参考资料

<sup id="fn1">1. Johannes Gfeller, Agathe Jarczyk, and Joanna Phillips, "Carrier Leak" in _Compendium of Image Errors in Analogue Video_ (edited by Swiss Institute for Art Research, Zürich: Scheidegger & Spiess, 2012), p.104, video 54. <a href="#ref1" title="Jump back to footnote 1 in the text.">↩</a></sup>

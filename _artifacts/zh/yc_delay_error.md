---
layout: post
title: Y/C 延迟误差（Y/C Delay Error）
categories: video analog
tags: [Analog, Video, Y/C Delay Error]
lang: 中文
---

当视频出现 Y/C 延迟误差时，亮度与色度通道之间（或各色度通道之间）的时序不匹配，导致监视器上色彩的呈现出现可见的错位。Y/C 错位会在色差对比度高的区域边缘产生模糊，并在视频画面中物体的清晰轮廓处最为明显。

## 是否可以修复？

可以。部分[内置于录像机或独立式](http://en.wikipedia.org/wiki/Time_base_correction)的时基校正器（TBC）具备 Y/C 时差调节功能。

## 示例

<img src="{{ site.baseurl }}/images/YCDelayError_Flat.jpg">

<sub>在上图放大的细节框中，可以看到记者黄色牛仔裤边缘出现白色轮廓，以及背景标牌橙色阴影文字周围出现绿色偏色。这是由视频信号中 Y 分量和 C 分量错位所致。下图已对该误差进行了校正。</sub>

<img src="{{ site.baseurl }}/images/YCDelayErrorFixed_Flat.jpg">

---
layout: post
title: 残像（Image Lag）
categories: video analog
namevar: [Ghosting, Smearing, Burn-in, Comet Tails, Luma Trails, Luminance Blooming]
tags: [Ghosting, Smearing, Comet Tails, Tape Error, Analog, Video, Luminance Blooming]
lang: 中文
---

残像发生在使用特定类型拾像器及摄像机录制或显示的视频中，包括Vidicon摄像管等。此类摄像管通过镜头将场景中的光线汇聚到一个光电靶面上，形成电荷密度分布图案，再由低速电子束扫描读出。所得图像经过放大后可录制到磁带或输出至监视器。靶面上的电荷会一直残留，直至[被重新扫描或自然消散](http://en.wikipedia.org/wiki/Video_camera_tube)。

<blockquote>摄像机中信号电流跟随靶面照度快速变化而建立新值所需的时间延迟，被称为"残像"或简称"残留"。在光电导摄像管中，残像以两种形式出现：（i）由靶面材料特性决定的光电导残留；（ii）由像素电容的存储效应与电子束电阻引起的电容残留（亦称束流残留）。影像残留会使场景中快速运动的物体身后产生拖影或彗尾，而将一个明亮静止物体长时间曝光则会产生缓慢衰减的余像，外观类似X射线的效果。这种持续时间较长但相当微弱的余像被称为"烧屏"或"图像粘连"。<sup><a href="#fn1" id="ref1">1</a></sup></blockquote>

当彗尾或辉度拖影清晰可见时，该视觉瑕疵有时被称为"鬼影"（Ghost or Ghosting）。请注意，Ghosting还有“[重影]({{ site.baseurl }}/artifacts/ghost.html)”意，指视频传输中主信号与次要射频信号之间存在差异时产生的瑕疵。

除导致影像残留外，Vidicon摄像管的问题还可能使图像中的明亮区域呈现为白色斑块，其范围有时大于原始明亮物体或光源。这一瑕疵被称为"亮度晕染"（Luminance Blooming），通常与影像残留同时出现。

译注：Vidicon tube是最常见的摄像管类型，但有时也泛化为指代所有摄像管。因原文均为Vidicon，故均译为“Vidicon摄像管”，但需注意，其实不光vidicon，所有的摄像管均会产生不同程度的残像。

## 是否可以修复？

影像残留无法修复，它是老式摄像管技术固有局限性的产物。

## 示例

<iframe src="https://archive.org/embed/AVAAAvaaGhostTest03" width="560" height="315" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe><br>
<sub>摄像机晃动时可见彗尾，歌手运动时头部周围出现白色光晕。（Walter Steding 1980年代演唱会，_XFR STN Project_；[Internet Archive](https://archive.org/details/XFR_2013-07-27_1A_01)，2013年。）</sub>

## 参考资料

<sup id="fn1">1. 引自原文注释。 <a href="#ref1" title="Jump back to footnote 1 in the text.">↩</a></sup>

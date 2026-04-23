---
layout: post
title: DV 绗缝效应
categories: video digital
tags: [Digital, Video, Quilting, Discrete Cosine Transform, Error, DV]
formats: [DV]
lang: 中文
---

在含有强烈水平和对角线构图的 DV 素材中，由于"相邻 DCT 块之间的不连续性"，可能出现类似阶梯状的瑕疵。<sup><a href="#fn1" id="ref1">1</a></sup> 该瑕疵是 DCT 压缩器（包括 JPEG 和 MPEG 编解码器）的固有特性。DCT 压缩器以 8×8 的块为单位处理图像，无法平滑还原经过渐变过渡的对角线。在高分辨率显示器上增强锐度控制会加重该瑕疵（译注：此处指显像管显示器的Aperture控制），在包含缓慢摄像机运动的素材中尤为明显。画面中物体排列在约 20 度对角线方向上的录像似乎特别容易受此影响。

## 是否可以修复？

不能。绗缝效应无法修复。


## 示例

<iframe src="https://archive.org/embed/AVAA.DVQuilting" width="560" height="315" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>

在此片段中，注意画面下方百叶窗上出现的绗缝效应。

<img src="{{ site.baseurl }}/images/Quilting_Flat.jpg">

## 另请参阅

* [DV Technology for Video Computer Applications](https://people.kth.se/~eskil/DV/DV_overwiev.pdf), 2008
* [The DV Show: What Are the DV Artifacts I Keep Hearing About](http://www.thedvshow.com/faq-pro/index.php?action=article&cat_id=017&id=202), 2006

## 参考资料

<sup id="fn1">1. Adam Wilt, [DV Pix - Image Artifacts](https://www.adamwilt.com), 1998. <a href="#ref1" title="Jump back to footnote 1 in the text.">↩</a></sup>

---
layout: post
title: 色度欠采样瑕疵（Sub-sampling Artifact）
categories: video digital
tags: [Digital, Video, DV25, Sub-sampling]
lang: 中文
---

在 DV25 编解码器中，每四个亮度采样对应一个色差分量采样（即 4:1:1 色度二次采样方案）。在 4:1:1 方案中，C<sub>b</sub>（蓝色差）信号在与第一个亮度采样相同的位置采样一次，然后该 C<sub>b</sub> 色彩值被重复三次（而亮度信号在这些采样点上逐一采样）。C<sub>r</sub>（红色差）信号同样只采样一次并重复三次。

这种同址采样方式产生 Y/C 延迟，在高饱和度场景（尤其是高红色饱和度）中可能表现为块状噪波或色度清晰度下降。<sup><a href="#fn1" id="ref1">1</a></sup>

译注：此仅NTSC制式的DV25编码器使用411色度采样，PAL制式DV使用420色度采样，此瑕疵一般较轻

## 是否可以修复？

不能，色度欠采样瑕疵无法修复。

## 另请参阅

Adam Wilt，《[DV、DVCAM 与 DVCPRO 格式](http://www.adamwilt.com/DV-FAQ-tech.html)》，2000-2006年。

## 参考资料

<sup id="fn1">1. Adam Wilt，《[DV 像素——采样方法](http://www.adamwilt.com/pix-sampling.html)》，1998年。 <a href="#ref1" title="Jump back to footnote 1 in the text.">↩</a></sup>

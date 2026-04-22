---
layout: post
title: 色彩锁定丢失（Loss of Color Lock）
categories: video analog
tags: [Analog, Video, Color, PAL, Color lock, Operator Error, Device Error]
formats: [U-matic]
lang: 中文
---

色彩锁定是在回放过程中重建主要针对 PAL 制 U-matic 磁带（低带及高带）色彩信号的处理机制。若信号频率出现偏差，"色度副载波将在每行持续时间内发生相位偏移，导致颜色无法正确还原。"<sup><a href="#fn1" id="ref1">1</a></sup> 由此产生的视觉效果十分明显：

<blockquote>从图像左边缘到右边缘出现一条颜色渐变带，沿垂直中心轴有一条狭窄的消色差区域。更准确地说，所有扫描线从图像左边缘开始出现各色相特有的偏色，颜色饱和度向图像中心方向逐渐降至零，随后在图像右边缘以互补色的最高饱和度重现。<sup><a href="#fn2" id="ref2">2</a></sup></blockquote>

黑白录制内容和 [NTSC](http://en.wikipedia.org/wiki/NTSC) 录制内容不受色彩锁定丢失的影响。但若将 NTSC 录制内容在多制式播放机上以错误色彩锁定设置播放，"颜色会完全消失，并出现特征性的斜向鱼骨纹图案。"<sup><a href="#fn3" id="ref3">3</a></sup>

## 是否可以修复？

调整 PAL 回放设备上的色彩锁定控制器，直至颜色正确还原。若调整无效，尝试在同一设备中播放测试磁带时进行相同调整。若测试磁带的颜色可以正确还原，则说明该磁带录制本身存在无法修复的缺陷；若播放测试磁带时问题依然存在，则说明设备需要检修。

## 示例

<iframe src="https://archive.org/embed/AVAAUmaticColorLock" width="640" height="480" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>

## 参考资料

<sup id="fn1">1. Johannes Gfeller、Agathe Jarczyk、Joanna Phillips，《模拟视频影像错误大全》（瑞士艺术研究所编，苏黎世：Scheidegger & Spiess，2012年），第56页，视频5及6。 <a href="#ref1" title="Jump back to footnote 1 in the text.">↩</a></sup>
<sup id="fn2">2. Gfeller 等，同上。 <a href="#ref2" title="Jump back to footnote 2 in the text.">↩</a></sup>
<sup id="fn3">3. Gfeller 等，同上。 <a href="#ref3" title="Jump back to footnote 3 in the text.">↩</a></sup>

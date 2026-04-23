---
layout: post
title: 色度副载波相位误差（Subcarrier Phase Error）
categories: video analog
tags: [Analog, Video, Phase, Hue, Operator Error, Device Error, Common Artifacts]
lang: 中文
---

"色度相位是两个信号之间的关系——在此指色度信号与视频参考色同步脉冲之间的关系。矢量示波器内部的处理及其信号显示，专门用于检测和评估色度的相位失真。色度相位失调会影响监视器上视频的色调。若视频图像中的肤色不正确，可能是色度信息与色同步脉冲相位不一致。若合成视频整体偏绿，或交替出现品红偏色，则可能需要调整色度相位。"<sup><a href="#fn1" id="ref1">1</a></sup>

## 是否可以修复？

若整盘磁带的相位误差保持一致，则可通过重新转录并使用处理放大器调整磁带录像机输出信号的色调来纠正该误差。若视频图像中色调不一致，则源视频信号在原始录制时可能存在副载波参考信号质量差或损坏的问题。在下方标注为"PAL 相位误差"的示例中，可看到相位在整个片段中快速翻转 180 度。该误差的成因目前尚不明确，且无法通过处理放大器设置修复。

译注：这种错误可以通过软件对数字文件进行一定程度的校正，例如使用photoshop的“色相”或者类似工具。

## 示例

<img src="{{ site.baseurl }}/images/PhaseError_Flat.jpg">

<sub>上图呈现明显的非自然绿色调。调整后（下图），肤色更为自然。</sub>

<img src="{{ site.baseurl }}/images/PhaseErrorCorrected_Flat.jpg">

<iframe src="https://archive.org/embed/pal-phase-error" width="640" height="480" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
<sub>该 PAL 相位误差由未知原因引发。示例由 Shai Drori 提供。</sub>

## 参考资料

<sup id="fn1">1. Tektronix NTSC 视频测量：[矢量示波器技术](http://www.tek.com/Measurement/App_Notes/NTSC_Video_Msmt/)。 <a href="#ref1" title="Jump back to footnote 1 in the text.">↩</a></sup>

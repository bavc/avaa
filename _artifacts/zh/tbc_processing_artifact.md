---
layout: post
title: 时基校正器处理瑕疵（TBC Processing Artifact）
categories: video analog
tags: [Analog, Video, Time Base Corrector, Processing Artifact]
lang: 中文
---

由内置或独立[时基校正器](http://en.wikipedia.org/wiki/Time_base_correction)（TBC）的调整不当或电路故障所产生的瑕疵，可归类为"处理瑕疵"。根据所使用 TBC 类型的不同，此类瑕疵表现形式多样，包括过度增强和激进的降噪处理。若因严重介质损伤导致的低射频信号、磁头堵塞或其他突发事件造成输入 TBC 的视频信号突然中断，TBC 在尝试重新锁定输入视频信号的过程中可能输出噪波。

在下方示例1中，TBC 因过度校正而引入了误差。左图为经正常工作的 TBC 处理的正确图像，右图则显示了 TBC 对图像顶部原本微弱偏斜的过度校正，以及由此在底部出现的行误差。回放该磁带时，画面呈现出在信号送入 TBC 之前原本不存在的纵向抖动。

示例2展示了在1英寸格式磁带回放过程中，因 TBC 连接故障引入的误差。该误差表现为一种在画面上下移动的水平波浪图案，始终出现在画面顶部或底部区域，但高度和深度不断变化。这种误差曾见于1英寸和2英寸开盘格式的 TBC 连接故障中，本例中该误差贯穿整个节目采集时长。

## 是否可以修复？

此瑕疵可通过对 TBC 进行重新调整或校准来修复。若因录像机回放信号质量过差导致 TBC 无法处理视频输出，则必须对介质进行处理以改善回放效果，或改用其他性能更强的 TBC。

## 示例1

<iframe src="https://archive.org/embed/tbc_processing_artifact" width="560" height="315" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>

<img src="{{ site.baseurl }}/images/TBCerror_compare_02.jpg">

## 示例2

<iframe src="https://archive.org/embed/extract_201906" width="640" height="480" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
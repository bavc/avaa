---
layout: post
title: 视频电平过高
categories: video analog
tags: [Analog, Video, Operator Error, Tape Error, Time Base Corrector, Levels Too Hot, Clipping]
lang: 中文
---

在录制视频信号时，峰值白电平通常可以在摄像机、播放磁带录像机或多个中间处理放大器中进行调整。在某些情况下，视频电平的自然尖峰可能因校准失误而被过驱，并在视频信号顶部发生截幅。特别明亮的场景在原始摄像机素材中可能会出现高于 100 [IRE](http://en.wikipedia.org/wiki/IRE_(unit)) 的自然峰值，但若截幅的视频信号超出该范围，则可能意味着数字化过程中视频图像细节正在丢失。过高的视频电平还可能将原始源中没有的噪声引入图像。

## 是否可以修复？

可以，通过重新转录并使用处理放大器调整磁带录像机输出来校正视频电平。理想情况下，视频的自然峰值应在 100 到 110 IRE 之间，具体取决于源素材类型（即原始摄像机素材、未播出录像或经色彩校正的广播播出母带）。

## 示例

<iframe src="https://archive.org/embed/AVAAEIAJClippedLuma" width="560" height="315" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
<sub>半英寸开盘视频录像中的视频电平过高。</sub>

<img src="{{ site.baseurl }}/images/VideoIsHigh_Waveform_flat_v1.jpg"/>  
<sub>此波形图显示严重截幅</sub>

<img src="{{ site.baseurl }}/images/VideoIsHigh_WaveformFixed_flat_v1.jpg"/>  
<sub>此波形图显示已校正的电平</sub>

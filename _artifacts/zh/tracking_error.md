---
layout: post
title: 循迹误差（Tracking Error）
categories: video analog
namevar: [Mistracking]
tags: [Analog, Video, Tracking Error, Common Artifacts]
formats: [Betamax, VHS]
lang: 中文
---

循迹误差表现为回放时产生的画面失真，原因是视频磁头无法正确跟随磁带上已录制的视频磁迹。循迹控制调节器可纠正该误差：它在回放过程中对控制磁迹信号进行延迟，使其位置与录制时所用控制磁迹磁头的位置相匹配。

## 是否可以修复？

是的，循迹误差可通过仔细调整循迹控制器来修正。

对于特定介质上的严重循迹问题，可能需要进行磁带走带路径的定制对准调整。

译注:与处置二面角误差类似。此种方法是将正确校准的设备故意调整至失准状态以匹配本已失准的原始录制。

## 示例

<iframe src="https://archive.org/embed/tracking_201702" width="560" height="315" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>

## 质量控制工具

视频文件中的严重循迹误差，将在时域异常值（TOUT）图表中表现为显著的尖峰。示例如下。

<img src="{{ site.baseurl }}/images/Tracking_error_qct2.png">

<img src="{{ site.baseurl }}/images/Trackingerror_qct.png">

---
layout: post
title: 音频刮擦抖动
categories: audio analog
tags: [Analog, Audio, flutter, sticky, deterioration, lubrication]
lang: 中文
---

## 背景

刮擦抖动是一种由模拟磁带介质物理问题引发的音频瑕疵。

## 成因

刮擦抖动由磁带走带机构与磁带之间的过度摩擦引起。这种摩擦可能出现在磁带与录音机接触的任何位置：动态或静态导轴、磁头，或沿磁带路径的多个位置同时发生。

摩擦导致磁带经过磁头时的速度短暂降低，此时平行于磁带走带方向的张力增大，直到张力克服摩擦产生的惯性，磁带突然以高于正常播放的速度向前运动。这种速度变化发生在微秒级别，反映在输出信号中即为抖动。

## 识别

刮擦抖动在音频上听起来有点类似劣质 MP3 压缩噪声，表现为音频中高音范围内旋转的"嗖嗖"声。该瑕疵可在音频信号中识别，有时还伴随直接来自磁带机构的高频摩擦声，这种摩擦声不一定会出现在音频信号中。

## 是否可以修复？

是否可以缓解取决于磁带的物理状况。若刮擦是由粘带综合征或黏结剂软化引起的，烘烤处理可能有所改善。

若问题源于磁带润滑层的丧失或失效，烘烤则无济于事。此时，许多专业人员会使用专门配制的润滑油，涂抹在磁带通过导带轮或磁头的路径上。

## 示例

<iframe src="https://archive.org/embed/avaascrapeflutter" width="500" height="140" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>

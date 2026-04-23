---
layout: post
title: 视频信号失落（Video Dropout）
categories: video analog
tags: [Analog, Video, Dropout, Common Artifacts]
lang: 中文
---

<img src="{{ site.baseurl }}/images/708px-DropoutDrawing.png">

<sub>视频信号失落在画面中表现为白色和/或黑色的信息缺失条纹。</sub>

信号失落是一种短暂的射频（RF）信号损失，由介质缺陷引起，例如：介质表面划痕、磁粉松脱或其他环境污染物卡入视频磁头，或任何其他导致信号损失的事件。视频信号失落在画面中表现为白色和/或黑色的信息缺失条纹，此外，当录像机行延迟电路的信号丢失补偿功能介入时，也可能察觉到信号失落。存在严重磨损、遭受环境损害或其他物理损伤的磁带，可以预期出现中度至重度的逐行信号失落。

## 是否可以修复？

若介质被划伤导致磁性涂层缺失，则无法补回，信号失落便是永久性的。

信号失落也可能已被录入原始内容。可通过在慢速回放模式下逐帧检视磁带来加以确认。下列连续帧展示了一个已录入信号失落的示例。环境灰尘或磁粉松脱可通过机器或手工清洁来去除。清洁时，同步更换和/或清洁磁带盒壳是明智之举。

## 示例

<img src="{{ site.baseurl }}/images/Stepthroughprinteddropout250.gif">

<sub>通过"逐帧检视"磁带内容来识别已录入视频信号失落的示例</sub>

## 使用 QCTools 识别信号失落

<img src="{{ site.baseurl }}/images/TOUTgraph.jpg">
<sub>使用 QCTools 的 TOUT 图表分析视频信号失落</sub>

<img src="{{ site.baseurl }}/images/3M_DebrisPerspectiveon1InchTapeTruncated.jpg">
<sub>3M 关于1英寸磁带上碎屑问题的视角，1970年代初</sub>

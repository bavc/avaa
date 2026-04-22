---
layout: post
title: 交流拍频干扰（AC Beat）
namevar: [视频哼声, 交流电干扰]
categories: video analog
tags: [Analog, Audio, Video, Electrical, Cable, Device Error, Common Artifacts]
lang: 中文
---

接地环路（Ground Loop）是由存在多条接地路径所引起的。当信号通过非平衡连接从一个电子元件传输到另一个时，接地电位的差异会导致一股杂散电流流过线缆。这一电流可在视频或音频信号中造成失真。地线环路干扰的一种典型表现形式称为 **AC Beat**（交流拍频干扰），具体表现为一条乳白色的亮度条带从画面底部缓慢向顶部滚动。接地环路在音频信号中则表现为可闻的 60 Hz 低频嗡鸣声（在50 Hz电网地区为50 Hz）。

## 能否修复？

若接地环路问题已被录制入视频或音频信号，则**只能通过在排除系统电气异常后重新转录内容**来加以修正，无法在后期进行信号层面的还原。通常的解决方法是让视频系统中的所有设备共用单一电源供电，并确保所有插座的接地电位差异尽量小。

因此，本瑕疵**可修复**（条件：重新转录；若原始录制时已存在该问题，则属于**不可修复**的历史遗留瑕疵）。

## 示例

<img src="{{ site.baseurl }}/images/EGLI_AC_Beat_Flat.jpg" height="450" width="500"><br>
<sub>注意由接地环路引起的横向亮带从画面底部向上滚动。</sub>

<iframe src="https://ia601504.us.archive.org/19/items/ElectricalgroundLoopInterference/ElectronicInterference.mp4" width="560" height="315" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
<sub>一例接地环路问题被录制入1/2英寸开盘磁带的案例视频</sub>

---
layout: post
title: 磁头堵塞条带
categories: video digital
tags: [Digital, Video, Head Clog, Banding, DV]
formats: [DV]
lang: 中文
---

MiniDV 和 DVCAM 使用两个视频磁头（每个磁头负责五条），每帧录制十条视频带。若污物堵塞其中一个磁头，信号便无法从磁带上完整读取。磁头堵塞通常表现为宽幅交替出现的冻结视频行，或表明磁头读写能力丧失的交替色彩图案。两个磁头同时堵塞则导致画面完全丢失，或冻结在最后一帧可解码画面。若磁头受损，这种条带效应可能在故障设备所有录制和回放功能中持续出现。

![DV 磁头堵塞示例](/images/headclog.gif)<br>
<sub>典型磁头堵塞</sub><br>

## 是否可以修复？

清洁用于转录磁带的设备（卡座、摄像机或播放机）可有助于减少或消除该瑕疵。可对磁带进行清洁，去除介质上积聚的灰尘或污物。若介质长期未使用，重新卷绕磁带也可能有所帮助。若以上方法无效，磁头可能已损坏，或瑕疵已录制在磁带上（录制时使用的摄像机或卡座已受损或存在磁头堵塞，导致无法正确覆盖之前录制的内容）。

译注：在判断此类情况时应当首先注意瑕疵是否在特定时刻一定出现或消失，若有，则意味着可能原始磁带或录制受损。

![DV 磁头堵塞条带清洁前后对比](/images/DV_head-clog-banding_before-after-cleeaning.png)<br>
<sub>示例 1：清洁前后磁头堵塞对比</sub><br>

![DV 磁头堵塞条带清洁前后对比](/images/DV_head-clog-banding_before-after-cleeaning-2.png)<br>
<sub>示例 2：清洁前后磁头堵塞对比</sub><br>

## 质量控制工具

使用 DVRescue 的分析标签页，可以检查是否存在表明采集时发生磁头堵塞（而非录制在磁带上）的错误。若设备磁头堵塞，dvanalysis 会标注错误；在查看图表和数据表时，磁头堵塞条带通常导致 50% 的视频错误率（因为其中一个磁头持续堵塞）。

![DVRescue 中的磁头堵塞示例](/images/DV_head-clog-banding_DVRescue_head-clog.png)<br>
<sub>磁头堵塞示例</sub><br>

![DVRescue 中已解决的磁头堵塞](/images/DV_head-clog-banding_DVRescue_resolved.png)<br>
<sub>已解决的磁头堵塞</sub><br>

## 示例

<iframe src="https://archive.org/embed/AVAADVHeadclog1" width="560" height="315" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe><br>
<sub>上方片段中问题较难察觉，下方片段则更为明显。</sub><br>

<iframe src="https://archive.org/embed/AVAADVHeadclog2" width="560" height="315" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe><br>

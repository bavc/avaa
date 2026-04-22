---
layout: post
title: 电平钳位（Level Clamping）
categories: video analog
namevar: [clipping, legalizing]
tags: [Video, Transfer Artifact, Station Qualification, Digitization, Levels, Waveform]
lang: 中文
---

**电平钳位**是指视频波形电平在顶部或底部被截断的现象。

**电平合法化**专指将电平压缩至广播允许范围内的操作，广播范围定义如下：

* 以 IRE 为单位
  - 黑色电平 @ 0 IRE
  - 白色电平 @ 100 IRE
* 以 8-bit 数字值为单位
  - 黑色电平 @ 16
  - 白色电平 @ 235
* 以 10-bit 数字值为单位
  - 黑色电平 @ 64
  - 白色电平 @ 940

电平钳位在保存工作流程中是非常严重的问题。保存性转录的目标是尽可能捕获所有信息。钳位操作可能截断极亮或极暗的内容。尽管理论上可以通过处理放大器提升黑色电平、降低白色电平来将所有视频信号保持在未钳位范围内，但这意味着电平将与彩条或调试图案中的参考值不符。

## 是否可以修复？

一旦视频信号在信号链中被钳位或合法化，丢失的信息便无法恢复。因此，必须在数字化之前确认信号链中无任何设备对信号进行合法化处理，这一点至关重要。

## 关于数字化工作站资质认证的说明

如上所述，因钳位或合法化而丢失的任何信息都无法恢复。因此，在视频数字化工作站资质认证阶段应专门对此项进行检查。应确认所使用的信号链及所有视频设备（TBC、帧同步器、切换器、数字接口、数字化卡等）均不会对视频信号进行钳位或合法化。可使用 QCTools 查看波形图，直观验证这一点。以下为清晰示例。

## 示例

以下为 SMPTE 彩条的正常波形。注意波形信号超出 100 IRE 上端和 0 IRE 底端。

<img src="{{ site.baseurl }}/images/levelclamping_notclamped.jpg">

以下为 SMPTE 彩条被钳位至广播范围后的波形。注意波形顶部和底部已被截断。

<img src="{{ site.baseurl }}/images/levelclamping_clamped.jpg">

## 已知存在问题的设备

以下设备已知会对视频信号进行钳位处理：

* Blackmagic Design Mini Converter Analog to SDI
* Blackmagic Decklink 4K Extreme（固件从 10.8.1 升级至 10.8.2 后）

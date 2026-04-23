---
layout: post
title: 时基误差（Time Base Error）
categories: video analog
tags: [Analog, Video, Time Base Corrector, Common Artifacts]
lang: 中文
---

视频信号依赖于在所有广播、回放和录制环境中对信息时序的精密同步。因此，这一时序的微小变化会影响视频信号的稳定性，导致所谓的"时基误差"。时基误差的表现形式包括：画面顶部的"旗形波动"（flagging）、画面底部的"斜切"（skewing），以及在整个画面区域中交错出现的水平"撕裂"（tearing）。

时基误差的产生原因包括：磁带张力的突然变化、磁带传送系统（capstan）转动不均，以及磁带走行过程中速度的波动。磁带本身的老化或损伤也会导致时基误差。被拉伸或以其他方式受损的磁带，可能会出现纵向误差（常见于使用磁带清洁机的环境）和横向误差，即磁带宽度的不一致。

## 是否可以修复？

时基校正器（TBC）通过存储视频行并以匹配信号"正确"水平同步的速率恢复它们，来抵消时基误差。在回放过程中，也可用斜切控制调整录像机的磁带张力来纠正时基误差。维护不当的录像机，如存在磁带速度波动、磁头速度不稳定和磁带传送系统转动不均等问题，均会加重时基误差。

## 示例

<img src="{{ site.baseurl }}/images/FlagwavingSkewErrorTearing.png">

<sub>由时基误差引起的三种状态：旗形波动、斜切与撕裂。资料来源：Global Village 宣传页，约1980年。</sub>

## 另请参阅

Johannes Gfeller、Agathe Jarczyk、Joanna Phillips，《模拟视频影像错误大全》（瑞士艺术研究所编，苏黎世：Scheidegger & Spiess，2012年），第60页，视频9及10中的"磁带纵向膨胀或收缩"条目。

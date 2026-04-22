---
layout: post
title: 音频相位错误
categories: audio analog
tags: [Analog, Audio, Phase, Mono, Stereo]
lang: 中文
---

音频相位问题会引发多种不同的症状，是音频工程核心议题之一。相位错误是指录音中某些频率被部分或完全抵消的现象。当使用一个以上的声道录制单一音源时，相位问题就会出现。这类错误往往只有在将录音切换为单声道时才会显现，因此相位错误难以被及时发现。

### 背景知识

声音中相位的概念，最简单的解释方式是比较两个正弦波。当两者周期匹配时，称为"同相"，此时声音质量最佳。若其中一个被反相，使一个正弦波的波峰与另一个的波谷在同一时刻出现，两者将相互抵消，完全听不到声音。若周期略有偏差，则会产生部分抵消，使某些频率消失。

### 成因

相位错误可能源于录音时话筒摆位不当导致的时间差，也可能由做工粗劣的线缆、播放时重放磁头对准失调、拾音针/唱头对准不良等原因引起。在两只靠得较近的扬声器上聆听时，相位抵消在低频段最为明显，表现为声音单薄、低音匮乏或根本没有。<sup><a href="#fn1" id="ref1">1</a></sup>

### 识别方法

相位示波器（Phasescope）是音频信号的图形化表示工具，大多数音频编辑软件均内置此功能。在相位示波器上，完全同相的信号显示为完全垂直的纤细线条；完全反相的信号则显示为完全水平的细线。大多数存在相位问题的信号介于两者之间，形状类似橄榄球。

如图所示，大多数相位示波器底部设有相关仪表（Correlation Meter）。在相关仪表上，反相信号将在 -1 到 0 之间振荡；同相信号则在 0 到 +1 之间，其中 0 表示完全立体声，+1 表示完全单声道。

## 是否可以修复？

是否可修复取决于问题产生的方式和时间。理论上可以将其中一路信号微调直到与另一路对齐，但此过程极为繁琐，几乎无法调整到位，且可能无法恢复录音的正确音质（例如，使用错误方位角设置进行模拟磁带转数字时，数字处理后很难完全修正）。

如果您认为存在相位问题，最好咨询有资质的工程师或技术人员。目前至少有两家公司提供相位修正后期处理插件：[Cedar Audio 的 Phase Corrector 插件](https://www.cedar-audio.com/products/cambridge/camphase.shtml) 和 [Cube-Tec 的方位角插件](https://www.cube-tec.com/en-uk/products/workflow/dobbin/software-architecture/fpus/restoration)。

## 示例

<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/105266360&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
<sub>在 SoundCloud 上收听一段相位反相的立体声文件</sub>

<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/105265611&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
<sub>在 SoundCloud 上收听同一立体声文件混合为单声道后的效果</sub>

<img src="{{ site.baseurl }}/images/Audio_phase_error.png">
<sub>图为带有底部相关仪表的相位示波器。水平波形是存在相位问题的标志。</sub>

## 参考资料

<sup id="fn1">1. Daniel Keller, [Understanding Audio Phase](http://www.uaudio.com/blog/understanding-audio-phase/), Universal Audio (uaudio.com), 21 June 2011. <a href="#ref1" title="Jump back to footnote 1 in the text.">↩</a></sup>

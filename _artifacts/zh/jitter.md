---
layout: post
title: 音频抖动（Audio Jitter）
categories: audio
tags: [Analog, Error, Noise, Clicks, Digital, Audio, Common Artifacts]
lang: 中文
---

抖动是数字音频比特流中丢失单个采样或采样块的现象。该瑕疵发生在采集过程中，可由多种原因引起，包括：集成系统中的同步丢失、音频字时钟错误、音频接口缓冲区错误，或 A/D 硬件故障等。数字时钟抖动是所有数字设备固有的现象，会导致失真水平变高并造成音质劣化。<sup><a href="#fn1" id="ref1">1</a></sup> 在数字化文件中，抖动表现为音频中振幅陡然上升的咔哒声。

## 是否可以修复？

不可修复。若在保存母版文件中检测到该瑕疵，必须重新数字化源材料。请检查系统设置；若设置正确仍出现问题，请联系数字化设备或 A/D 转换器的原厂，以及系统集成商寻求解决方案。某些情况下，对工作站进行完全断电重启可能解决此问题。

增益结构控制、相位控制与抖动控制，并称专业录音的三大核心要素。

译注：抖动为jitter，为数字音频专有的现象，不应与模拟介质的“抖晃”（wow and flutter）混淆。

## 示例

<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/96931183&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe><sub>在 SoundCloud 上收听音频抖动示例</sub>

## 参考资料

<sup id="fn1">1. Ken C. Pohlmann，《[用于长期音频录音保存的模数转换器测量与评估](https://www.clir.org/pubs/resources/ad-converters-pohlmann.pdf)》，收录于《数字音频保存规划与管理中的若干问题》（华盛顿特区：国会图书馆与图书馆和信息资源委员会，2006年）。 <a href="#ref1" title="Jump back to footnote 1 in the text.">↩</a></sup>

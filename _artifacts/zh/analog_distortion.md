---
layout: post
title: 模拟失真
categories: audio analog
namevar: [过载失真, 谐波失真, 瞬态失真, 非线性失真, 互调失真]
tags: [Analog, Audio, Operator Error, Levels Too Hot, Noise, Clipping]
lang: 中文
---

在音频领域，失真是指不期望出现的信号变化。这是一个涵盖范围较广的术语，例如[抖晃失真]({{ site.baseurl }}/artifacts/wow_and_flutter.html)从定义上讲就是对原始信号的一种变化。<sup><a href="#fn1" id="ref1">1</a></sup> 模拟失真是录制于模拟载体或在模拟信号链中引入的瑕疵，而数字失真则发生在数字化过程及模数转换之后。

在本指南中，模拟失真特指录音电平过高（"热电平"）所导致的问题。所谓"热电平"，是指输入信号电平超过录音设备的线性范围，也称为"过载"。整段录音音量过高，因此所有失真噪声同样很响。遗憾的是，大多数具有唯一性的珍贵录音往往由非专业人员完成，难免出现此类难以修复的低级错误。

## 是否可以修复？

当失真存在于源录音中时，数字化过程中几乎无法对其进行修正。在后期制作阶段，以下几款工具在频谱修复和过载修复方面表现出色：

1. [iZotope RX 套件](http://www.izotope.com/products/audio/rx/)
2. [DeNoiseLF](http://www.clickrepair.net/software_info/denoise.html)
3. [Adobe Audition](https://www.youtube.com/watch?feature=player_embedded&v=gZjlS0tD-Wg)

去除失真噪声的尝试可能会对声音的泛音造成不良影响，从而改变所录人声或音效的质感。去除失真是一种平衡——既要滤除不需要的频率，又要保留构成声音泛音的各分量频率不受影响。在为制作母带或存取副本清理录音时，请务必牢记这一点。

## 示例

<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/96774470&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe><sub>在 SoundCloud 上收听模拟失真示例。</sub>

## 参考资料

<sup id="fn1">1. Glenn D. White and Gary J. Louie, _The audio dictionary_ (3rd ed.), (Seattle: University of Washington Press, 2005), 114-115. <a href="#ref1" title="Jump back to footnote 1 in the text.">↩</a></sup>

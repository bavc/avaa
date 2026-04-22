---
layout: post
title: 数字削波
namevar: [Digital distortion]
categories: analog audio digital
tags: [Digital, Audio, Noise, Overs, Common Artifacts]
lang: 中文
---

当数字信号超过 0 dBFS（即模数转换器所能转换的最高电压电平）时，采样数据将会丢失。<sup><a href="#fn1" id="ref1">1</a></sup> 与模拟失真不同——模拟系统中热电平可产生饱和效果——数字削波则极为严格。严重的过载会产生类似噪声的声音。然而，在数字系统中，任何过载均构成失真，无论是否可被听到。<sup><a href="#fn2" id="ref2">2</a></sup> 即使是细微的过载，也可以通过放大音频波形并查看波峰来发现。若波峰顶部呈截断或削平状，则说明发生了削波。

## 是否可以修复？

若在保存版母带文件中听到或看到数字削波，则必须重新数字化源材料。若是由咳嗽或拍击桌面等瞬态声音导致的个别一两处过载，且整体转录电平合理，则可视为可接受的电平。

来自数字源的过载可使用插件（如 Izotope 的 Declipper）在制作母带文件上进行修复。<sup><a href="#fn3" id="ref3">3</a></sup> 从模拟源生成的保存版母带文件，若在数字化前未正确调整电平，则会出现数字过载。此类源材料应以较低电平重新数字化。任何持续显示过载（即信号不断打到 0 dB 数字零点）的数字录音，从定义上讲电平过高。

## 示例

<img src="{{ site.baseurl }}/images/Levels_Too_Hot.png">
<sub>以不当电平转录的模拟录音示例</sub>

<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/96928624&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
<sub>在 Soundcloud 上收听数字削波示例</sub>

## 参考资料

<sup id="fn1">1. [Rane Pro Audio Reference](http://web.archive.org/web/20150319045001/http://www.rane.com/par-d.html#decibel). <a href="#ref1" title="Jump back to footnote 1 in the text.">↩</a></sup>  
<sup id="fn2">2. Glenn D. White and Gary J. Louie, _The audio dictionary_ (3rd ed.), (Seattle: University of Washington Press, 2005), 275. <a href="#ref2" title="Jump back to footnote 2 in the text.">↩</a></sup>  
<sup id="fn3">3. [Izotope Declipper: getting started](http://help.izotope.com/docs/rx1/pages/declipper_getting_started.htm). <a href="#ref3" title="Jump back to footnote 3 in the text.">↩</a></sup>

---
layout: post
title: 间隙误差（Interstitial Error，暂译）
categories: video digital
tags: [Audio, Digital, System Failure, Dropout, Digital Clicks]
lang: 中文
---

<img src="{{ site.baseurl }}/images/Interstitial_Error.jpg">

间隙误差由 AudioVisual Preservation Solutions (AVPS) 命名，是数字化过程中数据流写入磁盘时发生的系统"卡顿"现象。<sup><a href="#fn1" id="ref1">1</a></sup> 该误差导致采样丢失，在波形中表现为陡直的骤降。其可听度因情况而异，严重时听起来如同信号失落（Dropout）。

## 是否可以修复？

目前，Wavelab 的错误检测分析工具是检测此类误差的最佳方法，但误报率较高。AVPS 正在积极研究替代检测方法。

* 根据 AVPS 的研究报告，此类误差可能出现在任何类型的系统中。
* 假设问题已被定位并加以消除，任何含有可闻间隙误差的重新格式化文件，都应尽可能重新数字化。

译注：除了最常见磁盘IO性能外，计算机在采集过程中其他进程导致突发性的系统资源高占用也可能导致此问题。

## 示例

<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/96928848&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe><sub>在 SoundCloud 上收听间隙误差示例</sub>

## 延伸阅读

* Chris Lacinak，[_数字音频间隙误差：提升认知与开发新检测方法_](http://www.avpreserve.com/wp-content/uploads/2010/01/Digital_Audio_Interstitial_Errors.pdf)，AVPreserve 白皮书，2010年1月6日。

## 参考资料

<sup id="fn1">1. Joshua Ranger，[数字音频间隙误差](http://www.avpreserve.com/blog/digital-audio-interstitial-errors/)，AVPreserve，2010年。 <a href="#ref1" title="Jump back to footnote 1 in the text.">↩</a></sup>

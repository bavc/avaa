---
layout: post
title: 交流声与嗡嗡声（Hum and Buzz）
categories: video audio analog digital
tags: [Analog, Digital, Audio, Video, Balanced Cables, Power Supply, Cable, Common Artifacts]
lang: 中文
---

交流声是一种会渗入任何音视频系统的噪声，可能源自多种途径，包括电力线、电源、电视干扰等。交流声和嗡嗡声都具有可辨别的音调，这与[模拟噪声]({{ site.baseurl }}/artifacts/analog_noise.html)不同——模拟噪声没有可辨别的音调。<sup><a href="#fn1" id="ref1">1</a></sup>

#### 电力线

* 在输电过程中，电力线以 60 Hz 辐射电磁波。若使用屏蔽不良的非平衡线缆，尤其是靠近电力线的线缆，可能将这一频率带入信号链。世界大部分地区使用 50 Hz 交流电，也会引入该频率的干扰。

#### 电源

* 电源同样会辐射 60 Hz 磁场，当电源靠近换能器（如磁带磁头或唱头）时会产生感应问题。电源使用滤波过程将 60 Hz 市电转换为设备所需的直流电。当电源出现故障时，转换过程中的任何纹波都会以 60 Hz 的谐波（120 Hz、180 Hz 等）形式听到，因此至少会高出电力线交流声一个八度。<sup><a href="#fn2" id="ref2">2</a></sup> 对于使用 50 Hz 电源的欧洲及世界其他地区，谐波将在 100 Hz、150 Hz 等频率处听到。<sup><a href="#fn3" id="ref3">3</a></sup>

#### 电视干扰（TVI）

* 表现为嗡嗡声而非平滑的交流声，电视干扰在线缆移动时发生。

## 是否可以修复？

若交流声或嗡嗡声存在于源录音中，数字化时不应进行任何处理。后期制作中，有针对性地使用均衡器——尤其是设置在交流声谐波（120 Hz、180 Hz 等）处的陷波滤波器——可有效去除服务副本中的交流声干扰。

若交流声或嗡嗡声来自数字化链路，则需隔离来源。确保线缆为平衡方式且屏蔽良好，线缆走线尽量短。屏蔽是指保护设备之间或线缆内部的磁性电流免受杂散磁场或静电场影响。<sup><a href="#fn4" id="ref4">4</a></sup>

后期制作中，以下工具也可用于去除交流声和嗡嗡声：

1. [DeNoiseLF](http://www.clickrepair.net/noise/software_low_frequency.html)
2. [Izotope RX2](http://www.youtube.com/watch?v=mKCRUM9pYB8)

## 示例

<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/96922069&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe><sub>在 SoundCloud 上收听电源交流声</sub>

<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/99246750&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe><sub>在 SoundCloud 上收听嗡嗡声</sub>

## 参考资料

<sup id="fn1">1. Glenn D. White, _The audio dictionary_ (1st ed.), (Seattle: University of Washington Press, 1987), 116. <a href="#ref1" title="Jump back to footnote 1 in the text.">↩</a></sup>   
<sup id="fn2">2. Glenn D. White and Gary J. Louie, _The audio dictionary_ (3rd ed.), (Seattle: University of Washington Press, 2005), 189. <a href="#ref2" title="Jump back to footnote 2 in the text.">↩</a></sup>    
<sup id="fn3">3. [RANE Pro Audio Reference](http://web.archive.org/web/20160617022233/http://www.rane.com/digi-dic.html). <a href="#ref3" title="Jump back to footnote 3 in the text.">↩</a></sup>  
<sup id="fn4">4. Glenn D. White, _The audio dictionary_ (1st ed.), (Seattle: University of Washington Press, 1987), 209. <a href="#ref4" title="Jump back to footnote 4 in the text.">↩</a></sup>

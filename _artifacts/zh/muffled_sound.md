---
layout: post
title: 声音沉闷（Muffled Sound）
categories: audio analog
namevar: [Azimuth Error]
tags: [Audio, Analog, Azimuth, Error, Frequency Loss, Playback Adjustment, Media Failure, Media Damage, Oxide Out, Common Artifacts]
lang: 中文
---

回放时声音沉闷，通常是由于介质失效、卷向错误或源录音本身高频信息不足导致高频损失的症状。除非源录音质量低劣或源录音设备存在故障，否则沉闷音瑕疵通常是由于回放设置不当造成的。例如，若在数字化前未针对源材料进行方位角调整，高频将会损失，最终文件听起来就会显得沉闷。

即便方位角设置正确，若磁带开始在回放磁头上脱落氧化物，同样会导致录音沉闷——因为氧化物堆积增大了磁带与回放磁头之间的物理距离。

若磁带以氧化面背向磁头的方式播放，可立即识别：方位角调整不起作用，节目听起来极度沉闷，且磁道配置听起来不正常（例如半轨单声道磁带，左声道听到的是反向内容而非正确的右声道内容）。部分德国磁带采用 B-wind 卷向，氧化面背向卷芯；<sup><a href="#fn1" id="ref1">1</a></sup> 所有盒式磁带均为 B-wind，但这对盒式磁带而言属正常配置——因为盒式磁带回放磁头朝上，而开盘机磁头朝下。盒式磁带以氧化面朝内（背向回放磁头）错误卷绕的情况极为罕见，但偶有发生。

## 是否可以修复？

若原始录音因麦克风摆位不当、室内声学或其他原因本身就已沉闷，数字化阶段通常难有作为。但为了确认问题并非来自硬件或介质，需进行以下操作：

* 调整播放机上的方位角，使其与源材料匹配
* 在数字化前，通过清洁或烘烤（如适用）对退化介质进行预处理
* 确认磁带回放时氧化面朝向回放磁头

进行方位角调整时，音频矢量示波器是不可缺少的工具。Hess 的博客提供了实用的操作指南。

<blockquote>调整方位角与手动对焦摄像机镜头非常相似。你在最佳方位角附近来回摇动，观察两侧偏离程度，然后手动找到两个「同样差」位置的中间点。目标是将高频调至最大强度。不必担心磁带听起来尖锐刺耳——你所做的只是忠实地捕捉磁带上的声音。不存在哪个方位角设置能让磁带比原始录音更明亮。除了正确的方位角以外，任何偏差都会让磁带听起来比原始录音更沉闷。理想方位角的范围极窄。通常，在方位角调节螺丝的 ±5 度范围内即可找到最佳效果。操作时务必聆听高频部分：如果镲声消失了，就退回到有镲声的位置；如果录音中没有镲，则聆听任何高频成分；若扬声器音质不佳，请使用耳机监听。记得以单声道方式收听立体声节目。<sup><a href="#fn2" id="ref2">2</a></sup></blockquote>

在矢量示波器上，单声道信号的李沙育图应接近竖直。调整时，注意观察示波器图形随每次旋动调节螺丝/旋钮时的展宽与收窄变化，但最重要的还是用耳朵聆听高频的变化。

## 参考资料

<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/97290888&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe><sub>Listen to muffled sound as a result of incorrect azimuth alignment on SoundCloud</sub>

<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/97291151&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe><sub>Listen to muffled sound as a result of a tape being played oxide out on SoundCloud</sub>

<img src="{{ site.baseurl }}/images/Shedding_Oxide-Cassette_Head.jpg">

<img src="{{ site.baseurl }}/images/Fc922zv0190_04_a-oxide_out-waveform.png">

<sub>Oxide accumulation on a cassette playback head following the transfer of one side of a cassette (top image). Waveform of a half track mono open reel tape played oxide out (bottom image).</sub>

## See also

* [Richard Hess' blog post on azimuth](http://richardhess.com/notes/2006/09/27/azimuth-hows-and-whys)
* [AVPS blog post on azimuth](http://www.avpreserve.com/uncategorized/azimuth-adjustment-for-magnetic-audio-recordings/)

## References

<sup id="fn1">1. Richard Hess, [Tape winding](http://richardhess.com/notes/formats/magnetic-media/magnetic-tapes/analog-audio/tape-winding), RichardHess.com, 19 March 2006. <a href="#ref1" title="Jump back to footnote 1 in the text.">↩</a></sup>   
<sup id="fn2">2. Richard Hess, [Azimuth Hows and Whys](http://richardhess.com/notes/2006/09/27/azimuth-hows-and-whys), RichardHess.com, 27 September 2006. <a href="#ref2" title="Jump back to footnote 2 in the text.">↩</a></sup>

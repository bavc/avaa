---
layout: post
title: 播放速度不正确（Incorrect Speed）
categories: video analog
tags: [Audio, Analog, Deck Failure, Operator Error, Pitch, Speed Fluctuation]
lang: 中文
---

本条目描述媒体播放过程中的速度渐变——可能源自源录音本身，也可能源自转录设备，或因转录工程师选择了错误的播放速度。两种情况下，录音的音调均会出现偏差（请勿与[抖晃失真]({{ site.baseurl }}/artifacts/wow_and_flutter.html)混淆）。

## 是否可以修复？

播放速度不正确是较容易纠正的问题。但若速度偏差是由于数字化过程中播放设备或唱机机械故障造成的，则应先对设备进行检修。

若是以错误速度完成了转录，请以正确速度重新转录。IASA-TC04 建议以原始速度进行转录，而非在数字域中进行速度纠正。<sup><a href="#fn1" id="ref1">1</a></sup>

## 开盘磁带的注意事项

您可能会遇到以某些速度录制的磁带，而您的播放设备无法以该速度播放（如 1⅞ ips 或 15/16 ips）。硬件限制可能要求您以高一挡位的速度进行转录，然后在后期制作中使用音频编辑软件的变调功能进行调整。进行变调处理可以同时改变速度，但进行变速处理并不影响音调。变高或变低一个八度，等效于速度加倍或减半。需要注意的是，开盘机在不同速度挡位下有不同的回放均衡曲线，因此这种方法的一个妥协是均衡将会不正确。

## 唱片回放的注意事项

评估唱片正确播放速度时需考虑诸多因素。首要难点在于判断演奏者（若为音乐录音）的演奏音高。虽然这超出了本条目的范围，但需了解的是：音乐音高在二十世纪中叶之前并未标准化，时至今日仍有许多乐团以高于或低于 A=440 Hz 的音高演奏。

78 转唱片时代末期才完成播放速度标准化，带来了许多挑战。机械录音时代的唱片可以自由地进行数字变速，而电子时代的录音若在变速后仍采用均衡处理，其拐点和滚降将会不正确。

若电子录音时代的唱片超出了唱机的可调范围，可以考虑以原始频率不加均衡地进行数字化，再变速，然后通过数模转换器输出至带有适当设置的唱片前置放大器，再次数字化。这一流程当然引入了更多信号链环节，也说明配备更灵活唱机的方案可能更为合理。


## 在一盘磁带上有两种录制速度时我应当如何处置?

1) 预览磁带，确定磁带起点的正确播放速度。

2) 若带速发生改变，辑录发生改变的时刻，但不要停止导出。

3) 采集完毕后，返回改变点，用正确速度仅导出此段。

制作多份保存母本是有益的。因为带速，声调，均衡等均为此带速下的原生参数，可以将这些分别采集的段落无缝拼接为一份用于访问的副本。



## Example(s)

<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/96922579&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe><sub>Listen to a tape played back at an incorrect speed on SoundCloud</sub>

<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/96922861&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe><sub>Listen to the first part of an audio cassette recording on SoundCloud where the speed is correct</sub>

<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/96923125&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe><sub>30 minutes into the recording from above, the speed has changed</sub>

## References

<sup id="fn1">1. Kevin Bradley (ed), [_Guidelines on the production and preservation of digital audio objects_](http://www.iasa-web.org/tc04/audio-preservation), IASA TC-04 (2nd ed., 2009), 57-59. <a href="#ref1" title="Jump back to footnote 1 in the text.">↩</a></sup>    

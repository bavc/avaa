---
layout: post
title: 磁头切换噪声
categories: video analog
tags: [Analog, Video, Noise, Device Error, Tape Error, Servo]
formats: [VHS]
lang: 中文
---

磁头切换噪声常见于 VHS 播放时的画面底部。虽然其他格式中也会出现，但通常因播放磁带录像机的处理特性和校准方式不同而被遮蔽。在磁带播放过程中，视频磁头经过介质时被激活，离开时被关闭，以防止磁头不与磁带接触时输出的噪声被显示出来。磁头切换噪声正是这一切换间隔的产物，发生在垂直同步开始之前。该瑕疵在广播监视器过扫描（overscan）模式下不可见，但在欠扫描（underscan）、全光栅数字化视频及未裁切的数字衍生文件中可见。部分磁带录像机具备"SWP 遮蔽"功能，可有效将磁头切换期间产生的行用视频黑遮蔽。

某些磁带的磁头切换噪声更为严重，错误线会上下跳动。在特别严重的情况下，错误甚至会进入字幕安全区，乃至影响整个画面。David Crosthwait 对此有如下说明：

>*磁带上不稳定的切换线记录方式，源于录制该磁带时伺服系统不稳定。将该磁带慢动作播放，可以看到切换线即使在慢动作下仍在浮动，这证实了磁头切换是以缺陷方式录制的。录制伺服不稳定可归因于机器问题伴随磁带问题，或摄像机输出的同步信号不稳定。在使用电池供电的设备上，也可能归因至电池电量不稳定。*

## 是否可以修复？

仅在特定情况下可以修复，且必须是磁头切换噪声未作为信号的一部分录制在磁带上。VHS 必须在切换点设置低于正常标准的盒式磁带放像机上播放。目前已知只有 3 款机型支持通过菜单设置此选项，均为大型"专业"系列 S-VHS 卡座，无法播放以 EP 或 LP 模式录制的磁带。它们分别是：JVC BR-S522、-S525、-S822。

JVC 的市场宣传如此描述该功能："为改善播放和特效画面性能，还提供了切换噪声遮蔽系统。对于经数字处理的特效画面尤为有效，该功能将切换点设置在正常切换点以下 1.5H，彻底消除画面上的切换噪声。"松下也为其少数几款专业机型宣传了"切换噪声遮蔽"功能，但实际上只是在画面底部添加了简单的黑色边框，如上所述。

即使使用上述某款盒式磁带放像机，遵循 SMPTE RP 202 视频对准标准的 480i 采集设备仍会在图像最底部显示杂波。要获得无切换噪声的 720×480 图像，需要使用从第 22 行开始采集的设备；或可使用采集 720×486 的设备，直接将有问题的图像行裁切掉。

## 示例

<iframe src="https://archive.org/embed/AVAAHeadSwitchNYU" width="560" height="315" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
<sub>此片段在画面底部有典型大小的磁头切换错误</sub>

<iframe src="https://archive.org/embed/test-clip-xcms-d-9lu-xni" width="560" height="315" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
<sub>此片段由于录制磁带录像机的伺服系统不良，出现了严重的磁头切换错误</sub>

<img src="{{ site.baseurl }}/images/HeadSwitch_Butterfly_SLV-779HF_Sharp1_XCard.jpg"><br>
<sub>普通 VHS 盒式磁带放像机输出至从第 23 行开始采集的采集卡，显示正常的切换噪声。</sub>

<img src="{{ site.baseurl }}/images/HeadSwitch_Butterfly_BR-S525U_VC500.jpg"><br>
<sub>JVC BR-S525U 输出至从第 22 行开始采集的采集卡，无切换噪声。（画面弯曲是因为该采集卡没有 TBC。）</sub>

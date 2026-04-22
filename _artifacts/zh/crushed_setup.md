---
layout: post
title: 黑电平压缩
namevar: [黑电平偏低]
categories: video analog
tags: [Analog, Video, Black Levels, Operator Error, Common Artifacts]
lang: 中文
---

视频信号的下限至关重要，因为当基准电平和中段[黑电平](http://en.wikipedia.org/wiki/Black_level)被压低时，暗部细节就会丢失。正如过亮的视频会导致视频信息缺失，模拟视频在重新格式化时若低于 7.5 [IRE](http://en.wikipedia.org/wiki/IRE_(unit)) 并在 0 IRE 处截幅，将导致图像偏暗并丢失细节。在已数字化的视频中发现此问题尤为令人沮丧，因为数字化后的后期调整几乎无法找回丢失的细节——必须重新格式化才能捕获完整的电平范围。

## 是否可以修复？

可以，通过重新转录并使用处理放大器调整录像机输出来修正基准电平（黑电平）。理想情况下，基准电平平均值不应低于 7.5 IRE，具体取决于源素材类型及录制设备的校准精度（即原始摄像机素材、录像或广播播出母带）。

译注：英文版的讨论仅限于美国NTSC的7.5 IRE标准，对于日本使用的NTSC-J标准而言，黑电平为0 IRE是正确的。若在数字化NTSC-J制式的节目时，将数字化设备的黑电平误设为7.5 IRE，会导致画面暗部偏亮、整体偏灰，对比度低。对于PAL及SECAM，不存在此问题。

## 示例

<img src="{{ site.baseurl }}/images/SetupIsCrushed_Flat.jpg"><br>
<sub>图示展示了正确调整基准电平后所呈现的暗部细节。</sub>

<img src="{{ site.baseurl }}/images/SetupIsCrushedCorrected_Flat.jpg">

<img src="{{ site.baseurl }}/images/Crushed_Setup_Waveform_Flat.jpg">

<sub>此示例中黑电平被严重截幅，导致前景物体看起来平淡，与背景的边缘对比度降低</sub>

<img src="{{ site.baseurl }}/images/Crushed_Setup_Waveform_Fixed_Flat.jpg">
<sub>此波形图显示了正确调整后的黑电平，视频图像中的树木与山丘细节得以呈现</sub>

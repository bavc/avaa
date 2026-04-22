---
layout: post
title: 点状爬行（Dot Crawl，暂译）
namevar: [Chroma crawl]
categories: video analog
tags: [Analog, Video, Dot Crawl]
lang: 中文
---

点状爬行是复合视频的一种瑕疵，由信号中亮度与色度信息的多路复用引起。基带 [NTSC](http://en.wikipedia.org/wiki/NTSC) 信号以不同频率承载这两种分量，但在一并显示时，色度信息可能被误读为亮度。结果是画面上出现一列移动的珠状小点。该瑕疵在高饱和度色彩物体之间的水平边界处最为明显。在迁移复合视频源时，使用梳状滤波器处理视频可减少点状爬行的干扰；使用 S-Video 或分量连接也可消除该瑕疵。但若点状爬行已出现在原始源素材的转录中，在后续复合视频转录中可能进一步叠加加重。

译注：尽管文章中只提及了NTSC，实际上PAL及SECAM制式也会受到此问题的影响。在彩条的绿色与洋红色接缝处最为常见。

## 是否可以修复？

可以。若播放磁带录像机提供 S-Video 或分量视频输出，可使用该输出消除点状爬行。若无此功能，许多时基校正器（TBC）内置梳状滤波器，启用后可能有助于减少点状爬行，但此方案在"纯粹主义者"中存在争议。

## 示例

<img src="{{ site.baseurl }}/images/DotCrawl_Flat.jpg">

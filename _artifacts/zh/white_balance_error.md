---
layout: post
title: 白平衡误差（White Balance Error）
categories: video analog digital
tags: [Video, Analog, Digital]
lang: 中文
---

色彩平衡是指视频信号中各原色分量的混合比例。摄像机通常配备相应的电路，允许摄像师为视频图像中"纯白色"的处理设置基准值。摄像师使用白卡，告知录制设备图像中白色应呈现的效果，从而在不同环境光线条件下保持一致的色彩平衡——因为色温会影响整个画面。

若摄像机白平衡在录制前未经调整，则可能产生色偏。这在气体放电灯源（如荧光管照明）下拍摄的素材中尤为明显，可能出现蓝色色偏。

## 是否可以修复？

可使用视频处理放大器、非线性编辑系统或功能更强大的数字视频工作站等工具来调整原色分量。矢量示波器有助于观察白平衡状态——调整正确的原始未处理视频素材，其色度信号应从中心轴射出，而非偏离中心轴。某些视频处理放大器提供简单的红色和蓝色增减控制，便于纠正白平衡误差。

## 示例

<img src="{{ site.baseurl }}/images/WhiteBalanceError_Flat.jpg">

<sub>上图因录制时白平衡设置不当，呈现明显的蓝色偏色。下图已消除该偏色。</sub>

<img src="{{ site.baseurl }}/images/WhiteBalanceCorrected_Flat.jpg">

---
layout: post
title: Sub-sampling artifact
categories: video digital
tags: [Digital, Video, DV25, Sub-sampling]
---

The DV25 codec samples four luminance values and only one from each color-difference component. It uses co-siting in a 4 pixel arrangement, which takes the color sample and first luminance sample from the same location, and repeats the same color value over the adjacent three pixels in the encoded image. This creates a Y/C delay that can appear as blockiness or lower resolution in scenes with high saturation, and particularly red saturation. [Adam Wilt, 1998.](http://www.adamwilt.com/)

## Can it be fixed?

No, sub-sampling artifacts cannot be remedied.


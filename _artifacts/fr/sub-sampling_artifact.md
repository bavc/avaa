---
layout: post
title: Sub-sampling artifact
categories: video digital
tags: [Digital, Video, DV25, Sub-sampling]
lang: Français
---

In the DV25 codec, for every four luminance samples, each color-difference component is sampled just once (a 4:1:1 chroma subsampling scheme). In a 4:1:1 scheme, the C<sub>b</sub> (blue-difference) signal is sampled at the same location as the first luma sample, and then that C<sub>b</sub> colour value is repeated three times (while the luma signal is sampled at each of those points). The C<sub>r</sub> (red colour-difference) signal is also sampled once and repeated three times.  

This co-siting creates a Y/C delay that can appear as blockiness or lower resolution in scenes with high saturation, and particularly red saturation.<sup><a href="#fn1" id="ref1">1</a></sup>

## Can it be fixed?

No, sub-sampling artifacts cannot be remedied.

## See also

Adam Wilt, _[The DV, DVCAM & DVCPRO Formats](http://www.adamwilt.com/DV-FAQ-tech.html)_, 2000-2006.

## References

<sup id="fn1">1. Adam Wilt, _[DV Pix - Sampling Methods](http://www.adamwilt.com/pix-sampling.html)_, 1998. <a href="#ref1" title="Jump back to footnote 1 in the text.">↩</a></sup> 

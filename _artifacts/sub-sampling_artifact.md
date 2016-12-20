---
layout: post
title: Sub-sampling artifact
categories: video digital
tags: [Digital, Video, DV25, Sub-sampling]
---

In the DV25 codec, for every four luminance samples, each color-difference component is sampled just once (a 4:1:1 chroma subsampling scheme). The 4:1:1 scheme uses co-siting: in a 4 pixel arrangement, the first C<sub>b</sub> (blue-difference) sample is sampled at the same location as the first luma sample, with the C<sub>b</sub> colour value repeated three more times for a total length of four pixels. The C<sub>r</sub> (red colour-difference signal) sample is also sampled once and repeated suchly.  

This co-siting creates a Y/C delay that can appear as blockiness or lower resolution in scenes with high saturation, and particularly red saturation.<sup><a href="#fn1" id="ref1">1</a></sup>

## Can it be fixed?

No, sub-sampling artifacts cannot be remedied.

## See also

Adam Wilt, _[The DV, DVCAM & DVCPRO Formats](http://www.adamwilt.com/DV-FAQ-tech.html)_, 2000-2006.

## References

<sup id="fn1">1. Adam Wilt, _[DV Pix - Sampling Methods](http://www.adamwilt.com/pix-sampling.html)_, 1998.>↩</a></sup>  

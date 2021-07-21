---
layout: post
title: Subcarrier Phase Error
categories: video analog
tags: [Analog, Video, Phase, Hue, Operator Error, Device Error, Common Artifacts]
lang: 日本語
---

“Chroma Phase is the relationship between two signals - in this case, the relationship between the chrominance signal and the reference burst on the video. The processing within a vectorscope and the display of the processed signals is designed to readily detect and evaluate phase distortion of the chrominance. Chroma that is out of phase affects the hue of the video as it appears in the monitor. If flesh tone is incorrect in a video image, chroma information may be out of phase with burst. If the composite video appears overly green, or alternately, magenta, chroma phase may need to be adjusted.”<sup><a href="#fn1" id="ref1">1</a></sup>

## Can it be fixed?

If the phase error is consistent across the tape then this error is correctable through retransfer and adjustment of the VTR output using a processing amplifier to make a hue adjustment. If there is inconsistent hue across the video image, the source video signal may have had a poor or damaged subcarrier reference during original recording to tape. In the example below labeled "PAL Phase Error" you can see the phase flipping 180 degrees quickly throughout the entire clip. The cause of this error is still unknown, but it cannot be fixed with proc amp settings.

## Example(s)

<img src="{{ site.baseurl }}/images/PhaseError_Flat.jpg">

<sub>The image above has an obvious unnatural green hue. After adjustment (below), the flesh tones are more natural.</sub>

<img src="{{ site.baseurl }}/images/PhaseErrorCorrected_Flat.jpg">

<iframe src="https://archive.org/embed/pal-phase-error" width="640" height="480" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
<sub>This PAL Phase Error is caused by an unknown issue. Issue courtesy of Shai Drori<sub>

## References

<sup id="fn1">1. Tektronix NTSC Video Measurements: [Vectorscope Techniques](http://www.tek.com/Measurement/App_Notes/NTSC_Video_Msmt/). <a href="#ref1" title="Jump back to footnote 1 in the text.">↩</a></sup>  

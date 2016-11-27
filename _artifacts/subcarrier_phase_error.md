---
layout: post
title: Subcarrier Phase Error
categories: video analog
tags: [Analog, Video, Phase, Hue Error, Operator Error, Device Error]
---

<img src="{{ site.baseurl }}/images/PhaseError_Flat.jpg">
<sub>The image above has an obvious unnatural green hue. After adjustment (below), the flesh tones are more natural.'''</sub>
<img src="{{ site.baseurl }}/images/PhaseErrorCorrected_Flat.jpg">


"Chroma Phase is the relationship between two signals - in this case, the relationship between the chrominance signal and the reference burst on the video. The processing within a vectorscope and the display of the processed signals is designed to readily detect and evaluate phase distortion of the chrominance. Chroma that is out of phase affects the hue of the video as it appears in the monitor. If flesh tone is incorrect in a video image, chroma information may be out of phase with burst. If the composite video appears overly green, or alternately, magenta, chroma phase may need to be adjusted." [Tektronix NTSC Video Measurements: Vectorscope Techniques](http://www.tek.com/Measurement/App_Notes/NTSC_Video_Msmt/)

## Can it be fixed?

Yes, this is correctable through retransfer and adjustment of the VTR output using a processing amplifier to make a hue adjustment. If there is inconsistent hue across the video image, the source video signal may have had a poor or damaged subcarrier reference during original recording to tape.


---
layout: post
title: Head Switching Noise
categories: video analog
tags: [Analog, Video, Noise, Device Error, Tape Error, Servo]
formats: [VHS]
lang: Español
---

Head switching noise is commonly seen at the bottom of video display during VHS playback. Although it occurs in other formats, it is often masked depending on the processing features and calibration of the playback VTR. During playback of videotape, video heads are turned on as they pass over the media and then turned off to prevent the display of noise that would be output when they are not in contact with the tape. Head switching noise is a result of that switching interval, and it occurs prior to the start of vertical sync. This artifact is not viewable in overscan on a broadcast monitor, but it is viewable in underscan and in full-raster digitized video and un-cropped digital derivatives. Some VTRs feature "SWP masking", which effectively masks the lines created during head switching with video black.

Some tapes have more severe head switching noise, where the error bounces up and down. In particularly bad tapes this error will go high enough to be visible in the title safe area, or even throughout the entire image. This level of the error can be seen in the second example on this page. Here is a quote from David Crosthwait on the topic.

>*The unstable switch line is recorded that way on that tape due to an unstable servo when that tape was recorded. If you slo-motion that tape, you will see that the switch line is floating even in slo-mo. Thus this confirms that the head switch was defectively recorded. An unstable record servo can be blamed on a machine problem with a tape issue or unstable sync coming from the camera. On battery operated decks, it can be traced to unstable battery power.*

## Can it be fixed?

Yes, but only under certain circumstances. It must not have been recorded as part of the signal on the tape. The VHS must be played back on a VCR with its switching point set below the normal standard. There are only 3 models known to allow this option through menu settings; all are very large "Professional" series S-VHS decks that are unable to play back tapes recorded in EP or LP modes. These are: JVC BR -S522, -S525, -S822.  

JVC's marketing explains the feature like so: "For improved playback and special-effects picture performance, a switching noise masking system is also provided. Especially effective with digitally processed special-effects pictures, this sets the switching point 1.5H lower than normal, completely eliminating on-screen switching noise." Panasonic also advertises a small family of Professional models with a "switching noise masking" feature, however in this case it is only a simple black border that covers the bottom of the image, as mentioned above.

Even with one of these VCRs, 480i capture devices following SMPTE RP 202's standard for video alignment will display garbage at the very bottom of the image. To obtain a 720x480 image with no switching noise, a device that captures starting from line 22 is required. Alternatively, one that captures 720x486 can be used, allowing offending image rows to simply be cropped off.

## Example(s)

<iframe src="https://archive.org/embed/AVAAHeadSwitchNYU" width="560" height="315" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
<sub>This clip has a typical-sized head switch error across the bottom of the frame</sub>

<iframe src="https://archive.org/embed/test-clip-xcms-d-9lu-xni" width="560" height="315" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
<sub>This clip has an extreme head switch error caused by a bad servo in the original recording VTR</sub>

<img src="{{ site.baseurl }}/images/HeadSwitch_Butterfly_SLV-779HF_Sharp1_XCard.jpg"><br>
<sub>Playback from a normal VHS VCR into a card that captures from line 23, showing normal switching noise.</sub>

<img src="{{ site.baseurl }}/images/HeadSwitch_Butterfly_BR-S525U_VC500.jpg"><br>
<sub>Playback from a JVC BR-S525U into a card that captures from line 22, showing no switching noise. (The bending is because this card has no TBC.)</sub>

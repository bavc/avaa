---
layout: post
title: SDI Spike
categories: video digital
tags: [Video, Digital]
lang: English
---

<img src="{{ site.baseurl }}/images/SDISpike_Flat.jpg">
<sub>At first glance, this may be perceived as analog line dropout, but it is actually an interruption of the bitstream in a serial digital video signal.</sub>

This artifact was initially seen without an audio dropout, but later occurred with a loss of audio multiplexed with the video over a SMPTE-259M SDI line. The cause of the artifact has been traced to interference in the output of an SDI switch receiving several multiplexed SDI signals. This artifact occurs intermittently, with as few as one frame affected per 90 minutes of SDI transmission.

The actual cause of the interference is still under review, but the manufacturer of the switch has proposed the following possible causes:

- Cable or connector fault in an integrated system

- Static electricity interference in the area where the SDI transmission is taking place

- Motor starting or stopping in the vicinity (e.g. heating/cooling, elevator, pump)

- Solenoid activating or deactivating, such as another tape transport control starting or stopping

- Flash photography in the immediate area of the SDI line

- Cell phone transmitter or walkie-talkie located near the SDI line


## Can it be fixed?

Once the SDI line is disrupted during video capture, the artifact is recorded in the resulting file and cannot be removed using a non-destructive method.

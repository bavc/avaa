---
layout: post
title: Level Clamping
categories: video analog
namevar: [clipping, legalizing]
tags: [Video, Transfer Artifact, Station Qualification, Digitization, Levels, Waveform]
lang: 日本語
---

_Level Clamping_ refers to video waveform levels being chopped off at the top or bottom of the waveform.

_Level Legalizing_ refers specifically to levels being clamped to fit within broadcast range, which is defined as:

* In IRE
  - Black @ 0 IRE
  - White @ 100 IRE
* In 8-bit Digital
  - Black @ 16
  - White @ 235
* In 10-bit Digital
  - Black @ 64
  - White @ 940

Level clamping presents a very serious issue in preservation workflows. During preservation transfers we want to capture as much information as possible. Clamping levels can potentially cut off very bright or very dark content. It may be possible to keep all of the video signal within the un-clamped range by boosting the black and lowering the white with a proc-amp, but this then means that levels will be incorrect in reference to any color bars or adjustment patterns.

## Can it be fixed?

Once a video signal is clamped or legalized in a signal chain the lost information can not be regained. This is why it is very important to make sure that no items in your signal chain are legalizing the signal before digitization.

## Notes regarding Station Qualification

As mentioned above, any information lost due to clamping or legalizing cannot be regained. This is why this artifact should be checked for during Video Digitization Station Qualification. You should ensure that any potential signal chain and any video equipment being used (TBCs, Frame Synchronizers, Switches, Digital I/Os, Digitizers, etc) do not clamp or legalize the video signal. This can be easily checked using QCTools to view the waveforms. Below are examples that show this clearly.

## Example(s)

Below is what SMPTE bars look like normally. Note how there is video signal above 100 IRE and below 0 IRE

<img src="{{ site.baseurl }}/images/levelclamping_notclamped.jpg">


Below is what SMPTE bars look like clamped to broadcast range. Note that the top and bottom of the waveform are cut off.

<img src="{{ site.baseurl }}/images/levelclamping_clamped.jpg">


## Known Offending Equipment

Here is a list of equipment that is known to clamp video signals

* Blackmagic Design Mini Converter Analog to SDI
* Blackmagic Decklink 4K Extreme after upgrade from firmware version 10.8.1 to 10.8.2

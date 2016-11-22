---
layout: post
title: Audio Phase Error
categories: audio analog
tags: [Analog, Audio, Phase, Mono, Stereo]
---

<img src="/images/Audio_phase_error.png">
<sub>This is an image of a phasescope with a correlation meter along the bottom. A horizontal waveform is an indication that there is a phase problem.</sub>

Problems with phase in audio result in many different symptoms.  Its control is a high-level topic at the heart of audio engineering.

Phase error as a term used to describe when certain frequencies are partially or wholly cancelled out of a recording. Phase is an issue when more than one channel is used to record a single source. Often these errors do not become evident until the recording is switched to mono. All of these things make phase error hard to identify.

## Background
The concept of phase in sound is most easily explained when comparing two sine waves. When their cycle match, they are said to be “in phase,” and produce the best quality sound. If one is inverted so that the peaks of one sine wave occur at the same time as the troughs of the second sine wave, they would cancel each other out, and no sound at all would be heard. If the cycles are slightly off, there is a partial cancellation, which silences certain frequencies.

## Causes
Phase error can be the result of time delay due to poor microphone placement during recording, a poorly made cable, a misaligned repro tape head on playback, a poorly aligned stylus/cartridge, et al.  Heard over a pair of speakers relatively close together, phase cancellation is most apparent at low frequencies, resulting in a signal that sounds thin, with little to no bass.
<ref>http://www.uaudio.com/blog/understanding-audio-phase/</ref>

## Identification
A phasescope is a graphic representation of an audio signal, which is included in most audio editing software. You will see an example of one on the right side of this page. On a phasescope, a perfectly in-phase signal will be completely vertical and totally thin. A perfectly out-of-phase signal will be completely horizontal and totally thin. Most out-of-phase signals fall somewhere in between the two, resembling an American football.

As shown in the image to the right, a correlation meter is present at the bottom of most phasescopes. On a correlation meter, an out-of-phase signal will oscillate between -1 and 0. An in phase signal, on the other hand, will be between 0 and +1, where 0 means perfectly stereo and +1 means perfectly mono.

##  Can it be fixed?
It depends on how and when the problem was created. Conceptually, you could nudge one of the signals over until they match, but as this can be very tedious, near impossible to get right, and may not restore the recording to its proper sound quality (as in the case of digital processing of an analog-tape-to-digital transfer done with an incorrect azimuth setting).

It is best to consult a qualified engineer or technician if you believe that there is a phase problem.

At least two companies offer plug-ins to correct phase-related issues as post-production <ref>[http://www.cedaraudio.de/products/cfw2/phase.html Cedar Phase Corrector plug-in]</ref><ref>http://cube-tec.com/vpis/restorationvpis/azimuth.html</ref>.

##  Examples

[Listen to a stereo file that's out of phase in Soundcloud](https://soundcloud.com/av_artifact_atlas/phase-error-stereo-file)

[Listen to the same stereo file summed to mono in Soundcloud](https://soundcloud.com/av_artifact_atlas/phase-error-stereo-file-summed) Note the drop in level.



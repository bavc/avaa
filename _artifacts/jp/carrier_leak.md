---
layout: post
title: Carrier Leak
namevar: [Faulty carrier balance, Asymmetric carrier, Residual carrier]
categories: video analog
tags: [Analog, Video, Device Error]
lang: 日本語
---

Carrier leak refers to a problem in black and white video that originates from a video playback device. The term is sometimes seen in the context of machine maintenance and calibration due to the origin of the artifact.  Carrier leak can be recorded into a second-generation video copy, where it becomes part of the video signal. In recording black and white video, the FM process is used to modulate the video signal (~3 Mhz for black and white) for storage on video tape. During the process of playback, the [frequency modulated signal](http://en.wikipedia.org/wiki/Frequency_modulation) is read by the pair of [video heads](http://en.wikipedia.org/wiki/Tape_head), amplified and demodulated by electronics in the playback machine. If the processing isn’t accurate so that there is an imbalance in the amplification between the signal read from the two playback heads, a textured and banded pattern is superimposed over the video image. This distortion is the result of the modulated carrier leaking into the demodulated video signal that is displayed on the monitor during playback.

Gfeller _et al_. explain:

<blockquote>There are two reasons why this disturbing interference is found in older video formats in particular.  
(1) The relatively simple video devices were often maintained by the users themselves, i.e., by non-technicians, consequently they were not always properly adjusted.  
(2) In the very oldest formats, modulation often took place in frequency ranges that lie within the baseband bandwidth of the video signal.<sup><a href="#fn1" id="ref1">1</a></sup></blockquote>

## Can it be fixed?

If the carrier leak is recorded into the image, there is no way to remedy the artifact. If the carrier leak is occurring due to equipment malfunction, the VTR may need to be serviced.

## Example(s)

<img src="{{ site.baseurl }}/images/CarrierLeak_Flat.jpg">
<sub>Carrier leak displays as a textured herringbone pattern across the entire video image.</sub>

## References

<sup id="fn1">1. Johannes Gfeller, Agathe Jarczyk, and Joanna Phillips, “Carrier Leak” in _Compendium of Image Errors in Analogue Video_ (edited by Swiss Institute for Art Research, Zürich: Scheidegger & Spiess, 2012), p.104, video 54. <a href="#ref1" title="Jump back to footnote 1 in the text.">↩</a></sup>  

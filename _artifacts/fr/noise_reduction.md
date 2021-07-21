---
layout: post
title: Noise Reduction
categories: audio analog
namevar: [Dolby, dbx, Compander]
tags: [Analog, Audio, Cassette, Noise, Open Reel Tape]
lang: Français
---

The application of noise reduction (NR) into the recording and playback processes of analog tape is an effort to reduce the noise introduced by the audio devices in the signal chain. NR systems reduce the dynamic range of an audio signal, compressing it during recording, and then expand it during playback, restoring the signal's original dynamics.<sup><a href="#fn1" id="ref1">1</a></sup> Effective reduction will mask the undesirable noise without creating any audible "pumping" artifacts, which is the fluctuation of the primary signal.

Numerous systems have been introduced over the years based on this compressor-expander design. Matching the correct system on playback with the system used during recording is essential for proper signal reproduction. Dolby - which includes Dolby A and SR (professional), and Dolby B / C / S (consumer) - is the most common, along with dbx type I and type II, and TelCom.<sup><a href="#fn2" id="ref2">2</a></sup> A more extensive list can be found on Richard Hess' blog.<sup><a href="#fn3" id="ref3">3</a></sup> All of these systems have lived their lives as hardware-only efforts.  As of this writing, there are no NR plugins available, which means a tape source encoded with a particular flavor of NR must be decoded during playback with the corresponding system of NR.

## Can it be fixed?

If a tape is identified as having been recorded with some type of NR system (for instance, the 'NR' box present on some cassette labels might be checked, or the recording operator may have written dbx or Dolby on the box), do not assume the tape is necessarily encoded with NR. Likewise, if a tape has no mention of a NR system, do not assume that it is not present.

How do you tell if a tape has been encoded with a NR system? A discussion on Dolby, including many excerpts documenting the differences between the consumer flavors associated with the cassette format, is included in a white paper titled “Preservation of Audiotape & the Dolby Noise Reduction System: A Introduction for Assisting Identification, Playback, and Transfer.”
<sup><a href="#fn4" id="ref4">4</a></sup> Making judgments aurally when documentation is nonexistent opens up the possibility of transferring an item incorrectly. When in doubt, a safe approach is to transfer an item twice, once flat (no NR engaged), and once decoded.

## Example(s)

<img src="{{ site.baseurl }}/images/Mandelbrot_dolbyB.png">
<img src="{{ site.baseurl }}/images/Mandelbrot_flat.png">

<sub>Excerpt of a waveform from a cassette encoded with Dolby B played back with Dolby B engaged (left) and played back without Dolby B engaged (right).</sub>

<img src="{{ site.baseurl }}/images/Mandelbrot_spectrum_dolbyb.jpg">
<img src="{{ site.baseurl }}/images/Mandelbrot_spectrum_flat.jpg">

<sub>Audio frequency spectrums of the same cassette encoded with Dolby B played back with Dolby B engaged (left) and played back without Dolby B engaged (right). Note how deemphasis has been applied to the Dolby B engaged playback.</sub>

<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/96923864&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe><sub>Listen to a Dolby B encoded cassette played back without Dolby B engaged on SoundCloud. Notice the pronounced high end frequencies.</sub>

<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/96923458&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe><sub>Listen to the same tape played back with Dolby B engaged on SoundCloud</sub>

<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/106376318&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe><sub>Listen to a dbx Type II open reel tape played back without dbx Type II engaged on SoundCloud. Notice the pronounced high end frequencies.</sub>

<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/106376877&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe><sub>Listen to the same tape played back with dbx Type II engaged on SoundCloud</sub>

<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/296901145&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe><sub>Listen to a Dolby A tape played back with and without Dolby engaged on SoundCloud</sub>

## References

<sup id="fn1">1. Glenn D. White and Gary J. Louie, _The audio dictionary_ (3rd ed.), (Seattle: University of Washington Press, 2005), 76-77. <a href="#ref1" title="Jump back to footnote 1 in the text.">↩</a></sup>   
<sup id="fn2">2. Kevin Bradley (ed), “[Noise Reduction](http://www.iasa-web.org/tc04/magnetic-tapes-noise-reduction)” in _Guidelines on the production and preservation of digital audio objects_, [IASA TC-04](http://www.iasa-web.org/tc04/audio-preservation) (2nd ed., 2009), 59-60. <a href="#ref2" title="Jump back to footnote 2 in the text.">↩</a></sup>    
<sup id="fn3">3. [Noise Reduction](http://richardhess.com/notes/formats/magnetic-media/magnetic-tapes/analog-audio/noise-reduction/), RichardHess.com, 19 March 2006. <a href="#ref3" title="Jump back to footnote 3 in the text.">↩</a></sup>   
<sup id="fn4">4. Joshua Ranger for AVPreserve, [Preservation of Audiotape & the Dolby Noise Reduction System: A Introduction for Assisting Identification, Playback, and Transfer](https://www.weareavp.com/preservation-audiotape-dolby-noise-reduction-system/), c.2013. <a href="#ref4" title="Jump back to footnote 4 in the text.">↩</a></sup>   

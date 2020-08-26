---
layout: post
title: Digital Clipping
namevar: [Digital distortion]
categories: analog audio digital
tags: [Digital, Audio, Noise, Overs, Common Artifacts]
lang: English
---

When a digital signal exceeds 0 dBFS, which is the highest voltage level that an A/D converter can convert, samples are lost.<sup><a href="#fn1" id="ref1">1</a></sup> Unlike analog distortion, where hot levels can produce a saturation effect, digital clipping is very unforgiving. Severe overs can produce what sounds like noise. However, any over in a digital system constitutes distortion, whether or not it is audible.<sup><a href="#fn2" id="ref2">2</a></sup> Even subtle overs can be seen by zooming in to an audio waveform and viewing the peaks. If the peaks appear chopped off or truncated at the top of the wave, clipping has occurred.

## Can it be fixed?

If digital clipping is heard or seen in the preservation master files, the source must be re-digitized. An individual over or two due to a transient sound, like a cough or a fist hitting the table, may be deemed acceptable if the transfer was otherwise at a reasonable level.

Overs from a digital source can be repaired on production master files using a plug-in, such as Izotope's Declipper.<sup><a href="#fn3" id="ref3">3</a></sup> Preservation master files generated from an analog source will show digital overs if levels were not properly adjusted prior to digitization. These sources should be re-digitized at a lower level. Any digitized recording that shows consistent overs, meaning a signal constantly hitting 0 dB (digital zero), is by definition too hot.

## Examples

<img src="{{ site.baseurl }}/images/Levels_Too_Hot.png">
<sub>Example of an analog transfer that was recorded at an improper level</sub>

<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/96928624&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
<sub>Listen to Digital Clipping on Soundcloud</sub>

## References

<sup id="fn1">1. [Rane Pro Audio Reference](http://web.archive.org/web/20150319045001/http://www.rane.com/par-d.html#decibel). <a href="#ref1" title="Jump back to footnote 1 in the text.">↩</a></sup>  
<sup id="fn2">2. Glenn D. White and Gary J. Louie, _The audio dictionary_ (3rd ed.), (Seattle: University of Washington Press, 2005), 275. <a href="#ref2" title="Jump back to footnote 2 in the text.">↩</a></sup>  
<sup id="fn3">3. [Izotope Declipper: getting started](http://help.izotope.com/docs/rx1/pages/declipper_getting_started.htm). <a href="#ref3" title="Jump back to footnote 3 in the text.">↩</a></sup>

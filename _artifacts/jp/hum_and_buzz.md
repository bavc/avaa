---
layout: post
title: Hum and Buzz
categories: video audio analog digital
tags: [Analog, Digital, Audio, Video, Balanced Cables, Power Supply, Cable, Common Artifacts]
lang: 日本語
---

Hum is a type of noise that can creep into any audio/video system, and can originate from a number of different sources including power lines, power supplies, and television interference. Hum and buzz both exhibit pitch, unlike [Analog Noise]({{ site.baseurl }}/artifacts/analog_noise.html) which has no detectable pitch.<sup><a href="#fn1" id="ref1">1</a></sup>

#### Power lines

* In the course of transmitting electricity from one point to another, power lines radiate electromagnetic waves at 60 Hz. Improperly shielded and unbalanced cables, particularly those in close proximity to power lines, can carry this frequency into a signal chain. In much of the world 50 Hz AC power mains are used and this can introduce interference at this frequency.

#### Power supplies

* A power supply also radiates a 60 Hz magnetic field, which becomes an induction problem when the supply is located near a transducer, such as a tape head or phono cartridge. The supply uses a filtering process to change a 60 Hz line into direct current for the device its powering. When the supply is faulty, any ripple in this conversion process is heard as a harmonic of 60 Hz (120 Hz, 180 Hz, etc.), so it will be at least an octave higher than hum from power lines.<sup><a href="#fn2" id="ref2">2</a></sup> For those in Europe, and the rest of the world using 50 Hz power supplies, the harmonics will be heard at 100 Hz, 150 Hz, etc.<sup><a href="#fn3" id="ref3">3</a></sup>

#### Television interference (TVI)

* Heard as a buzzing sound, rather than a smooth hum, television interference happens when cables are moved around.

# Can it be fixed?  

If the hum or buzz is in your source recording, there is nothing that should be done at the point of digitization. Post production, selective use of equalization, especially notch filters set at the hum harmonics (120 Hz, 180Hz, etc.), is a good way of removing the offending hum from service copies.

If the hum or buzz is in your digitization chain, you will have to isolate the source. Make sure your cables are balanced and well-shielded, and that your cable runs are short. Shielding refers to the protection of the magnetic currents  between devices or within cables  from stray magnetic fields or electrostatic fields.<sup><a href="#fn4" id="ref4">4</a></sup>

Post production, there are also several tools for removing hum and buzz:

1. [DeNoiseLF](http://www.clickrepair.net/noise/software_low_frequency.html)
2. [Izotope RX2](http://www.youtube.com/watch?v=mKCRUM9pYB8)

# Example(s)  

<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/96922069&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe><sub>Listen to power supply hum in SoundCloud</sub>

<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/99246750&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe><sub>Listen to buzz on SoundCloud</sub>

## References

<sup id="fn1">1. Glenn D. White, _The audio dictionary_ (1st ed.), (Seattle: University of Washington Press, 1987), 116. <a href="#ref1" title="Jump back to footnote 1 in the text.">↩</a></sup>   
<sup id="fn2">2. Glenn D. White and Gary J. Louie, _The audio dictionary_ (3rd ed.), (Seattle: University of Washington Press, 2005), 189. <a href="#ref2" title="Jump back to footnote 2 in the text.">↩</a></sup>    
<sup id="fn3">3. [RANE Pro Audio Reference](http://web.archive.org/web/20160617022233/http://www.rane.com/digi-dic.html). <a href="#ref3" title="Jump back to footnote 3 in the text.">↩</a></sup>  
<sup id="fn4">4. Glenn D. White, _The audio dictionary_ (1st ed.), (Seattle: University of Washington Press, 1987), 209. <a href="#ref4" title="Jump back to footnote 4 in the text.">↩</a></sup>  

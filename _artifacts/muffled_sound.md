---
layout: post
title: Muffled Sound
categories: audio analog
namevar: [Azimuth Error]
tags: [Audio, Analog, Azimuth, Error, Frequency Loss, Playback Adjustment, Media Failure, Media Damage, Oxide Out]
---


<img src="{{ site.baseurl }}/images/Shedding_Oxide-Cassette_Head.jpg">
<img src="{{ site.baseurl }}/images/Fc922zv0190_04_a-oxide_out-waveform.png‎">
<sub>Oxide accumulation on a cassette playback head following the transfer of one side of a cassette (top image). Waveform of a half track mono open reel tape played oxide out (bottom image).</sub>


A muffled recording during playback is generally symptomatic of high frequency loss because of media failure, an incorrect wind, or a lack of high frequency information in the source recording. Unless the source is poorly recorded or the source recorder was malfunctioning during the original capture, muffled sound artifacts are the result of improper setup and playback. For instance, If azimuth is not adjusted to the source material prior to digitization, high frequencies will be lost and the resulting file will sound dull.<ref name="Hess azimuth">[http://richardhess.com/notes/2006/09/27/azimuth-hows-and-whys Richard Hess' blog post on azimuth]</ref><ref>[http://www.avpreserve.com/uncategorized/azimuth-adjustment-for-magnetic-audio-recordings/ AVPS blog post on azimuth]</ref> Even if the azimuth is correct, a tape that starts shedding oxide on the playback head will result in a similarly dull recording because the oxide buildup creates a greater distance from the tape to the playback head.

Tapes that are played with their oxide facing away from the head can be identified immediately because azimuth adjustments will not make a difference, the program will sound incredibly muffled, and the track configuration will sound incorrect (a half track mono tape will have reversed content in the left channel instead of in the expected right channel). There are some German tapes with B-wind, where the oxide faces away from the hub,<ref name="Hess winding">[http://http://richardhess.com/notes/formats/magnetic-media/magnetic-tapes/analog-audio/tape-winding Richard Hess on tape winding]</ref>, and all cassettes are B-wind, although this is their normal configuration because a cassette playback head points up towards the tape, unlike an open reel decks whose head points down towards the tape. It is rare for a cassette to be incorrectly wound with the oxide facing in, away from the playback head, but it can happen.

## Can it be fixed?

If the original recording is muffled because of poor mic placement, room acoustics, or some other reason, there's not much that can be done at the digitization stage. In order to be sure that it is not hardware or media related though, you will want to:

* Adjust azimuth on the playback deck to match the source material
* Treat any failing media prior to digitization by cleaning or baking (if appropriate)
* Make sure the oxide side of the tape is facing towards the playback head during playback

When doing azimuth adjustment, an audio vectorscope is an indispensable tool. Hess provides a good "how to" guide on his blog:

<blockquote>Adjusting azimuth is very similar to manually focusing a camera lens. You rock through the point of best azimuth and see how far out it is on either side and try to manually find the centre between two equally bad side points. You tune for MAXIMUM high end. Don’t worry about making a tape screachy or annoying — all you’re doing is capturing what’s on the tape. There is no point of azimuth adjustment that will make the tape brighter than the original recording. Anything but the proper azimuth will produce a tape that is duller than the original recording. The point of proper azimuth is very narrow. Often, the best performance will be within +/- 5 degrees adjustment of the azimuth setting screw. Make sure you’re listening to the highs as you do this. If the cymbals stop, go back to where the cymbals are. If you don’t have cymbals, listen for whatever high end you have. If you don’t have good speakers, use headphones. Remember to listen to stereo programs in mono.<ref name="Hess azimuth"/></blockquote>

On a vectorscope, the Lissajous pattern should be nearly vertical for a mono signal. When doing adjustment, observe the scope and watch how the waveform widens and narrows with each turn of the screw/knob, but above all use your ears to listen to changes in the high end.

## Examples

[Listen to Muffled Sound–Azimuth Adjustment in Soundcloud](https://soundcloud.com/av_artifact_atlas/muffled-sound-azimuth)

[https://soundcloud.com/av_artifact_atlas/muffled-sound-oxide-out](Listen to Muffled Sound–Oxide Out  in Soundcloud)
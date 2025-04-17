---
layout: post
title: Head Clog Banding
categories: video digital
tags: [Digital, Video, Head Clog, Banding, DV]
formats: [DV]
lang: English
---
MiniDV and DVCAM record ten bands of video per frame using two video heads (five per head). If dirt or debris clogs one of the heads, the signal cannot by read from tape in its entirety. Typically, a head clog will appear as wide alternating lines of frozen video or an alternating pattern of color indicating a loss of read/write capability at the video head. Two head clogs cause loss of picture altogether or a freeze-frame of the last decodable frame. If a head is damaged, this type of banding may occur with all record and playback functions of the failing VTR.

## Can it be fixed?

Cleaning the device (deck, camcorder, or player) you are using to transfer the tape can help reduce or resolve this artifact. You can clean the tape to remove dust or debris that has collected on the media. Repacking the tape may also help if the media hasn’t been used for a prolonged period of time. If this doesn’t resolve the issue, your head may be damaged or the artifact might be recorded into the tape (the camcorder or deck used to record it was damaged or had a head clog which meant it was unable to record properly over previously recorded material).

## Quality Control Tools
Using the Analysis tab in DVRescue, you can check to see if there are an errors that indicate that there was a headclog present during capture (vs. being recorded onto the tape). If your deck has a head clog, dvanalysis will flag it with an error and when you are looking at the graph and the table, typically head clog banding will cause 50% errors for video (because one of the heads is consistently clogged).
[insert example images from this issue of DVRescue screenshots: https://github.com/bavc/avaa/issues/257]

## Example(s)

<iframe src="https://archive.org/embed/AVAADVHeadclog1" width="560" height="315" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe><br>
<sub>The problem is difficult to see in the clip above, and much more obvious in the clip below.</sub><br>

<iframe src="https://archive.org/embed/AVAADVHeadclog2" width="560" height="315" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe><br>

<iframe src="https://archive.org/embed/camcorder_headclog-banding_baddvoverwrite_202502" width="640" height="480" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>

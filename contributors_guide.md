---
layout: post
title: Contributors Guide
---

# This will have to be updated!

The Artifact Atlas is a user-built audio and moving image artifact site; everyone can contribute and update information. The goal is to collectively build a comprehensive resource that identifies and documents AV artifacts. If you have relevant knowledge and examples, we invite you to share.  In order to start contributing, [mailto:avaa@bavc.org '''contact us about a user account'''].

==Getting Started==

If you have never contributed to a wiki before, you may want to check out the [http://www.mediawiki.org/wiki/Help:Contents MediaWiki help page] before getting started.

*If you need to [[#Creating a New Page|create a page]], verify that it does not already exist under a different name.

*To '''contribute an artifact example''', the file must be [[Special:Upload|uploaded]] before page edits begin. See [[#Uploading Media|Uploading Media]]

*To '''add your artifact example to an existing page''', see  [[#Filling out the Infobox template|Filling out the Infobox template]]. This infobox must be included in order to add media.

*If you edit the text, make sure to [[#Adding References|add References]] if applicable. Also be sure to add appropriate [[#Adding Categories|categories]].

*To '''add an unknown or unidentifiable artifact''' to the [[Talk:Unidentified Artifacts|Unidentified Artifacts Discussion]] page, see [[#Contributing to the Unidentified Artifacts Discussion Page|Contributing to the Unidentified Artifacts Discussion Page]].


Please be aware that all contributions to the Artifact Atlas fall under a Creative Commons Attribution-NonCommercial-ShareAlike license. Additional information on what this means can be found [[AV_Artifact_Atlas:Copyrights|on our copyright page]] and on the [http://creativecommons.org/licenses/by-nc-sa/3.0/ Creative Commons page for the license].

==Specific Gaps to Fill==
While the AVAA seeks contributions in all areas, in particular we seek volunteers to add and flesh out entries about digital video and digital audio.

Existing entries that currently lack a media clip example demonstrating the artifact include:
<div style="column-count:3;-moz-column-count:3;-webkit-column-count:3">
* [[Block Noise]]
* [[Crash Record]]
* [[Ghost]]
* [[Long Play]]
* [[Loss of Color Lock]]
* [[Low RF]]
* [[Luminance Noise]]
* [[Moiré Effect]]
* [[Mosquito Noise]]
* [[Scratches and Tape Wear]]
* [[Sub-sampling artifact]]
* [[Tape Deformation]]
* [[Venetian-Blind Effect]]
* [[Video Jitter]]
</div>

==Creating a New Page==

First, make sure the page you want to create does not already exist.

* Did you search for the entry?
** Does the artifact that you want to add go under a different name? We have added name variations to some of the artifacts (i.e. a search for 'azimuth error' brings you to 'Muffled Sound'), but these entries can always be updated. See an entry that needs a name variation? Add it!
* Did you browse the [[Table of Contents]]?

Once your are confident you have a new entry, go ahead and create it.

* Search for the entry you want to create, making sure the spelling and capitalization is as you would like (i.e. 'Bad Splice' as opposed to 'bad splice')
** There are no strict capitalization rules, although up until this point the wiki has loosely followed the ''Chicago Manual of Style'', which means
*** Always capitalize the first and the last word
*** Capitalize all nouns, pronouns, adjectives, verbs, adverbs, and subordinate conjunctions ("as", "because", "although")
*** Lowercase all articles, coordinate conjunctions ("and", "or", "nor"), and prepositions regardless of length, when they are other than the first or last word
*** Lowercase the "to" in an infinitive

The wiki will ask you if you want to create a new page. Click on the red link.


[[File:Contributing 1.png|thumb|center|border|800px|alt=Search page showing an artifact that doesn't exist in the wiki|Artifact that doesn't exist in the wiki]]


You could start filling in the new entry as is, but it would be easier to borrow the structure from an existing page. Open up an existing artifact (like [[Analog Distortion|this one]]) in a separate browser tab, click on 'Edit', and copy all the code from that page into your new entry.


[[File:Contributing 2 1.png|thumb|center|border|800px|alt=Viewing the wiki code of an existing entry|Viewing the wiki code of an existing entry]]


==Uploading Media==

'''Because we are using [https://soundcloud.com/av_artifact_atlas SoundCloud] to host our audio artifacts, please [mailto:avaa-contact@lists.stanford.edu contact us first] before uploading any audio.'''

The [[Special:Upload|upload]] link is on the left navigation bar. From here you can upload your media examples to the wiki. As of this writing, the wiki accepts the following file types:

*Image: png, gif, jpg, jpeg, pdf,
*Video: mp4, flv, ogg,
**as well as: doc, docx, mp3, ppt, pptx, wav, xls, xlsx,


Files must be less than 100 MB, although it is recommended that they be less than 25 MB (please trim long examples down when possible). Source filenames should be somewhat descriptive, i.e. they should indicate somewhere in the name what artifact they are purporting to show. Destination filename can be kept as is. Our convention for the summary field has been to include a link back to the artifact page where this piece of media can be found.

Media specification recommendations:

{| class="wikitable"
|-
! scope="col"| Media type
! scope="col"| Recommendations
|-
| Audio
| 160 (mono) or 320 (stereo) kbps mp3
|-
| Images
| 720px x 540px (jpg or png)
|-
| Video
| mp4, h.264 codec (target bitrate: 1500 kbps), Main@L3.0, 480x360, 29.97, AAC-LC (stereo, 44.1 kHz @ 128 kbps), duration < 30 seconds
|}


[[File:Contributing 3.png|thumb|center|border|800px|alt=Upload page with a non-descriptive source filename|Upload page - notice the poor, non-descriptive source filename]]


[[File:Contributing_4.png|thumb|center|border|800px|alt=Upload summary|Upload summary]]

==Filling out the Infobox template==

You will first want to change all the information in the infobox to reflect your new artifact. Not all the fields have to be filled out, but they need to exist for the template to work. If a field doesn't pertain to your artifact, leave it blank (delete everything after the equals sign).

* '''media''': the streaming link goes here
** if you are linking to an audio file, you will need the SoundCloud ID of the track (an AVAA admin can help with this process - please [mailto:avaa-contact@lists.stanford.edu contact us])
** if you are linking to a video file, the convention is <pre><mediaplayer>File:NAME_OF_FILE_UPLOADED_TO_THE_WIKI</mediaplayer></pre>
** to display an image when the video is not playing, use mediaplayer image before the video file and link to the location of the image on the website. Ex: <pre><br/><mediaplayer image='http://preservation.bavc.org/artifactatlas/images/d/d4/CarrierLeak_Flat.jpg'>File:CarrierLeak.mp4</mediaplayer></pre>
** if you want to subtitle a piece of media use <pre><sub>This is an example of a subtitle</sub></pre>
* '''above''': the title of the artifact
* '''image''': link to an image
** keep images to a max width of 350px, like so <pre>[[File:NAME_OF_FILE_UPLOADED_TO_THE_WIKI|350px]]</pre>
* '''caption''': used for putting a caption under the image
* '''namevar''': add alternate name variations to the artifact
** turn these into links by putting two brackets on either side, and then add a redirect back to the parent artifact (see [http://http://preservation.bavc.org/artifactatlas/index.php?title=Azimuth_Error&redirect=no| this page] for an example)
* '''category''': type in 'Audio', 'Video', or put both separated by a line break
* '''type''': type in 'Analog', 'Digital', or put both separated by a line break

Here is what the [[Carrier Leak]] Infobox looks like:

<pre>
{{Infobox storage medium
| media          =<br/>
<mediaplayer image='http://preservation.bavc.org/artifactatlas/images/d/d4/CarrierLeak_Flat.jpg'>File:CarrierLeak.mp4</mediaplayer>
<sub>Carrier leak displays as a textured herringbone pattern across the entire video image.</sub>
| above          = Carrier Leak
| image          =
| caption        = Carrier leak displays as a textured herringbone pattern across the entire video image.
| namevar      = faulty carrier balance, asymmetric carrier, residual carrier
| category      = Video
| type   = Analog
}}
</pre>

Here is what the [[Muffled Sound]] Infobox looks like:

<pre>
{{Infobox storage medium
| media          = <br/>{{#widget:SoundCloud
|id=97290888
|width=100%
}}<sub>Azimuth being adjusted during playback. Notice the increased high end towards the end of the recording.</sub>
<br/><br/>{{#widget:SoundCloud
|id=97291151
|width=100%
}}<sub>Half track mono open reel tape played oxide out.</sub>
| above          = Muffled Sound
| image          = [[File:Shedding Oxide-Cassette Head.jpg|350px]]<br/><br/>[[File:Fc922zv0190_04_a-oxide_out-waveform.png‎|350px]]
| caption        = Oxide accumulation on a cassette playback head following the transfer of one side of a cassette (top image).
Waveform of a half track mono open reel tape played oxide out (bottom image).
| namevar          = [[Azimuth Error]]
| category      = Audio
| type   = Analog
| examples = [[Media Repository]]
}}
</pre>



If you wanted multiple media examples on one page, separate them with line breaks.

==Contributing to the Unidentified Artifacts Discussion Page==
The  [[Talk:Unidentified Artifacts|Unidentified Artifacts Discussion]] page is a talk page for contributors to upload media and request feedback on artifacts they can not identify.

*To add a new artifact discussion, select Add Topic in the top right. Provide information about:
**Content--is the video from an original? a copy? Is there a chance errors care recorded in or intentional?
**The physical media--what is the condition of the tape?
**The playback environment--what is being used to playback the tape? What other equipment is in the chain?

==Adding References==

If you want to cite a source, use the <pre><ref> and <references /> </pre> tags. In practice, their usage looks like this (example taken from [http://www.mediawiki.org/wiki/Extension:Cite/Cite.php here]):

<pre>
According to scientists, the Sun is pretty big.<ref>E. Miller, The Sun, (New York: Academic Press, 2005), 23-5.</ref>
The Moon, however, is not so big.<ref>R. Smith, "Size of the Moon", Scientific American, 46 (April 1976): 44-6.</ref.>

==References==
<references />
</pre>

There is no strict formatting rule for citations, although [http://www.library.cornell.edu/resrch/citmanage/apa| APA style] is certainly appreciated.

If you want to cite the same source multiple times, check out [http://www.mediawiki.org/wiki/Extension:Cite/Cite.php#Multiple_uses_of_the_same_footnote this example].

==Adding Categories==

When you edit any page, you will always see a category selection box.

[[File:Contributing_5.png|thumb|center|border|800px|alt=Category selection box|Category selection]]

We use categories effectively as tags to build a folksonomy around the artifacts. To add tags, you can click on any of the pre-existing categories represented in the category cloud, or you can type in your own. Categories need to be separated by a semicolon. Although categories are somewhat arbitrary - there are no "tagging rules" - at the very least you should tag your entry with the media category (Audio, Video, or both) and media type (Analog, Digital, or both); doing so increases findability.

==Updating the Table of Contents==

Once your new entry is complete, add it to the appropriate column in the [[Table of Contents]]. It does not have to be put in the right alphabetical place in the list, because all the lists are sortable.

==Updating the Sound Gallery==

If your entry has an accompanying sound, it can be added to the [[Sound Gallery]]. First, add a link to your entry to the appropriate category at the top of the page:

* Analog Audio Artifacts
** Distortion
** Noise
** Synchronization Noise
** Other Analog Audio Artifacts
* Digital Audio Artifacts
** Digital Noise
** Other Digital Audio Artifacts

Based on the category you've selected, embed the SoundCloud link of the audio under the corresponding category at the bottom of the page. You can take the embed link from the entry itself. Example:

<pre>
{{#widget:SoundCloud
|id=96774470
|width=80%
}}
'''[[Analog Distortion]]'''<br/>
Distortion in source
</pre>

==Updating the Image Gallery==

If your entry has an accompanying still image, it can be added to the [[Image Gallery]]. As of this writing, we are using the basic gallery function within MediaWiki. When the page is edited, the code looks like this:


Add your image to the appropriate section (Video or Audio), and include a link back to the artifact page underneath the image by using the "Seen in" convention above.

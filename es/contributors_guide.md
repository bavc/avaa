---
layout: page
title: Colaboración
lang: Español
ref: contributors_guide
menu: true
order: 8
---

<img src="{{ site.baseurl }}/images/jeromecaja_crashrecord.png" align="center">
<sub>Hi8mm <a href="artifacts/crash_record.html">crash record artifact</a> found in the <a href="http://www.thejeromeproject.com/">Jerome Caja Project</a></sub>

# Guía para colaborar
## Table of Contents

1.  [Basics](#intro)
2.  [Sending a Github Issue](#issues)
3.  [Editing an Artifact Page](#artifact)
    *  [Edit in GitHub](#github)
    *  [Edit in Prose](#prose)
    *  [Add Images](#img)
    *  [Add Media (Sound/Video)](#media)
    *  [Tips for Writing in Markdown](#markdown)
4. [Adding a new Artifact](#new)


## Basics {#intro}
Thank you for checking out the Contributors Guide! AVAA could not be sustained without a dedicated community of loveable av nerds like you.

This guide is designed as a simple step-by-step for contributing via GitHub or Prose. If what you read here doesn't make a whole lot of sense, consider treating yourself to a crash course in git, GitHub, and the Markdown language (a little HTML helps too). It's all very easy, we swear. Some resource recommendations are in our <a href="{{ site.baseurl }}/faq.html">FAQ</a> page.

Most pages will have links at the bottom that say "Edit in GitHub" or "Edit in Prose."

You can embed video examples from anywhere, but it'd be great if you can send an upload request to add them to the [AV Artifact Atlas Collection on Internet Archive](https://archive.org/details/avartifactatlas?sort=-date).

## Sending Github Issues {#issues}

See a typo? An error? A complete and total fabrication? Send an <a href="https://github.com/bavc/avaa/issues">Issue</a>!

Have an idea for a new artifact (or how to expand on an existing one), but just don't have the know-how to edit in GitHub? Send an <a href="https://github.com/bavc/avaa/issues">Issue</a>!

Have an artifact that you can't identify and would like the opinion of the community? Send an <a href="https://github.com/bavc/avaa/issues">Issue</a>!

- Click on link at the bottom of an artifact page
- Click on "New Issue" in the top right
- Fill out the form with the kind of change you would like to see made
- For artifact identification help, begin your subject line with "Artifact" as in "Artifact: Weird lines and stuff"
- For ideas you have on functionalities that could make AVAA better, begin your subject line with "Wishlist"

## How to update an artifact page through the AVAA website {#artifact}

### Edit in Github {#github}

- Click on link at the bottom of an artifact page
- Log in (if not already logged in)
- Click on edit file button (pencil icon above text)
- Preview results
- Fill out the "Commit Changes" box at the bottom of the page and choose "create a new branch and start a pull request"

(Note: you can also just go straight to the <a href="https://github.com/bavc/avaa/tree/master/_artifacts">artifacts directory</a>.)

### Edit in Prose {#prose}

- Click on link at the bottom of an artifact page
- Log into Prose using Github credentials (if not already logged in)
- Edit page and preview results
- Click the Save button (last button on right navigational bar) and submit your change request

## Add Images {#img}

Images are linked. As the future-proofing types, we recommend images are first uploaded into the images directory of the repository. (Note that you will not see the images in GitHub, only on the website.)

- Upload image to <a href="https://github.com/bavc/avaa/tree/master/images">images directory</a>
- Insert image under the "Example(s)" header in the style below, replacing the file name with the one you just uploaded.
- Add a description. The <small>```sub```</small> tag in the example below creates a comment under the image where you can describe the source.

<small>```<img src="{{ site.baseurl }}/images/TBCerror_compare_02.jpg">
<sub>TBC Error</sub>```</small>

## Add Media {#media}

### Submit a Media Upload Request {#upload}

The large sizes of sound and video files means that these examples should be embedded from other sharing platforms. In the interest of keeping these items together, we ask that contributors send the video and audio they'd like to add to the <a href="https://github.com/bavc/avaa/issues">issues tracker</a>. An administrator at <a href="www.bavc.org/preserve-media">Bay Area Video Coalition</a> will then add the media to the organization's <a href="https://archive.org/search.php?query=%23AVAA">Internet Archive</a> or Soundcloud account.

Once uploaded, the admin will send you a link and you can continue with the steps below.

Note that from Internet Archive and Soundcloud these files can be easily downloaded by anyone. If you would prefer to embed on your own from a more secure sharing platform, that is fine too.

### Add Video {#video}

- Link to your video to the issues tracker. Administrators will upload the file to Internet Archive and send you a link.
- Copy the embed code from Internet Archive.
- Paste into the artifact's page under the "Example(s)" header.
- Change the default width and height of the video in the embed code to <small>```width="560" height="315"```</small>
- Add a description. The <small>```sub```</small> tag in the example below creates a comment under the image where you can describe the source.

The sample syntax below embeds video in both Prose and GitHub. Replace only the URLs and the description.

<small>```<iframe src="https://archive.org/embed/AVAAAvatlasBeardingAccess" width="560" height="315" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
<sub>Bearding as seen in 1/2 open-reel AV recording. Source: [Nancy Karp +Dancers](http://www.nancykarp.org/)</sub>```</small>

### Add Sound {#sound}

- Link to your audio to the issues tracker. Administrators will upload the file to Soundcloud and send you a link.
- Copy the embed code from Soundcloud
- Paste into the artifact's page under the "Example(s)" header.
- Add a description. The <small>```sub```</small> tag in the example below creates a comment under the image where you can describe the source.

The sample syntax below embeds audio in both Prose and GitHub.

<small>```<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/96915790&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
<sub>Dropout heard in 1/4" open reel audio</sub>```</small>

### Tips on writing in Markdown {#markdown}

* Note that {% raw %} {{ site.baseurl }} {% endraw %} must be appended to the beginning of links and images. Images will not show up in the Github markdown page but will work on the website.
* If you want to make a line break (or new line), you have to add two spaces at the end of the previous line.

For more advice, see this [Github Guide to Mastering Markdown](https://guides.github.com/features/mastering-markdown/).

## Adding a new Artifact {#new}

To add an artifact that is not listed, you must make a new page. New pages should be made in the `_artifacts` directory. The file should be named the same as the title of the artifact and end in `.md` (because it will be a Markdown file). If the artifact is more than one word, use underscores to represent spaces in the title. All artifacts require some specially-formatted text called YAML at the top of the file. Here is an example from the Bearding Artifact (found in `_artifacts/muffled_sound.md`):

```
---
layout: post
title: Muffled Sound
categories: audio analog
namevar: [Azimuth Error]
tags: [Audio, Analog, Azimuth, Error, Frequency Loss, Playback Adjustment, Media Failure, Media Damage, Oxide Out]
---
```

Categories should be limited to the following: analog, audio, digital, film, and video. Categories should be written in lowercase and, if using multiple categories, separated by only a space (no commas).

The "namevar" category shows up in search results as "also known as". This is so people can still search for something and find the right artifact. If your new artifact is known by other names, enter them here, separated by commas, in brackets.

Tags are free text and help other users search and find artifacts. Tags should be wrapped in brackets and separated by commas.

Below this, add a top-level brief description, a `## Definition` section, and a `## Can it be fixed?` section. Add examples, if available, in an `## Example(s)` section. See above for more information about editing artifacts, examples, and writing in Markdown.

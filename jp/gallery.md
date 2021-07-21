---
layout: page
title: ギャラリー 
lang: 日本語
ref: gallery
menu: true
order: 6
---

Below are all the images used and hosted on the AVAA. To browse videos, please see our videos hosted at the [AV Artifact Atlas Collection on Internet Archive](https://archive.org/details/avartifactatlas?sort=-date). To browse audio samples, please see our audio hosted on Soundcloud [here](https://soundcloud.com/av_artifact_atlas).


{% for page in site.data.gallery %}
  <a href="{{ site.baseurl }}/artifacts/{{ page.for_page }}"><img class="gallery" src="{{ site.baseurl }}/images/{{ page.file }}"/></a>
{% endfor %}

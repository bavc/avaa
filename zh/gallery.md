---
layout: page
title: 图库
lang: 中文
ref: gallery
menu: true
order: 6
---

以下是 AVAA 网站托管的所有图片。视频示例请访问 [Internet Archive 上的 AV Artifact Atlas 合集](https://archive.org/details/avartifactatlas?sort=-date)。音频示例请访问我们在 [Soundcloud 上的页面](https://soundcloud.com/av_artifact_atlas)。

{% for page in site.data.gallery %}
  <a href="{{ site.baseurl }}/artifacts/{{ page.for_page }}"><img class="gallery" src="{{ site.baseurl }}/images/{{ page.file }}"/></a>
{% endfor %}

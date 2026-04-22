---
layout: page
title: AV 瑕疵图集
lang: 中文
ref: home
menu: true
order: 1
---
<img src="{{ site.baseurl }}/images/home_TBCProcessingError_NYU_Flat.jpg" height="315" width="520"><br>

欢迎访问 AV 瑕疵图集（AV Artifact Atlas），这是一个用于识别模拟与数字视频中错误和异常现象的社区资源。AVAA 由影音档案领域的专业人士共同建设，同样适合所有与影音资料打交道的从业者使用。欢迎访问[关于本项目]({{ site.baseurl }}/zh/about.html)页面了解详情，并阅读[贡献者指南]({{ site.baseurl }}/zh/contributors_guide.html)了解如何参与贡献。

您可以从这份[常见影音瑕疵列表]({{ site.baseurl }}/zh/tags.html#common-artifacts)入手浏览。

您可以通过侧边栏搜索框、下方标签云或[完整瑕疵列表]({{ site.baseurl }}/zh/tags.html)来浏览本站内容。

{% assign rawtags = "" %}
{% for post in site.artifacts %}
  {% if post.lang == page.lang %}
    {% assign ttags = post.tags | join:'|' | append:'|' %}
    {% assign rawtags = rawtags | append:ttags %}
  {% endif %}
{% endfor %}
{% assign rawtags = rawtags | split:'|' | sort %}

{% assign tags = "" %}
{% for tag in rawtags %}
  {% if tag != "" %}
    {% if tags == "" %}
      {% assign tags = tag | split:'|' %}
    {% endif %}
    {% unless tags contains tag %}
      {% assign tags = tags | join:'|' | append:'|' | append:tag | split:'|' %}
    {% endunless %}
  {% endif %}
{% endfor %}

<div>
{% for tag in tags %}
<a class="artifact-tag" href="tags.html#{{ tag | slugify }}"> {{ tag }} </a>
{% endfor %}
</div>

---
layout: page
title: AV Artifact Atlas
lang: Español
ref: home
menu: true
order: 1
---
<img src="{{ site.baseurl }}/images/home_TBCProcessingError_NYU_Flat.jpg" height="315" width="520"><br>

Welcome to AV Artifact Atlas, a resource for identifying errors and anomalies in analog and digital video. AVAA is built for and by a community of professionals in the field of audiovisual archiving but useful for anyone working with av material. Check out our [About]({{ site.baseurl }}/about.html) page for more information about the project and the [Contributor's Guide]({{ site.baseurl }}/contributors_guide.html) for steps on how you can participate.

To start, you can view this [list of commonly occurring audio and video artifacts.]({{ site.baseurl }}/tags.html#common-artifacts)

You can browse the site using the search box in the sidebar, the tag cloud below, or this [list of artifacts]({{ site.baseurl }}tags.html).

{% assign rawtags = "" %}
{% for post in site.artifacts %}
  {% assign ttags = post.tags | join:'|' | append:'|' %}
  {% assign rawtags = rawtags | append:ttags %}
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

---
layout: page
title: Home
---

Welcome to AV Artifact Atlas, a resource for identifying errors and anomalies in analog and digital video. AVAA is built for and by a community of professionals in the field of audiovisual archiving but useful for anyone working with video. Check out our [About](https://bavc.github.io/avaa/about.html) page for more information about the project and the [Contributor's Guide](https://bavc.github.io/avaa/contributors_guide.html) for steps on how you can participate. 

We are currently in the process of migrating AVAA from it's original Wikimedia platform to Github; please excuse our appearance as we work out the kinks. Meanwhile, you can browse the site using the search box in the sidebar, the tag cloud below, or this [list of artifacts](https://bavc.github.io/avaa/tags.html)

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
<button><a href="tags.html#{{ tag | slugify }}"> {{ tag }} </a></button>
{% endfor %}
</div>
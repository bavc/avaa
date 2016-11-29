---
layout: page
title: Home
---

Homepage intentionally left blank! This is a demo!  

Meanwhile -- check them tags!!  

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
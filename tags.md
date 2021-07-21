---
layout: page
title: Browse by Tags
lang: English
ref: tags
menu: true
order: 3
---
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

{% for tag in tags %}<a class="artifact-tag" href="tags.html#{{ tag | slugify }}">{{ tag }}</a>{% endfor %}
<br/><br/>
<h1>List</h1>


{% for tag in tags %}
  <h2 id="{{ tag | slugify }}">{{ tag }}</h2>
  <ul>
   {% for artifact in site.artifacts %}
     {% if artifact.lang == page.lang %}
       {% if artifact.tags contains tag %}
         <li><h3>
           <a href="{{ site.baseurl }}{{ artifact.url }}">{{ artifact.title }}</a></h3>
         </li>
       {% endif %}
     {% endif %}
   {% endfor %}
  </ul>
{% endfor %}


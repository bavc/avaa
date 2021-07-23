---
layout: page
title: カテゴリ
lang: 日本語
ref: categories
menu: true
order: 4
---

{% assign rawtags = "" %}
{% for post in site.artifacts %}
  {% if post.lang == page.lang %}
    {% assign ttags = post.categories | join:'|' | append:'|' %}
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

{% for tag in tags %}<a class="category-tag" href="{{ site.baseurl }}/categories.html#{{ tag | slugify }}"> {{ tag }} </a>{% endfor %}

<h2>List</h2>


{% for tag in tags %}
  <h2 id="{{ tag | slugify }}">{{ tag }}</h2>
  <ul>
   {% for artifact in site.artifacts %}
      {% if artifact.lang == page.lang and artifact.categories contains tag %}
       <li><h3>
         <a href="{{ site.baseurl }}{{ artifact.url }}">
         {{ artifact.title }}
         </a></h3>
       </li>
      {% endif %}
   {% endfor %}
  </ul>
{% endfor %}

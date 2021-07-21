---
layout: page
title: Browse by Formats
lang: English
ref: formats
menu: true
order: 5
---
<h2>Related Format Families</h2>

<ul>
  {% assign alphabeticalFormats = site.formats | sort: 'title' %}
  {% for format in alphabeticalFormats %}
  {% if format.lang == page.lang %}
    <li>
    <h3><a href="{{ site.baseurl }}{{ format.url }}">
      {{ format.title }}</a></h3>
      {% if format.namevar.size > 1 %}
      {% assign namevars = format.namevar | split: ", " %}
        (Also known as: {% for var in format.namevar %}
          {{ var }}
        {% endfor %})
      {% endif %}
    </li>
    {% endif %}
  {% endfor %}
</ul>


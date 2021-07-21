---
layout: page
title: フォーマット 
lang: 日本語
ref: formats
menu: true
order: 6
---
<h2>フォーマットを閲覧する </h2>

<ul>
  {% assign alphabeticalFormats = site.formats | sort: 'title' %}
  {% for format in alphabeticalFormats %}
  {% if format.lang == page.lang %}
    <li>
    <h3><a href="{{ site.baseurl }}{{ format.url }}">
      {{ format.title }}</a></h3>
      {% if format.namevar.size > 1 %}
      {% assign namevars = format.namevar | split: ", " %}
        (としても知られている: {% for var in format.namevar %}
          {{ var }}
        {% endfor %})
      {% endif %}
    </li>
    {% endif %}
  {% endfor %}
</ul>

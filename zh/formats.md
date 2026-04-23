---
layout: page
title: 格式
lang: 中文
ref: formats
menu: true
order: 5
---
<h2>按格式浏览</h2>

<ul>
  {% assign alphabeticalFormats = site.formats | sort: 'title' %}
  {% for format in alphabeticalFormats %}
  {% if format.lang == page.lang %}
    <li>
    <h3><a href="{{ site.baseurl }}{{ format.url }}">
      {{ format.title }}</a></h3>
      {% if format.namevar.size > 1 %}
        （亦称：{% for var in format.namevar %}<em>{{ var }}</em>{% unless forloop.last %}、{% endunless %}{% endfor %}）
      {% endif %}
    </li>
  {% endif %}
  {% endfor %}
</ul>

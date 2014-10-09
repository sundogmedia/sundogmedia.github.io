---
layout: book-toc
title: Table of Contents
permalink: /learning-center/book/
---

<ul class="menu">
{% for item in site.data.nav-book %}
	<li><a href="{{ item.href | prepend: site.baseurl }}" {% if page.url == item.href %} class="current-item" {% endif %} >{{ item.title }}</a>
	{% if item.subcategories != null  %} 
		<ul class="chapter-menu">
		{% for subcategory in item.subcategories %}
		<li><a href="{{ subcategory.subhref | prepend: site.baseurl }}">{{ subcategory.subtitle }}</a></li>
		{% endfor %}
		</ul>
	{% endif %} 
	</li>
{% endfor %}
</ul>

---
layout: default
title: Blog
permalink: /blog/
---

<h1 class="page-heading">Blog</h1>

  <div class="post-list">
    {% for post in site.posts %}
      <div class="post">
        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
        <p class="post-meta">{{ post.date | date: '%B %d, %Y' }}</p>
        <p>{{ post.excerpt }} <a class="more-link" href="{{ post.url | prepend: site.baseurl }}">Read More</a></p>
         </div>
    {% endfor %}
  </div>

  <p class="rss-subscribe">Subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>
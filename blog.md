---
layout: post
title: Blog
permalink: /blog/
---

<article class="post" itemtype="http://schema.org/BlogPosting" itemscope="itemscope">
  <div class="post-list">
    {% for post in site.posts %}
      <article class="post" itemtype="http://schema.org/BlogPosting" itemscope="itemscope">
        <header class="entry-header"><h1 itemprop="headline"><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h1> <p class="post-meta">{{ post.date | date: '%B %d, %Y' }}</p></header>
       <div itemprop="text" class="entry-content">
        <p>{{ post.excerpt }} <a class="more-link" href="{{ post.url | prepend: site.baseurl }}">Read More</a></p></div>
         </article>
    {% endfor %}
  </div>

  <p class="rss-subscribe">Subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>
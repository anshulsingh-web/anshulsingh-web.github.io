---
layout: default
permalink: /blog/
title: Blogs
nav: true
nav_order: 1
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1
    after: 3
---

<div class="post">

  <div class="header-bar">
    <h1>Blogs</h1>
    <h2>Thoughts, Theory & The Unseen</h2>
  </div>

  {% if site.display_tags %}
  <div class="tag-category-list">
    <ul class="p-0 m-0">
      {% for tag in site.display_tags %}
        <li>
          <i class="fa-solid fa-hashtag fa-sm"></i> 
          <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">{{ tag }}</a>
        </li>
        {% unless forloop.last %}&nbsp;&bull;&nbsp;{% endunless %}
      {% endfor %}
    </ul>
  </div>
  {% endif %}

  <ul class="post-list">
    {% for post in paginator.posts %}
    <li>
      <h3>
        <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h3>
      <p>{{ post.description }}</p>
      <p class="post-meta">
        {{ post.date | date: '%B %d, %Y' }} &nbsp; &middot; &nbsp;
        {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
        {{ read_time }} min read
      </p>
    </li>
    {% endfor %}
  </ul>

  {% if paginator.total_pages > 1 %}
  <div class="pagination">
    <ul>
      {% if paginator.previous_page %}
        <li><a href="{{ paginator.previous_page_path | relative_url }}">&laquo; Prev</a></li>
      {% else %}
        <li><span class="disabled">&laquo; Prev</span></li>
      {% endif %}
      
      <li><span class="page_number">Page: {{ paginator.page }} of {{ paginator.total_pages }}</span></li>

      {% if paginator.next_page %}
        <li><a href="{{ paginator.next_page_path | relative_url }}">Next &raquo;</a></li>
      {% else %}
        <li><span class="disabled">Next &raquo;</span></li>
      {% endif %}
    </ul>
  </div>
  {% endif %}

  <hr>

  <div style="text-align: center; margin-top: 40px; color: #777;">
    <i class="fa-solid fa-comments fa-2x"></i>
    <br><br>
    <p>I am working on more articles related to statistical theory and philosophy.</p>
    <p>I am always open to suggestions and deep discussions on these topics. 😃</p>
  </div>

</div>

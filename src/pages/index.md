---
title: Home
sections:
  - component: HeroBlock
    content: I'm a full-stack software engineer who builds things with Ruby.
    section_id: hero
    title: 'Hi, I''m Andrew.'
    type: heroblock
  - component: PortfolioBlock
    layout_style: mosaic
    num_projects_displayed: 6
    section_id: latest-projects
    subtitle: An optional subtitle of the section
    title: Recent Work
    type: portfolioblock
    view_all_text: View All
    view_all_url: portfolio/index.html
  - actions:
      - label: View Blog
        url: blog/index.html
    component: PostsBlock
    num_posts_displayed: 2
    section_id: latest-posts
    subtitle: An optional subtitle of the section
    title: Latest from the Blog
    type: postsblock
  - component: ContactBlock
    section_id: contact
    subtitle: An optional subtitle of the section
    title: Contact Me
    type: contactblock
menus:
  main:
    title: Home
    weight: 1
template: home
---


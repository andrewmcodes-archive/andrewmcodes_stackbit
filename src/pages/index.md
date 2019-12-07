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
  - component: ServicesBlock
    section_id: services
    serviceslist:
      - content: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
          ligula, cursus id molestie vel, maximus aliquet risus. Vivamus in nibh
          fringilla, fringilla tortor at, pulvinar orci.
        title: Service Title
      - content: >-
          Donec lobortis velit sed suscipit lobortis. Ut non quam metus. Nullam
          a maximus mi. Quisque justo nunc, sollicitudin euismod euismod at,
          tincidunt ut tellus. Vivamus rhoncus mattis varius. 
        title: Service Title
      - content: >-
          Vestibulum a nunc ut eros condimentum posuere. Nullam dapibus quis
          nunc non interdum. Pellentesque tortor ligula, gravida ac commodo eu.
        title: Service title
      - content: >-
          Aliquam pulvinar, orci ac scelerisque tempus, felis leo sagittis
          justo, sit amet condimentum lorem nibh vel quam. Duis consectetur
          lorem ipsum, non efficitur urna viverra et.
        title: Service title
    subtitle: An optional subtitle of the section
    title: What I Do
    type: servicesblock
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


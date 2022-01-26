---
title: "Making a website"
description: "Want to know how this website was made?"
author: "Antony Holmes"
readtime: "1 min"
section: "Guides & Tutorials"
tags: "Website"
coverImage: "/images/articles/code.webp"
related: ""
---

If you have read a few financial articless, you may have noticed a lot of them are created with Wordpress. I personally find Wordpress to be slow and expensive (once you add plugins) and it frequently has security issues. In the spirit of DIY finances, I thought I would also DIY my own website for a number of reasons:

1. I"m a developer so I enjoy writing code.
2. I can customize the site as I please. I don"t have to fight with Wordpress themes nor having a site that looks Wordpressy.
3. I don"t wish to be beholden to Wordpress or a Wordpress provider. If I preach choosing a low cost brokerage to manage your money, it seems odd to use an expensive, bloated solution to make the website to tell you this.
4. It"s considerably cheaper since I don"t require a database server to store the content.
5. It"s faster because I can strip the site down to remove unwanted cruft in the pages.

### Technical Details

The site is primarily developed using [Gatsby](https://www.gatsbyjs.com/), a framework for building static websites in React. Gatsby is component based and takes care of the tiresome routing, transpiling, and hot-reloading that can make React annoying.

Most of the site that you see is static, rendered at build time (a Gatsby feature) and served as plain HTML for speed, SEO and accessibility. I used Tailwind to style components with purgecss to remove unused css and reduce loading times.

The site is hosted on AWS using S3 and Cloudfront. I choose to build the site locally and then push it to an S3 bucket. I’ve found that continous deployment using Netlify, Cloudflare, AWS Amplify and others to be unreliable and frequently my site will not compile because they will not pull the most recent packages into their build environment, so I prefer to have more control over the process. The added bonus is that it’s cheaper.

Site data is stored in a mixture of Markdown (this post, for example) and JSON that is rendered into pages. This neatly separates the content from the presentation (JSX, CSS) layer which makes managing the site easier.

The codebase is not open source, but please feel free to [email](antony@politeinvestor.com) if you have further questions.

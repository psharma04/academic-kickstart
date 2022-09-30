---
# Page title
title: Testing Page

# Title for the menu link if you wish to use a shorter link title, otherwise remove this option.
linktitle: "Testing Page"

tags: [Testing]

# Page summary for search engines.
summary: "**🔜 Work in Progress**<br>TESTING FOR THE RENDER ENGINE."

# Date page published
date: 2021-08-02

# Comment the next line out
#draft: true
# Academic page type (do not modify).
type: book
math: true
# Position of this page in the menu. Remove this option to sort alphabetically.
weight: 999
diagram: true
---

{{< toc hide_on="xl" >}}

This is a testing page for the CMS and site render engine. If stuff breaks, we check this page to see if it's a site-wide issue.

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6

## Formatting

*This text is in Italics*

**This text is bold**

***This text is bold and italicised***

~~This text is crossed out~~

> This text should be a block quote.

{{< hl >}}This text should be highlighted.{{< /hl >}}

{{< spoiler text="spoiler" >}}

contents of the spoiler

{{< /spoiler >}}

### Cross-referencing

[external link](https://core.pks.ai/?utm_source=hscone&utm_campaign=testing-page)

This text has a footnote[^1].

{{< cta cta_text="CTA button" cta_link="/" cta_new_tab="false" >}}

### Callouts

{{% callout note %}}
Note callout
{{% /callout %}}

{{% callout info %}}
Info callout
{{% /callout %}}

{{% callout warning %}}
Warning callout
{{% /callout %}}

{{% callout success %}}
Success callout
{{% /callout %}}

## Lists

1. Numbered list
   1. Sub-entry 1
   2. Sub-entry 2
2. Original level

- Unordered list
  - Sub-level 1
    - Sub-level 2
  - Sub-level 1
- Original level

### Todo List

- [x] checked-off item
  - [x] checked-off sub-item
  - [ ] un-checked sub-item
- [ ] unchecked item

## Embeds

![this is an image](https://pshar.ma/image-cdn/uiyut3.png "this is an image with a caption")





Font Awesome Terminal icon {{< icon name="terminal" pack="fas" >}} with a heart emoji :heart:

This is an audio file:

{{< audio src=https://archive.org/download/testmp3testfile/mpthreetest.mp3 >}}

This is a youtube video:

{{< youtube dQw4w9WgXcQ >}}

This is a line chart using Plotly:

{{< chart data="line-chart" >}}

This is a mermaid plot:

```mermaid
graph TD
    B[Are Repeated Vertices Allowed?]
    B -->| Yes | C[Are Repeated Edges Allowed?]
    B -->| No | D[Are Repeated Edges Allowed?]
    C -->|Yes| E[Walk]
    C -->|No| F[Trail]
    D -->|Yes| G[Circuit]
    D -->|No| H[Can the First and Last vertex be the same?]
    H -->|Yes| I[Cycle]
    H -->|No| J[Path]
```



### Math ($\LaTeX$)

$$\begin{gather*}\bbox[5px, border: 2px solid orange]{\bbox[5px, border: 2px solid red]{\text{Strong BL Acid}}\text{ + Water}}\rightarrow\bbox[5px, border: 2px solid pink]{\text{Hydronium +}\bbox[5px, border: 2px solid green]{\text{Weak BL Base}}} \\\\ \bbox[5px, border: 2px solid orange]{\bbox[5px, border: 2px solid red]{\ce{HCl(aq)}} \ce{+H2O(l)}}\ce{->}\bbox[5px, border: 2px solid pink]{\ce{H3O+(aq) +}\bbox[5px, border: 2px solid green]{\ce{Cl-(aq)}}} \\\\ \bbox[5px, border: 2px solid orange]{0\text{%}}\longrightarrow \bbox[5px, border: 2px solid pink]{100\text{%}}\end{gather*}$$





| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      |    Cringe     | $1600 |
| col 2 is      | left aligned? |   $12 |
| zebra stripes |   are neat    |    $1 |

---

[^1]: This is a footnote.

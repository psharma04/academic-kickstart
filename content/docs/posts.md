---
# Course title, summary, and position.
linktitle: "Documentation - Making a Post"
summary: Learn how to use the site's formatting features to make posts and contributions.
weight: 2

# Page metadata.
title: Making a Post
date: "2020-6-11T00:00:00Z"
lastmod: "2020-6-6T00:00:01Z"
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: docs  # Do not modify.

# Add menu entry to sidebar.
# - name: Declare this menu item as a parent with ID `name`.
# - weight: Position of link in menu.
menu:
  example:
    name: Making a post
    weight: 2
---
## Making the post
- In the Content Manager, click "Quick add" in the top right, then select "Post"
- Fill in the title field as `Subject: Topic`
  - For example: `SOR1: John XXIII` or `Physics: Kinematics`
- Optionally, fill in the subtitle
## Content formatting
Content can be written using **Markdown**, [**LaTeX math**](https://en.wikibooks.org/wiki/LaTeX/Mathematics), and **Shortcodes**. This article gives an overview of the most common formatting options, including features that are exclusive to this site.<!--more-->

{{% alert note %}}
*Shortcodes* are plugins which are made specifically for this site, or inherited from [Hugo](http://gohugo.io/extras/shortcodes/). Additionally, **HTML** may be written in Markdown documents for advanced formatting.
{{% /alert %}}

## Sub-headings

    ## Heading 2
    ### Heading 3
    #### Heading 4
    ##### Heading 5
    ###### Heading 6

## Emphasis

    Italics with _underscores_.

    Bold with **asterisks**.

    Combined emphasis with **asterisks and _underscores_**.

    Strikethrough with ~~two tildes~~.

## Lists
### Ordered

    1. First item
    2. Another item

### Unordered

    * First item
    * Another item

### Todo

Todo lists can be written by using the standard Markdown syntax:

```markdown
- [x] Write math example
- [x] Ignore the exam that's due tomorrow
- [ ] Do something else
```

renders as

- [x] Write math example
- [x] Ignore the exam that's due tomorrow
- [ ] Do something else

## Images

Images may be added to a page by either placing them in your `static/img/` media library or in your [page's folder](https://gohugo.io/content-management/page-bundles/), and then referencing them using one of the following notations:

A figure from your `static/img/` media library:

    {{</* figure library="true" src="image.jpg" title="A caption" lightbox="true" */>}}

A figure within a [page's folder](https://gohugo.io/content-management/page-bundles/) (e.g. `content/post/hello/`) :

    {{</* figure src="image.jpg" title="A caption" lightbox="true" */>}}

A numbered figure with caption:

    {{</* figure src="image.jpg" title="A caption" numbered="true" lightbox="true" */>}}

A general image:

    ![alternative text for search engines](/img/image.jpg)

Figures may be [cross-referenced](#links).

## Image gallery

**To add an image gallery to a page bundle:**

1. Create a gallery album folder within your [page bundle](https://gohugo.io/content-management/page-bundles/) (i.e. within your page's own folder)
2. Add images to your new album folder
3. Paste `{{</* gallery album="<ALBUM FOLDER>" */>}}` where you would like the gallery to appear in the page content, changing the album parameter to match the name of your album folder

Optionally, to add captions for your images, add the following instances to the end of your page's front matter:

```yaml
gallery_item:
- album: <ALBUM FOLDER>
  image: <IMAGE NAME>.jpg
  caption: Write your image caption here
```

**Alternatively, create an image gallery with images from the internet or your `static/img/` media library:**

1. Add gallery images to within your `static/img/` media library folder
2. Reference your images at the end of the front matter of a content file in the form:

        gallery_item:
        - album: gallery
          image: boards.jpg
          caption: A caption
        - album: gallery
          image: https://raw.githubusercontent.com/psharma04/hugo-academic/master/images/theme-dark.png
          caption: Another caption

3. Display the gallery somewhere within your page content by using `{{</* gallery */>}}`

{{% alert note %}}
For *docs* pages (i.e. pages using the courses and documentation layout), gallery images must be placed in the `static/` media library using the second approach (due to limitations of Hugo).
{{% /alert %}}

## Videos

The following kinds of video may be added to a page.

**Local video file**

Videos may be added to a page by either placing them in your `static/img/` media library or in your [page's folder](https://gohugo.io/content-management/page-bundles/), and then referencing them using one of the following notations.

A video from your `static/img/` media library:

    {{</* video library="1" src="my_video.mp4" controls="yes" */>}}

A video within a [page's folder](https://gohugo.io/content-management/page-bundles/) (e.g. `content/post/hello/`):

    {{</* video src="my_video.mp4" controls="yes" */>}}

**Youtube**:

    {{</* youtube dQw4w9WgXcQ */>}}

**Vimeo**:

    {{</* vimeo 138344302 */>}}

## Links

    [I'm a link](https://www.google.com)
    [A post]({{</* ref "/post/my-page-name/index.md" */>}})
    [A publication]({{</* ref "/publication/my-page-name/index.md" */>}})
    [A project]({{</* ref "/project/my-page-name/index.md" */>}})
    [A relative link from one post to another post]({{</* relref "../my-page-name/index.md" */>}})
    [Scroll down to a page section with heading *Hi*](#hi)

To enable linking to a file, such as a PDF, first place the file in your `static/files/` folder and then link to it using the following form:

    {{%/* staticref "files/cv.pdf" "newtab" */%}}Download my CV{{%/* /staticref */%}}

The optional `"newtab"` argument for `staticref` will cause the link to be opened in a new tab.

### Figures

To cross-reference a figure:

1. Retrieve the figure ID. The figure ID consists of a URL friendly equivalent of the image caption prefixed with `figure-`. To grab the exact ID, preview the page in Hugo, right click a figure and click _Inspect_ in your browser to grab the value of the figure’s `id` field.
2. Create a link to the figure in the form `[a link to a figure](#figure-FIGURES-CAPTION)`.

### Tags and Categories

Use `{{</* list_tags */>}}` to provide a list of linked tags or `{{</* list_categories */>}}` to provide a list of linked categories.

## Emojis

See the [Emoji cheat sheet](http://www.webpagefx.com/tools/emoji-cheat-sheet/) for available emoticons. The following serves as an example, but you should remove the spaces between each emoji name and pair of semicolons:

    I : heart : Schoolnotes : smile :

I :heart: Schoolnotes :smile:

## Icons

This site supports a wide range of icons from [_Font Awesome_](https://fontawesome.com/icons?d=gallery) and [_Academicons_](https://jpswalsh.github.io/academicons/) in addition to [emojis](#emojis).

Here are some examples using the _icon_ shortcode to render icons:

```markdown
{{</* icon name="terminal" pack="fas" */>}} Terminal
{{</* icon name="python" pack="fab" */>}} Python
{{</* icon name="r-project" pack="fab" */>}} R
```

renders as

{{< icon name="terminal" pack="fas" >}} Terminal
{{< icon name="python" pack="fab" >}} Python
{{< icon name="r-project" pack="fab" >}} R

Optionally, left and right padding can be added to an icon using the `padding_left="3"` and `padding_right="3"` options, respectively.

## Blockquote

    > This is a blockquote.

> This is a blockquote.

## Highlight quote

    This is a {{</* hl */>}}highlighted quote{{</* /hl */>}}.

This is a {{< hl >}}highlighted quote{{< /hl >}}.

## Mention a user

To mention someone, type `{{%/* mention "username" */%}}` where `username` corresponds to a user account on the site.


## Footnotes

    I have more [^1] to say.

    [^1]: Footnote example.

I have more [^1] to say.
[^1]: Footnote example.

## Embed Documents

The following kinds of document may be embedded into a page.

To embed **Google Documents** (e.g. slide deck), click *File > Publish to web > Embed* in Google Docs and copy the URL within the displayed `src="..."` attribute. Then paste the URL in the form:

    {{</* gdocs src="https://docs.google.com/..." */>}}

### Diagrams

Diagrams can be created in the open source [draw.io](https://draw.io) editor. The editor has support for almost any type of diagram, from simple to complex. A diagram can be easily embedded on posts by choosing **File > Embed > SVG** in the [draw.io](https://draw.io) editor and pasting the generated code into your page.

Alternatively, a diagram can be exported as an [image](#images) from any drawing software, or a [document/slide](#embed-documents) containing a diagram can be embedded.



## Twitter tweet

To include a single tweet, pass the tweet’s ID from the tweet's URL as parameter to the shortcode:

    {{</* tweet 666616452582129664 */>}}

## GitHub gist

    {{</* gist USERNAME GIST-ID  */>}}

## $\rm \LaTeX$ math

To render *inline* or *block* math, wrap your LaTeX math with `$...$` or `$$...$$`, respectively.

### Writing Math
- For writing math, this site uses MathJax
- If you are unfamiliar with MathJax, use the reference [here](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)

Example **math block**:

```tex
$$\gamma_{n} = \frac{
\left | \left (\mathbf x_{n} - \mathbf x_{n-1} \right )^T
\left [\nabla F (\mathbf x_{n}) - \nabla F (\mathbf x_{n-1}) \right ] \right |}
{\left \|\nabla F(\mathbf{x}_{n}) - \nabla F(\mathbf{x}_{n-1}) \right \|^2}$$
```

renders as

$$\gamma_{n} = \frac{ \left | \left (\mathbf x_{n} - \mathbf x_{n-1} \right )^T \left [\nabla F (\mathbf x_{n}) - \nabla F (\mathbf x_{n-1}) \right ] \right |}{\left \|\nabla F(\mathbf{x}_{n}) - \nabla F(\mathbf{x}_{n-1}) \right \|^2}$$

Example **inline math** `$\nabla F(\mathbf{x}_{n})$` renders as $\nabla F(\mathbf{x}_{n})$.

Example **multi-line math** using the `\\\\` math linebreak:

```tex
$$f(k;p_0^*) = \begin{cases} p_0^* & \text{if }k=1, \\\\
1-p_0^* & \text {if }k=0.\end{cases}$$
```

renders as

$$f(k;p_0^*) = \begin{cases} p_0^* & \text{if }k=1, \\\\
1-p_0^* & \text {if }k=0.\end{cases}$$

> These equations were put here specifically to annoy {{% mention "Pranav Sharma" %}} :stuck_out_tongue_closed_eyes:
>
> \- {{% mention "Jackson Taylor" %}}

## Table

Code:

```Markdown
| Command           | Description                    |
| ------------------| ------------------------------ |
| `hugo`            | Build your website.            |
| `hugo serve -w`   | View your website.             |
```

Result:

| Command           | Description                    |
| ------------------| ------------------------------ |
| `hugo`            | Build your website.            |
| `hugo serve -w`   | View your website.             |


## Asides

Schoolnotes supports a Markdown extension for asides, also referred to as *alerts*.

Asides are a useful feature that **add side content such as notes, hints, or warnings to your articles**. They are especially handy when writing educational tutorial-style articles or documentation.

You can enable this feature either by using the _Alert_ shortcode below. The paragraph will render as an aside with the default *note* style:

    {{%/* alert note */%}}
    A Markdown aside is useful for displaying notices, hints, or definitions to your readers.
    {{%/* /alert */%}}

This will display the following *note* block:

{{% alert note %}}
A Markdown aside is useful for displaying notices, hints, or definitions to your readers.
{{% /alert %}}

Alternatively, a warning can be displayed to the reader using the the _warning_ option:

    {{%/* alert warning */%}}
    Here's some important information...
    {{%/* /alert */%}}

This will display the following *warning* notice to the reader:

{{% alert warning %}}
Here's some important information...
{{% /alert %}}

## Table of Contents

A table of contents may be particularly useful for long posts or tutorial/documentation type content. Use the `{{%/* toc */%}}` shortcode anywhere you wish within your Markdown content to automatically generate a table of contents.

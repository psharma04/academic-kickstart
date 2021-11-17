---
# Page title
title: Why Markdown is the best thing since sliced bread.

# Title for the menu link if you wish to use a shorter link title, otherwise remove this option.
linktitle: Introduction to Markdown

# Page summary for search engines.
summary: Study skills, tips, and tricks for school.
highlight: true
# Date page published
date: 2021-08-19
math: false
draft: true
# Academic page type (do not modify).
type: book

# Position of this page in the menu. Remove this option to sort alphabetically.
weight: 1
---

{{< toc hide_on="xl" >}}

## What is Markdown?

Markdown may be the best thing I've ever learned for being faster at typing. It's essentially a method for formatting structured documents in what's known as "plaintext" (in other words, you can copy-paste it, change fonts, etc.).

Markdown is amazing because it's completely cross-platform: If I type up a document in Markdown and send it to someone else, they'll view it exactly as I wrote it, but with infinite customisability. Contrast this with something like a [PDF](https://helpx.adobe.com/au/acrobat/using/pdf-x-pdf-a-pdf.html) or [Word](https://fossbytes.com/doc-vs-docx-file-difference-use/) document, which has a billion different styles and standards (What on Earth is "Compatibility Mode" ???), and which will always be in light mode unless you do some technical wizardry (and woe betide those who come across an image).



That last paragraph was more me complaining about PDF/* and DOC* formats, so let's try this again. The post you're reading right now was originally written in Markdown, but renders the way you see it in your browser right now. However, when I typed it, it looked like this:

![CleanShot 2021-08-19 at 21.23.29](https://cdn.statically.io/img/raw.githubusercontent.com/f=auto/psharma04/image-repo/main/uploads/O0WxNS20210819.png)

And in the content management system, it looks like this:

![CleanShot 2021-08-19 at 21.25.24@2x](https://cdn.statically.io/img/raw.githubusercontent.com/f=auto/psharma04/image-repo/main/uploads/pFkce920210819.png)

And on a Light Mode person's computer, it'd probably look like this:

![CleanShot 2021-08-19 at 21.25.54](https://cdn.statically.io/img/raw.githubusercontent.com/f=auto/psharma04/image-repo/main/uploads/rk7gko20210819.png)

But it's all literally the same file, you can [take a look here.](https://cdn.jsdelivr.net/gh/psharma04/academic-kickstart@master/content/skills/markdown.md) (Open it in Notepad/TextEdit/nano if you don't have a Markdown reader installed)

### It just looks like plain text though...

That's the magic of it! Markdown is literally a plaintext format, meaning all of the styling bits are done by a Markdown viewer. However, all the styling elements are standardised across everything, which is almost the opposite of how everything else seems to work. Essentially, you can have a completely opposite stylesheet loaded on your computer and someone else's, but the information will be formatted exactly the same!

### Okay but how is this relevant to productivity?

The universality of Markdown is what makes it so good for productivity. Markdown has basic functionality, and if you've used HTML before, you'll recognise most of this:

## Headers

```no-highlight
# H1
## H2
### H3
#### H4
##### H5
###### H6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------
```

# H1

## H2

### H3

#### H4

##### H5

###### H6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------



## Emphasis

```no-highlight
Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~
```

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~




## Lists

(In this example, leading and trailing spaces are shown with with dots: ⋅)

```no-highlight
1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses
```

1. First ordered list item
2. Another item
   - Unordered sub-list.

1. Actual numbers don't matter, just that it's a number

     1. Ordered sub-list

2. And another item.

   You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

   To have a line break without a paragraph, you will need to use two trailing spaces.  
   Note that this line is separate, but within the same paragraph.  
   (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks

- Or minuses

+ Or pluses



## Links

There are two ways to create links.

```no-highlight
[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com
```

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: https://hsc.one
[link text itself]: https://google.com



## Images

```no-highlight
Here's our logo (hover to see the title text):

Inline-style:
![alt text](https://hsc.one/assets/images/icon.png "Logo Title Text 1")

Reference-style (disgusting way to do it, but its in spec so if you hate everyone who will ever see your content, use this):
![alt text][logo]

[logo]: https://hsc.one/assets/images/icon.png "Logo Title Text 2"
```

Here's our logo (hover to see the title text):

Inline-style:
![alt text](https://cdn.statically.io/img/raw.githubusercontent.com/f=auto/psharma04/image-repo/main/uploads/o2vWe220210819.png "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: https://hsc.one/assets/images/icon.png "Logo Title Text 2"

## Code and Syntax Highlighting

Code blocks are part of the Markdown spec, but syntax highlighting isn't. However, many renderers -- like Github's and *Markdown Here* -- support syntax highlighting. Which languages are supported and how those language names should be written will vary from renderer to renderer. *Markdown Here* supports highlighting for dozens of languages (and not-really-languages, like diffs and HTTP headers); to see the complete list, and how to write the language names, see the [highlight.js demo page](http://softwaremaniacs.org/media/soft/highlight/test.html).

```no-highlight
Inline `code` has `back-ticks around` it.
```

Inline `code` has `back-ticks around` it.

Blocks of code are either fenced by lines with three back-ticks <code>```</code>, or are indented with four spaces. I recommend only using the fenced code blocks -- they're easier and only they support syntax highlighting.

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print s
```

```
No language indicated, so no syntax highlighting.
But let's throw in a &lt;b&gt;tag&lt;/b&gt;.
```



```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print s
```

```
No language indicated, so no syntax highlighting in Markdown Here (varies on Github).
But let's throw in a <b>tag</b>.
```

## Tables

Tables aren't part of the core Markdown spec, but they are part of GFM and *Markdown Here* supports them. They are an easy way of adding tables to your email -- a task that would otherwise require copy-pasting from another application.

```no-highlight
Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3
```

Colons can be used to align columns.

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| *Still*  | `renders` | **nicely** |
| 1        | 2         | 3          |

## Blockquotes

```no-highlight
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.
```

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.



## Horizontal Rule

```
Three or more...

---

Hyphens

***

Asterisks

___

Underscores
```

Three or more...

---

Hyphens

***

Asterisks

___

Underscores

## Wait what's all this about GFM and Core Markdown?

Essentially there's 2 major versions of Markdown: Github-Flavoured Markdown (GFM), and Core Markdown. If something claims to support Markdown, it DEFINITELY supports, Core, and PROBABLY supports GFM. However, every Markdown client tends to add extra features and things on top of whatever base they use.



Different Markdown processors also use different "engines", which is basically the bit which transforms the funky-looking text into actually formatted content. For the most part though, you don't need to worry about what engine you're using unless you're trying to render 1200 files at once, not that anyone would ever do that...

![CleanShot 2021-08-19 at 21.50.33](https://cdn.statically.io/img/raw.githubusercontent.com/f=auto/psharma04/image-repo/main/uploads/vcaFMV20210819.png)

## Okay but you still haven't showed me how to use it...

That... probably should have gone earlier in the post, you're right. Props to you for getting this far through my ramblings though!

If you're on MacOS, my favourite Markdown client so far has been [Typora](https://typora.io/). It's free, has live syntax conversion (it formats it as you type the Markdown), and has no weird stuff going on in the background. [You can also download my theme for Typora here.](https://github.com/psharma04/image-repo/blob/main/fileshare/psharma-typora-theme.zip)

{{< video src="https://typora.io/img/beta.mp4" >}}





{{< callout note >}}

Found this post useful? [Support us on Patreon.](https://patreon.com/schoolnotes)

{{< /callout >}}

---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Mathematics Advanced: Sequences and Series"
subtitle: "Module 1 for Mathematics Advanced (HSC)"
summary: "Module 1 for Mathematics Advanced (HSC)"
authors: [Jackson Taylor, Pranav Sharma]
tags: [Year 12, Mathematics Advanced, Mathematics]
categories: [Year 12, Mathematics Advanced, Mathematics]
date: 2021-01-28T18:39:34+11:00
lastmod: 2021-01-28T18:39:34+11:00
featured: false
draft: false
math: true
# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

{{< toc >}}

{{<callout info>}}
NOTE: This guide assumes that you fully understand the principles of the preliminary Advanced mathematics course.
{{</callout>}}
## Sequence and Series
- There are 3 types of sequences: arithmetic, geometric, and summing
- Sequences are also known as *progressions*

### Arithmetic Sequences
- In arithmetic sequences, the difference between successive terms is *constant*:
  > Examples:
  >
  > $d=T_n -T_{n-1},n\geq 2$
  >
  > $T_n -a+(n-1)d \text{ where } a=T_1$
- Suppose 3 numbers, $\text{a, b, }$and $\text{m}$, form an arithmetic sequence when $m-a=b-m$, which can be rearranged as $m=\frac{a+b}{2}$:
  - $m$ is called the *arithmetic mean* of $a$ and $b$

### Geometric Sequences
- Geometric series have a non-zero *ratio* between successive terms:
> Examples:
>
> $\frac{T_n}{T_{n-1}}=r,n\geq 2$
>
> $T_n =a\cdot r^{n-1} \text{ where }a=T_{1}$
-  Three numbers, $\text{a, b, }$and $\text{m}$, form a geometric progression, when $\frac{b}{g}=\frac{g}{a}$, and therefore when $g^2 =a\cdot b$
  - $g$ is the *geometric mean* of *a, b*

{{< callout warning >}}
0 CANNOT be a term in a Geometric Progression!
{{</callout >}}

### Summing Sequences
- Summing sequences occur when an infinite number of terms are added together:
$$S_n =T_1 +T_2 +T_3 +...+ T_n$$
- Summing sequences can be represented using *sigma notation*:

$$\sum_{k=1}^{n} 2^{-n} = T_1 +T_2 +T_3 +...+ T_n =S_n$$

### Sum of an Arithmetic Progression
Let $l=T_n$ be the last term of an AP with $T_1 =a$ and difference $d$. It can be therefore determined that:
  - $S_n=a+(a+d)+(a+2d)+(a+3d)+...+(l-2d)+(l-d)+l$
  - $S_n = l + (l−d) + (l − 2d ) + . . . + (a + 2d ) + (a + d ) + a$
- Combining the two equations gives $2S_n =n(a+l)$, as there are $n$ terms
- Therefore, $S_n =\frac{1}{2}n(a+l)$
- Since $l=T_n =a+(n-1)d,$ we can derive an alternative formula:
  - $S_n =\frac{1}{2}n(2a+(n-1)d)$
  - $\therefore S_n =\sum_{k=1}^{n}(a+(k-1)d)$
### Sum of a Geometric Progession:
To find the sum of a geometric sequence:
- $S_{n}=a+ar+ar^{2} +...+ar^{n-2}+ar^{n-1}$
- $r\cdot S_{n}=ar+ar^{2}+ar^{3} +...+ar^{n-1}+ar^{n}$

Subtract the second equation from the first:
- $(r-1)S_n =ar^{n}-a$
- $S_n=\frac{a(r^{n}-1)}{r-1} \text{ when }\mid r\mid\lt 1$

For when $\mid r\mid\gt 1,$ subtract the first equation from the second:
- $(1-r)S_{n}=a-ar^{n}$
- $S_{n} =\frac{a(1-r^n)}{1-r} \text{ when }\mid r\mid\gt 1$

## Limiting Sum
If $\mid r\mid\lt 1,$ then $\displaystyle{\lim_{n\to\infty}r^{n}=0},$ therefore:
- $\displaystyle{\lim_{n\to\infty}T_{n}=0}$
- $S_{\infty}=\displaystyle{\lim_{n\to\infty}S_{n}=\frac{a}{1-r}}$
- Progressions with limiting sums are said to *converge* on a value
  - For example, $\sum^{\infty}_{n=1}ar^{n-1} \text{ converges to }\frac{a}{1-r}$
### Representing Recurring Decimals
If we want to express $1.1\overline{037}$ as a fraction, we can write it as a Geometric Progression $(1.1+0.0037+0.0000037+...):$
- In the brackets, there is a limiting sum: $S_{\infty}=\frac{0.0037}{1-0.001}$
- $s_{\infty}=\frac{1}{270}$
- BUT we need to add 1.1 to this sum:
- $\therefore 1.1\overline{037}=\frac{149}{135}$

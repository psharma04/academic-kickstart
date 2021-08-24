---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Mathematics Advanced: Graphs and Equations"
subtitle: "Module 3 for Mathematics Advanced (HSC)"
summary: "Module 3 for Mathematics Advanced (HSC)"
authors: [Jackson Taylor, Pranav Sharma]
tags: [Year 12, Mathematics Advanced, Graphs and Equations, Mathematics, Module 3, Asymptotes, Dilations, Transformations]
categories: [Year 12, Mathematics Advanced, Graphs and Equations]
date: 2021-01-30T13:45:12+11:00
lastmod: 2021-01-30T13:45:12+11:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false
math: true
# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---
{{< toc >}}

## Vertical and Horizontal Asymptotes
- If the denominator of a function has a zero at $x=a$, and the numerator is non-zero at $x=a$, then the vertical line $x=a$ is an asymptote of $y=f(x)$
- For rational functions (numerator and denominator are both polynomials), dividing the top and bottom by the highest power of $x$ in the denominator reveals the behaviour as $x$ tends to infinity
#### Example
Find the horizontal asymptote of $y=\frac{x-1}{x^{2}-4}$
  > $$\color{#F66497}y=\frac{x-1}{x^{2}-4}\rightarrow \frac{\frac{1}{x}-\frac{1}{x^{2}}}{1-\frac{4}{x^{2}}}$$
  > $$\color{#F66497}\lim_{x\to\pm\infty}\frac{\frac{1}{x}-\frac{1}{x^{2}}}{1-\frac{4}{x^{2}}}\color{orange}=\frac{0}{1}=0$$
  > $$\color{orange}\therefore y=0\text{ is a horizontal asymptote.}$$
#### Practice Question
Find the horizontal asymptote of $f(x)=\frac{e^x +e^{-x}}{2e^x}$.
{{< spoiler text="Toggle Solution">}}
$$\lim_{x\to\pm\infty}\frac{e^x +e^{-x}}{2e^x}$$
$$\text{It is known that }\lim_{x\to\infty}e^{-x}=0\text{ and }\lim_{x\to -\infty}e^{x}=0$$

$$\text{For }x\to\infty\text{, divide }f(x)\text{ by }e^x\text{, for }x\to -\infty\text{, divide }f(x)\text{ by }e^{-x}.$$
$$\therefore \text{asymptotes at }\lim_{x\to\infty} \frac{1+e^{-2x}}{2}\text{ and }\lim_{x\to -\infty}\frac{e^{2x}+1}{2e^{2x}}$$
$$\lim_{x\to\infty} \frac{1+e^{-2x}}{2}=\frac{1}{2}$$
$$\lim_{x\to -\infty}\frac{e^{2x}+1}{2e^{2x}}\text{ tends to infinity}$$
$$\color{orange}{\text{Therefore, there is 1 horizontal asymptote is at }y=\frac{1}{2}}$$
{{</spoiler>}}
## Shading Regions (Question Guide)
Some questions will ask you to graph inequalities. In these cases, you may need to shade part of the graph, or draw dotted lines instead of solid lines.
1. Draw the curve, dotted line if an area is excluded $(\gt or \lt)$, solid if it is included $(\geq or \leq)$.
2. Substitute values from each side of the graph to determine where to shade.
   - For $\cup$, only include the intersection if **both boundaries are unbroken** at that point.
   - For $\cap$, include the intersection as long as **at least one of the graphs is unbroken**.
## Dilations
- To dilate a graph vertically by a factor of $k$, replace $y$ with $\frac{y}{k}$ and rearrange.
> $\color{orange}{y=f(x)\to \frac{y}{a}=f(x)}$
>
> $\color{orange}{\therefore y=a\cdot f(x)}$
- To dilate a graph horizontally by a factor of $a$, replace $x$ with $\frac{x}{a}$.
> $\color{orange}{y=f(x)\to y=f(\frac{x}{a})}$
- **Enlargements** are when $k=a\neq1$
- Note that reflections are dilations with a factor $a\lt 0$.
## Commutable Transformations
- Commutable transformations are transformations which can occur in any order
- Not all transformations are commutable:
  - Two translations ALWAYS commute (i.e. x and y translations can be applied in any order)
  - Two dilations ALWAYS commute (i.e. dilating vertically and dilating horizontally can occur in either order)
  - Transformations on different axes ALWAYS commute (i.e. horizontal translation and vertical dilation, or vice versa)
  - Any other transformations DO NOT COMMUTE
- Two steps can be taken to convert $y=f(x)\to y=k\cdot f(a(x+b))+c$:
  1. Dilate horizontally by a factor of \frac{1}{a}, then shift left $b$ units
  2. Dilate vertically by factor $k$, then shift up $c$ units
## Transformations of Trigonometric Graphs
- $y=a\cdot sin(x)$ and $y=a\cdot sin(x)$ both have amplitude $a$.
- $y=sin(nx)$ and $y=sin(nx)$ both have period $\frac{2\pi}{n}$
- $y=tan(nx)$ has period $\frac{\pi}{n}$
- The initial phase of a trig function is the angle when $x=0$:
  - $y=sin(x+\frac{\pi}{3})$ has phase $\frac{\pi}{3}$
- The mean value of a wave is the mean of its maximum and minimum values:
  - $y=sin(x)+c$ and $y=cos(x)+c$ have mean values of $c$

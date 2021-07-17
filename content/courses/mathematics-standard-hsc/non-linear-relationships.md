---
title: "Non-Linear Relationships"
date: 2021-07-16T19:52:59+10:00
draft: false
math: true
type: book
subtitle: "Overview of the non-linear relationships module for standard mathematics."
summary: "Overview of the non-linear relationships module for standard mathematics."
authors: [Pranav Sharma]
tags: [Year 12, Mathematics Standard, Non-Linear Functions, HSC, Hyperbola, Parabola]
categories: [Year 12, Mathematics Standard, Non-Linear Functions, HSC]
---

{{< toc hide_on="xl" >}}

---

{{< callout warning >}}

This post includes graphs and lots of formulae. If page-loading is slow, that's to be expected on older computers (and definitely on phones).

{{< /callout >}}

## Exponential Functions

- Exponential functions take the form $y=a^{x}$. $a$ is a constant,such as 2, 50, π, $\frac{1}{3}$, etc.

{{< figure src="https://cdn.statically.io/gh/psharma04/image-repo/main/uploads/exponential-1.min.svg" theme="light" >}}

- $a$ can also be a negative value:

{{< figure src="https://cdn.statically.io/gh/psharma04/image-repo/main/uploads/exponential-2.min.svg" theme="light" >}}

- Note the green line in both graphs: this is called an *asymptote*.
  - Asymptotes are lines which a graph will approach, but never reach.
  - For example, no matter how small the value of $x$, for the graph $y=2^x$, y will never equal zero (Try it for yourself if you want).
  - There are three kinds of asymptotes, but only two we care about right now: vertical and horizontal.
    - Horizontal asymptotes are parallel to the x-axis, and are represented as $y=b$, where b is some constant
    - Vertical asymptotes are parallel to the y-axis, and are represented as $x=b$, where b is some constant.
    - So the graph $y=2^x$ has a horizontal asymptote at $y=0$, meaning that the graph will approach zero, but never reach it.

{{< callout note >}}

A slightly more technical definition:

> An asymptote of a curve is a line, such that the distance between the curve and the line approaches zero as either the x or y coordinates (or both) tend to infinity.

- Exponential growth occurs when $x$ is greater than 1, while exponential decay occurs when $x$ is less than 1.

{{< /callout >}}

## Quadratic Functions

- Quadratic Functions take the form $y=ax^{2}+bx+c$, where a, b, and c are constants.
- When graphed, quadratic functions are referred to as "parabolas".

{{< figure src="https://cdn.statically.io/gh/psharma04/image-repo/main/uploads/quadratic-1.min.svg" theme="light" >}}

- If $a$ is positive, the parabola has a maximum turning point. If $a$ is negative, the parabola has a minimum turning point.

- Quadratics have several properties, which you might be asked about:

  - Vertex/Turning point $(h)$: $x=\frac{-b}{2a}$, substitute the value of x into the original equation to get the y value.

  - Axis of Symmetry: $x=h$ (this should be a vertical line)

  - Roots/Zeroes: These are just the x-intercepts, and can be calculated using the Quadratic Formula:

    $\text{When }ax^2+bx+c=0, x=\frac{-b\pm\sqrt{b^{2}-4ac}}{2a}$

    - Note the $\pm$ in the formula: there can be 0, 1, or 2 roots of a quadratic, depending on the value of the bit under the square root.
    - If the bit under the square root is negative, you'll have no roots, meaning the graph never crosses the x-axis.
    - If the bit under the square root is 0, you have 1 root, meaning the vertex is on the x-axis.
    - If the bit under the square root is positive, you have 2 roots, meaning the graph cuts the x-axis twice.

## Hyperbolas

- Hyperbolas (also known as *reciprocal functions*) are used to express when two values (x and y) are *inversely proportional*

{{< figure src="https://cdn.statically.io/gh/psharma04/image-repo/main/uploads/hyperbola-1.min.svg" theme="light" >}}

- Inversely proportional means that as one value increases, the other decreases, and vice versa.
- Hyperbolas take the form $y=\frac{a}{x}$ where a is a constant.
- Hyperbolas have 2 asymptotes: $x=0$ and $y=0$.
  - Take a look at the formula, and you'll see that if x=0, you'd need to divide by 0, which isn't a thing.
  - The formula can be rearranged to $xy=a$, then to $x=\frac{a}{y}$, and we get the same issue.
  - This is usually how we end up with asymptotes: when we need to divide by 0.

{{< callout note >}}

Found this post useful? [Support us on Patreon.](/patreon/)

{{< /callout >}}

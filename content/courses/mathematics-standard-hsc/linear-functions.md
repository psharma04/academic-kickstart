---
title: "Linear Functions"
date: 2021-02-21T19:09:05+11:00
draft: true
math: true
type: book
subtitle: "Overview of the linear functions module for standard mathematics."
summary: "Overview of the linear functions module for standard mathematics."
authors: [Pranav Sharma]
tags: [Year 12, Mathematics Standard, Linear Functions]
categories: [Year 12, Mathematics Standard, Linear Functions]
---

## What is a Linear Function?
- A linear function is an equation with two variables that takes the shape of a straight line
- Linear functions have 2 variables: $x$ and $y$
- They usually take the form of $y=mx+b,$ where m and b are numerical values (e.g. 4, 2.8, $\pi$, $\sqrt[3]{7},$ etc.)
- $b$ can be equal to zero, but $m$ cannot
- Sometimes, linear equations will come in the form $0=ax+by+c$ or $ax+by+c=d$. In these cases, it's usually best to rearrange the equation into the form of $y=mx+b$

{{< callout warning >}}
Remember that $\pi$ is just an irrational number (3.14159265...).
{{< /callout >}}

## How do I Graph a Linear Function?
{{< callout warning >}}
We're going to keep updating the method throughout this post, so make sure you leave space in your notes to add more content as we go.
{{< /callout >}}
1. construct a table of values, where the independent variable $(x)$ is the first row, and the dependent variable $(y)$ is the second row
     - For example, for $y=2x+7$:

| $x$ | -2 | -1 | 0 | 1 | 2  |
|-----|----|----|---|---|----|
| $y$ | 3  | 5  | 7 | 9 | 11 |

2. Draw a number plane with the $x$ variable on the horizontal axis, and the $y$ variable on the vertical axis
3. Plot the points from your table of values onto the number plane
4. Connect the points together with a straight line (USE A RULER!!!)
## How do I calculate the gradient of a linear function?
- Sometimes, you don't have to! If the equation is in the form $y=mx+b,$ $m$ is the gradient :smile:
- If you're given a table of values, you can use the *slope-intercept formula* to calculate the value of $m$:
$$\color{orange}{m=\frac{y_{2}-y_{1}}{x_{2}-x_{1}}}$$
- $y_2$ and $y_1$ are any two y values from the table of values, while $x_2$ and $x_1$ are the x-values which correspond to $y_2$ and $y_1$
  - For example, using the table of values below:
  | $x$ | -2 | -1 | 0 | 1 | 2  |
  |-----|----|----|---|---|----|
  | $y$ | 3  | 5  | 7 | 9 | 11 |
  - We can take $y_2 =5,y_1=7,$ which means $x_2=-1$ and $x_1=0$. Substituting these into the formula:
 $$\begin{gather*}m=\frac{5-7}{-1-0} \\\\ =\frac{-2}{-1}=\textcolor{orange}{2}\end{gather*}$$
  - Which matches the original equation we had $(y=\textcolor{orange}{2}{x+7)}$
  {{< callout success >}}
  Pretty neat, huh?
  {{< /callout >}}
## How do I find where a linear equation crosses the y-axis?
- Like with the gradient, the general form of a linear equation gives this away
- The value of $b$ is the y-coordinate of the y-intercept (the x-coordinate is 0)
- Therefore, for all linear equations in general form, the y-intercept (also known as $y_0$) is at $(0,b)$
- If you don't have $b,$ find $m$ first, and then substitute $x=0,$

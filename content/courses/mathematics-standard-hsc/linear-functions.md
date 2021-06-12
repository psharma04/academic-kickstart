---
title: "Linear Functions"
date: 2021-02-21T19:09:05+11:00
draft: false
math: true
type: book
subtitle: "Overview of the linear functions module for standard mathematics."
summary: "Overview of the linear functions module for standard mathematics."
authors: [Pranav Sharma]
tags: [Year 12, Mathematics Standard, Linear Functions, HSC, Simultaneous Equations]
categories: [Year 12, Mathematics Standard, Linear Functions, HSC, Simultaneous Equations]
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
- If you don't have $b,$ find $m$ first, and then substitute $x=0,y=y_0$, and rearrange for $b$

### How can I determine if 2 lines are parallel?

- If two lines have the same gradient $(m),$ but different y-intercepts $(b),$ then they are parallel.

<iframe src="https://www.desmos.com/calculator/lcezuhauiy?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

## What are simultaneous equations?

- Simultaneous equations are equations with more than 1 unknown, that have an infinite number of solutions.
  - For example, $y=2x+2$ could be (1,4), (2,6), or any valid value of $x$.
- To solve simultaneous equations, we use a second equation alongside it. 
  - For example, $y=2x+2$ and $y=3x+1$.
  - There is only one solution for which both the equations are true.
- As a general rule, for every unknown value, you need at least that many equations to find a solution.
  - For linear equations, there will usually be 2 unknowns, so you need 2 equations to find 1 solution.

### How do we solve simultaneous equations?

- There are 2 main methods: graphical and algebraic. 
- Graphical is simpler, but can be less precise, while algebraic takes more practice to get right, but once you do, it's much quicker.
- You may be asked to solve simultaneous equations using a specific method, which is why we'll go through both.
- We'll use the pair from earlier ($y=2x+2$ and $y=3x+1$) for the examples.

#### Graphical Method

- This method is pretty straightforward: graph both equations and see where they intersect.
- The point of intersection is your solution.

{{< callout note >}}

Because I'm lazy, I just did it in Desmos. In an exam, you'll be allocated up to 3 marks for drawing the graphs.

{{< //callout >}}

<iframe src="https://www.desmos.com/calculator/gywwn3sgdz?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

- $(1,4)$ is the point of intersection.

#### Solving Algebraically by Substitution

- So there are actually 2 methods of algebraically solving simultaneous equations, but each has a slightly different use case. Substitution is slightly easier, so we'll start with this one.

> Solve $y=2x+2 \bbox[5px, border: 2px solid grey]{1},y=3x+1 \bbox[5px, border: 2px solid grey]{2}$ using the substitution method.

1. Rearrange one of the equations to make $x$ the subject.

   - If one of the equations has $m=1,$ it's usually easier to rearrange that one.
   - We'll rearrange $y=2x+2$.

   > $\begin{gather*}y=2x+2 \\\\ y-2=2x \\\\ \frac{y-2}{2}=x \bbox[5px, border: 2px solid grey]{3}\end{gather*}$

2. Substitute this into the equation you didn't rearrange.

   - Basically, replace $x$ in $\bbox[5px, border: 2px solid grey]{2}$ with equation $\bbox[5px, border: 2px solid grey]{3}$

   > $y=3\left(\frac{y-2}{2}\right)+1$

3. Rearrange to make $y$ the subject, then solve.

   > $\begin{gather*}y=\frac{3y-6}{2}+1 \\\\ y=\frac{3y}{2}-3+1\\\\y=\frac{3y}{2}-2\\\\y-\frac{3y}{2}=-2 \\\\ -\frac{y}{2}=-2 \\\\ y-2\times-2 \\\\ y=4\end{gather*}$

4. Take your newly found $y$ value, and substitute it into equation $\bbox[5px, border: 2px solid grey]{3}$ to find $x$

   > $x=\frac{4-2}{2}=\frac{2}{2}=1$

5. Answer the question.

   > Therefore $x=1, y=4.$

{{< callout note >}}

Yes, it seems longer, but when you have to draw up the axes and the grid and everything else, it can end up faster than graphical method. It really just depends on your algebra skills.

{{< /callout >}}

#### Solving Algebraically by Elimination

- This method is essentially subtraction.

> Solve $y=2x+2 \bbox[5px, border: 2px solid grey]{1},y=3x+1 \bbox[5px, border: 2px solid grey]{2}$ using the elimination method.

1. Convert equations into the form $ax+by=c$

> For equation 1:
>
> $\begin{gather*}0=2x+2-y \\\\ -2=2x-y \\\\ 2=y-2x\end{gather*}$
>
> For equation 2:
>
> $\begin{gather*}0=3x+1-y \\\\ -1=3x-y \\\\ 1=y-3x\end{gather*}$

2. Subtract one from the other

   - It doesn't really matter which you subtract from which, you get the same answer either way.

   > $\begin{gather*} \phantom{-y}2=y-2x \\\\ -\phantom{y}\underline{1=y-3x} \\\\ \phantom{-y}1=0y+1x \end{gather*}$
   >
   > $\therefore x=1$

3. Substitute the resulting x value into one of the original equations

   > $y=(2\times1)+2=2+2=4$

4. Answer the question.

   > Therefore $x=1, y=4.$


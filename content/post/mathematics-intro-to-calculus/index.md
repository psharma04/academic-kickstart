---
title: "Mathematics: Introduction to Calculus"
author: Pranav Sharma, Jackson Taylor
date: 2020-07-03T02:14:30.489Z
draft: "False"
featured: false
math: true
authors:
  - Pranav Sharma
  - Jackson Taylor
tags:
  - Mathematics Advanced
categories:
  - Year 11
---

<!-- Page-Specific Commands. DO NOT EDIT!!! -->
{{% toc %}}
\$ \newcommand{\ddx}[1]{\frac{d #1}{dx}} \$
<!-- End custom commands block -->
- Calculus is the study of continous change
- Calculus is used to find the gradient of a graph, the maximum and minimum values, the area under or over a graph, inflection points, etc.
## Derivation
- A derivation is a function which generalises some property of another function
- the derivative of \\(f(x)\\) (say "f of x") is \\(f\prime (x)\\) (say "f prime of x")
### Rules (Copy into notes)
- \\(f\prime (x)=\ddx{y}x=y\prime\\)
- \\(f\prime(a)=0\\) if \\(a\\) is a number/constant
- \\(f\prime(ax)=a\\) if \\(a\\) is a number/constant
- \\(f\prime(ax^n )=anx^{n-1}\\) if \\(a\\) and \\(n\\) are a numbers/constants
- \\(f\prime(e^x )=e^x \\)
- \\(f\prime(a^x )=\ln(a)a^x \\)
- \\( ln(x)=\frac{1}{\ln(x)}\cdot \frac{1}{x} \\)

### Common Graphs
#### Quadratic

<iframe src="https://www.desmos.com/calculator/lgv3xt3hfq?embed" width="500px" height="500px" style="border: 1px solid #ccc" frameborder=0></iframe>

#### Cubic

<iframe src="https://www.desmos.com/calculator/z3rhzpazao?embed" width="500px" height="500px" style="border: 1px solid #ccc" frameborder=0></iframe>

#### Quartic

<iframe src="https://www.desmos.com/calculator/5cxzobappa?embed" width="500px" height="500px" style="border: 1px solid #ccc" frameborder=0></iframe>

#### Hyperbola

<iframe src="https://www.desmos.com/calculator/yghldeidlg?embed" width="500px" height="500px" style="border: 1px solid #ccc" frameborder=0></iframe>

#### Exponentials other than \\(e^x \\)

<iframe src="https://www.desmos.com/calculator/fhxymgf48e?embed" width="500px" height="500px" style="border: 1px solid #ccc" frameborder=0></iframe>

#### \\(ln \\)

<iframe src="https://www.desmos.com/calculator/9oq7db8if2?embed" width="500px" height="500px" style="border: 1px solid #ccc" frameborder=0></iframe>

## First Principle
- The first principle is used to calculate the derivative of a graph
> \\(f\prime x=\displaystyle {\lim_{h\to 0} \frac{f(x+h)-f(x)}{h}}\\)
#### Example of First Principle
###### Find the first derivative of \\(f(x)=x^4+5x+3\\)
1) Define f(x)
> \\(f(x)=x^4+5x+3\\)

2) define f(x+h)
> \\(f(x+h)=(x+h)^4+5(x+h)+3\\)

3) State the First Principle
> \\(f\prime x=\displaystyle {\lim_{h\to 0
  } \frac{f(x+h)-f(x)}{h}}\\)

5) Substitute f(x) and f(x+h) into First Principle
> \\(=\displaystyle {\lim_{h\to 0}\frac{(x+h)^4+5(x+h)+3-(x^4+5x+3)}{h}}\\)

6) Expand f(x) and f(x+h) where possible
> \\(=\frac{x^4+4x^3h+6x^2h^2+4xh^3+h^4+5x+5h+3-x^4-5x-3}{h}\\)

7) Eliminate as many variables as possible from the numerator
> \\(\require{cancel}=\frac{\cancel{x^4}+4x^3h+6x^2h^2+4xh^3+h^4+\cancel{5x}+5h\cancel{+3}\cancel{-x^4}\cancel{-5x}\cancel{-3}}{h}\\)
> \\(=\frac{4x^{3}h+6x^2 h^2 +4xh^3 +h^4 +5h}{h}\\)

8) factorise numerator to eliminate h
> \\(=\frac{\cancel{h}(4x^3 +6x^2 h +4xh^2 +h^3 +5)}{\cancel{h}}\\)
> \\(=4x^3 +6x^2 h +4xh^2 +h^3 +5)

9) Substitute \\(h=0\\)
> \\(\require{enclose}(4x^3) \cancel{+(6x^2\cdot 0)} +\cancel{+(4x\cdot (0)^2)} \cancel{+(0)^3} +5\\)
> \\(\color{teal}{\enclose{roundedbox}{=4x^3 +5}}\\)
10) Answer the question
> \\(\color{green}{\enclose{roundedbox}{\therefore \ddx{}(x^4+5x+3)=4x^3 +5}}\\)

## Shortcuts for the First Princple
- Here's some convenient shortcuts for people who don't want to waste time doing all the steps of the First Principle
- Use these unless a question SPECIFICALLY asks for First Principle
- Note that anything except $x$, $y$ and $t$ represent NUMBERS
- Remember, differentiation is just finding the gradient of a curve!!!
1) $\ddx{}(a) = 0$
2) $\ddx{}ax=a$
3) $\ddx{}ax^n =(a\cdot n)x^{n-1}$
4) $\ddx{}(A+B)=\ddx{}(A)+\ddx{}(B)$
5) $\ddx{}(A-B)=\ddx{}(A)-\ddx{}(B)$
6) $(AB)\prime = A\prime B+B\prime A$
7) $\ddx{}\frac{A}{B}=\frac{A\prime B - B\prime A}{B^2}$
8) $\ddx{}((f(x))^n )= n(f\prime (x))^{n-1}$
9) $\ddx{y}=\frac{dy}{du}\cdot\ddx{u}$
10) $\ddx{}af(x)=a(f\prime (x))$
{{% callout note %}}
\\(\ddx{} \Leftarrow\Rightarrow\\) differentiate with respect to $x$
\\(\ddx{y} \Leftarrow\Rightarrow\ddx{}(y)\Leftarrow\Rightarrow y\prime\Leftarrow\Rightarrow\\) differentiate $y$ with respect to $x$
{{% /callout %}}
## Graphing Derivatives
| \\(f(x)\\) | \\(\ddx{}(f(x))\\) |
|-|-|
| Turning Points/Standing Points | \\(x\\)-Intercepts |
| Points of Inflection | Turning Points |
| Horizontal Points of Inflection | Turning points ON THE X-AXIS |
## Chain Rule
- The chain rule is used when one function is acting on another (e.g. \\(f(g(x))\\)), and you need to find the derivative of the whole thing
> \\(\color{lightblue}{f(g(x))\prime=f\prime(g(x))g\cdot\prime(x)}\\)
### Steps
> \\(\color{lightgreen}{\text{Example question: find }f\prime(x)\text{ where }f(x)=(3x^2 +5)^{10}}\\)
1) Bring the exponent to the front (Parentheses stay the same)
> \\(10(3x^2 +5)^{10}\\)
2) Subtract 1 from exponent
> \\(10(3x^2 +5)^{9}\\)
3) Multiply by derivative of inside
> \\(10(3x^2 +5)^{9}\cdot (6x)\\)
4) Solve and answer the question
> \\(\therefore f\prime(x)=60x\left(3x^2+5\right)^9\\)
## Product Rule (UWU Rule)
- The product rule is used to find the product of two differentials when given the original multipliers, for example:
> \\(\color{lightgreen}{\text{Find }f\prime(x)\text{ where }f(x)=(2x+5)(4x^2 +5)}\\)
- The product rule is as follows:
> \\(\color{red}{\text{If }f(x)=u(x)\cdot v(x)\text{, then }f\prime(x)=u(x)\prime v(x)+v(x)\prime u(x)}\\)
### Steps
1) Find \\(u\prime(x)\\) and \\(v\prime (x)\\)
> \\(u\prime (x)=2\\)
> \\(v\prime (x)=8x\\)
2) Find \\(u\prime v\\) and \\(v\prime u\\)
> \\(u\prime v = 2\cdot (4x^2 +5) =8x^2 +10\\)
>
> \\(v\prime u = 8x\cdot (2x+5) = 16x^2 + 40x\\)
3) Solve and answer the question
> \\(f\prime(x)=8x^2 +10+16x^2 + 40x\\)
>
> \\(\therefore f\prime(x)=24x^2 +40x+10\\)
## Quotient Rule
- The Quotient rule is used to find the quotient of two differentials when given the divisor and dividend, for example:
> \\(\color{lightgreen}{\text{Find }f\prime(x)\text{ where }f(x)=\frac{2x+5}{4x^2 +5}}\\)

> Yes I used the same functions. Deal with it 😎
>
> \- Pranav

### Example Question

> \\(\color{lightgreen}{\text{Find }f\prime(x)\text{ where }f(x)=\frac{2x+5}{4x^2 +5}}\\)

1. Find $u(x), u\prime (x), v(x), and v\prime (x)$

   > $u(x)=2x+5$
   >
   > $u\prime (x)=2$
   >
   > $v(x)=4x^2 +5$
   >
   > $v\prime (x)=8x$
2. Substitute values into the Quotient formula

   > $= \frac{u\prime v - v\prime u}{v^2}\$
   >
   > $f\prime (x)=\frac{2(4x^2+5) - 8(2x+5)}{(4x^2 +5)^2}\$
3. Solve/Simplify
  > $2(4x^2 +5)-8(2x+5)=8x^2 -16x-30$
4. Answer the question
  > $\therefore f\prime (x)=\frac{8x^2 -16x-30}{(4x^2 +5)^2}$
## Differentiating Sine, Cosine, and Tangent equations
### TL;DR
- \$\ddx{sin(x)}=cos(x)\$
- \$\ddx{cos(x)}=-sin(x)\$
- \$\ddx{tan(x)}=sec ^2 (x)\$
> (WHAT A PLOT TWIST) \- {{% mention pranav-sharma %}}
### The Long Version
- When differentiating Sin, Cos and Tan, it's important to remember that $\ddx{y}=\frac{dy}{du}\cdot \frac{du}{dx}$
- The First Principles (I hate it too, but it's occasionally useful) can be used to find the derivatives of Sin, Cos, and Tan.
#### First derivative of Sine (\$f(x)=sin(x)\$)
> \$f\prime x=\displaystyle {\lim_{h\to 0} \frac{f(x+h)-f(x)}{h}}\$
- So in the case of $f(x)=\sin(x)$, we have:
> \$f\prime x=\displaystyle {\lim_{h\to 0} \frac{\sin(x+h)-\sin(x)}{h}}\$
- From this, we can use the Sum-Difference identity \$\sin(A+B)=\sin A\cos B+\sin B\cos A\$ to get
>
> \\( f\prime (x)= \displaystyle {\lim_{h\to 0}} \frac{\sin x \cos h+\sin h\cos x-\sin x}{h} \\)
>
> \$ =\displaystyle {\lim_{h\to 0}} \frac{\sin x(\cos h-1)+\sin h\cos x}{h} \$
> \$ =\displaystyle {\lim_{h\to 0}} (\frac{\sin x(\cos h-1)}{h}+\frac{\sin h\cos x}{h})\$
>
> \$ =(\sin x)\displaystyle {\lim_{h\to 0}} \frac{\cos h-1}{h}+\cos(x)\displaystyle {\lim_{h\to 0}} \frac{\sin h}{h}\$
- Based on our limits, and some lad named [L'Hopital](https://en.wikipedia.org/wiki/L%27Hôpital%27s_rule), we know that \$\displaystyle {\lim_{h\to 0}} \frac{\sin h}{h}=1\$, and \$\displaystyle {\lim_{h\to 0}} \frac{\cos h-1}{h}=0\$
- Therefore:
> \$f\prime (x)=(\sin x)\displaystyle {\lim_{h\to 0}} \frac{\cos h-1}{h}+\cos(x)\displaystyle {\lim_{h\to 0}} \frac{\sin h}{h}=1(\cos x)+0\$
> \$ \therefore f\prime (x)=\cos(x)\$

---
title: "Mathematics: Introduction to Calculus"
author: Pranav Sharma
date: 2020-05-14T00:31:42.327Z
draft: "False"
categories:
  - Year 11
tags:
  - Mathematics Advanced
---
<!-- TOC -->

- [Derivation](#derivation)
  - [Rules (Copy into notes)](#rules-copy-into-notes)
  - [Common Graphs](#common-graphs)
    - [Quadratic](#quadratic)
    - [Cubic](#cubic)
    - [Quartic](#quartic)
    - [Hyperbola](#hyperbola)
    - [Exponentials other than \\(e^x \\)](#exponentials-other-than-\\e^x-\\)
    - [\\(\ln \\)](#\\\ln-\\)
- [First Principle](#first-principle)
  - [Example of First Principle](#example-of-first-principle)
    - [Find the first derivative of \\(f(x)=x^4+5x+3\\)](#find-the-first-derivative-of-\\fxx^45x3\\)

<!-- /TOC -->
- Calculus is the study of continous change
- Calculus is used to find the gradient of a graph, the maximum and minimum values, the area under or over a graph, inflection points, etc.
## Derivation
- A derivation is a function which generalises some property of another function
- the derivative of \\(f(x)\\) (say "f of x") is \\(f\prime (x)\\) (say "f prime of x")
### Rules (Copy into notes)
- \\(f\prime (x)=\frac{dy}{dx}x=y\prime\\)
- \\(f\prime(a)=0\\) if \\(a\\) is a number/constant
- \\(f\prime(ax)=a\\) if \\(a\\) is a number/constant
- \\(f\prime(ax^n )=anx^{n-1}\\) if \\(a\\) and \\(n\\) are a numbers/constants
- \\(f\prime(e^x )=e^x \\)
- \\(f\prime(a^x )=\ln(a)a^x \\)
- \\(ln(x)=\frac{1}{\ln(x)}\cdot \frac{1}{x}\\)

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

#### \\(\ln \\)

<iframe src="https://www.desmos.com/calculator/9oq7db8if2?embed" width="500px" height="500px" style="border: 1px solid #ccc" frameborder=0></iframe>

## First Principle
- The first principle is used to calculate the derivative of a graph
> \\(f\prime x=\displaystyle {\lim_{x\to h} \frac{f(x+h)-f(x)}{h}}\\)
#### Example of First Principle
###### Find the first derivative of \\(f(x)=x^4+5x+3\\)
1) Define f(x)
> \\(f(x)=x^4+5x+3\\)

2) define f(x+h)
> \\(f(x+h)=(x+h)^4+5(x+h)+3\\)

3) State the First Principle
> \\(f\prime x=\displaystyle {\lim_{x\to h} \frac{f(x+h)-f(x)}{h}}\\)

5) Substitute f(x) and f(x+h) into First Principle
> \\(=\displaystyle {\lim_{x\to h}\frac{(x+h)^4+5(x+h)+3-(x^4+5x+3)}{h}}\\)

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
> \\(\color{green}{\enclose{roundedbox}{\therefore \frac{d}{dx}x^4+5x+3=4x^3 +5}}\\)

---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Exponents and Logarithms"
subtitle: ""
summary: "Exponents and Logarithms for 2U and 3U Mathematics."
authors: [Jackson Taylor, Pranav Sharma]
tags: [Year 11, Mathematics, Functions, Exponents, Logarithms]
categories: [Year 11, Mathematics, Functions]
date: 2020-07-25T10:46:23+10:00
lastmod: 2020-07-25T10:46:23+10:00
featured: false
draft: false

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

{{% toc %}}

<!-- Start Content below this line -->
## Exponentials
- Exponentials are another type of function
- Exponentials have the general form $P=e^x$, where $a$ is a constant

<iframe src="https://www.desmos.com/calculator/hdaaz4aoyh?embed" width="500px" height="500px" style="border: 1px solid #ccc" frameborder=0></iframe>

### Euler's Number $(e)$
- In an exam, you'll basically never get the easy version of exponentials
- Instead you'll get the Cool  Kid version, which has this thing called Euler's Number (also known as $e$)
> $e\approx 2.718281828459045235360...$ (it's irrational, like $\pi$)
{{% alert note %}}
To understand $e$, imagine a bank that pays 100% interest over 1 year.
  - In 1 year, <span>$</span>1 becomes <span>$</span>2.
- Now, let's say you want even better interest. You go to bank 2, which pays 50% interest, twice per year.
  - At 6 months, you have <span>$</span>1.50.
  - At 1 year, you have <span>$</span>2.25.
  - Already you're doing better!
- You might remember the formula $A=(1+\frac{r}{n})^n$ from year 9 or 10. We can use this to find more profitable periods:
  - If your bank gives monthly payments, $A=(1+\frac{1}{12})^{12}=2.613...$
  - If your bank pays interest 10000 times a year, $A=(1+\frac{1}{10000})^{10000}=2.718...$
- As you can see, even though the number of payments is increasing rapidly, the final amount is approaching the value of $e$.
- This is because the formula for $e$ is $\displaystyle e=\lim_{n\rightarrow\infty} (1+\frac{1}{n})^n$, which is very similar to the compound interest formula.
- Therefore, $e$ is defined as the rate of continous compounding interest.
{{% /alert %}}
### Properties of $e$
1. The gradient of the graph of $y=e^x$ is $e^x$ at every point on the graph
2. The area under the graph of $e^x$ is $e^x$ at every point on the graph
3. $e$ is the sum of the infinite series:
   - $\displaystyle e=\sum_{n=0}^{\infty}\frac{1}{n!}=\frac{1}{1}+\frac{1}{1}+\frac{1}{1\cdot2}+\frac{1}{1\cdot2\cdot3}+\frac{1}{1\cdot2\cdot3\cdot4}...$
## Log Laws
1. $a^b =c \leftrightarrow log_a c=b$
> Log is just another way of writing a power. It's usually used to solve for $x$ when $x$ is in the power.
2. $\log_e a=\ln a$
3. $\log_a a=1$
4. $log_a 1=a$
5. $\color{lightblue}log_a b=\frac{ln(b)}{ln{a}}\color{lightgreen}\leftarrow\text{Change of Base Formula}$
6. $log_a b+log_a c=log_a(b\cdot c)$
7. $log_a b-log_a c=log_a(\frac{b}{c})$
8. $log_a  b^c =c\cdot\log_a b$
9. $log_a a^x =x$
10.$a^{log_a b} =b$
11. $\ln e^x =x$
12. $e^{ln x}=x$
<!-- End Content here -->
---
# References
<!-- Put references below this line. APA, Chicago, Harvard, MLA, and Turabin are all acceptable. -->

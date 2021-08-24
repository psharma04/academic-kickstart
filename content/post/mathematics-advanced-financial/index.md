---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Mathematics Advanced: Financial Mathematics"
subtitle: "Module 2 for Mathematics Advanced (HSC)"
summary: "Module 2 for Mathematics Advanced (HSC)"
authors: [Jackson Taylor, Pranav Sharma]
tags: [Year 12, Mathematics Advanced, Financial Mathematics, Mathematics, Simple Interest, Compound Interest, Interest, Annuities, Future Value, Present Value, Loan Repayments, Inflation]
categories: [Year 12, Mathematics Advanced, Financial Mathematics]
date: 2021-01-29T13:58:54+11:00
lastmod: 2021-01-29T13:58:54+11:00
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

## Simple and Compound Interest
- Simple interest $(I)$ is calculated with $\color{orange}I=PRn$, an [Arithmetic Progression](/post/mathematics-advanced-sequences-and-series/#arithmetic-sequences)
  - $P$ is the principal (initial) sum,
  - $R$ is the rate of interest per unit of time
  - $n$ is the number of time intervals which have passed
  - If the question asks for the total amount, add $P$ to $I$ at the end
- Compound interest is found by $\color{orange}A_{n}=P(1+R)^{n}$, a [Geometric Progression](/post/mathematics-advanced-sequences-and-series/#arithmetic-sequences)
  - $A_n$ is the amount of interest after $n$ units of time
  - To find the interest (without the initial amount), subtract $P$ from $A_n$
- Depreciation is a form of compound in terest, where the value decreases over time
- Depreciation is expressed as $\color{orange}A_{n}=P(1-R)^{n}$ (also a [Geometric Progression](/post/mathematics-advanced-sequences-and-series/#arithmetic-sequences))
  - $R$ is the rate of depreciation per unit time
  - To find the interest (without the initial amount), subtract $P$ from $A_n$
## Annuities
- Annuities are compound interest investments, from which equal payments are recieved on a regular basis, for a fixed period of time
#### Practice Question
Minho deposits 200$ per month at the start of each month into an annuity which pays 6% p.a. for 20 years. How much will the account hold after the full 20 years?
{{< spoiler text="Toggle Answer" >}}
- After 1 month, the account has $200(1+0.005)$ dollars
- After 2 months, $200(1.005)^{2}+200(1.005)$
- After $n$ months, we have $200(1.005^{n}+1.005^{n-1}+...+1.005)$
- The geometric progression in the brackets is:
$$S_{(20\times 12)}=\frac{1.005(1.005^{240})-1}{1.005-1}=464.3511$$

- Therefore, $464.3511\times 200=92870.22\$ $ after 20 years
{{</spoiler>}}

## Present and Future Values
- The Future value $(FV)$ is the total value of an investment at the end of its term, including all interest
- The Present value $(PV)$ is the single lump of money that could be initially invested to yield a given future value over a given period
- Present values are calculated using the compound interest formula
- Future value is calculated using a variant of the compound interest formula:
$$\color{orange}FV=PV(1+r)^{n}$$
## Loan Repayments
- Loans are usually repaid through regular installments, with compound interest charged on the balance owed
- $\color{orange}A_n = \text{principle + interest - installments + interest}$
  - The loan is paid off when $A_{n}=0$

#### Practice Question
Michael takes out \$10000 to buy a car. He will repay the loan in 5 years, paying 60 equal monthly instalments, beginning 1 month after he takes out the loan. Interest is 6% p.a. compounded monthly. How much is the monthly installment?

{{<spoiler text="Toggle Answer">}}
**Method 1:**

Let $M$ be the monthly installment:
- $A_{1}=10000(1.005)-M$
- $A_{2}=(10000(1.005)-M)(1.005)-M$
- $\therefore A_{2}=10000(1.005)^{2}-1.005M-M$
- $A_{60}=0=10000(1.005)^{60}-M(1+1.005+...+1.005^{59})$

GP inside the brackets is $\frac{10000(1.005^{60})}{\frac{1.005^{60}-1}{0.005}}=\\$193.33$

**Method 2 (Speed Hack):**
- $A_{n}=10000(1.005)^{n}-M(1+1.005+...+1.005^{n-1})$
- $10000(1.005)^{60}=M(1+1.005+...+1.005^{59})$

GP inside brackets is $S_{60}=\frac{1.005^{60}-1}{0.005}=69.77$

- $\therefore M=\frac{10000(1.005)^{60}}{69.77}$
- $=\\$193.33 $
{{</spoiler>}}

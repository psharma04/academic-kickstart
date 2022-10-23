---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Financial Mathematics"
subtitle: "Module 4/5 for Mathematics Standard (HSC)"
summary: "Module 4/5 for Mathematics Standard (HSC)"
authors: [Pranav Sharma]
tags: [Year 12, HSC, Mathematics Standard, Financial Mathematics, Mathematics, Simple Interest, Compound Interest, Interest, Annuities, Future Value, Present Value, Loan Repayments, Inflation]
categories: [Year 12, HSC, Mathematics Standard, Financial Mathematics]
date: 2021-01-29T21:02:42+11:00
lastmod: 2021-01-29T21:02:42+11:00
featured: false
draft: false
type: book
math: true
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

{{< toc hide_on="xl" >}} 

---

## Interest
- Interest is essentially the cost of using someone else's money
- When you borrow money from a bank or lender, you are charged a percentage of that intial amount extra when it comes time to pay it back
- In most cases, interest is paid back *periodically* (over time) rather than as a *lump sum* (all at once)
- There are two main kinds of interest: simple and compound

### Simple Interest
- Simple interest is where interest is calculated based on the principle (initial) amount, and the time since the loan started
- Simple interest $(I)$ is calculated with $\color{orange}I=(P\times R\times n)$
  - $P$ is the principal (initial) sum,
  - $R$ is the rate of interest per unit of time
  - $n$ is the number of time intervals which have passed
- For example, if you take a \$100 loan at 6% simple interest per year, every year you wait adds \$6 to the amount you have to pay back $(\$100\times 6\%\times 1=\$6,\$100\times 6\%\times 2=\$12\text{, and so on})$

- If the question asks for the total amount, add $P$ to $I$ at the end
  - Basically, use the formula $\color{orange}I=(P\times R\times n)+P$ instead
### Compound Interest
- Compound interest is where the interest in each period is calculated on the principle, ***PLUS any interest earned until that point***
{{<callout warning>}}
Most loans, debts, and repayments are compound interest. If the type of interest isn't specified, it's almost definitely compound.
{{</callout>}}
- The formula for compound interest is $\color{orange}FV=PV(1+r^{n})$
  - $FV$ stands for "future value" or "final value" (same as $I$ in simple interest)
  - $PV$ stands for "present value" or "principal value"
  - $r$ is the rate per period (for example 6% per year)
  - $n$ is the number of periods passed
#### Increasing Future Value
- There are 3 main ways to increase the future value of an investment:
  - Increase the principal value (basically, more money = more money)
  - Increase the frequency of the compounding periods (e.g. make $r$ per month rather than per year)
  - Increase the interest rate (7% is more than 6%)

Remember, if you're the one paying for it (e.g. a loan or debt), you want to do the OPPOSITE of those.
### Comparing Investment Strategies (Question Guide)
Usually, questions involving interest tend to involve comparing investment strategies. An example question would be:
> Heidi goes to the bank to take out a loan of 1000 dollars over 3 years. The bank offers her two options: the first with a compounding interest rate of 5% per annum (compounding annually), and the second with a compounding rate of 4% per annum (compounding monthly). Which is the better deal for Heidi?

{{< spoiler text="Toggle Solutions" >}}
1. Figure out whether you need to find the smaller or larger value.
   - In the case of a "which is the better deal" question involving a loan, smaller is better.
2. Calculate the future value of the first option
   - In this case, $FV=1000\times (1+0.05)^{3}=\\$1157.63$
3. Repeat step 2 for each option
   - Option 2: $FV=1000\times(1+\frac{0.04}{12})^{12\times 3}=\\$1012.07$
4. Answer the question.
   - Since Heidi will get a better deal from a lower final sum, option 2 is the better deal for her.

{{< /spoiler >}}

## Investment Graphs

### Simple Interest

- Simple interest demonstrates a linear relationship, with the x-axis as $n$ (number of time periods), and the y-axis as $I$ (the interest earned).
- To draw a simple interest graph:
  1. Construct a table of values for $I$ and $n$ using the simple interest formula.
  2. Draw a number plane with the $n$ horizontal axis and $I$ vertical axis, then plot the points.
  3. Join the points to make a straight line.

##### Example

> Draw a graph of the simple interest earned over a period of 10 years, where the initial amount is $10, and the rate of interest is 8% p.a.

{{< figure src="https://cdn.statically.io/gh/psharma04/image-repo/main/uploads/T1255.12-06-2021.math-standard-financial.min.svg" theme="light" width=50% >}}

### Compound Interest

- Compound interest demonstrates an exponential curve, with the x-axis as $n$ (number of time periods), and the y-axis as $FV$ (the future value).
- To draw a compound interest graph:
  1. Construct a table of values for $FV$ and $n$ using the compound interest formula.
  2. Draw a number plane with the $n$ horizontal axis and $FV$ vertical axis, then plot the points.
  3. Join the points to make an exponential curve.

{{< figure src="https://cdn.statically.io/gh/psharma04/image-repo/main/uploads/T1339.12-06-2021.math-standard-financial.min.svg" theme="light" width=50% >}}

## Appreciation and Inflation

- Appreciation is when an item increases in value.
- The rate of financial appreciation can often be expressed using the compound interest formula.

$$\color{orange}{FV=PV(1+r)^{n}}$$

- Inflation is when the value of money goes down. When inflation occurs, the price of goods and services increases.
  - Usually, inflation is between 2% and 3%.
- This increase in the price of things can also be expressed using the compound interest formula.

### Declining-Balance Depreciation

- Declining-balance depreciation occurs when the value of the item decreases by a fixed percentage each time period.
- Declining-balance depreciation has a slightly modified version of the compound interest formula:
  - $\color{orange}{S=V_{0}(1-r)^{n}}$
  - $S$ is the final or "salvage" value, $V_0$ is the initial value, $r$ is the rate of depreciation per time period, and $n$ is the number of time periods.

### Reducing-Balance Loans

- Reducing-balance loans are loans where the interest is calculated on the outstanding amount, rather than the total amount.
- These use more complicated formulae, so you'll typically be given a two-way table, which you can then use to determine the amount outstanding.

{{< callout note >}}

Found this post useful? [Support us on Patreon.](/patreon/)

{{< /callout >}}

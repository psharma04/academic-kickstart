---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Module 3: Data, Evidence, and Decision Making"
subtitle: "Notes for Module 3 of HSC Science Extension"
summary: "Notes for Module 3 of HSC Science Extension"
authors: [Pranav Sharma]
tags: [Year 12, Science Extension, Data Evidence and Decision Making, Module 3, Science, Data, Analysis, Statistics]
categories: [Year 12, Science Extension, Data Evidence and Decision Making, Module 3, Science, Data, Analysis, Statistics]
date: 2021-05-01T10:28:21+11:00
lastmod: 2021-05-01T10:28:21+11:00
featured: false
draft: false
math: true
type: book
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

## Patterns and Trends

### Data vs Evidence

- The terms data and evidence are often used interchangeably, but in scientific inquiries the terms refer to two different concepts.
- Data is essentially pure information. 
  - The results of a scientific inquiry (e.g. a table or spreadsheet) with no interpretation is an example of data.
  - There is no context or information attached.
- Evidence is data with context.
  - While data can exist independently, when conclusions and analyses are made from it, it is evidence.
  - *The data becomes evidence for a statement.*
  - Data is only evidence when there is an opinion, viewpoint, or argument that it reinforces or refutes.
- Data has no meaning alone, it must be in the form of evidence to be of any use.

## Statistics in Scientific Research

### Mean, Median, and Standard Deviation

-  Mean refers to the average of a dataset
- Mean is calculated using $\frac{\text{Sum of values}}{\text{Number of values}},$ and is represented by either $\mu$ or $\bar{x}\newcommand{orange}{\color{orange}}$
- Median refers to the middle value of the dataset, and is the term at position $\frac{n}{2}$ where $n$ is the number of values in the dataset
- Median is represented by $Med(X),$ where $X$ is the relevant variable
- Standard deviation is the amount of variation in a dataset
- Standard Deviation can be calculated using $\sqrt{\frac{\sum{(x_{i}-\mu)^{2}}}{n}}$ where n is the number of values in the dataset, and $x_i$ represents each value of the variable
- Standard Deviation is represented by $\sigma$, and is the square root of variance

## Statistics Tests

### F-Test

#### When is it used?

- When you have 2 numerical datasets, and want to compare their variances (how much they deviate from their respective means)

#### What does it tell us?

- The further the result of the F-test is from 1, the stronger the evidence for unequal population variances. 
- Therefore, higher F-statistics can be interpreted as less correlation between the two variables.

#### How is an F-statistic calculated?

1. Define the null hypothesis $(H_0)$ as "The two variables have equal variance," and the alternate hypothesis $(H_1)$ as "the two variables have unequal variances."

   - Don't actually write that if you're asked. Instead, write "*variable 1* is dependent on  *variable 2*." for the null, and  "*variable 1* is not dependent on *variable 2*."
2. Calculate the statistic using $\orange{F=\frac{\sigma_1}{\sigma_2}}$ where $\sigma_1$ is the is the larger variance.

#### How can a conclusion be drawn from the F-test?

1. Use an f-statistic table to determine the critical F-value of the dataset:
   1. The significance/alpha level will be written above the table, usually in the form of $\alpha=0.05$ (where 0.05, or 5%, is the significance level). If the question doesn't give you the significance level, assume 0.05.
   2. The numerator's degrees of freedom (number of values of variable 1, minus 1) is along the top
   3. The denominator's degrees of freedom (number of values of variable 2, minus 1) is along the left side
   4. You'll be given the table for any in-class test. [There's also one here.](https://perma.cc/9DKH-RA2Y)
2. If the calculated F-statistic is lower than the critical F value, accept the null hypothesis. If the calculated f-statistic is greater than the critical value, reject the null hypothesis.

### T-Test

#### When is it used?

- To compare 2 normally-distributed variables with unknown variances
- Can be used alongside the F-Test

#### What does it tell us?

- T-test determines whether there is a significant difference between th means of 2 groups of data.
- Results from a T-test can be used as evidence for correlation between 2 variables.

#### How is the T-Statistic calculated?

1. Identify the mean $(\bar{x}),$ standard deviation $(\sigma),$ and number of values $(n)$ for each group.
2. Establish a null hypothesis stating that mean 1 $(\bar{x}_1)$ and mean 2 $(\bar{x}_2)$ are equal.
   - This will usually be phrased as *$H_0:$ There is no difference between variables 1 and 2.*
   - Following this with an alternate hypothesis is also a good idea.
3. Use the formula for T-test with 2 variables:

$$\orange{T=\frac{\bar{x}_1-\bar{x}_2}{\sqrt{\frac{{\sigma_1}^2}{n_1}+\frac{{\sigma2}^2}{n_2}}}}$$

If you only have 1 variable, use the 1-var t-test:

$$\orange{T=\frac{\bar{x}-H_0}{\frac{\sigma}{\sqrt{n}}}}$$

#### How is the T-statistic interpreted?

- Usually, a p-value is used to interpret the t-statistic. However, critical T-values can also be found using yet another table.
- This time, a few extra steps are needed:

1. Determine your significance/alpha level (assume $\alpha=0.05$) unless told otherwise.
2. Determine if your test is 1-tailed or 2-tailed:
   - Rephrase the question as an equation (for example, from "25% of packets are too heavy" to "Too heavy > 25%")
   - If the equation has "greater than" or "less than", you need a 1-tailed t-test
   - If the equation has "equals", you need a 2-tailed t-test
3. Now we move to the Empirical rule: because your data is normally distributed, you need to determine how many standard deviations from the mean your data can fall.
   1. For example, an alpha value of 0.05 (or 5%) means data needs to fall between $\bar{x}-2\sigma$ and $\bar{x}+2\sigma$ (because 95% of values are $-2\leq z\leq2$).
   2. If your test is 2-tailed, double your alpha level (because you're only looking at 1 side of a symmetrical distribution)
4. Use a [t-score table](https://perma.cc/SMX9-BHNL) to determine the critical t-value. If your calculated T-value is greater than the critical value, 

#### How can conclusions be drawn?

- If the calculated t-value is greater than the critical value, reject the null hypothesis. Otherwise, accept the null hypothesis.

#### I still don't get it :/

Crash Course Statistics has a good video on T-tests that explains it far better than I have here.

{{< youtube AGh66ZPpOSQ >}}

### Chi-Squared Test $(\Chi^2)$

#### When is it used?

-  To determine whether a categorical variable fits an expected distribution.
- Can only be used for discrete variables, such as frequency.

#### What does it tell us?

- Chi-Squared determines whether the difference between the observed and theoretical distributions is significant enough to be meaningful. 
- Variation between observed and expected might be chanc/randomness, but a Chi-Squared test will determine the likelihood of this.

#### How is Chi-Squared calculated?

$$\orange{\Chi^{2}=\frac{(O_1-E_1)^{2}}{E_1}+\frac{(O_2-E_2)^{2}}{E_2}+...}$$

Where $O$ is the observed value, and $E$ is the expected value.

#### How can $\Chi^2$ be interpreted?

1. Identify degrees of freedom: (number of rows minus 1) times (number of columns minus 1)
2. Identify alpha/significance level (usually $\alpha=0.05$)
3. [Use a chi-squared table to determine the critical value.](https://perma.cc/H3BM-C6NH)
4. If the calculated chi-squared value is greater than the critical value, reject the null hypothesis. Otherwise, accept it.

#### Crash course?

{{< youtube v=7_cs1YlZoug >}}

### Analysis of Variance (ANoVA)

#### When is it used?

- Analysis of Variance is used to analyse variance ​(:roll_eyes:)
- It compares the amount of variance *within* each group to the variance *between* groups.

#### What does it tell us?

- If variance within each group is high, but between groups is low, it's likely caused by an external influence.
- If variance within groups is low but between groups is high, it's likely that the property being measured is dependent on the group the sample was taken from.

#### How is ANoVA calculated?

1. Calculate the mean of each group $(x_g,\text{ where g is the group number})$, as well as the mean of all the groups combined $(\bar{x})$
2. Calculate the SSR (sum of squares regression) using the formula $SSR=n\left[\left(x_1-\bar{x}^2\right)+\left(x_2-\bar{x}^2\right)+...\right]$ where n is the sample size of all groups combines, and $x_1,x_2,…$ are the means of their respective groups.
3. Calculate the SSE (sum of squares error) using the formula $SSE=\sum{(x_{ij}-x_i)^2}$ where $x_{ij}$ is value j in group i, and $x_i$ is the mean of group i
4. Calculate the SST (sum of squares total) as SSR+SSE

#### How is ANoVA interpreted?

- Conveniently, we can use the same method as we did for the F-test (even the same distribution tables)
- The significance/alpha level will be written above the table, usually in the form of $\alpha=0.05$ (where 0.05, or 5%, is the significance level). If the question doesn't give you the significance level, assume 0.05.
- The numerator's degrees of freedom (number of groups, minus 1) is along the top
- The numerator's degrees of freedom (number of values across all groups, minus 1) is along the left side
- You'll be given the table for any in-class test. [There's also one here.](https://perma.cc/9DKH-RA2Y)
- If the calculated ANoVA is lower than the critical value, accept the null hypothesis. If the calculated ANoVA is greater than the critical value, reject the null hypothesis.

#### Crash Course?

{{< youtube oOuu8IBd-yo >}}

<hr>{{< callout note >}}

Found this post useful? [Support us on Patreon.](https://patreon.com/schoolnotes)

{{< /callout >}}


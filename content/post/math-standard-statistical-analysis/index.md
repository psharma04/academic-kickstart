---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Mathematics Standard: Statistical Analysis"
subtitle: "Overview of statistical analysis for standard math."
summary: "Overview of statistical analysis for standard math."
authors: [Pranav Sharma]
tags: [Year 12, Mathematics Standard, Statistical Analysis, Statistics, Mathematics, Analysis, Bivariate Data Analysis, Normal Distribution]
categories: [Year 12, Mathematics Standard, Statistical Analysis]
date: 2020-12-29T16:28:30+11:00
lastmod: 2020-12-29T16:28:30+11:00
featured: false
draft: true

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

---

## Bivariate Data Analysis

### What is data?

- Data is a term that will come up frequently throughout the Statistical Analysis modules

> **Data** is *a collection of facts or information* about something. Examples of data include shape, color, size, and quantity.

- Data can be split into 2 types: quantitative and qualitative
  - Quantitative data is *numerical data,* such as weight or height. You can do math on quantitative data. Quantitative data is usually a measurement, a ranking, or some sort of sliding scale.
  - Qualitative data is *non-numerical* data, such as color or shape. You cannot do math on qualitative data. Personal preferences and survey responses tend to be qualitative data.
- Both qualitative and quantitative data can be graphed:
  - Quantitative data can be presented as nearly any kind of graph, so it's up to you to decide which type to present it in. Usually, a bar/column graph, a table, or a line graph, is best for quantitative data.
  - Qualitative data can only be presented in a limited number of ways, such as a bar/column graph, a table, or a Pareto chart.

{{< callout note >}}

A guide to different types of charts and graphs is coming.

{{< /callout >}}



### What is bivariate data?

- **Bivariate data** is data which has two variables, for example height and weight
- Bivariate data is usually used to compare two sets of data, or attempt to find a relationship between the two variables
- For quantitative data, a scatter plot is usually used to determine the relationship between the numerical values
  - The two variables are sorted into ordered pairs, and then plotted, point by point, onto a graph
  - The line or curve of best fit is also added in to determine the relationship between the sets of values
- Sometimes, there is no correlation between the sets of data:

>  ![Bivariate Correlations](https://cdn.jsdelivr.net/gh/psharma04/image-repo@main/uploads/correl13OpQH7H.gif)

- In the above dataset, the values seem to be randomly scattered. It can be said that the data has little to no correlation.
- Correlation can be determined using the gradient of the line of best fit. If the gradient is close to 0, then there is most likely very little correlation between the sets of values.

### Forms of association

- For bivariate data which does have some sort of trend, there are two "forms of association," or general shapes for the curve of best fit:
  - Linear forms of association are straight lines of best fit. If a scatterplot has a linear curve of best fit, the data is considered to be "directly proportional"
  - Non-linear forms of association are non-straight curves of best fit. If the points on a scatterplot have a visible trend (such as a U shape), the data is may be "proportional to the square," "inversely proportional," or "exponentially proportional" (These terms will be explained later on).
- Linear forms of association will be the most common for this topic.
- For linear forms of association, there are three directions in which the data can trend:
  - A *positive linear form* is where the *gradient of the line of best fit is greater than 0* (i.e. positive)
  - A *negative linear form* is where the *gradient of the line of best fit is less than 0* (i.e. negative)
  - A *neutral linear form* is where the *gradient of the line of best fit is 0* (i.e. not positive or negative)
- In addition to form and direction, bivariate data has another property: strength
  - The strength of bivariate data has less to do with the line of best fit, and more to do with the amount of scatter between values on the scatter plot
  - The less scatter there is in the plot (i.e. the closer the data is to the line of best fit), the stronger the association

### Independent and Dependent Variables

- Usually, bivariate data comes in the form of a dependent and independent variable pair, which you may recognise from science
- The independent variable is the input, and is graphed along the x-axis (horizontal axis)
- The independent variable is NOT AFFECTED by the dependent variable
- The dependent variable is the output, and is graphed along the y-axis (vertical axis)
- The effect of the independent variable on the dependent variable is what the strength of association measures
  - In other words, the strength of association is a measure of how much the dependent variable is affected by the independent variable

### Correlation Coefficients

- The strength of correlation can be calculated numerically, using Pearson's correlation coefficient, also referred to as $r$
- The correlation coefficient measures how close the points on the scatterplot are to forming a straight line
- The close the plot is to linear, the stronger the association
- $r$ can take any value between -1 and 1, but the closer it is to 0, the less association there is $(r=0 \text{ means no correlation}).$
- The diagram below demonstrates some scatterplots with different correlation coefficients

> ![Diagram of correlation coefficients](https://cdn.jsdelivr.net/gh/psharma04/image-repo@main/uploads/pearson-2-smallRt2sXh.png)


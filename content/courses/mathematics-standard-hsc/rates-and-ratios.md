---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Rates and Ratios"
subtitle: "Introduction to rates and ratios for standard math."
summary: "Introduction to rates and ratios for standard math."
authors: [Pranav Sharma]
tags: [Year 12, Mathematics Standard, Rates, Ratios, Concentration, Speed, Scale, Area, Perimeter, Trapezoidal Rule, Rates and Ratios, Mathematics]
categories: [Year 12, Mathematics Standard, Rates and Ratios, Mathematics]
date: 2021-07-08T10:42:51+11:00
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
type: book
# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

{{< toc hide_on="xl" >}}

---

## Like and Unlike Measurements

- This unit deals with the idea of "like" and "unlike" units, so it's important to understand what these are.
- "Like" measurements are measurements which measure the same thing (e.g. time, distance, mass)
  - For example, grams, kilograms, and tonnes are all like units, because they all measure mass.
  - Seconds, minutes, and hours are like units, because they all measure time.
  - Gallons and Litres are also like units, because they both measure volume.
- Unlike measurements have 2 or more different units involved.
  - Speed, for example, is an unlike measurement, because it's measured in meters (unit of distance) per second (unit of time).
  - Since time can't be converted into a distance, and distance can't be converted into a time, we say that speed is an "unlike measurement".
  - However, comparing the speed of 2 objects is a like measurement, because both measurements will be of speed.

{{< spoiler text="One way to figure out whether 2 measurements are like or unlike is to divide one set's units by the other's (skip this if you don't like algebra)." >}}

- For example, say you have a table of weights versus a table of masses, and you want to figure out if they are like or unlike:
  - The unit for weight is the Newton, which is equal to kilograms times meters per second squared $\left(1N=1kg\cdot m/s^2\right)$.
  - The unit for mass is the kilogram.
  - Eliminating Kilograms from Newtons looks like $\frac{\cancel{kg}\cdot m/s^2}{\cancel{kg}}=m/s^2$.
  - Since all units weren't eliminated, kilograms and newtons are unlike.
- If we try grams and tonnes, however:
  - $1 tonne = 1,000 kg = 1,000,000\color{orange}{g}$
  - $\frac{\cancel{g}}{\cancel{g}}=1,$ therefore tonnes and grams are equivalent units.

{{< /spoiler >}}

## Rates

- A rate is a comparison of 2 unlike quantities.
- Speed is an example of a rate, as it is a comparison of distance (meters or kilometers) with time (seconds or hours)

{{< figure src="https://cdn.statically.io/gh/psharma04/image-repo/main/uploads/ms-to-kmh.min.svg" theme="light" >}}

### Heart Rate

- A person's heart rate is measured by the amount of time it beats each minute.
- Naturally, the unit is Beats per Minute (BPM)
- The resting heart rate for most people is between 60 and 80BPM
- The maximum heart rate (MHR) is different based on age, but can be estimated as 220 minus the person's age in years.
- The Exercise Target Heart Rate is the heart rate you typically aim for when doing exercise, and is between 65% and 85% of that person's MHR.

### Energy Rate

- Energy is the rate of power per unit of time, measured inkilowatt hours $(kWh)$. 
- Running cost of the appliance is calculated by multiplying the energy consumption by the electricity price

$$\text{Cost}=\frac{\text{Energy Consumption }(kWh)}{\text{Electricity Price }(\$ /kWh)}$$

### Fuel Consumption Rate

Fuel consumption is measured in Litres per Kilometer $\text{(L/km)}$

$$\text{Fuel consumption (L/km)} = \frac{\text{Amount of Fuel (L)}\times100}{\text{Distance Travelled (km)}}$$

## Ratios

- A ratio is used to compare amounts of the same units in a definite order. 
- Equivalent ratios are obtained by multiplying or dividing by the same number (e.g. $\frac{2}{3}=\frac{4}{6}=\frac{20}{30}$)

### Dividing a Quantity in a Given Ratio

1. Find the total number of parts by adding each amount in the ratio.
2. Divide the quantity by the total number of parts to find one part.
3. Multiply each amount of the ratio by the result in step 2.

### Scale Drawings

- The scale of a drawing is the ratio between the drawing length and the actual length it represents.

  $$\text{Scale}=\text{drawing length}:\text{actual length}$$

- Scale can be expressed with or without units.
  - For example, if 1cm on a map is 1m in real life, it can be written as $1cm:1m$ or $1:100$

#### Perimeter and Area

- This principle can be extended to perimeter and area.
- To find the perimeter of an object on a map, find the perimeter on the map, and multiply by the scale.
- To estimate the area of land, divide it into square grids and count the number of squares. 
- To calculate the area of land, use the appropriate formula. 

| Shape         | Area Formula                                        |
| ------------- | --------------------------------------------------- |
| Triangle      | $A=\frac{1}{2}bh$ or $A=\frac{1}{2}ab\times\cos(C)$ |
| Rectangle     | $A=lb$                                              |
| Square        | $A=l^2$                                             |
| Parallelogram | $A=bh$                                              |
| Trapezium     | $A=\frac{1}{2}(a+b)h$                               |
| Rhombus       | $A=\frac{1}{2}xy$                                   |

### Volume of Water and the Trapezoidal Rule

- Volume of a body of water of constant depth and a trapezoidal area, or volume of rainfall falling on a trapezoidal area, can be calculated using the trapezoidal rule:

$$A\approx\frac{w}{2}(df+dl)$$

{{< callout note >}}

Found this post useful? [Support us on Patreon.](/patreon/)

{{< /callout >}}

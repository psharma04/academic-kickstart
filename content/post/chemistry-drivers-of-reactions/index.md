---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Chemistry: Drivers of Reactions"
subtitle: "Module 4 for Preliminary Chemistry."
summary: "Module 4 for Preliminary Chemistry."
authors: [Jackson Taylor]
tags: [Year 11, Chemistry, Drivers of Reactions, Energy changes in reactions, Enthalpy, Hess' Law, Entropy, Gibbs Free Energy]
categories: [Year 11, Chemistry, Drivers of Reactions]
date: 2020-08-08T15:08:08+10:00
lastmod: 2020-08-08T15:08:08+10:00
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

## 1. Energy Changes in Chemical Reactions
### 1.1. Temperature and Heat Energy
- When heat energy is added to any substance, the particles begin to move faster
  - In solids, the particles vibrate more quickly, while in liquids and gases, the particles' velocities are higher
- Temperature is just a measurement of the *average kinetic energy* (or movement) of the particles in a substance
- Note: "coldness" is just a lack of heat energy. For example, 0°C is still a lot of heat energy, which is why particles still have about 273° lower to go before they hit *absolute zero*
#### 1.1.1. Celcius and Kelvin
- The Celcius scale is a temperature scale based on the **triple point of water**
  > A substance's triple point is the pressure and temperature at which the three phases (solid, liquid, gas) coexist in thermodynamic equilibrium.
  >
  > Until 2019, the triple point of water was, by definition, 0°C. Now it's about 0.01C, because science can't give me a break.
- While the Celcius (or centigrade) scale is practical for everyday situations, it is limited in that it has negative values. In other words, it is not absolute.
- You might remember from [Module 3](/post/reactive-chemistry) that there is another temperature scale which uses the same unit size as Celcius, but is actually absolute: the **Kelvin scale**
- A substance which is 0 Kelvin (0K) contains 0 heat energy, so all of the particles would cease to move.
 > NOTE: This has never actually been done, although we've gotten [pretty](https://www.nasa.gov/vision/earth/technologies/biggest_chill.html) [close.](http://scienceline.ucsb.edu/getkey.php?key=225#:~:text=The%20closest%20to%20absolute%20zero%20anyone%20has%20reached,had%20been%20made%20decades%20before%20it%20was%20proven.) The current record is about [100 pK](https://coldatomlab.jpl.nasa.gov/mission/) $(100pK=0.00000000045K=4.5x\cdot10^{-10}K)$
 #### 1.1.2. Specific Heat Capacity
 - *Specific Heat Capacity* is a measure of how much heat energy (in Joules) is required to change the temperature of 1kg of a substance by 1K
 - The SI units of SHC are Joules per Kilogram per Kelvin $(Jkg^{-1}K^{-1})$
 - In formulae, SHC is represented as $c$
  - For example, if the same amount of heat energy is added to the same mass of copper and water, copper will heat up about 13x more than the water. This is because water has a higher specific heat capacity than copper
  > NOTE: The strength of Hydrogen Bonds between water molecules means that water has one of the highest SHCs of any common substance.
#### 1.1.3. Calculating Specific Heat Capacity
$Q=mc\Delta T$
> $Q=$ amount of heat energy involved $(J)$
>
> $m=$ mass of substance $(kg)$
>
> $c=$ specific heat capacity of the substance $(Jkg^{-1}K^{-1})$
>
> $\Delta T=$ change in temperature $(K)$
##### 1.1.3.1. Comparison of common SHCs

| Substance | SHC $(Jkg^{-1}K^{-1})$ |
|-|-|
| Water | 4183 |
| Most Metals | 300 |
| Ethanol | 2440 |
| Acetone | 2170 |
| Petrol | 2200 (approx.) |
| Bricks | 800 |
| Glass | 600 |
| Wood | 2000 |
| Humans | 3500 (experimental) |
### 1.2. Calorimetry
- Calorimetry is a technique used to measure the energy change occuring during chemical processes
- The term is derives from "calorie," the pre-SI unit for heat energy, now replaced by the Joule
  > Joulometry probably didn't catch on too well
- Since many chemical process occur in water (and because water has such a high SHC), calorimetry often uses water as the *working fluid* to absorb the energy
- The basic idea behind Calorimetry is to have a chemical reaction inside a well-insulated container
- If you measure the masses of all the substances involved, and the temperature changes which occur, then you can use $Q-mc\Delta T$ to calculate now much energy as involved in the reaction
- While this is generally initially measure per gram (or per kg), its often converted to Moles (Yes, [t](https://th.bing.com/th/id/OIP.WByv1RYR_rYL3Enw_4CY0gHaGn?pid=Api&rs=1)[h](https://i.pinimg.com/736x/a1/b3/fe/a1b3fecc3b6c6fdd411ec8143fda36a8--mole-day-chemistry-humor.jpg)[o](https://www.thoughtco.com/thmb/EsE5hHQdqTJdB4UkPMtQt92hNyg=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/chemcat_guacamole-56a130583df78cf772684211.jpg)[s](https://pics.me.me/party-barackisinthehousetonight-i-just-found-this-really-weird-mole-on-11291773.png)[e](http://t-shirtguru.com/product-images/mole-problems-t-shirt-mentalfloss-1.jpg) [moles](https://what-if.xkcd.com/4/))
### 1.3. Energy Changes in Chemical Reactions
#### 1.3.1. Exothermic Reactions
- Exothermic reactions are reactions which release more energy than they require
- The amount of energy involved is referred to as the $\Delta H$ ("Delta-H") of the reaction, and is measured per mole.
- Exothermic reactions have a negative $\Delta H$
- When chemicals lose energy, the temperature in a calorimeter rises, because the energy released heats up the water in the calorimeter
  - When this happens, the energy quantity is considered **negative**, because the chemicals in the reaction have *lost energy*
  > $\text{Formula: }\Delta H=E_{Products}-E_{Reactants}$
#### 1.3.2. Endothermic Reactions
- Endothermic Reactions are the reactions which use up more energy than they produce.
- Endothermic reactions have a positive $\Delta H$
- The reaction absorbs energy from the surrounding environment, so the temperature drops
<!---# References-->

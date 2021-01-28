---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Equilibrium and Acid Reactions"
subtitle: "Notes on equilibrium and acid reactions (Chemistry Module 5)"
summary: "Notes on equilibrium and acid reactions (Chemistry Module 5)"
authors: [Pranav Sharma]
tags: [Year 12, Chemistry, Equilbrium and Acid Reactions, Module 5, Equilibrium, Acids and Bases]
categories: [Year 12, Chemistry, Equilbrium and Acid Reactions, Module 5, Equilibrium, Acids and Bases]
date: 2020-10-31T13:03:16+11:00
lastmod: 2020-10-31T13:03:16+11:00
featured: true
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
{{% toc %}}

<!-- Start content below this line. If you need help, go to https://schoolnotes.xyz/docs/posts/ -->

## Chemical Systems

- **System** is the collective term for all substances involved in or affected by a chemical reaction
- The **surroundings** of a system are not changed by the reaction chemically, but may be affected by changed in energy, entropy, enthalpy, temperature, etc.
  - **Exothermic reactions** transfer energy from the system to the surroundings
  - **Endothermic reactions** transfer energy from the surroundings to the system

> ![exo-endo-reactions.drawio](https://cdn.jsdelivr.net/gh/psharma04/image-repo@main/uploads/exo-endo-reactions.drawio.svg)



- Diagrams which show the energy changes that occur during a chemical reaction are known as **energy profile diagrams**

- The minimum amount of energy required before a reaction commences is known as its **activation energy** $(E_a)$
- An activation energy is present for both exothermic and endothermic reactions
  - However, exothermic reactions tend to have lower activation energies

> ![img](https://cdn.jsdelivr.net/gh/psharma04/image-repo@main/uploads/exothermic-and-endothermic-reaction.png)

### Enthalpy and Chemical Reactions

- The enthalpy change, $\Delta H,$ of a chemical reaction, is the heat (thermal energy) released or absorbed during the reaction
- Enthalpy change can be expressed as $\Delta H = H_{products} -H_{reactants}$
  - $\Delta H$ ia negative for for exothermic reactions, because heat is released from the system
  - $\Delta H$ is positive for endothermic reactions, because heat is absorbed by the system
- Enthalpy is a measure of energy per particle, so the SI unit is $J/mol \text{ (Base units: }\frac{kg\cdot m^2\cdot s^2}{mol}).$ However, $kJ/mol$ is also acceptable.

$\newcommand{deg}{^{\circ}}$

### Rates of Reaction

- The rate of a chemical reaction can be determined by measuring the change in concentration of the reactants and/or products over time
- The rate of reaction can be increased by:
  - Increasing concentration, surface area, and/or temperature
  - [Introducing a catalyst](https://schoolnotes.xyz/post/reactive-chemistry/#catalysis)

### Collision Theory

- According to collision theory, chemical reactions occur when reactant particles collide
- The likelyhood of successful collisions depends on:
  - The frequency of collisions. More collisions = more successful collisions.
  - The orientation of colliding particles. Particles oriented correctly will react, while particles oriented incorrectly will not.
  - Whether the energy of the collisions is greater than the activation energy. Collisions weaker than the activation energy will not react.

### Entropy and Gibbs Free Energy

- Entropy is the measure of disorder, or randomness, in a system

  > For example, mixing a bottle of blue paint with a bottle of yellow paint will (hopefully) produce green paint.
  >
  > The blue and yellow paint had less randomness, because all the particles in each bottle were the same colour, but any particle in the green paint might be yellow or blue, and therefore the system is more random.

- According to the second law ot thermodynamics, the total entropy of a closed system always increases with time.

  > Let me know the next time you manage to unmix the paint.

- Entropy also increases when:
  - The volume of a gas/liquid increases
  - The number of particles increases
  - The temperature increases
  - The substance moves to a higher state (solid<liquid<gas<plasma)

### Open and Closed Systems

- A chemical reaction can be regarded as a system, with everything else in the universe referred to as its surroundings
- In an open system, matter and energy can be exchanged with the surroundings
- In a closed system, only energy can be exchanged with the surroundings



### Static and Dynamic Equilibrium

- Some reactions can be reversed.

  - For example, Nitrogen and Hydrogen can be combined to form Ammonia
  - However, ammonia will also decay into Nitrogen and Hydrogen

- These **reversible reactions** use the symbol $\ce{<=>}$ instead of the usual $\rightarrow$ or $\leftarrow$

  - In the case of nitrogen and hydrogen to ammonia, the reaction is as follows:

  > $\ce{N2 +3H2 <=> 2NH3}$



- In an endothermic reaction, the activation energy for the forward reaction is much greater than the activation for the reverse reaction
- In an exothermic reaction, the activation for the reverse reaction is much greater than the activation energy for the forward reaction

![Illustration of Equilibrium](https://cdn.jsdelivr.net/gh/psharma04/image-repo@main/uploads/Equilibrium-20201031113807610lW1Dut.gif)

- Reversible reactions can only occur in closed systems.

#### Collision Theory and Equilbrium

- According to collision theory, the rate of reaction depends on:
  - frequency of collisions
  - orientation of the particles
  - whether the energy of the particles is $\geq E_{a}$

{{< callout warning >}}

Remember to always check whether an equilibrium plot is concentration/amount vs time, or rate of reaction vs time.

{{< /callout >}}

### Dynamic State of Equilibrium

- A reaction in dynamic equilibrium has not ceased
- Instead, the forward and reverse reactions are occuring at the same rate, and as a result, there is no apparent change in concentration
- Remember, dynamic equilibrium can only be achieved in a closed system

### Static State of Equilibrium

- If a system reaches static equilibrium, there is 0 or nearly 0 reactions taking place
- Systems that reach an irreversible static equilibrium are known as non-equilibrium systems

#### Non-Equilibrium Systems

##### Combustion

- Combustion reactions are *irreversible exothermic reactions*. For example, the combustion of octane can be represented as:

$$\begin{eqnarray}\ce{C8H18 +25/2O2->8CO2 +9H2O} \\\\ \Delta H=-5114kJ/mol\end{eqnarray}$$

- The products of this reaction, $\ce{CO2}$ and $\ce{H2O},$ are stable and do not reform octane and oxygen gas
- The reaction involves an increase in entropy because the number of gas particles in the system increases (13.5 to 17), and the value of $\Delta S\deg$ for the reaction is $+384\text{ J/mol/K}.$

##### Practice Question

*Is the combustion of octane spontaneous at $100\deg C?$*

{{< spoiler text="Show Solution" >}}

$$\begin{eqnarray}T=100\deg C=373K\\\\\Delta H\deg =-5114kJ/mol \\\\ \Delta S\deg =+384\text{ J/mol/K}=+0.384\text{ kJ/mol/K}\\\\\Delta G\deg=\Delta H\deg -T\cdot\Delta S\deg\\\\\Delta G\deg=-5114-(373\times 0.384)\\\\=-5257kJ/mol\\\\\text{Since }\Delta G\deg\lt0,\text{ the reaction is spontaneous.}\end{eqnarray}$$

{{< /spoiler >}}

## Le Châtelier's Principle

> If *a stress* is placed on a system that is *at equilibrium,* that system will proceed in a direction that *minimises the stress.*

The examples for Le Châtelier's Principle will use the Haber process (nitrogen + hydrogen $\ce{<=>}$ ammonia). The formation of ammonia is the forward reaction, while the decay of ammonia is the reverse reaction.

{{% callout note %}}

When a reaction shifts, it either produces more products or more reactants.

A reaction which shifts to produce more *products* is considered to "shift to the right," while a reaction which shifts to produce more *reactants* is considered to "shift to the left."

When a reaction shifts to the right, the rate of the forward reaction has increased, while a shift to the left means the rate of reverse reaction has increased.

{{% /callout %}}

### Concentration

- When the concentration of chemicals in a system is changed, the system will move to restore equilibrium
- For example, in the Haber process, adding more nitrogen provides the hydrogen with more to react with, moving the reaction to the right, until the equilibrium is restored
- The same effect is observed by removing ammonia as it is formed

### Pressure

- When the pressure of a system is increased, the reaction will proceed in the direction with the least number of particles
- Mole ratios can be used to find the direction the system moves
  - For example, in the Haber process, the reactant-product mole ratio is 1+3:2
  - There are more moles of Nitrogen and Hydrogen than there are of ammonia
  - Remember, every gas (at the same temperature and pressure) takes up the same amount of space per mole
  - As a result, the reactants in this reaction take up more volume than the products
  - Increasing the pressure puts more stress on the high volume reactants than the low volume product, so the reaction shifts to the *right,* producing more ammonia than it would at low pressure
  - Decreasing the pressure has the opposite effect
- Pressure affects reactions involving gases significantly, but not that much for solids and liquids

### Temperature

- Endothermic reactions consume heat, so if heat is added, the endothermic direction will proceed faster
- Exothermic reactions release heat, so if heat is removed, the exothermic reaction will proceed faster

## Equilibrium Equations

### Equilibrium Constant

- The equilibrium constant $(K_{eq})$ is a molar ration of products over reactants at equilibrium

- This constant is different for every chemical reaction

- We're going to use a fake equation to demonstrate the way that this works:

  - $\ce{aA +bB <=> cC +dD}$
  - The capitals represent the reactants (A and B) and the products (C and D), while the lowercases represent their coefficients

  - $K_{eq}=\frac{[C]^{c}\cdot [D]^{d}}{[A]^{a}\cdot [B]^{b}}$
  - The square brackets in the equation (such as $[A]$) represent the molar concentration of that substance
  - REMEMBER TO MULTIPLY, NOT ADD!!!!!!



---
# References
<!-- Footnotes and references go below this line -->

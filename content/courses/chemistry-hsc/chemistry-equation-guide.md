---

# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "RESOURCE: Chemistry Equations"
subtitle: "List of Equations and their uses for Preliminary and HSC Chemistry"
summary: "List of Equations and their uses for Preliminary and HSC Chemistry"
authors: [Jackson Taylor]
tags: [Year 11, Year 12, Chemistry, Equations, Cheat Sheet]
categories: [Chemistry, Cheat Sheet]
date: 2020-10-27T19:39:28+11:00
lastmod: 2020-10-27T19:39:28+11:00
featured: false
draft: false
math: true
# Featured image
type: book
# To use, add an image named `featured.jpg/png` to your page's folder.

# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.

image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).

# Associate this post with one or more of your projects.

# Simply enter your project's folder or file name without extension.

# E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.

# Otherwise, set `projects = []`.

projects: []
---

{{% callout warning %}}

This post has a lot of math! If some of the formulae look weird or unreadable, give it a second to render. If it's still got \$ all over the place after a few seconds, try disabling your adblock and refreshing the page.

{{% /callout %}}



{{% callout note %}}

There's a printable version of this post [here](chemistry_equations_print_version.pdf)

{{% /callout %}}

### Gibbs Free Energy

**Formula:** $\Delta G=\Delta H-T\Delta S$

**Question:** *Determine whether the chemical reaction is spontaneous*

**Procedure:**

1. Write equation
2. Calculate change in enthalpy ($\Delta H$) for reaction
3. Calculate change in entropy ($\Delta S$) for reaction
4. Calculate Gibbs Free Energy ($G$) for equation
5. If $G$ is positive, the reaction is not spontaneous. If $G$ is zero or negative, the reaction is spontaneous

### Equilibrium Constant

**Formula:** $K_{eq}=\frac{[C]^{c}\cdot [D]^{d}}{[A]^{a}\cdot [B]^{b}}$

**Question:** *Calculate the equilibrium constant.*

**Procedure:**

1. Write a balanced chemical equation
2. Convert moles of gas to concentration if necessary ($c=\frac{n}{v}$)
3. Draw ICE (Initial, Change, Equilibrium) Table[^1] if necessary
4. Calculate $K_{eq}$ using equation

**Question:** *Determine if the system is at equilibrium and, if not, which way it will shift.*

**Procedure:**

1. The question will give you a value for $K_{eq}$ (or you might calculate it in a previous section)

2. Use the same procedure as above, but with $Q$ instead of $K_{eq}$

3. Compare $Q$ and $K_{eq}$:

   a. If $Q=K_{eq},$ then the system is at equilibrium

   b. If $Q<K_{eq},$ then the system will proceed in the FORWARD direction

   c. If $Q>K_{eq},$ then the system will proceed in the REVERSE direction

**Question:** *Calculate $K_p$*

**Procedure:**

1. Calculate mole fraction (no of moles/total moles of gas)
2. Multiply mole fraction by total pressure
3. Use equilibrium equation, substituting partial pressures for concentration

**Question:** *Given the initial concentration and $pH$ of a compound, find $K_{eq}$ of the dissociation/hydrolysis of the ions.*

**Procedure:**

1. Write the dissociation equation of the compounds (if not already given)
2. Calculate the number of $H^+$ ions from the $pH$ ($H^+ = -log_{10}(pH)$)
3. Draw ICE Table [^1] with initial concentration as the initial of the compound
4. Substitute the $H^+$ values of each ion (from part 2) in the table as the final equilibrium concentration
5. Write $K_{eq}$ and substitute values
6. Assume the $x$ in number $x$ is negligible (from equilibrium concentration of compound) and remove
7. Solve.

### Acid/Base Dissociation Constant

**Formula:** $K_a = \frac{[\ce{H3O+}][\ce{A-}]}{HA}$

**Question:** *What is the acid/base dissociation constant of {compound}?*

**Procedure:**

1. Write the equation for dissociation (reacting with water)
2. Write dissociation expression of the compound
3. Draw ICE table using the initial concentration given, and substitute the other values with $x$
4. Using $pH/pOH,$ calcullate the number of $H^+$ or $OH^-$ ions, and replace $x$ with this value
5. Substitute numbers into dissociation expression

**Question:** *Given the concentration and Ka find the pH of the solution.*

**Procedure:**

1. Write the equation for the dissociation of compound (react with water)

2. Write dissociation expression of compound[^2]

3. Draw ICE table using the initial concentration given and substituting other values with ‘x’

4. Substitute into dissociation expression

5. Assume $x$ is negligible and delete the $x$

6. Simplify and solve to find $x$ (concentration of $H^+$ ions)

7. Substitute value of $x$ into formula to find pH ( $-log[H^+]$ )

### Strength of Acid/Base

**Formula:** $pK_a =-log_{10}[K_a]$

### Solubility Equilibrium

**Formula:** $K_{sp}=[A][B]$

**Question:** *Compare solubility of salt in water and another solute with shared ion (common ion effect).*

**Procedure:**

1. Write balanced solubility equation for dissociation of salt

2. Draw MICE table, with initial ratio of shared ion as concentration of solution

3. Substitute change with ‘x’

4. Substitute into solubility expression using the values from table

5. Assume that the x in (number +x) is negligible compared to original concentration and remove it

6. Solve equation using the Ksp



**Question:** *Calculate solubility of compound/concentration of ions from Ksp.*

**Procedure:**

1. Write balanced solubility equation for dissociation of salt

2. Write Ksp equation

3. Substitute ‘x’ into concentrations

4. Solve using Ksp.



**Question:** *Calculate molar solubility of the compound from Ksp.*

**Procedure:**

1. Write balanced solubility equation for the dissociation of the salt

2. Determine concentration for the ions and use mole ratios to substitute as ‘s’

3. Write equilibrium expression and substitute ‘s’ into value, solve to find ‘s’



**Question:** *When two solutions are mixed, will a precipitate form, given Ksp of precipitate.*

**Procedure:**

1. Write separate dissociation equations for both solutions

2. Calculate the number of moles in each of the solutions for the volume given

3. Find new concentration of the precipitate forming ions (moles/new volume)

4. Substitute new concentrations into Qsp

5. Compare with Ksp to assess if precipitate forms



***Question:** Give Ksp values, which compound precipitates first?*

**Procedure:**

1. Write separate dissociation equations for both compounds

2. Write Ksp equation and substitute ‘x’ for concentrations

3. Solve for ‘x’ using given Ksp

4. Repeat for the other compound

5. Compare values of x, lower volume precipitates first



**Question:** *Given Ksp and number of moles of reactants in mixture, calculate concentration of ions at equilibrium.*

**Procedure:**

1. Write equation of both reactant solutions to form precipitate

2. Find limiting reagent

3. Find moles of excess reagent (total moles – moles of limiting reagent)

4. Write Ksp equation

5. Rearrange equation as [ions] = Ksp / [other ions]

6. Substitute given Ksp values and concentration of excess reagent (using number of moles from step 3)

7. Solve for concentration of ions

### Heat of Neutralisation

**Formula:** $q=mc\Delta T$

**Question:** *Calculate the heat of neutralisation of a reaction.*

1. Write balanced equation for reaction

2. Calculate number of moles of each reagent to find any limiting reagent
3. If there is limiting reagent, find the new mass that is full volume of limiting reagent + volume of other reagent that reacts (calculate using c=n/v, with n as the moles of limiting reagent)

4. Substitute values into equation



- c (for water) = 4.18
- m (in L if using 4.18, in mL if using 4.18 x 10^3)  q in J/mol mass is the amount that is used to react (not the full volume/mass of reagents)
- q in J/mol

### Enthalpy of Neutralisation

**Formula:** $H_n =-\frac{q}{n}$

### pH (Power of Hydrogen)

**Formula:** $pH=-log_{10}[H^+]$

### Self-Ionisation Constant

**Formula:** $K_w=[\ce{OH-}\times [\ce{H3O+}]$

### Concentration of $\ce{H+}$ or $\ce{OH-}$ ions (Strong Acids/Bases)

**Formulae:**

- $[\ce{H+}]=10^{-pH}$
- $[\ce{OH-}]=10^{-pOH}$
- $[\ce{H+}]=\frac{10^{-14}}{[\ce{OH-}]}$

**Question:** *Calculate the pH of a non-reacting solution (Dilution)*

**Procedure:**

1. Calculate number of moles of acid/base

2. Calculate total volume of final solution

3. Calculate the new concentration in moles using combined volumes of mixtures (c = n/v)

4. If acid/base is strong, [H+] = [acid]

5. Calculate pH or pOH using formula

**Question:** *Calculate the pH of a reacting solution (Neutralisation)*

**Procedure:**

1. Write balanced chemical equation for reaction

2. Calculate number of moles for both reacting solutions

3. Use mole ratios to determine the excess reagent

4. Calculate the number of moles of the excess H or OH ions

5. Find the new concentration in using the combined volume of mixtures (c = n/v)

6. Calculate pH or pOH using formula

### Heat of Combustion

**Formula:** $H_c =\frac{q}{n}$

**Question:** *Calculate the mass of [substance] that must be burnt to increase the temperature of water by [amount].*

**Procedure:**

1. Calculate the heat of neutralisation for water (q = mcat)

2. Sub value into the heat of combustion (h = q/n) to find number of moles

3. Use mole ratios to determine number of moles of ethanol required

4. Convert moles to mass (m = n x MM)

### Percentage Yield

**Formula:** $\text{% Yield} = \frac{\text{Actual Mass}}{\text{Theoretical Mass}} \times 100\text{%}$

### Percentage Purity

**Formula:** $\text{% Purity}=\frac{\text{Mass of useful product}}{\text{Total mass of sample}}\times 100$

### Percentage Ionisation

**Formula:** $\text{% Ionisation}=\frac{[\ce{A-}]}{[\ce{HA}]}\times 100\text{%}$

---

{{< callout note >}}

Found this post useful? [Support us on Patreon.](https://patreon.com/schoolnotes)

{{< /callout >}}

# References

<!-- Footnotes and references go below this line -->

[^1]: [LibreTexts - Physical and Theoretical Chemistry - ICE Tables](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Equilibria/Le_Chateliers_Principle/Ice_Tables)
[^2]: [Acid Dissociation Constant - ThoughtCo](https://www.thoughtco.com/acid-dissociation-constant-definition-ka-606347)

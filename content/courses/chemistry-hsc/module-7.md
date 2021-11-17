---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Module 7: Organic Chemistry"
subtitle: "Notes on organic chemistry (Chemistry Module 7)"
summary: "Notes on organic chemistry (Chemistry Module 7)"
authors: [Pranav Sharma, Jackson Taylor]
tags: [Year 12, Chemistry, Organic Chemistry, Module 7]
categories: [Year 12, Chemistry, Organic Chemistry, Module 7]
date: 2021-03-26T03:03:16+11:00
lastmod: 2020-03-26T13:03:16+11:00
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

type: book
---

{{< toc hide_on="xl" >}}

[This is one of the hardest modules, and both Chemistry in Focus and Pearson Chemistry 12 overlook significant syllabus points. If parts of this module don't make sense, we also recommend the CrashCourse Organic Chemistry Series.](https://www.youtube.com/playlist?list=PL8dPuuaLjXtONguuhLdVmq0HTKS0jksS4)

## Introduction

- All life on Earth is based on compounds of Carbon, usually in an aqueous environment
- When scientist refer to "organic compounds", it usually means compounds of carbon (excluding simpler compounds like $\ce{CO2,CO,CS2,}etc.\newcommand{degC}{^{\circ}C}\newcommand{deg}{^{\circ}}$)
- Because Carbon is the first element with 4 valence electrons, it can easily covalently bond with many other atoms at once, meaning it can form lots of different compounds
- In module 1, the concept of [Carbon allotropes, molecules of Carbon with have different chemical properties,](/courses/chemistry-prelim/module-1/) was explored
- Module 7 looks at carbon compounds involving other elements (mostly Hydrogen, Oxygen, Nitrogen, and More Carbon™)
- Just as Modules 5 and 6 were basically harder versions of module 2, this is basically the next level of module 1, with a bit of modules 3 and 4 sprinkled in. If you need to revise these, [check out our Preliminary Chemistry Course](/courses/chemistry-prelim/).

## Structure of an Organic Molecule

- Organic molecules have 3 main components:
  - The Backbone: the longest continuous chain of connected carbon molecules in the molecule
  - The Functional Group: an offshoot from the backbone which gives the molecule distinct properties, also known as side groups
  - The Hydrogens: Hydrogen is used to fill all of the leftover Carbon valence electrons

## Types of Organic Carbon Molecules

- Organic carbon compounds fall into two main categories: cyclic and acyclic (also known as closed and open chain). Each type has subcategories within themselves, but for the main categories, seeing an example Lewis diagram of each type gives away where the name comes from:

{{< figure src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Octane_Lewis.svg" theme="light" caption="Octane, an organic acyclic/open-chain compound (C<sub>8</sub>H<sub>18</sub>)." >}}

{{< figure src="https://upload.wikimedia.org/wikipedia/commons/6/63/Benzene_Structural_diagram.svg" theme="light" caption="Benzene, an organic cyclic/closed-chain compound (C<sub>6</sub>H<sub>6</sub>). Yes I know they should be capital C's, I'll fix that eventually." >}}

- For now, we'll just look at chains, but don't worry, it's still going to hurt your brain.

### Types of Organic Chains

#### Single Bonds (Alkanes)

- Alkanes are organic carbon molecules where Carbon atoms in the backbone are only connected via single bonds
- Alkanes have the general form of $\ce{C_{n}H_{2n+2}}$, and are therefore a homologous series

| Name    | Molecular Formula | Melting Point $(\degC)$ | Boiling Point $(\degC)$ |
| ------- | ----------------- | ----------------------- | ----------------------- |
| methane | $\ce{CH4}$        | -182                    | -164                    |
| ehtane  | $\ce{C2H6}$       | -183                    | -84                     |
| propane | $\ce{C3H8}$       | -190                    | -42                     |
| butane  | $\ce{C4H10}$      | -138                    | 0                       |
| pentane | $\ce{C5H12}$      | -130                    | 36                      |
| hexane  | $\ce{C6H14}$      | -95                     | 69                      |
| heptane | $\ce{C7H16}$      | -91                     | 98                      |
| octane  | $\ce{C8H18}$      | -57                     | 128                     |



- Alkanes are known as "saturated compounds", and have an open, chain-like structure
- The names will end in -ane, for example, Ethane:
{{< figure src="https://upload.wikimedia.org/wikipedia/commons/3/35/Ethan_Lewis.svg" theme="light" >}}

#### Branched Alkanes

- Branched alkanes are alkane compounts with Alkyl side groups:

| Alkyl Group | Molecular Formula |
| ----------- | ----------------- |
| Methyl      | $\ce{CH3-}$       |
| Ethyl       | $\ce{C2H5-}$      |
| Propyl      | $\ce{C3H7-}$      |
| Butyl       | $\ce{C4H9-}$      |
| Pentyl      | $\ce{C5H11-}$     |

{{< callout info >}}

Remembering the names is difficult sometimes, but you might have noticed that they actually correspond to the number of Carbon atoms there are in the skeleton:

| Longest Chain | Prefix | Number of identical groups | Prefix |
| ------------- | ------ | -------------------------- | ------ |
| 1             | Meth-  | 5                          | Pent-  |
| 2             | Eth-   | 6                          | Hex-   |
| 3             | Prop-  | 7                          | Hept-  |
| 4             | But-   | 8                          | Oct-   |

We'll look at naming organic compounds later on. Remember that you can always jump around the post as needed.

{{< /callout >}}

#### Naming Branched Chain Alkanes

1. Find the longest continuous chain of carbon, and assign the parent name based on this number

2. Find whatever groups that are not part of the longest continuous chain. Name these as **prefixes** and put

   them in **alphabetical order**.

3. Assign numbers to groups by counting from the closest end of the chain

##### Example

{{< figure src="https://images.hsc.one/uploads/3-methylhexane_lewis.svg" theme="light" >}}

- There are 6 carbons in the main chain, with the largest bond being a single bond, so the ending is -hexane
- The side chain has 1 carbon and 3 hydrogen, so methyl- is added (methylhexane)
- The side chain is at position 3, so the compound is 3-methylhexane

##### This system works for all 3 types of open-chain organic molecules, just switch out -ane for the correct ending.

#### Double Bonds (Alkenes)

- Alkenes are organic compounds where the Backbone carbon has double bonds
- Alkenes can also have single bonds in the backbone, but there must be at least 1 double bond (BUT NO TRIPLE BONDS!!!)
- Alkenes are known as "unsaturated compounds", and are more reactive than alkanes as a result of the double bond
- The names of alkenes end with -ene, for example 1-pentene:
{{< figure src="/uploads/1-pentene_lewis.svg" theme="light" >}}

#### Variants of Alkenes

- The location of double bonds can be different, even if the empirical formula is the same
- For example, Butanol has 2 variants:

{{< figure src="https://cln.sh/ODbNq1dO9CzOuvwMKUUE+" theme="light" >}}

#### Triple Bonds (Alkynes)

- Alkynes are the last variant of open-chain compounds, and have at least one triple bond in their backbone
- Alkynes can also have single and double bonds in the backbone, but must have at least 1 triple bond
- Alkynes are also "unsaturated compounds", and are the most reactive organic group
- The names of alkynes ends with -yne, for example propyne:

{{< figure src="https://images.hsc.one/uploads/propyne_lewis.svg" theme="light" >}}

{{< callout info >}}

INTRODUCING THE SHORTCUT! If you didn't notice the pattern, look at the letter which is different between the three. It goes in alphabetical order! Single bond has A, double bond has E, triple bond has Y. 

{{< /callout >}}

## Physical Properties

### Properties of Homologous Series

Members of the same homologous series have:

- A **similar structure** and the same general formula and functional group (each member of a homologous series differs by a −𝐶𝐻2 − unit from the previous member)
- A pattern to their physical properties
- Similar chemical properties

### Melting Points and Boiling Points

- The **melting** and **boiling points** are measures of the thermal energy **required to overcome intermolecular forces**. 

> As ↑ intermolecular forces, ↑ $E_{Heat},\therefore$↑ MP and ↑ BP

- The **packing** of molecules also affects the boiling and melting point.Packing depends on molecular shape. Molecules that are **small, symmetrical** or **unbranched** tend to be able to pack more closely together. This results in **stronger intermolecular forces**.

- The effect of packing on intermolecular forces strength is more significant for molecules in **solid states** (melting point).

#### Melting Points and Boiling Points of Alkanes

Alkane molecules are **nonpolar,** the only intermolecular force is **dispersion forces**. As the length of the carbon chain increases, the overall force of attraction between molecules also increase. (Dispersion forces is proportional to molar mass). Because boiling and point is determined by the strength of intermolecular forces, boiling point increases as alkane chain length increases.

**Molecular shapes** also influence the strength of dispersion forces. **Straight-chained** alkanes are able to fit together more closely and tend to have higher boiling points than their corresponding chain isomers.

Melting point is affected by the strength of the dispersion forces, size and shape of the molecule.

Melting points of hydrocarbons follow the same general patterns as boiling points, with a few exceptions. The melting points of straight-chain hydrocarbons increase as the number of carbon increases. However, there are **deviations** in this trend, relating to whether the molecules have an **even or odd** number of **carbon atoms**.

Chains with **even numbers** of carbon atoms pack **slightly more efficiently** in the solid state than chains with **odd numbers**. The more efficient packing requires more energy to melt the compound resulting in a higher melting point.

| Name    | Molecular Mass | Melting Point | Boiling Point |
| ------- | -------------- | ------------- | ------------- |
| Methane | 16.04          | -182          | -164          |
| Ethane  | 30.07          | -183          | -89           |
| Propane | 44.09          | -190          | -42           |
| Butane  | 58.12          | -138          | 0             |
| Pentane | 72.15          | -130          | 36            |
| Hexane  | 86.17          | -95           | 69            |
| Heptane | 100.2          | -91           | 98            |
| Octane  | 114.2          | -57           | 126           |

<embed src="/courses/chemistry-hsc/assets/Plotly-BP-and-MP-of-Alkanes/" width=100% height=500vh>






> That took longer than it should have, all because we wanted a scaleable graph. Is that too much to ask, internet?

### Melting Points and Boiling Points of Alkenes and Alkynes

- Alkenes and alkynes, like alkanes, are **nonpolar hydrocarbons.** 
- Their molecules are also nonpolar so the forces of attraction between them are only weak dispersion forces. 
- Members of these homologous series have relatively low boiling points similar to those observed for alkanes with the same number of carbon atoms.

- As with alkanes, the boiling points of alkenes and alkynes increase with molecular size as the strength of dispersion forces between molecules increase.

- The boiling points of alkenes are slightly lower than alkanes with the same number of carbon atoms.
- Alkynes have higher boiling points than both alkenes and alkanes that have the same number of carbon atoms. This is due to the increase packing because of its linear shape.

- Since alkenes have lower molecular mass compared to alkanes with the same number of carbon atoms, the strength of the dispersion forces is weaker. Hence the boiling points are lower.

- Alkenes, alkynes and haloalkanes follow the similar pattern to alkanes. 
- As the length of the carbon chain increases, the melting point increases. 
- The alkenes **ethene, propene** and **butene** are all gases at room temperature, alkenes with 5-14 carbons are liquid, and longer-chained molecules are solid.
- Alkynes follow the same general trend for melting points seen in alkanes and alkenes. 
- However, the **position of the triple bond** can greatly affect the melting points as the shape of the molecule changes.

### Solubility

- The solubility of a substance depends on the **strength** of the **InterMolecular Forces within the solute** and **within the solvent** (cohesive forces), in comparison to the **IMF** between the solute and solvent (adhesive forces).

- The generalisation is that **polar compounds** tend to only dissolve well in **polar compounds** and **non-polar** compounds only dissolve in **non-polar compounds**.

- Hydrocarbons are soluble in each other as well as in non-polar organic compounds such as benzene, diethyl ether and carbon tetrachloride (tetrachloromethane). 
- This is because the **cohesive forces** within the solvent are also **weak dispersion forces** that are **similar in strength to the dispersion forces within hydrocarbons**.

### Density

- Density is the measure of mass per unit volume ${g/mL\text{ or }g/cm^{3}}$

| Alkane      | Formula       | Density $(g/cm^{3}\text{ at }20\degC)$ | Molecular Mass $(g/mol)$ |
| ----------- | ------------- | -------------------------------------- | ------------------------ |
| Pentane     | $\ce{C5H12}$  | 0.626                                  | 72.15                    |
| Decane      | $\ce{C10H22}$ | 0.730                                  | 142.3                    |
| Pentadecane | $\ce{C15H32}$ | 0.768                                  | 212.4                    |
| Isosane     | $\ce{C20H42}$ | 0.789                                  | 282.6                    |

- Alkanes cannot mix with water → If you try, the alkane will float on top of the water
- This is because all alkanes have a lower density than water

### Volatility

Volatility is the **ability of a liquid** (or solid) **to escape and form a vapour**. ↑ BP→↑ IMF Strength→↑ Volatility Volatility is measured by **vapour pressure**, which is a measure of concentration in the gas phase above the liquid. It is **constant** at a **constant temperature**.

Hydrocarbons are **non-polar** and hence have **dispersion forces** as their only **intermolecular force**. Since the intermolecular forces are **relatively weak**, their **bonds are easily overcome** and hence the **BP is relatively low**. Therefore, hydrocarbons will be volatile.

> ↑ Molecular Mass → ↑ Strength of dispersion forces → ↑ 𝐸h𝑒𝑎𝑡 → ↓ Volatility at a constant temperature.

### Viscosity

Viscosity refers to a substance’s **resistance to fluid flow.** Liquids with a relatively high resistance to flow have high viscosity. For a substance to flow, particles must flow over each other. Viscosity depends on:

- Strength of intermolecular forces. ↑ IMF→↑ Viscosity

- Size of molecules. ↑ Size→↑ Viscosity

- Temperature. ↑ Temperature→↓ Viscosity

  Viscosity decreases with **increasing temperature**. At higher temperatures, molecules have **greater kinetic energy**. Thus, the molecules move around more which increases the space between molecules. This causes the **intermolecular forces** to be **weaker** and **hence viscosity decreases**.

## Functional Groups

A functional group is an **atom or group of atoms** which give a compound **some characteristic physical** and **chemical property**.

A homologous **series** is a family of organic compounds with the **same general formula** or **functional groups** with **similar chemical properties**.

### Alcohols (Alkanols)

Alcohols are formed when one of the hydrogens on the end of the chain has been replaced with an -OH group

#### Naming

1. Find the longest continuous chain of carbon that contains the functional group
2. Replace the ane/ene/yne with -ol
3. Name the substituents as prefixes in alphabetical order
4. Number the chain so that the functional group has the lowest possible number

Alcohols can also be classified according to the number of carbon atoms attached to the carbon bearing the -OH group.

- A **primary** (1°) alcohol is one in which the carbon bearing the -OH group is bonded to **one** other carbon atom.
- A **secondary** (2°) alcohol is one in which the carbon bearing the -OH group is bonded to **two** other carbon atoms.
- A **tertiary** (3°) alcohol is one in which the carbon bearing the -OH group is bonded to **three** other carbon atoms.

### Aldehydes and Ketones (Carbonyl Group)

A **carbonyl** functional group consists of carbon attached to an **oxygen atom** by a **double bond**. The difference between **aldehydes** (**alkanals**) and **ketones** (**alkanone**) is the **position** of the carbonyl group along the carbon chain:

- If the carbonyl group is on a **terminal** carbon (at the end of a chain), it is called an **aldehyde**, which is given the suffix “**-al**”.
- If the carbonyl group is in the **middle** of the carbon chain, it is called a **ketone**, which is given the suffix “**-** **one”**.

#### Naming

- When the **aldehyde** is the **suffix**, the aldehyde carbon is assigned the number 1. Since it is always carbon 1, “1” (terminal carbon) is omitted from the name. (“-al”) e.g. 2-methylbutanal
- When the **ketone** is the **suffix**, the carbon chain is numbered so that the ketone is assigned the **lowest number**. (“-one”) e.g. Pentan-3-one.

### Carboxylic Acids (Alkanoic Acids)

Carboxylic acids contain the carbonyl group, C=O, connected to a **hydroxyl** group. The carboxyl group is abbreviated as -COOH, and is given by the **suffix** “**-oic acid**”. 

{{< figure src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Carboxylic-acid.svg" theme="light" caption="Carboxylic Acid Functional Group, where R represents the rest of the molecule." >}}

Since the carboxylic acid **uses up 3 bonds** on the carbon atom, it must be situated at the **end of the chain** (terminal carbon).

#### Naming

Unfortunately, the carboxylic acids have different names each. However, some of them should be familiar.

| IUPAC Name                                | Formula                 | Common Name    |
| ----------------------------------------- | ----------------------- | -------------- |
| Methanoic Acid                            | $\ce{HCOOH}$            | Formic Acid    |
| Ethanoic Acid                             | $\ce{CH3COOH}$          | Acetic Acid    |
| Propanoic Acid                            | $\ce{CH3CH2COOH}$       | Propionic Acid |
| Butanoic Acid                             | $\ce{CH3CH2CH2COOH}$    | Butyric Acid   |
| Pentanoic Acid                            | $\ce{CH3CH2CH2CH2COOH}$ | Valeric Acid   |
| 2-Hydroxypropanoic Acid                   | $\ce{HC3H5O6}$          | Lactic Acid    |
| 2-Hydroxypropane-1,2,3-Tricarboxylic Acid | $\ce{H2C6H5O7}$         | Citric Acid    |

{{< figure src="https://images.hsc.one/uploads/citric-acid_lewis.svg" theme="light" caption="2-Hydroxypropane-1,2,3-Tricarboxylic Acid, more often referred to as Citric Acid, with each functional group coloured. You don't need to know this for your HSC, relax." >}}

### Amines and Amides

- Amines and Amides both contain nitrogen
- Amines contain $\ce{NH2}$, and use the suffix "-amine" or the prefix "amino-"
- **Amides** are **carboxylic acids** where the OH group has been replaced with an **amine.** They use the **suffix** “**amide**”.
- When they are quoted as the prefix, the carbonyl and the amine are named separately (using the prefixes “oxo” and “amino” respectively).

### Halogenated Organic Compounds

- Halogenated organic compounds have had hydrogen atoms replaced with a halogen (group 17 element)
- They are named using prefixes placed in front of the name of the alkane
  - e.g. di**fluoro**pentane

### Naming Priorities of Function Groups

- The highest priority functional group takes the suffix, and the other functional groups are placed earlier in the name. 

- Aldehyde > Ketone > Alcohol > Alkyne = Alkene

| Name                     | Structure                   | Suffix    | Prefix                                                       |
| ------------------------ | --------------------------- | --------- | ------------------------------------------------------------ |
| Carboxylic/Alkanoic Acid | $\ce{R-COOH}$               | -oic acid |                                                              |
| Amide                    | $\ce{R-CONH2}$              | -amide    | Oxo- & Amino- (The carbonyl & amine groups are named as if they were separate) |
| Aldehyde (Alkanal)       | $\ce{R-COH}$                | -al       | Oxo-                                                         |
| Ketone (Alkanone)        | $\ce{R\prime-CO-R}$         | -one      | Oxo-                                                         |
| Alcohol (Alkanol)        | $\ce{R-OH}$                 | -ol       | Hydroxy-                                                     |
| Amine                    | $\ce{R-NH2}$                | -amine    | -amino-                                                      |
| Alkene                   | $\ce{R - CH = CH -R\prime}$ | -ene      | -ene-                                                        |

## Structural Isomers

### Isomers

- Structural isomers are molecules that have the **same molecular formula,** but their atoms are arranged in different ways, giving rise to **different structural formulae**.

- Although isomers have the same molecular formula, they are different compounds with **different chemical** and **physical properties**, as well as different names.

### Chain Isomers

Chain isomers involve **rearrangement** of the carbons in the **backbone,** resulting in a different number of carbons in the longest chain or different branching in the carbon chain.

##### Example: Hexane

- An alkane with the molecular formula $\ce{C6H14}$ has 5 chain isomers
- Each isomer has the same molecular formula, but a different name

{{< figure src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Hexane_isomers.svg" theme="light" caption="The 5 hexane chain isomers: hexane, 2 methylpentane, 3-methylpentane, 2,2-dimethylbutane, and 2,3-dimethylbutane." >}}

### Position Isomers

- Position isomers occur when molecules have the same **carbon chain,** but the **functional group** is at a **different** **location**.

- Position isomers only exist for molecules that **contain functional groups**, where the chain is long enough for the functional group to occupy different positions. (Eg. Not possible for ethene or ethane).

##### Example: Butene

{{< figure src="https://upload.wikimedia.org/wikipedia/commons/e/e4/1-butene.svg" theme="light" caption="But-1-ene" >}}

{{< figure src="https://upload.wikimedia.org/wikipedia/commons/8/84/Cis-2-butene.svg" theme="light" caption="But-2-ene" >}}

### Functional Group Isomers

Functional group isomers result when the atoms in the molecules are **arrange in different ways** that lead to the isomers having **different functional groups**.

##### Example: $\ce{C3H6O2}\newcommand{orange}{\color{orange}}$

- Propanoic Acid and 1-hydroxypropan-2-one are functional group isomers, with the same molecular formula $(\ce{C3H6O2}),$ but different arrangements of atoms:
- Propanoic Acid contains a carboxyl functional group, while 1-hydroxypropan-2-one contains hydroxyl and carbonyl functional groups

{{< figure src="/jsdelivr-proxy/gh/psharma04/image-repo@main/uploads/propanoic-acid_lewis.svg" theme="light" caption="Propanoic Acid" >}}

{{< figure src="/jsdelivr-proxy/gh/psharma04/image-repo@latest/uploads/1-hydroxypropan-2-one.svg" theme="light" caption="1-hydroxypropan-2-one" >}}

## Hydrocarbon Reactions

### Combustion Reactions

> This is what chemistry is all about, isn't it? Setting things on fire and seeing what happens.

- All combustion reactions are **exothermic**. It may be **complete** or **incomplete.** 
- For complete combustion to occur, **excess oxygen** must be readily available, and the products are always **carbon dioxide** and **water.**

> $\orange{\ce{C8H18(l) + 25/2O2(g)→8CO2(g) +9H2O(l)}}$

- Incomplete combustion occurs when there is **insufficient oxygen**. The products are **water** and **three** different oxidations of carbon, **soot, carbon monoxide and carbon dioxide**.

- Incomplete combustion results in **less energy** being produce per mole of fuel combustion, making it **less efficient**. 
- This is due to the reduction of C=O bonds being formed. The formation of C=O releases a large amount of energy.
- Alkenes and alkynes tend to burn with a more **sooty flame** compared to alkanes due to the **higher percentage of carbon atoms**. Some of the carbon may not combine with oxygen.
- Standard molar heat of combustion is the energy **released**. Therefore, it is **positive**.
- Standard enthalpy of combustion is **always negative** as combustion is exothermic. It is the **change in enthalpy**.

### Reactions of Unsaturated Hydrocarbons

#### Stability of Carbon Bonds

- The bond energies dictate the overall reactivity of hydrocarbon compounds. **Subsequent carbon-carbon bonds** in a multiple bond are less stable and **weaker** than the original single covalent bond.
- This means that **double** and **triple bonds** are **highly reactive** and can break open more easily and allow atoms to join (saturate).
- This makes the **alkenes** and **alkynes highly reactive** compared to alkanes.
- Alkenes and alkynes are able to react with a number of chemical reactions called **addition reactions**

#### Addition Reactions of Alkenes - Hydrogenation

- Alkenes react with hydrogen gas in the presence of a metal catalyst to form a **saturated alkane.**

> $\orange{\text{General Formula: }\ce{Alkene +H2(g)→[Ni]Saturated Alkane}}$

#### Addition Reactions of Alkenes - Bromination and Chlorination

- Bromine and chlorine add to almost all alkenes very rapidly at STP, creating a compound that has 2 bromines/chlorines on adjacent carbons
- This occurs spontaneously at STP, and can be used as an indicator for alkenes and alkynes

{{< figure src="https://upload.wikimedia.org/wikipedia/commons/4/42/1%2C2-Dibromoethane2.svg" theme="light" caption="1,2-Dibromothane" >}}

#### Addition of HX (Hydrohalogenation)

- Any of the hydrogen halides (HF, HCl, HBr and HI) can add to the double bond of an alkane to give the corresponding alkyl halide. 
- The double bond is converted into a single bond.

#### Predicting a Major Product

- When an asymmetric reagent, such as HBr is added to an asymmetric alkene, more of one isomer is produced than the other.

- The predominant isomer is called the **major product** and the other isomer(s) is called the **minor product(s)**.
- In some reactions, only the major product will be formed.
- The major product obtained from an addition reaction can be predicted using **Markovnikov’s rule**.
- In addition, for reactions involving unsymmetrical alkenes, the hydrogen atom will predominantly bond to the **carbon atom bearing the greater number of hydrogen atoms**.

#### Addition of Water (Hydration)

- Water alone does not react with alkenes, but if an aqueous acid catalyst (eg. Dilute H2SO4) is added and the mixture is heated, water adds to the C=C double bond to give an alkanol.

#### Addition Reactions of Alkynes

- Alkynes undergo addition reactions in a similar fashion to alkenes.

- - One of the three bonds in the triple bond is broken, and two new bonds form. The original triple bond is converted into a double bond.
  - The second addition reaction can be stopped by controlling equivalents of reagent used or by using a specialised reagent.

#### Hydration of Alkynes

- Alkynes do not react with water with only an acid catalyst. A mercury(II) catalyst, such as **mercury(II) sulfate**, must also be present.
- A **carbonyl** (ketone or aldehyde) is produced instead of an alcohol. The alcohol forms as an intermediate which quickly rearranges to form the carbonyl.

#### Substitution Reactions of Alkanes

- A substitution reaction occurs when an **atom** or **functional group** in a molecule is **replaced or substituted** by another atom or group.
- Alkanes are far less reactive than alkanes and alkynes as C-C single bonds are **relatively strong**. 
- However, their **hydrogen atoms** can be **substituted by halogens**. 
- These reactions do not occur spontaneously at RTP.
- Substitution of alkanes can only be carried out with **chlorine** and **bromine** (fluorine reacts too explosively, and iodine does not react) and required energy in the form of **ultraviolet (UV) radiation**.

> $\orange{\ce{CH4(g) +Cl2(g)→[UV Light]CH3Cl(g) +HCl(g)}}$

## Physical Properties of Alkanols

> In case you forgot, alkanols and alcohols are the same thing, its just that the names tend to be -nol, its just  easier to remember if we consistently use Alkanol (i.e. Alkane + nol)

### Intermolecular and Intramolecular Bonding Forces of Alkanols

- Alkanols contain highly electronegative oxygen atoms, creating a polar bond in the molecule.
- The hydrocarbon chain is still non-polar, and has dispersion/Van Der Waals forces.
  - The hydrocarbon end of the molecule repels water.
- The -OH functional group is polar, forming hydrogen bonds, dipole-dipole bonds, ion-dipole bonds, and dispersion bonds.
  - This end is attracted to water.
- As the chain length of an alcohol increases, the **strength of the dispersion force increases**. However, the extent of **hydrogen bonding** does **not change.**
- The strength of the **hydrogen bonding** depends primarily on the molecule’s **shape** and the **number of hydrogen bond donors** and **acceptors available.**
- Thus the **length** of the hydrocarbon chain **influences** the **properties** within the homologous series of alcohols, and the hydroxyl group influences the differences in properties between alcohols and other homologous series.

### Melting and Boiling Points of Alkanols

| Alkanol     | Molecular mass (g/mol) | Melting Point $(\degC)$ | Boiling Point $(\degC)$ |
| ----------- | ---------------------- | ----------------------- | ----------------------- |
| Methanol    | 32.04                  | -98                     | 65                      |
| Ethanol     | 46.07                  | -114                    | 78                      |
| Propan-1-ol | 60.09                  | -126                    | 97                      |
| Butan-1-ol  | 74.12                  | -90                     | 118                     |
| Pentan-1-ol | 88.15                  | -79                     | 138                     |
| Hexan-1-ol  | 102.17                 | -52                     | 157                     |
| Heptan-1-ol | 116.20                 | -34                     | 176                     |
| Octan-1-ol  | 130.22                 | -16                     | 195                     |

- ↑ Chain length→↑Molecular mass→↑ Strength of dispersion forces→↑BP and ↑ MP.
- However, the shape of ethanol and methanol allow them to pack more closely together than propan-1-ol, thus resulting in stronger intermolecular forces and a higher MP.
- The position of the hydroxyl group within the molecule can also affect the melting and boiling point of alcohols
- For example, butan-2-ol has a lower boiling point than butan-1-ol
- Secondary and tertiary alkanols have lower boiling points than their primary isomers
- The dispersion forces will be the same for all three isomers
- However, hydrogen bonding is weaker for secondary and tertiary alkanols, as the alkyl group adjacent to the OH group hinders the OH group's ability to get close to another molecule, restricting their ability to form strong hydrogen bonds
- As a result, the lower boiling points arise from weaker hydrogen bonding in secondary and tertiary alkanols.

### Solubility in Water

| Alkanol     | Solubility in Water at STP (g/100mL) |
| ----------- | ------------------------------------ |
| Methanol    | Miscible                             |
| Ethanol     | Miscible                             |
| Propan-1-ol | Miscible                             |
| Butan-1-ol  | 7.9                                  |
| Pentan-1-ol | 2.3                                  |
| Hexan-1-ol  | 0.59                                 |

- Small alcohols dissolve well in water. 
- However, **solubility in water decreases** with **increasing carbon chain length**. 
- The solubility of alcohols in water is **dictated** by **size** because the opposing effects of the polar and non-polar portions of the molecule.
- The polar hydroxyl group is **hydrophilic** (“water loving”) and the non-polar hydrocarbon chain is **hydrophobic** (“water-hating”)

- Water molecules **cannot solvate** the **large non-polar** carbon chains in long alcohols.

- The -OH group can form hydrogen bonds with water, allowing solvation of this portion of the molecule.

- However, to solvate the large non-polar carbon chain, many strong hydrogen bonds between water

  molecules need to be broken. 

- Since the alkyl chain has no strong attraction to water, these **cohesive hydrogen bonds cannot be broken**.

- Thus, the alkyl end remains unsolvated, and solubility in water is drastically decreased.
- A very general rule for solubility in water, if it has less than a 4:1 carbon:oxygen ratio, it is soluble.
- **Small alcohols** are **good solvents** for dissolving both polar and non-polar substances due to the presence of both polar and non-polar areas in the molecule.

- The polar hydroxyl group can form polar interactions such as **ion-dipole, hydrogen bonding and dipole- dipole** forces with other polar and ionic substances
- The non-polar hydrocarbon chain can form **dispersion forces** with other non-polar substances.

#### Solubility in Organic Solvents

Alcohols become more **soluble** in **non-polar organic solvents** such as hexane, benzene and toluene $(\ce{C7H8})$, as the **length of the carbon chain increases**.

1. - The large alkyl chain can form strong dispersion forces with other non-polar substances. These are strong enough to disrupt hydrogen bonds holding the alcohol together.
   - Therefore, the alcohol molecules separate and disperse throughout the solvent.

## Reactions of Alkanols

### Dehydration Reactions

When alcohols are heated with concentrated **sulfuric** or **phosphoric acid** as a catalyst, an OH and a H atom on the adjacent carbon will be eliminated from the alcohol to give an **alkene** and **water.**

> $\orange{\ce{CH3CH2OH→[H2SO4][180\degC]CH2CH2 + H2O}}$
>
> $\orange{\text{Ethanol in Sulfuric acid at 180}\degC\rightarrow\text{Ethylene+Water}}$

- The reactivity and rate of reaction varies depending on the type of alcohol.
  - **Tertiary** alcohols are the **most reactive** and always react the fastest. Dehydration occurs readily at room temperature.
  - **Primary** and **secondary** alcohols require higher temperatures. Primary alcohols are **less reactive** and react slower than secondary alcohols.

### Substitution Reactions of Haloalkanes

- Alkanols undergo substitution in the presence of a hydrogen halide to form the corresponding Alkyl Halide and Water.
- The trend in reactivity is ths same as for dehydration
- For primary alcohols, larger halides react faster (chlorine is slowest, iodine is fastest)

### Oxidization

- Alcohols can be oxidised with strong oxidizing agents such as acidified solutions of permanganate $(\ce{MnO4-})$ or dichromate $(\ce{Cr2O7^{2-}})$ to give carbonyl compounds
- A change in oxidization states can be seen for the carbon atoms

#### Oxidisation of Primary Alcohols

- Primary alcohols are oxidised into **carboxylic acids**.

- The oxidation of alcohols is driven by a simultaneous reduction reaction, usually of **inorganic reagents**. Either **acidified permanganate** (MnO4- purple in colour) or **dichromate** (Cr2O72- orange in colour) can be used as the oxidant.
- The oxidation occurs stepwise: the alcohol is first oxidised to the **aldehyde**, which is then oxidised into the **carboxylic acid**.

- Aldehydes are **very reactive** and the second oxidation generally occurs too rapidly for it to be separated practically.
  - $\ce{MnO4-}$ goes from purple to colorless
  - $\ce{Cr2O7^2-}$ goes from orange to green

#### Oxidisation of Secondary Alcohols

- Secondary alcohols can be oxidised to produce **ketones**.

- Either **acidified permanganate** (MnO4- purple in colour) or **dichromate** (Cr2O72- orange in colour) can be used as the oxidant.
- Since there are no hydrogen atoms attached to the ketone carbon, no further oxidation can occur.
- Secondary alcohols are **generally less reactive** than **primary alcohols**, thus require **higher temperatures** and **longer reaction times** to be oxidised.

#### Oxidisation of Tertiary Alcohols

- Tertiary alcohols cannot be oxidized to form a carbonyl compound.
- The carbon bearing the hydroxide group has no hydrogen atoms, and therefore cannot be oxidised.

### Combustion of Alcohols

- All alcohols can readily combust, either completely or incompletely.
- Because they are oxygenated, they are prone to complete combustion, and the reaction is highly exothermic as a result of the oxygen and hydrogen combustion reaction which occurs.

## Production of Alkanols

> Why is there so much about alcohols in this module???

### Production by Hydration (Production by Addition)

- Aqueous catalysts such as dilute sulfuric or phosphoric acid allow water to react with alkenes.
- HO is added to the C=C double bond, forming an alkanol
- For example:

> $\orange{\ce{C2H4 +H2O →[H3PO4 Catalyst][300\degC] C2H5OH}}$

### Production by Substitution

- Alkanols can also be produced from the substitution of haloalkanes.

$$\begin{gather*}\orange{\ce{RX +OH- →[H2O][100\degC]ROH +X-}} \\\\ \text{Halocarbon + Hydroxide Ion}\rightarrow\text{Alcohol + Halide Ion}\end{gather*}$$

- This reaction occurs by heating the haloalkane with a solution of **sodium hydroxide** or **potassium hydroxide**. 
- The hydroxide ion from the aqueous base replaces the halogen atom to generate an alcohol and halide salt.
- X: Cl, Br, I. Fluoroalkanes will not react as the C-F bond requires too much energy to break.
- This reaction occurs due to the **highly polarised carbon-halogen** bond, which produces a partial positive charge on the carbon atom.
  - The partially positive carbon atom can be easily “attacked” by a negatively charged hydroxide ion.
  - This results in the formation of a covalent carbon-oxygen bond. In the process, the negative charge is donated to the electronegative halogen atom, which leaves as a halide ion.
- The **rate** of this reaction is dependent on the **type of haloalkane** and the **halogen** atom that leaves the molecule.
- Haloalkanes can be categorised as primary, secondary and tertiary. The reactivity is highest for primary, followed by secondary and then tertiary.
- This is because the **presence** of **alkyl groups** greatly **hinders** the **ability of the hydroxide ion** to approach the partially positive carbon and thus slows the reaction.
- The type of halogen atom leaving the molecule also has an effect on the rate. The reaction occurs the fastest with iodide, followed by bromide and then chloride. 
- This is because the carbon-halogen bonds are of different strengths.

- The lower the bond energy, the easier it is to break the bond.
- It is also possible for haloalkanes to undergo substitution reactions with **water** to form alcohols. This reaction occurs much more **slowly**, and the reactivity is highest for **tertiary**.

### Production by Fermentation

- Fermentation is a process that involves the conversion of **carbohydrates** into **simple alcohols** by the action of enzymes. 
- This is a natural process used by microorganisms to extract energy.
- Carbohydrates have the molecular formula of $\ce{C_{x}(H2O)_{y}}$. 
- Carbohydrates are abundant in plant material. 
- They are also called saccharides.
- The simplest carbohydrates are monosaccharides. 
- They are the building blocks of more complex carbohydrates, such as disaccharides like sucrose and polysaccharides like cellulose.
- The **fermentation** of **monosaccharides**, such as glucose and fructose is the simplest form of fermentation which process **ethanol** and **carbon dioxide**.

$$\orange{\ce{C6H12O6(aq)→[Yeast]2Ch3CH2OH(aq) +2CO2(g)}}$$

- This process relies on the presence of **zymase**, an enzyme found in yeast.

#### Conditions for Fermentation

1. Zymase is present – found in yeast
2. Warm temperatures (30 − 40°C but depends on the yeast strain)
3. Anaerobic environment (oxygen limited environment)
4. Aqueous solution of sugar

- Fermentation of monosaccharides must be **catalysed** by **zymase.** Since zymase is a biological catalyst, it is **sensitive to temperature.**
- Yeast can produce ethanol to concentrations up to only about **15% v/v**. This is due to ethanol being toxic and around 15% v/v, yeast will start to die.
- To produce higher alcohol contents, it is necessary to **distill** the liquid
- If the aqueous mixture from a fermentation process is subjected to fractional distillation, 95% ethanol can be obtained.
- To obtain 100% ethanol, more elaborate procedures such as molecular sieving are required.

## Environmental Impacts of Hydrocarbons

### Sources of Hydrocarbons

- The primary source of hydrocarbons is from **petroleum**. Petroleum is a mixture of hundreds and thousands of different alkanes, ranging from methane up to alkanes with 40 or more carbons.

- The mixture of gases found in petroleum is called **natural gas** and the mixture of liquid components is called **crude oil**.
- Petroleum is found within pores of rocks deep in the ground.
- The complex mixture is separated into fractions according to their boiling points using **fractional distillation**.

- The petroleum is heated to about 400°C to produce **hot liquid/vapour** mixture that enters the fractioning tower.
- Inside the tower are horizontal trays, each which contains many **bubble caps** upon which alkanes condense.
- Fractions which have lower boiling points will rise higher in the column before condensing. 
- Fractions which have higher boiling points will not rise as high and will condense towards the bottom of the column.
- Differences in physical and chemical properties of each petroleum fraction mean that they are suitable for different purposes. 
- Generally, **light fractions** (LPG, petrol, naphtha) are **more useful** and are **in higher demand** than heavy fractions (heavy fuel oil, lubricating oil, wax and asphalt).
- Some of the longer alkanes are further processed through **cracking**, which involves heating alkanes to high temperatures in the absence of oxygen. 
- This causes them to split and form **shorter**, more useful alkanes as well as alkenes.
- A **zeolite** catalyst, which consists of Al, Si and O, may be employed to allow this reaction to be carried at lower temperatures.

### Uses of Hydrocarbons

- The major use of petroleum is transport. Hydrocarbons are **excellent fuels** and the combustion of hydrocarbons is the **primary source** of **energy production globally.**
- Unsaturated hydrocarbons are highly reactive and can undergo addition reactions. 
- This makes them extremely important as **raw materials** for the production of **other organic chemicals,** such as haloalkanes and alcohols, and **commercially valuable goods** such as plastic.

#### Issues with using Petroleum

- Petroleum deposits in the ground are formed by the burial and decomposition of prehistoric living organisms over **millions of years**. Thus, petroleum is a **finite** and **non-renewable** resource.

- As the world’s crude oil diminishes, there will be enormous negative **economic and sociocultural consequences**. Such as the instability of world markets and increase costs of goods.

- Another huge problem that arises is that the combustion of petroleum releases huge amounts of **carbon dioxide** into the atmosphere.

- Carbon dioxide is a **greenhouse gas**, so it absorbs infrared radiation from the atmosphere and keeps our Earth warm.
- The extra carbon dioxide produces through combustion is a major contributor to the **enhanced greenhouse effect** which causes **global warming**.
- The consequences for global warming include **rising sea levels** which in the long term will result in land loss and flooding, more frequent and intense **extreme weather events**, **warming** of the **oceans** and **disruptions** to the **feeding behaviour** of wildlife.
- The higher concentrations of carbon dioxide has also resulted in the **acidifications of oceans** which is threatening the survival of aquatic life.

## Biofuels

### Alternative Fuel Sources

- A possible solution to the reliance on non-renewable crude oil is to use **biofuels**. 
- Biofuels are fuels derived from **biomass**, which is biological material from living or recently living organisms such as wood, crops, wet waste and animal waste.

#### Bioethanol

- Bioethanol is ethanol produced from the **fermentation** of **monosaccharides** such as **glucose** and **fructose**. 
- Monosaccharides are the **building blocks** of more **complex carbohydrates** which make up plant material.
- Monosaccharides can be sourced from:
  - **Sucrose** based feedstock (eg. Sugarcane and fruits)
  - **Starch** based feedstock (eg. Grains like wheat and corn)
  - **Cellulose** based feedstock (eg. Wood residues)
- Fermentation usually involves mashing up grains, sugarcanes or fruits with water to create an aqueous solution of sugar to which yeast is added:
  - Sucrose $(\ce{C11H22O11})$ and starch are readily hydrolysed into monosaccharidesduring the fermentation process, as yeast contains the necessary enzymes required to catalyse the breakdown.
  - Hydrolysis: $\ce{C11H22O11(aq) +H2O(l) →2C6H12O6(aq)}$
  - Fermentation: $\ce{C6H12O6(aq)  →[Yeast]2C2H5OH(aq) +2CO2(g)}$
- **Cellulose** is difficult to break down to its component sugars as the enzyme cellulase is not readily available for industrial use.
- **Bioethanol** has been developed as a substitute for petroleum-based ethanol and as an alternative to petrol. It has the potential to be used as standalone fuel to completely replace petrol but is usually used as an additive to petrol.
- In Australia, most cars post-1986 can use up to **10% ethanol (E10 fuel)**.

#### Biogas

- Biogas consists of **mixtures of gases**, such as **methane**, **carbon monoxide** and **hydrogen**, released from the natural **breakdown of organic matter** by anaerobic bacteria.
- The organic matter is sourced from **natural wastes** from agriculture and households, such as **manure**, **human sewage, food processing wastes** and **crop wastes**.
- To produce biogas, the waste is placed in a **large enclosed tank**, called the **digester**, containing **anaerobic bacteria**. The gas released from the decay is collected by gas outlets.
- The biogas collected can be combusted as a fuel to generate electricity or to heat boilers from industrial processes and for cooking and heating water in homes.
- The biofuel production represents a **carbon cycle**, where plants absorb carbon dioxide during growth, **recycling** the carbon dioxide released during combustion.
- The use of biogas also helps reduce the enhanced greenhouse effect as **methane** is a greenhouse gas that has a larger effect than carbon dioxide. 
- By collecting it and using it to produce electricity, less is released into the atmosphere. 
- Another environmental benefit is that bioethanol and biodiesel are **cleaner fuels** than **petroleum fuels**.
- They are oxygenated, so complete combustion is more likely to occur and they do not contain sulfur impurities.
- They are **non-toxic** and **biodegradable**, thus do not pose as severe a threat to the environment in the event of a spill.

#### Obstacles in the Production of Biofuels

- In Australia, biomass sources currently being used are **waste residues**.
  - Bioethanol is made from sugar cane molasses (waste) and waste from starch and red sorghum production.
  - Biogas is generated from the treatment of waste water
  - Biodiesel is produced from waste vegetable oil from restaurants and industrial food producers

- However, this only produces a small percentage of Australia’s fuel needs. It is not possible to manufacture enough biofuel from these sources to replace all petroleum fuels used today.

- Large amounts of **fertile land** would be required to grow the crops.

  - This requires clearing of forests and bushland which will contribute to an **increase in carbon dioxide** levels in the atmosphere and to **habitat loss**. 

  - Fertile land is also limited thus it **competes with food crops**, resulting in increase in food prices.

  - Intensive farming can lead to **land degradation** and **erosion**.

  - A large amount of **fertiliser** would be required to replace the nutrients taken from the ground.

  - A large amount of **water** would be required.

  - There is also a **large amount of energy** required for harvesting of crops and processing biofuels, energy that is currently derived from fossil fuels.

  - Large scale commercial agriculture leads to the **reduction of biodiversity** due to the loss of important

    organic matter from that crop.

- The potential of biofuels lies in making it **financially viable** compared to conventional petroleum-based fuels.

## Organic Acids and Bases

- **Organic acids** are acids that have a carbon-based structure. The most common type of carboxylic acids are alkanoic acids. They occur abundantly in nature.
  - Propanoic acid is found in cheese
  - Methanoic acid is produce in ant venom
  - Lactic acid is in milk
  - Citric acid is in citric fruits
- All **carboxylic acids** are **weak acids** thus they will **partially** ionise in water to produce hydrogen or hydronium ions.

- Each carboxylic acid group is **monoprotic.**

- The covalent bond between oxygen and hydrogen is **highly polar**. The bonding electrons are strongly

  attracted to oxygen so the hydrogen can be drawn easily by a **base**, leaving behind a **negative charge** on the **oxygen.**

- If more than one carboxylic acid group is present in the molecule, these acids will be **polyprotic**. For

  example, citric acid is **triprotic.**

- The strength of a carboxylic acid is influenced by the **length** and **substitution** of the hydrocarbon chain.

  - As the **chain length increases**, the **strength of the acid decreases**.
  - This is because the alkyl groups are capable of **donating electron density**. Carbon is more electronegative, so it **pulls electron density** towards itself and **away from hydrogen**. 
  - The additional electron density allows carbon to **“donate”** additional negative charge to neighbouring carbon atoms.
  - Substituting a **highly electronegative atom**, such as a halogen, onto the hydrocarbon chain **increases the strength of the acid**.
  - The strong electron-withdrawing power of the substituent helps **weaken** the **oxygen- hydrogen** bond. This makes it easier for the hydrogen to be dissociated.
  - As the **number of electronegative** atoms **increases**, so does the **strength of the acid**.
  - **Fluorine** has the **biggest electron-withdrawing effect**, then chlorine, bromine and iodine.

### Amides (Weak BL Bases)

- **Organic bases** are organic compounds that are characterised by the presence of an atom **with a lone pair** of **electrons** that can **accept an $\ce{H+}$**
- Nitrogen containing compounds such as **amines** are the most common organic bases.
- Many amine bases exist in nature. 
- The most important being the **four nitrogenous DNA bases:** adenine, cytosine, guanine and thymine, and the **20 natural amino acids** used to make **proteins** in living organisms.
- **Amino acids** are molecules that contain both a **carboxylic acid** and a **basic amine** group.
- Simpler amines are made by **substitution** reactions of **haloalkanes** with **ammonia.**
- Amines act as a **base** in an **analogous** manner to ammonia. The lone pair of electrons on the nitrogen can accept a proton, forming an **ammonium ion**. Like ammonia, they are **weak bases**.
- ↑ Chain length→↑ Partial negative→↑ H+ acceptor→↑ Base strength
- Alkyl groups are capable of **donating electron density**. 
- This results in a build-up of **partial negative charge** on the electronegative **nitrogen atom**, allowing it to pick up **H****+** more readily and also stabilise the positive charge on the ammonium ion. 
- The longer the chain, the greater the electron density donate.
- **Amides** are also nitrogen containing compounds with a lone pair of electrons.
- Amides are **neutral** compounds. 
- The presence of the **highly electronegative oxygen** atom in the C=O group pulls electron density away from the nitrogen atom, which makes it more difficult to accept a H+ and stabilise a positive charge if nitrogen was to accept it.

### Reactions of Carboxylic Acids and Amines

- Carboxylic acid + reactive metal → salt + hydrogen gas
- Carboxylic acid + metal hydroxide/oxide → salt + water
- Carboxylic acid + metal carbonate/bicarbonate → salt + carbon dioxide + water
- Amine + acid → ammonium salt
- When **carboxylic acids** react with **amines**, the product formed will depend on the conditions. 
- At **low temperatures**, a **proton transfer** (neutralisation reaction) proceeds between the carboxylic acid and amine, forming a **carboxylate ion** (acid) and an **alkyl** (base).
- At **higher temperatures** or in the presence of a suitable catalyst, an **amide** is produced with the **elimination of water** (condemnation reaction), which forms the **OH** group on the acid and a hydrogen from the amine.
- Condensation reaction: Where two or more molecules **combine** to form a **larger molecule** with the **simultaneous elimination** of a small molecule such as water or methanol.

## Physical Properties of Carboxylic Acids, Amines, and Amides

### Boiling Point

- Carboxylic acids, amines and amides are all **polar molecules**. They can form **hydrogen bonds** with other molecules.
- ↑ Alkyl chain→↑ MM→↑ Dispersion forces→↑ BP
   Amides do not **exhibit** a **linear relationship** between boiling point and molecular weight.
-  This is because the **hydrogen bonding** exhibited by the amides is extensive and are more complex.
- **Amides** exhibit the **highest boiling points** compared to carboxylic acids and amines. 
- **Carboxylic acids** have **higher boiling points** than **amines**.
- Carboxylic acids and amines have **less atoms** that can form hydrogen bonds. 
- Each carboxylic acid molecule can form **two hydrogen bonds** with another acid molecule through the double bonded oxygen and OH group, forming a **dimer** (existing in pairs).
- Each amine molecule can only form **one hydrogen bond** with another **amine molecule**.
- Amines and amides can be classified into primary, secondary and tertiary depending on the number of **alkyl groups** attached to the **nitrogen**.
- Primary amines have the highest boiling points, followed by secondary and then tertiary amines. The same trend occurs with amides.

### Solubility

- **Small** amines, amides and carboxylic acids **dissolve completely** in water. However, solubility decreases as the hydrocarbon chain increases.
- ↑ Carbon chain length→↑ Non-polar nature of compound→↑ Dispersion forces domination→Water cannot solvate the long hydrocarbon chain due to cohesive bonds→↓ Solubility
- Similar to alcohols, the trend is **reversed** for their solubility in **organic solvents**.

## Esters

- Esters are organic compounds with the functional group $\ce{COO-}$
- Esters are formed from the reaction of a **carboxylic acid** and an **alcohol.** 
- The OH group on the acid is replaced with an OR group from the alcohol. This reaction is called **esterification** (a condensation reaction).
- The reaction is **extremely slow.**
- **Concentrated $\ce{H2SO4}$** (dehydrating agent) is used to remove the water and catalyse the reaction.
- Becaise they are all liquids, $K_{eq}=\frac{[\ce{H2O}][\text{Ester}]}{[\text{Alkanoic Acid}][\text{Alkanol}]}$
- Esters are everywhere in nature and are used in a number of **industrial applications**.
- Short chain esters are known for their distinctive, **fruit like odours** and many occur naturally in **fruits** and the **essential oils** for plants.
- Due to their pleasant odours, they are commonly used as **flavouring** (banana lollies) **agents** in processed foods, as well as **fragrances** in perfumes and cosmetics.
- Fats and oils are also naturally occurring **triesters** derived from **glycerol** and **fatty acids**.

### Nomenclature of Esters

1. The **alkanol** is changed to “alkyl” and is the first word of the esters name
2. The **alkanoic acid** becomes the **alkanoate** and is the second word of the esters name

### Esterification

To increase rate of reaction:

- ↑ Temperature
- ↑ Acid catalyst

To increase yield:

- Remove water
- Concentrated $\ce{H2SO4}$ (catalyst and dehydrating agent)

#### Reflux

- Esterification must be carried out under **reflux**.
- **Reflux** is a technique that involves heating a reaction mixture in a vessel fitted with a **cooling condenser** so that the volatile reactants and products are returned to the reaction mixture without any loss.

{{< figure src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Reflux_English.svg" caption="Reflux lab diagram." theme="light" >}}

| Component      | Purpose                                                      |
| -------------- | ------------------------------------------------------------ |
| Reaction Flask | Contains volatile reactants and products.                    |
| Condenser      | Prevents the volatile reactant or product from escaping before the reaction has reached equilibrium by cooling the reactant vapour into a liquid. Water enters at the base and leaves from the top. |
| Boiling Chips  | To provide a surface upon which bubbles form, promoting even boiling. |
| Open Top       | To avoid dangerous pressure build-up inside the apparatus.   |

## Soaps

### Structure of Soaps

- Soaps are **surfactants** which, when dissolve in water, help to remove dirt, oil and foreign matter from surfaces. 
- Soaps are **salts of fatty acids:**
  - Fatty acids are **carboxylic acids** with long hydrocarbon chains (10+)
  - The salt of a fatty acid consists of a **negatively charged carboxylate ion** (called the **head**) with a **long hydrocarbon chain** (called the **tail**) and a **positively charged** ion.

- In water, the **sodium** or **potassium** ions float free and do not play a part in the cleaning actions of soaps. 

- It is the **negatively charged fatty acid ion** which is responsible for the cleaning action.

- - The charged head is **hydrophilic** (water attracting) due to its **polar nature**
  - The tail is **hydrophobic** (water repelling) due to its **non-polar nature**

### Saponification

- Soaps are produced from the **hydrolysis** of **fats and oils** (lipids) in a basic solution such as NaOH. 
- Fats and oils are known as **fatty esters**, **triglycerides** or **triesters**.
- When esters are heated in the presence of a strong base such as NaOH or KOH, the ester is broken down to give the **alcohol** and a **carboxylate ion**.
- This reaction is known as **saponification**. It is a type of hydrolysis reaction, involving the **breaking** of a **chemical bond** by the **addition of water**

### How Soaps Work

- Soap is a **surfactant** (**surf**ace **act**ive **a**ge**nt**s)
- This means it functions by reducing the **surface tension** of water and **binding to grease and dirt** to emulsifies them.
- The **hydrophobic** part of the soap molecule is **long, non-polar hydrocarbon chain**. It is **strongly repelled** by water molecules.
- When soap molecules are added into water, they form an **oriented monolayer** (with tails sticking out of the water) at the surface in order to satisfy the interaction of both the **hydrophobic** and **hydrophilic** portions of the soap molecule.
-  This effectively **breaks the hydrogen bonding** between molecules of water and thus **reduces the surface tension** of water.
- The components **self-assemble** into the most **stable arrangement**, which consists of **spherical structures** with the carboxylate groups forming a **negatively-charged spherical surface**, with the hydrocarbon chains inside the core of the sphere.
- The spheres are called **micelles**. The hydrophobic tails are shielded from the water by the polar heads, which minimises the repulsive forces in the system.

#### 1. Dissolution

Soap molecules must be first dissolve in water. The hydrophilic head of a soap ion interacts with water molecules via **ion-dipole interactions** and **hydrogen bonding**.

#### 2. Adsorption

- Grease and oil consists of non-polar molecules.

- The hydrophobic tails of the soap ions **dissolve in the grease** due to **dispersion forces** and orientates themselves.
- Surfactant molecules continue to **absorb** into the grease, decreasing the surface tension of water at the interface between the grease and water.
- The hydrophilic heads interacting with water via **ion-dipole** forces effectively pull the grease off the surface.

#### 3. Emulsification

With **agitation**, the grease layer breaks into smaller, **spherical droplets (micelles)**, with the hydrophilic surfactant head groups interacting with the water via **ion-dipole forces**, and the hydrophobic surfactant tails adsorbed into the grease. This forms a **dispersion** of grease droplets in water (an **emulsion**).

The negative charged heads on the soap repel each other, preventing the grease and dirt from joining together and keeping them dispersed throughout the solution. Therefore, the grease and oil can be simply rinsed away, leaving a clean surface.

## Synthetic Detergents

### Problems with Soaps

- The soap ion must be **dissolved** in water to have a cleaning effect
- As salts of weak acids, in low pH, soaps are converted into **uncharged fatty acids**

$$\begin{gather*}\orange{\ce{CH3(CH2)16COONa(aq) +HCl(aq) →CH3(CH2)16COOH(s) +NaCl(aq)}} \\\\ \text{Soluble fatty acid ion + acid → Insoluble fatty acid molecule + ionic salt}\end{gather*}$$

- Soaps can also form **insoluble salts** (scum) in **hard water** (water with high concentration of **divalent metal ions** such as $\ce{Ca^{2+}}$ and $\ce{Mg^{2+}}$)

### Synthetic Detergents

- All such **synthetic** surfactants are known as **detergents**
- They have a similar structure to soaps, with a long non-polar hydrocarbon tail and a polar head. However, they vary in the **structure of the polar head group**.

#### Anionic Detergent

- All anionic detergents have a **negatively charged polar head.**
- The main structural difference between anionic detergents and soap is the presence of a **sulfate** $(\ce{R-SO2-O-})$ or **sulfonate group** $(\ce{R-O-SO2-O-})$ instead of a **carboxylate** $(\ce{R-COO-})$.

#### Effectiveness in Hard or Acidic Water

- Anionic detergents **don’t form insoluble precipitates**. 
- They form salts that are all soluble. 
- However, the effectiveness is still **reduced in hard and acidic water**. 
- The positive ions in hard water/acidic water will **attract** the **negative head** of the detergent.
- Phosphate is an example of a builder that can be added to soften the water.

#### Cationic Detergents

- All cationic detergents have a **positively charged polar head**. The positive head is usually a **quaternary ammonium ion**. They are also known as **fatty amine salts**.
- Generally cationic detergents are not very good cleaning agents due to the **strong attraction** of cationic detergents to **negatively charged surfaces** (Most surfaces are negatively charged).
- This attraction however can be beneficial in certain situations.
  - Many fabrics acquired acquire a negative charge when they become wet.
  - Cationic detergents are used in **fabric softeners** and **hair conditioners**. The strong attraction of cationic detergents to negatively charged surfaces can be **detrimental** in other situations.\
- Cationic detergents are particularly **toxic** to **microorganisms**. 
- They are attracted to the negative surface of bacteria and damage or kill bacteria that are involved in their decomposition. 
- They therefore have **very low biodegradability**.

#### Non-Ionic Detergents

- All non-ionic detergents have **uncharged polar heads**. 
  The polar heads consists of polar groups such as **ethoxylates**. 
- Although these surfactants are **uncharged**, the polar head groups are still attracted to the highly polar water molecules forming numerous hydrogen bonds.
- Non-ionic detergents **don’t foam** as much as other detergents, hence they can be used in dishwashers.

### Environmental Impacts of Surfactants

- Detergents are **synthetic**, whereas soaps are made from naturally occurring biological materials (fats and oils). Thus detergents are **less biodegradable**.
- The enhanced stability of detergents means they persist in the environment, causing damage to the mucus membrane in wildlife and resulting in **excessive frothing** in the water ways. 
- This leads to less sunlight penetration.
- Toxic to aquatic life.
- Anionic detergents often contain **builders** such as **sodium triphosphate** $(\ce{Na5P3O10})$.
- The builders react with minerals in hard water and form soluble molecules.
- High levels of phosphates entering the rivers and waterways can lead to **eutrophication** (turning a lake into swamp, algae, etc.)

## Polymers

- A polymer is a **long chain molecule** made up of repeating units, called **monomers** joined by covalent bonds. 

- The process of linking monomer units is called **polymerisation**.

- Polymers may be natural or synthetic:

- - Natural polymers are made by living organisms. Eg. Hair, starch, cellulose, DNA and silk
  - Synthetic polymers are manufactured. Eg. Plastics like polyethylene, polyvinyl chloride and nylon.

### Addition Polymers

- **Addition polymers** are polymers made by adding **unsaturated molecules** to each other, **without the elimination of any atoms**.
- Additional polymerisation is a type of addition reaction, in which one of the bonds in the C=C double bond is broken to form two new single bonds.
- A simple way of representing polymers is by writing the **repeat units** in **square brackets** followed by the **subscript n** where n is the **number of monomer units** in the polymer.
- Addition polymers are all **synthetic**, they do not exist in nature.

### Condensation Polymers

- **Condensation polymers** are polymers formed through the **condensation** reaction of **difunctional monomers** with the **elimination of a small molecule** such as water or methanol in the process.
- Monomers used to synthesise condensation polymers usually contain groups such as alcohol, carboxylic and amine.
- Condensation polymers are found everywhere in nature.
- **Polysaccharides** such as cellulose and starch are condensation polymers made from **glucose** monomers.

### Polyesters

- Polyesters are condensation polymers in which the repeating units are joined by **ester** links. 
- Polymers made from two different monomers are called **copolymers**.

### Polyamides

- Polyamides are condensation polymers in which the repeating units are joined by **amide links**. 
- The **nylon class** refers to polyamides that have **linear carbon chains** in the repeating units.

### Properties of Polymers

- Physical properties of polymers are important in determining their uses. These include:
  - Melting point (softening point)
  - Mechanical strength
  - Flexibility.
- This is due to the **chemical structure** of the polymers which leads to different strengths of **intermolecular forces** that is dependent on:
  - Molecular weight or chain length
  - Extent of chain branching
  - Presence of side groups (eg. -OH)

#### Chain Length

- Polymers are **extremely large** covalent molecules. The dominant intermolecular force is dispersion.
- The length of a polymer (and its molecular weight) depends on the **number of monomers** the polymer contains. 
- The **melting point**, **rigidity** and **hardness** of a polymer **increases** with an increase in **chain length**.

#### Chain Branching

- Polymers are able to form **branched** and **unbranched** chains. 
- Unbranched chains are able to pack more closely in an **orderly fashion**, forming a **rigid crystalline solid.**
- **Branched** polymer chains are unable to align with each other, forming an **amorphous** solid that has weak intermolecular forces between the chain.

{{< callout note >}}

**_Crystalline and Amorphous Solids_**

If the polymer chains have few branches, as in the case with **HDPE**, the molecules can sometimes line up in a regular arrangement, creating **crystalline regions**. The regular arrangements brings the polymer chains closer together. The IMF between closely packed chains are stronger, and the presence of **crystalline regions strengthens the material overall.**

Crystalline regions in a polymer **prevents** the **transmission of light** through the material, making it appear cloudy or opaque.

**Amorphous region** will form where the polymer chains are **randomly tangled** and unable to pack very closely. In some polymer materials, the entire solid is amorphous. Amorphous polymers are usually more **flexible** and **weaker** and are often **transparent**. (**LDPE**) Increasing the percentage crystallinity of a material makes it stronger and less flexible. This also makes the material less transparent because **crystalline regions scatter light**. There are more crystalline regions in unbranched polymers.

There are **crystalline** and **amorphous** regions in all polymers.

{{< /callout >}}

#### Side Groups

- Side groups make a material more rigid and brittle, resulting in harder polymers.

#### Cross-Linking

- Polymer chains are held together by **intermolecular forces** or they can be linked by **covalent bonds** called **cross-links** to form a large extended network.
- Polymers with only intermolecular forces between their chains are called **thermoplastic** polymers. 
- They **soften when heated** as the intermolecular forces are relatively weak and easily broken to allow the chains to move between one another. 
- This property allows polymers to be **remoulded.**
- Polymers with cross-links are called **thermosetting** polymers. 
- Since covalent bonds are very string, cross links limit movement between polymer chains, making the polymer more **rigid, hard** and **heat resistant**. 
- These polymers cannot be remoulded (like XLDPE).

## Types of Polymers

### Polyethylene

- Polyethylene (polyethene) is the most popular plastic in the world. It has a very simple structure.
- Ethene is an **unsaturated molecule** because of a **double carbon-carbon bond**. 
- When ethene polymerases, the **double bond breaks** and new covalent bond are formed between carbon atoms on nearby monomers. 
- The polyethene formed does not contain any double bonds.
- Ethene is one of the most **simple** and **versatile monomers**.
- It is easily able to undergo addition polymerisation.

#### LDPE (Low-Density Polyethylene)

- LDPE is produced under **high temperatures** and **pressures**. 
- Under these harsh conditions, the polymer is **formed too rapidly** for the molecules to be neat and symmetrical. 
- The products usually contain too many small chains (branches) that divide off the main polymer.
- The molecules in the polymer **cannot pack closely together** thus reducing the dispersion forces. 
- The arrangement of the polymer molecules can be described as disordered or non-crystalline.

##### Properties of LDPE

- Flexible, chemically inert, good elongation

- Low melting point/thermoplastic
- Lightweight, good puncture resistance
- Waterproof
- Used in: Milk carton lining, bowls, flexible water pipes, bottles

#### HDPE (High-Density Polyethylene)

- Highly specialised transition metal catalyst, known as **Ziegler-Natta catalysts** are used to avoid the need for high pressure. 
- Due to the polymer being produced under a lower pressure, the conditions are milder and there are fewer branches.
- The **lack of branches** allows the molecules to **pack together tightly** increasing the **density** and the **hardness** of the polymer formed. 
- The arrangement of the polymer molecules is more ordered, resulting in **crystalline sections**.
- Used in: Food packaging, dustbins, crates, drums, water pipes

### Polyvinyl Chloride (PVC)

- PVC (polychloroethene) is made out of **vinyl chloride** monomers. 
- The **chlorine atoms** introduce **dipoles** into the long molecules. 
- This increases the IMF between molecules, which leads to a **higher melting point**. 
- A PVC item burning in a flame will not continue to burn when it is removed from the flame. 
- It is used in products such as conveyor belts, cordial bottles, water pipes and the covering of electrical wires.
- **Pure PVC** is very **hard** and **brittle**. 
- **Additives** are incorporated into PVC to improve its flexibility, thermal stability and UV stability. 
- In a fire, PVC decomposes to form toxic and corrosive hydrogen chloride.

### Polystyrene

- First commercial production by IG Farben; used in disposable household products, plastic model kits, laboratory containers, insulation and packaging.
- Benzene rings are covalently bonded to every second carbon atom in the polymer chain. 
- This causes polystyrene to be a **hard** but quite **brittle** plastic with a **low density**. 
- It is used to make food containers, picnic sets, refrigerator parts, and CD and DVD cases. 
- Polystyrene is made from **styrene** (ethylbenzene monomers).
- Polystyrene (polyethylbenzene) is commonly manufactured as a **foam**. 
- Foamed polymers are formed by **blowing a gas** through melted polymer materials, making them 95-98% air by volume. 
- Foaming can **drastically change the physical properties** of a polymer material.
- Polystyrene foam is produced by introducing pentane into melted polystyrene beads.
- The beads swell up to produce the lightweight, insulating, shock-absorbing foam that is commonly used for takeaway hot drink containers, bean bag beans, packaging materials and safety helmet linings. 
- Once polystyrene has been converted to a foam, it is difficult to recycle.

### Polytetrafluoroethylene (PTFE)

- Polytetrafluoroethene is used in cookware fabrics, wiper blades, nail polish, industrial coatings, also known as Teflon, or Fluon. 
- Made out of **tetrafluoroethene** monomers.
- Tetrafluoroethene is formed when all the hydrogen atoms in ethene are replaced by highly electronegative **fluorine** atoms.
- It has quite exceptional properties that are very different from those of polyethene. It can be used to make non-stick frying pans, medical implants, gears and clothing. 
- The electronegative fluorine atoms reduce the strength of intermolecular bonds with other substances.

#### Properties of PTFE

- Non-stick
- Heat resistant
- Chemical resistant
- Good mechanical properties
- Low friction coefficient
- Flame resistant
- High melting point

### Polyethylene Terephthalate (PET)

- Polyesters are a **class of polymers** that are formed through the process of condensation polymerisation. 
- Polyesters are formed by combining monomers that contain **carboxylic acid** and **hydroxyl** functional groups. 
- They are typically formed by reacting a dicarboxylic acid monomer with a diol monomer.
- This is the most often polymer used to make polyester fabric. 
- PET is synthesised by reacting **benzene-1,4-dioic acid monomers with ethane-1,2-diol monomers.**
- PET has a range of uses including recyclable drink bottles and food packaging. 
- PET is a strong material because the ester groups are polar, so that there are dipole-dipole attractions between the polymer chains. 
- Benzene rings make it stiff and strong, resistant to deformation.

### Nylon

- Nylon stockings created shopping frenzy in the USA in the 1940s. 
- It is also used in clothing, parachutes, kitchen utensils, toothbrushes, fishing lines, guitar strings, seatbelts.
- Nylon is formed when a monomer containing an **anime group** on each end reacts with a monomer with a **carboxyl** group on each end, a **polyamide** can form.
- The term ‘nylon’ refers to the group of **polyamides**, in which the monomers are linear carbon chains. 
- A common example is nylon-6,6 which is named so because the dicarboxylic acid monomer has a chain of 6 carbons and the diamine monomer also has a chain of 6 carbon atoms.
- Nylon can be **easily drawn into fibres** that have high **tensile** strength. 
- These fibres are used to produce strong lightweight material for clothes.

> A few years after the release of nylon, [a movie called "The Man in the White Suit"](https://www.imdb.com/title/tt0044876/) came out, portraying the tale of a scientist who had invented an invincible fabric, so stain resistant it couldn't even be dyed (hence white suit). The product is an instant hit until labour unions and corporate overlords realise that as soon as everyone has the amount they need, they will stop buying more (because it's invincible), and so they order him to make it weaker. This is almost identical to the invention of nylon, which replaced more fragile fabrics like silk. Over the last few decades, nylon has been weakened intentionally by manufacturers so that it wears out faster than it naturally would, a technique known as "planned obsolescence". [You can read more about it here.](https://perma.cc/J3QV-LBLE)

## And that's it! The longest module is over!
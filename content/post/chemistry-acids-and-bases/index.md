---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Chemistry: Acids and Bases"
subtitle: "Notes for Module 5 of Chemistry (Acids and Bases)"
summary: "Notes for Module 5 of Chemistry (Acids and Bases)"
authors: [Pranav Sharma]
tags: [Year 12, Chemistry, Module 5, Acids and Bases, Acids, Bases, Bronsted-Lowry, Hydronium, Dissociation, Amphiprotic, Organic Acids, Neutralisation, Neutralization, pH, pH scale, Litmus paper, Alkali, Basic, Base, Acid, Carbonate, Phenolphthalein, Bromoethyl Blue, Methyl Orange, Indicator, Lavoisier, Arrhenius, Bronsted, Davy, Dilution, Precipitation, Conjugate pair]
categories: [Year 12, Chemistry, Module 5, Acids and Bases]
date: 2021-02-06T10:01:33+11:00
lastmod: 2021-02-06T10:01:33+11:00
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

{{< callout warning >}}

Some (most) of the chemical formulae in this post do not have the state as a subscript (for example, $\ce{H+(g)}$ instead of $\ce{H+_{(g)}}$). This is because the IUPAC Guidelines for chemical equations recommend that:

> ["The symbol for the state of equilibrium between phases, whether of a pure substance or a system of more than one component is sat, printed in Roman type and used ***EITHER*** as a subscript ***OR*** in parentheses." (Section 2.3. Extended Notation for States of Aggregation)](https://web.archive.org/web/20131125004444/http://pac.iupac.org/publications/pac/pdf/1982/pdf/5406x1239.pdf)

As the science sections of the site have around 4000 users a month from outside of NSW, we prefer to stick to international industry standards when working with math and science. For these readers, this note is of no relevance. 

However, the majority of our userbase is still HSC students, so we feel that its important to make note of the fact that NESA believes that they know better than the IUPAC guidelines and, as a result, in tests, you must use BOTH parentheses (brackets) AND subscript. If you are transcribing our content into your book, we recommend that you get into the habit of this.

{{< /callout >}}



---

### What is an Acid?

- Acids are a group of commonly used substances with several common properties:
  - Produce $\ce{H+}$ when dissolved in water
  - Ionise when dissolved
  - $pH\lt7$
  - Sour taste
  - Corrosive
  - Turn blue litmus paper red
  - Conduct electricity (stronger acids are better conductors)

### What is a Base?

- Bases are another group of substances with common properties:
  - Taste bitter
  - Slippery feel (like soap)
  - Produce $\ce{OH-}$ ions when dissolved on water
  - $pH\gt7$
  - Corrosive (caustic)
  - Turn red litmus paper blue

## Indicators

- Indicators are a category of substances which give a qualitative indication of the pH of a solution

- Indicators change color as a response to the surrounding $H^+$ and $OH^-$ ions
- An acidic solution has a high concentration of hydrogen ions, while basic solutions have high concentration of Hydroxide ions
- pH can be calculated quantitatively using the formula:

$$pH=-\log_{10}[\ce{H+}]$$

 ### How do indicators work?

- Most indicators are organic weak acids or weak bases. They are a special case, in which:

$$\ce{HInd_{(aq)}<=>H+_{(aq)} +Ind-_{(aq)}}$$

$$\text{Molecule (Color 1)}\ce{<=>}\text{Hydrogen Ion + Anion (Color 2)}$$

> Note: $Ind$ is an abbreviation for "indicator" and represents the bit that changes color.

- The two forms of the substance are distinctly different colors (1 and 2). 
- The more $[\ce{H+}]$ changes, the more the equilibrium will shift (and so the more the color will change)

#### Low pH and high pH

- Lower pH means a greater concentration of Hydrogen ions
  - Equilibrium tends to the left hand side
  - The "hydrated" form of the indicator $(HInd)$ will dominate, so color 1 will be visible the most
- High pH means a low concentration of Hydrogen ions
  - Equilibrium will tend towards the right hand side
  - The "dehydrated" form of the indicator $(Ind^{-})$ will dominate, so color 2 will be visible the most

#### Indicator Table

| Indicator        | Color at Low pH | Color at high pH | Color Change pH Range |
| ---------------- | --------------- | ---------------- | --------------------- |
| Methyl Orange    | Red             | Yellow           | 3.1-4.4               |
| Bromothymol Blue | Yellow          | Blue             | 6.0-7.6               |
| Phenolphthalein  | Colorless       | Pink             | 8.3-10.0              |
| Methyl Red       | Red             | Yellow           | 4.8-6.0               |
| Litmus           | Red             | Blue             | 4.5-8.3               |
| Phenol Red       | Yellow          | Red              | 6.8-8.4               |

#### Limitations of Indicators

- pH is an approximation (not accurate)
- Cannot distinguish between strong and weak acids/bases
- Destroys or contaminates solutions

#### Advantages of Indicators

- Cheap and easy to use
- Provides a rudimentary indication of acidity/basicity

## Everyday uses of Indicators

### Swimming Pools

- Swimming pools need to be maintained close to $pH=7.4$ to avoid irritation of the eyes (which are about pH 7.4)

- Bromothymol Blue or Phenol Red can be used to test the pH of a pool

- Acids such as Hydrochloric Acid can be used to lower the pH

  > Kinda weird that you can buy nearly pure strong acids in a 25L container from a pool shop and no one will question it :woman_shrugging: like they're not even expensive or anything

- Substances such as sodium carbonate $(\ce{Na2CO3})$ can be added to raise the pH if it's too low

## Reactions of Acids

### Acid + Metal Hydroxide/Oxide (Neutralization Reaction)

- Metal oxides are also bases, and react with acids to form a metal salt and water. This can be generalised as:

  $$\ce{HX_{(aq)} +MOH_{(s/aq)}->MX_{(aq)} +H2O_{(l)}}$$

- Ammonia is a special case of a base that will undergo neutralisation but will not produce water, as it does not contain oxygen in its formula

  - Ammonia $(\ce{NH3})$ is covalent molecular
  - It is a gas at room temperature and highly soluble at STP
  - Instead of producing water, it produces ammonium salt as the product:

  $$\ce{HBr_{(aq)}+NH3_{(aq)}->NH4Br_{(aq)}}$$

### Acid + Metal Carbonate / Hydrogen Carbonate

$$\ce{HX_{(aq)} +MCO3_{(s)} ->MX_{(aq)} +H2O_{(l)} +CO2_{(g)}}$$

### Acid + Reactive Metal (Redox Reaction)

$$\ce{HX_{(aq)} +M_{(s)}->MX_{(aq)} +H2_{(g)}}$$

## Everyday Uses of Acids/Bases

- Bee stings and ant bites are acidic in nature. They can be neutralised using alkaline medicine such as baking powder.
- Wasp stings are alkaline in nature. Vinegar can be used to cure wasp stings because vinegar can neutralise the sting.
- When stung by a stingray, concentrated vinegar can be used to stop the nematocysts from firing off such that you won’t get injected with more venom.

## Theories of Acids and Bases

### Lavoisier - "Father of Chemistry" - 1776 - (Oxides)

- Antoine Lavoisier was a French chemist who established the quantitative science of chemistry
- He investigated **oxides** of different elements, and found that **non-metal oxides reacted with water, producing acidic solutions**
- He concluded that an **acid** must contain oxygen. For example:
  - $\ce{SO2 +H2O->H2SO3}$
  - $\ce{CO2 +H2O ->H2CO3}$

### Davy - 1810 - Hydrogen

- English chemist Humphry Davy (famous for his redox and electrolytes works) demonstrated that **hydrochloric acid** did not contain oxygen, thus disproving Lavoisier’s theory. 
- Davy suggested that **hydrogen** must be the **unifying component of acids** rather than oxygen.

### Liebig - 1838 - Acid + Metal

- The German chemist Justus von Liebig expanded on Davy’s idea. In 1838, he proposed that acids **contain hydrogen** which could be **displaced by a reaction with a metal**. For example:
  - $\ce{Mg +HCl ->MgCl2 +H2}$
  - $\ce{Zn +H2SO4 ->ZnSO4 +H2}$

### Arrhenius - 1884 - $\ce{H+}\text{ and }\ce{OH-}$

- Svante Arrhenius proposed the first concept of acids and bases we still use
- His work centered on the conductivity of electrolytes
- His theory was that electrolytes dissociated in water in ions
- He defined acids and bases according to their effect in water
- An **Arrhenius Acid** is a substance that produces a Hydrogen Ion when dissolved in water, for example:

$$\ce{HCl_{(aq)}->H+_{(aq)} +Cl-_{(aq)}}$$

- Arrhenius also notated that the most reactive acids also had the highest electrical conductivities
  - This has led to the concept that the strongest acids are the most dissociated in an aqueous solution
- An **Arrhenius Base** is a substance which produces $OH^{-}$ when dissolved in water.

#### Limitations of the Arrhenius Models

- Arrhenius’ definition does not explain the basic behaviour of substances like **ammonia**, which do not contain hydroxide ions in their formulae and hence should not be able to produce $OH^-$
- It does not explain why neutralisation reactions between some acids and bases produced solutions that were **not neutral**
  - The reaction between ammonia and hydrochloric acid produces an acidic solution. ($\ce{NH4Cl}$ – an acidic salt)
  - The reaction between acetic acid and sodium hydroxide produces a basic solution ($\ce{NaCH3OO}$ – a basic salt)
- The Arrhenius definition only covers acids and bases in **aqueous solutions**

## Bronsted-Lowry Acids and Bases

- In 1923, Danish chemist Johannes Nicolaus Bronsted and English chemist Thomas Martin Lowry independently proposed a new definition of acids and bases.

Acids and bases are defined by their **role** in a reaction:

1. - The **proton donor** is the Bronsted-Lowry **acid**

   - The **proton acceptor** is the Bronsted-Lowry **base**

     The Bronsted-Lowry definition allows **many more species** to be defined as acids or bases. It can explain the basic behaviour of **ammonia**. The NH3(aq) is accepting a proton from HCl in the aqueous solution. NH3(aq) is a Bronsted Lowry base and HCl is a Bronsted Lowry acid.

- Bronsted Lowry theory also explains the basic behaviour of **ionic compounds** in solution.
- Soluble carbonates and hydrogen carbonates **contain Bronsted Lowry bases**. They produce basic solutions.

1. First the compound **dissolves** in water to produce aqueous ions. This step proceeds completely, since all Group 1 ionic compounds are soluble:

   $\ce{Na2CO3 → 2Na+ + CO3^2−}$

2. 2)  The dissolved carbonate or hydrogen carbonate ion is a Bronsted Lowry base which **reacts with water** to produce hydroxide ions:

   $\ce{CO3^2- +H2O<=>HCO3- +OH-}$

- The Bronsted Lowry definition is broad enough that some species like water can be classified **both** an **acid** and a **base**.

- For example, when ammonia dissolves in water, water **donates H+** to ammonia and is acting as a **Bronsted Lowry acid**: $\ce{NH3 +H2O <=>NH4+ +OH-}$
- When $HCl$ dissolved in water, water accepts the hydrogen ion, so Hydrochloric acid becomes a Bronsted-Lowry Base: $\ce{HCl +H2O->H3O+ +Cl-}$

- Substances which can both donate and accept protons are known as *Amphiprotic Substances*

### Hydronium Ions

- A H+ ion is a bare proton with a +1 charge. This means that any H+ ion in water immediately combines with a water molecule to form a more stable **hydronium ion,** $\ce{H3O+}$
- H+ does not technically exist independently in solution.

$$\ce{H+ +H2O->H3O+}$$

## Strengths of Acids and Bases

### Strong/Weak Acids

- A strong acid is a substance which ionises completely in water (static equilibrium) to produce hydronium ions in aqueous solutions
- Strong acids include:
  - $\ce{HCl}$
  - $\ce{HNO3}$
  - $\ce{H2SO4}$
  - $\ce{HBr}$ (Hydrobromic Acid)
  - $\ce{HClO4}$ (Perchloric Acid)
  - $\ce{HClO3}$ (Chloric Acid)
- Most other common acids are weak acids, which ionide partially in water (dynamic equilibrium) to form hydronium ions in solution

#### Acid Dissociation Constant $(K_{a})$

$$K_a = \frac{[\ce{H+}][\ce{A-}]}{HA}$$

- The higher the $K_a$, the stronger the acid strength, as it favours the right hand side
- Most acids are monoprotic: they can only give 1 proton. However, some acids can give more than 1 proton, and are known as *polyprotic acids*
- Polyprotic acids have multiple $K_a$ values, depending on how many protons they give up
- For example, Phosphoric acid is a triprotic acid:

| Reaction                    | $K_a$                                                        |
| --------------------------- | ------------------------------------------------------------ |
| $\ce{H3PO4<=>H+ +H2PO4-}$   | $K_{a1}=\frac{[H^+][\ce{H2PO4-}]}{[\ce{H3PO4}]}=7.52\times 10^{-3}$ |
| $\ce{H2PO4-<=>H+ +HPO4^2-}$ | $K_{a2}=\frac{[H^+][\ce{HPO4^2-}]}{[\ce{H2PO4-}]}=6.23\times 10^{-8}$ |
| $\ce{HPO4^2-<=>H+ +PO3^3-}$ | $K_{a3}=\frac{[H^+][\ce{PO4^3-}]}{[\ce{HPO4^2-}]}=2.20\times 10^{-13}$ |

- The number of protons an acid produces is unrelated to its strength



{{< callout note >}}

Strength and concentration are not the same, nor are they dependent on each other:

- Strength depends on the identity of the acid/base and the extent of its ionization in water
- Concentration depends on the amount of the substance in a given solution

{{< /callout >}}

## Conjugate Acids and Bases

The ionisation of an acid can be represented by the following equation:

$$\ce{HA(aq)<=>H+(aq) +A-(aq)}$$

- When the equation is read in reverse, it shows the $A-$ accepting a proton (and thus acting as a Bronsted-Lowry Base)
- $HA$ and $A^-$ are referred to as a *conjugate acid/base pair*
  - The difference between the two species is a proton $(\ce{H+})$
  - When the acid loses a proton, it forms the conjugate base
  - When the base gains a proton, it forms the conjugate acid
  - An acid's conjugate base has 1 less proton, while a base's conjugate acid has 1 more proton
  - Acid→Donates H+→Conjugate Base
  - Base→Accepts H+→Conjugate Acid

### Relative Strengths of Conjugate Pairs

- The two species in a conjugate pair have inverse strength: $\require{ams}$
  - A strong acid will have an extremely weak (virtually neutral) conjugate base (e.g. $\ce{HCl}$ and $\ce{Cl-}$), and vice versa
- A strong acid has an equilibrium which lies far to the right: in essence, it has virtually no reverse reaction:

$$\begin{gather*}\bbox[5px, border: 2px solid orange]{\bbox[5px, border: 2px solid red]{\text{Strong BL Acid}}\text{ + Water}}\rightarrow\bbox[5px, border: 2px solid pink]{\text{Hydronium +}\bbox[5px, border: 2px solid green]{\text{Weak BL Base}}} \\\\ \bbox[5px, border: 2px solid orange]{\bbox[5px, border: 2px solid red]{\ce{HCl(aq)}} \ce{+H2O(l)}}\ce{->}\bbox[5px, border: 2px solid pink]{\ce{H3O+(aq) +}\bbox[5px, border: 2px solid green]{\ce{Cl-(aq)}}} \\\\ \bbox[5px, border: 2px solid orange]{0\text{%}}\longrightarrow \bbox[5px, border: 2px solid pink]{100\text{%}}\end{gather*}$$



- A weak acid has an extremely strong conjugate base, and so the equilibrium lies far to the left

$$\begin{gather*}\bbox[5px, border: 2px solid orange]{\bbox[5px, border: 2px solid red]{\text{Weak BL Acid}}\text{ + Water}}\rightarrow\bbox[5px, border: 2px solid pink]{\text{Hydronium +}\bbox[5px, border: 2px solid green]{\text{Strong BL Base}}} \\\\ \bbox[5px, border: 2px solid orange]{\bbox[5px, border: 2px solid red]{\ce{HF(aq)}} \ce{+H2O(l)}}\ce{->}\bbox[5px, border: 2px solid pink]{\ce{H3O+(aq) +}\bbox[5px, border: 2px solid green]{\ce{F-(aq)}}} \\\\ \bbox[5px, border: 2px solid orange]{92\text{%}}\longrightarrow \bbox[5px, border: 2px solid pink]{8\text{%}}\end{gather*}$$

#### Practice Question 1

Explain why the presence of Nitrate ions in an aqueous solution will not make it basic (i.e. will not produce extra $\ce{OH-}$ ions). (3 Marks)

$$\ce{HNO3(aq) +H2O(l) ->H3O+(aq) +NO3-(aq)}$$

Note: The reaction can be considered to go to completion, because the reverse reaction does not occur to any significant extent.

{{< spoiler text="Toggle Solution" >}}

1. Identify that $NO^-_3$ is a neutral ion
2. Identify that it does not form Hydroxide ions
3. Identify that without hydroxide ion formation, the solution cannot be basic

**EXAMPLE ANSWER:**  $NO^-_3(aq)$ has virtually no tendency to accept hydrogen ions, and is thus a *neutral ion* (1). As a result, it does not accept any $\ce{H+}$ from water to produce $\ce{OH-}$ ions (2). Since no hydroxide ions are formed, the solution does not become basic by the addition of Nitrate ions (3).

{{< /spoiler >}}

## Applying Brönsted-Lowry Theory

### Non-Neutral Salt Solutions

Many ions are not neutral when dissolved in water. As a result, they will have either acidic or basic properties.

- This means that in neutralisation reactions, the salt product is not necessarily neutral
- The pH depends on the nature of the salt

To show that an ionic compound will form an acidic, basic, or neutral solution:

1. Write an equation showing the dissociation of the compound into its two ions
2. Determine if either ion is acidic or basic by looking at their conjugates:
   - Strong acid + Weak base → Acidic
   - Strong acid + Strong base → Neutral
   - Weak acid + Strong base → Basic
3. Write an equation showing the acidic or basic ion reacting with water to form $\ce{H3O+}$ or $\ce{OH-}$

#### Example Question

Will a solution of potassium fluoride be acidic or basic? (2 Marks)

$$\ce{KF(aq)->K +(aq)+F-(aq)}$$

{{< spoiler text="Toggle Solution" >}}

1. Identify Fluoride as a strong conjugate base
2. Write the equation showing the formation of $\ce{OH-}$

**EXAMPLE ANSWER:**



$\ce{F-}$ is the conjugate base of a weak acid $(\ce{HF}),$ and will therefore be a strong base. As a result, it will have a high tendency to react with water to form $OH^-$, resulting in a basic solution of $pH\gt7.$

$$\ce{F-(aq)+H2O(l)<=>OH-(aq) +HF(aq)}$$

{{< /spoiler >}}

### Amphiprotic Substances

- Water is both a Brönsted-Lowry Acid and base, and is therefore an *amphiprotic substance*
- Other amphiprotic substances include $\ce{HCO3-,HSO4-,H2PO4-,HPO4- \text{ and }NH3}$
- Amphiprotic substances are a subset of *amphoteric* substances, which can react with both acids and bases

- In laboratories, Sodium Bicarbonate $(\ce{NaHCO3(s)})$ is commonly used for neutralising acid spills as it is a weak, amphoteric base that produces $\ce{CO2}$ during neutralisation
  - As a weak base, it is not very exothermic
  - As an amphoteric substance, it will absorb extra $\ce{OH-}$ if too much is added
  - As a producer of $\ce{CO2},$ it has a visible product when neutralisation is complete
  - As a solid, it does not contribute to the size of the spill

### Acid/Base Behaviour of Oxides

An **acidic oxide** is one which either reacts with **water** to form an **acidic solution** or reacts with **bases** to form **acidic salts**. Common acidic oxides are $\ce{CO2}$ and $\ce{P4O10}$ (diphosphorus pentoxide) and $\ce{SO2}$.

$$\ce{CO2(g) +H2)(l)<=>H2CO3(aq)<=>H+(aq) +HCO3-(aq)}$$

$$\ce{CO2(g) +2NaOH(aq) ->Na2CO3(aq) +H2O(l)}$$

**Non-metal** from the RHS of the periodic table tend to form **acidic oxides**. These elements have **high electronegativity** and share electrons when bonding with oxygen, so non-metal oxides are **covalent**.

A **basic oxide** is one that reacts with **water** to form an **alkaline solution** or reacts with **acids** to form **basic salts**. Metals from the LHS of the periodic table tend to form basic oxides. These elements have **low electronegativity**, so metal oxides are **ionic**.


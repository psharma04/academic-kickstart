---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Module 6: Acids and Bases"
subtitle: "Notes for Module 6 of Chemistry (Acids and Bases)"
summary: "Notes for Module 6 of Chemistry (Acids and Bases)"
authors: [Pranav Sharma, Jackson Taylor]
tags: [Year 12, Chemistry, Module 6, Acids and Bases, Acids, Bases, Bronsted-Lowry, Hydronium, Dissociation, Amphiprotic, Organic Acids, Neutralisation, Neutralization, pH, pH scale, Litmus paper, Alkali, Basic, Base, Acid, Carbonate, Phenolphthalein, Bromoethyl Blue, Methyl Orange, Indicator, Lavoisier, Arrhenius, Bronsted, Davy, Dilution, Precipitation, Conjugate pair]
categories: [Year 12, Chemistry, Module 6, Acids and Bases]
date: 2021-02-07T10:01:33+11:00
lastmod: 2021-02-07T10:01:33+11:00
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
type: book
---

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

  > Kinda weird that you can buy concentrated strong acids in a 25L container from a pool shop and no one will question it :woman_shrugging: like they're not even expensive or anything

- Substances such as sodium carbonate $(\ce{Na2CO3})$ can be added to raise the pH if it's too low

## Reactions of Acids

### Acid + Metal Hydroxide/Oxide (Neutralization Reaction)

- Metal oxides are also bases, and react with acids to form a metal salt and water. This can be generalised as:

  $$\ce{HX_{(aq)} +MOH_{(s/aq)}->MX_{(aq)} +H2O_{(l)}}$$

- Ammonia is a special case of a base that will undergo neutralisation but will not produce water, as it does not contain oxygen in its formula

  - Ammonia $(\ce{NH3})$ is covalent molecular
  - It is a gas at room temperature and highly soluble at STP
  - Instead of producing water, it produces ammonium salt as the product:

  $$\ce{HBr_{(aq)} +NH3_{(aq)}->NH4Br_{(aq)}}$$

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

     The Bronsted-Lowry definition allows **many more species** to be defined as acids or bases. It can explain the basic behaviour of **ammonia**. The $\ce{NH3{(aq)}}$ is accepting a proton from $\ce{HCl}$ in the aqueous solution. $\ce{NH3{(aq)}}$ is a Bronsted Lowry base and $\ce{HCl}$ is a Bronsted Lowry acid.

- Bronsted Lowry theory also explains the basic behaviour of **ionic compounds** in solution.
- Soluble carbonates and hydrogen carbonates **contain Bronsted Lowry bases**. They produce basic solutions.

1. First the compound **dissolves** in water to produce aqueous ions. This step proceeds completely, since all Group 1 ionic compounds are soluble:

   $\ce{Na2CO3 → 2Na+ + CO3^2−}$

2. The dissolved carbonate or hydrogen carbonate ion is a Bronsted Lowry base which **reacts with water** to produce hydroxide ions:

   $\ce{CO3^2- +H2O<=>HCO3- +OH-}$

- The Bronsted Lowry definition is broad enough that some species like water can be classified **both** an **acid** and a **base**.

- For example, when ammonia dissolves in water, water **donates H+** to ammonia and is acting as a **Bronsted Lowry acid**: $\ce{NH3 +H2O <=>NH4+ +OH-}$
- When $HCl$ dissolved in water, water accepts the hydrogen ion, so Hydrochloric acid becomes a Bronsted-Lowry Base: $\ce{HCl +H2O->H3O+ +Cl-}$

- Substances which can both donate and accept protons are known as *Amphiprotic Substances*

### Hydronium Ions

- A $\ce{H+}$ ion is a bare proton with a $1+$ charge. This means that any $\ce{H+}$ ion in water immediately combines with a water molecule to form a more stable **hydronium ion,** $\ce{H3O+}$
- $\ce{H+}$ does not technically exist independently in solution.

$$\color{orange}{\ce{H+ +H2O->H3O+}}$$

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
  - Acid→Donates $\ce{H+}$→Conjugate Base
  - Base→Accepts $\ce{H+}$→Conjugate Acid

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

$$\ce{KF(aq)->K+(aq) +F-(aq)}$$

{{< spoiler text="Toggle Solution" >}}

1. Identify Fluoride as a strong conjugate base
2. Write the equation showing the formation of $\ce{OH-}$

**EXAMPLE ANSWER:**



$\ce{F-}$ is the conjugate base of a weak acid $(\ce{HF}),$ and will therefore be a strong base. As a result, it will have a high tendency to react with water to form $OH^-$, resulting in a basic solution of $pH\gt7.$

$$\ce{F-(aq) +H2O(l)<=>OH-(aq) +HF(aq)}$$

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

$$\ce{CO2(g) +H2(l)<=>H2CO3(aq)<=>H+(aq) +HCO3-(aq)}$$

$$\ce{CO2(g) +2NaOH(aq) ->Na2CO3(aq) +H2O(l)}$$

**Non-metal** from the RHS of the periodic table tend to form **acidic oxides**. These elements have **high electronegativity** and share electrons when bonding with oxygen, so non-metal oxides are **covalent**.

A **basic oxide** is one that reacts with **water** to form an **alkaline solution** or reacts with **acids** to form **basic salts**. Metals from the LHS of the periodic table tend to form basic oxides. These elements have **low electronegativity**, so metal oxides are **ionic**.

## pH Scale

### PH AND $H^+$ CONNECTION 

![Image result for pH scale
log](/image-cdn/mod6-img/media/image10.jpg)

-   pH 7 is neutral at 25℃ (Concentration of hydroxide and hydronium ions are equal)

The pH (potential of hydrogen) scale is **logarithmic** (base 10), not linear. **Significant figures** for logs are those **after the decimal point**.

$$pH=-\log_{10}[\ce{H+}]$$

### PH OF STRONG AND WEAK ACIDS 

pH can deduce the **relative strength** and **concentration** of
different acidic solutions.

-   ↑ Acid strength → ↑ Degree of ionisation → ↑ \[$H^+$] → ↓ pH

-   ↑ \[Acid\] → ↑ \[$H^+$] → ↓ pH

-   Acid strength and concentration both affect the pH of a solution.

For a **monoprotic strong acid**, the concentration of $\ce{H+}$ is the same
as the **concentration of the acid** $(𝐻𝑋 → 𝐻^+ + 𝑋^−)$ For **weak
acids**, the concentration of $H^+$ will depend on its strength and
**concentration** of the acid solution.

> $𝐻𝐴 ⇌ 𝐻^+ + 𝐴^−$Where $ K_a = \frac{[\ce{H+}][\ce{A-}]}{HA}$

### POH OF STRONG AND WEAK BASES 

**pOH** is a measure of **$OH^-$ concentration** that is similar to pH.

-   $p$$𝑂𝐻 = − log_{10}[𝑂𝐻^−]$


**Strong bases** are Group 1 and 2 hydroxides. The concentration of
hydroxide ions depends on the **number of hydroxide ions** in the
formula.

For **weak bases**, the concentration of $OH^-$ will depend on its
strength and the concentration of the base solution.

### AUTOIONISATION OF WATER 

The concentration of **$\ce{H+}$** and **$\ce{OH-}$** in any aqueous solution are
**directly related**. This is because water is a **very weak acid**
which forms the following **exothermic** equilibrium reaction.

- The equilibrium constant for this equilibrium is called the
  **ionisation constant for water**.

$$\begin{gather*}\color{orange}{K_w=\ce{[H3O+][OH-]}} \\\\ \color{orange}{=1.0\times10^{-14}} \\\\ \color{orange}{pK_{w}=pH+pOH =14} \\\\ \color{orange}{pH=14+\log_{10}[\ce{OH-}]}\end{gather*}$$

### $pK_{a}$ AND $pK_{b}$ 

Since$K_{a}$ values are usually very small, **$pK_{a}$ values** are often
cited instead:

> $p$$K_{a}$ = − $\log_{10}$ $K_{a}$
>
> $K_{a}$ = 10−$p$$K_{a}$

↑ Strong acid → ↑$K_{a}$ → ↓$pK_{a}$



### PH MEASUREMENTS 

#### PH PROBE 

A **pH probe** or **pH meter** can be used to measure pH.

-   Advantages: Precision, non-destructive

-   Disadvantages: Initial costs, requires calibration before use

PH OF MIXED SOLUTIONS 
---------------------

### DILUTION CALCULATIONS 

The **total moles of solute** in a concentrated solution and the diluted
solution are **the same**.

- $c_{1}\cdot v_{1}=c_{2}\cdot v_{2}$

#### Practice Question

Calculate pH when 1.0 mL of 1.0M HCl is diluted to 1.25L.

{{< spoiler text="Toggle Solution" >}}

> $c_{1}\cdot v_{1}=c_{2}\cdot v_{2}$
>
> $c_{2}$ =  = 0.0008 𝑚𝑜𝑙/𝐿
>
> [𝐻𝐶𝑙] = $\ce{[H+]}$= 0.0008 𝑀
>
> $pH$ = −log$\ce{[H+]}$= − log(0.0008) = 3.10 (2 sig. figures)

{{< /spoiler >}}



BUFFERS 
-------

**HOW DO BUFFERS WORK?**

A buffer solution is a solution that can **resist pH change** when small
amounts of an acid or base are added. In order for it to work, it must
be able to **compensate** for the addition of either of an acid or base,
otherwise the pH will change significantly.

Buffers are commonly made by mixing a **weak acid** and its **conjugate
base** (or vice versa) typically in **equimolar** amounts of each.

-   For example, a buffer solution containing $\ce{CH3COOH}$ and $\ce{CH3COO-}$
    (in the form of $NaCH_3COO$) - The mixture exists in **equilibrium**,
    so all of the species in the equation are present.

> $\ce{CH3COOH(aq) +H2O(l)<=>CH3COO-(aq) +H3O+(aq)}$

When a small amount of **acid** is added, the concentration of $\ce{H3O+}$
increases.

-   When HCl is added to the buffer solution, ↑ $\ce{H3O+}$ which is a
    disturbance

-   It will shift to minimise the disturbance by shifting to the LHS and
    forming the products.

-   Role of conjugate base is to **react with excess $\ce{H3O+}$.** It
    'absorbs' the additional $\ce{H3O+}$

When a small amount of **base** is added, the situation is slightly more
complicated.

-   There are two acids that could react with the base $\ce{CH3COOH}$ and
    $\ce{H3O+}$

-   Because the concentration of $\ce{H3O+}$ is far lower than the
    concentration of $\ce{CH3COOH}$, the majority of $\ce{OH-}$ will react with
    $\ce{CH3COOH}$**,** producing **water** and $\ce{CH3COO-}$

-   Thus the concentration of $\ce{H3O+}$**does not change significantly**,
    and the pH stays **relatively constant**.

It can also be explained when $\ce{H3O+}$ and $\ce{OH-}$ react, causing
equilibrium to shift to right to minimise the disturbance

> $\ce{H3O+(aq) +OH-(aq)<=>2H2O(l)}$

### BUFFER CAPACITY

The **effectiveness** of a buffer is known as **buffer capacity**.

-   It is defined as the moles of $\ce{H3O+}$ or $\ce{OH-}$ necessary to
    **change the pH** of the buffer solution by **one unit**

-   Buffer capacity depends on both the **pH** of the buffer and the
    **total concentration** of the weak acid and conjugate base (or vice
    versa)

A buffer is most effective when the **amounts of weak acid** and
**conjugate base** present are **similar** (equimolar).

-   When pH = $pK_{a}$, the concentrations of weak acid and conjugate base
    are equal.

-   Therefore, a buffer solution is most effective when the **pH is
    within 1 unit of its $pK_{a}$.**

-   When the pH is too high, there is not enough acid to react with the
    added $\ce{OH-}$. When the pH is too low, there is not enough conjugate
    base to react with any $\ce{H3O+}$.

![Image result for buffer solution effectiveness
graph](/image-cdn/mod6-img/media/image19.jpg)

TITRATION CALCULATIONS 
----------------------

### DIRECT TITRATION CALCULATIONS 

The steps for a titration calculation are:

1. Write a balanced chemical equation for the reaction

2. Calculate the number of moles of Reactant A (of known concentration)
       in the volume used

3. Using the number of moles of A and the mole ratio in the equation,
       calculate the number of moles of Reactant B (unknown concentration)
       used. 

4. Calculate the concentration of reactant B.

For **neutralisation** reactions, the **strength of the acid is
irrelevant** as the base is stronger than water. All of the protons in a
**polyprotic** acid will be irreversibly removed by the base.

### DILUTION - TITRATION CALCULATIONS 

When analysing a substance, the concentration may be too high for a
direct titration experiment tom be efficiently carried out. Instead, the
substance would be **diluted** by a known amount, and then the diluted
solution would be **titrated**.



### BACK TITRATION CALCULATIONS 

A back titration, or indirect titration, is a **two-stage** analysis:

-   Reactant A (of unknown concentration) is reacted with **an excess**
    of Reactant B (of known concentration and volume).

-   A titration is the performed on the excess Reactant B by determining
    the moles of Reactant C required to neutralise the excess.

Summary:

1. Sample is reacted with known excess of reagent. (e.g. known amount
   of a particular acid) 

2. Leftover excess is added

3. Excess is titrated to find moles of reagent reacted with solution.

Back titrations are generally used when:

-   One of the reactants is **volatile** (e.g. ammonia)

-   An acid or base is an **insoluble salt** (e.g. calcium carbonate)

-   Direct titration would involve **weak acid/weak base** titration
    (making it difficult to determine the equivalence point).



TITRATION 
---------

### TITRATION TERMINOLOGY 

Titration Terminology

> Titration - Volumetric analytical technique used for determining the
> concentration of a solution, when the concentration of the other
> reacting solution is known and volumes of the 2 solutions are
> accurately measured.
>
> Aliquot - An accurately known volume of liquid. In titration this
> usually refers to the liquid transferred via **pipette** into the
> **conical flask**.
>
> Analyte A - substance being analysed. This is usually a solution of
> **unknown concentration**.
>
> Back Titration - A two-stage analysis in which an excess of reactant is
> added to the analyte, then the excess is determined to calculate the
> concentration of the analyte.
>
> Burette - A graduated piece of glassware which dispenses measured amounts
> of the solution (the titrant).
>
> Endpoint - The point in titration when the indicator permanently changes
> colour.
>
> Equimolar - Same concentration.
>
> Equivalence Point - The point in a neutralisation reaction when the
> amounts of reactants are just sufficient to consume both reactants,
> without an excess of either. (i.e. in stoichiometric ratio)
>
> Pipette - A piece of glassware used to transfer a very accurately measured
> volume of solution.
>
> Primary standard - A substance of
> sufficiently high purity and stability that a solution of accurately
> known concentration can be prepared by weighing out the desired mass,
> dissolving in water and making the volume up to a known value.
>
> Titrand - The solution to which another reagent (titrant) is added
> during titration (usually in the conical flask)
>
> Titrant - The solution that is added during a titration (usually from a
> burette)
>
> Titre - The volume of titrant used in a titration
>
> Volumetric flask - A piece of glassware which can hold a set volume of
> solution very accurately

#### TYPES OF ANALYSIS 

-   Qualitative analysis: Involves **observations only**
-   Quantitative analysis: Involves **measurements** (mass, volume etc.)
-   Volumetric analysis: involves measurements of **volume**
-   Gravimetric analysis: involves measurements of **mass/weight**

### GENERAL TITRATION PROCEDURE 

In a titration experiment, the **number of moles** of a target material
(the **analyte**) is determined. This can then be used to calculate the
**concentration**.

A measured volume of the solution of unknown concentration, the
**analyte**, is usually placed in a conical flask (**titrand**) with a
**burette** containing the **titrant** above it.

> ![Image result for titration
> diagram](/image-cdn/mod6-img/media/image23.jpg)

A **burette** is a piece of volumetric glassware. It is a long tube with
a tap at one end so measured volumes of titrant can be accurately added
to the titrand.

Before the experiment begins, an **indicator** will normally also be
added to the conical flask to determine the approximate equivalence
point.

To perform the experiment the titrant is slowly added and stepwise to
the conical flask, with swirling, until the indicator undergoes a
**permanent colour change** (the **end point**).

Acid-base titrations are the most common titrations:

-   An acid and a base are reacted in a neutralisation reaction during
    the titration.

-   A suitable **acid-base indicator** is added to show when the
    reaction is just complete. However, indicators change colour over a
    range of pH, making it difficult to **accurately determine the
    equivalence point**. - For greater **accuracy**, a **pH meter** can
    be used.

The **pH changes rapidly** towards the end point of the titration and it
is easy to add too much titrant. The titrant must be added very
carefully, in **small volumes** close to the end to successfully
determine the exact amount required for complete reaction.

### DETAILED TITRATION PROCEDURE 

For titrating HCl against NaOH. HCl is placed into the conical flask and
NaOH in the burette.

#### PREPARING THE TITRAND (IN THE CONICAL FLASK) 

-   Rinse the inside of the pipette with a small with a small amount of
    HCl solution 3 times.

-   Use a pipette filler to fill the pipette with HCl until the bottom
    of the meniscus rests on the calibration line.

-   Hold the pipette so that its tip is resting against the inside of a
    clean conical flask. Let the solution run out.

-   Once the liquid level has stabilised, leave the pipette tip touching
    the flask for a few seconds before removing. (The pipette is
    calibrated to deliver the correct volume when a small amount of
    liquid remains in the tip -- do not shake it into the flask).

-   Use a wash bottle containing distilled water to wash any solution
    that might be on the inside wall to the bottom of the conical flask.

#### PREPARING THE TITRANT (IN THE BURETTE) 

-   Rinse the inside of the burette with a small amount of NaOH solution
    3 times, including through the tap.

-   Clamp the burette vertically

-   Pour NaOH solution into the burette

#### TITRATION 

-   Add a few drops of indicator into the conical flask and swirl
    gently.

-   Record the initial burette reading

-   Place the conical flask under the burette

-   Add NaOH to the conical flask until a permanent colour change occurs

-   Record the final burette reading

-   Repeat the experiment 3 times with fresh aliquots of HCl.

### WASHING 

Burette and pipette: Used to deliver the solutions used in the
titration. Final rinsing with **the solution** **to be delivered**.

Conical flask: Used to hold the aliquot or titrand. Final rinsing with
**distilled water**.

The washing procedure affects the accuracy of the calculated
concentration.

### TITRATION TECHNIQUE 

#### RINSING 

It is important to **rinse** each piece of **glassware** with the
**appropriate solution** after cleaning with distilled water and
immediately prior to use.

The solution that is to be transferred using a **pipette** is of
accurately known concentration, or its concentration is to be accurately
determined. If droplets of distilled water are present in the pipette,
it will dilute the reagent being delivered.

-   Rinse **burette** and **pipette** with solutions

-   Rinse **conical flask** and **volumetric flask** with distilled
    water

#### VOLUMETRIC ERRORS 

All glassware in titration is calibrated to be accurate when
measurements are taken at the **bottom of the meniscus**.

Any **air bubbles** in the liquid must be removed for volumes to be
accurate.

The pipettes used in titration are calibrated to **deliver the specified
volume** of solution with no additional force.

-   They are marked TD (to deliver) or EX (to expel)

-   This means that there should be a **small volume of liquid left in
    the tip** of the pipette after the aliquot has been accurately
    transferred. This should not be shaken out into the conical flask.

**Assessing accuracy - How close you are to the accepted value:**

$$\color{orange}{\text{% deviation}=\frac{\text{|experimental value - accepted value|}}{\text{accepted value}}}$$

### STANDARD SOLUTION 

A standard solution is a solution containing a precisely known
concentration of a substance. They can be categorised as **primary** or
**secondary**.

A **primary standard** is produced when a substance of high purity
dissolved in a known volume of solvent.

1)  Accurately **weigh** out a mass of solid close to the required mass
    in a beaker. Record the actual mass weighed.

2)  Add enough distilled water to dissolve the solid.

3)  Carefully transfer all the weighed mass to a clean volumetric flask
    of the approximate size, using a wash bottle and funnel. All the
    equipment that came into contact with weighed mass should be
    **rinsed** into the flask.

4)  Add distilled water until the **bottom of the meniscus is resting on
    the line** on the neck of the flask. Add the last few drops with a
    dropper.

5)  Stopper the flask. Firmly holding the stopper in place, **invert**
    several times to ensure the solution is **homogeneous**.

6)  Label the flask with the exact concentration, solution, date and
    name.

A substance suitable for preparing a **primary standard solution**
should have the following features:

-   High purity
-   Unaffected by exposure to air
-   Non-hygroscopic (does not absorb water from air)

{{< callout warning >}}

Hygroscopic with a G!!! Hydro- means "relating to moisture". Hydroscopic is something that can see underwater (very different to hygroscopic).

{{< /callout >}}

-   Have a large molecular mass to reduce percentage errors
-   Be a solid for easier weighing
-   Cheap and readily available
-   Have a high water solubility

A **secondary standard** is produced when its concentration is
determined via stoichiometry. 

- The process of producing a secondary
standard is called **standardisation.**

### EQUIVALENCE POINT 

The **equivalence point** of a titration is the point at which the
amount moles of acid and bases added **match the stoichiometric ratio**.

-   It is the point at which reaction is complete, with **no excess
    reactant**

-   The **pH** of the solution at the equivalence point determines the
    **appropriate indicator** to be used.

#### PH OF THE EQUIVALENCE POINT 

As the pH of water is neutral, the pH of the equivalence point will
depend entirely on the **salt** produced: whether it is acidic, basic or
neutral.

If an **acidic or basic salt** is produced by the neutralisation
reaction in a titration experiment, the equivalence point will not be
neutral.

-   Neutral salts are formed when **strong acids** react with **strong
    bases**.

-   Acidic salts are formed when **strong acids** react with **weak
    bases**. - Basic salts are formed when **weak acids** react with
    **strong bases**.

Note: When **strong acids** react with **metal carbonates** (weak
bases), the neutral salt is formed, but the resulting solution is still
**acidic**. This is because the carbon dioxide dissolves in water to
produce an acidic solution.

### INDICATOR SELECTION 

Indicators can be used to find the approximate equivalence point of a
titration.

-   The **equivalence point** is when exactly **enough moles** of
    **titrant** have been added to react with all the **titrand**.

-   The **end point** is when the indicator first undergoes a
    **permanent colour change.**

-   An indicator should be selected so that the **end point** is as
    **close as possible** to the equivalence point. (Systematic error.
    Will impact validity and accuracy)

    | Indicator        | Color at Low pH | Color at high pH | Color Change pH Range |
    | ---------------- | --------------- | ---------------- | --------------------- |
    | Methyl Orange    | Red             | Yellow           | 3.1-4.4               |
    | Bromothymol Blue | Yellow          | Blue             | 6.0-7.6               |
    | Phenolphthalein  | Colorless       | Pink             | 8.3-10.0              |
    | Methyl Red       | Red             | Yellow           | 4.8-6.0               |
    | Litmus           | Red             | Blue             | 4.5-8.3               |
    | Phenol Red       | Yellow          | Red              | 6.8-8.4               |

#### BROMOTHYMOL BLUE 

> ![Image result for bromothymol blue
> range](/image-cdn/mod6-img/media/image24.png)

![Image result for phenolphthalein pH colour test tube Related
image](/image-cdn/mod6-img/media/image25.png)

Explain why 0.20 M acetic acid and 0.20 M hydrochloric acid require the
same volume of sodium hydroxide solution to reach equivalence point, but
the pH values at their equivalence points are different.

> 𝐶𝐻3𝐶𝑂𝑂𝐻(𝑎𝑞) + 𝑁𝑎𝑂𝐻(𝑎𝑞) → 𝐶𝐻3𝐶𝑂𝑂𝑁𝑎(𝑎𝑞) + 𝐻2𝑂(𝑙)
>
> 𝐻𝐶𝑙(𝑎𝑞) + 𝑁𝑎𝑂𝐻(𝑎𝑞) → 𝑁𝑎𝐶𝑙(𝑎𝑞) + 𝐻2𝑂(𝑙)
>
> 𝐶𝐻3𝐶𝑂𝑂(−𝑎𝑞) + 𝐻2𝑂(𝑙) ⇌ 𝐶𝐻3𝐶𝑂𝑂𝐻(𝑎𝑞) + 𝑂𝐻(−𝑎𝑞)

Both acetic acid and hydrochloric acid are monoprotic acids that reacts
to completion when reacted with a strong base. As the concentration are
the same, the same amount is needed to neutralise the strong base, NaOH.
$\ce{CH3COO-}$ is the conjugate base of a weak acid and will react with
water to produce a basic solution. Therefore, resulting in a pH \> 7.
$\ce{Cl-}$ is the conjugate base of a strong acid and will not react hence
the solution remains pH = 7.

APPLICATION OF TITRATION 
------------------------

The equivalence point is located at the **most vertical point** (point
of inflection). All three common indicators for titration are suitable
for determining the equivalence point for a strong acid-strong base.
This is because there is a large rapid change in pH near the equivalence
point so all of the indicator would change colour when the same volume
of based is added, therefore it is not critical which indicator is used.

### CONDUCTIVITY GRAPHS 

During a titration, the conductivity of the solution changes. The
equivalence point may be located by plotting the conductance as a
function of the volume of titrant added.

The electrical conductivity of a solution depends on:

-   The **concentration** ions present
-   The **mobility** of the ions present:
    - More mobile ions, the more
      conductive it is  $\ce{H+}$ and $\ce{OH-}$ are highly mobile
    - $\ce{H+}$ ions are more conductive than $\ce{OH-}$ ions

Conductometric titrations are useful for titrations of coloured
solutions, analysis of dilute solutions, and when reversible reactions
are used (e.g. weak acid-weak base titration).

General rule:

-   Strong → Linear

-   Weak → Curved

![](/image-cdn/mod6-img/media/image30.png)

### WEAK ACID + STRONG BASE 

![](image-cdn/mod6-img/media/image31.png)

1)  Conductivity is initially low as acetic acid is a **weak acid** and
    only **partially ionises in water**.

2)  \[Not shown on the graph\] As the base is initially added,
    conductivity decreases 

-  $\ce{H+}$ is replaced by $\ce{Na+}$ which is less conductive 
- The presence of the newly formed acetate ions also decreases the ionisation of acetic acid due to the common ion effect.

> - 𝐶𝐻3𝐶𝑂𝑂𝐻(𝑎𝑞) + 𝑁𝑎𝑂𝐻(𝑎𝑞) → 𝐶𝐻3𝐶𝑂𝑂𝑁𝑎(𝑎𝑞) ⇌ 𝐶𝐻3𝐶𝑂𝑂(−𝑎𝑞) + 𝑁𝑎(+𝑎𝑞)
>
> - The initial production of the $\ce{CH3COO-}$ ions results in the
>   suppression of the $\ce{CH3COOH}$ ionisation due to the common ion effect.

3)  Conductivity then increases are more $\ce{Na+}$ and $\ce{CH3COO-}$ are
    produced. 

- There is a **minimal change** in pH due to the buffer region. The mixture of $\ce{CH3COO-}$/$\ce{CH3COOH}$

4)  Reaches the equivalence point

5)  Conductivity **increases more rapidly** as $\ce{Na+}$ and highly
    conducting $\ce{OH-}$ are added. (Excess strong base)

Initially, the conductance is low due to the low ionisation of the weak
acid. On the addition of the strong base, there is a decrease in
conductance due to the replacement of the $\ce{H+}$ by $\ce{Na+}$ but also
supresses the dissociation of the acetic acid due to the common ion
acetate.

The conductance increases on adding $\ce{NaOH}$ as it neutralises the
undissociated $\ce{CH3COOH}$ to $\ce{NaCH3COO}$ which is a strong electrolyte.
Conductivity increases due to the highly conductive $\ce{OH-}$ ions.

### STRONG ACID + WEAK BASE 

![](/image-cdn/uploads/C8tKWR2021-C8tKWR.png)

> $\ce{NH4+(aq) +H2O(l)<=> NH3(aq) +H3O+(aq)}$

Before the equivalence point, conductivity **decreases** like in the
strong acid-strong base graph.

After the equivalence point, the graph is **almost horizontal** as the
excess weak base is not significantly ionised due to the presence of its
conjugate acid.

Initially, the conductance is high due to the strong acid. The
conductance decreases due to the replacement of $\ce{H+}$. After the
equivalence point has been reached in the graph becomes almost
horizontal, since the excess weak base

(aqueous ammonia) is not easily ionised in the presence of the salt.

### WEAK ACID + WEAK BASE 



1)  $\ce{CH3COOH}$ is a weak acid and therefore only partially ionises.

2)  \[$\ce{H+}$\] gets used up. $\ce{CH3COO-}$ gets produced which suppresses the
    ionisation of $\ce{CH3COOH}$.

3)  Production of more ions

4)  Equivalence point

5)  Excess $\ce{NH3}$ is suppressed due to the common ion effect

{{< callout note >}}

Found this post useful? [Support us on Patreon.](https://patreon.com/schoolnotes)

{{< /callout >}}
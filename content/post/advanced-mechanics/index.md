---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Physics: Advanced Mechanics"
subtitle: "Notes on advanced mechanics (HSC Physics Module 1/5)"
summary: "Notes on advanced mechanics (HSC Physics Module 1/5)"
authors: [Pranav Sharma]
tags: [Year 12, Physics, Advanced Mechanics, Mechanics]
categories: [Year 12, Physics, Advanced Mechanics]
date: 2020-10-29T20:19:23+11:00
lastmod: 2020-10-29T20:19:23+11:00
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
{{% toc %}}
---
<!-- Start content below this line. If you need help, go to https://schoolnotes.xyz/docs/posts/ -->

## Projectile Motion

- A **projectile** is an object that is thrown or *projected* into the air and is **moving freely** (has no source of thrust)
- Examples of projectiles include a thrown tennis ball, a cricket ball hit with a bat, an arrow fired from a bow, or a person skydiving
- A projectile's flight is known as **Ballistic Flight**
- Ballistic flight takes the shape of a Parabola
- Gravity is the only force which is considered to act on a projectile
- Ballistic flight can be analysed using Newton's laws of motion, and the [equations of rectilinear motion](/post/kinematics/#suvat-equations)

{{% alert success %}}

Key points:

- Gravity is the only force which acts on a projectile
- To use SUVAT or Newton's Laws, projectiles must be:
  - Larger than $1mm$ in diameter
  - Travelling at less than $0.01x$ the speed of light $(0.01c)$
- Projectile flight paths take the shape of a [parabola](https://www.desmos.com/calculator/jrqwxwspif)
- The horizontal velocity of a projectile is **constant** throughout its flight $(u_{x}=v_{x})$

{{% /alert %}}

![projectile-motion](https://cdn.jsdelivr.net/gh/psharma04/image-repo@main/uploads/projectile-motion.png)

### Projectiles in freefall

- By definition, a projectile has no force affecting its horizontal motion after it is launched (remember, we ignore air resistance in physics)
- Since the only force acting on the projectile is gravity, which provides an equal acceleration at every point of flight, the object deviates from its straight horizontal path throughout its flight, until it collides with the ground
- Projectiles can be launched at any angle. The launch velocity must be resolved into vertical and horizontal components using $sin/cos/tan$ in order to solve most questions

> NOTE: a diagram tends to help with these questions. Also, splitting vectors into their components (such as the force diagram below) makes your life MUCH easier.
>
> ![Diagram of the component vectors](https://cdn.schoolnotes.xyz/images/svg/Force-at-an-angle.svg)
>
> Also, use pythagoras' theorem $(a^2 + b^2 =c^2)$ wherever you need to find the magnitude of a force in a rectilinear direction.

{{% alert note %}}

The Effect of Drag

- While mathematical questions usually don't include drag (also known as air resistance), a lot of the written questions for projectile motions expect you to mention it.
- The magnitude of drag depends on 4 factors:
  - Speed - drag is proportional to speed squared
  - Cross-section - drag is proportional to cross-section
  - The aerodynamic shape - certain shapes (such as a teardrop) are more aerodynamic than others, so objects with those shapes have less drag
  - Air density - drag is proportional to the density of the air
- Because drag and velocity are proportional, there is a velocity at which drag and gravitational acceleration reach equilibrium, and the projectile has no net acceleration
- The point where drag and gravitational acceleration are equal is known as **terminal velocity**

![velocity_time_graph_7658](https://cdn.jsdelivr.net/gh/psharma04/image-repo@main/uploads/velocity_time_graph_7658.png)

{{% /alert %}}

### Oblique Projectiles (projectiles launched at an angle)

- Projectiles launched obliquely (at an angle) have their vectors split into components along the x- and y- axes 
- Some of these components have specific names when used in projectile motion
  - For example, displacement $(s)$ is referred to as height in vertical motion $(h=s_{y}),$ and range in horizontal motion $(r=s_x)$

### Projectile Motion Relationships

| Normal                 | Horizontal       | Vertical                     | Other                             |
| ---------------------- | ---------------- | ---------------------------- | --------------------------------- |
| $v=u+at$               | $v_x = u_x$      | $v_y =u_y +g\cdot t$         | $u_x = u\cdot \cos(\theta)$       |
| $v^2 =u^2 +2as$        | $v^2_x=u^2_x$    | $s_y=u_y t +\frac{1}{2}at^2$ | $u_y =u\cdot\sin(\theta)$         |
| $s=ut+\frac{1}{2}at^2$ | $s_x=u_x\cdot t$ | $v_y = u_y^2 +2g\cdot s_y$   | $u=\sqrt{u_y^2 + u_x^2}$          |
| $s=\frac{t}{2}(u+v)$   | $s_x=u_x\cdot t$ |                              | $\theta=\tan^-1(\frac{u_y}{u_x})$ |

#### Maximum Height Formula (and derivation)

> $v_y^2=2gs_y$
>
> $\text{At max. height, }v_y=0$
>
> $\therefore 0=u^2_y +2gs_y$
>
> $\\\\$$s_y =\frac{u_y^2}{2g}$
>
> $\text{Expand }u_y:$
>
> $ s_y=\frac{-u^2\cdot\sin^2\theta}{2g}$
>
> $\text{Cancel negatives:}$
>
> $\color{green}{s_y =\frac{u^2 \cdot\sin^2(\theta)}{19.6}}$

#### Time of Flight (and derivation) when final height = initial height

> $v_y=u_y +gt$
>
> $\text{At max. height, }v_y=0, \text{time elapsed}=\frac{t}{2}$
>
> $\therefore 0=u_y +gt$
>
> $\frac{t}{2}=\frac{-u_y}{g}$
>
> $\text{Expand }u_y :$
>
> $t=\frac{-2u\cdot\sin(\theta)}{g}$
>
> $\text{Cancel negatives:}$
>
> $t=\frac{2u\cdot\sin(\theta)}{9.8}$

#### Time of flight (and derivation) when final height $\neq$ initial height

> $0=u_y t+\frac{1}{2}gt^2 -h$
>
> $=ut\cdot\sin(\theta)+\frac{1}{2}gt^2-h$
>
> $0=4.9t^2+u\sin(\theta)\cdot t-h_{initial}$
>
> $\text{Substitute into quadratic formula }( {t = \frac{{ - b \pm \sqrt {b^2 - 4ac} }}{{2a}}}):$
>
> $t=\frac{-u\cdot\sin(\theta)\pm\sqrt{(u\cdot\sin(\theta))^2-4(4.9)(-h)}}{9.8}$
>
> $\text{NOTE: One of the results may be either 0 or negative. Ignore this result.}$

## Circular Motion

- Circular motion is the motion of an object travelling in a circular path
- Newton's laws, as well as variants of the SUVAT equations, can be used to calculate properties of an object in circular motion

### Uniform Circular Motion

- In uniform circular motion, the magnitude of the object's velocity is constant, and the direction changes at a constant rate
- An object in a circular path with radius $r$ and constant speed $v$ takes $t$ seconds to compete one revolution. $t$ is referred to as the *period* of the object.
  - Frequency is the inverse of period $(\frac{1}{t}=f)$
- The velocity, $\vec{v},$ is tangential (at a tangent) to its path along the circle

![circular-motion-2](https://cdn.jsdelivr.net/gh/psharma04/image-repo@main/uploads/circular-motion-2.svg)

- The speed of an object in circular motion is $\frac{2\pi r}{T}$ or $2\pi r\cdot f$ $\text{(circumference}\div\text{period or circumference}\times\text{frequency)}$
- When objects travel in circular paths, it can be convenient to measure the change in angle over a given period of time
- The change in angle over time is known as *angular momentum*

> Angular momentum is represented as $w$
>
> $\text{Angular momentum = change in angle (radians) }\div\text{time}$
>
> $w=\frac{\Delta\theta}{t}$

### Centripetal Acceleration and Force

- In cases of circular motion, the direction of travel is constantly changing
- As a result, the velocity is changing as well (because vectors have a direction too) :thinking:
- If the velocity is changing, then the object is considered to be accelerating
- This is known as *centripetal acceleration*
- Because of centripetal acceleration, the object continually deviates inward from its tangential path, but the distance from the center remains constant

> Centripetal acceleration is represented as $a_c$
>
> $\text{Centripetal acceleration = velocity squared}\div\text{radius}$
>
> $\text{OR Centripetal acceleration }=4\pi^2\cdot\text{radius}\div\text{period}^2$
>
> Mathematically:
>
> $a_c =\frac{v^2}{r}=\frac{4\pi^2\cdot r}{T^2}$

### Forces that cause Circular Motion

- Since objects in circular motion are accelerating, Newton's scond law tells us that there must be an unbalanced force acting on the object
- This force is known as the *centripetal force*
- If the centripetal force is removed from an object in circular motion, the object will continue at the same speed, in a direction tangential to the circular path at the instant of release
- The normal force of centripetal force is* centrifugal force*

> Centripetal force is represented by $F_c$
>
> $\text{Centripetal force = (mass}\times\text{velocity)}\div\text{radius}$
>
> $\text{OR Centripetal force = }4\pi^2\cdot\text{radius}\times\text{mass}\div\text{period}^2$
>
> Mathematically:
>
> $F_c = \frac{mv^2}{r}=\frac{4\pi^2\cdot r\cdot m}{T^2}$



---
# References
<!-- Footnotes and references go below this line -->
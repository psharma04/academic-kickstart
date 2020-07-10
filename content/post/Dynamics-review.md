---
title: "Physics Module 2: Dynamics"
comments: true
date: 2020-06-16T11:36:21.010Z
highlight: true
higlight_style: "solarized-dark"
tags:
  - Physics
  - Year 11
  - Kinematics
categories:
  - Year 11
  - Physics
---

{{% toc %}}

### Force
- A force can be thought of as a push or a pull
- A force that acts by being directly in contact with an object is known as a *contact force*
  - Friction and drag are both contact forces
- A force that acts on an object at a distance is called a *non-contact force* or a force mediated by a field
- The unit of force is the Newton (N)
  - 1 Newton is the force exerted when holding 100g mass against the downward pull of gravity
- If more than one force is acting on an object, the vector sum is known as the *net force*
  - \\(\vec{F}_{\text{net}} = \vec{F}_1 + \vec{F}_2 + ... \vec{F}_n\\)
- The net force for a stationary object, or one that is moving at a constant velocity, is \\(0\\), also known as *equilibrium*
- The net force for an object that is speeding up, slowing down or changing direction is \\(\neq 0\\)

## Newton's Laws of Motion
### First Law
> Every object will maintain a constant velocity unless an unbalanced external force acts on it.
- Newton's first law means that if an object has no forces acting on it, then it will continue to travel at its current speed and direction until an unbalanced net force acts on it
![Diagram of Newton's First Law](https://schoolnotes.xyz/images/kinematics-1.jpg)
- Newton's first law is closely related to the concept of *Inertia*, the tendency of an object to resist any changes in motion
- This resistance is related to the mass of the object, with more massive objects having a greater inertia
  - The result of this is that to cause the same amount of change in motion, the amount of force increases proportionally to the amount of mass. This relationship is Newton's second law
### Second Law
> \\(\vec{F}=m \vec{a}\\)
>
> \\(\vec{F}=Force (Newtons)\\)
>
> \\(m=Mass (kilograms)\\)
>
> \\(\vec{a}=Acceleration (m/s^2)\\)
- The acceleration of an object is directly proportional to the net force on the object, and inversely proportional to the mass of the object. Therefore:
![Newton's second law triangle](https://schoolnotes.xyz/images/newtons-second-law-triangle.png)
- \\(1N = 1kg \times m/s^2\\)
- As a result, more force on the same mass means a greater acceleration, and an equal force on less mass also means a greater acceleration
- Newton's Laws of Motions are all subject to vector addition and subtraction
### Third Law
> For every action, there is an equal and opposite reaction
>
> \\(\vec{F}_\text{AB}=-\vec{F}\_{\text{BA}}\\)
- If object A pushes on object B with \\(x\\) Newtons of force, object B will push back on object A with \\(x\\) Newtons of force
- \\(\vec{F}_\text{AB}\\) and \\(\vec{F}\_{\text{BA}}\\) are known as an *action-reaction pair*
> Newton's third law only applies to forces acting on different objects

<table><thead><tr><th>Action Vector</th><th>Reaction Vector</th></tr></thead><tbody><tr><td>

\\(F_\text{by foot on ball}\\)

</td><td>

\\(F_\text{by ball on foot}\\)

</td></tr><tr><td>

\\(F_\text{by car on bus}\\)

</td><td>

\\(F_\text{by bus on car}\\)

</td></tr><tr><td>

\\(F_\text{by brick on Earth}\\)

</td><td>

\\(F_\text{by Earth on brick}\\)

</td></tr></tbody></table>

![Newton's third law diagram](https://schoolnotes.xyz/images/newtons-third-law-diagram.png)

### The Normal Force
- When a smaller object (object A) falls under the influence of a force (such as gravity) from a larger object (the Earth), the effective force on object A is easy to observe
- The action force is the gravitational force of the Earth being exerted on object A
- In this case, ignoring air resistance, object A will accelerate downward at \\(9.8m/s^2\\)
- If object A is then placed at rest on the floor, the gravitational force \\(\vec{F}=m\vec{g}\\) is still acting on it, but it is at rest
- According to Newton's first law, an object can only be at rest if all the forces acting on it are balanced, so there must be a force counteracting gravity
- This is known as the *normal force* \\((\vec{F}_N)\\)
![The normal force is perpendicular to the surfaces in contact](https://schoolnotes.xyz/images/normal-force-1.png)
![If there is no contact between the objects, there is no normal force](https://schoolnotes.xyz/images/normal-force-2.png)
- The normal force acts with the same magnitude as its reactant force, but perpendicular TO THE SURFACE THE OBJECT IS ON (this will be an important distinction later)
- It is important to note that the normal force and the reaction force from the third law are NOT THE SAME!!!
  - This is because the normal force and its opposite act on the same object, while Newton's third law acts on two different objects
- Weight and the normal force do not make up an action-reaction pair, because they both act on the same object

### The Inclined Plane
- In previous examples of the normal force, the surface has been horizontal. However, an object can be placed on a surface that is tilted at angle \\(\theta\\) to the horizontal
- Even on a tilted surface, \\(\vec{F}=m\vec{g}\\) still acts downwards
- However, the normal force acts at right angles to the SURFACE, and will change in magnitude according to the following formula:
> \\(\vec{F}_N=m\vec{g}\cdot cos\theta\\)
- THe motion of the object will then be affected by friction, if it is present
- The component of the weight force that acts ALONG THE SURFACE is given by
> \\(\vec{F}=m\vec{g}\cdot sin\theta\\)

![diagram of the normal force acting on an inclined plane](https://schoolnotes.xyz/images/normal-force-3.png)

### Friction
- Friction is expressed as \\(F=\mu F_N\\), where \\(\mu\\) is the Coefficient of Friction
- Note that Friction is directly proportional to the Normal Force, meaning that the frictional force at an angle is different to the frictional force on a flat plane
![Friction Graph](https://cdn.schoolnotes.xyz/images/jpeg/Friction-Graph.jpeg)

## Energy
- Energy is defined as the capacity to cause change
  - For example, a moving car has the capacity to cause change if it collides with something else
- Energy is SCALAR (no direction) and is measured in $\text{Joules }(J)$
  - 1 Joule is the amount of energy required to lift a 1kg mass to a height of 0.1m (10cm)
  - Joules are also sometimes expressed as $Nm,$ or Newton-Meters. The reason for this is explained [here](#quantifying-work).
{{% alert note %}}
SI Equivalents:
$1J=1\frac{kg\cdot m^2}{s^2}=1N\cdot m=1Pa\cdot m^3=1W\cdot s=1C\cdot V$
{{% /alert %}}
- There are 2 main categories of energy: kinetic and potential
![Tree diagram of the types of energy](http://cdn.schoolnotes.xyz/images/svg/energy-tree-diagram.svg)
- Kinetic energy is primarily associated with motion, but also includes less visible forms of energy, such as heat and sound
- Potential energy is the energy of an object based on its position in a field
  - Examples of potential energy include gravitational, magnetic, and elastic potential energy
{{% alert note %}}
- In the formula $E=mc^2 ,$  $E$ refers to nuclear potential energy
{{% /alert %}}
## Work
- When a force acts on an object and causes energy to be transferred or transformed, physics refers to this as "work"
- Work is a change in energy $(W=\Delta E)$
> __DEFINITION:__ *{{< hl >}}Work is the product of the net force causing the energy change and the displacement of the object in the direction of the force during the energy change.{{< /hl >}}* [^1]
### Quantifying Work
- Since work is a change in energy, the unit of work is also Joules $(J)$
- The formula for work is:
> $\color{lightblue}{W=\vec{F}_{net}\vec{s}}$

  > $W: \text{Work }(J)$
  >
  > $\vec{F}_{net}:\text{Net Force }(N)$
  >
  > $\vec{s}: \text{displacement }(m)$

- Since $W=\vec{F}_{net}\vec{s}, 1J=1N\cdot 1m=1Nm$
- Therefore, 1 joule is 1 newton metre
  - In other words, a force of 1N, acting over a distance of 1m, does 1J of work
- Using the definition of a Newton, work can be defined in Base SI units:
  - $1J=1N\times 1m = 1kgms^{-2}\times 1m =1kgm^2 s^{-2}$
- Note that work is scalar, even though it is composed of 2 vectors
### Work and Friction
- In an ideal situation where there is no friction, 100% of work is transformed into kinetic energy
- However, in most real situations, some of the work done on an object is converted into heat and sound
- In a situation where the net friction force and net work force are balanced, Newton's first law dictates that the object will maintain a constant velocity
{{% alert note %}}
### Force without Work
- According to the defintion of work, an object must move to say that work has been done
- Therefore, if a force is applied to an object but the object does not move, then no work has been done
- This can be proven mathematically:
> $W=\vec{F}_{net}\vec{s}$
>
> $\text{Substitute }\vec{s}=0$
>
>$W=\vec{F}_{net}\cdot 0$
>
> $=0,\text{ }\therefore\text{No work has been done.}$
{{% /alert %}}
### Work and Displacement at an Angle
- When a force is applied, sometimes the object does not move in the same direction of the force
![Force at an angle diagram](https://cdn.schoolnotes.xyz/images/svg/Force-at-an-angle.svg)
- In this case, the component of the applied force that acts on the object is considered the net force
### Force-Displacement Graphs
- Force-Displacement graphs illustrate how a force changes with displacement [^2]
![Force displacement graph. Source: ScienceFlip](https://cdn.schoolnotes.xyz/images/jpeg/force-displacement-graph-1.jpeg)
- The area under a Force-Displacement graph is Work
- If the graph is a flat, horizontal line, then a constant amount of force is being applied
- The force displacement graph for pulling a spring, for example has a gradient >1, because there is a greater force required the more you stretch it
![Force displacement graph of a spring](https://cdn.schoolnotes.xyz/images/png/spring-force-displacement-graph.png)
---
<!-- Content ends here. Put references below this line -->
# References
[^1]: Dommel, A., Dommel, N., Hamilton, M., Hebden, K., Madden, D., & Stanger, J. (2017). Pearson Physics 11 New South Wales Student Book (1st ed., p. 157). Pearson Australia.
[^2]: ScienceFlip. (n.d.). Force-Displacement Graphs – Learn – ScienceFlip. ScienceFlip – A Resource for Students and Educators. Retrieved July 10, 2020, from https://www.scienceflip.com.au/subjects/physics/dynamics/learn12/

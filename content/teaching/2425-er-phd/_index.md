---
title: "Evolutionary Robotics"
academic_year: "24/25"
type: courses
math: true
---

This page is about the **PhD** course Evolutionary Robotics, for the PhD programs:
- [Applied Data Science and Artificial Intelligence (ADSAI)](https://adsai.units.it/)
- [Ingegneria Industriale e dell'Informazione](https://web.units.it/dottorato/ingii/)

For both, the course accounts for 1.5 CFUs and lasts 12 hours.

## Program, goals, requirements

### Detailed program (12h)

- Evolutionary computation (EC).
  - Definition of global optimization problem; evolutionary algorithm (EA); selection criteria; exploration/exploitation trade-off; multi-objective problems; solution representation; popular representations with their initialization and genetic operators; properties of the representation.
  - Main EAs: genetic algorithm (GA), random search, random walk, genetic programming (GP), non-dominated sorting genetic algorithm-II (NSGA-II), evolutionary strategies (ES), MAP-Elites.
  - Comparing EAs.
- EC applications (example of) EC to robotics
  - Evolution of robotic agents controllers (brain).
  - Evolution of Soft Robots morphologies (body).
  - Simultaneous evolution of body and brain.
  - Choosing the task, the fitness; reality gap.

### Goal of the course

#### Knowledge and understanding
- Know the terminology and common mathematical notation for the key concepts of EC.
- Know and understand the working scheme of EAs.
- Know and understand the main assessment procedures for EAs.
- Know and understand the main usages of EC for robotics.

#### Applying knowledge and understanding
- Formulate a formal problem statement, using the proper terminology and mathematical notation, for simple practical problems in order to tackle them EC techniques.

#### Making judgements
- Judge if a problem can be tackled with EC.
- Judge the technical soundness of an EC system.
- Judge the technical soundness of the assessment of an EC system.

#### Communication skills
- Describe, both in written and oral form, the motivations behind choices in the design, development, and assessment of a EC system, in particular for robotics, using the proper terminology and possibly exploiting simple plots.

#### Learning skills
- Retrieve information from scientific publications about EC techniques, in particular when applied to robotics.

### Requirements
Basics of programming and data structures: algorithm, data types, loops, recursion, parallel execution, tree.

Strong familiarity with manipulation of mathematical notation.

## Method, language, material

### Language of teaching
English

### Teaching method
Frontal lectures with slide projection and live annotation on the blackboard.

### Course material

#### Teacher's slides
The course material (teacher's slides) are [available online](https://medvet.inginf.units.it/slides/evolutionary-robotics-phd-25).

The lectures will be recorded.
The recording will be available to enrolled students upon request (an email to the teacher).

### Lectures timetable and course calendar

Lectures will be held on dates and rooms in Piazzale Europa Campus:
- Thursday 8/5, 14.00-17.00, **Sala Atti, building C1**
- Thursday 15/5, 14.00-17.00, **Sala Atti, building C1**
- Tuesday 20/5, 10.00-13.00, **Sala Atti, building C1**
- ~~Thursday 22/5, 14.00-17.00, **Biblioteca Carli, building C2**~~
- Friday 23/5, 9.00-12.00, **Aula A, building C8**

The lectures will be given **in person** and **I recommend being in the room**.
The lectures will **not** be cast in streaming, but the recordings of the lectures will be available **upon request**.

## End-of-course test (exam)
The exam is passed without a grade.
For passing the exam, the student is required to deliver a short oral presentation of a research paper chosen, by the student, from a teacher-provided list of ER papers (see below).

The presentation has to be done in English, with slides prepared by the student, and last at most 10 minutes.
The presentation is expected to answer the following questions (refer to the notation in the [slides](#teacherrsquos-slides)):
1. what is the **research question** (RQ) tackled by the paper and why is it important?
2. what is/are, **formally, the problem**(s)? I.e., what are the search space $S$, the controller-related (if a brain-only optimization) observation space $O$, action space $A$, state $S\_c$, the fitness function $f$?
3. what **EA(s) and representation(s)** (namely, $\\phi$) are used?
4. what **experiments** are done to answer the RQ? How are the corresponding results presented?
5. what are, if any, the weak points of the study?
 
The presentation date is set in agreement with the teacher: please try to arrange sessions with more than one student at once.

### List of ER papers to choose from
- Nisioti, Eleni, et al. "[When Does Neuroevolution Outcompete Reinforcement Learning in Transfer Learning Tasks?](https://arxiv.org/pdf/2505.22696)." arXiv preprint arXiv:2505.22696 (2025).
- Miras, Karine. "[Exploring the costs of phenotypic plasticity for evolvable digital organisms](https://www.nature.com/articles/s41598-023-50683-3)." Scientific Reports 14.1 (2024): 108.
- Parsa, Atoosa, et al. "[Evolving variable stiffness fiber patterns for multi-shape robotic sheets](https://ieeexplore.ieee.org/abstract/document/10121924)." 2023 IEEE International Conference on Soft Robotics (RoboSoft). IEEE, 2023.
- Matthews, David, et al. "[Efficient automatic design of robots](https://arxiv.org/pdf/2306.03263.pdf)." arXiv preprint arXiv:2306.03263 (2023).
- d'Elia, Evelyn, et al. "[Automatic tuning and selection of whole-body controllers](https://ieeexplore.ieee.org/abstract/document/9981058)." 2022 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS). IEEE, 2022.
- Hasselmann, Ken, Antoine Ligot, and Mauro Birattari. "[Automatic modular design of robot swarms based on repertoires of behaviors generated via novelty search](https://www.sciencedirect.com/science/article/abs/pii/S2210650223001682)." Swarm and Evolutionary Computation 83 (2023): 101395.
- Kuckling, Jonas, Vincent Van Pelt, and Mauro Birattari. "[AutoMoDe-Cedrata: automatic design of behavior trees for controlling a swarm of robots with communication capabilities](https://link.springer.com/article/10.1007/s42979-021-00988-9)." SN Computer Science 3.2 (2022): 136.
- Carvalho, Jonata Tyska, and Stefano Nolfi. "[The role of morphological variation in evolutionary robotics: Maximizing performance and robustness](https://direct.mit.edu/evco/article-abstract/doi/10.1162/evco_a_00336/116607/The-Role-of-Morphological-Variation-in)." Evolutionary Computation (2023): 1-18.
- Milano, Nicola, and Stefano Nolfi. "[Qualitative differences between evolutionary strategies and reinforcement learning methods for control of autonomous agents](https://link.springer.com/article/10.1007/s12065-022-00801-3)." Evolutionary Intelligence (2022): 1-11.


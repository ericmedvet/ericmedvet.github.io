---
title: "Introduction to Machine Learning and Evolutionary Robotics"
academic_year: "21/22"
type: courses
---

This page is about the courses named (actually the same course):
- Introduction to Machine Learning and Evolutionary Robotics (332MI), for master program [IN20](https://corsi.units.it/IN20/descrizione-corso), 9 CFUs
- Apprendimento automatico ed estrazione dell'informazione dai dati (222MI), for master program [IN19](https://corsi.units.it/IN20/descrizione-corso), 9 CFUs
- Introduction to Machine Learning (470SM), for master programs [SM35](https://dssc.units.it/) and [SM34](https://corsi.units.it/SM34/descrizione-corso), 6 CFUs
- Machine Learning and Data Analytics (557EC), for master program [EC71](https://corsi.units.it/EC71/descrizione-corso), 6 CFUs (part of a 9 CFUs course)

## Program, goals, requirements

### Detailed program

#### Part 1 (48h)
- Definition of Machine Learning; examples of applications of ML; taxonomy of ML problems; phases of design, development, and assessment of a ML system; terminology and mathematical notation.
- Introduction to the software/language R; elements of data visualization.
- Supervised learning.
  - Tree-based methods.
    - Decision and regression trees: learning and prediction; role of the parameters and overfitting.
    - Trees aggregation: bagging, Random Forest, boosting.
    - Supervised learning system assessment: cross-fold validation; accuracy and other metrics; metrics for binary classification (FPR, FNR, EER, AUC) and ROC.
  - Support Vector Machines (SVM).
    - Separating hyperplane: maximal margin classifier; support vectors; learning as an optimization problem; maximal margin classifier limitations.
    - Soft margin classifier: learning, role of the parameter C.
    - Non linearly separable problems; kernel: brief background and main options (linear, polynomial, radial); intuition behind radial kernel; SVM,
    - Multiclass classification with SVM.
  - Naive-Bayes classification.
  - The K-nearest neighbors classifier.
- Unsupervised learning.
  - Cluster analysis: hierarchical methods, partitional methods (k-means algorithm).
- Text and natural language applications (text mining).
  - Sentiment analysis; features for text mining; common pre-processing steps.
  - Topic modeling.

#### Part 2 (24h)
- Evolutionary Computation (EC).
  - High-level working scheme of an Evolutionary Algorithm (EA); terminology.
  - Generational model; selection criteria; exploration/exploitation trade-off; genetic operators with examples; fitness function; multi-objective optimization and Pareto dominance; debugging of an evolutionary search.
  - EA issues (diversity, variational inheritance, expressiveness); fitness landscape; properties of the representation.
  - Examples of common EAs: GA, GP, GE.
- Evolutionary Robotics.
  - Brief foundations of Artificial Neural Networks and EC.
    - EA for neuroevolution.
  - Significant examples.
    - Evolution of Soft Robots morphologies (body).
    - Evolution of robotic agents controllers (brain).
    - Simultaneous evolution of body and brain.
  - Choosing the task, the fitness; reality gap.

### Goal of the course

#### Knowledge and understanding
- Know main kinds of problems which can be tackled with ML and EC and those ones concerning text and natural language
- Know main ML techniques; know the high-level working scheme of EAs.
- Know design, development, and assessment phases of a ML system; know main assessment metrics and procedures suitable for a ML system.
- Know design, development, and assessment phases of a EC-based system in the field of robotics.

#### Applying knowledge and understanding
- Formulate a formal problem statement for simple practical problems in order to tackle them with ML or EC/ER techniques.
- Develop simple end-to-end ML systems.
- Experimentally assess a simple end-to-end ML or EC/ER system.

#### Making judgements
- Judge the technical soundness of a ML or EC/ER system.
- Judge the technical soundness of the assessment of a ML or EC/ER system.

#### Communication skills
- Describe, both in written and oral form, the motivations behind choices in the design, development, and assessment of a ML or EC/ER system, possibly exploiting simple plots.

#### Learning skills
- Retrieve information from scientific publications about ML or EC/ER techniques not explicitly presented in this course.

### Requirements
Basics of statistics: basic graphical tools of data exploration; summary measures of variable distribution (mean, variance, quantiles); fundamentals of probability and of univariate and multivariate distribution of random variables; basics of linear regression analysis.

Basics of linear algebra: vectors, matrices, matrix operations; diagonalization and decomposition in singular values.

Basics of programming and data structures: algorithm, data types, loops, recursion, parallel execution, tree.

## Method, language, material

### Language of teaching
English

### Teaching method
Frontal lectures with slide projection and live annotation; lab activities, under teacher supervision, in dealing with simple problems with ML techniques.

### Course material

#### Teacher slides and lab sketches
All the material is available [here](https://drive.google.com/drive/folders/1PzEW2bd-C3nAzYEiL2ormnXYTOE_5NxE):
- Teacher slides, full pack for first part, full pack for second part.
- Annotated slides; will be provided after the lectures.
- Sketches for how to do the lab activieties, in the form of R notebooks; please, fully enjoy the lab activity by **not looking at** these sketches too early.

#### Suggested textbooks
- Kenneth A. De Jong. Evolutionary computation: a unified approach. MIT press, 2006
- Gareth James, Daniela Witten, Trevor Hastie and Robert Tibshirani. An Introduction to Statistical Learning, with applications in R. Springer, Berlin: Springer Series in Statistics, 2014.

### Lectures timetable and course calendar
The course will start on **October, 4th**.
Lectures will be held in Classroom 2, 1st floor, C5 building, in Piazzale Europa campus (Wednesday).

The lectures will be given **in person** and **I strongly recommend being in the room**.
In compliance with the current regulation students are required to book a place in the room.
The lectures will also be cast in streaming using the MS Teams platform.
Students can **join the MS Teams team using this code**: `obyvj3a`.

## End-of-course test (exam)
The exam consists of a project and a written test.
The final grade is the average of the two grades: the exam is considered failed if at least one of the two grades is <18.
Student must **register for the exam session** of their interest using the online sistem (**esse3**).
Note that there are **deadlines** for registration (usually 1 week before the session date).

### Final project
The student chooses a problem among a closed, teacher-defined set of problems and proposes a solution based on ML or EC techniques.
The expected outcome is a written document (few pages) including: the problem statement; one or more performance indexes able to capture any solution ability to solve the problem; a description of the proposed solution from the algorithmic point of view; the results and a discussion about the experimental assessment of the solution with, if applicable, information about used data.
Student may form groups for the project: in this case, the document must show, for each student of the group, which activities the student took part in.
The project is evaluated according to clarity (≈50%), technical soundness (≈33%), and results (≈17%).

The project assignment will be given during the course.

### Written test
Questions on theory and application with short open answers.

---
title: "Machine Learning and Evolutionary Robotics"
academic_year: "24/25"
type: courses
---

This page is about the courses named (actually the same course):
- Machine Learning (456MI-1) and Evolutionary Robotics (456MI-2), for master program [IN23](https://corsi.units.it/IN23/descrizione-corso), 6+3 CFUs
- Introduction to Machine Learning and Evolutionary Robotics (332MI), for master program [IN19](https://corsi.units.it/IN19/descrizione-corso), 9 CFUs
- Introduction to Machine Learning (470SM), for master programs [SM38](https://dsai.units.it/), [SM36](https://sdic.units.it/), [SM34](https://corsi.units.it/SM34/descrizione-corso), [SM23](https://corsi.units.it/SM23/descrizione-corso), [SM28](https://corsi.units.it/SM28/descrizione-corso), and [SM64](https://corsi.units.it/SM64/descrizione-corso), 6 CFUs
- Introduction to Machine Learning (040CM), for master program [SM13](https://corsi.units.it/SM13/descrizione-corso), 6 CFUs

## Program, goals, requirements

### Detailed program

#### Part 1 (48h)
- Definition of Machine Learning; examples of applications of ML; taxonomy of ML problems; phases of design, development, and assessment of a ML system; terminology and mathematical notation.
- Elements of software/programming languages for ML; elements of data visualization.
- Supervised learning.
  - Supervised learning system assessment: cross-fold validation; accuracy and other metrics; metrics for binary classification (FPR, FNR, EER, AUC) and ROC.
  - Tree-based methods.
    - Decision and regression trees: learning and prediction; role of the parameters and overfitting.
    - Trees aggregation: bagging, Random Forest.
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
- Know the terminology and common mathematical notation for the key concepts of ML and EC systems.
- Know and understand the main supervised and unsupervised ML techniques; know the high-level working scheme of EAs.
- Know and understand the phases of design, development, and assessment of a ML system.
- Know and understand the main assessment metrics and procedures suitable for supervised and unsupervised ML systems.

#### Applying knowledge and understanding
- Formulate a formal problem statement, using the proper terminology and mathematical notation, for simple practical problems in order to tackle them with ML or EC techniques.
- Design simple end-to-end ML systems.
- Experimentally assess simple end-to-end ML systems.

#### Making judgements
- Judge if a problem can be tackled with ML.
- Judge the technical soundness of a ML system.
- Judge the technical soundness of the assessment of a ML system.

#### Communication skills
- Describe, both in written and oral form, the motivations behind choices in the design, development, and assessment of a ML system, using the proper terminology and possibly exploiting simple plots.

#### Learning skills
- Retrieve information from scientific publications about ML or EC techniques not explicitly presented in this course.

### Requirements
Basics of statistics: basic graphical tools (i.e., plots) for data exploration; summary measures of variable distribution (mean, variance, quantiles); fundamentals of probability and of univariate and multivariate distribution of random variables; basics of linear regression analysis.

Basics of linear algebra: vectors, matrices, vector and matrix operations.

Basics of programming and data structures: algorithm, data types, loops, recursion, parallel execution, tree.

Familiarity with manipulation of mathematical notation.

## Method, language, material

### Language of teaching
English

### Teaching method
Frontal lectures with slide projection and live annotation; lab activities, under teacher supervision, in dealing with simple problems with ML techniques.

### Course material

#### Teacher slides and lab sketches
The course material (teacher’s slides) will be served directly online:
- [1st part](https://medvet.inginf.units.it/slides/ml-2425/): Machine Learning
- [2nd part](https://medvet.inginf.units.it/slides/er-2425/): Evolutionary Robotics

The slides might be updated during the course.

Sketches (partly kindly provided by the tutor, Alessandro Della Siega) for how to do the lab activities, in the form of R or Python notebooks, are given below; please, fully enjoy the lab activity by **not looking at** these sketches too early:
- Lab 0: meet R and Iris (not done; it may serve as a *warm-up* lab) ([R source](labs/lab0.Rmd), [R rendered](labs/lab0.nb/))
- Lab 1: hardest variable in Iris ([R source](labs/lab1.Rmd), [R rendered](labs/lab1.nb/), [Python version](https://github.com/adellasiega/Intro_ML/blob/main/lab1.ipynb))
- Lab 2: comparison of ML techniques ([R source](https://colab.research.google.com/drive/12fRjeoWgpiBObTUjrXACemgdrmu4b2Yu?usp=sharing), [R rendered](labs/lab2/), [Python](https://github.com/adellasiega/Intro_ML/blob/main/lab2.ipynb))
- Lab 3: text mining, sport vs. politics dashboard ([Python](https://github.com/adellasiega/Intro_ML/blob/main/lab3.ipynb))

The recordings of the lectures will be available on MS Teams.

#### Suggested textbooks
- Gareth James, Daniela Witten, Trevor Hastie and Robert Tibshirani. An Introduction to Statistical Learning, with applications in R. Springer, Berlin: Springer Series in Statistics, 2014. (for the 1st part of the course)
- Kenneth A. De Jong. Evolutionary computation: a unified approach. MIT press, 2006. (for the 2nd part of the course)

These are just suggestions: a significant part of the course is not based on any specific textbook.

### Lectures timetable and course calendar
The course will start on **September, 24th**.
Lectures will be held in:
- ~~Room H, building C1, Piazzale Europa Campus on Monday, 16.00-19.00 (in practice, **16.00-18.30**)~~
- Sala Atti, building C1, Piazzale Europa Campus on Monday, 15.00-18.00 (in practice, **15.15-17.45**) (from 25/11/24)
- Room 3B, building H3, Piazzale Europa Campus on Tuesday, 11.00-13.00 (in practice, **11.00-12.30**)
- Room 2A, building D, Piazzale Europa Campus on Wednesday, 10.00-12.00 (in practice, **10.15-11.45** from 9/10/24; 10.00-11.30 before)

The lectures will be given **in person** and **I recommend being in the room**.
In compliance with the current regulation students might be required to book a place in the room.
The lectures will **not** be cast in streaming, but the recordings of the lectures will be available on the [MS Teams team of the course](https://teams.microsoft.com/l/channel/19%3A08NbkPW_OLmACIQ2G6Y2g9e20pRYz-y5eR_JMiTSJFA1%40thread.tacv2/General?groupId=6be88deb-0bbc-4609-a4c4-433d16a3f565) (code `jml3dtr`).

#### Short announcements about lectures schedule
- Starting from 9/10/24, the practical time for the lecture of Wednesday will be **10.15-11.45**.
- The lecture of 11/11/24 will be held in **room B, building C7** from **16.30 to 19.00** (3 academic hours).
- On 13/11/24, with usual time and room, ther will be a **seminar by prof. Carlos H. G. Ferreira**, from Federal University of Ouro Preto, Minas Gerais, Brazil. The abstract is: In this class on **Data Representation and Analysis with Graph Models**, we will explore the concept of graphs, their types and applications, and how they prove essential in representing complex systems, such as social networks, biology, and computing. We will introduce possible analyses within this model, focusing on structural analysis—which examines the internal organization of a network—and community analysis, which identifies important substructures and patterns. From this, we will see how these analyses can provide deep and practical information for interpreting network-structured data across various fields.
- The second part of the course, the one on Evolutionary Robotics (just for IN19, IN20, IN23), will start on 18/11/24, with usual times and locations for the lectures.
- Starting from 25/11/24, the Monday's lecture will change time and room: new time is 15-18 (actual time: **15.15-17.45**), new room is Sala Atti, building H (close to the current Monday's room) (see [above](#lectures-timetable-and-course-calendar)).
- The course will end on 11/12/24, with a joint **seminar by PhD students Giorgia Nadizar, Michel El Saliby, and Francesco Rusin** on topics related to evolutionary robotics. There will be no lecture on Monday 9/12/24.

## End-of-course test (exam)
The exam can be done in two ways:
1. project and written test;
2. written test only.

In the first case, the final grade is the average of the two grades: the exam is considered failed if at least one of the two grades is <18.
In the final overall grade, honors (lode) are awarded if and only if the grade for every part is greater or equal to 30/30 and the average of all the parts exceeds 30/30.

Student must **register for the exam session** of their interest using the online sistem (**esse3**).
Note that there are **deadlines** for registration (usually 1 week before the session date).

In any type of content produced by the student for admission to or participation in an exam (projects, reports, exercises, tests), the use of Large Language Model tools (such as ChatGPT and the like) must be explicitly declared. This requirement must be met even in the case of partial use.
Regardless of the method of assessment, the teacher reserves the right to further investigate the student's actual contribution with an oral exam for any type of content produced.

### Final project
The student chooses a problem among a closed, teacher-defined set of problems and proposes a solution based on ML or EC techniques.
The expected outcome is a written document (few pages) including: the problem statement; one or more performance indexes able to capture any solution ability to solve the problem; a description of the proposed solution from the algorithmic point of view; the results and a discussion about the experimental assessment of the solution with, if applicable, information about used data.
**Student are encouraged to form groups for the project**: in this case, the document must show, for each student of the group, which activities the student took part in.
The project is evaluated according to clarity (≈50%), technical soundness (≈33%), and results (≈17%).

**The project assignment is [here](project/).**

### Written test
It consists of questions on theory and application with short open answers.
Each test consists of ≈3 questions with a longer answer and ≈3 questions with a short answer.
Some of the questions are on the "theory": they require to give the definition of a key concept, to tell the differences between a few key concepts, or list the suitable options for some given case.
Some of the questions are on the "practice": they require to describe an algorithm, possibly in the form of pseudocode, sketch a design of an ML system for a given case, solve some simple numerical problem involving quantities.
The grade of the written test is the weighted average of the grades obtained for each question, with "long questions" weighting double the "short questions".

## Results of assessment by students

{{< fig src="student-assessment-ml2425-ml-in23-25.svg" caption="Students of IN23 (25 answers), for Machine Learning" >}}

{{< fig src="student-assessment-ml2425-er-in23-23.svg" caption="Students of IN23 (23 answers), for Evolutionary Robotics" >}}

{{< fig src="student-assessment-ml2425-sm38-14.svg" caption="Students of SM38 (14 answers)" >}}

{{< fig src="student-assessment-ml2425-sm23-6.svg" caption="Students of SM23 (6 answers)" >}}

{{< fig src="student-assessment-ml2425-in20-5.svg" caption="Students of IN20 (5 answers)" >}}

### Questions
(In Italian)

1. Domanda: Le conoscenze preliminari possedute sono risultate sufficienti per la comprensione degli argomenti previsti nel programma d'esame?
2. Domanda: Il carico di studio dell'insegnamento è proporzionato ai crediti assegnati?
3. Domanda: Il materiale didattico (indicato e disponibile) è adeguato per lo studio della materia?
4. Domanda: Le modalità di esame sono state definite in modo chiaro?
5. Domanda: Gli orari di svolgimento di lezioni, esercitazioni e altre eventuali attività didattiche sono rispettati?
6. Domanda: Il docente stimola/motiva l'interesse verso la disciplina?
7. Domanda: Il docente espone gli argomenti in modo chiaro?
8. Domanda: Le attività didattiche integrative (esercitazioni, tutorati, laboratori, etc...), se previste, sono utili all'apprendimento della materia?
9. Domanda: L'insegnamento è stato svolto in maniera coerente con quanto dichiarato sul sito web del corso di studio?
10. Domanda: Il docente è reperibile per chiarimenti e spiegazioni?
11. Domanda: È interessato/a agli argomenti trattati nell'insegnamento?
12. Domanda: È complessivamente soddisfatto di come è stato svolto questo insegnamento?
13. Domanda: L'utilizzo degli strumenti per la Didattica digitale per questo insegnamento è stato utile per l'apprendimento della materia?
14. Domanda: Se hai usufruito delle registrazioni delle lezioni per questo insegnamento, sono stati utili per l'apprendimento della materia?

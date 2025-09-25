---
title: "Machine Learning"
academic_year: "25/26"
type: courses
---

This page is about the courses named (actually the same course):
- Machine Learning (456MI-1), for master programs [IN23](https://corsi.units.it/IN23/descrizione-corso) and [IN19](https://corsi.units.it/IN19/descrizione-corso), **6 CFUs**, part of a larger course named "Machine Learning and Evolutionary Robotics"
- Introduction to Machine Learning (470SM), for master programs [SM38](https://corsi.units.it/SM38/descrizione-corso), [SM34](https://corsi.units.it/SM34/descrizione-corso), [SM23](https://corsi.units.it/SM23/descrizione-corso), [SM28](https://corsi.units.it/SM28/descrizione-corso), and [SM64](https://corsi.units.it/SM64/descrizione-corso), **6 CFUs**
- Introduction to Machine Learning (040CM), for master program [SM13](https://corsi.units.it/SM13/descrizione-corso), **6 CFUs**

## Program, goals, requirements

### Detailed program

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

### Goal of the course

#### Knowledge and understanding
- Know and understand the main kinds of problems which can be tackled with ML.
- Know the terminology and common mathematical notation for the key concepts of ML systems.
- Know and understand the main supervised and unsupervised ML techniques.
- Know and understand the phases of design, development, and assessment of a ML system.
- Know and understand the main assessment metrics and procedures suitable for supervised and unsupervised ML systems; know and understand how to evaluate ML systems effectiveness, efficiency, applicability, intepretability.

#### Applying knowledge and understanding
- Formulate a formal problem statement, using the proper terminology and mathematical notation, for simple practical problems in order to tackle them with ML techniques.
- Design and develop simple end-to-end ML systems, possibly re-using existing software libraries.
- Experimentally assess simple end-to-end ML systems in terms of effectiveness, efficiency, applicability, interpretability.

#### Making judgements
- Judge if a problem can be tackled with ML.
- Judge the technical soundness of a ML system.
- Judge the technical soundness of the assessment of a ML system.

#### Communication skills
- Describe, both in written and oral form, the motivations behind choices in the design, development, and assessment of a ML system, using the proper terminology and possibly exploiting simple plots.

#### Learning skills.
- Retrieve information from scientific publications about ML techniques not explicitly presented in this course.

### Requirements
- Basics of statistics: basic graphical tools of data exploration; summary measures of variable distribution (mean, variance, quantiles); fundamentals of probability.
- Basics of linear algebra: vectors, matrices, matrix operations.
- Basics of programming and data structures: algorithm, data types, loops, recursion, parallel execution, tree.
- Familiarity with manipulation of mathematical notation.

## Method, language, material

### Language of teaching
English

### Teaching method
Frontal lectures with slide projection and live annotation; lab activities, under teacher supervision, in dealing with simple problems with ML techniques.

### Course material

#### Teacher slides and lab sketches
The course material (teacher's slides) is available [online](https://medvet.inginf.units.it/slides/ml-2526/).

The slides might be updated during the course.

<!--
Sketches (partly kindly provided by the tutor, Alessandro Della Siega) for how to do the lab activities, in the form of R or Python notebooks, are given below; please, fully enjoy the lab activity by **not looking at** these sketches too early:
- Lab 0: meet R and Iris (not done; it may serve as a *warm-up* lab) ([R source](labs/lab0.Rmd), [R rendered](labs/lab0.nb/))
- Lab 1: hardest variable in Iris ([R source](labs/lab1.Rmd), [R rendered](labs/lab1.nb/), [Python version](https://github.com/adellasiega/Intro_ML/blob/main/lab1.ipynb))
- Lab 2: comparison of ML techniques ([R source](https://colab.research.google.com/drive/12fRjeoWgpiBObTUjrXACemgdrmu4b2Yu?usp=sharing), [R rendered](labs/lab2/), [Python](https://github.com/adellasiega/Intro_ML/blob/main/lab2.ipynb))
- Lab 3: text mining, sport vs. politics dashboard ([Python](https://github.com/adellasiega/Intro_ML/blob/main/lab3.ipynb))
-->

The recordings of the lectures will be available on the [MS Teams team of the course](https://teams.microsoft.com/l/channel/19%3ABT938HF-WV0e7hmrrcTWPVe6T8vuyJvJLYp1ExCMjOU1%40thread.tacv2/General?groupId=19cd013b-7b9f-466e-a2b1-307e8a94a7ef&tenantId=a54b3635-128c-460f-b967-6ded8df82e75) (code `bb7s7tx`).

### Lectures timetable and course calendar
The course will start on **September 23**.
Lectures will be held in:
- Room B, building C7, Piazzale Europa Campus on Tuesday, 8.00-10.00 (in practice, **8.30-10.00** without breaks)
- Room C, building C7, Piazzale Europa Campus on Thursday, 16.00-19.00 (in practice, ~~**16.00-18.30**~~ **16.15-18.45** with one break)

The lectures will be given **in person** and **I recommend being in the room**.
In compliance with the current regulation students might be required to book a place in the room.

The lectures will **not** be cast in streaming, but the recordings of the lectures will be available on the [MS Teams team of the course](https://teams.microsoft.com/l/channel/19%3ABT938HF-WV0e7hmrrcTWPVe6T8vuyJvJLYp1ExCMjOU1%40thread.tacv2/General?groupId=19cd013b-7b9f-466e-a2b1-307e8a94a7ef&tenantId=a54b3635-128c-460f-b967-6ded8df82e75) (code `bb7s7tx`).

#### Short announcements about lectures schedule
- Starting from 2/10/25, the practical time for the lecture of Thursday will be **16.15-18.45**.

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
The student chooses a problem among a closed, teacher-defined set of problems and proposes a solution based on ML techniques.
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


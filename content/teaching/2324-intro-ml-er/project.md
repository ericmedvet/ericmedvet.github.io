---
title: "Final project"
type: teaching-attachment
math: true
---

## Abstract
The student (or **group of up to 3 students**) is expected to design, develop, and present a solution based on Machine Learning to **one problem** in a set of problems provided [listed below](#available-problems).

## Output
The student (or group of students) will deliver a single document (as a pdf file, written in English or Italian), **within the exam date**, by email, to the teacher.
The document maximum length is fixed at **4 pages (excluding references)**, if the document is drafted according to [this LaTex template](https://www.overleaf.com/read/skmvqytwpncp), or **1200 words** (including every word: title, authors, references, ...), otherwise.

The document will contain (not necessarily in the following order, not necessarily in a structure of sections corresponding to the following items):
- the **problem statement**, that is a formal description of what is the information (input) upon which a decision/figure (output) has to be made/computed
- a description of one or more **performance indexes** able to capture the degree to which a(ny) solution solves the problem, or some other evaluation criteria
- a description of the **proposed solution**, from the algorithmic point of view, with zero or scarce focus on the tools used to implement it
- a description of the **experimental evaluation** of the solution, including
  - a description of the used **data**, if any
  - a description of the **experimental procedure** and the comparison baseline, if any
  - the presentation and the **discussion of the results**

The students are allowed (and encouraged) to refer to existing (technical/scientific/research) literature for shrinking/omitting obvious parts of the description, if appropriate.
The students are not required to deliver any source code or other material.
However, if needed for gaining more insights on their work, the students will be asked to provide more material or to answer some questions.
**If the project has been done by a group of students, the document must show, for each student of the group, which (at least one) of the following activities the student took part in:**
- problem statement
- solution design
- solution development
- data collection
- writing

## Evaluation
The teachers will evaluate the project output on a 0-32 scale.

Part of the score (up to 2 points), is determined statically and independently from the document content, depending on which problem (among the teachers-provided set) has been chosen by the student (see below).

The remaining 30 points are assigned according to these criteria:
- **clarity** (from 0 to 15): is the document understandable and easy to read? is the length appropriate?
are all non-obvious design choices made explicit?
is the solution/experimental campaign repeatable/reproducible based on the provided description?
- **technical soundness** (from 0 to 10): are the problem statement, evaluation criteria, evaluation procedure sound?
are design choices motivated experimentally, with references, or by other means?
are conclusions and findings actually supported by results?
- **results** (from 0 to 5): does the solution effectively/efficiently solve the problem?
is there a baseline which is improved in some way?

Note that the students' solution is not required to exhibit some degree of novelty (i.e., to advance the state of the art of the specific research field).
However, student are expected not to simply "cut-and-paste" an existing (research) project.

Note that, depending on the chosen problem, there could be more or less freedom on some aspects: e.g., problem statement, data collection, and so on.

If the project has been done by a group of students, each student will be graded (for the project part) according to both the overall project score and the student contribution, inferred from the activities she/he actually carried on, according to what specified in the document (see above).

## Available problems

### Leaf identification
This problem gives a **bonus score of +0**.

The [dataset](https://archive.ics.uci.edu/ml/machine-learning-databases/00288/) is publicly available, along with an [extended description](https://drive.google.com/open?id=17780rojEALRtI5ivDnYSNjc3AUDzPDGJ) of the data.

The goal is to propose a method for leaf identification based on the provided leaf attributes and using a proper unsupervised or supervised learning tool.

### Basketball
This problem gives a **bonus score of +1**.

A [dataset](https://www.kaggle.com/nathanlauga/nba-games) contains information about NBA games from several recent seasons (from 2004 on), at the level of the single player contribution to each game.

Different learning problems can be settled with this dataset.
Some problem examples are:
- predicting the outcome of a season
- predicting the outcome of a match
- predicting some statistics of a player in a match
- predicting the most impactful player of a match
- grouping matches or players according to some interesting criterion

Focus on (at least) one specific problem and present a thorough and solid analysis (visualization tools are welcome both in exploration and communication of your results and reflections).
Note that the problems in the short list above are just a suggestion and are described very briefly: the student is required to consider a problem (that has to be sound!) and to exactly define it.

### Twitter food popularity
This problem gives a **bonus score of +2**.

The goal is to build a tool for predicting how popular will be a tweet about food.
There is no data available for this problem: the student is hence required to obtain it, if the proposed solution is based on data (likely it will be!).

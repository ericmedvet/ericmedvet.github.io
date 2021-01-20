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

The document will contain (not necessarily in the following order):
- the **problem statement**
- a description of one or more **performance indexes** able to capture the degree to which a(ny) solution solves the problem, or some other evaluation criteria
- a description of the **proposed solution**, from the algorithmic point of view, with zero or scarce focus on the tools used to implement it
- a description of the **experimental evaluation** of the solution, including
  - a description of the used **data**, if any
  - a description of the **experimental procedure** and the comparison baseline, if any
  - the presentation and the **discussion of the results**

The students are allowed (and encouraged) to refer to existing (technical/scientific/research) literature for shrinking/omitting obvious parts of the description, if appropriate.
The students are not required to deliver any source code or other material. However, if needed for gaining more insights on their work, the students will be asked to provide more material or to answer some questions.
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

### Analysis of Svevo's letters corpus
This problem gives a **bonus score of +1**.

A [corpus](https://drive.google.com/drive/folders/102H1tr8ZXpcphjTll0Qn06zLFU4EIy65?usp=sharing) of approximately 900 letters sent by and received to [Italo Svevo](https://en.wikipedia.org/wiki/Italo_Svevo), the famous writer from Trieste, is publicly available.
The letters are written in different languages (Italian, English, German, and Triestino, the dialect of Trieste); sometimes, more than one language is used in the same letter.

The goal is to discover and report:
- which are the main **topics** of discussion in the corpus, who are the persons which each topic is more associated with, how does the interest on different topics evolve over the time
- which are the **sentiments** (positive, negative, at least) expressed in the letters, how are they related with persons and topics, how do they evolve over the time

The corpus contains info about: corpus section name, index of letter in the section, date of the letter, year of the letter, sender of the letter, location of the sender, recipient, location of the recipient, languages used in the letter, main language, text of the letter.

### Black Friday
This problem gives a **bonus score of +1**.

A [dataset](https://drive.google.com/drive/folders/19h0E0n_f_FXgVOg_b3I03qpkS_t_jpnc?usp=sharing) contains a sample of the transactions made in a retail store.
The store wants to know better the customer purchase behavior against different products.

Different learning problems can be settled with this dataset.
Some problem examples are:
- finding different clusters of consumers within it
- predicting the amount of purchase
- predicting the category of goods bought
- predicting the age of the consumer
- recommending a product to a consumer or a category of consumers

Focus on (at least) one specific problem and present a thorough and solid analysis (visualization tools are welcome both in exploration and communication of your results and reflections).
Note that the problems in the short list above are just a suggestion and are described very briefly: the student is required to consider a problem and to exactly define it.

### Twitter food popularity
This problem gives a **bonus score of +2**.

The goal is to build a tool for predicting how popular will be a tweet about food.
There is no data available for this problem: the student is hence required to obtain it, if the proposed solution is based on data (likely it will be!).

### VSRs behavior characterization
This problem gives a **bonus score of +2**.

A dataset of experimental results concerning the evolutionary optimization of [simulated 2-D Voxel-based Soft Robots (VSRs)](https://erallab.inginf.units.it/voxel-based-soft-robots) for the task of locomotion is provided: for each one of two shapes for the robot body, several evolutions have been done on 4 different terrains.
The task of locomotion consists in running as fast as possible along the positive $x$-direction.

The goal is to characterize the behavior of the evolved robots and to answer (a subset of) the following questions:
- are there different behaviors?
- is there an impact of the terrain on the behavior of the evolved robot?
- is that impact the "same" for the two shapes?
- is there a "typical" evolutionary path for the robot behavior? e.g., does a robot that evolved to jump have ancestors that walked?

The dataset consists of 10 files in csv format (but named as `.txt`), each related to a random seed used for performing the evolutionary optimizations (*runs*).
In each file, there is the data for 8 runs, resulting from the combination of two shapes and 4 terrains.
For each run, there are several rows in the file, one for each iteration of the evolutionary algorithm used for performing the evolution (a simple form of [Evolutionary Strategy](https://en.wikipedia.org/wiki/Evolution_strategy)).

The columns in the file are the following:
```
experiment.name
seed
terrain
shape
sensor.config
mapper
transformation
evolver
iterations
births
elapsed.seconds
all→size
firsts→size
lasts→size
all→each[genotype]→uniqueness
all→each[solution]→uniqueness
all→each[fitness]→uniqueness
all→each[fitness→fitness]→min
all→each[fitness→fitness]→median
best→solution→shape→w
best→solution→shape→h
best→solution→shape→num.voxel
best→genotype→size
best→birth.iteration
best→fitness→fitness
best→solution→serialized
best→fitness→as[Outcome]→computation.time
best→fitness→as[Outcome]→distance
best→fitness→as[Outcome]→velocity
best→fitness→as[Outcome]→corrected.efficiency
best→fitness→as[Outcome]→area.ratio.power
best→fitness→as[Outcome]→control.power
best→fitness→as[Outcome]→gait→avg.touch.area
best→fitness→as[Outcome]→gait→coverage
best→fitness→as[Outcome]→gait→num.footprints
best→fitness→as[Outcome]→gait→mode.interval
best→fitness→as[Outcome]→gait→purity
best→fitness→as[Outcome]→gait→num.unique.footprints
best→fitness→as[Outcome]→gait→footprints
best→fitness→as[Outcome]→center.spectrum.x→[0]
best→fitness→as[Outcome]→center.spectrum.x→[1]
best→fitness→as[Outcome]→center.spectrum.x→[2]
best→fitness→as[Outcome]→center.spectrum.x→[3]
best→fitness→as[Outcome]→center.spectrum.x→[4]
best→fitness→as[Outcome]→center.spectrum.x→[5]
best→fitness→as[Outcome]→center.spectrum.x→[6]
best→fitness→as[Outcome]→center.spectrum.x→[7]
best→fitness→as[Outcome]→center.spectrum.x→[8]
best→fitness→as[Outcome]→center.spectrum.x→[9]
best→fitness→as[Outcome]→center.spectrum.y→[0]
best→fitness→as[Outcome]→center.spectrum.y→[1]
best→fitness→as[Outcome]→center.spectrum.y→[2]
best→fitness→as[Outcome]→center.spectrum.y→[3]
best→fitness→as[Outcome]→center.spectrum.y→[4]
best→fitness→as[Outcome]→center.spectrum.y→[5]
best→fitness→as[Outcome]→center.spectrum.y→[6]
best→fitness→as[Outcome]→center.spectrum.y→[7]
best→fitness→as[Outcome]→center.spectrum.y→[8]
best→fitness→as[Outcome]→center.spectrum.y→[9]
```

Most of the columns are self-explicative, by name.
`seed`, `terrain`, and `shape` are the ones mentioned above; `iterations` contains the iteration number within a run (i.e., for a given combination of `seed`, `terrain`, and `shape`, all values of `iterations` are unique).
Columns with name starting with `best→` contain information about the best individual (i.e., the one running fastest) in the population at the iteration corresponding to the row.
Columns starting with `best→fitness→as[Outcome]→` contain the information extracted from a simulation of the best robot.
Columns named `best→fitness→as[Outcome]→center.spectrum.`$a$`→[`$i$`]` contain the intensity of the spectral analysis of the center of mass of the robot during the simulation, along the $a$ axis (with $a$ being either $x$ or $y$): each $i$-th component is related to the $i$-th bin in the band 0Hz to 5Hz (bins are evenly distributed).
Columns starting with `best→fitness→as[Outcome]→gait→` contain information about the gait of the robot, that is extracted automatically during the simulation.

The dataset is available [here](https://drive.google.com/drive/folders/1rtgYZfhAShExgUCjQeXMm9vZiRg4hofQ?usp=sharing), along with 8 videos representing the behavior of the best robot at the end of the runs.
Each video is a matrix of videos, each showing 30s of simulation on a validation terrain of a robots evolved with one of the 10 different random seeds (rows of the video matrix) on the 5 (the 4 of the evolution plus a "flat" one) different terrains (columns of the video matrix).
There is one video file for each combination of shape and validation terrain.
Each robot in the videos is the result of an evolutionary run that was done entirely on a single terrain, but that robot is validated on 5 terrains.

#### Hints
The central point is to decide **what is the behavior** of a robot.
Considering that the robots just do locomotion, the behavior is reasonably captured by the information in the columns `best→fitness→as[Outcome]→gait→` and `best→fitness→as[Outcome]→center.spectrum.`$a$`→[`$i$`]`.

The characterization of the behavior can be tackled as a **supervised learning** problem or an **unsupervised learning** problem.
In the former case, however, a few behaviors should be labeled manually, e.g., by looking at the videos and associating a few rows with the behaviors, as "running", "jumping", "crawling".
In the latter case, no labeling is required and the characterization basically consists in doing clustering; however, manual inspection is still desirable in order to interpret the result of the clustering.
In both cases, the goal is to **answer** (a subset of) the questions above, not just blindly applying a ML technique.

#### Further info and tools
More information about the mechanical model of the VSRs is given in [this paper](https://medvet.inginf.units.it/publications/2020-p-mbds-design/).
The software used for the experiments is [publicly available](https://github.com/ericmedvet/VSREvolution).

In order to favor interpretation, a tool is available for building new videos of the evolved robots.
In facts, the column `best→solution→serialized` contains a serialized copy of the robot (base64 encoding of GZIP compression of JSON representation of the robot).

The tool (`VSREvolution.jar`, available [here](https://drive.google.com/drive/folders/1rtgYZfhAShExgUCjQeXMm9vZiRg4hofQ?usp=sharing), source code [here](https://github.com/ericmedvet/VSREvolution/blob/master/src/main/java/it/units/erallab/VideoMaker.java)) is done in Java (>14) and takes as input (via standard input) a csv containing 3 columns and builds a video file with a video matrix (see above).
The three columns should contain string keys for the $x$ and $y$ labels in the video matrix (in the first two columns), and the serialized robot (in the third column).
As an example, the following command produce the video for the bipeds on a flat validation terrain.
```
Rscript -e 'suppressPackageStartupMessages(library(tidyverse));dir(".",pattern="best.*.txt",full.names = T) %>% map(function(file){read.csv2(file, dec=".", stringsAsFactors = T)}) %>% reduce(rbind) %>% filter(shape=="biped-4x3") %>% group_by(terrain,seed) %>% arrange(iterations) %>% filter(row_number()==n()) %>% ungroup() %>% select(terrain,seed,best.solution.serialized) %>% format_csv2() %>% cat()' | java -Xmx8g -cp VSREvolution.jar it.units.erallab.VideoMaker serializedRobotColumnName=best.solution.serialized outputFile=biped-flat.mp4 w=600 h=1200 terrain=flat transformation=identity endTime=30 startTime=0 encoder=ffmpeg_small
```
The execution of the command above might take several minutes and a lot of RAM; moreover, `ffmpeg` is required on the machine.

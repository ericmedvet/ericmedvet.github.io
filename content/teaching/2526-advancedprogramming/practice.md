---
title: "How to practice programming"
type: teaching-attachment
math: true
---

## Rationale
Practicing the **design and realization of software** is of key importance to really understand programming.

Consider football (or many other sports): **watching many matches from the couch does not make you a football player**.
You need to enter the field with the football shoes and run, kick the ball, and push other team players.
You need to **feel the physical struggle** when the ball does not go in the direction you planned: this way, you can understand how to fix your approach to the ball to shoot better.
You also need to enjoy the moment when you do something really good, a pass, a tackle, a trick.

Programming is like football.
You need practice to improve.
You need to try things, to attempt to solve programming tasks.
You need to fail and have someone more experienced telling you **where/how you failed**.
You need to care about details.

For this reasons, I propose a **structured way to practice** programming.
It consists of different phases of approaching the programming task, going from **no support at all** from any tool (i.e., IDE, AI) to deep support.
However, the support has to be "received" in the form of feedback on what you did, rather than on replacing you in doing things.

I do believe this kind of activity may be useful to stundents for both comprehending better and increasing the probability of [passing the exam](../#oral-exam).

## Suggested activity: progressive refinement

Consider a programming **task** in one of the following forms, or their variants (see [examples](#task-examples) below):
- "model $X$ in Java"
- "write a method that takes $x$ and gives $y$"
- "write a piece of code in a `main()` method that does $x$"

You should approach the task in the following steps:

### S1. Paper
Write the code on a piece of paper.
Take your time (some minutes should be enough), then **carefully look at it** and focus on:
1. syntax: is everything correct?
2. indentation and spacing: is it indented correctly? is spacing correct?
3. naming: is every identifier consistent with naming conventions? is it semantically sound?
4. types: are all the types consistent with the designed role? if there is a signature, is the signature consistent with the assignement role?
5. algorithm (if any): is it correct?

At this step, you should use at most the JDK API Specification (i.e., the javadoc).

Ideally, if you are not sure about/happy with all the responses, you should not proceed.

*If you practice with some other person (of reasonably similar experience), you can ask them to repeat the same checks.*

### S2. Text editor
Copy the code on a text editor, then **carefully look at it** and focus on points 1 (syntax) and 2 (indentation) above.

*For time efficiency, you can skip step S1 and start directly from here (S2).
Remember that at the exam you need to write the code on the blackboard, not with a text editor.*

### S3. IDE
Take a serious IDE tailored to Java and copy the code in it (after having done all the necessary steps, like creating a class).
Possibly choose an IDE which you are familiar with: in particular, you need to know what's the semantics of the visual highlighting.

**Carefully look at all the syntax highlighting** and reason on it based on the kind of issue being raised by the IDE.
Usual highlighting (I here refer to IntelliJ IDEA with default configuration) shows (in order of decreasing relevance):
- syntax errors (font color in red)
- suboptimal code (underlining in yellow)
- useless/unused things (font color in gray)
- non-syntax spelling errors (underlining in green)

**Look at (and read) every error/warning message** (usually by hovering on it).
Take your time to deeply understand the error message: ideally, you should understand every word, the entire sentence, and the reason why this is IDE the explanation for the issue.
Note that the IDE is not always correct.

### S4. LLM

### S5. Client code

### S6. Execution

## Task examples


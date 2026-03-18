---
title: "How to practice programming"
type: teaching-attachment
math: true
---

## Rationale: why practicing?
Practicing the **design and realization of software** is of key importance to really understand programming (and, more broadly, software system design).

Consider football (or many other sports): **watching many matches from the couch does not make you a football player**.
You need to enter the field with the football shoes and run, kick the ball, and push and tackle other team players.
You need to **feel the physical struggle** when the ball does not go in the direction you planned: this way, you can understand how to fix your approach to the ball to shoot better.
You also need to enjoy the moment when you do something really good, a pass, a tackle, a trick.

Programming is like football.
You need practice to improve.
You need to try things, to attempt to solve programming tasks.
You need to fail and have someone more experienced telling you **where/how you failed**.
You need to think about big plans and actuate them, caring about "little" details.

For these reasons, I propose a **structured way to practice** programming.
It consists of different phases of approaching the programming task, going from **no support at all** from any tool (i.e., IDE, AI) to deep support.
However, the support has to be "received" in the form of feedback on what you did, rather than on replacing you in doing things.

Obviously, practicing well (i.e., following this strctural way) is not enough: you also need to **practice a lot** (i.e., solving many programming tasks).

I do believe this kind of activity may be useful to stundents for both comprehending better and increasing the probability of [passing the exam](../#oral-exam).

## Suggested activity: progressive refinement

Consider a programming **task** in one of the following forms, or their variants (see [examples](#task-examples) below):
- "model $X$ in Java"
- "write a method that takes an $x$ and gives a $y$"
- "write a piece of code in a `main()` method that does $x$"

You should approach the task in the following steps:

### S1. Paper
Write the code on a piece of paper.

Take your time (some minutes should be enough), then **carefully look at it** and focus on:
1. **syntax**: is everything correct?
2. **indentation and spacing**: is it indented correctly? is spacing correct?
3. **naming**: is every identifier consistent with naming conventions? is it semantically sound? is it sufficiently specific but not too specific?
4. **types**: are all the types consistent with the designed role? if there is a signature, is the signature consistent with the assignement?
5. algorithm (if any): is it correct? is it robust to main corner cases?

At this step, you should use at most the JDK API Specification (i.e., the *javadoc*).

Ideally, if you are not sure about/happy with all the responses, you should not proceed.

*If you practice with some other person (with reasonably similar experience), you can ask them to repeat the same checks.*

For some tasks, you can first write just the signature (e.g., of the method, or of an interface) and then expand it by adding the *body*.
In between the two steps, you may do some of the checks listed above.

### S2. Text editor
Copy the code on a text editor, then **carefully look at it** and focus on points 1 (syntax) and 2 (indentation) above.

*For time efficiency, you can skip step S1 and start directly from here (S2).
Remember that at the exam you need to write the code on the blackboard, not with a text editor.*

### S3. IDE
Take a serious IDE tailored to Java and copy the code in it (after having done all the necessary steps, like creating a class).
Possibly choose an IDE which you are familiar with: in particular, you need to know what's the semantics of the visual highlighting.

**Carefully look at all the syntax highlighting** and think about it thoroughly based on the kind of issue being raised by the IDE.
Usual highlighting (I here refer to IntelliJ IDEA with default configuration) shows (in order of decreasing relevance):
- syntax errors (font color in red)
- suboptimal code (underlining in yellow)
- useless/unused things (font color in gray)
- non-syntax spelling errors (underlining in green)

**Look at (and read) every error/warning message** (usually by hovering on it).
Take your time to deeply understand the error message: ideally, you should understand every word, the entire sentence, and the think about why this is the IDE explanation for the issue.
Note that the IDE is not always correct.
The compiler is always correct.

### S4. LLM

Take a reasonably modern and effective LLM: most of them (e.g., Gemini, ChatGPT, Claude) are *good enough* also in the free, web-accessible version.

#### Ask for feedback

First, ask the LLM to play the role you played for yourself at step S1.
Use a **complete and detailed prompt**, specifying both the kind of feedback you want and the task you are facing; obviously include the code you are asking to evaluate.
Here I include a sample *prompt* which, in my experience, works (you can use the corresponding Italian translation, if you prefer).

~~~prompt
For a programming assignment, I've been asked to, using Java, "model the concept of partial order". This is what I have done:
```
public interface PartialComparator<T> {
  enum Outcome {BEFORE, AFTER, SAME, NOT_COMPARABLE};
  Outcome compare(T t1, T, t2);
}
```
Can you please provide some feedback along the following axes:
1. syntax: is everything correct?
2. indentation and spacing: is it indented correctly? is spacing correct?
3. naming: is every identifier consistent with naming conventions? is it semantically sound?
4. types: are all the types consistent with the designed role? if there is a signature, is the signature consistent with the assignement?
5. algorithm (if any): is it correct? is it robust to main corner cases?
Please be picky, specific, and brief. Wherever relevant and possible, please provide references to external resources.
~~~

Note that in this sample prompt there is one specific task (modeling the partial order) and the corresponding code: everything else is general and can be reused as is.
This can hence be used as a **template prompt**.
Note also that there are a few very minor issues in the code—most LLMs find them.

Read the complete response.
Consider that LLMs are often, *but not always*, correct.
Possibly follow references.

#### Ask for a solution

**Optionally**, ask the LLM for a solution to the same task built from scratch.
I strongly suggest to reset the LLM session for this interaction.
You can also play with the level of detail in the prompt.
For example, a minimal prompt corresponding to the same task above might be:

~~~prompt
I've been asked to, using Java, "model the concept of partial order". Can you provide me a solution?
~~~

Enjoy the solution, its motivation, its wrong parts (assuming you actually understood the assignment).

### S5. Client code

If possible, write a piece of code that *uses* the code you wrote for the main task.
Ideally, this could be written by another developer who understands the assignment but does not know your complete solution: from another point of view, while writing this code you could pretend to be another developer.

Depending on the kind of assignment, this "client" code has different forms.
Intuitively:

|Assignment|Output|Client|
|---|---|---|
|"model $X$"|interface|an implementation of the interface or a piece of code using the interface|
|"write a method taking $x$ and giving $y$"|a method (usually `static`)|some code invoking the method|

If you struggle writing a client code, in particular in the easiest version where the client code simply uses methods, this should be interpreded as a clue about possible issues in the design of the main code.

### S6. Execution

If possible, run the code, either directly or using the client code.
Consider a few representative initial conditions (inputs) and decide in advance what the corresponding effects (outputs) should look like.
Check if the code behaves as expected.

## Task examples

Here I give a few instances of programming tasks that you **should be able to solve** and a method for *obtaining* many other tasks.

Ideally, once you reached a good level of practice, each of these task should take a few minutes to be solved with pen and paper (step S1 above).

### Specific instances

Assume an implicit "in Java" for each of the following.

- model the partial order
- model trees (as data structure) *(or, maybe, binary ordered trees)*
- write (the signature of) a method that takes some person names and return them grouped by the initial of the last name, like for a phonebook
- write (the signature of) a method that computes numerically the maximum of a univariate real function
- write (the signature of) a method that gives the numerical derivate of a univariate real function
- write the code for reading the lines of a text files which are not comments, that is, not starting with `%`

Note that an assignment can use very generic natural language (e.g., the phonebook example above) or domain specific language (e.g., the maximum example).
It may be very short or long.
It may implicitly suggest different kinds of output: for the examples above, an interface, a class, two methods, a piece of code (as it might be in a `main()` method).

It's part of the skills you are expected to acquire to interpret the assignment and decide what's the best output for it.

### Producing new instances

Once you are good enough at solving basic programming tasks, you can build *unlimited* (figuratively, actually the number is limited) new tasks by considering existing pieces of code and re-writing them.

More specifically, one possible **process for building new programming tasks** is:
1. Choose an interface in the JDK, possibly a very abstract one as `Function`, `Comparator`, or similar.
2. Look at the documentation and choose a `default` method—ideally, you should ask some other person to choose one for you.
3. Read the documentation of the method, possibly only the first sentence.
4. Use it as the assignment, with an appropriate contextualization (typically, the first sentence of the interface documentation).

#### Example of the execution of the process

For example, take the `andThen()` method of the `Function` interface.
The interface first sentence is "Represents a function that accepts one argument and produces a result."
The method first sentence is "Returns a composed function that first applies this function to its input, and then applies the after function to the result."
The resulting assignment might be:
"Given the `Function` interface, which *represents a function that accepts one argument and produces a result*, write (the signature of) a `default` method that *returns a composed function that first applies this function to its input, and then applies the after function to the result*."

A slightly more challenging version might be:
"Given the `Function` interface [...], write (the signature of) a `default` method that does function composition".



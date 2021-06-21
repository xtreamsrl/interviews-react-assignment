<!---
Hi! We're happy you opened this file, not everyone does!
To let us know you did, paste a capybara picture 
in the How to Run section 😊 
-->

# React Interview Assignment

## Introduction

This is an interview exercise for the Web & Mobile team of [xtream](https://www.linkedin.com/company/xtream-srl). In the
following sections, you will find a number of challenges that we ask you to implement. You **DO NOT NECESSARILY need to
complete 100% of them**, but rather only the ones you feel comfortable about or that interest you.

:watch: We estimate it should take around 8 hours to solve the challenges, and we give you **1 week** to submit a
solution, so that you can do it at your own pace.

### Deliverables

Simply fork this repository and work on it as if you were working on a real-world project assigned to you. A week from
now, we will checkout your work and evaluate it.

:heavy_exclamation_mark:**Important**: At the end of this README, you will find a "How to run" section that is not
written out. Please, write there instructions on how to run your code.

### Evaluation

Your work will be assessed according to several criteria. As an example, these include:

* Code quality
* Design Patterns
* Project Structure
* Work quality (commits, branches, workflow, tests, ...)
* Provided Documentation

### Let's get started

We designed a specific section for the React interview: the JSNOPlaceholder UI. We will identify a number of challenges
to complete.

:heavy_exclamation_mark:**Important**: you might feel like the tasks are somehow too broad, or the requirements are not
fully elicited. **This is done on purpose**: we want to give you freedom to take your own choices and to put as fewer
constraints as possible on your work.

---   

### JSNOPlaceholder UI

It seems like a hurricane dropped some code in the repo. It added the core functionalities, so you will not get bored on
calling some apis and create the basic user interface. The app has a classical layout with a drawer. It communicates
with [jsonplaceholder](https://jsonplaceholder.typicode.com/)
to show Posts, Users and ToDos.

#### Challenge #1.1

It would be great if you can refactor the code to make it more maintainable and to reuse it as much as possible.
Consider that this is just a POC (Proof Of Concept), and the codebase will expand a lot if the client will accept the
work done in this phase.

#### Challenge #1.2

Looking at the app, the first thing that your manager did was typing something in the searchbar. Not surprisingly, it
does nothing. The junior developer that wrote the app wasn't able to do it.

And yes! Obviously it is a core functionality for the final client decision. You should make it work. Writing into the
searchbar should affect the results shown on the page, without any button click.

It's time to show who is junior and who is not.

#### Challenge #1.3

Great job! The client review went pretty good! He showed interest in the SPA solution that we adopted, so he asked
for a technical assessment to his tech-savvy IT department. It came out that they are a little worried on how the initial
loading time could change when the codebase expands or more functionalities are added. They are really happy about the
reactivity of page changes and navigation that a SPA guarantees, so they do not want any compromise on this. While you
are trying to solve this issue, keep in mind that the navigation speed between different pages should not be affected.

Can we then make sure that the application would still be quick and responsive even though it grows and gets more and
more functionalities?

#### Challenge #1.4

You made it! Now that the deal is basically closed, it's time to shine. While you were in the demo meeting, you hear
from two technical client's guys that their infrastructure has an isolated environment for dev, test, and production.
Praise the Lord. Let's quickly make easy to change all the environment-specific stuffs (like switching endpoints). It
would be also great to have the app version shown in the toolbar!

#### Challenge #1.5

Never trust junior's code right? This is the case. The client's IT manager just spotted something wrong about the ToDos
page rendering performances. And guess what? It happened in the same day of the client's sign. You should have a look there and fix
the problem as soon as you can, or the entire project could be lost.

If you end up succeeding on solving this issue, it's better to provide some proof of the performance improvements so
that we can show it to the client.

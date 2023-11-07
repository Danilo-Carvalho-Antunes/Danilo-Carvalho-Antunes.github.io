---
title: Portfolio 3 IA 
date: 2023-11-6 20:00:00 -0400
categories: [studies,ai,porfolio3]
tags: [ai,studies]
---

# **Intruduction**

# **Constraint Satisfaction Problem (CSP)​**

Constraint Satisfaction Problems (CSPs) are a category of computational problems that are centered around finding states that satisfy a collection of constraints. Each CSP consists of three main components:

1. **Variables**: These are the elements that need to be assigned values from their possible domains. They can be anything from colors in a coloring problem, digits in a sudoku, to timeslots in a scheduling task.

2. **Domains**: For each variable, there is a corresponding domain which is the set of all possible values that the variable can take. For example, in a sudoku puzzle, the domain for each cell (variable) is the numbers 1 through 9.

3. **Constraints**: These are rules that must be followed for a solution to be considered valid. Constraints can be binary, involving two variables (such as "Variable A must be different from Variable B"), or they can be more complex, involving three or more variables. The constraints define the relationships between the variables and restrict the values the variables can simultaneously take.

## **Atomic representation and Factored representation**
In the realm of Constraint Satisfaction Problems (CSPs), two primary methodologies for state representation are atomic representation and factored representation.

Atomic representation regards each state as an indivisible "black box" with no internal structure. This approach to CSPs is straightforward, as it does not acknowledge the complexities within a state, treating each state as a whole unit. It’s a like to seeing a picture as a single entity without recognizing the individual pixels that compose it.

Factored representation, on the other hand, deconstructs states into variables or "factors". Each factor is endowed with its distinct set of possible values, which enables a detailed inspection of the state's condition. Imagine a puzzle where each piece represents a factor; only by fitting these pieces together in the correct way can the overall picture be revealed. This approach show a more expressive portrayal of states and can enhance the efficiency of CSP resolution. By breaking down the problem into smaller, manageable sub-problems, factored representation often facilitates the discovery of a solution through the individual resolution of these components.

In essence, while atomic representation simplifies the complexity of CSPs by treating each state as a single, unbreakable element, factored representation embraces this complexity by splitting states into multiple, interrelated factors. Each method has its merits and is suitable for different types of CSPs, depending on the level of detail required and the nature of the problem at hand.

## **Types of Conditions**

In the study of Constraint Satisfaction Problems (CSPs), there are several types of conditions or constraints that can be imposed on variables:

1. **Unary Constraints**: These involve only a single variable and restrict the value that the variable can take. An example of a unary constraint could be a rule stating that a certain task must be done by a specific team member.

2. **Binary Constraints**: These involve pairs of variables and specify a relation between their values. For instance, in a scheduling problem, a binary constraint might require that two tasks cannot be scheduled at the same time or that one task must be completed before another can begin.

3. **N-ary Constraints**: These involve 'n' number of variables, where 'n' can be any integer greater than two. N-ary constraints deal with relations among three or more variables. For example, a constraint in a resource allocation problem may state that the combined effort of three different workers is needed to complete a job.

## **Node Consistency**

In the context of Constraint Satisfaction Problems (CSPs), consistency is a key concept used to assess the solvability of the problem. It is evaluated at different levels:

1. **Node Consistency**: This level checks whether each individual variable in the CSP can satisfy its own constraints. Essentially, node consistency ensures that every value in a variable's domain meets the variable's unary constraints.

2. **Arc Consistency**: This involves looking at each pair of variables and checking if there is some way to assign values to both such that their binary constraints are satisfied. For a CSP to be arc-consistent, every value in a variable's domain must be consistent with every possible value of each neighboring variable's domain.

3. **Path Consistency**: This extends the concept of arc consistency to sequences of variables, ensuring that not just pairs, but triples of variables can be assigned values without violating their binary constraints.

4. **k-Consistency**: This generalizes the notion of arc consistency for a set of k variables, where k is any positive integer. A CSP is k-consistent if for any set of k - 1 variables and for any consistent assignment to these variables, a consistent value can be assigned to a kth variable.

5. **Global Consistency**: This is the most stringent level, which checks whether the entire set of variables in the CSP can be assigned values simultaneously without violating any constraints.

## **Algorithms**

The selection of an algorithm to solve a Constraint Satisfaction Problem (CSP) can greatly depend on the nature of the problem at hand. Here are three of the most commonly used algorithms:

1. **Constraint Propagation (AC-3 Algorithm)**: Utilizing the concept of arc consistency, this algorithm reduces the domain size of each variable by repeatedly checking all the constraints and eliminating values that cannot possibly participate in a complete solution. It ensures that for each variable, every value in its domain has a consistent value in the domain of adjacent variables. AC-3 can be used in conjunction with backtracking, where arc consistency is maintained at each step of the search, significantly enhancing the efficiency of the search process.

2. **Backtracking**: This depth-first search method attempts to solve the problem by sequentially assigning values to variables. If at any point the current assignment does not lead to a solution, the algorithm "backtracks" to the previous step and tries a different value. This recursive algorithm can be optimized with variable selection heuristics (such as the minimum remaining value heuristic) and value ordering heuristics (like least constraining value heuristic), which help to reduce the number of backtracking occurrences.

3. **Forward Checking**: As values are assigned to variables, forward checking immediately checks the constraints that involve the variable that just had a value assigned. This helps to look ahead and eliminate from other variables' domains any values that would result in a violation of constraints, thereby reducing the possible search space. If at any point the domain of a variable becomes empty, the algorithm backtracks, ensuring that decisions do not lead to a dead end.

## **Structure of Problems for Graphs**

To solve tree CSPs we do the following:​

We choose a variable as the root;​

We order the tree so that each variable appears after its parent in the tree (topological classification);

![Topological classidication](/imgs/Portfolio3_img_1.jpeg)_Topological classidication_

### **Cutting conditioning**

![Cutting conditioning](/imgs/Portfolio3_img_2.jpeg)_Cutting conditioning_

### **Tree decomposition**

![Tree decomposition](/imgs/Portfolio3_img_3.jpeg)_Tree decomposition_

Each variable in the original problem appears in at least one of the nodes in the tree.​

If two variables are connected by a constraint in the original problem, they must appear together (along with the constraint) in at least one of the tree nodes.​

If a variable appears in two nodes in the tree, it must appear in all nodes along the path connecting those nodes.

# **Contributions**

## **Examples**

# **Conclusion**

# **References**
---
title: Climbing Stairs Solution 1
date: 2021-06-30
topic: LeetCode
topicDescription: Solutions for LeetCode Problems
topicDescriptionEmojiWrap: Enjoy!!! 🍌🐒
description: You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps...
img: 02-climbing-stairs-solution-1.png
mathjax:
  presets: '\def\lr#1#2#3{\left#1#2\right#3}'
sidebar: auto
meta:
  - property: 'og:title'
    content: 'LeetCode - Climbing Stairs Solution 1'
  - property: 'og:type'
    content: 'website'
  - property: 'og:image'
    content: 'https://codemonkeys.tech/images/leetcode/social/02-climbing-stairs-solution-1-link-post.png'
  - property: 'og:image:width'
    content: '1200'
  - property: 'og:image:height'
    content: '628'
  - property: 'og:image:alt'
    content: 'LeetCode - Climbing Stairs Solution 1 Image'
  - property: 'og:url'
    content: 'https://www.codemonkeys.tech/posts/2021/06/30/climbing-stairs-solution-1/'
  - property: 'og:description'
    content: 'Hey fellow Code Monkeys!!! 🐵 Check out the first Solution & Notes for the LeetCode problem Climbing Stairs! 🍌🐒'
  - property: 'og:site_name'
    content: 'Code Monkeys'
  - name: 'twitter:card'
    content: 'summary_large_image'
  - name: 'twitter:title'
    content: 'LeetCode - Climbing Stairs Solution 1'
  - name: 'twitter:description'
    content: 'Hey fellow Code Monkeys!!! 🐵 Check out the first Solution & Notes for the LeetCode problem Climbing Stairs! 🍌🐒'
  - name: 'twitter:url'
    content: 'https://www.codemonkeys.tech/posts/2021/06/30/climbing-stairs-solution-1/'
  - name: 'twitter:site'
    content: '@codemonkeystech'
  - name: 'twitter:image'
    content: 'https://codemonkeys.tech/images/leetcode/social/02-climbing-stairs-solution-1-link-post.png'
  - name: 'twitter:image:alt'
    content: 'LeetCode - Climbing Stairs Solution 1 Image'
  - name: 'twitter:creator'
    content: '@codemonkeystech'
---

# Climbing Stairs Solution 1

<div class="video-wrapper">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/jUP9BAs2GbE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Links

<p><a href="https://leetcode.com/problems/climbing-stairs/" target="_blank" rel="noopener noreferrer">Climbing Stairs <div class="emoji-wrap">Problem<span>&nbsp;💡</span></div></a></p>
<p><a href="https://github.com/codemonkeysio/LeetCode" target="_blank" rel="noopener noreferrer">Get the code & notes on <div class="emoji-wrap">GitHub<span>&nbsp;💻</span></div></a></p>
<p><a href="https://discord.gg/mh9rQmwJ8H" target="_blank" rel="noopener noreferrer">Ask Questions & Share Solutions in <div class="emoji-wrap">Discord<span>&nbsp;🤖</span></div></a></p>

## Problem Description

You are climbing a staircase. It takes <span class="post-term-one">n</span> steps to reach the top.

Each time you can either climb <span class="post-term-one">1</span> or <span class="post-term-one">2</span> steps. In how many distinct ways can you climb to the top?

## Examples

Ex 1) Input: <span class="post-term-one">n = 2</span> $\implies$ Output: <span class="post-term-one">2</span>

Explanation: There are <span class="post-term-one">two</span> ways to climb to the top.<br>1. 1 step + 1 step<br>2. 2 steps

Ex 2) Input: <span class="post-term-one">n = 3</span> $\implies$ Output: <span class="post-term-one">3</span>

Explanation: There are <span class="post-term-one">three</span> ways to climb to the top.<br>1. 1 step + 1 step + 1 step<br>2. 1 step + 2 steps<br>3. 2 steps + 1 step

## Constraints

- $1 \leq \color{#ebeb33}{n} \leq 45$

## Thought Process

- Let's start by diagramming the different ways we can climb the steps to see if we can find a pattern.

  - When <span class="post-term-one">n = 3</span> we have:

```mermaid
graph TD
  1([Bottom of the Staircase])--+1--> 2([1 out of 3]);
  1--+2--> 3([2 out of 3]);
  2--+1--> 4([2 out of 3]);
  2--+2--> 5([3 out of 3]);
  3--+1--> 6([3 out of 3]);
  3--+2--> 7([4 out of 3]);
  4--+1--> 8([3 out of 3]);
  4--+2--> 9([4 out of 3]);
```

- From the diagram we can see there are <span class="post-term-one">3</span> distinct ways to climb to the top when <span class="post-term-one">n = 3</span> since we can ignore the scenarios where we take extra steps.

- To help you see a pattern try drawing out more diagrams for larger values of <span class="post-term-one">n</span> or creating a generalized diagram for any value of <span class="post-term-one">n</span>.

- The diagram above is an example of a <span class="post-term-one">recursion tree</span>.

- So, one way to solve this problem is to come up with a <span class="post-term-one">recursive formula</span> that represents how many distinct ways we can climb the stairs.

- Let's use the diagram to help us come up with our <span class="post-term-one">recursive formula</span>.

- We know we can either add <span class="post-term-one">1</span> step or <span class="post-term-one">2</span> steps each time we climb up the stairs, and we want to hit our target of <span class="post-term-one">n</span> steps.

- So, we need to keep track of how many steps we have taken which we can represent with the variable $\color{#33eb61}{stepsTaken}$.

- Initially, $\color{#33eb61}{stepsTaken} = 0$

- Each time we climb the stairs:

$$\color{#33eb61}{stepsTaken} = \color{#33eb61}{stepsTaken} + 1$$

$$or$$

$$\color{#33eb61}{stepsTaken} = \color{#33eb61}{stepsTaken} + 2$$

- Now, we'll let $\color{#33ebeb}{wayToClimb}$ denote our function for climbing the stairs.

- Here's how we can represent the different scenarios fo climbing the stairs:

$$\color{#33ebeb}{wayToClimb}(\color{#33eb61}{stepsTaken} + 1, \color{#ebeb33}{n}) + \color{#33ebeb}{wayToClimb}(\color{#33eb61}{stepsTaken} + 2, \color{#ebeb33}{n})$$

- We're passing the $\color{#33eb61}{stepsTaken}$ + $\color{#33eb61}{nextStepSize}$ and our target value of $\color{#ebeb33}{n}$ steps to our function $\color{#33ebeb}{wayToClimb}$.

- Now, we need to determine how many times we need to to call $\color{#33ebeb}{wayToClimb}$.

- We know from the diagram if $\color{#33eb61}{stepsTaken} > \color{#ebeb33}{n}$, then we can ignore that way of climbing the stairs

- We also know if $\color{#33eb61}{stepsTaken} = \color{#ebeb33}{n}$, then we have found a valid way to climb the steps.

- Using this knowledge we can come up with the following:

## Implementation

<code-fence lang="js" heading="Climbing Stairs Solution 1">
<pre vue-slot="code">
var climbStairs = function(n) {
  return wayToClimb(0, n);
};

var wayToClimb = function(stepsTaken, n) {
  if (stepsTaken > n) {
    return 0;
  }

  if (stepsTaken === n) {
    return 1;
  }

  return wayToClimb(stepsTaken + 1, n) + wayToClimb(stepsTaken + 2, n);
};

let n = 4;
console.log(climbStairs(n));
</pre>
</code-fence>

## Downsides

- Our solution will work, but it's not efficient.

- We'll actually get a time limit exceeded error on LeetCode if we submit this.

- This is because the <span class="post-term-one">time complexity</span> of our solution is <span class="post-term-one">O(2<sup>n</sup>)</span>.

- We can look at our <span class="post-term-one">recursion tree</span> above and count the number of nodes to determine the <span class="post-term-one">time complexity</span>.

- Now, we won't count exactly <span class="post-term-one">2<sup>n</sup></span> nodes since our <span class="post-term-one">recursive formula</span> isn't exactly <span class="post-term-one">2<sup>n</sup></span>, but when dealing with <span class="post-term-one">Big-Oh</span> we only care about the behavior as <span class="post-term-one">n</span> becomes very large.

- We'll be improving this in the next post by drawing out <span class="post-term-one">recursion trees</span> for larger values of <span class="post-term-one">n</span> which will allow us to see an interesting pattern.

---
title: Schoolwork Stopped Showing Who Did the Thinking. Here's What We Found, and What We Don't Know
excerpt: We spent the autumn reading the 2026 research on K-12 and AI, then put our conclusions through an adversarial review. A narrower problem survived than the one we started with. This is what it is, what it means for how we build Mentra, and what we can't yet claim.
author: Mentra
date: 2026-11-17
category: For Schools
tags: [Research, Teachers, AI Tutors, Assessment, Evidence]
image: /images/blog/schoolwork-stopped-showing-who-did-the-thinking.jpg
featured: false
readTime: 7
---

This autumn we read as much of the 2026 research on schools and AI as we could find: national polls, teacher and district surveys, randomised trials and a lot of what teachers and parents say to each other online. Then we put our conclusions through an adversarial review: five separate critiques, each objection ruled on, and the report rewritten where it failed.

Less survived than we'd hoped. We think that's the useful part, so here it is.

## The problem that held up

**In secondary school, unsupervised written work no longer shows who did the thinking.**

That's narrower than "AI is ruining education", and it rests on what teachers are doing, not only on what surveys say. Teachers have moved essays back into class and onto paper. Some no longer grade anything written at home. Some stand at the back of the room for every test. Others use AI detectors, which give a probability rather than evidence and wrongly flag students who did their own work.

Each of these brings back some trust in the work. Each costs teachers hours of grading and supervision, and costs students teaching time.

The wider picture points the same way, though it's weaker evidence:

- Satisfaction with K-12 education hit **32%** in Gallup's 2026 poll, the lowest since the series began in 1999. Only about **2 in 10** Americans rate schools good or excellent at teaching critical thinking ([AP report of the Gallup poll](https://civilbeat.org/2026/09/americans-school-satisfaction-is-at-a-low-point-national-poll-shows)).
- In a RAND panel of middle school, high school and college students, the share saying AI for schoolwork harms critical thinking rose from 54% to **67%** in a year, while their AI homework use rose from 48% to 62% ([eSchool News](https://www.eschoolnews.com/digital-learning/2026/03/25/student-use-of-ai-for-homework-rises/)).

Students aren't confused about the risk. In their own accounts, they reach for an answer when the work feels pointless, too much lands at once, a grade is at stake, or they're stuck with no one to ask. An answer machine fixes all four in seconds.

## What the trials say, and what they don't

There is real evidence that **unstructured** answer-giving AI can hurt learning. In a trial with nearly 1,000 Turkish high-school maths students, unrestricted GPT-4 access raised practice scores, but students did **17% worse** than a control group once it was taken away. A version with guardrails avoided the harm ([Knowledge at Wharton](https://knowledge.wharton.upenn.edu/article/without-guardrails-generative-ai-can-harm-education/)).

The evidence that a guard-railed AI tutor *helps* in K-12 is thinner than most marketing suggests, including, at times, our own. The largest trial so far ran over two years in 18 Tennessee middle schools. Students using Khan Academy with its AI tutor gained a modest amount in year two, at low cost. But the tutor was a chat icon beside the practice, and the typical student messaged it in only **17%** of the sessions where they made a mistake, mostly with one- or two-word replies. The authors conclude that engagement was the binding constraint ([NBER working paper 35620](https://www.nber.org/papers/w35620)).

So the honest summary is this: **no trial has yet tested a product where a Socratic conversation is the assigned activity itself.** It hasn't failed. It hasn't been tested. Nobody, us included, can say a Socratic AI tutor is proven to improve learning in K-12.

## The market isn't empty, and the money is tight

Two more findings shaped our thinking.

First, free tools now do part of what we do. AI study modes coach students step by step, and as of October 2026 Google Classroom gives teachers AI-written summaries of students' chats with an assigned notebook, free in every education edition ([Google](https://workspaceupdates.googleblog.com/2026/10/teacher-led-gemini-notebook-in-google-Classroom-now-offers-insight-summaries-for-educators-and-updated-sharing-settings-for-admins-including-trusted-domains.html)). If a teacher can't tell the difference between that and Mentra, we haven't earned a place in their classroom.

Second, buyers are under pressure. In RAND's spring 2026 district survey, **54%** of district leaders named budget shortfalls a top-three concern, up from 33% a year earlier ([RAND](https://www.rand.org/pubs/research_reports/RRA4737-4.html)). Several states passed limits on classroom screens, and in September New York City and Los Angeles paused student-facing generative AI for this school year ([Tech Policy Press](https://techpolicy.press/americas-two-largest-school-districts-impose-ai-moratoriums)).

## What this changes for Mentra

**We'll stop using words we can't back up.** A conversation with Sprig shows what a student did with Sprig there. It doesn't prove what they understand, and it isn't a cheating detector. What we can say is that the teacher sees the student's working.

**We'll lean on what's different.** Mentra separates work a student did with help from work they did alone. Repeating what Sprig said counts for nothing. The teacher's brief is built by fixed rules from the recorded work, not written by a chatbot, and when there isn't enough evidence it says "too early to tell". When a teacher needs to know what a student can do on their own, they can set an assignment to No AI Help.

**We'll make the conversation the assignment, not a side panel.** The Tennessee result is a warning about optional chat beside the work. Whether students actually reason when the conversation *is* the work is the question everything else depends on, so it's the first thing our pilots measure.

**We'll start with high school.** That's where take-home work has changed most, and where screen limits and moratoriums bite least.

## What a pilot has to show

We write down the thresholds before a pilot starts, so the result can go against us:

- the share of students, including the lowest-performing, who write a real reasoning step rather than a one-word reply in most sessions
- whether the help each student needs per problem falls over time
- whether students can do it later in a No AI Help check that Sprig takes no part in
- whether teachers open the brief and change something the next day

If students type the minimum, or teachers don't have two minutes to read what Mentra tells them, we'd rather know now.

## What we don't know

Plenty. We don't know whether teachers rank this problem high enough to adopt a new tool. We don't know whether a district will pay for it while a rough version comes free. We don't know whether text conversations serve weak readers and English learners as well as other students. Many of the survey figures in this area come from news reports of studies rather than the studies themselves, and polls from advocacy groups on every side disagree mostly because they ask different questions.

If you teach in a high school and any of this sounds like your week, we'd like to hear from you, whether or not you'd ever use Mentra. Write to us at [hello@mymentra.ai](mailto:hello@mymentra.ai).

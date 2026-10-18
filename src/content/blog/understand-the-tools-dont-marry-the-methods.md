---
title: "Understand the Tools, Don't Marry the Methods"
description: 'ITIL, SRE, the runbook, the framework — they are all tools, and a tool is only right for the job in front of you. A case against methodology dogma in operations, and for keeping the goal in view instead of the ritual.'
pubDate: 'Jun 10 2026'
---

Every operations team eventually meets the person who has fallen in love with a method. It might be ITIL. It might be the SRE playbook straight out of the Google book. It might be a specific incident framework, a specific runbook format, a specific ceremony. Whatever it is, they've stopped asking whether it fits the problem and started asking whether the team is *doing it correctly.*

That's the moment the tool became the master.

I've been guilty of it. You learn something that works, it saves you in a real crisis, and gratitude curdles into orthodoxy. Now every situation looks like the one the method was built for, and you start bending the problem to fit the tool instead of the other way around.

## Methods are tools, and tools are situational

A hammer is a wonderful tool. It is also completely wrong for a screw. Nobody argues that hammers are bad because they don't drive screws — we just understand that a tool has a job it's good at and jobs it isn't.

Operational methods are the same, but we forget it because they're abstract. ITIL's change management is genuinely excellent when you're a large regulated enterprise protecting a fragile core system from careless changes. That same process, applied to a five-person team shipping a web app, is a straitjacket that guarantees you move slower than the incidents you're trying to prevent.

Neither is "right." The method is a tool. The question is never "is this the correct methodology?" It's "does this tool fit *this* job?"

## The tell: ritual outliving its reason

Here's how you know a method has stopped being a tool and become a ritual: nobody can tell you *why* you do the step, only that you're supposed to.

Why do we require three approvals on this change? "That's the process." Why is the postmortem in this exact template? "That's how we do it." Why do we page this whole team for a SEV3? "Policy." When the answers are all appeals to the ritual rather than the goal it was meant to serve, the method has quietly become the point. And methods-as-the-point are how you end up with teams that are perfectly compliant and completely ineffective.

Every good process was invented to serve a goal. Reliability. Safety. Speed. Learning. When you can't trace the step back to the goal, either the goal changed or the step was cargo-culted from somewhere it made sense. Both are worth catching.

## Keep the goal in the center

The antidote isn't abandoning methods — it's holding the goal in the center and treating every method as a swappable means to it.

In an incident, the goal is: restore service, learn why, don't make it worse. *Any* method that serves those goals is fair game, and any method that fights them — however respected — gets dropped for the duration. I've run incidents strictly by the book and I've run them on a napkin and a phone call, and the right choice was entirely about which one served the goal at that moment.

This is also why I distrust tools that hide their reasoning. A runbook that says "run this command" without telling you *what it's checking for and why* has trained you in ritual. The moment reality differs from the script — and in a real incident it always does — you're stranded, because you learned the steps and not the goal. The tools worth trusting are the ones that make their reasoning visible, so you can adapt when the situation doesn't match the manual.

## Build tools that teach, not tools that dictate

That principle shaped everything I've built. The [field kits](https://sql-hadr-triage.pages.dev/start) I make are decision trees, not prescriptive scripts. They surface the vetted information you need at each stage — what to check, what it means, what to ask — and then they leave the decision to the human, because the human is the one who can see the parts the method didn't anticipate. A decision tree adapts. A rigid runbook shatters the first time the world doesn't match it.

Learn your methods deeply — deeply enough to know exactly what each one is *for*. That's the whole point of understanding a tool: understanding tells you when to pick it up and, just as importantly, when to set it down. The person who has mastered a method can abandon it the instant it stops serving the goal. The person who has married it will defend the ritual right through the outage.

Understand the tools. Don't marry the methods.

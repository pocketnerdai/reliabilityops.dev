---
title: 'Be Like Water: Adapting Your Incident Command Style'
description: 'There is no single right way to run an incident. The best commanders read the room and change shape — directive when it is chaos, hands-off when the experts have it. A case for flexibility over dogma.'
pubDate: 'Apr 22 2026'
---

Bruce Lee's famous line was about martial arts, but it might as well have been written for incident response: *"Be water, my friend."* Water takes the shape of whatever contains it. It's soft enough to flow around an obstacle and hard enough to carve stone. It doesn't have one move. It has the *right* move for the moment.

Most advice about running incidents hands you one move and tells you it's the answer. Be decisive. Be calm. Follow the process. Empower the team. All of it is true some of the time and wrong the rest of the time. The skill isn't picking the right style once — it's changing shape as the incident changes.

## The directive style

Sometimes the bridge is chaos. Ten people talking, three investigations running in parallel, nobody agreeing on impact. This is when you become a solid: short, clear commands. "Stop. Here's what we know. You check the database, you own comms, everyone else mute. Next update in fifteen." You are deliberately narrowing the room down to one conversation.

New responders often think this is what incident command *is* — barking orders. It's one shape. It's the shape you take when the water is boiling and needs a container. Hold it too long, though, and you'll steamroll the one engineer who quietly knew the answer.

## The facilitative style

Now flip it. You've got two senior experts who've seen this exact failure before, and they're already three steps into the fix. The worst thing you can do here is command. Your job shrinks to keeping them unblocked: shielding them from stakeholder questions, fetching access, tracking the timeline, and staying out of the way.

This is water as a gentle current. You're still steering — you're just steering by removing friction instead of issuing orders. A good IC can feel the moment the room shifts from "needs direction" to "needs space," and changes accordingly.

## The investigative style

Some incidents aren't chaotic and aren't understood — they're just *murky*. No obvious cause, weak signals, everyone unsure. Here the commander becomes a questioner. You're not directing action because there's no clear action yet. You're pulling on threads: "What changed? What's ruled out? What would we expect to see if it were the network, and do we see it?"

The failure mode is forcing action before you understand — thrashing, restarting things at random, making the graphs worse and the timeline longer. Sometimes the most decisive thing a commander can do is slow the room down.

## Reading which shape to take

So how do you know which style the moment wants? A few tells I've learned to watch for:

- **The room is loud and contradictory** → go directive. Impose one conversation.
- **The experts are already moving with confidence** → go facilitative. Clear their path.
- **Signals are weak and everyone's guessing** → go investigative. Ask, don't act.
- **Impact is escalating fast** → bias toward mitigation and directness; you can be gentle later.
- **The team is exhausted or it's hour six** → shift to protective. Rotate people, guard the handoff, lower the temperature.

The mistake is having a favorite. Directive people command through incidents that needed space. Facilitative people stay hands-off through incidents that were begging for someone to take the wheel. Your natural style is your comfortable shape — and the incident does not care what's comfortable for you.

## Flexibility isn't the absence of structure

Being like water doesn't mean improvising everything. Water still obeys physics; it just isn't rigid about the path. The phases of an incident — declare, assemble, stabilize, diagnose, communicate, resolve, review — are the riverbed. They give the response its direction. Your *style* within them is the water, taking whatever shape the terrain demands.

That's the distinction I keep coming back to, and it's why the [Incident Commander field kit](https://sql-hadr-triage.pages.dev/incident) I built is a set of prompts and questions, not a rigid script. It tells you what to consider at each phase and what to ask each domain — and then it gets out of your way so you can be directive or facilitative or investigative as the moment calls for it.

Learn the phases cold. Then stop performing a style, and start reading the room. Be water.

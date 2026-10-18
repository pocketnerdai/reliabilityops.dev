---
title: 'How to Run an Incident Without Losing Your Head'
description: 'The job of an incident commander is not to fix the outage. It is to keep the room calm, restore service before chasing root cause, and make sure the right questions get asked. A field guide to staying level when everything is red.'
pubDate: 'Mar 05 2026'
---

The worst incidents I have been part of weren't the ones with the hardest technical problems. They were the ones where nobody was steering. Ten smart people on a bridge, all talking, all typing, none of them agreeing on what "done" even meant. The system was on fire and so was the response.

The technical failure is rarely what makes an incident go long. The coordination failure is.

So the first thing to understand about running an incident is that the incident commander does not fix anything. The IC coordinates and decides. The moment you, as IC, put your hands on the keyboard, you've lost the board — you're now staring at one square while the other nine burn. Your job is the whole board.

Here is how I keep my head when the pager goes off.

## Declare early, size honestly

If you're not sure whether it's an incident, declare it. You can always downgrade. The cost of a false alarm is a few minutes; the cost of a real incident that nobody named for twenty minutes is the twenty minutes.

Then size it. A severity level isn't bureaucracy — it sets the cadence, the audience, and how many people you're allowed to pull off their day. A SEV1 earns an all-hands bridge and executive updates. A SEV3 does not. Calling everything a SEV1 is how you burn out a team and get ignored when it's real.

## Name the roles out loud

"I'm the incident commander." Say it. One IC. Then a scribe to own the timeline and comms, and an operations lead — or one per domain — to actually touch the systems.

Ambiguity about who's in charge is the single most common thing I see go wrong. Two people quietly both think they're running it, or nobody does. Say the roles out loud and it evaporates.

## Stabilize before you diagnose

This is the rule that separates calm incidents from chaotic ones: **restore service first, understand it second.**

Your customers feel recovery, not root cause. If you can roll back the deploy, fail over to the replica, flip the feature flag, scale out, or reroute traffic — do it, even if you don't yet know exactly why things broke. Mitigation buys you the one thing an outage steals: time to think.

I've watched brilliant engineers spend forty-five minutes building a perfect diagnosis while the fix — a one-line rollback — sat untouched because it felt like giving up. It isn't. Root cause can wait. The outage cannot.

## Coordinate the diagnosis, don't perform it

Once service is stable, run the diagnosis like a conversation, not a scrum of overlapping voices. One thread at a time. Track hypotheses and who's checking what, with a timebox on each. Rule things *in or out* explicitly — "database is ruled out as of 14:20" — so you're not relitigating the same theory an hour later.

When a domain lead comes back from checking their area, ask the same three questions every time: what did you find, what did you change, and is your area ruled in or out — and how confident are you? Confidence matters. "Probably not the network" and "definitely not the network" lead to very different next moves.

## Communicate on a cadence, even when there's nothing new

Silence reads as chaos. If your stakeholders don't hear from you, they assume you've lost control — and they start their own side-channel investigations, which pull your people off the bridge to answer questions.

Pick a cadence and hit it. SEV1, every fifteen minutes. Every update states the same three things: current impact, what you're doing, and the time of the next update. Always give a next update time. "No change, still mitigating, next update at 14:45" is a complete and valuable message.

## Verify with data, then close cleanly

When you think it's over, confirm recovery with the graphs and health checks — not with one person saying "looks fine to me." Watch for the second wave: queues draining, caches cold, retries stampeding the thing you just brought back.

Then close cleanly. Drop the cadence, thank the team by name, capture the timeline while it's fresh, and schedule a blameless review. The system failed, not the person who was holding the pager.

## The calm is a tool, not a personality trait

None of this requires you to be a naturally calm person. I'm not. Calm under pressure comes from having a structure to fall back on when your adrenaline is telling you to just start typing. The phases above *are* that structure — the thing you reach for so you don't have to improvise leadership at 2am.

That's exactly why I turned this into a tool: an offline [Incident Commander field kit](https://sql-hadr-triage.pages.dev/incident) with the phase flow, the per-domain questions, comms templates, and a running timeline that becomes your postmortem. Not because incident command can be automated — it can't — but because the calm is easier to hold when the checklist is already in your hand.

Run the incident. Don't let it run you.

## The System

Chaindustry is a task-to-earn platform where users create and complete micro-tasks in exchange for in-app rewards that can be converted to crypto. Beyond task execution, the platform also supports campaigns, user profiles, an academy onboarding system, and a delegation layer for managing high-volume workflows.

The system operates with multiple roles — task creators, task reviewers, delegated reviewers, and platform admins — each interacting with shared workflows around task creation, approval, and payment.

![Dashboard View](https://res.cloudinary.com/dlore0dyu/image/upload/v1777300524/portfoilio-chaindustry-v2_l08ev7.png)

## The Problem

As the platform grew, several structural challenges emerged:

- Task reviews became a bottleneck
- Review delays affected user payouts
- Task quality issues appeared, including spammy or exploitative submissions from users
- Reviewers couldn't prioritize urgent tasks
- Review quality varied across reviewers
- The onboarding flow for academy registration relied on external forms, creating friction in user experience
- Many product flows were not UX-guided, requiring frequent interpretation during implementation

The system needed to scale both in workflow capacity and user experience clarity, without breaking existing functionality.

## The Work (Frontend Scope)

Frontend responsibilities focused on building and refining user-facing systems on top of backend APIs.

### Task System UI

Built and maintained interfaces for task creation, submission, review, and status tracking. Implemented flows where users could complete tasks, submit proof, and track approval status tied to in-app rewards.

![Desktop Screenshot of Chaindustry Task Page](https://res.cloudinary.com/dlore0dyu/image/upload/v1777474073/Macbook-Air-1558.998291015625x975_xaftuf.png)

### Delegation System

Developed a delegation feature allowing task creators to assign review responsibilities to trusted users. This helped distribute review workload in a system where task approvals had become a bottleneck due to increasing submission volume.

### Academy Onboarding

Replaced an external Google Form-based signup process with an in-app academy registration flow, improving onboarding consistency and reducing friction in user entry into the program.

![A desktop screenshot of chaindustry academy registration page](https://res.cloudinary.com/dlore0dyu/image/upload/v1777475188/Macbook-Air-1558.998291015625x975_vgnoxy.png)

### UX-Driven Frontend Decisions

Frequently implemented UI flows without formal design handoff by interpreting product intent directly. This included proactive UX behavior such as checking user state on page load (e.g. missing transaction PIN) and guiding users through required setup steps before continuing.

![A desktop screenshot of a transaction pin setup overlay on the chaindustry app](https://res.cloudinary.com/dlore0dyu/image/upload/v1777474747/Macbook-Air-1558.998291015625x975_cjshrp.png)

### Code Quality & UI Consistency

Worked on improving frontend structure and usability by handling edge cases in API-driven flows, improving error messaging, and ensuring UI behavior aligned with real user interaction patterns rather than idealized states.

## The Reality of Building It

The frontend primarily acted as an API consumer layer, with backend systems handling task logic, submissions, approvals, and payments. The challenge on the frontend was translating these complex workflows into interfaces that users could understand and reliably interact with.

A key constraint was working in a fast-moving environment without complete design systems, requiring constant interpretation of product intent and adaptation to real user behavior.

## What Changed

Key improvements focused on:

- reducing friction in task review workflows through delegation
- improving onboarding through in-app academy integration
- making complex task flows more understandable to users
- improving UX consistency across a multi-role system
- supporting scalability of high-volume task interactions

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Redux & RTK Query
- Framer Motion

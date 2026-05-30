# SafeGuard AI

An enterprise PPE (Personal Protective Equipment) monitoring dashboard built with TanStack Start.

## Overview

SafeGuard AI is a full-stack web application that provides real-time computer vision monitoring for industrial safety compliance. It detects PPE violations, generates audit trails, and delivers AI-driven safety insights.

## Tech Stack

- **Framework**: TanStack Start (React 19 + SSR)
- **Build Tool**: Vite 7 with `@lovable.dev/vite-tanstack-config`
- **Package Manager**: Bun
- **Styling**: Tailwind CSS v4 + Radix UI (shadcn/ui)
- **State Management**: TanStack Query + TanStack Router
- **Language**: TypeScript

## Project Structure

- `src/routes/` — File-based routing (TanStack Router)
- `src/components/ui/` — Reusable UI components
- `src/lib/` — Core logic, auth helpers, API functions
- `src/hooks/` — Custom React hooks
- `src/server.ts` — Nitro SSR server entry with error handling

## Running the App

```bash
bun run dev
```

The dev server runs on port 5000.

## User Preferences

- Use Bun as the package manager (not npm or yarn)

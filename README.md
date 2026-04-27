# To Do List

A small task management app built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS 4**, and **Biome**.

The app stores tasks in the browser using `localStorage`, so it works as a simple local-first to-do list without a backend.

## Features

- Create tasks with title, description, status, and date.
- View task details.
- Update existing tasks.
- Delete tasks.
- Change task status between `TO DO`, `DOING`, and `DONE`.
- Toggle light/dark theme.
- Local persistence through `localStorage`.

## Tech Stack

- [Next.js](https://nextjs.org/) 16
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Biome](https://biomejs.dev/) for linting and formatting
- [pnpm](https://pnpm.io/) as package manager
- [react-day-picker](https://daypicker.dev/) for date selection
- [Immer](https://immerjs.github.io/immer/) for reducer updates

## Requirements

- Node.js 20.9 or newer
- pnpm 10 or newer

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
pnpm dev
```

Starts the local development server using the default Next.js development bundler.

```bash
pnpm build
```

Creates a production build.

```bash
pnpm start
```

Starts the production server after running `pnpm build`.

```bash
pnpm lint
```

Runs Biome checks.

```bash
pnpm format
```

Formats the project with Biome.

## Project Structure

```txt
src/
├── app/                 # Next.js App Router pages and providers
├── components/          # Reusable UI components
├── helpers/             # Browser/storage helpers
├── hooks/               # Custom React hooks
└── types/               # Shared TypeScript types
```

## Notes

- Tasks are saved in `localStorage`, so data is browser-specific.
- There is no backend or authentication layer.
- The project uses `pnpm-lock.yaml`; avoid mixing package managers.

## Repository

GitHub: [adanft/to-do-list](https://github.com/adanft/to-do-list)

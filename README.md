# Shivam Rawat — Portfolio

Personal site showcasing experience, client and side projects, writing, and contact details.
Light/dark themed, single page, no framework beyond React.

## Demo

**Live site:** [https://shivamrawat.dev](https://shivamrawat.dev)

## Tech stack

- [React](https://react.dev/) 19 + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) 8
- [Motion](https://motion.dev/) for UI animation
- [react-icons](https://react-icons.github.io/react-icons/)

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

`npm run build` runs the TypeScript project check and produces static output in `dist/`, suitable for static hosting (for example GitHub Pages).

## Editing content

All copy lives in `src/data/portfolio.ts` — profile, experience, projects, education and posts.
Design tokens (colours, type scale, spacing, both themes) live in `src/styles/tokens.css`.

### Adding a blog post

The Writing section reads `blogPosts`. While the array is empty it renders an
invitation to the Medium archive; add an entry and the list takes over:

```ts
export const blogPosts: BlogPost[] = [
    {
        title: 'Shipping server-driven UI in UIKit',
        summary: 'What changed when payment screens stopped needing app releases.',
        date: '2026-08-12',
        url: 'https://medium.com/@shivamrawat_756/...',
        readingTime: '6 min read',
        tags: ['iOS', 'SDUI'],
    },
];
```

## License

Private project; all rights reserved unless stated otherwise.

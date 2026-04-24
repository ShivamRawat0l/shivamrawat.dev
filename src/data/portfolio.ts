import type { Education, Experience, Project, SocialLink } from '../types/portfolio';

export const socialLinks: SocialLink[] = [
    { label: 'GitHub', url: 'https://github.com/ShivamRawat0l/' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/shivam-rawat-b58975173/' },
    { label: 'LeetCode', url: 'https://leetcode.com/u/shivamrawat0l/' },
    { label: 'Medium', url: 'https://medium.com/@shivamrawat_756' },
    { label: 'Email', url: 'mailto:shivamrawat2806@gmail.com' },
];

export const experiences: Experience[] = [
    {
        company: 'Mutual Mobile (Remote)',
        role: 'React Native / iOS Engineer',
        duration: 'Dec 2021 - Current',
        points: ['Led product features in React Native and iOS.', 'Built real-time messaging/video features with Twilio and Agora.'],
    },
    {
        company: 'Mutual Mobile (Remote)',
        role: 'Intern',
        duration: 'Aug 2021 - Nov 2021',
        points: ['Delivered production-ready features with QA collaboration.', 'Improved app quality with design + engineering sync.'],
    },
    {
        company: 'Scalability Engineer',
        role: 'Intern',
        duration: 'Jan 2021 - Apr 2021',
        points: ['Supported scalability-focused engineering tasks.', 'Contributed to sprint delivery and effort estimation.'],
    },
];

export const professionalProjects: Project[] = [
    {
        title: 'Experian iOS App',
        description: 'Developed server-driven UI screens and SSE pipelines for dynamic payment flows.',
        points: [
            'Implemented server-driven UI (SDUI) flows in UIKit so payment and onboarding screens could be updated without full app releases.',
            'Integrated GraphQL with typed client layers and resilient error handling for credit and identity workflows.',
            'Built SSE-backed live update channels so users saw payment status and step changes without polling.',
            'Partnered with backend and product to ship dynamic flows under tight compliance and release constraints.',
        ],
        stack: ['Swift', 'GraphQL', 'SSE', 'UIKit'],
    },
    {
        title: 'Mars iOS Framework',
        description: 'Built and distributed an .xcframework for ML pet health workflows with 90% coverage.',
        points: [
            'Designed and shipped a distributable .xcframework consumed by the main Mars iOS app and CI pipelines.',
            'Wrote Swift unit and integration tests to reach ~90% coverage on critical ML-driven health workflows.',
            'Exposed GraphQL-backed APIs to the framework with clear boundaries for versioning and binary compatibility.',
            'Documented integration steps for client teams and supported adoption across releases.',
        ],
        stack: ['Swift', 'GraphQL', 'Testing'],
    },
    {
        title: 'CSC iOS App',
        description: 'Modernized a parenting app from UIKit to SwiftUI with clean architecture and concurrency.',
        points: [
            'Migrated major surfaces from UIKit to SwiftUI while preserving behavior and improving maintainability.',
            'Applied clean architecture patterns and structured concurrency (async/await) for safer async work.',
            'Refactored navigation and state so features could evolve independently with fewer regressions.',
            'Collaborated with design on SwiftUI-first patterns for accessibility and responsive layouts.',
        ],
        stack: ['SwiftUI', 'UIKit', 'iOS'],
    },
    {
        title: 'Mint Dentistry App',
        description: 'Shipped React Native healthcare features with location services and production QA workflows.',
        points: [
            'Delivered patient-facing React Native features including maps, location-aware flows, and push notifications.',
            'Worked through healthcare privacy expectations and platform permission models on iOS and Android.',
            'Ran structured QA cycles with traceable builds, regression checks, and release readiness with stakeholders.',
            'Improved performance and stability of high-traffic booking and reminder flows.',
        ],
        stack: ['React Native', 'Maps', 'Notifications'],
    },
    {
        title: 'Ibble Social Media App',
        description: 'Extended social messaging with Twilio chat, read receipts, sharing flow, and Agora video calling.',
        points: [
            'Extended Twilio-based chat with delivery states, read receipts, and richer sharing UX.',
            'Integrated Agora for in-app video calling with connection handling and error recovery.',
            'Used Socket.IO for real-time signals alongside REST where appropriate for reliability.',
            'Tuned list and conversation performance for large thread histories on mid-tier devices.',
        ],
        stack: ['React Native', 'Twilio', 'Socket.IO'],
    },
    {
        title: 'Delivery App',
        description: 'Revamped delivery platform UI and shipped a reusable native bridge library published to npm.',
        points: [
            'Redesigned core delivery tracking and order UI in React Native for clarity and faster task completion.',
            'Built a reusable native bridge module (Kotlin/Swift) and published it to npm for shared client use.',
            'Standardized bridge APIs so product teams could ship native capabilities without duplicating glue code.',
            'Reduced crash rates and ANRs on critical navigation paths through profiling and targeted fixes.',
        ],
        stack: ['React Native', 'npm', 'Kotlin', 'Swift'],
    },
];

export const personalProjects: Project[] = [
    {
        title: 'Paperlane',
        description:
            'A canvas-based React.js notes app in progress: drawing layers, quick capture, and a calm editing flow aimed at replacing scattered scratch notes with one fast surface.',
        stack: ['React.js', 'Canvas API', 'UI Design'],
        links: [{ label: 'GitHub', url: 'https://github.com/ShivamRawat0l/Annotate' }, { label: 'Website', url: 'https://paperlane.dev/' }],
    },
    {
        title: 'Native Menu',
        description:
            'A React Native library that bridges native menu components from UIKit and Android so apps get platform-faithful menus without reimplementing chrome in JS.',
        stack: ['React Native', 'Swift', 'Kotlin', 'npm'],
        links: [
            { label: 'GitHub', url: 'https://github.com/search?q=ShivamRawat0l+native+menu&type=repositories' },
            { label: 'npm', url: 'https://www.npmjs.com/package/@rn-elementary/menu' },
        ],
    },
    {
        title: 'Speed Reader',
        description:
            'A React Native reading experience built around speed-reading patterns—chunked text, pacing controls, and layout tuned for long sessions on phones.',
        stack: ['React Native', 'Mobile UX'],
        links: [
            { label: 'GitHub', url: 'https://github.com/search?q=ShivamRawat0l+speed+reader&type=repositories' },
            { label: 'YouTube', url: 'https://www.youtube.com/results?search_query=Shivam+Rawat+speed+reader+react+native' },
        ],
    },
    {
        title: 'Presence System',
        description:
            'A small real-time presence experiment using Socket.IO—who is online, typing hints, and channel-style updates inspired by collaborative editors.',
        stack: ['JavaScript', 'Socket.IO'],
        links: [{ label: 'GitHub', url: 'https://github.com/search?q=ShivamRawat0l+presence+system&type=repositories' }],
    },
    {
        title: 'Loaders',
        description:
            'React Native loader and transition primitives packaged for reuse—consistent timing, theme-friendly styling, and npm-friendly entry points.',
        stack: ['React Native', 'npm', 'UI Design'],
        links: [
            { label: 'GitHub', url: 'https://github.com/search?q=ShivamRawat0l+loaders+react+native&type=repositories' },
            { label: 'npm', url: 'https://www.npmjs.com/search?q=shivam%20rawat%20react%20native%20loader' },
        ],
    },
    {
        title: 'Instagram Clone',
        description:
            'A SwiftUI take on Instagram-style feeds: scroll performance, image grids, and lightweight interaction patterns without UIKit baggage.',
        stack: ['SwiftUI', 'Swift', 'GitHub'],
        links: [{ label: 'GitHub', url: 'https://github.com/ShivamRawat0l/InstagramClone' }],
    },
    {
        title: 'Cheat Sheet',
        description:
            'A Firebase-backed web app to stash and search syntax snippets—tags, quick copy, and offline-friendly reads for day-to-day reference.',
        stack: ['React.js', 'JavaScript', 'Firebase'],
        links: [{ label: 'GitHub', url: 'https://github.com/search?q=ShivamRawat0l+cheat+sheet&type=repositories' }],
    },
    {
        title: 'Stremio P2P',
        description:
            'Stremio add-on for peer-assisted streaming: Node.js service wiring, addon manifest, and P2P-friendly playback flows (MIT-licensed on GitHub).',
        stack: ['JavaScript', 'Node.js', 'GitHub'],
        links: [{ label: 'GitHub', url: 'https://github.com/ShivamRawat0l/StremioP2P' }],
    },
    {
        title: 'RXDB Appwrite React Demo',
        description:
            'Exploratory React + TypeScript client pairing RXDB with Appwrite—local-first documents, sync edges, and UI states when the network is flaky.',
        stack: ['React.js', 'TypeScript', 'UI Design'],
        links: [{ label: 'GitHub', url: 'https://github.com/search?q=ShivamRawat0l+rxdb+appwrite+react&type=repositories' }],
    },
    {
        title: 'Uploader',
        description:
            'A resumable uploader built with HTML and JavaScript—chunk-friendly flows so large files can pause and continue instead of restarting from zero.',
        stack: ['HTML', 'JavaScript', 'UI Design'],
        links: [{ label: 'GitHub', url: 'https://github.com/ShivamRawat0l/Uploader' }],
    },
    {
        title: 'Services',
        description:
            'TypeScript utilities and wrappers for integrations I reuse across projects—thin adapters around native bridges, HTTP clients, and shared service boundaries.',
        stack: ['TypeScript', 'Node.js', 'Testing'],
        links: [{ label: 'GitHub', url: 'https://github.com/ShivamRawat0l/services' }],
    },
    {
        title: 'QMK Keymaps',
        description:
            'Personal QMK firmware keymaps and layout tweaks for boards I use daily—layers, macros, and Makefile-driven builds kept in sync with upstream QMK.',
        stack: ['C', 'Embedded', 'Shell'],
        links: [{ label: 'GitHub', url: 'https://github.com/ShivamRawat0l/qmk-keymaps' }],
    },
    {
        title: 'Advent of Code 2024',
        description:
            'Advent of Code 2024 solutions in Rust (plus Vim tooling around the repo)—focused on clear parsing, safe iterators, and fast turnarounds on puzzle days.',
        stack: ['Rust', 'Algorithms', 'Shell'],
        links: [{ label: 'GitHub', url: 'https://github.com/ShivamRawat0l/Advent-Of-Code-2024' }],
    },
    {
        title: 'Book Goal Kicker',
        description:
            'Python automation that batches downloads from a book site using requests, Beautiful Soup, and wget—structured scraping with resumable grabs.',
        stack: ['Python', 'Web Scraping', 'Shell'],
        links: [{ label: 'GitHub', url: 'https://github.com/ShivamRawat0l/Book-Goal-Kicker' }],
    },
    {
        title: 'Dotfiles',
        description:
            'Cross-machine dotfiles: shell, Neovim/Lua, Python helpers, Swift snippets, and editor glue so macOS and Linux dev environments stay predictable.',
        stack: ['Shell', 'Python', 'Swift'],
        links: [{ label: 'GitHub', url: 'https://github.com/ShivamRawat0l/dotfiles' }],
    },
];

export const education: Education[] = [
    { level: 'B.Tech', school: 'DIT University', score: '8.0 CGPA', year: '2021' },
    { level: 'Class XII', school: 'Kendriya Vidyalaya No.2, Dehradun', score: '95%', year: '2017' },
    { level: 'Class X', school: 'Kendriya Vidyalaya No.2, Dehradun', score: '9.4 CGPA', year: '2015' },
];

export const skills = ['JavaScript', 'TypeScript', 'React Native', 'React.js', 'Swift', 'Node.js', 'GraphQL', 'Twilio', 'Socket.IO', 'Xcode'];

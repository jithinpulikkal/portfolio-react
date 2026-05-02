import profileImg from "../assets/profile.jpeg";

const userData = {
    name: "Jithin Pulikkal",
    firstName: "Jithin",
    lastName: "Pulikkal",
    initial: "P",
    role: "MERN Stack & React Native Developer",
    stack: "Full Stack Developer",
    location: "Kerala, India",
    experience: "2+ yrs",
    specialty: "Full stack",
    resumeUrl: "https://drive.google.com/file/d/1FBoIwujWiK6h7c3HMT01ojwlnauv4izt/view?usp=sharing",
    img: profileImg,
    headline: "Building clean, scalable products for web and mobile.",
    description:
        "I build responsive interfaces, practical backend systems, and cross-platform mobile apps with a strong focus on clarity, reliability, and user experience.",
    longBio:
        "I'm Jithin Pulikkal, a MERN-stack and React Native developer who enjoys taking products from idea to implementation. My work spans MongoDB, Express.js, React, Node.js, React Native, and Expo, with an emphasis on solutions that stay maintainable as they grow. I care about code quality, thoughtful UI, and building features that feel fast and dependable in everyday use.",
    focus: [
        "Responsive interfaces that feel polished on every screen.",
        "Backend APIs that stay easy to extend and debug.",
        "Cross-platform mobile work with React Native and Expo.",
        "Readable codebases that teams can move quickly in.",
    ],
};

const portfolioContent = {
    sectionLinks: [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "work", label: "Projects" },
        { id: "stack", label: "Stack" },
        { id: "contact", label: "Contact" },
    ],
    stackGroups: [
        {
            title: "Interface Layer",
            blurb: "Responsive frontends and interaction systems.",
            keys: ["react", "js", "html", "css", "tailwind", "bootstrap", "redux", "vite"],
        },
        {
            title: "Server Layer",
            blurb: "APIs, data flow, persistence, and realtime features.",
            keys: ["nodejs", "express", "mongodb", "postgresql", "mysql", "socket"],
        },
        {
            title: "Deployment Layer",
            blurb: "Workflow, tooling, versioning, and delivery habits.",
            keys: ["git", "github", "postman", "npm", "expo-go"],
        },
    ],
    metrics: [
        // { label: "Experience", value: "2+ yrs", detail: "web and mobile" },
        { label: "Primary", value: "MERN", detail: "React, Node.js, MongoDB" },
        { label: "Mobile", value: "Expo", detail: "React Native delivery" },
    ],
    statLabels: {
        experience: "Experience",
        projects: "Projects",
        tools: "Tools",
        primaryRole: "Primary role",
    },
    focusHighlights: ["UI systems", "scalable APIs", "real-time features", "React Native delivery"],
    hero: {
        eyebrow: "Full-Stack Developer",
        title: ["Designing", "code-driven", "digital systems."],
        intro:
            "I'm Jithin Pulikkal, a full stack developer building web platforms and mobile experiences with a clean engineering mindset. I like interfaces that feel alive, APIs that scale calmly, and codebases teams can keep shipping in.",
        availability: "System online",
        experienceSuffix: "experience",
    },
    about: {
        eyebrow: "Profile",
        title: ["Engineer mindset.", "Product awareness."],
    },
    work: {
        eyebrow: "Project Archive",
        title: "Builds that balance visuals, logic, and shipping speed.",
        blurb:
            "A mix of commerce, messaging, and utility products built with practical stacks and a hands-on full-stack workflow.",
        modulePrefix: "Module",
        sourceLabel: "Source",
        previewLabel: "Preview",
    },
    stack: {
        eyebrow: "Technology Matrix",
        title: "Tools across interface, backend, and deployment lanes.",
    },
    contact: {
        eyebrow: "Transmission",
        title: "Ready to build the next system.",
        resumeLabel: "Open Resume",
        linkedinLabel: "LinkedIn",
        preferredRolesTitle: "Preferred roles",
        preferredRolesText:
            "Frontend-heavy full stack work, product-focused engineering teams, and fast-moving builds where performance and maintainability matter.",
    },
    footer: "Coded with React, and tailwind.",
};

const information = { userData, portfolioContent };

export default information;

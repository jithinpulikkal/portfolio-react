import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaExternalLinkAlt, FaGithub, FaInstagram, FaLinkedinIn, FaMoon, FaSun } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import information from "./content/information";
import projects from "./content/projects";
import skills from "./content/skills";
import socials from "./content/socials";

const skillLabels = {
    html: "HTML",
    css: "CSS",
    bootstrap: "Bootstrap",
    js: "JavaScript",
    jquery: "jQuery",
    nodejs: "Node.js",
    express: "Express",
    react: "React",
    redux: "Redux",
    mongodb: "MongoDB",
    mysql: "MySQL",
    postgresql: "PostgreSQL",
    git: "Git",
    github: "GitHub",
    postman: "Postman",
    npm: "npm",
    vite: "Vite",
    tailwind: "Tailwind CSS",
    aws: "AWS",
    socket: "Socket.IO",
    "expo-go": "Expo",
};

const iconMap = {
    github: FaGithub,
    linkedin: FaLinkedinIn,
    instagram: FaInstagram,
    x: FaXTwitter,
};

const stackGroups = [
    {
        title: "Frontend",
        keys: ["react", "js", "html", "css", "tailwind", "bootstrap", "redux", "vite"],
    },
    {
        title: "Backend",
        keys: ["nodejs", "express", "mongodb", "postgresql", "mysql", "socket"],
    },
    {
        title: "Workflow",
        keys: ["git", "github", "postman", "npm", "aws", "jquery", "expo-go"],
    },
];

const socialLabels = {
    github: "GitHub",
    linkedin: "LinkedIn",
    instagram: "Instagram",
    x: "X",
};

const sectionLinks = [
    { id: "home", label: "Intro", index: "01" },
    { id: "about", label: "About", index: "02" },
    { id: "work", label: "Work", index: "03" },
    { id: "stack", label: "Stack", index: "04" },
    { id: "contact", label: "Contact", index: "05" },
];

const monoClass = "font-['IBM_Plex_Mono']";

const themes = {
    dark: {
        appBg: "bg-[#111111] text-[#f4efe6]",
        appOverlay:
            "bg-[radial-gradient(circle_at_top_left,rgba(255,122,61,0.16),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(244,239,230,0.08),transparent_20%),linear-gradient(180deg,#151312_0%,#111111_100%)]",
        border: "border-[rgba(244,239,230,0.12)]",
        panelBg: "bg-[rgba(24,24,24,0.92)]",
        cardBg: "bg-[rgba(255,255,255,0.02)]",
        softBg: "bg-[rgba(255,255,255,0.03)]",
        mutedText: "text-[#b7aca0]",
        strongText: "text-[#f4efe6]",
        subtleText: "text-[#8f8378]",
        accent: "text-[#ff7a3d]",
        accentBg: "bg-[#ff7a3d]",
        accentText: "text-[#111111]",
        buttonBg: "bg-[#f4efe6]",
        buttonText: "text-[#111111]",
        hoverBg: "hover:bg-[rgba(255,255,255,0.035)]",
        hoverBorder: "hover:border-[rgba(244,239,230,0.25)]",
        codeText: "text-[#f7cbb2]",
        previewBg:
            "bg-[radial-gradient(circle_at_top_left,rgba(255,122,61,0.28),transparent_35%),linear-gradient(135deg,#1d1a18_0%,#131313_100%)]",
        toggleBg: "bg-[rgba(24,24,24,0.84)]",
    },
    light: {
        appBg: "bg-[#efe7de] text-[#2f241c]",
        appOverlay:
            "bg-[radial-gradient(circle_at_top_left,rgba(255,122,61,0.18),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(135,101,74,0.12),transparent_20%),linear-gradient(180deg,#f8f2eb_0%,#ece1d5_100%)]",
        border: "border-[rgba(98,71,49,0.16)]",
        panelBg: "bg-[rgba(255,248,241,0.82)]",
        cardBg: "bg-[rgba(255,255,255,0.50)]",
        softBg: "bg-[rgba(255,255,255,0.62)]",
        mutedText: "text-[#716255]",
        strongText: "text-[#2f241c]",
        subtleText: "text-[#937e6c]",
        accent: "text-[#d7642c]",
        accentBg: "bg-[#d7642c]",
        accentText: "text-[#fff7f0]",
        buttonBg: "bg-[#2f241c]",
        buttonText: "text-[#fff7f0]",
        hoverBg: "hover:bg-[rgba(98,71,49,0.05)]",
        hoverBorder: "hover:border-[rgba(98,71,49,0.26)]",
        codeText: "text-[#b85e33]",
        previewBg:
            "bg-[radial-gradient(circle_at_top_left,rgba(255,122,61,0.20),transparent_35%),linear-gradient(135deg,#efe3d8_0%,#e3d3c3_100%)]",
        toggleBg: "bg-[rgba(255,248,241,0.88)]",
    },
};

function App() {
    const [themeName, setThemeName] = useState(() => {
        if (typeof window === "undefined") {
            return "dark";
        }

        return window.localStorage.getItem("theme") ?? "dark";
    });

    const { userData } = information;
    const currentYear = new Date().getFullYear();
    const theme = themes[themeName];
    const frameClass = `border ${theme.border} ${theme.panelBg} shadow-[0_30px_80px_rgba(0,0,0,0.16)]`;
    const mutedTextClass = theme.mutedText;
    const socialLinkClass = `inline-flex items-center gap-2 rounded-lg border ${theme.border} ${theme.cardBg} px-4 py-3 text-xs uppercase tracking-[0.18em] ${theme.mutedText} transition duration-200 ${theme.hoverBorder} ${theme.strongText.replace("text-", "hover:text-")}`;
    const tagClass = `rounded-full border ${theme.border} ${theme.softBg} px-3 py-1.5 text-xs ${theme.mutedText}`;

    useEffect(() => {
        window.localStorage.setItem("theme", themeName);
    }, [themeName]);

    const skillEntries = skills.map((skill) => {
        const key = skill.replace(/\.[^.]+$/, "");
        return {
            key,
            label: skillLabels[key] ?? key,
        };
    });

    const focusHighlights = ["performance", "reusability", "maintainability"];

    const getProjectInitials = (name) =>
        name
            .split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map((word) => word[0])
            .join("")
            .toUpperCase();

    return (
        <div className={`scrollbar-hidden relative min-h-screen overflow-x-hidden font-['Inter'] ${theme.appBg}`}>
            <div className={`pointer-events-none absolute inset-0 ${theme.appOverlay}`} />

            <div className="relative mx-auto min-h-screen w-[min(calc(100%-2rem),1320px)] pb-6 pt-4 md:pb-8 md:pt-5">
                <header className="fixed left-1/2 top-4 z-50 w-[min(calc(100%-2rem),1320px)] -translate-x-1/2">
                    <div className={`rounded-[1.5rem] border px-4 py-4 backdrop-blur-md md:px-5 ${theme.border} ${theme.panelBg}`}>
                    <div className="flex items-center justify-between gap-4">
                        <a href="#home" className="flex min-w-0 items-center gap-3">
                            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-base font-semibold ${theme.accentBg} ${theme.accentText}`}>
                                J
                            </div>
                            <div className="min-w-0">
                                <p className={`truncate text-sm font-semibold md:text-base ${theme.strongText}`}>{userData.name}</p>
                                <p className={`truncate text-xs md:text-sm ${mutedTextClass}`}>{userData.role}</p>
                            </div>
                        </a>

                        <div className="flex min-w-0 items-center justify-end gap-3">
                            <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary">
                                {sectionLinks.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className={`rounded-full border px-3 py-2 text-xs uppercase tracking-[0.18em] transition ${theme.border} ${theme.cardBg} ${theme.mutedText} ${theme.hoverBorder}`}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </nav>

                            <div className="hidden max-w-[50vw] overflow-x-auto scrollbar-hidden md:block lg:hidden">
                                <nav className="flex items-center gap-2 pr-1" aria-label="Primary">
                                    {sectionLinks.map((item) => (
                                        <a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className={`whitespace-nowrap rounded-full border px-3 py-2 text-xs uppercase tracking-[0.18em] transition ${theme.border} ${theme.cardBg} ${theme.mutedText} ${theme.hoverBorder}`}
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>

                            <button
                                type="button"
                                onClick={() => setThemeName((current) => (current === "dark" ? "light" : "dark"))}
                                className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm transition ${theme.border} ${theme.toggleBg} ${theme.strongText} ${theme.hoverBorder}`}
                                aria-label={`Switch to ${themeName === "dark" ? "light" : "dark"} mode`}
                                title={themeName === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                            >
                                {themeName === "dark" ? <FaSun className={theme.accent} /> : <FaMoon className={theme.accent} />}
                            </button>
                        </div>
                    </div>
                    </div>
                </header>

                <main className="mt-32 space-y-6">
                    <section id="home" className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_24rem]">
                        <div className={`${frameClass} rounded-[2rem] p-6 md:p-8 xl:p-10`}>
                            <div className={`${monoClass} flex flex-wrap items-center gap-3 text-xs tracking-[0.18em] ${theme.mutedText}`}>
                                <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 ${theme.border} ${theme.softBg}`}>
                                    <span className="h-2 w-2 rounded-full bg-[#4be07a] shadow-[0_0_12px_rgba(75,224,122,0.8)]" />
                                    Available now
                                </span>
                                <span>{userData.location}</span>
                                <span>{userData.experience}</span>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="mt-8"
                            >
                                <h1 className={`max-w-5xl text-[clamp(2.3rem,5.8vw,4.9rem)] font-semibold leading-[0.98] tracking-[-0.07em] ${theme.strongText}`}>
                                    Building clean,
                                    <br />
                                    scalable products for
                                    <br />
                                    <span className={`inline-block underline decoration-2 underline-offset-[10px] ${theme.accent}`}>
                                        web and mobile.
                                    </span>
                                </h1>

                                <p className={`mt-7 max-w-4xl text-[1rem] leading-[1.85] ${mutedTextClass}`}>
                                    Hi, I&apos;m {userData.firstName} - a full stack developer building end-to-end web
                                    applications across interfaces, APIs, and data layers. I care about{" "}
                                    {focusHighlights.map((item, index) => (
                                        <span key={item}>
                                            <span className={`rounded-md border px-2 py-1 ${theme.border} ${theme.softBg} ${theme.strongText}`}>
                                                {item}
                                            </span>
                                            {index < focusHighlights.length - 1 ? ", " : ""}
                                        </span>
                                    ))}
                                    .
                                </p>
                            </motion.div>
                        </div>

                        <div className="grid gap-6">
                            <div className={`${frameClass} rounded-[2rem] p-6`}>
                                <div className="flex items-center gap-4">
                                    <img src={userData.img} alt={userData.name} className="h-20 w-20 rounded-[1.5rem] object-cover" />
                                    <div>
                                        <p className={`${monoClass} text-xs uppercase tracking-[0.22em] ${theme.accent}`}>Profile</p>
                                        <h2 className={`mt-2 text-lg font-semibold ${theme.strongText}`}>{userData.name}</h2>
                                        <p className={`mt-1 text-sm ${mutedTextClass}`}>{userData.stack}</p>
                                    </div>
                                </div>

                                <div className="mt-6 flex flex-wrap justify-center gap-3">
                                    {socials.map((social) => {
                                        const socialKey = social.icon.replace(".svg", "");
                                        const Icon = iconMap[socialKey];

                                        if (!Icon) {
                                            return null;
                                        }

                                        return (
                                        <a
                                            key={social.url}
                                            href={social.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={socialLinkClass}
                                            aria-label={socialLabels[socialKey] ?? socialKey}
                                            title={socialLabels[socialKey] ?? socialKey}
                                        >
                                            <Icon className="text-sm" />
                                        </a>
                                    );
                                })}
                                </div>
                            </div>

                            <div className={`${frameClass} rounded-[2rem] p-5`}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className={`rounded-[1.5rem] border p-5 ${theme.border} ${theme.cardBg}`}>
                                        <p className={`text-[1.8rem] font-semibold leading-none ${theme.strongText}`}>{userData.experience}</p>
                                        <p className={`mt-3 text-[1rem] leading-none ${theme.mutedText}`}>Experience</p>
                                    </div>
                                    <div className={`rounded-[1.5rem] border p-5 ${theme.border} ${theme.cardBg}`}>
                                        <p className={`text-[1.8rem] font-semibold leading-none ${theme.strongText}`}>{projects.length}+</p>
                                        <p className={`mt-3 text-[1rem] leading-none ${theme.mutedText}`}>Projects</p>
                                    </div>
                                    <div className={`rounded-[1.5rem] border p-5 ${theme.border} ${theme.cardBg}`}>
                                        <p className={`text-[1.8rem] font-semibold leading-none ${theme.strongText}`}>{skillEntries.length}</p>
                                        <p className={`mt-3 text-[1rem] leading-none ${theme.mutedText}`}>Tools</p>
                                    </div>
                                    <div className={`rounded-[1.5rem] border p-5 ${theme.border} ${theme.cardBg}`}>
                                        <p className={`text-[1.8rem] font-semibold leading-tight ${theme.strongText}`}>{userData.specialty}</p>
                                        <p className={`mt-3 text-[1rem] leading-none ${theme.mutedText}`}>Primary focus</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.72fr)] xl:items-start">
                        <div className={`${frameClass} overflow-hidden rounded-[2rem]`}>
                            <div className={`flex items-center justify-between border-b px-5 py-4 ${theme.border}`}>
                                <div className="flex items-center gap-2">
                                    <span className="h-3 w-3 rounded-full bg-[#ff605c]" />
                                    <span className="h-3 w-3 rounded-full bg-[#ffbd44]" />
                                    <span className="h-3 w-3 rounded-full bg-[#00ca4e]" />
                                    <p className={`${monoClass} ml-4 text-sm ${theme.mutedText}`}>profile.js</p>
                                </div>
                                <p className={`${monoClass} text-sm ${theme.subtleText}`}>javascript</p>
                            </div>
                            <pre className={`${monoClass} scrollbar-hidden overflow-x-auto px-6 py-6 text-sm leading-8 ${theme.codeText}`}>
                                {`// Developer profile - ${currentYear}
const jithin = {
  role: "${userData.role}",
  location: "${userData.location}",
  focus: ${JSON.stringify(userData.focus)},
  stack: "MERN + React Native",
  available: true,
};`}
                            </pre>
                        </div>

                        <div className={`${frameClass} self-start rounded-[2rem] p-6`}>
                            <p className={`${monoClass} text-xs uppercase tracking-[0.24em] ${theme.accent}`}>Quick Summary</p>
                            <p className={`mt-5 text-base leading-8 ${theme.strongText}`}>{userData.description}</p>
                            <div className="mt-6 flex flex-wrap gap-3">
                                <span className={tagClass}>{userData.location}</span>
                                <span className={tagClass}>{userData.specialty}</span>
                            </div>
                            <a
                                href={userData.resumeUrl}
                                target="_blank"
                                rel="noreferrer"
                                className={`mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition hover:brightness-110 ${theme.buttonBg} ${theme.buttonText}`}
                            >
                                Open resume <FaArrowRight />
                            </a>
                        </div>
                    </section>

                    <section id="about" className={`${frameClass} rounded-[2rem] p-6 md:p-8 xl:p-10`}>
                        <p className={`${monoClass} text-xs uppercase tracking-[0.24em] ${theme.accent}`}>02 / ABOUT</p>

                        <div className="mt-6 grid gap-8 xl:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] xl:items-start">
                            <div>
                                <h2 className={`max-w-[7ch] text-[clamp(2.3rem,5.8vw,4.4rem)] font-semibold leading-[0.98] tracking-[-0.06em] ${theme.strongText}`}>
                                    A portfolio that reads like an engineer&apos;s notebook.
                                </h2>

                                <p className={`mt-10 max-w-4xl text-[1rem] leading-[1.85] ${mutedTextClass}`}>
                                    {userData.longBio}
                                </p>
                            </div>

                            <div className={`rounded-[1.9rem] border p-6 md:p-8 ${theme.border} ${theme.cardBg}`}>
                                <p className={`${monoClass} text-xs uppercase tracking-[0.24em] ${theme.accent}`}>What I care about</p>

                                <div className={`mt-6 border-t ${theme.border}`}>
                                    {userData.focus.map((item, index) => (
                                        <div
                                            key={item}
                                            className={`grid grid-cols-[1rem_1fr] gap-5 py-6 ${index < userData.focus.length - 1 ? `border-b ${theme.border}` : ""}`}
                                        >
                                            <span className={`${monoClass} text-lg leading-none ${theme.accent}`}>/</span>
                                            <p className={`text-[1rem] leading-8 ${theme.strongText}`}>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="work" className={`${frameClass} rounded-[2rem] p-6 md:p-8 xl:p-10`}>
                        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                            <div>
                                <p className={`${monoClass} text-xs uppercase tracking-[0.24em] ${theme.accent}`}>03 · Work</p>
                                <h2 className={`mt-4 max-w-3xl text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.04] tracking-[-0.05em] ${theme.strongText}`}>
                                    Selected projects shaped with product thinking.
                                </h2>
                            </div>
                        </div>

                        <div className="space-y-5">
                            {projects.map((project, index) => (
                                <motion.article
                                    key={project.name}
                                    className={`rounded-[1.6rem] border p-5 md:p-6 ${theme.border} ${theme.cardBg}`}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.45, delay: index * 0.06 }}
                                >
                                    <div className={`${monoClass} mb-4 flex flex-col gap-2 text-sm ${theme.mutedText} md:flex-row md:items-center md:justify-between`}>
                                        <p>{String(index + 1).padStart(2, "0")}</p>
                                        <span>{project.stack.join(" / ")}</span>
                                    </div>

                                    <div className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] xl:items-center">
                                        <div>
                                            <h3 className={`text-[clamp(1.3rem,2.2vw,1.9rem)] font-semibold leading-tight tracking-[-0.04em] ${theme.strongText}`}>
                                                {project.name}
                                            </h3>
                                            <p className={`mt-4 text-sm leading-7 ${mutedTextClass}`}>{project.description}</p>
                                            <div className="mt-6 flex flex-wrap gap-3">
                                                {project.stack.map((item) => (
                                                    <span key={`${project.name}-${item}`} className={tagClass}>
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="mt-6 flex flex-wrap gap-3">
                                                {project.sourceCode ? (
                                                    <a href={project.sourceCode} target="_blank" rel="noreferrer" className={socialLinkClass}>
                                                        <FaGithub className="text-sm" />
                                                        <span>Source</span>
                                                    </a>
                                                ) : null}
                                                {project.preview ? (
                                                    <a href={project.preview} target="_blank" rel="noreferrer" className={socialLinkClass}>
                                                        <FaExternalLinkAlt className="text-sm" />
                                                        <span>{project.previewLabel ?? "Preview"}</span>
                                                    </a>
                                                ) : null}
                                            </div>
                                        </div>

                                        <div>
                                            {project.img ? (
                                                <img
                                                    src={project.img}
                                                    alt={project.name}
                                                    className={`aspect-[16/10] w-full rounded-[1.3rem] border object-cover ${theme.border}`}
                                                />
                                            ) : (
                                                <div className={`grid aspect-[16/10] place-items-center rounded-[1.3rem] border ${theme.border} ${theme.previewBg}`}>
                                                    <span className={`text-5xl font-semibold tracking-[0.08em] ${theme.strongText}`}>
                                                        {getProjectInitials(project.name)}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </section>

                    <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_22rem]">
                        <section id="stack" className={`${frameClass} rounded-[2rem] p-6 md:p-8 xl:p-10`}>
                            <div className="mb-8">
                                <p className={`${monoClass} text-xs uppercase tracking-[0.24em] ${theme.accent}`}>04 · Stack</p>
                                <h2 className={`mt-4 max-w-3xl text-[clamp(1.8rem,4vw,2.8rem)] font-semibold leading-[1.04] tracking-[-0.05em] ${theme.strongText}`}>
                                    Tools I reach for across frontend, backend, and delivery.
                                </h2>
                            </div>

                            <div className="grid gap-4 xl:grid-cols-3">
                                {stackGroups.map((group) => (
                                    <article key={group.title} className={`rounded-[1.5rem] border p-6 ${theme.border} ${theme.cardBg}`}>
                                        <p className={`${monoClass} text-xs uppercase tracking-[0.24em] ${theme.mutedText}`}>{group.title}</p>
                                        <div className="mt-5 flex flex-wrap gap-3">
                                            {group.keys.map((key) => {
                                                const skill = skillEntries.find((entry) => entry.key === key);
                                                return skill ? (
                                                    <span key={key} className={tagClass}>
                                                        {skill.label}
                                                    </span>
                                                ) : null;
                                            })}
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </section>

                        <section id="contact" className={`${frameClass} rounded-[2rem] p-6 md:p-8`}>
                            <p className={`${monoClass} text-xs uppercase tracking-[0.24em] ${theme.accent}`}>05 · Contact</p>
                            <h2 className={`mt-4 text-[clamp(1.7rem,3.5vw,2.4rem)] font-semibold leading-[1.08] tracking-[-0.05em] ${theme.strongText}`}>
                                Let&apos;s build something sharp, reliable, and fast.
                            </h2>
                            <p className={`mt-6 text-sm leading-7 ${mutedTextClass}`}>
                                I&apos;m open to full stack and frontend-focused opportunities where product quality,
                                performance, and maintainability matter.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <a
                                    href={userData.resumeUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition hover:brightness-110 ${theme.buttonBg} ${theme.buttonText}`}
                                >
                                    Open resume <FaArrowRight />
                                </a>
                                <a href={socials[1]?.url} target="_blank" rel="noreferrer" className={socialLinkClass}>
                                    <FaLinkedinIn className="text-sm" />
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        </section>
                    </section>

                    <footer className={`${frameClass} rounded-[1.5rem] px-6 py-5`}>
                        <p className={`${monoClass} text-xs tracking-[0.16em] ${theme.mutedText}`}>
                            © {currentYear} {userData.name}. Built with React and a cleaner editorial theme.
                        </p>
                    </footer>
                </main>
            </div>
        </div>
    );
}

export default App;

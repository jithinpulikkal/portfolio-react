import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    FaArrowRight,
    FaArrowUpRightFromSquare,
    FaGithub,
    FaLinkedinIn,
    FaMicrochip,
    FaMoon,
    FaSun,
} from "react-icons/fa6";
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
    tailwind: "Tailwind",
    aws: "AWS",
    socket: "Socket.IO",
    "expo-go": "Expo",
};

const iconMap = {
    github: FaGithub,
    linkedin: FaLinkedinIn,
};

const monoClass = "ui-mono";
const displayClass = "ui-display";

const themes = {
    dark: {
        vars: {
            "--app-bg": "#02070d",
            "--text-main": "#ecfeff",
            "--text-soft": "#9fc2ca",
            "--text-muted": "#78bac8",
            "--text-dim": "#6eaab6",
            "--text-subtle": "#5d8b95",
            "--accent": "#7df9ff",
            "--accent-soft": "#7abcc8",
            "--accent-dim": "#73b6c3",
            "--accent-strong": "#8ef5c5",
            "--panel-bg": "linear-gradient(180deg,rgba(6,16,24,0.9),rgba(3,10,18,0.88))",
            "--surface-bg": "rgba(6,18,27,0.74)",
            "--surface-soft": "rgba(8,23,33,0.72)",
            "--surface-faint": "rgba(7,20,29,0.62)",
            "--surface-elevated": "rgba(8,23,33,0.72)",
            "--surface-strong": "linear-gradient(180deg,rgba(8,23,33,0.72),rgba(6,18,27,0.62))",
            "--project-bg": "linear-gradient(180deg,rgba(6,18,27,0.92),rgba(4,12,19,0.88))",
            "--project-fallback": "radial-gradient(circle at 30% 30%,rgba(125,249,255,0.18),rgba(3,13,20,0.96))",
            "--chip-bg": "rgba(8,26,36,0.82)",
            "--utility-bg": "rgba(6,20,30,0.8)",
            "--utility-hover": "rgba(10,36,49,0.95)",
            "--border-color": "rgba(125,249,255,0.18)",
            "--border-strong": "rgba(125,249,255,0.34)",
            "--border-soft": "rgba(125,249,255,0.12)",
            "--divider-color": "rgba(125,249,255,0.14)",
            "--frame-shadow":
                "0 0 0 1px rgba(125,249,255,0.06), 0 20px 80px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)",
            "--icon-chip-bg": "radial-gradient(circle at 30% 30%,rgba(125,249,255,0.35),rgba(4,16,23,0.95))",
            "--hero-glow": "0 0 24px rgba(125,249,255,0.55)",
            "--success-bg": "rgba(5,36,28,0.72)",
            "--success-border": "rgba(110,255,198,0.18)",
            "--success-text": "#8ef5c5",
            "--success-dot": "#69ffb5",
            "--terminal-text": "#7df9ff",
            "--cta-bg": "linear-gradient(135deg,rgba(125,249,255,0.16),rgba(125,249,255,0.28))",
            "--cta-bg-hover": "linear-gradient(135deg,rgba(125,249,255,0.22),rgba(125,249,255,0.34))",
        },
    },
    light: {
        vars: {
            "--app-bg": "#f4efff",
            "--text-main": "#211b34",
            "--text-soft": "#443a5d",
            "--text-muted": "#5d5180",
            "--text-dim": "#756996",
            "--text-subtle": "#8d83a7",
            "--accent": "#8A8AFF",
            "--accent-soft": "#8671f7",
            "--accent-dim": "#7f73b8",
            "--accent-strong": "#5f49d8",
            "--panel-bg": "linear-gradient(180deg,rgba(255,252,255,0.92),rgba(235,227,252,0.9))",
            "--surface-bg": "rgba(250,247,255,0.82)",
            "--surface-soft": "rgba(235,228,251,0.86)",
            "--surface-faint": "rgba(244,239,255,0.76)",
            "--surface-elevated": "rgba(255,252,255,0.8)",
            "--surface-strong": "linear-gradient(180deg,rgba(255,252,255,0.86),rgba(229,219,251,0.82))",
            "--project-bg": "linear-gradient(180deg,rgba(255,252,255,0.9),rgba(236,228,255,0.86))",
            "--project-fallback": "radial-gradient(circle at 30% 30%,rgba(109,93,252,0.18),rgba(239,232,255,0.88))",
            "--chip-bg": "rgba(235,228,251,0.84)",
            "--utility-bg": "rgba(246,241,255,0.74)",
            "--utility-hover": "rgba(225,215,251,0.88)",
            "--border-color": "rgba(109,93,252,0.2)",
            "--border-strong": "rgba(109,93,252,0.36)",
            "--border-soft": "rgba(109,93,252,0.12)",
            "--divider-color": "rgba(109,93,252,0.14)",
            "--frame-shadow": "0 24px 70px rgba(39,31,70,0.18), inset 0 1px 0 rgba(255,255,255,0.45)",
            "--icon-chip-bg": "radial-gradient(circle at 30% 30%,rgba(150,124,255,0.48),rgba(37,32,55,0.92))",
            "--hero-glow": "0 0 22px rgba(109,93,252,0.4)",
            "--success-bg": "rgba(226,219,255,0.78)",
            "--success-border": "rgba(109,93,252,0.24)",
            "--success-text": "#4d3ec9",
            "--success-dot": "#8671f7",
            "--terminal-text": "#6d5dfc",
            "--cta-bg": "linear-gradient(135deg,rgba(109,93,252,0.16),rgba(58,52,160,0.2))",
            "--cta-bg-hover": "linear-gradient(135deg,rgba(109,93,252,0.24),rgba(58,52,160,0.28))",
        },
    },
};

const frameClass = "panel-frame";

const tagClass = "tag-chip";

const utilityLinkClass = "utility-link";

const getProjectInitials = (name) =>
    name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0])
        .join("")
        .toUpperCase();

function App() {
    const [themeName, setThemeName] = useState(() => {
        if (typeof window === "undefined") {
            return "dark";
        }

        return window.localStorage.getItem("portfolio-theme") ?? "dark";
    });
    useEffect(() => {
        window.localStorage.setItem("portfolio-theme", themeName);
        document.documentElement.setAttribute("data-theme", themeName);
    }, [themeName]);

    const { userData, portfolioContent } = information;
    const { sectionLinks, stackGroups, metrics, statLabels, focusHighlights, hero, about, work, stack, contact, footer } =
        portfolioContent;
    const currentYear = new Date().getFullYear();
    const theme = themes[themeName];
    const skillEntries = skills.map((skill) => {
        const key = skill.replace(/\.[^.]+$/, "");
        return {
            key,
            label: skillLabels[key] ?? key,
        };
    });

    return (
        <div
            data-theme={themeName}
            style={theme.vars}
            className="scrollbar-hidden relative min-h-screen overflow-x-hidden bg-app text-main transition-colors duration-300"
        >
            <div className="hud-grid pointer-events-none absolute inset-0 opacity-70" />
            <div className="hud-radial pointer-events-none absolute inset-0" />
            <div className="hud-scanlines pointer-events-none absolute inset-0 opacity-20" />

            <div className="relative mx-auto w-full max-w-7xl px-3 pb-8 pt-4 md:px-4 md:pb-10">
                <header className="sticky top-4 z-50">
                    <div className={`${frameClass} px-4 py-4 md:px-6`}>
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                            <a href="#home" className="flex min-w-0 items-center gap-4">
                                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-theme-strong icon-chip text-accent">
                                    <FaMicrochip className="text-xl" />
                                </div>
                                <div className="min-w-0">
                                    <p
                                        className={`${displayClass} truncate text-xl font-semibold uppercase tracking-widest text-main`}
                                    >
                                        {userData.firstName}
                                    </p>
                                    <p className={`${monoClass} truncate text-xs uppercase tracking-widest text-muted`}>
                                        {userData.role}
                                    </p>
                                </div>
                            </a>

                            <div className="flex flex-wrap items-center gap-2" aria-label="Primary">
                                {sectionLinks.map((item, index) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className={`${monoClass} rounded-full border border-theme bg-utility px-4 py-2 text-xs uppercase tracking-widest text-muted transition duration-300 hover:border-theme-strong hover:text-main`}
                                    >
                                        {String(index + 1).padStart(2, "0")} {item.label}
                                    </a>
                                ))}
                                <button
                                    type="button"
                                    onClick={() => setThemeName((current) => (current === "dark" ? "light" : "dark"))}
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-full  bg-utility text-main transition duration-300 "
                                    aria-label={`Switch to ${themeName === "dark" ? "light" : "dark"} mode`}
                                >
                                    {themeName === "dark" ? (
                                        <FaSun className="text-sm text-accent p-0" />
                                    ) : (
                                        <FaMoon className="text-sm text-main" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="space-y-6 pt-6">
                    <section id="home" className="grid gap-6 xl:grid-cols-3 xl:items-start">
                        <div className={`${frameClass} overflow-hidden p-6 md:p-8 xl:col-span-2 xl:p-10`}>
                            <div
                                className={`${monoClass} flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-accent-soft`}
                            >
                                <span className="inline-flex items-center gap-2 rounded-full status-pill px-3 py-2 text-success">
                                    <span className="h-2 w-2 rounded-full status-dot" />
                                    {hero.availability}
                                </span>
                                <span>{userData.location}</span>
                                <span>
                                    {userData.experience} {hero.experienceSuffix}
                                </span>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.65 }}
                                className="relative mt-6"
                            >
                                <div className="absolute -left-6 top-0 hidden h-full w-px hero-rail md:block" />
                                <p className={`${monoClass} text-xs uppercase tracking-widest text-muted`}>
                                    {hero.eyebrow}
                                </p>
                                <h1
                                    data-text={hero.title.join("\n")}
                                    className={`${displayClass} glitch-text mt-5 max-w-5xl text-5xl md:text-7xl xl:text-8xl font-semibold uppercase leading-none tracking-wide text-main`}
                                >
                                    {hero.title[0]}
                                    <br />
                                    <span className="text-accent hero-accent">{hero.title[1]}</span>
                                    <br />
                                    {hero.title[2]}
                                </h1>

                                <p className="mt-6 max-w-4xl text-lg leading-9 text-soft md:text-xl">{hero.intro}</p>
                            </motion.div>

                            <div className="mt-8 flex flex-wrap gap-3">
                                {focusHighlights.map((item) => (
                                    <span key={item} className={tagClass}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="hero-sidebar">
                            <div className={`${frameClass} p-6`}>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={userData.img}
                                        alt={userData.name}
                                        className="h-24 w-24 rounded-2xl border border-theme-strong object-cover"
                                    />
                                    <div>
                                        <p className={`${monoClass} text-xs uppercase tracking-widest text-muted`}>
                                            Identity
                                        </p>
                                        <h2
                                            className={`${displayClass} mt-2 text-2xl font-semibold uppercase tracking-wider text-main`}
                                        >
                                            {userData.firstName}
                                            <span className="ml-2 text-accent hero-accent">{userData.initial}</span>
                                        </h2>
                                        <p className="mt-2 text-sm leading-6 text-soft">{userData.stack}</p>
                                    </div>
                                </div>

                                <div className="mt-6 grid grid-cols-2 gap-3">
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
                                                className="inline-flex items-center justify-center rounded-2xl border border-theme bg-utility px-4 py-1.5 text-main transition duration-300 hover:border-theme-strong"
                                            >
                                                <Icon className="text-lg" />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className={`${frameClass} p-5`}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="rounded-2xl border border-theme bg-surface p-4">
                                        <p className={`${displayClass} text-xl font-semibold uppercase text-main`}>
                                            {userData.experience}
                                        </p>
                                        <p className="mt-2 text-sm text-soft">{statLabels.experience}</p>
                                    </div>
                                    <div className="rounded-2xl border border-theme bg-surface p-4">
                                        <p className={`${displayClass} text-xl font-semibold uppercase text-main`}>
                                            {projects.length}+
                                        </p>
                                        <p className="mt-2 text-sm text-soft">{statLabels.projects}</p>
                                    </div>
                                    <div className="rounded-2xl border border-theme bg-surface p-4">
                                        <p className={`${displayClass} text-xl font-semibold uppercase text-main`}>
                                            {skillEntries.length}
                                        </p>
                                        <p className="mt-2 text-sm text-soft">{statLabels.tools}</p>
                                    </div>
                                    <div className="rounded-2xl border border-theme bg-surface p-4">
                                        <p
                                            className={`${displayClass} text-xl font-semibold uppercase leading-tight text-main`}
                                        >
                                            {userData.specialty}
                                        </p>
                                        <p className="mt-2 text-sm text-soft">{statLabels.primaryRole}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-metrics">
                                {metrics.map((metric) => (
                                    <div
                                        key={metric.label}
                                        className="metric-card rounded-2xl border border-theme-soft bg-surface-elevated p-4"
                                    >
                                        <p className={`${monoClass} text-xs uppercase tracking-widest text-dim`}>
                                            {metric.label}
                                        </p>
                                        <p
                                            className={`${displayClass} mt-3 text-3xl font-semibold uppercase tracking-wider text-main`}
                                        >
                                            {metric.value}
                                        </p>
                                        <p className="mt-2 text-sm text-soft">{metric.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="about" className={`${frameClass} p-6 md:p-8 xl:p-10`}>
                        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
                            <div>
                                <p className={`${monoClass} text-xs uppercase tracking-widest text-muted`}>
                                    {about.eyebrow}
                                </p>
                                <h2
                                    className={`${displayClass} mt-4 text-3xl md:text-4xl font-semibold uppercase leading-tight tracking-wide text-main`}
                                >
                                    {about.title[0]}
                                    <br />
                                    {about.title[1]}
                                </h2>
                                <p className="mt-5 text-sm leading-7 text-soft">{userData.longBio}</p>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                {userData.focus.map((item, index) => (
                                    <div key={item} className="rounded-2xl border border-theme bg-surface p-5">
                                        <span className={`${monoClass} text-xs uppercase tracking-widest text-accent`}>
                                            0{index + 1}
                                        </span>
                                        <p className="mt-4 text-sm leading-6 text-main">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="work" className={`${frameClass} p-6 md:p-8 xl:p-10`}>
                        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                            <div>
                                <p className={`${monoClass} text-xs uppercase tracking-widest text-muted`}>
                                    {work.eyebrow}
                                </p>
                                <h2
                                    className={`${displayClass} mt-4 max-w-4xl text-4xl md:text-5xl font-semibold uppercase leading-tight tracking-wider text-main`}
                                >
                                    {work.title}
                                </h2>
                            </div>
                            <p className="max-w-md text-sm leading-7 text-soft">{work.blurb}</p>
                        </div>

                        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
                            {projects.map((project, index) => (
                                <motion.article
                                    key={project.name}
                                    className="project-card flex h-full flex-col overflow-hidden rounded-3xl"
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.45, delay: index * 0.06 }}
                                >
                                    <div
                                        className={`${monoClass} flex flex-col gap-2 border-b border-divider px-5 py-4 text-xs uppercase tracking-widest text-muted sm:flex-row sm:items-center sm:justify-between`}
                                    >
                                        <span>
                                            {work.modulePrefix} {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <span>{project.stack.join(" / ")}</span>
                                    </div>

                                    {project.img ? (
                                        <img
                                            src={project.img}
                                            alt={project.name}
                                            className="aspect-video w-full border-b border-theme object-cover"
                                        />
                                    ) : (
                                        <div className="grid aspect-video place-items-center border-b border-theme project-fallback">
                                            <span
                                                className={`${displayClass} text-6xl font-semibold uppercase tracking-widest text-main`}
                                            >
                                                {getProjectInitials(project.name)}
                                            </span>
                                        </div>
                                    )}

                                    <div className="flex flex-1 flex-col p-5 md:p-6">
                                        <div className="flex-1">
                                            <h3
                                                className={`${displayClass} text-2xl md:text-3xl font-semibold uppercase tracking-wide text-main`}
                                            >
                                                {project.name}
                                            </h3>
                                            <p className="mt-4 text-sm leading-7 text-soft">{project.description}</p>

                                            <div className="mt-6 flex flex-wrap gap-3">
                                                {project.stack.map((item) => (
                                                    <span key={`${project.name}-${item}`} className={tagClass}>
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-6 flex flex-wrap gap-3">
                                            {project.sourceCode ? (
                                                <a
                                                    href={project.sourceCode}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className={utilityLinkClass}
                                                >
                                                    <FaGithub className="text-sm" />
                                                    <span>{work.sourceLabel}</span>
                                                </a>
                                            ) : null}
                                            {project.preview ? (
                                                <a
                                                    href={project.preview}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className={utilityLinkClass}
                                                >
                                                    <FaArrowUpRightFromSquare className="text-sm" />
                                                    <span>{project.previewLabel ?? work.previewLabel}</span>
                                                </a>
                                            ) : null}
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </section>

                    <section className="grid gap-6 xl:grid-cols-3">
                        <section id="stack" className={`${frameClass} p-6 md:p-8 xl:col-span-2 xl:p-10`}>
                            <p className={`${monoClass} text-xs uppercase tracking-widest text-muted`}>{stack.eyebrow}</p>
                            <h2
                                className={`${displayClass} mt-4 max-w-3xl text-4xl md:text-5xl font-semibold uppercase leading-tight tracking-wider text-main`}
                            >
                                {stack.title}
                            </h2>

                            <div className="mt-8 grid gap-4 xl:grid-cols-3">
                                {stackGroups.map((group) => (
                                    <article key={group.title} className="rounded-2xl border border-theme bg-surface p-6">
                                        <p className={`${monoClass} text-xs uppercase tracking-widest text-muted`}>
                                            {group.title}
                                        </p>
                                        <p className="mt-4 text-sm leading-7 text-soft">{group.blurb}</p>
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

                        <section id="contact" className={`${frameClass} p-6 md:p-8`}>
                            <p className={`${monoClass} text-xs uppercase tracking-widest text-muted`}>{contact.eyebrow}</p>
                            <h2
                                className={`${displayClass} mt-4 text-3xl md:text-4xl font-semibold uppercase leading-tight tracking-wider text-main`}
                            >
                                {contact.title}
                            </h2>
                            <p className="mt-6 text-sm leading-7 text-soft">{userData.description}</p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <a href={userData.resumeUrl} target="_blank" rel="noreferrer" className="cta-link">
                                    {contact.resumeLabel} <FaArrowRight />
                                </a>
                                <a href={socials[1]?.url} target="_blank" rel="noreferrer" className={utilityLinkClass}>
                                    <FaLinkedinIn className="text-sm" />
                                    <span>{contact.linkedinLabel}</span>
                                </a>
                            </div>

                            <div className="mt-8 rounded-2xl border border-theme bg-surface p-4">
                                <p className={`${monoClass} text-xs uppercase tracking-widest text-dim`}>
                                    {contact.preferredRolesTitle}
                                </p>
                                <p className="mt-3 text-sm leading-7 text-main">{contact.preferredRolesText}</p>
                            </div>
                        </section>
                    </section>

                    <footer className={`${frameClass} px-6 py-5`}>
                        <p className={`${monoClass} text-center text-xs uppercase tracking-widest text-dim`}>
                            © {currentYear} {userData.name}. {footer}
                        </p>
                    </footer>
                </main>
            </div>
        </div>
    );
}

export default App;

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    FaArrowRight,
    FaArrowUpRightFromSquare,
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
    FaMicrochip,
    FaMoon,
    FaSun,
    FaXTwitter,
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
    instagram: FaInstagram,
    x: FaXTwitter,
};

const monoClass = "font-['IBM_Plex_Mono']";
const displayClass = "font-['Chakra_Petch']";

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
            "--app-bg": "#eef6fb",
            "--text-main": "#09202d",
            "--text-soft": "#325868",
            "--text-muted": "#477489",
            "--text-dim": "#5a8092",
            "--text-subtle": "#6f8e9f",
            "--accent": "#41d5e8",
            "--accent-soft": "#4f88a4",
            "--accent-dim": "#5d8ba0",
            "--accent-strong": "#237f65",
            "--panel-bg": "linear-gradient(180deg,rgba(255,255,255,0.86),rgba(230,242,248,0.94))",
            "--surface-bg": "rgba(255,255,255,0.72)",
            "--surface-soft": "rgba(236,247,252,0.92)",
            "--surface-faint": "rgba(240,249,253,0.84)",
            "--surface-elevated": "rgba(221,236,244,0.95)",
            "--surface-strong": "linear-gradient(180deg,rgba(231,244,249,0.98),rgba(218,235,243,0.94))",
            "--project-bg": "linear-gradient(180deg,rgba(228,242,248,0.98),rgba(215,233,241,0.96))",
            "--project-fallback": "radial-gradient(circle at 30% 30%,rgba(65,213,232,0.18),rgba(214,234,242,0.96))",
            "--chip-bg": "rgba(231,245,251,0.92)",
            "--utility-bg": "rgba(236,247,252,0.96)",
            "--utility-hover": "rgba(220,239,248,0.98)",
            "--border-color": "rgba(53,132,163,0.2)",
            "--border-strong": "rgba(53,132,163,0.32)",
            "--border-soft": "rgba(53,132,163,0.14)",
            "--divider-color": "rgba(53,132,163,0.16)",
            "--frame-shadow":
                "0 0 0 1px rgba(53,132,163,0.06), 0 24px 60px rgba(55,104,128,0.12), inset 0 1px 0 rgba(255,255,255,0.7)",
            "--icon-chip-bg": "radial-gradient(circle at 30% 30%,rgba(125,249,255,0.42),rgba(202,242,252,0.96))",
            "--hero-glow": "0 0 16px rgba(125,249,255,0.32)",
            "--success-bg": "rgba(227,247,239,0.98)",
            "--success-border": "rgba(35,127,101,0.18)",
            "--success-text": "#237f65",
            "--success-dot": "#33c38a",
            "--terminal-text": "#1d9db6",
            "--cta-bg": "linear-gradient(135deg,rgba(65,213,232,0.14),rgba(65,213,232,0.24))",
            "--cta-bg-hover": "linear-gradient(135deg,rgba(65,213,232,0.22),rgba(65,213,232,0.3))",
        },
    },
};

const frameClass =
    "rounded-[1.8rem] border border-[color:var(--border-color)] bg-[image:var(--panel-bg)] shadow-[var(--frame-shadow)] backdrop-blur-xl";

const tagClass =
    "rounded-full border border-[color:var(--border-color)] bg-[color:var(--chip-bg)] px-3 py-1.5 text-[0.72rem] uppercase tracking-[0.18em] text-[color:var(--text-muted)]";

const utilityLinkClass =
    "inline-flex items-center gap-2 rounded-full border border-[color:var(--border-color)] bg-[color:var(--utility-bg)] px-4 py-2.5 text-xs uppercase tracking-[0.2em] text-[color:var(--text-main)] transition duration-300 hover:border-[color:var(--border-strong)] hover:bg-[color:var(--utility-hover)]";

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
    const [clock, setClock] = useState(() =>
        new Intl.DateTimeFormat("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
            timeZone: "Asia/Kolkata",
        }).format(new Date()),
    );
    const [calendarDate, setCalendarDate] = useState(() =>
        new Intl.DateTimeFormat("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            timeZone: "Asia/Kolkata",
        }).format(new Date()),
    );

    useEffect(() => {
        window.localStorage.setItem("portfolio-theme", themeName);
        document.documentElement.setAttribute("data-theme", themeName);
    }, [themeName]);

    useEffect(() => {
        const timeFormatter = new Intl.DateTimeFormat("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
            timeZone: "Asia/Kolkata",
        });
        const dateFormatter = new Intl.DateTimeFormat("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            timeZone: "Asia/Kolkata",
        });

        const updateClock = () => {
            const now = new Date();
            setClock(timeFormatter.format(now));
            setCalendarDate(dateFormatter.format(now));
        };

        updateClock();

        const intervalId = window.setInterval(updateClock, 1000);

        return () => window.clearInterval(intervalId);
    }, []);

    const { userData, portfolioContent } = information;
    const {
        sectionLinks,
        stackGroups,
        metrics,
        statLabels,
        focusHighlights,
        heroReadouts,
        clockDetails,
        hero,
        supportModules,
        clockPanel,
        about,
        work,
        stack,
        contact,
        footer,
    } = portfolioContent;
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
            className="scrollbar-hidden relative min-h-screen overflow-x-hidden bg-[color:var(--app-bg)] text-[color:var(--text-main)] transition-colors duration-300"
        >
            <div className="hud-grid pointer-events-none absolute inset-0 opacity-70" />
            <div className="hud-radial pointer-events-none absolute inset-0" />
            <div className="hud-scanlines pointer-events-none absolute inset-0 opacity-20" />

            <div className="relative mx-auto w-[min(calc(100%-1.5rem),1380px)] pb-8 pt-4 md:w-[min(calc(100%-2rem),1380px)] md:pb-10">
                <header className="sticky top-4 z-50">
                    <div className={`${frameClass} px-4 py-4 md:px-6`}>
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                            <a href="#home" className="flex min-w-0 items-center gap-4">
                                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.1rem] border border-[color:var(--border-strong)] bg-[image:var(--icon-chip-bg)] text-[color:var(--accent)] shadow-[0_0_24px_rgba(125,249,255,0.18)]">
                                    <FaMicrochip className="text-xl" />
                                </div>
                                <div className="min-w-0">
                                    <p
                                        className={`${displayClass} truncate text-xl font-semibold uppercase tracking-[0.16em] text-[color:var(--text-main)]`}
                                    >
                                        {userData.firstName}
                                    </p>
                                    <p
                                        className={`${monoClass} truncate text-xs uppercase tracking-[0.32em] text-[color:var(--text-muted)]`}
                                    >
                                        {userData.role}
                                    </p>
                                </div>
                            </a>

                            <div className="flex flex-wrap items-center gap-2" aria-label="Primary">
                                {sectionLinks.map((item, index) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className={`${monoClass} rounded-full border border-[color:var(--border-color)] bg-[color:var(--utility-bg)] px-4 py-2 text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--text-muted)] transition duration-300 hover:border-[color:var(--border-strong)] hover:text-[color:var(--text-main)]`}
                                    >
                                        {String(index + 1).padStart(2, "0")} {item.label}
                                    </a>
                                ))}
                                <button
                                    type="button"
                                    onClick={() => setThemeName((current) => (current === "dark" ? "light" : "dark"))}
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border-color)] bg-[color:var(--utility-bg)] text-[color:var(--text-main)] transition duration-300 hover:border-[color:var(--border-strong)] hover:bg-[color:var(--utility-hover)]"
                                    aria-label={`Switch to ${themeName === "dark" ? "light" : "dark"} mode`}
                                >
                                    {themeName === "dark" ? (
                                        <FaSun className="text-sm text-[color:var(--accent)]" />
                                    ) : (
                                        <FaMoon className="text-sm text-[color:var(--text-main)]" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="space-y-6 pt-6">
                    <section id="home" className="grid gap-6 xl:grid-cols-[minmax(0,1.28fr)_24rem] xl:items-start">
                        <div className={`${frameClass} overflow-hidden p-6 md:p-8 xl:p-10`}>
                            <div
                                className={`${monoClass} flex flex-wrap items-center gap-3 text-[0.72rem] uppercase tracking-[0.24em] text-[color:var(--accent-soft)]`}
                            >
                                <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--success-border)] bg-[color:var(--success-bg)] px-3 py-2 text-[color:var(--success-text)]">
                                    <span className="h-2 w-2 rounded-full bg-[color:var(--success-dot)] shadow-[0_0_14px_rgba(105,255,181,0.4)]" />
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
                                <div className="absolute -left-6 top-0 hidden h-full w-px bg-[linear-gradient(180deg,transparent,var(--accent),transparent)] md:block" />
                                <p
                                    className={`${monoClass} text-xs uppercase tracking-[0.4em] text-[color:var(--text-muted)]`}
                                >
                                    {hero.eyebrow}
                                </p>
                                <h1
                                    className={`${displayClass} mt-5 max-w-5xl text-[clamp(3.2rem,7.6vw,6.6rem)] font-semibold uppercase leading-[0.85] tracking-[0.03em] text-[color:var(--text-main)]`}
                                >
                                    {hero.title[0]}
                                    <br />
                                    <span className="text-[color:var(--accent)] [text-shadow:var(--hero-glow)]">
                                        {hero.title[1]}
                                    </span>
                                    <br />
                                    {hero.title[2]}
                                </h1>

                                <p className="mt-6 max-w-4xl text-[1.08rem] leading-9 text-[color:var(--text-soft)] md:text-[1.18rem]">
                                    {hero.intro}
                                </p>
                            </motion.div>

                            <div className="mt-8 flex flex-wrap gap-3">
                                {focusHighlights.map((item) => (
                                    <span key={item} className={tagClass}>
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-10 grid gap-4 md:grid-cols-3">
                                {metrics.map((metric) => (
                                    <div
                                        key={metric.label}
                                        className="rounded-[1.4rem] border border-[color:var(--border-soft)] bg-[color:var(--surface-elevated)] p-4"
                                    >
                                        <p
                                            className={`${monoClass} text-[0.7rem] uppercase tracking-[0.28em] text-[color:var(--text-dim)]`}
                                        >
                                            {metric.label}
                                        </p>
                                        <p
                                            className={`${displayClass} mt-3 text-3xl font-semibold uppercase tracking-[0.08em] text-[color:var(--text-main)]`}
                                        >
                                            {metric.value}
                                        </p>
                                        <p className="mt-2 text-sm text-[color:var(--text-soft)]">{metric.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid content-start gap-6">
                            <div className={`${frameClass} p-6`}>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={userData.img}
                                        alt={userData.name}
                                        className="h-24 w-24 rounded-[1.4rem] border border-[color:var(--border-strong)] object-cover shadow-[0_0_30px_rgba(125,249,255,0.14)]"
                                    />
                                    <div>
                                        <p
                                            className={`${monoClass} text-[0.7rem] uppercase tracking-[0.32em] text-[color:var(--text-muted)]`}
                                        >
                                            Identity
                                        </p>
                                        <h2
                                            className={`${displayClass} mt-2 text-2xl font-semibold uppercase tracking-[0.08em] text-[color:var(--text-main)]`}
                                        >
                                            {userData.firstName}
                                        </h2>
                                        <p className="mt-2 text-sm leading-6 text-[color:var(--text-soft)]">
                                            {userData.stack}
                                        </p>
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
                                                className="inline-flex items-center justify-center rounded-[1rem] border border-[color:var(--border-color)] bg-[color:var(--utility-bg)] px-4 py-4 text-[color:var(--text-main)] transition duration-300 hover:border-[color:var(--border-strong)] hover:bg-[color:var(--utility-hover)]"
                                            >
                                                <Icon className="text-lg" />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className={`${frameClass} p-5`}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="rounded-[1.2rem] border border-[color:var(--border-color)] bg-[color:var(--surface-bg)] p-4">
                                        <p
                                            className={`${displayClass} text-3xl font-semibold uppercase text-[color:var(--text-main)]`}
                                        >
                                            {userData.experience}
                                        </p>
                                        <p className="mt-2 text-sm text-[color:var(--text-soft)]">
                                            {statLabels.experience}
                                        </p>
                                    </div>
                                    <div className="rounded-[1.2rem] border border-[color:var(--border-color)] bg-[color:var(--surface-bg)] p-4">
                                        <p
                                            className={`${displayClass} text-3xl font-semibold uppercase text-[color:var(--text-main)]`}
                                        >
                                            {projects.length}+
                                        </p>
                                        <p className="mt-2 text-sm text-[color:var(--text-soft)]">{statLabels.projects}</p>
                                    </div>
                                    <div className="rounded-[1.2rem] border border-[color:var(--border-color)] bg-[color:var(--surface-bg)] p-4">
                                        <p
                                            className={`${displayClass} text-3xl font-semibold uppercase text-[color:var(--text-main)]`}
                                        >
                                            {skillEntries.length}
                                        </p>
                                        <p className="mt-2 text-sm text-[color:var(--text-soft)]">{statLabels.tools}</p>
                                    </div>
                                    <div className="rounded-[1.2rem] border border-[color:var(--border-color)] bg-[color:var(--surface-bg)] p-4">
                                        <p
                                            className={`${displayClass} text-xl font-semibold uppercase leading-tight text-[color:var(--text-main)]`}
                                        >
                                            {userData.specialty}
                                        </p>
                                        <p className="mt-2 text-sm text-[color:var(--text-soft)]">
                                            {statLabels.primaryRole}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className={`${frameClass} p-4`}>
                                <div className="mb-3 flex items-center justify-between">
                                    <p
                                        className={`${monoClass} text-[0.64rem] uppercase tracking-[0.28em] text-[color:var(--accent-soft)]`}
                                    >
                                        {supportModules.title}
                                    </p>
                                    <span
                                        className={`${monoClass} text-[0.58rem] uppercase tracking-[0.24em] text-[color:var(--text-subtle)]`}
                                    >
                                        {supportModules.status}
                                    </span>
                                </div>

                                <div className="grid gap-3">
                                    {heroReadouts.map((item, index) => (
                                        <div
                                            key={item.label}
                                            className="rounded-[1rem] border border-[color:var(--border-soft)] bg-[image:var(--surface-strong)] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                                        >
                                            <div className="flex items-start justify-between gap-3">
                                                <div>
                                                    <p
                                                        className={`${monoClass} text-[0.6rem] uppercase tracking-[0.24em] text-[color:var(--accent-dim)]`}
                                                    >
                                                        {item.label}
                                                    </p>
                                                    <p className="mt-2 text-[1rem] leading-7 text-[color:var(--text-main)]">
                                                        {item.value}
                                                    </p>
                                                </div>
                                                <span
                                                    className={`${monoClass} text-[0.62rem] uppercase tracking-[0.2em] text-[color:var(--accent)]`}
                                                >
                                                    0{index + 1}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.72fr)] xl:items-start">
                        <div className="grid gap-4">
                            <div className={`${frameClass} overflow-hidden`}>
                                <div className="flex items-center justify-between border-b border-[color:var(--divider-color)] px-5 py-4">
                                    <div className="flex items-center gap-2">
                                        <span className="h-3 w-3 rounded-full bg-[#ff6b6b]" />
                                        <span className="h-3 w-3 rounded-full bg-[#ffd166]" />
                                        <span className="h-3 w-3 rounded-full bg-[#7bffb2]" />
                                        <span className={`${monoClass} ml-4 text-sm text-[color:var(--text-muted)]`}>
                                            {clockPanel.terminalFileName}
                                        </span>
                                    </div>
                                    <span
                                        className={`${monoClass} text-[0.62rem] uppercase tracking-[0.24em] text-[color:var(--text-subtle)]`}
                                    >
                                        {clockPanel.terminalStatus}
                                    </span>
                                </div>

                                <pre
                                    className={`${monoClass} scrollbar-hidden overflow-x-auto px-6 py-6 text-sm leading-8 text-[color:var(--terminal-text)]`}
                                >
                                    {`const developer = {
  name: "${userData.name}",
  role: "${userData.role}",
  location: "${userData.location}",
  mission: "${clockPanel.codeMission}",
  focus: ${JSON.stringify(userData.focus, null, 2)},
  status: "${clockPanel.codeStatus}",
};`}
                                </pre>
                            </div>
                            <div className={`${frameClass} px-5 py-4`}>
                                <div className="grid gap-4">
                                    <div className=" md:flex space-y-4 md:space-y-0 justify-between min-w-0 p-1.5">
                                        <p
                                            className={`${displayClass} w-fit whitespace-nowrap text-[clamp(2rem,3.6vw,3rem)] font-semibold uppercase leading-[0.92] tracking-[0.08em] text-[color:var(--text-main)] [font-variant-numeric:tabular-nums]`}
                                        >
                                            {calendarDate}
                                        </p>
                                        <p
                                            className={`${displayClass} w-fit whitespace-nowrap text-[clamp(2rem,3.6vw,3rem)] font-semibold uppercase leading-[0.92] tracking-[0.08em] text-[color:var(--text-main)] [font-variant-numeric:tabular-nums]`}
                                        >
                                            {clock}
                                        </p>
                                    </div>
                                    <div className="grid gap-2 sm:grid-cols-3">
                                        {clockDetails.map((item) => (
                                            <div
                                                key={item.label}
                                                className="rounded-[0.95rem] border border-[color:var(--border-color)] bg-[color:var(--surface-faint)] px-3 py-2.5"
                                            >
                                                <p
                                                    className={`${monoClass} text-[0.56rem] uppercase tracking-[0.22em] text-[color:var(--text-dim)]`}
                                                >
                                                    {item.label}
                                                </p>
                                                <p className="mt-1.5 text-sm text-[color:var(--text-main)]">{item.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="about" className={`${frameClass} p-6 md:p-7`}>
                            <p
                                className={`${monoClass} text-xs uppercase tracking-[0.34em] text-[color:var(--text-muted)]`}
                            >
                                {about.eyebrow}
                            </p>
                            <h2
                                className={`${displayClass} mt-4 text-[clamp(1.7rem,3.2vw,2.7rem)] font-semibold uppercase leading-[0.94] tracking-[0.07em] text-[color:var(--text-main)]`}
                            >
                                {about.title[0]}
                                <br />
                                {about.title[1]}
                            </h2>
                            <p className="mt-5 text-[0.92rem] leading-7 text-[color:var(--text-soft)]">
                                {userData.longBio}
                            </p>

                            <div className="mt-7 border-t border-[color:var(--border-soft)] pt-5">
                                {userData.focus.map((item, index) => (
                                    <div
                                        key={item}
                                        className={`grid grid-cols-[auto_1fr] gap-4 py-3.5 ${index < userData.focus.length - 1 ? "border-b border-[color:var(--border-soft)]" : ""}`}
                                    >
                                        <span
                                            className={`${monoClass} text-[0.7rem] uppercase tracking-[0.2em] text-[color:var(--accent)]`}
                                        >
                                            0{index + 1}
                                        </span>
                                        <p className="text-[0.92rem] leading-6 text-[color:var(--text-main)]">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="work" className={`${frameClass} p-6 md:p-8 xl:p-10`}>
                        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                            <div>
                                <p
                                    className={`${monoClass} text-xs uppercase tracking-[0.34em] text-[color:var(--text-muted)]`}
                                >
                                    {work.eyebrow}
                                </p>
                                <h2
                                    className={`${displayClass} mt-4 max-w-4xl text-[clamp(2rem,4.6vw,3.5rem)] font-semibold uppercase leading-[0.95] tracking-[0.08em] text-[color:var(--text-main)]`}
                                >
                                    {work.title}
                                </h2>
                            </div>
                            <p className="max-w-md text-sm leading-7 text-[color:var(--text-soft)]">{work.blurb}</p>
                        </div>

                        <div className="space-y-5">
                            {projects.map((project, index) => (
                                <motion.article
                                    key={project.name}
                                    className="rounded-[1.5rem] border border-[color:var(--divider-color)] bg-[image:var(--project-bg)] p-5 md:p-6"
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.45, delay: index * 0.06 }}
                                >
                                    <div
                                        className={`${monoClass} mb-5 flex flex-col gap-2 text-[0.72rem] uppercase tracking-[0.22em] text-[color:var(--text-muted)] md:flex-row md:items-center md:justify-between`}
                                    >
                                        <span>
                                            {work.modulePrefix} {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <span>{project.stack.join(" / ")}</span>
                                    </div>

                                    <div className="grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] xl:items-center">
                                        <div>
                                            <h3
                                                className={`${displayClass} text-[clamp(1.5rem,2.4vw,2.15rem)] font-semibold uppercase tracking-[0.06em] text-[color:var(--text-main)]`}
                                            >
                                                {project.name}
                                            </h3>
                                            <p className="mt-4 text-sm leading-7 text-[color:var(--text-soft)]">
                                                {project.description}
                                            </p>

                                            <div className="mt-6 flex flex-wrap gap-3">
                                                {project.stack.map((item) => (
                                                    <span key={`${project.name}-${item}`} className={tagClass}>
                                                        {item}
                                                    </span>
                                                ))}
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

                                        <div>
                                            {project.img ? (
                                                <img
                                                    src={project.img}
                                                    alt={project.name}
                                                    className="aspect-[16/10] w-full rounded-[1.25rem] border border-[color:var(--border-color)] object-cover shadow-[0_0_36px_rgba(0,0,0,0.28)]"
                                                />
                                            ) : (
                                                <div className="grid aspect-[16/10] place-items-center rounded-[1.25rem] border border-[color:var(--border-color)] bg-[image:var(--project-fallback)]">
                                                    <span
                                                        className={`${displayClass} text-6xl font-semibold uppercase tracking-[0.12em] text-[color:var(--text-main)]`}
                                                    >
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

                    <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_24rem]">
                        <section id="stack" className={`${frameClass} p-6 md:p-8 xl:p-10`}>
                            <p
                                className={`${monoClass} text-xs uppercase tracking-[0.34em] text-[color:var(--text-muted)]`}
                            >
                                {stack.eyebrow}
                            </p>
                            <h2
                                className={`${displayClass} mt-4 max-w-3xl text-[clamp(2rem,4vw,3.6rem)] font-semibold uppercase leading-[0.96] tracking-[0.08em] text-[color:var(--text-main)]`}
                            >
                                {stack.title}
                            </h2>

                            <div className="mt-8 grid gap-4 xl:grid-cols-3">
                                {stackGroups.map((group) => (
                                    <article
                                        key={group.title}
                                        className="rounded-[1.4rem] border border-[color:var(--border-color)] bg-[color:var(--surface-bg)] p-6"
                                    >
                                        <p
                                            className={`${monoClass} text-xs uppercase tracking-[0.3em] text-[color:var(--text-muted)]`}
                                        >
                                            {group.title}
                                        </p>
                                        <p className="mt-4 text-sm leading-7 text-[color:var(--text-soft)]">
                                            {group.blurb}
                                        </p>
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
                            <p
                                className={`${monoClass} text-xs uppercase tracking-[0.34em] text-[color:var(--text-muted)]`}
                            >
                                {contact.eyebrow}
                            </p>
                            <h2
                                className={`${displayClass} mt-4 text-[clamp(1.8rem,3.5vw,2.7rem)] font-semibold uppercase leading-[0.96] tracking-[0.08em] text-[color:var(--text-main)]`}
                            >
                                {contact.title}
                            </h2>
                            <p className="mt-6 text-sm leading-7 text-[color:var(--text-soft)]">{userData.description}</p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <a
                                    href={userData.resumeUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-strong)] bg-[image:var(--cta-bg)] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--text-main)] shadow-[0_0_24px_rgba(125,249,255,0.12),inset_0_1px_0_rgba(255,255,255,0.16)] transition duration-300 hover:border-[color:var(--border-strong)] hover:bg-[image:var(--cta-bg-hover)]"
                                >
                                    {contact.resumeLabel} <FaArrowRight />
                                </a>
                                <a href={socials[1]?.url} target="_blank" rel="noreferrer" className={utilityLinkClass}>
                                    <FaLinkedinIn className="text-sm" />
                                    <span>{contact.linkedinLabel}</span>
                                </a>
                            </div>

                            <div className="mt-8 rounded-[1.2rem] border border-[color:var(--border-color)] bg-[color:var(--surface-bg)] p-4">
                                <p
                                    className={`${monoClass} text-[0.7rem] uppercase tracking-[0.28em] text-[color:var(--text-dim)]`}
                                >
                                    {contact.preferredRolesTitle}
                                </p>
                                <p className="mt-3 text-sm leading-7 text-[color:var(--text-main)]">
                                    {contact.preferredRolesText}
                                </p>
                            </div>
                        </section>
                    </section>

                    <footer className={`${frameClass} px-6 py-5`}>
                        <p
                            className={`${monoClass} text-center text-xs uppercase tracking-[0.22em] text-[color:var(--text-dim)]`}
                        >
                            © {currentYear} {userData.name}. {footer}
                        </p>
                    </footer>
                </main>
            </div>
        </div>
    );
}

export default App;

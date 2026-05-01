import "./App.css";
import { motion } from "framer-motion";
import { FaArrowRight, FaExternalLinkAlt, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
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
    github: "Code",
    linkedin: "LinkedIn",
    instagram: "Social",
};

function App() {
    const { userData } = information;
    const currentYear = new Date().getFullYear();
    const skillEntries = skills.map((skill) => {
        const key = skill.replace(/\.[^.]+$/, "");
        return {
            key,
            label: skillLabels[key] ?? key,
        };
    });

    const getProjectInitials = (name) =>
        name
            .split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map((word) => word[0])
            .join("")
            .toUpperCase();

    return (
        <div className="page-shell">
            <div className="page-glow page-glow-left" />
            <div className="page-glow page-glow-right" />

            <header className="topbar">
                <a href="#home" className="brand">
                    <span className="brand-mark">JP</span>
                    <span>{userData.name}</span>
                </a>

                <nav className="topnav" aria-label="Primary">
                    <a href="#about">About</a>
                    <a href="#work">Work</a>
                    <a href="#stack">Stack</a>
                    <a href="#contact">Contact</a>
                    <a href={userData.resumeUrl} target="_blank" rel="noreferrer" className="resume-link">
                        Resume
                    </a>
                </nav>
            </header>

            <main className="page">
                <section id="home" className="hero section-grid">
                    <motion.div
                        className="hero-copy"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="eyebrow">
                            Available for work <span>{userData.location}</span>
                        </p>
                        <h1>{userData.headline}</h1>
                        <p className="hero-summary">{userData.description}</p>

                        <div className="hero-actions">
                            <a href="#work" className="primary-link">
                                Selected work <FaArrowRight />
                            </a>
                            <a href={userData.resumeUrl} target="_blank" rel="noreferrer" className="secondary-link">
                                View resume
                            </a>
                        </div>

                        <div className="hero-socials">
                            {socials.map((social) => {
                                const socialKey = social.icon.replace(".svg", "");
                                const Icon = iconMap[socialKey];

                                if (!Icon) {
                                    return null;
                                }

                                return (
                                    <a key={social.url} href={social.url} target="_blank" rel="noreferrer">
                                        <Icon />
                                        <span>{socialLabels[socialKey] ?? socialKey}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </motion.div>

                    <motion.aside
                        className="hero-panel"
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                    >
                        <div className="profile-card">
                            <img src={userData.img} alt={userData.name} className="profile-image" />
                            <div>
                                <p className="panel-label">Profile</p>
                                <h2>{userData.name}</h2>
                                <p>{userData.role}</p>
                            </div>
                        </div>

                        <div className="code-card">
                            <div className="code-card-head">
                                <span className="dot" />
                                <span className="dot" />
                                <span className="dot" />
                                <p>profile.js</p>
                            </div>
                            <pre>{`const jithin = {
    role: "${userData.role}",
    location: "${userData.location}",
    focus: ${JSON.stringify(userData.focus)},
    stack: "MERN + React Native",
    available: true,
};`}</pre>
                        </div>

                        <div className="stat-grid">
                            <div>
                                <strong>{userData.experience}</strong>
                                <span>Experience</span>
                            </div>
                            <div>
                                <strong>{projects.length}+</strong>
                                <span>Projects</span>
                            </div>
                            <div>
                                <strong>{skillEntries.length}</strong>
                                <span>Tools</span>
                            </div>
                            <div>
                                <strong>{userData.specialty}</strong>
                                <span>Primary focus</span>
                            </div>
                        </div>
                    </motion.aside>
                </section>

                <section id="about" className="content-section">
                    <div className="section-heading">
                        <p>01 / About</p>
                        <h2>A portfolio that reads like an engineer&apos;s notebook.</h2>
                    </div>

                    <div className="about-grid">
                        <div className="about-copy">
                            <p>{userData.longBio}</p>
                        </div>

                        <div className="care-list">
                            <p className="panel-label">What I care about</p>
                            {userData.focus.map((item) => (
                                <div key={item} className="care-item">
                                    <span>/</span>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="work" className="content-section">
                    <div className="section-heading">
                        <p>02 / Work</p>
                        <h2>Selected projects with real product thinking behind them.</h2>
                    </div>

                    <div className="project-list">
                        {projects.map((project, index) => (
                            <motion.article
                                key={project.name}
                                className="project-row"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.45, delay: index * 0.06 }}
                            >
                                <div className="project-meta">
                                    <p>{String(index + 1).padStart(2, "0")}</p>
                                    <span>{project.stack.join(" / ")}</span>
                                </div>

                                <div className="project-body">
                                    <div className="project-copy">
                                        <h3>{project.name}</h3>
                                        <p>{project.description}</p>

                                        <div className="tag-row">
                                            {project.stack.map((item) => (
                                                <span key={`${project.name}-${item}`}>{item}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="project-preview">
                                        {project.img ? (
                                            <img src={project.img} alt={project.name} />
                                        ) : (
                                            <div className="project-placeholder" aria-label={project.name}>
                                                <span>{getProjectInitials(project.name)}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="project-links">
                                    {project.sourceCode ? (
                                        <a href={project.sourceCode} target="_blank" rel="noreferrer">
                                            <FaGithub />
                                            <span>Source</span>
                                        </a>
                                    ) : null}
                                    {project.preview ? (
                                        <a href={project.preview} target="_blank" rel="noreferrer">
                                            <FaExternalLinkAlt />
                                            <span>{project.previewLabel ?? "Live preview"}</span>
                                        </a>
                                    ) : null}
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </section>

                <section id="stack" className="content-section">
                    <div className="section-heading">
                        <p>03 / Stack</p>
                        <h2>Tools I reach for across web, mobile, and delivery.</h2>
                    </div>

                    <div className="stack-grid">
                        {stackGroups.map((group) => (
                            <article key={group.title} className="stack-card">
                                <p className="panel-label">{group.title}</p>
                                <div className="stack-tags">
                                    {group.keys.map((key) => {
                                        const skill = skillEntries.find((entry) => entry.key === key);
                                        return skill ? <span key={key}>{skill.label}</span> : null;
                                    })}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section id="contact" className="content-section contact-card">
                    <div className="section-heading">
                        <p>04 / Contact</p>
                        <h2>Let&apos;s build something thoughtful and fast.</h2>
                    </div>

                    <div className="contact-layout">
                        <p>
                            I&apos;m open to full-stack and frontend-focused roles where product quality, performance, and
                            maintainable code actually matter. If that sounds like your team, let&apos;s connect.
                        </p>

                        <div className="contact-actions">
                            <a href={userData.resumeUrl} target="_blank" rel="noreferrer" className="primary-link">
                                Open resume <FaArrowRight />
                            </a>
                            <a href={socials[1]?.url} target="_blank" rel="noreferrer" className="secondary-link">
                                Message on LinkedIn
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="site-footer">
                <p>
                    © {currentYear} {userData.name}. Built with React and a cleaner editorial theme.
                </p>
            </footer>
        </div>
    );
}

export default App;

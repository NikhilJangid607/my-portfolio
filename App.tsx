import { useState, useEffect } from "react";
import {
  Mail,
  MapPin,
  GraduationCap,
  ChevronDown,
  Menu,
  X,
  Database,
  BarChart3,
  Code2,
  FileSpreadsheet,
  TrendingUp,
  Palette,
  Download,
  ExternalLink,
  Zap,
} from "lucide-react";

// Custom LinkedIn SVG icon (not part of older lucide-react)
function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

// Custom Github SVG icon
function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-2.16c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.94 10.94 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.06.78 2.13v3.16c0 .31.21.66.8.55C20.21 21.39 23.5 17.07 23.5 12 23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

// ---------- Type definitions ----------
type NavLink = { id: string; label: string };
type Project = {
  title: string;
  description: string;
  technologies: string[];
  icon: string;
  gradient: string;
};
type Skill = { name: string; icon: string; category: string; level: number };

// ---------- Static Data ----------
const NAV_LINKS: NavLink[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const PROJECTS: Project[] = [
  {
    title: "Sales Dashboard",
    description:
      "Created an interactive dashboard in Power BI and Excel to visualize sales trends, revenue patterns, and KPI metrics for data-driven decision making.",
    technologies: ["Power BI", "Excel", "Data Visualization", "KPI Tracking"],
    icon: "BarChart3",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Data Cleaning & Transformation",
    description:
      "Cleaned and transformed a raw dataset by handling missing values, duplicates, and inconsistencies using Excel and SQL to prepare high-quality data for analysis.",
    technologies: ["Excel", "SQL", "Data Cleaning", "ETL"],
    icon: "Database",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "COVID-19 Data Analysis",
    description:
      "Analyzed global COVID-19 trends using Python (Pandas, Matplotlib) to uncover patterns in case growth, recoveries, and regional impacts.",
    technologies: ["Python", "Pandas", "Matplotlib", "Jupyter"],
    icon: "TrendingUp",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    title: "Movie Ratings Analysis",
    description:
      "Queried and analyzed IMDB movie ratings, genres, and trends using SQL/MySQL to identify factors driving audience engagement.",
    technologies: ["MySQL", "SQL", "Data Analysis", "Statistics"],
    icon: "Code2",
    gradient: "from-amber-500 to-orange-500",
  },
];

const SKILLS: Skill[] = [
  { name: "Python", icon: "Code2", category: "Programming", level: 80 },
  { name: "R", icon: "Code2", category: "Programming", level: 65 },
  { name: "SQL", icon: "Database", category: "Database", level: 75 },
  { name: "MySQL", icon: "Database", category: "Database", level: 75 },
  { name: "Excel", icon: "FileSpreadsheet", category: "Tools", level: 90 },
  { name: "Google Sheets", icon: "FileSpreadsheet", category: "Tools", level: 85 },
  { name: "Power BI", icon: "BarChart3", category: "Visualization", level: 80 },
  { name: "Statistics", icon: "TrendingUp", category: "Analysis", level: 70 },
  { name: "Data Cleaning", icon: "Zap", category: "Analysis", level: 85 },
  { name: "Data Visualization", icon: "Palette", category: "Visualization", level: 80 },
];

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Database,
  BarChart3,
  Code2,
  FileSpreadsheet,
  TrendingUp,
  Palette,
  Zap,
};

const BIO = `Aspiring Data Analyst pursuing B.Tech in Computer Science & Engineering at Arya College of Engineering. Skilled in Python, R, SQL, Excel, Power BI, and MySQL with a solid foundation in statistics, data cleaning, and visualization. Passionate about transforming raw data into actionable insights that drive smarter business decisions. Eager to grow, learn, and contribute to data-driven teams.`;

// ---------- Reusable Components ----------

function Navbar({ activeSection }: { activeSection: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/70 bg-white/85 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button
          onClick={() => handleNavClick("home")}
          className="group flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white shadow-md shadow-indigo-200">
            NJ
          </div>
          <span className="hidden text-base font-semibold text-slate-900 sm:block">
            Nikhil Jangid
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? "text-indigo-600"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
              )}
            </button>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200/70 bg-white/95 px-4 py-3 backdrop-blur-lg md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/40 px-4 pt-20"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-400/20 to-purple-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-400/20 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-pink-400/10 to-rose-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-1.5 text-xs font-medium text-indigo-700 shadow-sm backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for opportunities
        </div>

        <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Nikhil Jangid
          </span>
        </h1>

        <p className="mt-4 text-lg font-medium text-indigo-600 sm:text-xl">
          Aspiring Data Analyst
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Turning raw data into meaningful insights using Python, SQL, and
          modern visualization tools. Passionate about finding stories hidden in
          numbers.
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4" /> Jaipur, Rajasthan, India
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
          <span>B.Tech CSE Student</span>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <button
            onClick={() => {
              const el = document.getElementById("projects");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-300 sm:w-auto"
          >
            View My Work
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <a
            href="mailto:nikiljangidji@gmail.com"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md sm:w-auto"
          >
            <Download className="h-4 w-4" /> Get In Touch
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="mx-auto mt-16 flex h-10 w-10 animate-bounce items-center justify-center rounded-full bg-white text-slate-400 shadow-md transition-colors hover:text-indigo-600"
          aria-label="Scroll to about"
        >
          <ChevronDown className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            About Me
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Get to know me
          </h2>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                {BIO}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-100 bg-gradient-to-br from-indigo-50 to-white p-4 text-center">
                  <p className="text-2xl font-bold text-indigo-600">10+</p>
                  <p className="mt-1 text-xs font-medium text-slate-500">
                    Skills Mastered
                  </p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-gradient-to-br from-purple-50 to-white p-4 text-center">
                  <p className="text-2xl font-bold text-purple-600">4</p>
                  <p className="mt-1 text-xs font-medium text-slate-500">
                    Projects Built
                  </p>
                </div>
                <div className="col-span-2 rounded-xl border border-slate-100 bg-gradient-to-br from-pink-50 to-white p-4 text-center sm:col-span-1">
                  <p className="text-2xl font-bold text-pink-600">100%</p>
                  <p className="mt-1 text-xs font-medium text-slate-500">
                    Dedication
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-sm sm:p-8">
            <h3 className="text-lg font-semibold">Quick Info</h3>
            <div className="mt-5 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-indigo-300" />
                <div>
                  <p className="text-slate-400 text-xs">Location</p>
                  <p>Jaipur, Rajasthan, India</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <GraduationCap className="mt-0.5 h-4 w-4 text-indigo-300" />
                <div>
                  <p className="text-slate-400 text-xs">Education</p>
                  <p>B.Tech CSE (Pursuing)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-indigo-300" />
                <div>
                  <p className="text-slate-400 text-xs">Email</p>
                  <p className="break-all">nikiljangidji@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  // group skills by category
  const categories = Array.from(new Set(SKILLS.map((s) => s.category)));
  const maxPerCategory =
    Math.max(
      ...categories.map((c) => SKILLS.filter((s) => s.category === c).length),
    ) || 1;

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-slate-50 to-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            My Toolkit
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Skills & Technologies
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-600">
            The tools and technologies I use to clean, analyze, and visualize
            data.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-700">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                {category}
              </h3>
              <div className="space-y-3">
                {SKILLS.filter((s) => s.category === category).map((skill) => {
                  const Icon = ICON_MAP[skill.icon];
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-slate-50"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500/10 to-purple-500/10 text-indigo-600">
                        {Icon && <Icon className="h-4 w-4" />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-slate-800">
                          {skill.name}
                        </p>
                        <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-slate-100">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/* fillers for consistent card heights on lg */}
                {Array.from({
                  length: maxPerCategory -
                    SKILLS.filter((s) => s.category === category).length,
                }).map((_, i) => (
                  <div key={`filler-${i}`} className="h-[52px]" aria-hidden />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Featured Work
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Projects
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-600">
            A selection of projects showcasing my data analysis journey.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {PROJECTS.map((project, idx) => {
            const Icon = ICON_MAP[project.icon];
            return (
              <article
                key={project.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
              >
                <div
                  className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${project.gradient} opacity-10 blur-2xl transition-opacity group-hover:opacity-20`}
                />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${project.gradient} text-white shadow-md`}
                    >
                      {Icon && <Icon className="h-6 w-6" />}
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      Project 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-slate-900 sm:text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section
      id="education"
      className="bg-gradient-to-b from-slate-50 to-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            My Education
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Academic Background
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-indigo-300 via-purple-300 to-transparent sm:block" />

          <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-200">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                    B.Tech, Computer Science & Engineering
                  </h3>
                  <span className="inline-flex w-fit items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                    Pursuing
                  </span>
                </div>
                <p className="mt-1 text-base font-medium text-indigo-600">
                  Arya College of Engineering
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Building a strong foundation in computer science fundamentals
                  while specializing in data analysis, programming, and
                  analytical problem-solving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 opacity-95" />
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-200">
          Let's Connect
        </p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl">
          Let's work together
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-indigo-100 sm:text-lg">
          Interested in collaborating or have a data challenge to solve? I'd
          love to hear from you.
        </p>

        <a
          href="mailto:nikiljangidji@gmail.com"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-indigo-700 shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl sm:px-8 sm:py-4 sm:text-base"
        >
          <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
          nikiljangidji@gmail.com
        </a>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="https://www.linkedin.com/in/nikhil-jangid-285070332"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20 sm:w-auto"
          >
            <LinkedinIcon className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href="https://github.com/NikhilJangid607"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20 sm:w-auto"
          >
            <GithubIcon className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} Nikhil Jangid. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          Built with <span className="text-rose-500">♥</span> using React &
          Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

// ---------- Main App ----------
export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.id);
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(entry.target.id);
          });
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";
import { useCurrentApp } from "components/context/app.context";
import { PROJECTS } from "helpers/data";
import { SKILLS, TECH_STACK } from "components/sections/skill";

const GH_USERNAME = "dinhhoang0712";
const GH_CACHE_KEY = "gh-stats-cache-v1";
const GH_CACHE_TTL = 10 * 60 * 1000;

interface GithubStatsData {
  publicRepos: number;
  followers: number;
  totalStars: number;
  memberSince: number;
  lastRepoName: string | null;
  lastPushedAt: string | null;
}

const timeAgo = (dateStr: string, t: TFunction) => {
  const hours = (Date.now() - new Date(dateStr).getTime()) / 3_600_000;
  if (hours < 1) return t("terminal.github.timeAgo.justNow");
  if (hours < 24) return t("terminal.github.timeAgo.hours", { n: Math.floor(hours) });
  const days = hours / 24;
  if (days < 30) return t("terminal.github.timeAgo.days", { n: Math.floor(days) });
  const months = days / 30;
  if (months < 12) return t("terminal.github.timeAgo.months", { n: Math.floor(months) });
  return t("terminal.github.timeAgo.years", { n: Math.floor(months / 12) });
};

const loadGithubStats = async (): Promise<GithubStatsData> => {
  try {
    const cached = sessionStorage.getItem(GH_CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached) as { data: GithubStatsData; ts: number };
      if (Date.now() - parsed.ts < GH_CACHE_TTL) return parsed.data;
    }
  } catch {
    // sessionStorage unavailable or corrupt cache — fall through to a live fetch
  }

  const [userRes, reposRes] = await Promise.all([
    fetch(`https://api.github.com/users/${GH_USERNAME}`),
    fetch(
      `https://api.github.com/users/${GH_USERNAME}/repos?per_page=100&sort=pushed`,
    ),
  ]);

  if (!userRes.ok || !reposRes.ok) {
    throw new Error("GitHub API request failed");
  }

  const user = await userRes.json();
  const repos = await reposRes.json();
  const repoList: Array<{
    name: string;
    fork: boolean;
    stargazers_count: number;
    pushed_at: string;
  }> = Array.isArray(repos) ? repos : [];

  const totalStars = repoList.reduce(
    (sum, repo) => sum + (repo.fork ? 0 : repo.stargazers_count || 0),
    0,
  );
  const lastRepo = repoList[0] ?? null;

  const data: GithubStatsData = {
    publicRepos: user.public_repos,
    followers: user.followers,
    totalStars,
    memberSince: new Date(user.created_at).getFullYear(),
    lastRepoName: lastRepo?.name ?? null,
    lastPushedAt: lastRepo?.pushed_at ?? null,
  };

  try {
    sessionStorage.setItem(GH_CACHE_KEY, JSON.stringify({ data, ts: Date.now() }));
  } catch {
    // storage full or unavailable — safe to ignore, just skip caching
  }

  return data;
};

const GITHUB_URL = "https://github.com/dinhhoang0712";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/ho%C3%A0ng-v%C5%A9-765750412";
const FACEBOOK_URL = "https://www.facebook.com/vu.inh.hoang.443763";
const EMAIL = "vuhoang5053@gmail.com";
const PHONE_DISPLAY = "84+ 343 721 388";
const PHONE_HREF = "tel:+84343721388";
const RESUME_URL =
  "https://drive.google.com/file/d/1WhMoPvGf_E3CIdSLTBewj-upTdB3Xp03/view?usp=sharing";

const BOOT_COMMAND = "neofetch";
const SUGGESTIONS = [
  "whoami",
  "skills",
  "projects",
  "github",
  "contact",
  "sudo hire-me",
];
const COMMAND_NAMES = [
  "help",
  "whoami",
  "skills",
  "projects",
  "open",
  "contact",
  "resume",
  "sudo hire-me",
  "theme",
  "github",
  "neofetch",
  "clear",
];

type Entry =
  | { id: number; kind: "input"; text: string }
  | { id: number; kind: "output"; node: ReactNode };

let entryId = 0;
const nextId = () => ++entryId;

const HeroTerminal = () => {
  const { t } = useTranslation();
  const { setTheme } = useCurrentApp();

  const [history, setHistory] = useState<Entry[]>([]);
  const [booted, setBooted] = useState(false);
  const [bootTyped, setBootTyped] = useState("");
  const [input, setInput] = useState("");

  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const cmdHistoryRef = useRef<string[]>([]);
  const cmdHistoryIndexRef = useRef<number>(-1);
  const timeoutRef = useRef<number | undefined>(undefined);

  const push = useCallback((node: ReactNode) => {
    setHistory((h) => [...h, { id: nextId(), kind: "output", node }]);
  }, []);

  const neofetchBlock = useCallback(() => {
    const rows: { glyph: string; label: string; value: string; c: 1 | 2 | 3 | 4 }[] = [
      { glyph: "▓▓▓  ▓▓", label: "OS:", value: t("terminal.neofetch.os"), c: 1 },
      { glyph: "▓▓▓  ▓▓", label: "Shell:", value: t("terminal.neofetch.shell"), c: 2 },
      { glyph: "▓▓  ▓▓▓▓", label: "Focus:", value: t("terminal.neofetch.focus"), c: 3 },
      { glyph: "     ▓▓", label: "Uptime:", value: t("terminal.neofetch.uptime"), c: 4 },
    ];

    return (
      <div className="terminal-banner">
        {rows.map((row, idx) => (
          <div className="nf-row" key={idx}>
            <span className={`nf-glyph nf-c${row.c}`}>{row.glyph}</span>
            <span className="nf-label">{row.label}</span>
            <span className="nf-value">{row.value}</span>
          </div>
        ))}
      </div>
    );
  }, [t]);

  const renderGithubStats = useCallback(
    (data: GithubStatsData) => (
      <div className="terminal-github">
        <p className="terminal-text terminal-muted">GitHub — {GH_USERNAME}</p>
        <div className="terminal-help-row">
          <span className="terminal-help-cmd">
            {t("terminal.github.publicRepos")}
          </span>
          <span className="terminal-help-desc">{data.publicRepos}</span>
        </div>
        <div className="terminal-help-row">
          <span className="terminal-help-cmd">
            {t("terminal.github.followers")}
          </span>
          <span className="terminal-help-desc">{data.followers}</span>
        </div>
        <div className="terminal-help-row">
          <span className="terminal-help-cmd">
            {t("terminal.github.totalStars")}
          </span>
          <span className="terminal-help-desc">{data.totalStars}</span>
        </div>
        {data.lastRepoName && data.lastPushedAt && (
          <div className="terminal-help-row">
            <span className="terminal-help-cmd">
              {t("terminal.github.lastPush")}
            </span>
            <span className="terminal-help-desc">
              {data.lastRepoName}, {timeAgo(data.lastPushedAt, t)}
            </span>
          </div>
        )}
        <div className="terminal-help-row">
          <span className="terminal-help-cmd">
            {t("terminal.github.memberSince")}
          </span>
          <span className="terminal-help-desc">{data.memberSince}</span>
        </div>
      </div>
    ),
    [t],
  );

  const execute = useCallback(
    (raw: string) => {
      const trimmed = raw.trim();
      if (!trimmed) return;

      setHistory((h) => [...h, { id: nextId(), kind: "input", text: raw }]);

      const normalized = trimmed.toLowerCase().replace(/\s+/g, " ");
      const [cmd, ...args] = normalized.split(" ");

      if (normalized === "help") {
        push(
          <div className="terminal-help">
            {[
              ["whoami", t("terminal.help.whoami")],
              ["skills", t("terminal.help.skills")],
              ["projects", t("terminal.help.projects")],
              ["contact", t("terminal.help.contact")],
              ["resume", t("terminal.help.resume")],
              ["sudo hire-me", t("terminal.help.hireMe")],
              ["theme <dark|light>", t("terminal.help.theme")],
              ["github", t("terminal.help.github")],
              ["clear", t("terminal.help.clear")],
            ].map(([name, desc]) => (
              <div className="terminal-help-row" key={name}>
                <span className="terminal-help-cmd">{name}</span>
                <span className="terminal-help-desc">{desc}</span>
              </div>
            ))}
          </div>,
        );
      } else if (normalized === "whoami") {
        push(<p className="terminal-text">{t("terminal.whoami")}</p>);
      } else if (normalized === "skills") {
        push(
          <div className="terminal-skills">
            <p className="terminal-text terminal-muted">
              {t("terminal.skillsIntro")}
            </p>
            {SKILLS.map((group) => (
              <div className="terminal-skill-group" key={group.title}>
                <span className="terminal-skill-title">{group.title}</span>
                <span className="terminal-skill-items">
                  {group.items.join(", ")}
                </span>
              </div>
            ))}
            <p className="terminal-text terminal-muted terminal-tech">
              {TECH_STACK.join(" · ")}
            </p>
          </div>,
        );
      } else if (normalized === "projects") {
        push(
          <div className="terminal-projects">
            <p className="terminal-text terminal-muted">
              {t("terminal.projectsIntro")}
            </p>
            {PROJECTS.map((project, idx) => (
              <div className="terminal-project-row" key={project.id}>
                <span className="terminal-project-index">{idx + 1}.</span>
                <span className="terminal-project-title">
                  {project.title}
                  {project.featured ? " ★" : ""}
                </span>
                <span className="terminal-project-stack">
                  {project.techStack.join(", ")}
                </span>
              </div>
            ))}
          </div>,
        );
      } else if (cmd === "open" && args.length) {
        const n = parseInt(args[0], 10);
        const project = PROJECTS[n - 1];
        if (!project) {
          push(
            <p className="terminal-error">
              {t("terminal.openInvalid", { n: args[0] })}
            </p>,
          );
        } else {
          push(
            <p className="terminal-success">
              {t("terminal.opening", { title: project.title })}
            </p>,
          );
          window.open(project.githubLink, "_blank", "noopener,noreferrer");
        }
      } else if (normalized === "contact") {
        push(
          <div className="terminal-contact">
            <p className="terminal-text terminal-muted">
              {t("terminal.contactIntro")}
            </p>
            <a
              className="terminal-link"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {GITHUB_URL}
            </a>
            <a
              className="terminal-link"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {LINKEDIN_URL}
            </a>
            <a
              className="terminal-link"
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {FACEBOOK_URL}
            </a>
            <a className="terminal-link" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            <a className="terminal-link" href={PHONE_HREF}>
              {PHONE_DISPLAY}
            </a>
          </div>,
        );
      } else if (normalized === "resume" || normalized === "cv") {
        push(<p className="terminal-success">{t("terminal.resumeOpening")}</p>);
        window.open(RESUME_URL, "_blank", "noopener,noreferrer");
      } else if (normalized === "sudo hire-me") {
        push(<p className="terminal-text">{t("terminal.sudo.password")}</p>);
        window.setTimeout(() => {
          push(
            <div className="terminal-hire-me">
              <p className="terminal-success terminal-pop">
                {t("terminal.sudo.granted")}
              </p>
              <a className="terminal-link" href={`mailto:${EMAIL}`}>
                {t("terminal.sudo.cta")} {EMAIL}
              </a>
            </div>,
          );
          if (outputRef.current) {
            outputRef.current.scrollTop = outputRef.current.scrollHeight;
          }
        }, 650);
      } else if (cmd === "theme") {
        const mode = args[0];
        if (mode === "dark" || mode === "light") {
          localStorage.setItem("theme", mode);
          document.documentElement.setAttribute("data-bs-theme", mode);
          setTheme(mode);
          push(
            <p className="terminal-success">
              {t("terminal.themeSwitched", { mode })}
            </p>,
          );
        } else {
          push(<p className="terminal-error">{t("terminal.themeUsage")}</p>);
        }
      } else if (normalized === "github" || normalized === "github stats") {
        push(
          <p className="terminal-text terminal-muted">
            {t("terminal.github.fetching")}
          </p>,
        );
        loadGithubStats()
          .then((data) => push(renderGithubStats(data)))
          .catch(() =>
            push(<p className="terminal-error">{t("terminal.github.error")}</p>),
          );
      } else if (normalized === "neofetch") {
        push(neofetchBlock());
      } else if (normalized === "clear") {
        setHistory([]);
        return;
      } else {
        push(
          <p className="terminal-error">
            {t("terminal.unknownCommand", { cmd: trimmed })}
          </p>,
        );
      }

      cmdHistoryRef.current = [
        ...cmdHistoryRef.current.filter((c) => c !== raw),
        raw,
      ];
      cmdHistoryIndexRef.current = cmdHistoryRef.current.length;
    },
    [push, neofetchBlock, renderGithubStats, setTheme, t],
  );

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      execute(BOOT_COMMAND);
      push(
        <p className="terminal-text terminal-muted terminal-hint">
          {t("terminal.bootHint")}
        </p>,
      );
      setBooted(true);
      return;
    }

    let i = 0;
    const type = () => {
      i += 1;
      setBootTyped(BOOT_COMMAND.slice(0, i));
      if (i < BOOT_COMMAND.length) {
        timeoutRef.current = window.setTimeout(type, 65 + Math.random() * 55);
      } else {
        timeoutRef.current = window.setTimeout(() => {
          execute(BOOT_COMMAND);
          push(
            <p className="terminal-text terminal-muted terminal-hint">
              {t("terminal.bootHint")}
            </p>,
          );
          setBooted(true);
        }, 450);
      }
    };

    timeoutRef.current = window.setTimeout(type, 500);

    return () => window.clearTimeout(timeoutRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    execute(input);
    setInput("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const list = cmdHistoryRef.current;
      if (!list.length) return;
      cmdHistoryIndexRef.current = Math.max(0, cmdHistoryIndexRef.current - 1);
      setInput(list[cmdHistoryIndexRef.current] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const list = cmdHistoryRef.current;
      cmdHistoryIndexRef.current = Math.min(
        list.length,
        cmdHistoryIndexRef.current + 1,
      );
      setInput(list[cmdHistoryIndexRef.current] ?? "");
    } else if (e.key === "Tab") {
      const partial = input.trim().toLowerCase();
      if (!partial) return;
      const match = COMMAND_NAMES.find((c) => c.startsWith(partial));
      if (match) {
        e.preventDefault();
        setInput(match);
      }
    }
  };

  return (
    <div className="hero-terminal" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-output" ref={outputRef}>
        {!booted && (
          <div className="terminal-line">
            <span className="terminal-prompt">visitor@vuhoang.click:~$</span>
            <span className="terminal-typed">{bootTyped}</span>
            <span className="terminal-caret" aria-hidden="true" />
          </div>
        )}

        {history.map((entry) =>
          entry.kind === "input" ? (
            <div className="terminal-line" key={entry.id}>
              <span className="terminal-prompt">visitor@vuhoang.click:~$</span>
              <span className="terminal-typed">{entry.text}</span>
            </div>
          ) : (
            <div className="terminal-line terminal-line-output" key={entry.id}>
              {entry.node}
            </div>
          ),
        )}

        {booted && (
          <form className="terminal-line terminal-form" onSubmit={handleSubmit}>
            <span className="terminal-prompt">visitor@vuhoang.click:~$</span>
            <input
              ref={inputRef}
              className="terminal-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t("terminal.placeholder") ?? ""}
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              aria-label="terminal command input"
            />
          </form>
        )}
      </div>

      <div className="terminal-suggestions">
        {SUGGESTIONS.map((s) => (
          <button
            type="button"
            className="terminal-chip"
            key={s}
            onClick={(e) => {
              e.stopPropagation();
              execute(s);
              inputRef.current?.focus();
            }}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroTerminal;

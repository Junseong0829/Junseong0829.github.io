import { useEffect, useState } from "react";
import {
  awards,
  education,
  profile,
  projects,
  publications,
  type ContactLink,
  type Entry,
} from "./content";

function isExternal(href: string) {
  return href.startsWith("http");
}

function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="link"
      {...(isExternal(href) ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

function ContactIcon({ icon }: { icon: ContactLink["icon"] }) {
  if (icon === "email") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3.5 7 8.5 6 8.5-6" />
      </svg>
    );
  }
  if (icon === "github") {
    return (
      <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const sections = [
  { id: "about", title: "About" },
  { id: "publications", title: "Publications", entries: publications },
  { id: "education", title: "Education", entries: education },
  { id: "awards", title: "Awards", entries: awards },
  { id: "projects", title: "Projects", entries: projects },
];

const lastUpdated = new Date(__BUILD_DATE__).toLocaleDateString("en-US", {
  month: "short",
  year: "numeric",
});

/**
 * 지금 화면에서 읽고 있는 섹션의 id 를 돌려준다.
 * 링크를 눌러 이동한 경우에는, 페이지가 짧아 그 섹션이 화면 위쪽까지 올라오지
 * 못하더라도 누른 항목이 선택된 상태로 남도록 사용자가 직접 스크롤할 때까지 고정한다.
 */
function useActiveSection() {
  const [scrolled, setScrolled] = useState(sections[0].id);
  const [pinned, setPinned] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setScrolled(sections[sections.length - 1].id);
        return;
      }
      const line = window.innerHeight * 0.3;
      let current = sections[0].id;
      for (const { id } of sections) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= line)
          current = id;
      }
      setScrolled(current);
    };
    const unpin = () => setPinned(null);

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("wheel", unpin, { passive: true });
    window.addEventListener("touchmove", unpin, { passive: true });
    window.addEventListener("keydown", unpin);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("wheel", unpin);
      window.removeEventListener("touchmove", unpin);
      window.removeEventListener("keydown", unpin);
    };
  }, []);

  return { active: pinned ?? scrolled, pin: setPinned };
}

/** 섹션 이동 링크. 넓은 화면에서는 왼쪽 사이드바, 좁은 화면에서는 상단 바로 쓰인다. */
function SectionLinks({
  active,
  onSelect,
}: {
  active: string;
  onSelect: (id: string) => void;
}) {
  return sections.map(({ id, title }) => (
    <a
      key={id}
      href={`#${id}`}
      aria-current={active === id ? "location" : undefined}
      onClick={() => onSelect(id)}
    >
      {title}
    </a>
  ));
}

function Section({
  id,
  title,
  entries,
}: {
  id: string;
  title: string;
  entries: Entry[];
}) {
  return (
    <section id={id} className="section">
      <h2 className="section-title">{title}</h2>
      <ul className="mt-6 space-y-6">
        {entries.map((entry) => (
          <li
            key={entry.title}
            className={
              entry.period
                ? "grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-[8.5rem_1fr]"
                : undefined
            }
          >
            {entry.period && (
              <p className="pt-0.5 text-sm text-(--muted) tabular-nums">
                {entry.period}
              </p>
            )}
            <div>
              <p className="font-medium text-(--ink)">
                <span className={entry.todo ? "todo" : undefined}>
                  {entry.title}
                </span>
              </p>
              {entry.detail && (
                <p className="mt-1 text-[0.95rem] leading-relaxed text-(--body)">
                  {entry.detail}
                </p>
              )}
              {entry.links && (
                <p className="mt-1.5 flex flex-wrap gap-x-3 text-sm">
                  {entry.links.map((link) => (
                    <TextLink key={link.href} href={link.href}>
                      [{link.label}]
                    </TextLink>
                  ))}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Home() {
  const { active, pin } = useActiveSection();
  return (
    <>
      <nav aria-label="Sections" className="topbar">
        <SectionLinks active={active} onSelect={pin} />
      </nav>
      <div className="mx-auto flex max-w-5xl gap-10 px-5 pb-16 pt-10 sm:px-8 md:pt-20">
        <aside className="hidden w-36 shrink-0 md:block">
          <nav aria-label="Sections" className="sidebar">
            <SectionLinks active={active} onSelect={pin} />
          </nav>
        </aside>
        <main className="min-w-0 max-w-3xl flex-1">
          <header id="about" className="pb-14">
            <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-stretch sm:gap-10">
              <div className="portrait">
                <img src={profile.photo} alt={`Portrait of ${profile.name}`} />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="font-serif text-4xl font-semibold tracking-tight text-(--ink) sm:text-[2.75rem]">
                  {profile.name}
                </h1>
                <p className="mt-3 text-sm leading-relaxed font-medium uppercase tracking-[0.14em] text-(--accent)">
                  {profile.role.map((part, index) => (
                    <span key={part} className="block sm:inline">
                      {index > 0 && (
                        <span className="hidden sm:inline"> · </span>
                      )}
                      {part}
                    </span>
                  ))}
                </p>

                <div className="bio mt-5 space-y-3 leading-relaxed text-(--body)">
                  {profile.bio.map((paragraph, index) => (
                    <p key={index}>
                      {paragraph.map((segment) =>
                        "href" in segment && segment.href ? (
                          <TextLink key={segment.text} href={segment.href}>
                            {segment.text}
                          </TextLink>
                        ) : "strong" in segment && segment.strong ? (
                          <strong
                            key={segment.text}
                            className="font-semibold text-(--ink)"
                          >
                            {segment.text}
                          </strong>
                        ) : (
                          <span key={segment.text}>{segment.text}</span>
                        ),
                      )}
                    </p>
                  ))}
                </div>

                <nav
                  aria-label="Contact"
                  className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 sm:justify-start"
                >
                  {profile.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="icon-link"
                      {...(isExternal(link.href)
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                    >
                      <ContactIcon icon={link.icon} />
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </header>

          {sections.map(
            ({ id, title, entries }) =>
              entries && (
                <Section key={id} id={id} title={title} entries={entries} />
              ),
          )}

          <footer className="border-t border-(--line) pt-8 text-center text-sm text-(--muted)">
            © {new Date().getFullYear()} {profile.name} · Last updated{" "}
            {lastUpdated}
          </footer>
        </main>
      </div>
    </>
  );
}

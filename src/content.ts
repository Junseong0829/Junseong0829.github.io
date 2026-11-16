// 사이트에 표시되는 모든 내용은 이 파일에서 수정합니다.
// todo: true 로 표시된 항목은 아직 확정되지 않은 자리 표시용 문구이며,
// 화면에 형광 표시로 나타납니다. 내용을 채운 뒤 todo 를 지우면 됩니다.

export type Link = { label: string; href: string };

export type Entry = {
  period: string;
  title: string;
  detail?: string;
  links?: Link[];
  todo?: boolean;
};

export type BioSegment = { text: string; href?: string; strong?: boolean };

export const profile = {
  name: "Junseong Lee",
  // 화면이 좁으면 항목 단위로 줄이 바뀝니다.
  role: ["Undergraduate Research Intern", "ACSL, GIST"],
  photo: "/profile.jpg",
  // 문단 배열. 각 문단은 조각(segment)의 배열이며 href 를 주면 링크가 됩니다.
  // \u00a0 는 줄이 바뀌지 않는 공백, \u2011 은 줄이 바뀌지 않는 하이픈입니다.
  bio: [
    [
      { text: "I am an undergraduate student at " },
      { text: "Gwangju Institute of Science and Technology\u00a0(GIST)", href: "https://www.gist.ac.kr/en/" },
      { text: " and a research intern at the " },
      { text: "Autonomous Computing Systems Lab\u00a0(ACSL)", href: "https://uehwan.github.io" },
      { text: ", advised by Prof.\u00a0Ue\u2011Hwan\u00a0Kim." },
    ],
    [
      { text: "My research focuses on " },
      { text: "long-horizon vision-language-action\u00a0(VLA) models", strong: true },
      { text: "." },
    ],
  ] satisfies BioSegment[][],
  links: [
    { icon: "email", label: "Email", href: "mailto:junseong@gm.gist.ac.kr" },
    { icon: "github", label: "GitHub", href: "https://github.com/Junseong0829" },
    {
      icon: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/%EC%A4%80%EC%84%B1-%EC%9D%B4-82a89b419/",
    },
  ] satisfies ContactLink[],
};

export type ContactLink = {
  icon: "email" | "github" | "linkedin";
  label: string;
  href: string;
  todo?: boolean;
};

export const publications: Entry[] = [
  // period 를 비워 두면 날짜 열 없이 왼쪽 끝에 맞춰 표시됩니다.
  {
    period: "",
    title: "Coming soon",
  },
];

export const education: Entry[] = [
  {
    period: "2021 – Present",
    title: "Gwangju Institute of Science and Technology (GIST)",
    detail: "B.S. in Electrical Engineering and Computer Science",
  },
];

export const awards: Entry[] = [
  {
    period: "Apr 2025",
    title: "2nd Place — Impact AI Hackathon",
    detail:
      "Director's Award, GIST Institute for Artificial Intelligence · Agora, an AI-based news site designed to counter echo chambers",
    links: [
      { label: "Code", href: "https://github.com/Junseong0829/ImpactAI_Hackathon" },
    ],
  },
];

export const projects: Entry[] = [
  {
    period: "Dec 2025 – Present",
    title: "GIST Chatbot",
    detail:
      "Embeddable chatbot widget for GIST web services, installed with a single script tag · GSA Infoteam, frontend",
    links: [
      { label: "Code", href: "https://github.com/gsainfoteam/chatbot-fe" },
      { label: "Site", href: "https://chatbot.gistory.me" },
    ],
  },
];

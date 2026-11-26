// All portfolio copy lives here so components stay presentational.

export const profile = {
  firstName: "sydney",
  name: "Sydney Gahunia",
  subtitle: "systems design engineering @ uwaterloo · welcome to my pond :)",
  email: "sydneygahunia@gmail.com",
  linkedin: "https://www.linkedin.com/in/sydney-gahunia-b9a704318",
  github: "https://github.com/sydneygahunia",
};

export type Bullet = {
  text: string;
  group?: string; // sub-project name; consecutive bullets with the same group are listed under one label
};

export type Experience = {
  role: string;
  org: string;
  period: string;
  location?: string;
  stack: string[];
  bullets: Bullet[];
};

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    org: "Steele Family Foundation",
    period: "Sep 2026 – Present",
    location: "Waterloo, ON",
    stack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Claude API", "Microsoft Azure", "JavaScript", "HTML/CSS", "CI/CD"],
    bullets: [
      {
        text: "Ship backend features in Python and FastAPI for an AI platform that structures thousands of job postings each term, with automated testing and Azure CI/CD on every release.",
      },
      {
        text: "Build a nonprofit matching platform with PostgreSQL, pgvector, Python and the Claude API, including data pipelines for CRA charity data and a FastAPI service that matches students and donors with relevant nonprofit organizations.",
      },
      {
        text: "Develop a responsive web platform in HTML, CSS and JavaScript that brings 5 donor-funded co-op programs into a single, consistent experience.",
      },
    ],
  },
  {
    role: "AI Engineer",
    org: "Hennick Humber Hospital",
    period: "Jan 2026 – Apr 2026",
    location: "Toronto, ON",
    stack: ["React", "FastAPI", "Claude API", "RAG", "Retell AI", "ElevenLabs", "Docker", "Nginx", "CI/CD"],
    bullets: [
      {
        text: "Developed a full-stack AI help desk platform with React and FastAPI that automated troubleshooting for common IT issues across 700+ hospital staff.",
      },
      {
        text: "Engineered a retrieval-augmented generation (RAG) pipeline using hospital procedure documents and the Claude API to retrieve relevant guidance and generate grounded, step-by-step support responses.",
      },
      {
        text: "Built a real-time AI voice agent with Retell AI and ElevenLabs for intent detection, on-call physician lookup and automated call routing across hospital switchboard workflows.",
      },
      {
        text: "Containerized the platform with Docker and Nginx for reproducible on-premises deployment, adding automated testing, CI/CD and application monitoring.",
      },
    ],
  },
];

export type Project = {
  name: string;
  tagline: string;
  period?: string;
  stack: string[];
  links: { label: string; href: string }[];
  /** Pinged when someone opens the portfolio, so a demo hosted on a free
   * tier that sleeps when idle is already awake by the time they click it. */
  wakeUrl?: string;
  bullets: string[];
};

export const projects: Project[] = [
  {
    name: "Ventra",
    tagline: "iOS heart-rate monitoring app",
    stack: ["Swift", "SwiftUI", "SwiftData", "Swift Charts", "XCTest"],
    links: [{ label: "GitHub", href: "https://github.com/sydneygahunia/svt-monitor" }],
    bullets: [
      "Developed a SwiftUI iOS app integrating HealthKit and Apple Watch heart-rate data to monitor cardiovascular activity and alert users when it detects patterns consistent with supraventricular tachycardia episodes.",
      "Engineered a state-machine detection algorithm for sustained and abrupt heart-rate spikes, validating episode logic against simulated real-time data streams.",
      "Built persistent episode logging with SwiftData and interactive Swift Charts to visualize heart-rate trends across 30- and 90-day periods.",
      "Wrote XCTest unit tests for episode-detection logic, breathing-exercise timing and longitudinal trend calculations.",
    ],
  },
  {
    name: "Brim",
    tagline: "Wearable navigation aid for blind users · Hack Western 13",
    stack: ["QNX", "C++", "Python", "TypeScript", "TensorFlow Lite", "React Native", "SQLite"],
    links: [{ label: "GitHub", href: "https://github.com/sydneygahunia/brim" }],
    bullets: [
      "Developed a wearable assistive system using a Raspberry Pi 5, USB camera and TensorFlow Lite to detect people and obstacles in a blind user’s path and generate real-time spoken navigation guidance.",
      "Engineered a real-time C++ perception pipeline on QNX, integrating the QNX Sensor Framework for camera capture and on-device inference.",
      "Built a React Native iOS app that communicates with the wearable over WebSockets, delivers audio alerts while the phone is locked and persists alerts and user settings with SQLite.",
    ],
  },
  {
    name: "Forma",
    tagline: "Full-stack e-commerce simulation",
    stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "WebSockets"],
    links: [
      { label: "Live demo", href: "https://forma-ten-bice.vercel.app" },
      { label: "GitHub", href: "https://github.com/sydneygahunia/Forma" },
    ],
    wakeUrl: "https://forma-api-je9l.onrender.com/api/ping",
    bullets: [
      "Developed a full-stack e-commerce warehouse simulation where autonomous robots pick and pack orders, using WebSockets to stream order and robot state updates in real time.",
      "Implemented A* pathfinding, collision avoidance and a batch-greedy scheduling algorithm that assigns orders to the nearest available robot, reducing average fulfillment time by 15.7% compared with a FIFO baseline.",
      "Engineered reliable order processing with PostgreSQL transactions and idempotency keys to prevent overselling and duplicate orders, validated with 80+ automated tests running in GitHub Actions.",
    ],
  },
];

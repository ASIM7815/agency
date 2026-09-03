import type { LucideIcon } from "lucide-react";
import type { BrandName } from "@/lib/brand-icons";
import {
  Globe,
  Code2,
  BrainCircuit,
  PenTool,
  Smartphone,
  CloudCog,
  LineChart,
  Boxes,
  LayoutDashboard,
  Bot,
  GraduationCap,
  Stethoscope,
  ShoppingCart,
  CalendarCheck2,
  Workflow,
  UsersRound,
  Rocket,
  Layers,
  Database,
  Compass,
  Map,
  Ruler,
  Hammer,
  FlaskConical,
  Send,
  RefreshCw,
  Gauge,
  Cpu,
  Sparkles,
  Infinity as InfinityIcon,
} from "lucide-react";

export type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  blurb: string;
  items: string[];
};

export const services: Service[] = [
  {
    id: "web",
    icon: Globe,
    title: "Web Development",
    blurb:
      "Marketing sites and complex web apps engineered with modern frameworks — fast, accessible, and built to convert.",
    items: [
      "Business & corporate websites",
      "Landing & portfolio pages",
      "E-commerce experiences",
      "Custom web applications",
    ],
  },
  {
    id: "software",
    icon: Code2,
    title: "Software Development",
    blurb:
      "End-to-end product engineering for platforms, internal tooling, and business-critical systems that scale with you.",
    items: [
      "SaaS platforms",
      "Management systems",
      "Dashboards & internal tools",
      "Enterprise applications",
    ],
  },
  {
    id: "ai",
    icon: BrainCircuit,
    title: "AI Solutions",
    blurb:
      "Practical AI applied to real workflows — assistants, automation, and intelligence embedded into your product.",
    items: [
      "AI-powered applications",
      "Assistants & copilots",
      "Automation & integrations",
      "Intelligent analytics",
    ],
  },
  {
    id: "design",
    icon: PenTool,
    title: "UI/UX & Product Design",
    blurb:
      "Interfaces with intent — research-driven design systems and product experiences that feel inevitable.",
    items: [
      "UI & UX design",
      "Design systems",
      "Product interfaces",
      "Responsive experiences",
    ],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Applications",
    blurb:
      "Native-feeling mobile products for Android, iOS, and cross-platform — from first prototype to store release.",
    items: [
      "Android applications",
      "iOS applications",
      "Cross-platform applications",
      "App-to-API integration",
    ],
  },
  {
    id: "cloud",
    icon: CloudCog,
    title: "Cloud & Deployment",
    blurb:
      "Infrastructure that holds up: deployment pipelines, databases, monitoring, and performance tuned to the last byte.",
    items: [
      "Cloud deployment & hosting",
      "Database setup & APIs",
      "Performance optimization",
      "Maintenance & monitoring",
    ],
  },
];

export type Solution = {
  id: string;
  icon: LucideIcon;
  title: string;
  type: string;
  blurb: string;
  stack: string[];
};

export const solutions: Solution[] = [
  {
    id: "crm",
    icon: UsersRound,
    title: "CRM Platform",
    type: "Sales & relationships",
    blurb:
      "Pipelines, contact histories, and automations that give every team member one truthful view of the customer.",
    stack: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: "erp",
    icon: Boxes,
    title: "ERP System",
    type: "Operations",
    blurb:
      "Inventory, orders, procurement, and finance unified in a single operational backbone for the business.",
    stack: ["Next.js", "Python", "PostgreSQL"],
  },
  {
    id: "analytics",
    icon: LineChart,
    title: "Analytics Dashboard",
    type: "Data & insights",
    blurb:
      "Real-time dashboards that turn raw operational data into decisions — filters, exports, and alerts included.",
    stack: ["TypeScript", "ClickHouse", "AWS"],
  },
  {
    id: "ai-platform",
    icon: Bot,
    title: "AI Assistant Platform",
    type: "Artificial intelligence",
    blurb:
      "Domain-tuned assistants with retrieval, memory, and human handoff — deployed inside your existing workflow.",
    stack: ["Python", "LLM APIs", "Redis"],
  },
  {
    id: "edtech",
    icon: GraduationCap,
    title: "Education Platform",
    type: "Learning",
    blurb:
      "Course delivery, progress tracking, assessments, and live sessions for institutions and independent educators.",
    stack: ["Next.js", "PostgreSQL", "S3"],
  },
  {
    id: "health",
    icon: Stethoscope,
    title: "Healthcare Software",
    type: "Health & care",
    blurb:
      "Secure patient portals, appointment workflows, and records systems designed around compliance from day one.",
    stack: ["React", "Node.js", "FHIR APIs"],
  },
  {
    id: "commerce",
    icon: ShoppingCart,
    title: "E-commerce System",
    type: "Commerce",
    blurb:
      "Storefronts, checkout flows, payment integration, and inventory — engineered for conversion and speed.",
    stack: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    id: "booking",
    icon: CalendarCheck2,
    title: "Booking Platform",
    type: "Scheduling",
    blurb:
      "Availability engines, calendar sync, payments, and smart reminders — whether rooms, seats, or appointments.",
    stack: ["TypeScript", "Node.js", "Redis"],
  },
  {
    id: "automation",
    icon: Workflow,
    title: "Workflow Automation",
    type: "Productivity",
    blurb:
      "Custom automation layers that connect your tools, remove repetitive work, and enforce process consistency.",
    stack: ["Node.js", "Webhooks", "Queues"],
  },
  {
    id: "portal",
    icon: LayoutDashboard,
    title: "Customer Portal",
    type: "Self-service",
    blurb:
      "White-label portals where customers manage accounts, track orders, open tickets, and find answers themselves.",
    stack: ["React", "REST APIs", "Auth"],
  },
  {
    id: "saas",
    icon: Layers,
    title: "SaaS Product",
    type: "Multi-tenant",
    blurb:
      "Subscription-ready products: billing, teams, roles, and usage analytics baked into the architecture.",
    stack: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    id: "enterprise",
    icon: Database,
    title: "Enterprise Software",
    type: "Custom systems",
    blurb:
      "Mission-critical applications for complex environments — designed for security, auditability, and scale.",
    stack: ["Java/Node", "PostgreSQL", "Kubernetes"],
  },
];

export type ProcessStep = {
  n: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  detail: string[];
};

export const processSteps: ProcessStep[] = [
  {
    n: "01",
    icon: Compass,
    title: "Discover",
    desc: "We map the idea, the business context, the users, and the objectives before a single screen is designed.",
    detail: ["Stakeholder workshops", "User & market research", "Success criteria"],
  },
  {
    n: "02",
    icon: Map,
    title: "Strategize",
    desc: "Product architecture, technology choices, and experience strategy — decided deliberately, not by default.",
    detail: ["Technical architecture", "Stack selection", "Scope & roadmap"],
  },
  {
    n: "03",
    icon: Ruler,
    title: "Design",
    desc: "Interfaces and flows are prototyped, tested, and refined into a system — not a collection of pages.",
    detail: ["UX flows & wireframes", "Visual design", "Interactive prototypes"],
  },
  {
    n: "04",
    icon: Hammer,
    title: "Build",
    desc: "Sprints of modern, tested, well-structured code. We build in the open, so progress is never a mystery.",
    detail: ["Agile sprints", "Continuous integration", "Weekly demos"],
  },
  {
    n: "05",
    icon: FlaskConical,
    title: "Test",
    desc: "Performance, usability, security, and reliability are checked continuously — not as an afterthought.",
    detail: ["Automated tests", "Security review", "Performance audits"],
  },
  {
    n: "06",
    icon: Send,
    title: "Launch",
    desc: "We deploy, monitor, and stabilize. Your product goes live with the infrastructure to handle real users.",
    detail: ["Zero-downtime deploy", "Monitoring & alerts", "Launch support"],
  },
  {
    n: "07",
    icon: RefreshCw,
    title: "Evolve",
    desc: "Products are living systems. We keep improving, maintaining, and scaling based on how users behave.",
    detail: ["Iteration roadmap", "Maintenance", "Scale & optimization"],
  },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export const features: Feature[] = [
  {
    icon: Rocket,
    title: "Product-focused development",
    text: "We don't build pages. We build complete digital products — designed, engineered, and operated as systems.",
  },
  {
    icon: Cpu,
    title: "Modern technology",
    text: "Current frameworks, cloud infrastructure, APIs, and AI capabilities — chosen for your problem, not our comfort.",
  },
  {
    icon: Gauge,
    title: "Performance-first",
    text: "Speed and scalability are engineered in from the first commit, then measured and tuned through launch and beyond.",
  },
  {
    icon: Boxes,
    title: "Custom solutions",
    text: "No repackaged templates. Every solution is designed around your actual requirements and workflows.",
  },
  {
    icon: InfinityIcon,
    title: "End-to-end delivery",
    text: "From first sketch to deployment and iteration — one accountable team across design, engineering, and cloud.",
  },
  {
    icon: Sparkles,
    title: "AI-enabled development",
    text: "Where it genuinely helps, we integrate AI into your product and our process — assistants, automation, analytics.",
  },
];

export const techTiers: { group: string; note: string; items: { name: string; icon?: BrandName }[] }[] = [
  {
    group: "Frontend",
    note: "fast, accessible interfaces",
    items: [
      { name: "Next.js", icon: "nextdotjs" },
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "React Native", icon: "react" },
    ],
  },
  {
    group: "Backend",
    note: "APIs & data, done properly",
    items: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Python", icon: "python" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "REST APIs", icon: "graphql" },
    ],
  },
  {
    group: "Cloud & Ops",
    note: "deployments that don't scare you",
    items: [
      { name: "AWS", icon: "amazonwebservices" },
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "Cloudflare", icon: "cloudflare" },
      { name: "Git / CI-CD", icon: "git" },
    ],
  },
  {
    group: "Intelligence",
    note: "AI where it earns its place",
    items: [
      { name: "LLM APIs", icon: "openai" },
      { name: "RAG pipelines", icon: "openai" },
      { name: "Embeddings", icon: "openai" },
      { name: "Redis", icon: "redis" },
      { name: "Automation", icon: "github" },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  tag: string;
  blurb: string;
  stack: string[];
  screen: "fleet" | "commerce" | "health" | "board" | "drone" | "pharma" | "watch" | "wallet" | "console" | "kiosk" | "loom" | "city";
};

/* Concept projects — NONAME showcase explorations. Not client work. */
export const projects: Project[] = [
  {
    id: "p01",
    title: "Transit Operations Hub",
    category: "Fleet Management Platform",
    tag: "Logistics · SaaS",
    blurb:
      "A live command console for a logistics operator — vehicle tracking, dispatch queues, and delay prediction in one interface.",
    stack: ["Next.js", "PostgreSQL", "Map APIs"],
    screen: "fleet",
  },
  {
    id: "p02",
    title: "Aurelia Commerce",
    category: "E-commerce Storefront",
    tag: "Retail · Web",
    blurb:
      "A conversion-first shopping experience with editorial product storytelling and a checkout flow tuned for speed.",
    stack: ["React", "Stripe", "Headless CMS"],
    screen: "commerce",
  },
  {
    id: "p03",
    title: "Careline Clinical",
    category: "Patient Care Portal",
    tag: "Health · Product",
    blurb:
      "Secure appointment, records, and messaging workflows for clinics — built around compliance-first architecture.",
    stack: ["TypeScript", "Node.js", "FHIR APIs"],
    screen: "health",
  },
  {
    id: "p04",
    title: "Kiln Analytics",
    category: "Analytics Workspace",
    tag: "Data · B2B",
    blurb:
      "A boardroom-grade analytics product: dimensional reporting, anomaly alerts, and shareable executive views.",
    stack: ["Next.js", "ClickHouse", "AWS"],
    screen: "board",
  },
  {
    id: "p05",
    title: "Aeroview",
    category: "AI Inspection Platform",
    tag: "AI · Computer Vision",
    blurb:
      "Drone-capture analysis with AI-assisted defect detection for infrastructure survey teams in the field.",
    stack: ["Python", "Vision models", "Map APIs"],
    screen: "drone",
  },
  {
    id: "p06",
    title: "Pulse Biotech",
    category: "Research Operations",
    tag: "Science · Internal",
    blurb:
      "Laboratory operations software connecting inventory, protocols, and compliance records for research teams.",
    stack: ["React", "Python", "PostgreSQL"],
    screen: "pharma",
  },
];



export type ShowcaseScreen =
  | "fleet" | "commerce" | "health" | "board" | "drone" | "pharma"
  | "watch" | "wallet" | "console" | "kiosk" | "loom" | "city";

export type ScreenData = {
  kind: ShowcaseScreen;
  title: string;
  meta: string;
  accent: "acid" | "violet" | "aqua" | "ember";
  body: string[];
  bars?: number[];
};

export const screens: ScreenData[] = [
  {
    kind: "fleet",
    title: "Ops Dashboard",
    meta: "dispatch · live",
    accent: "acid",
    body: [
      "Track your entire fleet in real-time",
      "// 214 vehicles currently active",
      "42 en route · 9 loading · 2 idle",
      "All deliveries on time today",
      "Reassign vehicles with one click",
      "Smart predictions prevent delays",
    ],
    bars: [72, 88, 55, 95, 68, 81],
  },
  {
    kind: "commerce",
    title: "Storefront",
    meta: "catalogue · live",
    accent: "violet",
    body: [
      "Beautiful online store for your products",
      "// 3 items in cart · $214.00 · free shipping",
      "Popular item just restocked",
      "All sizes and colors available",
      "Secure checkout in seconds",
      "Sales up 18% this week",
    ],
    bars: [60, 76, 90, 54, 82, 70],
  },
  {
    kind: "health",
    title: "Patient View",
    meta: "records · secure",
    accent: "aqua",
    body: [
      "Access patient records securely",
      "// next appointment · Thu 10:30",
      "Updated consent forms on file",
      "Health vitals looking stable",
      "Automatic appointment reminders",
      "All data encrypted and compliant",
    ],
    bars: [44, 66, 78, 55, 90, 62],
  },
  {
    kind: "board",
    title: "Growth Board",
    meta: "analytics · realtime",
    accent: "ember",
    body: [
      "Track your business growth in real-time",
      "// revenue metrics this quarter",
      "Revenue growing · customer retention high",
      "Projected revenue: $142k next quarter",
      "Customer signups increased 34%",
      "Export reports for presentations",
    ],
    bars: [50, 63, 71, 84, 92, 100],
  },
  {
    kind: "drone",
    title: "Inspect View",
    meta: "vision · ai",
    accent: "violet",
    body: [
      "AI-powered inspection system",
      "// 1,284 images captured · 96% coverage",
      "Crack detected with high accuracy",
      "Thermal analysis shows no issues",
      "Report sent to field team",
      "System learns from each inspection",
    ],
    bars: [58, 72, 64, 90, 77, 85],
  },
  {
    kind: "pharma",
    title: "Lab Ops",
    meta: "research · compliant",
    accent: "acid",
    body: [
      "Manage lab inventory & protocols",
      "// 214 samples · expires 06/2027",
      "Research protocol approved",
      "Temperature monitoring all day",
      "Next compliance audit in 18 days",
      "Archive samples to cold storage",
    ],
    bars: [80, 62, 75, 58, 92, 66],
  },
  {
    kind: "watch",
    title: "Wearable Sync",
    meta: "health · iot",
    accent: "aqua",
    body: [
      "Sync health data from wearables",
      "// heart rate 61bpm · hrv healthy",
      "Sleep quality score: 86/100",
      "One workout planned today",
      "Your recovery is excellent",
      "Export weekly health summary",
    ],
    bars: [40, 70, 55, 88, 63, 91],
  },
  {
    kind: "wallet",
    title: "Money Flow",
    meta: "fintech · secure",
    accent: "ember",
    body: [
      "Secure payment and money management",
      "// $420.00 payment approved",
      "Balance $12,840 · 68% of budget used",
      "Tip: subscriptions cost $34 more/month",
      "Freeze card for travel safety",
      "Send receipt to accountant",
    ],
    bars: [90, 74, 52, 68, 81, 59],
  },
  {
    kind: "console",
    title: "Deploy Console",
    meta: "cloud · live",
    accent: "acid",
    body: [
      "Deploy your app to production instantly",
      "✓ Built in 2.4s · optimized assets",
      "✓ Database updated successfully",
      "✓ Health checks passed in 3 regions",
      "✓ Content delivered to edge network",
      "Live with zero downtime",
    ],
    bars: [62, 55, 88, 92, 70, 100],
  },
  {
    kind: "kiosk",
    title: "Venue Terminal",
    meta: "booking · public",
    accent: "violet",
    body: [
      "Self-service check-in terminal",
      "// 2 guests · hall B · row 12",
      "Check-in complete, printing passes",
      "Next show starts in 26 minutes",
      "Staff assistance available",
      "Queue is clear, no wait time",
    ],
    bars: [34, 58, 70, 84, 46, 62],
  },
  {
    kind: "loom",
    title: "Mill Control",
    meta: "manufacturing · iot",
    accent: "ember",
    body: [
      "Monitor manufacturing equipment",
      "// machine tension optimal",
      "Production quality at 96.2%",
      "Maintenance needed in 9 days",
      "Batch quality check required",
      "Supervisor has been notified",
    ],
    bars: [85, 70, 93, 61, 77, 88],
  },
  {
    kind: "city",
    title: "City OS",
    meta: "urban · data",
    accent: "aqua",
    body: [
      "Smart city management system",
      "// solar power exceeding demand",
      "Public transit 78% full at peak",
      "Water pressure normal citywide",
      "3 incidents auto-routed to crews",
      "Monthly report for city council",
    ],
    bars: [48, 61, 83, 57, 90, 72],
  },
];

export const getScreen = (kind: ShowcaseScreen) =>
  screens.find((s) => s.kind === kind) ?? screens[0];

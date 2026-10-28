export const NavLinks = [
  { label: "Services", href: "#services" },
  { label: "Capabilities", href: "#projects" },
  { label: "About", href: "#hero" },
  { label: "Contact", href: "#client-stories-contact" },
];

export const SERVICES = [
  {
    id: 'web-software',
    index: '01',
    category: 'PLATFORMS',
    icon: 'terminal',
    title: 'Web & Software Development',
    description:
      'SaaS platforms, complex web portals, and resilient enterprise applications built with Next.js, React, Node.js, and high-throughput APIs.',
    stack: 'Next.js • TypeScript • Node',
    accent: 'blue',
  },
  {
    id: 'ai-ml',
    index: '02',
    category: 'INTELLIGENCE',
    icon: 'neurology',
    title: 'AI & Machine Learning',
    description:
      'AI-powered applications, copilots, RAG knowledge pipelines, vector databases, and intelligent workflow automation powered by frontier LLMs.',
    stack: 'OpenAI • LangChain • Pinecone',
    accent: 'teal',
  },
  {
    id: 'mobile',
    index: '03',
    category: 'MOBILITY',
    icon: 'stay_current_portrait',
    title: 'Mobile App Development',
    description:
      'Cross-platform Flutter and React Native solutions with 60fps animations, native hardware access, biometric security, and offline synchronicity.',
    stack: 'Flutter • React Native • iOS',
    accent: 'indigo',
  },
  {
    id: 'cloud',
    index: '04',
    category: 'INFRASTRUCTURE',
    icon: 'cloud_sync',
    title: 'Cloud Architecture & DevOps',
    description:
      'AWS, GCP, and Azure cloud foundations configured with Terraform IaC, automated zero-downtime CI/CD pipelines, and Kubernetes orchestration.',
    stack: 'AWS • Kubernetes • Terraform',
    accent: 'sky',
  },
  {
    id: 'design-qa',
    index: '05',
    category: 'EXPERIENCE & QA',
    icon: 'palette',
    title: 'UI/UX Design & Quality Engineering',
    description:
      'Design systems, high-fidelity interactive Figma prototypes, WCAG accessibility validation, paired with automated end-to-end Cypress QA suites.',
    stack: 'Figma • Cypress • WCAG AA',
    accent: 'violet',
  },
  {
    id: 'analytics',
    index: '06',
    category: 'TELEMETRY & BI',
    icon: 'query_stats',
    title: 'Executive Dashboards & Analytics',
    description:
      'Sub-second data visualization canvases with ClickHouse, Apache ECharts, custom financial reconciliation tools, and drill-down KPI metrics.',
    stack: 'ECharts • ClickHouse • D3',
    accent: 'amber',
  },
  {
    id: 'ecommerce',
    index: '07',
    category: 'MONETIZATION',
    icon: 'shopping_cart_checkout',
    title: 'E-Commerce & Subscription Platforms',
    description:
      'Scalable transactional storefronts, multi-currency Stripe billing integration, headless Shopify builds, and automated checkout optimizations.',
    stack: 'Stripe Connect • Medusa • Next.js',
    accent: 'emerald',
  },
  {
    id: 'teams',
    index: '08',
    category: 'AUGMENTATION',
    icon: 'groups_3',
    title: 'Dedicated Development Teams',
    description:
      'Elite senior frontend, backend, and DevOps engineers seamlessly embedded into your team to multiply sprint capacity and velocity.',
    stack: 'Agile Pods • Timezone-Aligned',
    accent: 'rose',
  },
]

export const Accents = {
  blue: {
    iconWrap: 'border-blue-100 bg-blue-50 text-blue-600 group-hover:bg-blue-600',
    arrowWrap: 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600',
    label: 'text-blue-600',
    title: 'group-hover:text-blue-600',
    border: 'hover:border-blue-500',
    footer: 'group-hover:text-blue-600',
  },
  teal: {
    iconWrap: 'border-cyan-100 bg-cyan-50 text-brand-teal group-hover:bg-brand-teal',
    arrowWrap: 'bg-slate-100 text-slate-500 group-hover:bg-cyan-50 group-hover:text-brand-teal',
    label: 'text-brand-teal',
    title: 'group-hover:text-brand-teal',
    border: 'hover:border-brand-teal',
    footer: 'group-hover:text-brand-teal',
  },
  indigo: {
    iconWrap: 'border-indigo-100 bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600',
    arrowWrap: 'bg-slate-100 text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600',
    label: 'text-indigo-600',
    title: 'group-hover:text-indigo-600',
    border: 'hover:border-indigo-500',
    footer: 'group-hover:text-indigo-600',
  },
  sky: {
    iconWrap: 'border-sky-100 bg-sky-50 text-sky-600 group-hover:bg-sky-600',
    arrowWrap: 'bg-slate-100 text-slate-500 group-hover:bg-sky-50 group-hover:text-sky-600',
    label: 'text-sky-600',
    title: 'group-hover:text-sky-600',
    border: 'hover:border-sky-500',
    footer: 'group-hover:text-sky-600',
  },
  violet: {
    iconWrap: 'border-violet-100 bg-violet-50 text-violet-600 group-hover:bg-violet-600',
    arrowWrap: 'bg-slate-100 text-slate-500 group-hover:bg-violet-50 group-hover:text-violet-600',
    label: 'text-violet-600',
    title: 'group-hover:text-violet-600',
    border: 'hover:border-violet-500',
    footer: 'group-hover:text-violet-600',
  },
  amber: {
    iconWrap: 'border-amber-100 bg-amber-50 text-amber-600 group-hover:bg-amber-600',
    arrowWrap: 'bg-slate-100 text-slate-500 group-hover:bg-amber-50 group-hover:text-amber-600',
    label: 'text-amber-600',
    title: 'group-hover:text-amber-600',
    border: 'hover:border-amber-500',
    footer: 'group-hover:text-amber-600',
  },
  emerald: {
    iconWrap: 'border-emerald-100 bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600',
    arrowWrap: 'bg-slate-100 text-slate-500 group-hover:bg-emerald-50 group-hover:text-emerald-600',
    label: 'text-emerald-600',
    title: 'group-hover:text-emerald-600',
    border: 'hover:border-emerald-500',
    footer: 'group-hover:text-emerald-600',
  },
  rose: {
    iconWrap: 'border-rose-100 bg-rose-50 text-rose-600 group-hover:bg-rose-600',
    arrowWrap: 'bg-slate-100 text-slate-500 group-hover:bg-rose-50 group-hover:text-rose-600',
    label: 'text-rose-600',
    title: 'group-hover:text-rose-600',
    border: 'hover:border-rose-500',
    footer: 'group-hover:text-rose-600',
  },
}

export const TESTIMONIALS = [
  {
    id: 'uday-jain',
    quote:
      'Codeation has been spectacular in every way possible. We hired this agency for multiple projects and they have been able to justify themselves at every point. There were no delays in communication and they had these complete processes for every project that made it very easy to coordinate.',
    name: 'Uday Jain',
    role: 'Co-Founder, Adi Shree Udyog',
  },
  {
    id: 'sujit-thakur',
    quote:
      "We connected with Codeation after a long time of searching for a company that can help us with a customized dashboard solution. We are an education company and wanted a customized dashboard solution to set up the complete process and make the in-house communication and operational work easy. They work very professionally and within deadlines.",
    name: 'Sujit Thakur',
    role: 'CEO, Deuglo',
  },
  {
    id: 'meng',
    quote:
      'We decided to work with Codeation after having a detailed brainstorming session with the Codeation team. They were very detailed and provided us with various insightful feedback for our project and we are more than happy to choose them. Their hands-on work experience and ability to tailor our dashboard according to our specific needs have been exemplary.',
    name: 'Meng',
    role: 'Product Lead',
  },
  {
    id: 'varun-kumar',
    quote:
      'I got a reference for Rishabh from one of my clients. He is a super amazing guy and knows what he is working at. We had various meetings and detailed calls on the app that I wanted them to make. The complete team is very apt in their work. The feedback was always taken on board and implemented without any hesitation.',
    name: 'Varun Kumar',
    role: 'CEO & Founder, VK Soft Solutions',
  },
]

export const PROJECTS = [
  {
    name: "CodeBook",
    tag: "01 / EDTECH",
    tone: "blue",
    image:
      "projects/image 1.jpg",
    imageAlt: "CodeBook Platform Interface",
    description:
      "Comprehensive campus management ecosystem orchestrating grading, class schedules, digital IDs, and real-time student communications.",
    tech: ["React", "Flutter", "Node"],
    detail: {
      title: "CodeBook Education Ecosystem",
      subBrand: "Higher Education Digital Consortium",
      category: "EDTECH & CAMPUS MANAGEMENT",
      metrics: [
        { value: "120K+", label: "Daily Active Students" },
        { value: "99.98%", label: "Delivery Uptime" },
        { value: "< 180ms", label: "Sync Response Time" },
      ],
      narrative:
        "Campuses relied on fragmented, legacy enterprise tools with frequent peak-registration outages. We built an offline-first mobile and web application supporting student schedules, transcripts, automated grade notifications, and campus-wide communications.",
      stack: ["React", "Flutter", "Node.js", "PostgreSQL", "Docker", "Redis"],
      deliverables: [
        "Real-time interactive course schedule builder & waitlist engine",
        "Biometric student digital ID & campus NFC access integration",
        "Automated push notifications for grade releases and faculty announcements",
        "Cross-platform synchronization with zero-data-loss offline caching",
      ],
    },
  },
  {
    name: "Anima AI",
    tag: "02 / AI TELEMETRY",
    tone: "cyan",
    image:
      "projects/image 2.jpg",
    imageAlt: "Anima AI Observability Dashboard",
    description:
      "Enterprise-grade observability and intelligent model telemetry engine delivering sub-millisecond anomaly detection and automated remediation.",
    tech: ["PyTorch", "Next.js", "ClickHouse"],
    detail: {
      title: "Anima AI Telemetry Engine",
      subBrand: "Frontier Machine Learning Lab",
      category: "AI OBSERVABILITY & INTELLIGENCE",
      metrics: [
        { value: "4.2M/s", label: "Telemetry Ingestion Rate" },
        { value: "99.99%", label: "SLA Guaranteed" },
        { value: "45ms", label: "P95 Query Latency" },
      ],
      narrative:
        "Machine learning teams lacked unified real-time insights into model drift, prompt latency, token spend, and production inference anomalies across multi-cloud deployments. Codeation built a sub-millisecond telemetry ingestion pipeline processing billions of events daily.",
      stack: ["Python", "PyTorch", "Next.js", "ClickHouse", "gRPC", "Kubernetes"],
      deliverables: [
        "Sub-millisecond event streaming & OLAP time-series aggregation",
        "Automated model drift detection & threshold-triggered retraining alerts",
        "Token expense & compute cost attribution dashboard per department",
        "Granular audit trails and latency decomposition graphs",
      ],
    },
  },
  {
    name: "Vision Care Direct",
    tag: "03 / HEALTHCARE TECH",
    tone: "sky",
    image:
      "projects/image 3.jpg",
    imageAlt: "Vision Care Direct Enterprise Portal",
    description:
      "Automated national vision healthcare plans provider network, multi-state benefit validation, and instant EDI claim reconciliation.",
    tech: [".NET Core", "Azure", "Stripe"],
    detail: {
      title: "Vision Care Direct Claims Portal",
      subBrand: "National Healthcare Benefit Network",
      category: "HEALTHCARE & BENEFIT TECH",
      metrics: [
        { value: "< 1.5s", label: "Instant Claim Settlement" },
        { value: "94%", label: "Manual Effort Reduction" },
        { value: "4.9★", label: "Doctor & Clinic Rating" },
      ],
      narrative:
        "Manual vision benefit adjudication required up to two weeks per claim with tedious paper verification. We engineered a nationwide cloud portal enabling clinics to verify patient eligibility in real-time, generate digital claims, and settle provider balances instantaneously.",
      stack: [".NET Core", "Azure Cloud", "Stripe Connect", "TypeScript", "SQL Server"],
      deliverables: [
        "Real-time patient vision benefit verification across 24 states",
        "Automated EDI claims adjudication with zero paperwork bottlenecks",
        "Stripe automated provider payouts with reconciliation reporting",
        "HIPAA-compliant document storage and audit event logging",
      ],
    },
  },
  {
    name: "FinTrack Enterprise",
    tag: "04 / FINTECH & WEALTH",
    tone: "amber",
    image:
      "projects/image 1.jpg",
    imageAlt: "FinTrack Wealth App Mockup",
    description:
      "High-frequency portfolio auditing, cross-border banking ledger synchronization, and real-time SEC regulatory compliance reporting.",
    tech: ["Go", "React", "ECharts"],
    detail: {
      title: "FinTrack Enterprise Platform",
      subBrand: "Apex Global Wealth Management",
      category: "WEB & ENTERPRISE FINTECH",
      metrics: [
        { value: "$2.4B+", label: "Daily Processing Volume" },
        { value: "42ms", label: "Average Execution Latency" },
        { value: "+180%", label: "Client User Retention" },
      ],
      narrative:
        "Multinational wealth managers struggled with delayed multi-currency reconciliation across dozens of custodians. We engineered a high-throughput financial cockpit with real-time portfolio maps, hedging analytics, and SOC2 audit-compliant ledger logs.",
      stack: ["Next.js", "TypeScript", "Go / Microservices", "TailwindCSS", "Redis", "Kafka"],
      deliverables: [
        "Ultra-low latency institutional trading cockpit",
        "Real-time asset telemetry & WebSocket notification engine",
        "SOC2-compliant security & encrypted audit trail",
        "Native mobile companion for iOS and Android",
      ],
    },
  },
  {
    name: "Veridian Urban",
    tag: "05 / SMART URBAN IOT",
    tone: "emerald",
    image:
      "projects/image 2.jpg",
    imageAlt: "Veridian Urban IoT Platform",
    description:
      "Smart city infrastructure monitoring suite predicting grid power fluctuations and public transport routing via machine learning models.",
    tech: ["TypeScript", "OpenAI", "AWS"],
    detail: {
      title: "Veridian Urban Smart Systems",
      subBrand: "Municipal Infrastructure Initiative",
      category: "SMART URBAN IOT & CLEAN ENERGY",
      metrics: [
        { value: "-34%", label: "Carbon Footprint Reduction" },
        { value: "25K+", label: "Connected Sensor Nodes" },
        { value: "99.95%", label: "Grid Uptime Index" },
      ],
      narrative:
        "Urban electrical infrastructure suffered from uncoordinated power distribution peaks, traffic congestion bottlenecks, and lack of predictive carbon analytics. We deployed an edge sensor telemetry platform to balance electrical sub-stations dynamically.",
      stack: ["TypeScript", "OpenAI API", "AWS IoT Core", "FastAPI", "Mapbox GL"],
      deliverables: [
        "Real-time geographic IoT sensor topology with sub-second streaming",
        "Predictive power load balancing algorithm with carbon optimization",
        "Emergency failover dispatch routing for field engineering crews",
        "Public municipal dashboard with open carbon transparency telemetry",
      ],
    },
  },
  {
    name: "MaxMode Commerce",
    tag: "06 / HEADLESS COMMERCE",
    tone: "violet",
    image:
      "projects/image 3.jpg",
    imageAlt: "MaxMode Headless Commerce",
    description:
      "Sub-second headless recurring subscription checkout engine with personalized upsells and localized global checkout flows.",
    tech: ["Next.js", "Liquid", "Stripe"],
    detail: {
      title: "MaxMode Headless Commerce",
      subBrand: "Omnichannel Lifestyle Brand",
      category: "HEADLESS COMMERCE & RETAIL",
      metrics: [
        { value: "+42%", label: "Mobile Conversion Lift" },
        { value: "0.8s", label: "Average Page Load Time" },
        { value: "850K+", label: "Active Recurring Subscribers" },
      ],
      narrative:
        "A rapidly scaling direct-to-consumer brand was throttled by rigid monolithic theme structures and poor global checkout conversion rates on mobile devices. We crafted an edge-rendered headless Next.js frontend with personalized checkout upsells.",
      stack: ["Next.js", "Liquid", "Shopify Storefront API", "Stripe Connect", "Tailwind CSS"],
      deliverables: [
        "Sub-second edge rendered storefront with instant product search",
        "Dynamic multi-currency recurring subscription management portal",
        "Frictionless 1-click checkout extensions tailored for mobile",
        "Integrated warehouse fulfillment & automated inventory hooks",
      ],
    },
  },
];

const PROJECT_TONES = {
  blue: {
    border: "hover:border-blue-500/60",
    glow: "bg-blue-600/10 group-hover:bg-blue-600/25",
    title: "group-hover:text-[#47d6ff]",
    badge: "bg-blue-600/80 text-white",
    button: "group-hover:bg-blue-600",
  },
  cyan: {
    border: "hover:border-cyan-400/60",
    glow: "bg-cyan-500/10 group-hover:bg-cyan-500/25",
    title: "group-hover:text-[#d2ff37]",
    badge: "bg-[#00677f]/80 text-[#d2ff37]",
    button: "group-hover:bg-[#00677f]",
  },
  sky: {
    border: "hover:border-blue-400/60",
    glow: "bg-blue-500/10 group-hover:bg-blue-500/25",
    title: "group-hover:text-blue-300",
    badge: "bg-blue-600/80 text-white",
    button: "group-hover:bg-blue-600",
  },
  amber: {
    border: "hover:border-amber-400/60",
    glow: "bg-amber-500/10 group-hover:bg-amber-500/25",
    title: "group-hover:text-amber-300",
    badge: "bg-amber-600/80 text-white",
    button: "group-hover:bg-amber-600",
  },
  emerald: {
    border: "hover:border-emerald-400/60",
    glow: "bg-emerald-500/10 group-hover:bg-emerald-500/25",
    title: "group-hover:text-emerald-300",
    badge: "bg-emerald-600/80 text-white",
    button: "group-hover:bg-emerald-600",
  },
  violet: {
    border: "hover:border-violet-400/60",
    glow: "bg-violet-500/10 group-hover:bg-violet-500/25",
    title: "group-hover:text-violet-300",
    badge: "bg-violet-600/80 text-white",
    button: "group-hover:bg-violet-600",
  },
};

export { PROJECT_TONES };
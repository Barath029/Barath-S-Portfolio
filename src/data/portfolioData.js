export const portfolioData = {
  profile: {
    name: "BARATH S",
    role: "AI & Machine Learning Engineer | Full-Stack Systems Developer",
    tagline: "Engineering intelligent block-planning algorithms, constraint schedulers, and fault-tolerant software with AI-assisted workflows.",
    institution: "Rajalakshmi Institute of Technology, Chennai",
    degree: "B.E. Computer Science Engineering (Artificial Intelligence and Machine Learning)",
    cgpa: "8.22",
    batch: "2024 – 2028",
    location: "Chennai, Tamil Nadu, India",
    status: "Open for AI / Full-Stack / QA Automation Roles",
    phone: "+91-63837 04886",
    rawPhone: "916383704886",
    email: "barathofficial176@gmail.com",
    github: "https://github.com/Barath029",
    linkedin: "https://www.linkedin.com/in/barath-s-52910431a/",
    instagram: "https://www.instagram.com/b_a_r_a_t_h_02/?hl=en",
    whatsapp: "https://wa.me/916383704886",
    stats: [
      { label: "B.E. AIML CGPA", value: "8.22", highlight: "#38BDF8" },
      { label: "Hackathons Conducted", value: "10+", highlight: "#818CF8" },
      { label: "TechFest Events Led", value: "10+", highlight: "#38BDF8" },
      { label: "AI SaaS Beta Tested", value: "3 Live", highlight: "#818CF8" }
    ]
  },

  about: {
    bio: [
      "I am an Artificial Intelligence & Machine Learning undergraduate at Rajalakshmi Institute of Technology, passionate about solving high-complexity constraint problems and engineering autonomous, AI-driven software architectures.",
      "My work spans from developing intelligent slot allocation engines and constraint optimization algorithms to leading campus technical initiatives as Vice President of TechSpark and testing cutting-edge AI SaaS products."
    ],
    highlights: [
      "Specialized in Optimization & Scheduling Algorithms with conflict-free constraint resolution.",
      "Hands-on experience in AI-Assisted Development, Prompt Engineering, and Model Output Validation.",
      "Practical experience in Beta Testing, Manual & Automation Testing, and REST APIs.",
      "Leadership experience as Vice President of TechSpark; coordinated 10+ hackathons and college techfest events."
    ],
    education: [
      {
        institution: "Rajalakshmi Institute of Technology",
        degree: "B.E. Computer Science Engineering (AI & ML)",
        period: "09/2024 – 05/2028",
        location: "Chennai, Tamil Nadu",
        score: "8.22",
        scoreMax: "/ 10.0",
        scoreType: "CGPA",
        percentage: 82.2,
        honor: "First Class Distinction",
        status: "Currently Pursuing",
        badge: "Undergraduate Degree"
      },
      {
        institution: "Kongu Kalvi Nilayam",
        degree: "Higher Secondary Certificate (Class 12)",
        period: "2023 – 2024",
        location: "Erode, Tamil Nadu",
        score: "92.83",
        scoreMax: "%",
        scoreType: "PERCENTAGE",
        percentage: 92.83,
        honor: "State Distinction",
        status: "Completed",
        badge: "Higher Secondary"
      },
      {
        institution: "Kongu Kalvi Nilayam",
        degree: "Secondary School Leaving Certificate (Class 10)",
        period: "2021 – 2022",
        location: "Erode, Tamil Nadu",
        score: "95.40",
        scoreMax: "%",
        scoreType: "PERCENTAGE",
        percentage: 95.40,
        honor: "Top Tier Elite Honor",
        status: "Completed",
        badge: "Secondary School"
      }
    ],
    currentFocus: {
      tagline: "Engineering intelligent constraint schedulers, full-stack web platforms, and automated QA verification pipelines.",
      areas: [
        {
          title: "Constraint Optimization Schedulers",
          detail: "Designing algorithmic engines (RailSphere & SmartEdu) for conflict-free railway track dispatch and institutional resource allocation."
        },
        {
          title: "Full-Stack Web Architectures",
          detail: "Building responsive, production-ready web platforms with React, Node.js, and cloud databases (MySQL, MongoDB, Supabase)."
        },
        {
          title: "QA Automation & Beta Testing",
          detail: "Conducting systematic beta testing, feature validation, and edge-case failure diagnosis across live SaaS products."
        }
      ],
      tags: ["Constraint Algorithms", "Full-Stack Dev", "Beta Testing", "AI-Assisted Coding"],
      status: "Active Engineering & Optimization"
    }
  },

  projects: [
    {
      id: "proj-1",
      title: "RIT Club & Centre of Excellence Allocation System",
      subtitle: "AI-Powered Institutional Slot Allocation Engine",
      tech: ["React.js", "Supabase", "PostgreSQL", "HTML5", "Tailwind CSS", "Vercel"],
      tag: "LIVE INSTITUTIONAL SYSTEM",
      liveUrl: "https://techspark-slots.vercel.app/login",
      summary: "Engineered and deployed an AI-powered slot allocation system in active production use at Rajalakshmi Institute of Technology, allowing engineering students to choose and reserve club and Centre of Excellence activities.",
      deliverables: [
        "Automated Conflict-Free Slot Booking: Allows engineering students to browse and reserve their preferred Club and CoE slots without schedule clashes.",
        "Real-Time Concurrent Quota Locks: Leverages Supabase live subscriptions and PostgreSQL row-level locks so seats never overbook during peak campus traffic.",
        "Faculty Attendance & Roster Panel: Provides coordinators with live student verification, department capacity tracking, and one-click enrollment exports.",
        "Lightweight Mobile-First Interface: Clean React architecture engineered for sub-second mobile loads, enabling fast student authentication during open enrollment windows."
      ]
    },
    {
      id: "proj-2",
      title: "Thirst Fresh – Cafe & Dessert Storefront",
      subtitle: "Full-Stack Brand Platform & WhatsApp POS Billing Engine",
      tech: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "WhatsApp API", "Vercel / CDN"],
      tag: "COMMERCIAL CLIENT LAUNCH",
      liveUrl: "https://www.thirstfresh.in/",
      summary: "Architected and delivered the official website and administrative billing platform for Thirst Fresh dessert & cafe storefront, featuring an interactive menu, franchise inquiry portal, and WhatsApp billing receipt delivery.",
      deliverables: [
        "Instant WhatsApp POS Invoicing: Replaces bulky POS hardware by generating order summaries and sending digital receipts straight to the customer's WhatsApp in one tap.",
        "Smart Caching & Fast Menu Load: Pre-caches high-resolution dessert & beverage imagery so the digital menu opens instantly even on slow mobile networks.",
        "Automated Franchise Lead Capture: Inquiry submissions are validated instantly on the frontend and routed straight to the business team for fast follow-ups.",
        "Component-Driven Modular Architecture: Built with reusable React and Tailwind modules, making it effortless to add seasonal flavors, new dessert items, and pricing updates."
      ]
    },
    {
      id: "proj-3",
      title: "RailSphere AI – Intelligent Railway Block Planning",
      subtitle: "Constraint-Driven Optimization for Railway Asset Scheduling",
      tech: ["Python", "Constraint Satisfaction (CSP)", "Optimization Algorithms", "SQL", "REST APIs"],
      tag: "RESEARCH & OPTIMIZATION",
      liveUrl: null,
      summary: "Developed an AI-driven constraint satisfaction engine designed to resolve complex multi-departmental railway maintenance conflicts into optimal, conflict-free possession blocks.",
      deliverables: [
        "Conflict-Free Track Block Scheduling: Uses constraint satisfaction algorithms to schedule track maintenance without overlapping, preventing costly train delays.",
        "Unified Multi-Department Windows: Combines separate maintenance requests from Track Civil, Electrical (TRD), and Signals (S&T) into one coordinated work block.",
        "Early Bottleneck Detection: Analyzes busy railway corridors hours ahead of time to suggest alternate maintenance slots so high-priority trains run on time.",
        "Visual Operational Timetable: Converts complicated spreadsheet requests into a clean, interactive Gantt chart that section controllers and station masters can read in seconds."
      ]
    }
  ],

  experience: [
    {
      id: "exp-1",
      role: "Software Tester (SaaS Product)",
      company: "Startup",
      period: "SaaS Beta Testing",
      badge: "LIVE PRODUCTS",
      accent: "#E18E7E",
      description: "Tested 3 AI-based SaaS products as a beta tester before launch; all are now live and in active demonstration.",
      points: [
        "Tested 3 AI-based SaaS products as a beta tester before launch; all are now live and in active demonstration.",
        "Performed functional and automation testing, identified bugs, and validated features against requirements.",
        "Applied logical thinking and problem solving to resolve complex system issues."
      ],
      skills: ["AI SaaS Testing", "Automation Testing", "Bug Identification", "Feature Validation", "Logical Problem Solving"]
    },
    {
      id: "exp-2",
      role: "Software Development Intern",
      company: "Startup",
      period: "Internship",
      badge: "B2C BILLING PLATFORM",
      accent: "#F2A99B",
      description: "Developed commercial software using AI-assisted tools to speed up coding, debugging, and delivery across client solutions.",
      points: [
        "Developed software using AI-assisted tools to speed up coding, debugging, and delivery.",
        "Built a B2C product with billing software for sales record management and sales analysis.",
        "Handled client communication from requirements to final handover and customer deployment.",
        "Generated leads and converted them into customers."
      ],
      skills: ["AI-Assisted Development", "B2C Product", "Billing Software", "Client Communication", "Deployment", "Lead Conversion"]
    }
  ],

  // Skills organized cleanly by category directly from resume without evaluations or arbitrary ratings
  skills: {
    categories: [
      {
        id: "ai-ml",
        title: "AI & Machine Learning",
        badge: "CORE SPECIALIZATION",
        skills: [
          "Machine Learning Fundamentals",
          "Prompt Engineering",
          "AI-Assisted Development",
          "Model Output Validation",
          "Optimization & Scheduling Algorithms"
        ]
      },
      {
        id: "languages",
        title: "Programming Languages",
        badge: "LANGUAGES",
        skills: ["Python", "SQL", "C", "C++", "Java"]
      },
      {
        id: "testing",
        title: "Testing & Automation",
        badge: "QA & TESTING",
        skills: [
          "Automation Testing",
          "Manual Testing",
          "Bug Reporting",
          "AI Beta Testing"
        ]
      },
      {
        id: "web-backend",
        title: "Web & Backend Development",
        badge: "FULL-STACK",
        skills: ["HTML5", "CSS3", "React.js", "Node.js", "Express.js", "REST APIs"]
      },
      {
        id: "databases",
        title: "Database Management",
        badge: "DATA STORES",
        skills: ["MySQL", "PostgreSQL", "MongoDB"]
      },
      {
        id: "tools",
        title: "Version Control & Tools",
        badge: "DEV TOOLING",
        skills: ["Git", "GitHub", "VS Code"]
      },
      {
        id: "professional",
        title: "Professional Skills",
        badge: "COLLABORATION & LEADERSHIP",
        skills: [
          "Team Leadership",
          "Project Management",
          "Client Handling",
          "Public Speaking",
          "Problem Solving",
          "Good Communication"
        ]
      }
    ]
  },

  // Leadership progression at TechSpark & Event Coordination (other than academics)
  leadership: {
    title: "Leadership & Campus Coordination",
    club: "TechSpark — Technical Club of Rajalakshmi Institute of Technology",
    timeline: [
      {
        role: "Vice President",
        period: "Jun 2026 – Present",
        status: "Active Leadership",
        accent: "#38BDF8",
        description: "Directing club vision, leading executive committee, managing technical project incubation, and organizing college-wide symposia."
      },
      {
        role: "Event Organizer",
        period: "Jul 2025 – Jun 2026",
        status: "Executive Committee",
        accent: "#818CF8",
        description: "Orchestrated hackathons, coding challenges, speaker sessions, and workshops for over 1,000+ participating students across departments."
      },
      {
        role: "Active Member",
        period: "Oct 2024 – Jun 2025",
        status: "Foundation",
        accent: "#38BDF8",
        description: "Contributed to peer-learning groups, problem-solving bootcamps, and technical project design sprints."
      }
    ],
    initiatives: [
      {
        id: "lead-1",
        title: "Conducted 10+ Hackathons",
        category: "Hackathon Coordination",
        accent: "#38BDF8",
        metric: "10+ Hackathons",
        description: "Served as lead event coordinator; formulated problem statements, managed round evaluations, coordinated mentors and jury panels, and ensured flawless event execution."
      },
      {
        id: "lead-2",
        title: "Coordinated 10+ TechFest Events",
        category: "Symposium Management",
        accent: "#818CF8",
        metric: "10+ Events Led",
        description: "Planned and executed 10+ inter-collegiate technical competitions during the annual college TechFest, managing student flow, judging rubrics, and prize distributions."
      },
      {
        id: "lead-3",
        title: "College Fest Event Coordination",
        category: "Event Operations",
        accent: "#38BDF8",
        metric: "Flagship Fest",
        description: "Helped in event coordination, stage management, guest welcoming, and multi-team collaboration for flagship college events."
      },
      {
        id: "lead-4",
        title: "Public Speaking & Leadership Activities",
        category: "Public Speaking",
        accent: "#818CF8",
        metric: "Keynotes & Emcee",
        description: "Delivered welcome addresses, hosted technical workshops, and anchored flagship campus events with high-impact communication."
      }
    ]
  },

  academics: [
    {
      id: "acad-1",
      title: "Class 10 Secondary Distinction (95.40%)",
      institution: "Kongu Kalvi Nilayam, Erode",
      period: "2021 – 2022",
      score: "95.40",
      scoreMax: "%",
      scoreType: "PERCENTAGE",
      percentage: 95.40,
      accent: "#38BDF8",
      highlight: "State Distinction",
      description: "Secured outstanding 95.40% academic score demonstrating consistent foundational excellence in mathematics and sciences."
    },
    {
      id: "acad-2",
      title: "Class 12 Higher Secondary Honor (92.83%)",
      institution: "Kongu Kalvi Nilayam, Erode",
      period: "2023 – 2024",
      score: "92.83",
      scoreMax: "%",
      scoreType: "PERCENTAGE",
      percentage: 92.83,
      accent: "#818CF8",
      highlight: "High Distinction",
      description: "Achieved 92.83% in state higher secondary examinations with top marks in physics, mathematics, and computer science."
    },
    {
      id: "acad-3",
      title: "B.E. CSE (AI & ML) — Rajalakshmi Institute of Technology",
      institution: "Rajalakshmi Institute of Technology, Chennai",
      period: "2024 – 2028",
      score: "8.22",
      scoreMax: "/ 10.0",
      scoreType: "CGPA",
      percentage: 82.2,
      accent: "#38BDF8",
      highlight: "Academic Merit",
      description: "Maintaining consistent 8.22 CGPA while leading AI research projects and student executive leadership."
    }
  ]
};

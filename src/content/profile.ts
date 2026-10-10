export const profile = {
  identity: {
    name: "Tirth Bhanderi",
    email: "bhanderitirth94@gmail.com",
    github: "https://github.com/tirthbhanderi2006",
    linkedin: "https://www.linkedin.com/in/tirth-bhanderi-345763289/",
    summary: "AI/ML Engineer specializing in full-stack development, mobile applications, and offline-first AI solutions."
  },
  experience: [
    {
      role: "Backend Engineering Intern",
      company: "DEZAI",
      date: "June 2026 - Present",
      description: "Developing highly scalable AI infrastructure. Designing async microservices with FastAPI and Spring Boot to serve high-throughput embedding generation and retrieval pipelines."
    },
    {
      role: "AI Full-Stack Engineer",
      company: "HyTech Education",
      date: "May 2026 - June 2026",
      description: "Appointed directly by the founder to build an AI-powered curriculum compliance tool. Architected the entire solution from database schema to LLM prompt engineering in under 4 weeks."
    },
    {
      role: "Android Developer Intern",
      company: "9Brainz",
      date: "Dec 2024 - Apr 2025",
      description: "Developed and maintained highly scalable e-commerce Android applications. Implemented WebRTC for real-time customer support features and optimized local SQLite caching for offline mode."
    }
  ],
  education: [
    {
      degree: "B.Tech in Artificial Intelligence & Machine Learning",
      institution: "CHARUSAT",
      date: "Expected 2028",
      description: "Current GPA: 8.23 (till 2nd Year). Focusing on advanced machine learning algorithms and software architecture."
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "RK University",
      date: "Sep 2023 - Apr 2025",
      description: "Graduated with 9.63 GPA. Built foundational knowledge in data structures, hardware integration, and algorithms."
    }
  ],
  projects: [
    {
      name: "Krushi-Netra (TFLite, Edge AI)",
      description: "An offline-first Android application that runs real-time object detection on cattle (12 different types of Indian cattles) using TensorFlow Lite. Handled the entire model quantization and Android CameraX integration pipeline to ensure 30fps inference on budget devices without internet access."
    },
    {
      name: "Metis (AI Interviewer / LangGraph)",
      award: "🏆 National Level Finalist",
      description: "An intelligent mock interviewer agent built on LangGraph and OpenAI. Metis parses candidate resumes to dynamically generate highly contextual technical questions, scoring candidates on both technical depth and communication clarity in real-time."
    },
    {
      name: "Charaka Vaidya (Ayurvedic RAG Assistant)",
      description: "A specialized Retrieval-Augmented Generation system trained on classical Ayurvedic texts. Employs a complex multi-stage pipeline: intent classification, Sthana-weighted semantic search via ChromaDB, and response synthesis in English, Hindi, and Gujarati."
    },
    {
      name: "ML Model Inference Serving Platform",
      description: "Deploys ONNX/TFLite models as REST inference endpoints with schema introspection, a versioned model registry, a Redis-backed job queue, and a latency/error dashboard. Stack: Spring Boot, Redis, FastAPI, ONNX Runtime, React."
    }
  ],
  openSource: [
    { 
      name: "a2a-firewall", 
      url: "https://github.com/mananjp/a2a-firewall", 
      award: "🏆 1 State & 2 National Level Finalist",
      language: "Python",
      description: "An open-source Agent Runtime Security Fabric & Zero-Trust Governance Mesh designed to inspect, authorize, throttle, sandbox, and cryptographically audit autonomous AI agent fleets and multi-agent systems.\n\nKey Capabilities:\n- Ed25519 Cryptographic Identity & Macaroon Attenuated Delegation\n- Decision Evidence Envelopes & Deterministic Policy Replay\n- Agent Memory & RAG Write-Time Firewall" 
    },
    { 
      name: "AI_Solution_Builder", 
      url: "https://github.com/mananjp/AI_Solution_Builder", 
      award: "🏆 Podium Finish",
      language: "Python",
      description: "From Business Intent to Mounted, Production-Ready Software Systems in Minutes.\nAn enterprise-grade AI system that converts business ideas, BRDs, SOPs, and legacy schemas into fully functional, tenant-isolated software applications alongside traditional architecture blueprints." 
    },
    { 
      name: "AegisPay", 
      url: "https://github.com/tirthbhanderi2006/AegisPay", 
      award: "Personal Project",
      language: "Python",
      description: "A secure, Python-based payment processing simulation tool. Implements simulated banking endpoints, fraud detection heuristics, and comprehensive unit tests for high-reliability fintech integrations." 
    },
  ],
  skills: {
    languages: ["Java", "Python", "Dart", "JavaScript", "SQL"],
    frontend: ["React", "Next.js", "Tailwind CSS"],
    mobile: ["Flutter", "Android SDK", "WebRTC", "REST integration"],
    backend: ["Spring Core", "Spring Boot", "FastAPI", "Flask", "Node.js", "NestJS", "microservices"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "SQLite"],
    ai_ml: ["LiteRT (TensorFlow Lite)","ONNX Runtime Mobile", "MCP", "RAG", "LangChain", "LangGraph"],
    tools: ["Git", "GitHub", "Docker", "Alembic"]
  },
  certifications: [
    { name: "Retrieval Augmented Generation (RAG)", file: "/rag.pdf" },
    { name: "Advanced Web Development Frameworks", file: "/web.pdf" },
    { name: "Foundations of Data Structures and Algorithm Analysis", file: "/DSA.pdf" },
    { name: "Algorithm Design and Analysis", file: "/algo-design.pdf" },
    { name: "Java Class Library", file: "/java_class_lib.pdf" },
    { name: "Cisco CCNA: Switching, Routing, and Wireless Essentials", file: "/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate_tbhanderi872-rku-ac-in_c299e64c-de3e-41c0-af3d-244aff048967.pdf" },
    { name: "Cisco CCNA: Introduction to Networks", file: "/CCNA-_Introduction_to_Networks_certificate_tbhanderi872-rku-ac-in_8f89bd5c-3971-40aa-a0fc-ef0099980e8f.pdf" },
    { name: "Introduction to Model Context Protocol (MCP)", file: "/intro_mcp.pdf" },
  ]
};

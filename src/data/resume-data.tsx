import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Yasin Tunçer",
  initials: "YT",
  location: "Bursa, Turkey",
  locationLink: "https://www.google.com/maps/place/Bursa",
  about: "Software Engineer | AI Product, Backend, Embedded Systems & Edge AI",
  summary: (
    <>
      Software Engineer building end-to-end AI products across cloud and edge
      systems. Currently co-founding Mirasight, an AI-driven computer vision
      startup. Experienced in backend architecture, scalable SaaS AI platforms,
      and production computer vision pipelines. Strong background in Embedded
      Linux, custom Yocto BSP development, and low-latency hardware-accelerated
      video workflows. Led and delivered TUBITAK-funded R&D projects from
      research to production-ready deployment.
    </>
  ),
  avatarUrl: "https://github.com/yasintuncerr.png?size=400",
  personalWebsiteUrl: "https://yasintuncer.com",
  contact: {
    email: "yasintuncer@gmail.com",
    tel: "+905533193420",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/yasintuncerr",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yasintuncer/",
        icon: "linkedin",
      },
      {
        name: "X",
        url: "https://x.com/gauss_kafa",
        icon: "x",
      },
      {
        name: "Hugging Face",
        url: "https://huggingface.co/Yasintuncer",
        icon: "huggingface",
      },
    ],
  },
  education: [
    {
      school: "Bursa Uludağ University",
      degree: "Bachelor's Degree in Electronics and Communication Engineering",
      start: "2012",
      end: "2018",
    },
    {
      school: "Bursa Uludağ University",
      degree: "Master's Degree in Computer Engineering",
      start: "2024",
      end: "2027 (Expected)",
    },
  ],
  work: [
    {
      company: "Mirasight",
      link: "https://mirasight.com.tr",
      badges: [],
      title: "Co-Founder",
      start: "2026",
      end: "Present",
      description: (
        <>
          Co-founding an early-stage AI startup building computer vision
          products.
          <ul className="mt-2 list-inside list-disc">
            <li>
              <strong>Product & Strategy:</strong> Defining product direction
              and technical roadmap from the ground up.
            </li>
            <li>
              <strong>AI Engineering:</strong> Designing and building the core
              computer vision pipeline.
            </li>
            <li>
              <strong>Full-Stack Delivery:</strong> Owning architecture,
              backend, and infrastructure for the MVP.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Freelance / Independent Contractor",
      link: "https://yasintuncer.com",
      badges: [],
      title: "Embedded Systems Engineer (Linux)",
      start: "2024",
      end: "Present",
      description: (
        <>
          Delivered embedded Linux solutions for edge AI deployments.
          <ul className="mt-2 list-inside list-disc">
            <li>
              <strong>Yocto BSP:</strong> Built and maintained lean, production
              Yocto/BitBake OS images for embedded Linux boards.
            </li>
            <li>
              <strong>Boot & Kernel:</strong> Customized U-Boot, device tree,
              and kernel configuration; resolved bootloader and storage
              reliability issues.
            </li>
            <li>
              <strong>Streaming:</strong> Developed zero-copy C pipelines for
              hardware-accelerated video capture and streaming.
            </li>
            <li>
              <strong>P2P Networking:</strong> Delivered a resilient Wi-Fi
              Direct streaming stack integrated as systemd services.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "AIT",
      link: "https://ait.com.tr/",
      badges: [],
      title: "AI R&D Engineer",
      start: "2018",
      end: "2024",
      description: (
        <>
          Conducted R&D on computer vision and industrial AI systems.
          <ul className="mt-2 list-inside list-disc">
            <li>
              <strong>Generative AI:</strong> Shipped production-ready models.
            </li>
            <li>
              <strong>CV Pipelines:</strong> Built robust training pipelines.
            </li>
            <li>
              <strong>On-Prem Systems:</strong> Deployed end-to-end AI stacks.
            </li>
            <li>
              <strong>TUBITAK:</strong> Led TEYDEB 1505 R&D delivery.
            </li>
          </ul>
        </>
      ),
    },
  ],
  projects: [
    {
      title: "Histopathai — AI Medical Imaging Platform",
      description:
        "Built a scalable AI platform for digital pathology: trained generative models for synthetic pathology data, developed event-driven microservices for cloud inference, and built a real-time gigapixel whole-slide-image viewer with AI-assisted annotation. Delivered as part of a TUBITAK 1005-funded R&D project.",
      techStack: [
        "Go",
        "Python",
        "Medical Imaging",
        "Generative AI",
        "Microservices",
        "Google Cloud Platform (GCP)",
        "TypeScript",
        "Vue.js",
        "Docker",
      ],
      link: {
        label: "Histopathai",
        href: "https://histopathai.com/",
      },
    },
    {
      title: "Edge P2P Stream Engine",
      description:
        "Built a peer-to-peer streaming system for edge devices with low-latency transport and resilient connectivity.",
      techStack: [
        "C",
        "Embedded Linux",
        "GStreamer",
        "V4L2",
        "Wi-Fi Direct",
        "Systemd",
      ],
      link: {
        label: "p2p-stream",
        href: "https://github.com/yasintuncerr/p2p-stream",
      },
    },
    {
      title: "CXR Synthetic Data Generator",
      description:
        "Developed a diffusion-based pipeline to generate synthetic chest X-ray images for dataset augmentation.",
      techStack: [
        "Python",
        "Deep Learning",
        "Generative AI",
        "Diffusion Models",
        "Medical Imaging",
      ],
    },
    {
      title: "AI Tools Platform",
      description:
        "Built a SaaS AI platform for image generation, enhancement, and editing used by design teams.",
      link: {
        label: "aitools.ait.com.tr",
        href: "https://ai.ait.com.tr/",
      },
      techStack: [
        "Python",
        "Generative AI",
        "Stable Diffusion",
        "Vision Transformers",
        "Computer Vision",
        "Docker",
        "Linux",
        "OnPremise Systems",
        "MLOps",
      ],
    },
    {
      title: "Archivist Document AI",
      description:
        "Built an AI document system that automatically classifies, tags, and retrieves files using computer vision.",
      link: {
        label: "Archivist",
        href: "https://ai.ait.com.tr/project/archivist/",
      },
      techStack: [
        "Python",
        "C++",
        "Machine Learning",
        "Computer Vision",
        "Deep Learning",
        "Big TIFF Handling",
        "PSD Parsing",
        "Docker",
        "Linux",
        "OnPremise Systems",
      ],
    },
    {
      title: "Fabric Defect Inspection AI",
      description:
        "Developed a real-time vision system to detect fabric defects before digital printing.",
      techStack: [
        "Python",
        "C++",
        "Computer Vision",
        "Deep Learning",
        "Embedded Systems",
        "Linux",
      ],
    },
    {
      title: "E-Commerce Review Intelligence",
      description:
        "Built a sentiment analysis pipeline for e-commerce reviews to surface product and customer satisfaction insights.",
      techStack: [
        "Python",
        "Natural Language Processing",
        "Text Embeddings",
        "Transformers",
        "Machine Learning",
        "Data Analysis",
      ],
      link: {
        label: "Customer Reviews Analysis",
        href: "https://github.com/yasintuncerr/customer-reviews-analysis",
      },
    },
    {
      title: "PiCam Dual-Stream Camera App",
      description:
        "Built a custom Raspberry Pi camera application with dual-stream support for still capture and live video.",
      techStack: ["C", "C++", "Raspberry Pi", "Embedded Systems", "Linux"],
    },
  ],
  skills: [
    "Computer Vision",
    "Deep Learning",
    "Generative AI",
    "Machine Learning",
    "Python",
    "C",
    "C++",
    "Go",
    "TypeScript",
    "Embedded Linux",
    "Yocto Project (BSP Development)",
    "Bootloader & Device Tree Customization",
    "Low-Latency Video Streaming",
    "Hardware Acceleration",
    "Wi-Fi Direct Networking",
    "Bash Scripting",
    "Docker",
    "Microservices",
    "Event-Driven Architecture",
    "Google Cloud Platform (GCP)",
    "AWS",
    "MLOps",
    "System Architecture",
  ],
} as const;

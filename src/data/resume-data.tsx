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
      systems. Experienced in backend architecture, scalable SaaS AI platforms,
      and production computer vision pipelines. Strong background in Embedded
      Linux, custom Yocto BSP development, and low-latency hardware-accelerated
      video workflows. Led and delivered TUBITAK-funded R&D projects from
      research to production-ready deployment.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/62839963?v=4",
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
      company: "Histopathai",
      link: "https://histopathai.com/",
      badges: [],
      title: "AI Product Engineer (Full-Stack)",
      start: "2024",
      end: "Present",
      description: (
        <>
          Building scalable AI products for medical imaging.
          <ul className="mt-2 list-inside list-disc">
            <li>
              <strong>Generative AI:</strong> Trained SD models for synthetic
              pathology data.
            </li>
            <li>
              <strong>Microservices:</strong> Built event-driven inference on
              GCP.
            </li>
            <li>
              <strong>WSI Viewer:</strong> Built real-time gigapixel annotation
              tooling.
            </li>
            <li>
              <strong>R&D Grant:</strong> Contributed to TUBITAK 1005 (1M TL)
              research delivery.
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
      end: "2025",
      description: (
        <>
          Delivered embedded Linux solutions for edge AI deployments.
          <ul className="mt-2 list-inside list-disc">
            <li>
              <strong>Yocto BSP:</strong> Built lean, production OS images.
            </li>
            <li>
              <strong>Kernel Tuning:</strong> Removed video bottlenecks.
            </li>
            <li>
              <strong>Streaming:</strong> Developed zero-copy C pipelines.
            </li>
            <li>
              <strong>P2P Networking:</strong> Delivered resilient Wi-Fi Direct
              stacks.
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
      title: "Histopathai WSI Viewer",
      description:
        "Built a web-based viewer for high-resolution histopathology slides with real-time AI-assisted annotation.",
      techStack: [
        "Go",
        "Python",
        "Medical Imaging",
        "AI Integration",
        "Cloud Deployment",
        "TypeScript",
        "Vue.js",
        "Docker",
      ],
      link: {
        label: "Histopathai WSI Viewer",
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
    "Vision Transformers",
    "Stable Diffusion",
    "GANs",
    "Python",
    "C",
    "C++",
    "Go",
    "TypeScript",
    "Embedded Linux",
    "Yocto Project (BSP, Bitbake)",
    "Device Tree",
    "Systemd",
    "Bash Scripting",
    "GStreamer",
    "V4L2 (Video4Linux2)",
    "Hardware Acceleration",
    "Wi-Fi Direct",
    "Docker",
    "Google Cloud Platform (GCP)",
    "AWS",
    "MLOps",
    "Microservices",
    "Event-Driven Architecture",
    "Machine Learning",
    "Linux",
    "System Architecture",
  ],
} as const;

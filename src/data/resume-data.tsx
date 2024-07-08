import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Yasin Tunçer",
  initials: "YT",
  location: "Bursa, Turkey",
  locationLink: "https://www.google.com/maps/place/Bursa",
  about:
    "R&D, AI and machine learning developer, and DevOps enthusiast. Passionate about leveraging technology to build innovative and high-quality solutions.",
  summary:
    "As an AI and Machine Learning Engineer, I focus on developing and implementing AI models and computer vision algorithms. I excel in creating and managing infrastructure, handling DevOps tasks, and integrating advanced AI-based tools. My expertise includes Python, C++, Pytorch, Docker, and Linux. I have worked on various projects such as Imagine, Repeater, Upscaler, and Archivist. I am always eager to learn new technologies and improve my skills, thriving in environments where collaboration and innovation are encouraged.",
  avatarUrl: "https://avatars.githubusercontent.com/yasintuncerr",
  personalWebsiteUrl: "https://www.yasintuncer.net",
  contact: {
    email: "yasintuncerr@gmail.com",
    tel: "---",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/yasintuncerr",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yasintuncer/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/gauss_kafa",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Bursa Uludag University",
      degree: "Bachelor's Degree in Electronic Engineering",
      start: "2012",
      end: "2018",
    },
    {
      school: "Bursa Technical University",
      degree: "Master's Degree in Computer Engineering",
      start: "2024",
      end: "present",
    },
  ],
  work: [
    {
      company: "A.I.T",
      link: "https://ai.ait.com.tr",
      badges: [],
      title: "R&D Developer",
      logo: NSNLogo,
      start: "2018",
      end: "present",
      description: "Developed AI models and computer vision algorithms. Created and managed infrastructure. Handled DevOps tasks. Technologies: Linux, C++, Python, Pytorch, Pytorch TorchServe, Nvidia TritonServer, Nvidia TensorRT, Docker, MongoDB",
    },
  ],
  skills: [
    "C",
    "C++",
    "Python",
    "Computer Vision",
    "Deep Learning",
    "Machine Learning",
    "Linux",
    "Docker",
    "Bash Script",
  ],
  projects: [
    {
      title: "Aitools",
      techStack: [
        "Python",
        "Node.js",
        "Uix",
        "Pytorch",
        "Generative AI",
        "Computer Vision",
        "Nvidia TritonServer",
        "Docker",
        "Linux",
        "DevOps",
        "MongoDB",
        "Compute Server Infrastructure"
      ],
      description:
        "The AI Tools product suite includes a variety of AI-based tools tailored to the needs of the textile design industry. Users can generate new creative patterns with these tools.",
      logo: ParabolLogo,
      link: {
        label: "aitools",
        href: "https://ai.ait.com.tr/",
      },
    },
    {
      title: "Imagine",
      techStack: [
        "Python",
        "Pytorch",
        "Generative AI",
        ],
      description:
        "The Imagine tool, part of the AI Tools product suite, allow users to generate new creative digital textile design patterns.",
      logo: ParabolLogo,
      link: {
        label: "Imagine",
        href: "https://ai.ait.com.tr/project/ai-pattern-generator/",
      },
    },
    {
      title: "Repeater",
      techStack: [
        "Python",
        "Pytorch",
        "Generative AI",
        "Computer Vision"
        ],
      description:
        "The Repeater tool, part of the AI Tools product suite, convert unaligned digital textile design patterns into seamlessly repeating patterns, making them ready for conventional printing.",
      logo: ParabolLogo,
      link: {
        label: "Repeater",
        href: "https://ai.ait.com.tr/project/repeat-pattern-generator/",
      },
    },
    {
      title: "Upscaler",
      techStack: [
        "Python",
        "Pytorch",
        "Generative AI",
        "Computer Vision"
        ],
      description:
        "The Upscaler tool, part of the AI Tools product suite, enhance low-quality digital textile design patterns into high-quality versions.",
      logo: ParabolLogo,
      link: {
        label: "Upscaler",
        href: "https://ai.ait.com.tr/project/ai-image-upscaler/",
      },
    },
    {
      title: "Archivist",
      techStack: [
        "Python",
        "Node.js",
        "Pytorch",
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Pytorch TorchServe",
        "Docker",
        "Linux",
        "DevOps"
      ],
      description:"The Archivist classifies huge textile pattern archives. It provides a web-based interface for previewing, filtering, and searching patterns, also  AI-based image search, designed for textile designers and manufacturers.",
      logo: ParabolLogo,
      link: {
        label: "archivist",
        href: "https://ai.ait.com.tr/project/archivist/",
      },
    },
    {
      title: "Fabric Defect Detection",
      techStack: [
        "C++",
        "Qt",
        "QML",
        "Computer Vision",
        "Cross Platform",
        ],
      description:
        "A real-time system that detects fabric defects before digital printing",
      logo: ParabolLogo,
      link: {
        label: "archivist",
        href: "https://ai.ait.com.tr/project/archivist/",
      },
    },
    {
      title: "Psd SDK",
      techStack: [
        "C++",
        "Computer Vision",
      ],
      description:
        "Multi-Channel file handler has been improved. The base project was forked from MolecularMatters/psd_sdk.",
      logo: ParabolLogo,
      link: {
        label: "psd_sdk",
        href: "https://github.com/yasintuncer/psd_sdk",
      },
    },
  ],
} as const;

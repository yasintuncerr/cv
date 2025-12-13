import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Yasin Tunçer",
  initials: "YT",
  location: "Bursa, Turkey, TRT",
  locationLink: "https://www.google.com/maps/place/Bursa",
  about: "Software Engineer | AI Researcher",
  summary: (
    <>
      Experienced Software Engineer and AI Researcher with a strong background
      in developing innovative solutions. Passionate about leveraging AI to
      solve complex problems and drive technological advancements.
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
   } 
  ],
  work: [
    {
      company: "AIT",
      link: "https://ait.com.tr/",
      badges: [],
      title: "R&D AI Researcher",
      start: "2018",
      end: "2024",
      description: (
        <>
          Specialized in AI research and development with focus on computer vision and digital image processing solutions.
          <ul className="list-inside list-disc">
            <li>
              Designed and deployed generative AI models.
            </li>
            <li>
              Built deep learning pipelines for computer vision applications in production environments
            </li>
            <li>
              Developed on-premise AI systems.
            </li>
            <li>
              Led TUBITAK TEYDEB 1505 funded projects.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Histopathai",
      link: "https://histopathai.com/",
      badges: [],
      title: "Full Stack Developer & AI Researcher",
      start: "2024",
      end: "Present",
      description: (
        <>
          Building AI-powered solutions for medical imaging and histopathology as part of master's degree research
          
          <ul className="list-inside list-disc">
            <li>
              Developing generative AI models
            </li>
            <li>
              Building scalable backend infrastructure with Go and Python.
            </li>
            <li>
              Managing cloud deployment on GCP
            </li>
            <li>
              Collaborating with pathologists.
            </li>
            <li>
              supported by TUBITAK ARDEB 1005 grant.
            </li>
          </ul>
        </>
      ),
    },
],
  projects: [
    {
      title: "Aitools",
      description: "Developed an AI-powered tool platfrom offering various utilities such as image generation, enhancement, editing, and more for textile designers and digital artists.",

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
      title: "Archivist",
      description: "The Archivist is an AI-powered document management system that utilizes advanced computer vision techniques to automatically categorize, tag, and retrieve documents based on their content, enhancing organizational efficiency and accessibility.",
      link: {
        label: "Archivist",
        href: "https://ai.ait.com.tr/project/archivist/"
      },
      techStack: [
        "Python",
        "C++",
        "Machine Learning",
        "Deep Learning",
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
      title: "Fabric Defect Detection System",
      description: "Developed real-time system for detecting fabric defects before digital printing",
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
      title: "Cxr-Difusion",
      description: "Developed a system to generate synthetic chest X-ray images using diffusion models.",
      techStack: [
        "Python",
        "Deep Learning",
        "Generative AI",
        "Diffusion Models",
        "Medical Imaging",
      ],
    },
    {
      title: "Histopathai Viewer",
      description: "Developed a web-based viewer for high-resolution histopathological images with AI-powered annotation and analysis tools.",
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
        label: "Histopathai Viewer",
        href: "https://histopathai.com/",
      },
    },
    {
      title: "E Commerce Customer Review Sentiment Analysis",
      description:
        "Developed a sentiment analysis tool to analyze customer reviews for e-commerce platforms, providing insights into customer satisfaction and product feedback.",
      techStack: [
        "Python",
        "Natural Language Processing",
        "Machine Learning",
        "Data Analysis",
      ],
      link: {
        label: "Customer Reviews Analysis",
        href: "https://github.com/yasintuncerr/customer-reviews-analysis",
      },
    },
    {
      title: "PiCam - Raspberry Pi Camera Module",
      description: "Developed a custom camera module using on Raspberry Pi for various imaging applications. It has Dual Stream support (still- streaing)",
      techStack: ["C", "C++", "Raspberry Pi", "Embedded Systems", "Linux"],
    },
  ],
  skills: [
    "Computer Vision",
    "Machine Learning",
    "Deep Learning",
    "Generative AI",
    "Vision Transformers",
    "Transformers",
    "Stable Diffusion",
    "GANs",
    "Python",
    "PyTorch/TensorFlow",
    "OpenCV",
    "C++",
    "Go",
    "TypeScript",
    "Linux",
    "Docker",
    "Cloud Platforms (GCP, AWS)",
    "System Architecture",
  ],
} as const;

import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Yasin Tunçer",
  initials: "YT",
  location: "Bursa, Turkey, TRT",
  locationLink: "https://www.google.com/maps/place/Bursa",
  about: "Software Engineer | AI Researcher",
  summary: (
    <>
     Software Engineer and AI Researcher with experience in both industry and academia. 
     Skilled in developing scalable software architectures and AI solutions. 
     Dedicated to researching and adapting to new technologies, with experience in managing R&D projects funded by national research agencies (TUBITAK).
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
          Conducted R&D on AI solutions, specifically focusing on computer vision and digital image processing.
          <ul className="list-inside list-disc">
            <li>
              <strong>Designed and deployed</strong> generative AI models for industrial applications.
            </li>
            <li>
              <strong>Built</strong> deep learning pipelines for computer vision applications in production environments.
            </li>
            <li>
              <strong>Developed</strong> on-premise AI systems and infrastructure.
            </li>
            <li>
              <strong>Led</strong> projects funded by TUBITAK TEYDEB 1505.
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
          Building AI-powered solutions for medical imaging and histopathology as part of master's degree research.
          
          <ul className="list-inside list-disc">
            <li>
              <strong>Developing</strong> generative AI models for synthetic data generation.
            </li>
            <li>
              <strong>Architecting</strong> scalable backend infrastructure using Go and Python.
            </li>
            <li>
              <strong>Managing</strong> cloud deployments and services on Google Cloud Platform (GCP).
            </li>
            <li>
              <strong>Collaborating</strong> with pathologists to refine AI diagnostic tools.
            </li>
            <li>
              <strong>Conducting</strong> research supported by the TUBITAK ARDEB 1005 grant.
            </li>
          </ul>
        </>
      ),
    },
],
  projects: [
    {
      title: "Aitools",
      description: "Developed an AI-powered tool platform offering various utilities such as image generation, enhancement, editing, and more for textile designers and digital artists.",

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
      description: "Developed an AI-powered document management system utilizing advanced computer vision techniques to automatically categorize, tag, and retrieve documents based on their content, enhancing organizational efficiency.",
      link: {
        label: "Archivist",
        href: "https://ai.ait.com.tr/project/archivist/"
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
      title: "Fabric Defect Detection System",
      description: "Developed a real-time system for detecting fabric defects before digital printing.",
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
      title: "Cxr-Diffusion",
      description: "Developed a system to generate synthetic chest X-ray images using diffusion models to augment medical datasets",
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
      description: "Developed a web-based viewer for high-resolution histopathological images, featuring AI-powered annotation and real-time analysis tools",
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
      title: "E-Commerce Customer Review Sentiment Analysis",
      description:
        "Developed a sentiment analysis tool to evaluate customer reviews for e-commerce platforms, providing actionable insights into customer satisfaction and product feedback.",
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
      title: "PiCam - Raspberry Pi Camera Module",
      description: "Developed a custom camera module application on Raspberry Pi utilizing the libcamera API. Features Dual Stream support for simultaneous still capture and video streaming.",
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

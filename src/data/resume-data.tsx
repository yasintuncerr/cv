import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Yasin Tunçer",
  initials: "YT",
  location: "Bursa, Turkey",
  locationLink: "https://www.google.com/maps/place/Bursa",
  about:
    "AI & Systems Engineer | Computer Vision, Generative AI, Embedded Linux",
  summary: (
    <>
      Software Engineer with 8 years of experience building production systems
      across AI, computer vision, and embedded software. Developed image
      retrieval and generative AI products at AIT, a TÜBİTAK-funded digital
      pathology platform, and low-latency video systems on embedded Linux.
      Combines hands-on experience in model development and deployment with
      backend engineering, system architecture, and hardware-level integration.
    </>
  ),
  avatarUrl: "https://github.com/yasintuncerr.png?size=400",
  personalWebsiteUrl: "https://yasintuncer.com.tr",
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
      degree: "MSc in Computer Engineering",
      start: "2024",
      end: "2027 (Expected)",
    },
    {
      school: "Bursa Uludağ University",
      degree: "BSc in Electronics Engineering",
      start: "2012",
      end: "2018",
    },
  ],
  work: [
    {
      company: "Mirasight",
      link: "https://mirasight.com.tr",
      badges: [],
      title: "Co-Founder",
      start: "2025",
      end: "Present",
      description: (
        <>
          Leading technical development, including system architecture, computer
          vision pipelines, backend services, and cloud infrastructure.
          Responsible for translating product requirements into an end-to-end
          technical implementation.
        </>
      ),
    },
    {
      company: "Independent Contractor",
      link: "https://yasintuncer.com.tr",
      badges: [],
      title: "Embedded Linux & Video Systems Engineer",
      start: "2024",
      end: "2026",
      description: (
        <>
          Built the software stack of a wireless camera-to-display video product
          for a client under NDA.
          <ul className="mt-2 list-inside list-disc">
            <li>
              <strong>BSP:</strong> Yocto layers for NXP i.MX8M Plus on a custom
              board and the EVK: U-Boot, device tree, DDR timing, and two kernel
              lines (6.6, 6.18) pinned by manifest for reproducible release
              images.
            </li>
            <li>
              <strong>Video:</strong> C application on GStreamer covering
              MIPI-CSI capture, hardware encoding, RTP over Wi-Fi, and a
              G2D-composited display, at up to 1080p60 and 720p120.
            </li>
            <li>
              <strong>Reliability:</strong> Stream and recovery state machines,
              link monitoring, and systemd watchdog integration so the device
              recovers from link and pipeline faults without user action.
            </li>
            <li>
              <strong>Provisioning:</strong> Schema-driven web tool that
              configures each device image before flashing, applied on first
              boot through cloud-init.
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
          R&D engineer on products for textile design and digital printing.
          Started in embedded development and moved through image processing
          into applied machine learning.
          <ul className="mt-2 list-inside list-disc">
            <li>
              <strong>Generative AI:</strong> Core team member behind AI Tools,
              the company's Stable Diffusion platform: text-to-image,
              image-to-image, super-resolution, and a seamless-repeat module
              that tiles a pattern at any offset with no visible seam or color
              shift. Built the model serving and APIs on on-prem GPU servers.
            </li>
            <li>
              <strong>Visual Search:</strong> Built Archivist, a hybrid system
              that crawls design storage, extracts embeddings from previews on
              GPU servers, and runs similarity search and kNN classification
              locally. Developed in-house, before vector databases were common.
            </li>
            <li>
              <strong>Raster Imaging:</strong> Processing pipelines for large
              multi-channel, multi-layer TIFF and PSD production files.
            </li>
            <li>
              <strong>Embedded & Edge AI:</strong> Software for industrial Linux
              boards and STM32-class microcontrollers: on-machine signal
              acquisition and analysis, and real-time fabric defect inspection
              with TensorRT-optimized models.
            </li>
            <li>
              <strong>Funded R&D:</strong> Led delivery of a TÜBİTAK TEYDEB 1505
              project.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "IEEE Student Branch, Bursa Uludağ University",
      link: "https://uludag.edu.tr/mmf/haber/view?id=4784",
      badges: [],
      title: "Team Lead, ULUCAR",
      start: "2017",
      end: "2018",
      description: (
        <>
          Led the university team to third place in OpenZeka MARC, Turkey's
          first mini autonomous race car competition. The car was an electric
          platform with an NVIDIA Jetson TX2, stereo camera, 2D LiDAR, and IMU,
          and had to complete the courses on its own. First hands-on work in
          image processing, vehicle control, and deep learning.
        </>
      ),
    },
  ],
  projects: [
    {
      title: "Histopathai",
      description:
        "Digital pathology platform funded by TÜBİTAK 1005. Go microservices on GCP process gigapixel whole-slide images and serve a browser viewer with annotation tools. The ML side covers a data layer with quality control across 10M+ tissue patches, benchmarks of pathology foundation models and MedGemma VLMs, and latent diffusion models for synthetic tissue.",
      techStack: [
        "Go",
        "Python",
        "PyTorch",
        "Foundation Models",
        "VLM",
        "GCP",
        "Terraform",
        "Vue.js",
      ],
      link: {
        label: "histopathai.com",
        href: "https://histopathai.com/",
      },
    },
    {
      title: "Call Intelligence Pipeline",
      description:
        "Multi-tenant pipeline that transcribes call recordings, masks personal data, extracts meeting requests and complaints with an LLM, and writes them to a CRM. Postgres is both the store and the job queue (SKIP LOCKED with leases), row-level security isolates tenants, and idempotency keys keep retries against an unreliable API free of duplicates. Built as a time-boxed case study.",
      techStack: [
        "Go",
        "PostgreSQL",
        "Speech-to-Text",
        "LLM",
        "Hexagonal Architecture",
        "Docker",
      ],
    },
    {
      title: "Low-Latency Wireless Video Link",
      description:
        "Camera-to-display video link for embedded devices: one C program runs as sender or receiver, with hardware-accelerated capture, encode, and display, a layered control protocol, and automatic recovery. Client work under NDA.",
      techStack: [
        "C",
        "GStreamer",
        "NXP i.MX8M Plus",
        "Yocto",
        "V4L2",
        "Wi-Fi",
        "systemd",
      ],
    },
    {
      title: "Medical Image Synthesis",
      description:
        "MSc research on diffusion models for medical imaging. Trained and compared Stable Diffusion 1.5 and 3.5, SiT, and Medfusion on fundus and histopathology data, with conditioning on medical foundation model embeddings and evaluation by FID, precision, and recall.",
      techStack: [
        "Python",
        "PyTorch",
        "Diffusion Models",
        "Multi-GPU Training",
        "Medical Imaging",
      ],
    },
    {
      title: "AI Tools",
      description:
        "Generative AI suite for textile design teams: image generation, super-resolution, and seamless pattern repeats, served from on-prem GPU servers.",
      link: {
        label: "ai.ait.com.tr",
        href: "https://ai.ait.com.tr/",
      },
      techStack: [
        "Python",
        "Stable Diffusion",
        "Model Serving",
        "REST API",
        "Docker",
      ],
    },
    {
      title: "Archivist",
      description:
        "Visual search and automatic tagging for large design archives, built on image embeddings with local similarity search and kNN classification.",
      link: {
        label: "Archivist",
        href: "https://ai.ait.com.tr/project/archivist/",
      },
      techStack: [
        "Python",
        "C++",
        "Image Embeddings",
        "Similarity Search",
        "TIFF / PSD",
      ],
    },
  ],
  skills: [
    "Python",
    "C / C++",
    "Go",
    "TypeScript",
    "PyTorch",
    "Computer Vision",
    "Diffusion Models",
    "VLMs & LLMs",
    "Model Serving",
    "TensorRT",
    "Embedded Linux",
    "Yocto / BSP",
    "GStreamer",
    "PostgreSQL",
    "Docker",
    "GCP",
  ],
} as const;

import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Research',
    hash: '#research',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/projects/socialhub.svg',
    title: 'Sardar of Physics',
    description:
      'A robust course selling platform built with Next.js and TypeScript, designed to connect teachers and students.',
    technologies: [
      'Next.js',
      'TypeScript',
      'MySQL',
      'MUX',
      'Tailwind',
      'Prisma',
    ],
    links: {
      github: 'https://github.com/sameeramjad07/Sardar-of-Physics',
    },
  },
  {
    image: '/projects/nextstarter.svg',
    title: 'Promptopia',
    description:
      'A comprehensive CRUD AI Prompt sharing system utilizing a MongoDB database and implementing NextAuth authentication.',
    technologies: ['Next.js', 'MongoDB', 'Tailwind', 'Shadcn/ui', 'Next-Auth'],
    links: {
      github: 'https://github.com/sameeramjad07/Promptopia',
    },
  },
  {
    image: '/projects/nextstarter.svg', // Placeholder: Replace with actual image
    title: 'Temporal Analysis and Glacier Monitoring',
    description:
      'A Comprehensive Dashboard for Temporal analysis of glacial changes in Northern Pakistan.',
    technologies: ['Python', 'Deep Learning', 'Sentinel', 'Landsat'],
    links: {},
  },
  {
    image: '/projects/audiophile.svg',
    title: 'Flower System',
    description:
      'A simple event reminder system that allows users to set and manage reminders for various events.',
    technologies: ['React', 'Styled-components', 'TypeScript', 'MongoDB'],
    links: {
      preview: 'https://event-reminder-system-gamma.vercel.app/',
      github: 'https://github.com/sameeramjad07/Event-Reminder_Flower-Station',
    },
  },
  {
    image: '/projects/nextstarter.svg', // Placeholder: Replace with actual image
    title: 'Medibot.Ai',
    description:
      'An AI-powered medical chatbot integrated with WhatsApp, providing instant medical info; achieved finalist status at FICS 2024.',
    technologies: ['Python', 'NLP', 'WhatsApp API', 'AI'],
    links: {
      github: 'https://github.com/sameeramjad07/MediBot-AI/tree/developing-bot', // Placeholder: Replace with actual link
    },
  },
  {
    image: '/projects/nextstarter.svg', // Placeholder: Replace with actual image
    title: 'NUST360 Database',
    description:
      'An SQL-based educational management system streamlining academic operations like courses and attendance at NUST.',
    technologies: ['SQL', 'Database Design', 'PHP'],
    links: {
      github: 'https://github.com/sameeramjad07/NUST360-Database/tree/db', // Placeholder: Replace with actual link
    },
  },
] as const;

export const experiencesData = [
  {
    icon: (
      <img
        src="/experience/IPT logo.jpeg"
        alt="IPT Lab"
        className="size-12 object-cover"
      />
    ),
    title: 'FYDP Researcher',
    location:
      'Information Processing and Transmission Lab, NUST Islamabad, Pakistan',
    description:
      'Executing my undergrad Thesis here on the topic "RIS in LLMs"',
    date: 'March 2025 - Present',
  },
  {
    icon: (
      <img
        src="/experience/codenext.jpeg"
        alt="CodeNext"
        className="size-16 object-cover"
      />
    ),
    title: 'Full Stack Developer',
    location: 'Remote - CodeNext Solutions',
    description:
      'Building full developed, production ready web applications using a variety of web technologies.',
    date: 'Aug 2024 - Present',
  },
  {
    icon: (
      <img
        src="/experience/machvis.png"
        alt="MachVIS Lab"
        className="size-12"
      />
    ),
    title: 'Undergrad Researcher',
    location: 'MachVIS Lab, NUST , Islamabad, Pakistan',
    description:
      'Contributing to deep learning-based projects like Glacier Monitoring - Authored my first systematic research paper here',
    date: 'Jun 2024 - Present',
  },
  {
    icon: (
      <img src="/experience/RIC.jpeg" alt="RIC, NUST" className="size-12" />
    ),
    title: 'Web Application Developer',
    location:
      'Research, Innovation & Commercialisation, NUST Islamabad, Pakistan',
    description:
      'Built and deployed the NUST Digital Research Repository using MERN stack, improving UX by 30% and enabling access to over 10,000 research publications for 1,500+ faculty members.',
    date: 'May 2024 - Aug 2024',
  },
  {
    icon: (
      <img
        src="/experience/sibot.webp"
        alt="HPC Lab"
        className="size-12 object-cover w-full"
      />
    ),
    title: 'Research Assistant',
    location: 'High Performance Computing Lab, SEECS, NUST Islamabad, Pakistan',
    description:
      'Developed AI projects including a Automated Live Booking System and AI lip-syncing model using LLMs and NLP. Wrote Articles on the topic "AI Singularity".',
    date: 'May 2024 - Dec 2024',
  },
  {
    icon: (
      <img
        src="/experience/slashcart.png"
        alt="Slashcart"
        className="size-16 object-cover"
      />
    ),
    title: 'Shopify Developer',
    location: 'Slashcart PVT Ltd., Sargodha, Pakistan',
    description:
      'Developed and mainetained Shopify websites, including custom theme development and plugin integration.',
    date: 'May 2022 - Aug 2023',
  },
] as const;

export const researchData = [
  {
    image: '/research/ai-business-finance.svg', // Placeholder: Replace with actual image
    title: 'AI in Business and Finance: A Micro-to-Macro Perspective',
    description:
      'A systematic review of ML, DL, and NLP applications in Business and Finance over the last 5 years.',
    role: 'Second Author',
    publication: 'DOI: 10.14738/abr.1210.17781',
    date: 'October 2024',
  },
  {
    image: '/projects/nextstarter.svg', // Placeholder: Replace with actual image
    title: 'Deep Learning for Disease Detection',
    description:
      'A study using CNN models like ResNet50v2 on the NIH Chest X-ray Dataset for disease detection, achieving 73% AUC across 13 classes with Grad-CAMs for interpretability.',
    technologies: ['Python', 'TensorFlow', 'ResNet50v2', 'Grad-CAM'],
    links: {},
  },
  {
    image: '/research/llm-personalization.svg', // Placeholder: Replace with actual image
    title: 'Personalization vs. Security: Challenges in Large Language Models',
    description:
      'Explored privacy risks in LLMs’ personalization, proposing strategies for balancing UX and security.',
    role: 'Lead Author',
    publication: 'NUST, Islamabad',
    date: 'May 2024',
  },
  {
    image: '/research/ai-singularity.svg', // Placeholder: Replace with actual image
    title: 'AI Singularity - A White Paper',
    description:
      'Contributing to a white paper on AI singularity implications and strategic recommendations.',
    role: 'Research Writer',
    publication: 'In Progress',
    date: 'July 2024 - Present',
  },
] as const;

export const skillsData = [
  {
    icon: <img src="/technologies/html-5.svg" alt="HTML" className="size-12" />,
  },
  {
    icon: <img src="/technologies/css-3.svg" alt="CSS" className="size-12" />,
  },
  {
    icon: <img src="/technologies/react.svg" alt="React" className="size-12" />,
  },
  {
    icon: (
      <img
        src="/technologies/tailwind.svg"
        alt="tailwindCSS"
        className="size-12"
      />
    ),
  },
  {
    icon: (
      <img
        src="/technologies/next-js.svg"
        alt="NEXT.js"
        className="dark:invert size-12"
      />
    ),
  },
  {
    icon: (
      <img
        src="/technologies/hugging-face.svg"
        alt="hugging face"
        className="size-12"
      />
    ),
  },
  {
    icon: (
      <img
        src="/technologies/ollama.svg"
        alt="Ollama"
        className="dark:invert size-12"
      />
    ),
  },
  {
    icon: (
      <img
        src="/technologies/mistral.svg"
        alt="Mistral AI"
        className="size-12"
      />
    ),
  },
  {
    icon: <img src="/technologies/aws.svg" alt="NumPy" className="size-12" />,
  },
  {
    icon: (
      <img src="/technologies/django.svg" alt="django" className="size-12" />
    ),
  },
  {
    icon: (
      <img
        src="/technologies/flask.svg"
        alt="flask"
        className="dark:invert size-12"
      />
    ),
  },
  {
    icon: (
      <img
        src="/technologies/javascript.svg"
        alt="Javascript"
        className="size-12"
      />
    ),
  },
  {
    icon: (
      <img src="/technologies/mongo.svg" alt="mongoDB" className="size-12" />
    ),
  },
  {
    icon: (
      <img src="/technologies/prisma.svg" alt="Prisma" className="size-12" />
    ),
  },
  {
    icon: (
      <img src="/technologies/python.svg" alt="Python" className="size-12" />
    ),
  },
  {
    icon: (
      <img src="/technologies/pytorch.svg" alt="pyTorch" className="size-12" />
    ),
  },
  {
    icon: (
      <img src="/technologies/graphql.svg" alt="graphql" className="size-12" />
    ),
  },
  {
    icon: <img src="/technologies/mysql.svg" alt="mysql" className="size-12" />,
  },
  {
    icon: (
      <img
        src="/technologies/qgis.svg"
        alt="qgis"
        className="dark:invert size-12"
      />
    ),
  },
  {
    icon: <img src="/technologies/redux.svg" alt="redux" className="size-12" />,
  },
  {
    icon: (
      <img
        src="/technologies/tailwind.svg"
        alt="tailwind"
        className="size-12"
      />
    ),
  },
  {
    icon: (
      <img
        src="/technologies/tensorflow.svg"
        alt="tensorflow"
        className="size-12"
      />
    ),
  },
  {
    icon: <img src="/technologies/trpc.svg" alt="trpc" className="size-12" />,
  },
  {
    icon: (
      <img
        src="/technologies/typescript.svg"
        alt="typescript"
        className="size-12"
      />
    ),
  },
] as const;

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
        className="size-12 object-contain"
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
    id: 1,
    title: 'Information Processing and Transmission Lab',
    role: 'FYDP Researcher',
    location: 'SEECS, NUST Islamabad',
    date: '2025 - Present',
    description:
      'Leading research in intersection of 6G communications and Large Language Models.',
    papers: [],
    projects: [],
  },
  {
    id: 2,
    title: 'Machine Vision and Intelligent Systems Lab',
    role: 'Undergradute Researcher',
    location: 'SEECS, NUST Islamabad',
    date: '2024 - Present',
    description:
      'Conducting research on the temporal analysis of glacier changes and monitoring their change maps using computer vision techniques.',
    projects: [
      {
        id: 'proj1',
        title: 'Temporal Analysis of Glacier Changes',
        description:
          'Conducting research on the temporal analysis of glacier changes and monitoring their change maps using computer vision techniques.',
      },
    ],
    papers: [
      {
        id: 'p3',
        title:
          'AI in Business and Finance: A Micro-to-Macro Perspective on Its Impact',
        journal: 'Archives of Business Research',
        year: '2024',
        abstract:
          'This comprehensive survey examines the transformative impact of machine learning (ML), deep learning (DL), and natural language processing (NLP) across diverse business and finance sectors. From micro-level operational efficiencies to macro-level strategic decision-making, we delve into the multifaceted applications of AI and its influence on traditional practices. Our analysis highlights the increasing prominence of ML in enhancing decision-making and achieving greater accuracy and efficiency. We also identify key challenges such as data quality, modelinterpretability, and linguistic information processing. By addressing these challenges, we can further unlock the potential of ML in revolutionizing business and finance. We conducted a systematic literature review using the PRISMA technique to identify relevant research published within the last five years. Our findings reveal the growing adoption of ML techniques in various business and finance applications, such as fraud detection, risk assessment, customer relationship management, and algorithmic trading. We identified relevant publications through comprehensive searches in leading academic databases, including Scopus, Web of Science, and Google Scholar. We also discuss the challenges associated with implementing ML models in these domains, including data quality issues, model interpretability, and ethical considerations. Byunderstanding the applications, challenges, and opportunities associated with AI, businesses, policymakers, researchers, and investors can make informed decisions and leverage AI to drive innovation and growth in the business and finance sectors.',
        authors: [
          'A. Shehzadi',
          'M. S. Amjad',
          'M. N. Anwar',
          'F. A. Satti',
          'M. M. Fraz',
        ],
        tags: [
          'Artificial Intelligence',
          'Business',
          'Finance',
          'Accounting',
          'Natural Language Processing',
          'Algorithmic trading',
          'Risk assessment',
        ],
        link: 'https://doi.org/10.14738/abr.1210.17781',
      },
    ],
  },
  {
    id: 3,
    title: 'High Performance Computing Lab',
    role: 'Research Assistant',
    location: 'SEECS, NUST Islamabad',
    date: '2024 - 2025',
    description:
      'Focused on Large Language Models for autonomous systems and chatbot applications.',
    projects: [
      {
        id: 'proj2',
        title: 'Automated Live Booking System',
        description:
          'Developed an AI-driven live booking system utilizing NLP and LLMs for real-time customer interactions.',
      },
      {
        id: 'proj3',
        title: 'AI Lip-Syncing Model',
        description:
          'Designed and implemented an AI-based lip-syncing model integrating deep learning and natural language processing.',
      },
    ],
    papers: [],
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

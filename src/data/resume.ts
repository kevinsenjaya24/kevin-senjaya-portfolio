export const personalInfo = {
  name: 'Kevin Senjaya',
  title: 'Junior Manager Software Developer',
  roles: [
    'Backend Engineer',
    'System Architect',
    'Software Developer',
    'Tech Lead',
  ],
  description:
    'Experienced Backend Engineer & Software Developer with 6+ years building scalable systems. Specialized in high-traffic promotional platforms, ecommerce backends, and distributed system architecture. Currently leading technical direction at Arrangely.io while driving backend innovation at Indomaret Group.',
  shortBio:
    'Backend-focused engineer passionate about scalable systems, clean architecture, and building reliable digital products that handle millions of users.',
  contact: {
    phone: '08986062538',
    phoneHref: 'tel:+6208986062538',
    email: 'kevinsenjaya72@gmail.com',
    emailHref: 'mailto:kevinsenjaya72@gmail.com',
    location: 'Jakarta, Indonesia',
  },
}

export interface Role {
  title: string
  period: string
  duration: string
  type?: string
  division?: string
  description?: string[]
  skills?: string[]
}

export interface Experience {
  company: string
  logo: string
  location: string
  type: string
  roles: Role[]
}

export const experiences: Experience[] = [
  {
    company: 'Indomaret Group',
    logo: '🏪',
    location: 'Area DKI Jakarta',
    type: 'Full-time',
    roles: [
      {
        title: 'Junior Manager Software Developer',
        period: 'Jan 2026 – Present',
        duration: '4 months',
        description: [
          'Architected system design for Promotion Fair – Total Discount (TSD) to support scalable promotional transactions.',
          'Designed backend strategy for the Parcel Promotion System ensuring efficient campaign processing and system reliability.',
          'Led the Get Coupon – New Device Promotion Project, defining system workflows, validation mechanisms, and scalable backend architecture.',
          'Led technical implementation for Promosi Mudik Campaign handling high promotional traffic and mass campaign participation.',
          'Coordinated with product, QA, and engineering teams to align business requirements with technical solutions.',
          'Ensured backend systems were scalable, maintainable, and optimized for high-volume promotional campaigns.',
        ],
      },
      {
        title: 'Software Developer',
        period: 'Jun 2022 – Jan 2026',
        duration: '3 yrs 8 mos',
        division: 'MDPS IT Ecommerce (Klik Indomaret)',
        description: [
          'Developed and implemented backend systems for Promotion Fair – Total Discount, enabling automated discount calculations and campaign management.',
          'Built backend services for Promotion Limitation – New Device, implementing device-based validation and eligibility logic.',
          'Developed Get Coupon Promotion features including coupon generation, validation, and redemption logic.',
          'Implemented Promotion Fair iKupon – Total Discount, integrating coupon-based promotional mechanisms with fair campaign rules.',
          'Developed backend logic for Tebus Murah & Hadiah Promotion, handling reward distribution and promotional redemption flows.',
          'Developed Mass Upload iKupon Promotion allowing bulk coupon creation and management via batch processing.',
          'Built backend services supporting Mudik Promotion Campaign, ensuring scalable processing of promotional participation.',
          'Implemented backend systems for Parcel Promotion Campaign, supporting promotional packages and campaign tracking.',
        ],
        skills: ['Spring Boot', '.NET Framework'],
      },
    ],
  },
  {
    company: 'Arrangely.io',
    logo: '📅',
    location: 'Remote',
    type: 'Freelance',
    roles: [
      {
        title: 'Head of Information Technology',
        period: 'Jul 2025 – Present',
        duration: '10 months',
        description: [
          'Defining end-to-end system architecture and technical direction for the platform.',
          'Translating product vision into scalable technical solutions.',
          'Leading, growing, and managing engineering teams.',
          'Ensuring performance, reliability, and long-term sustainability of the platform.',
        ],
        skills: ['IT Leadership', 'Information Technology Infrastructure', 'System Architecture', 'Team Management'],
      },
    ],
  },
  {
    company: 'Rolling Glory',
    logo: '🎮',
    location: 'Jawa Barat, Indonesia',
    type: 'Multi-role',
    roles: [
      {
        title: 'Back End Developer',
        period: 'May 2022 – Dec 2025',
        duration: '3 yrs 8 mos',
        type: 'Part-time · Remote',
        skills: ['.NET Core', 'Yii', 'C#', 'PHP'],
      },
      {
        title: 'Back End Developer',
        period: 'Jan 2022 – Jun 2022',
        duration: '6 mos',
        type: 'Full-time',
      },
      {
        title: 'Back End Developer',
        period: 'Jul 2021 – Jan 2022',
        duration: '7 mos',
        type: 'Internship',
      },
      {
        title: 'Web Administrator',
        period: 'Sep 2019 – Jan 2022',
        duration: '2 yrs 5 mos',
        type: 'Part-time',
      },
      {
        title: 'Account Manager',
        period: 'Jun 2019 – Aug 2019',
        duration: '3 mos',
        type: 'Internship',
      },
    ],
  },
  {
    company: 'Freelance Web Developer',
    logo: '💻',
    location: 'Remote',
    type: 'Freelance',
    roles: [
      {
        title: 'Web Developer',
        period: 'Jan 2021 – Nov 2022',
        duration: '1 yr 6 mos',
        description: [
          'Built Lomarc.com using PHP Native.',
          'Developed Blacksmith18.com with React.js & Laravel.',
          'Created NinoNews World – news platform.',
          'Built Propert123 – property listing platform.',
        ],
        skills: ['PHP Native', 'React.js', 'Laravel'],
      },
    ],
  },
]

export const projects = [
  {
    name: 'Arrangely',
    category: 'Mobile App',
    description:
      'An event management & scheduling app designed to streamline event planning, team coordination, and scheduling workflows. Serving as Head of IT, led the full technical architecture and engineering team.',
    tech: ['Mobile', 'System Architecture', 'Backend', 'IT Leadership'],
    links: {
      playstore: 'https://play.google.com/store/apps/details?id=arrangely.app&hl=id',
    },
    highlight: true,
    badge: 'Live on Play Store',
  },
  {
    name: 'Butterbaby',
    category: 'Mobile App',
    description:
      'A mobile application delivering a seamless digital experience. Built with focus on performance, reliability, and user-friendly design for the Indonesian market.',
    tech: ['Mobile', 'Backend', 'API Design'],
    links: {
      playstore: 'https://play.google.com/store/apps/details?id=com.butterbaby.co&hl=id',
    },
    highlight: true,
    badge: 'Live on Play Store',
  },
  {
    name: 'Salesku',
    category: 'Web Platform',
    description:
      'A sales management platform by Harmoni Inovasi empowering businesses to track, manage, and optimize their sales pipelines with an intuitive dashboard and analytics.',
    tech: ['Web', 'Backend', 'Dashboard', 'Analytics'],
    links: {
      web: 'https://salesku.harmoniinovasi.com/',
    },
    highlight: true,
    badge: 'Live',
  },
  {
    name: 'Harmoni Inovasi',
    category: 'Company Platform',
    description:
      'Corporate platform for Harmoni Inovasi, a technology company delivering innovative digital solutions. Full system design and development contributing to company growth.',
    tech: ['Web', 'Corporate', 'Full-stack'],
    links: {
      web: 'https://harmoniinovasi.com/',
    },
    highlight: false,
    badge: 'Live',
  },
  {
    name: 'Klik Indomaret',
    category: 'Ecommerce Platform',
    description:
      'Indonesia\'s leading retail ecommerce platform. Developed and maintained scalable backend systems for promotional campaigns serving millions of users including coupon, discount, and parcel systems.',
    tech: ['Spring Boot', '.NET Framework', 'Backend', 'Ecommerce', 'High Traffic'],
    links: {},
    highlight: true,
    badge: 'Enterprise',
  },
  {
    name: 'Blacksmith18.com',
    category: 'Freelance',
    description:
      'Full-stack web platform built with React.js frontend and Laravel backend. Delivered a performant and maintainable web solution for the client.',
    tech: ['React.js', 'Laravel', 'PHP', 'Full-stack'],
    links: {},
    highlight: false,
    badge: 'Completed',
  },
]

export const skills = [
  {
    category: 'Backend',
    icon: '⚙️',
    items: [
      { name: 'Java', level: 90 },
      { name: 'Spring Boot', level: 90 },
      { name: 'C#', level: 85 },
      { name: '.NET Core', level: 85 },
      { name: '.NET Framework', level: 80 },
      { name: 'PHP', level: 80 },
      { name: 'Laravel', level: 75 },
      { name: 'Yii Framework', level: 75 },
    ],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    items: [
      { name: 'React.js', level: 75 },
      { name: 'TypeScript', level: 70 },
      { name: 'JavaScript', level: 80 },
      { name: 'Next.js', level: 65 },
      { name: 'HTML/CSS', level: 80 },
    ],
  },
  {
    category: 'Database',
    icon: '🗄️',
    items: [
      { name: 'MySQL', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'SQL Server', level: 75 },
      { name: 'Redis', level: 70 },
    ],
  },
  {
    category: 'Tools & Infrastructure',
    icon: '🛠️',
    items: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'REST APIs', level: 90 },
      { name: 'Microservices', level: 75 },
      { name: 'System Architecture', level: 85 },
      { name: 'IT Leadership', level: 80 },
    ],
  },
]

export const stats = [
  { label: 'Years Experience', value: '6+' },
  { label: 'Projects Delivered', value: '20+' },
  { label: 'Companies Served', value: '4+' },
  { label: 'Apps on Play Store', value: '2' },
]

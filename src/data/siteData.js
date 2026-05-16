import {
  AppWindow, Bot, BriefcaseBusiness, Building2, CheckCircle2, CloudCog, Code2,
  DatabaseZap, FileCode2, Gauge, Globe2, Handshake, Headphones, Layers3, LayoutDashboard,
  LockKeyhole, Megaphone, MonitorSmartphone, Palette, Rocket, SearchCheck, ShieldCheck,
  ShoppingCart, Smartphone, Workflow
} from 'lucide-react'

export const company = {
  name: 'VortaxStudio',
  tagline: 'Your Vision, Our Mission',
  phone: '+923166237612',
  phoneDisplay: '+92 316 623 7612',
  email: 'vortaxstudio6@gmail.com',
  location: 'Pakistan • Remote Worldwide'
}

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Team', path: '/team' },
  { label: 'Contact', path: '/contact' }
]

export const stats = [
  { value: '360°', label: 'Digital Delivery' },
  { value: '15+', label: 'Service Areas' },
  { value: '24/7', label: 'Support Ready' },
  { value: '100%', label: 'Responsive UI' }
]

export const coreServices = [
  {
    icon: Code2,
    slug: 'software-development',
    title: 'Software Development',
    text: 'Scalable platforms, internal tools, SaaS products, dashboards, APIs, and full-stack custom software built for growth.',
    bullets: ['Custom software', 'SaaS platforms', 'Business portals'],
    image: '/images/service-software-development.jpg',
    overview: 'We design and build production-ready software systems that support your daily operations, customer experience, internal workflows, and long-term business growth.',
    details: [
      'Full-stack web platforms, admin panels, customer portals, dashboards, APIs, and database-driven systems.',
      'Clean architecture with reusable components, scalable backend structure, secure data flow, and maintainable code.',
      'Practical planning from idea to launch so every feature is organized, tested, and ready for real business use.'
    ],
    deliverables: ['Feature planning', 'Frontend development', 'Backend APIs', 'Database design', 'Deployment support', 'Maintenance plan'],
    technologies: ['React', 'Laravel', 'Node.js', 'REST APIs', 'MySQL', 'Cloud hosting'],
    outcomes: ['Scalable system structure', 'Reliable workflows', 'Better business efficiency'],
    seoTitle: 'Software Development Services | VortaxStudio',
    seoDescription: 'VortaxStudio provides scalable custom software development, SaaS platforms, dashboards, APIs, business portals, and production-ready digital systems.'
  },
  {
    icon: Globe2,
    slug: 'web-development',
    title: 'Web Development',
    text: 'Modern websites and web apps with clean UX, strong performance, SEO structure, and responsive layouts.',
    bullets: ['React websites', 'Admin dashboards', 'API integrations'],
    image: '/images/service-web-development.jpg',
    overview: 'We create responsive, SEO-friendly websites and web applications that look professional, load smoothly, and support your business goals.',
    details: [
      'Corporate websites, landing pages, service websites, dashboards, product pages, and web apps.',
      'Responsive layouts for mobile, tablet, laptop, and desktop with polished UI and smooth transitions.',
      'SEO-ready structure, clean headings, meta setup, optimized content sections, and professional page hierarchy.'
    ],
    deliverables: ['Website planning', 'Responsive UI', 'SEO structure', 'Speed-focused layout', 'Contact flow', 'Launch support'],
    technologies: ['React', 'Vite', 'Tailwind CSS', 'SEO meta', 'API integrations'],
    outcomes: ['Professional online presence', 'Better conversion flow', 'Responsive experience'],
    seoTitle: 'Web Development Services | VortaxStudio',
    seoDescription: 'Professional web development services by VortaxStudio including SEO-friendly websites, React web apps, dashboards, responsive layouts, and integrations.'
  },
  {
    icon: Smartphone,
    slug: 'app-development',
    title: 'App Development',
    text: 'Professional mobile-first applications and cross-platform experiences for customers, teams, and operations.',
    bullets: ['Mobile UI', 'App flows', 'Backend integration'],
    image: '/images/service-app-development.jpg',
    overview: 'We plan and build mobile-first applications with clean user flows, professional interface design, backend integration, and scalable app structure.',
    details: [
      'Customer apps, internal team apps, booking flows, order flows, dashboards, and mobile-first business tools.',
      'Clear screens, smooth navigation, secure data handling, and practical backend connectivity.',
      'Focused app planning so the product is usable, maintainable, and ready for future expansion.'
    ],
    deliverables: ['App strategy', 'Mobile UI flows', 'Screen design', 'Backend connection', 'Testing support', 'Release guidance'],
    technologies: ['React Native planning', 'Flutter planning', 'APIs', 'Authentication', 'Cloud data'],
    outcomes: ['Mobile-ready product', 'Better user experience', 'Scalable app foundation'],
    seoTitle: 'App Development Services | VortaxStudio',
    seoDescription: 'VortaxStudio builds professional mobile-first apps, app interfaces, app workflows, backend integrations, and scalable application experiences.'
  },
  {
    icon: Palette,
    slug: 'ux-ui-design',
    title: 'UX/UI Design',
    text: 'High-converting user interfaces, polished design systems, wireframes, prototypes, and product experiences.',
    bullets: ['Design systems', 'Landing pages', 'Product UI'],
    image: '/images/service-ui-ux-design.jpg',
    overview: 'We design clean, modern, conversion-focused interfaces that make your website, app, dashboard, or software product easier to understand and use.',
    details: [
      'Wireframes, interface layouts, design systems, landing page UI, product UI, and dashboard design.',
      'Consistent spacing, typography, buttons, cards, sections, forms, and responsive states.',
      'Design decisions focused on clarity, trust, usability, and professional presentation.'
    ],
    deliverables: ['Wireframes', 'UI layouts', 'Design system', 'Responsive screens', 'Prototype flow', 'Developer-ready structure'],
    technologies: ['Figma', 'Design systems', 'Responsive UI', 'UX flows', 'Accessibility basics'],
    outcomes: ['Cleaner user journey', 'Professional visual identity', 'Higher user trust'],
    seoTitle: 'UX/UI Design Services | VortaxStudio',
    seoDescription: 'VortaxStudio provides UI/UX design services for websites, apps, dashboards, landing pages, design systems, and product experiences.'
  },
  {
    icon: Building2,
    slug: 'business-applications',
    title: 'Business Applications',
    text: 'Business automation and enterprise systems including Dynamics 365 ERP, Dynamics 365 CRM, Power Apps, and Salesforce.',
    bullets: ['Dynamics 365', 'Power Apps', 'Salesforce'],
    image: '/images/service-business-applications.jpg',
    overview: 'We help businesses improve operations with practical business applications, CRM workflows, ERP support, Power Apps, Salesforce, and automation systems.',
    details: [
      'Business workflows for finance, sales, marketing, administration, operations, and support teams.',
      'CRM and ERP-focused planning for structured data, approvals, reporting, and daily productivity.',
      'Custom apps and automations that reduce manual work and improve visibility across teams.'
    ],
    deliverables: ['Workflow mapping', 'CRM planning', 'Power Apps support', 'ERP support', 'Automation setup', 'User training guidance'],
    technologies: ['Dynamics 365', 'Power Apps', 'Salesforce', 'Dataverse', 'Business dashboards'],
    outcomes: ['Improved operations', 'Reduced manual work', 'Better reporting'],
    seoTitle: 'Business Application Services | Dynamics 365, Power Apps & Salesforce',
    seoDescription: 'VortaxStudio supports business applications including Dynamics 365 ERP, Dynamics 365 CRM, Power Apps, Salesforce, workflows, dashboards, and automation.'
  },
  {
    icon: SearchCheck,
    slug: 'quality-assurance',
    title: 'Quality Assurance',
    text: 'Manual and automated testing support to make software stable, reliable, secure, and production-ready.',
    bullets: ['Functional QA', 'Regression testing', 'Release checks'],
    image: '/images/service-quality-assurance.jpg',
    overview: 'We test software carefully so websites, apps, dashboards, and workflows are stable, responsive, usable, and ready for launch.',
    details: [
      'Manual QA, functional testing, responsive testing, regression testing, bug reports, and release checks.',
      'Real-world testing across flows such as signup, forms, orders, dashboards, admin panels, and payment paths.',
      'Clear issue reporting so problems can be fixed before users experience them.'
    ],
    deliverables: ['Test plan', 'Bug reports', 'Responsive QA', 'Regression checks', 'Release checklist', 'QA summary'],
    technologies: ['Manual testing', 'Browser testing', 'Responsive testing', 'QA checklist', 'Automation planning'],
    outcomes: ['Fewer launch issues', 'More stable software', 'Better user confidence'],
    seoTitle: 'Quality Assurance Services | Software Testing | VortaxStudio',
    seoDescription: 'VortaxStudio provides QA testing, manual testing, regression testing, responsive testing, release checks, and software quality support.'
  },
  {
    icon: CloudCog,
    slug: 'devops',
    title: 'DevOps',
    text: 'Deployment pipelines, CI/CD, hosting setup, cloud configuration, monitoring, and release management.',
    bullets: ['CI/CD', 'Hosting setup', 'Monitoring'],
    image: '/images/service-devops.jpg',
    overview: 'We help prepare your software for reliable deployment, better hosting, release workflows, monitoring, and maintainable production environments.',
    details: [
      'Hosting setup, deployment flows, environment configuration, domain setup, SSL, build handling, and release support.',
      'CI/CD planning and deployment best practices to reduce manual errors and speed up releases.',
      'Monitoring-focused structure so performance and uptime can be improved over time.'
    ],
    deliverables: ['Deployment setup', 'Build configuration', 'CI/CD planning', 'Hosting support', 'Environment setup', 'Monitoring guidance'],
    technologies: ['VPS hosting', 'Cloud hosting', 'Git workflows', 'CI/CD', 'Docker planning'],
    outcomes: ['Reliable deployment', 'Cleaner release process', 'Improved uptime readiness'],
    seoTitle: 'DevOps Services | Deployment, CI/CD & Hosting | VortaxStudio',
    seoDescription: 'VortaxStudio provides DevOps support, deployment setup, CI/CD planning, hosting configuration, cloud setup, monitoring, and release management.'
  },
  {
    icon: ShieldCheck,
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    text: 'Security-first development, vulnerability checks, access control, secure configuration, and compliance-minded delivery.',
    bullets: ['Secure coding', 'Access control', 'Risk checks'],
    image: '/images/service-cybersecurity.jpg',
    overview: 'We apply security-conscious planning to help protect your website, app, API, data, users, and production environment from common risks.',
    details: [
      'Access control, secure forms, API safety, role-based flows, configuration checks, and basic vulnerability review.',
      'Security-focused development practices for authentication, permissions, sensitive data, and backend communication.',
      'Practical recommendations to improve reliability, trust, and risk management.'
    ],
    deliverables: ['Security review', 'Access control planning', 'Risk checks', 'Secure configuration', 'API safety guidance', 'Improvement report'],
    technologies: ['Role-based access', 'Secure APIs', 'SSL', 'Auth flows', 'Risk checklist'],
    outcomes: ['Reduced security risk', 'Better trust', 'Safer data handling'],
    seoTitle: 'Cybersecurity Services | Secure Software Delivery | VortaxStudio',
    seoDescription: 'VortaxStudio provides cybersecurity-focused development, secure configuration, access control, API safety, risk checks, and secure delivery guidance.'
  },
  {
    icon: ShoppingCart,
    slug: 'e-commerce',
    title: 'E-commerce',
    text: 'Online stores, product catalogs, checkout flows, payment integration, order dashboards, and marketplace workflows.',
    bullets: ['Stores', 'Payments', 'Orders'],
    image: '/images/service-ecommerce.jpg',
    overview: 'We build e-commerce experiences that support product catalogs, checkout flows, payment integrations, customer journeys, and admin order management.',
    details: [
      'Online stores, product pages, category pages, carts, checkouts, order dashboards, and payment workflows.',
      'Responsive shopping experiences with clean UI, smooth navigation, and conversion-focused product presentation.',
      'Integration support for APIs, shipping, payment, order management, and custom business logic.'
    ],
    deliverables: ['Storefront UI', 'Product catalog', 'Cart and checkout', 'Payment flow', 'Order dashboard', 'Integration support'],
    technologies: ['React', 'WooCommerce planning', 'Stripe/Square planning', 'APIs', 'Order workflows'],
    outcomes: ['Better shopping flow', 'Smoother operations', 'Higher conversion readiness'],
    seoTitle: 'E-commerce Development Services | VortaxStudio',
    seoDescription: 'VortaxStudio builds e-commerce websites, online stores, product catalogs, checkout flows, payment integrations, and order dashboards.'
  },
  {
    icon: Bot,
    slug: 'automation-apps',
    title: 'Automation & Apps',
    text: 'Workflow automation, internal productivity apps, CRM automations, and business process optimization.',
    bullets: ['Automations', 'Internal tools', 'Integrations'],
    image: '/images/service-automation-apps.jpg',
    overview: 'We create automation systems and internal apps that reduce repetitive work, connect tools, and help teams complete daily tasks faster.',
    details: [
      'Workflow automation, CRM automations, internal tools, reporting flows, approvals, and operational apps.',
      'Integrations between forms, dashboards, databases, email, CRM, sales, admin, and support systems.',
      'Practical automation planning based on the real process your team already follows.'
    ],
    deliverables: ['Workflow mapping', 'Automation setup', 'Internal app UI', 'Integration flow', 'Testing', 'Support plan'],
    technologies: ['Power Apps', 'APIs', 'CRM automations', 'Webhooks', 'Dashboards'],
    outcomes: ['Time savings', 'Fewer manual tasks', 'Better team productivity'],
    seoTitle: 'Automation & App Development Services | VortaxStudio',
    seoDescription: 'VortaxStudio builds workflow automations, internal apps, CRM automations, dashboards, integrations, and business productivity tools.'
  },
  {
    icon: Headphones,
    slug: 'maintenance-support',
    title: 'Maintenance & Support',
    text: 'Client care, bug fixes, upgrades, monitoring, performance improvements, and long-term product maintenance.',
    bullets: ['Care plans', 'Bug fixing', 'Performance'],
    image: '/images/service-maintenance-support.jpg',
    overview: 'We provide ongoing maintenance and support to keep your website, app, software, or business system secure, updated, and performing smoothly.',
    details: [
      'Bug fixes, updates, performance improvements, monitoring, content support, and feature improvements.',
      'Long-term care for websites, apps, dashboards, e-commerce stores, APIs, and business workflows.',
      'Clear communication and practical support so your product remains reliable after launch.'
    ],
    deliverables: ['Bug fixing', 'Updates', 'Performance checks', 'Monitoring guidance', 'Feature support', 'Care plan'],
    technologies: ['Website support', 'App support', 'Hosting checks', 'Performance tools', 'Issue tracking'],
    outcomes: ['Long-term reliability', 'Better performance', 'Continuous improvement'],
    seoTitle: 'Maintenance & Support Services | VortaxStudio',
    seoDescription: 'VortaxStudio provides website maintenance, software support, bug fixing, updates, monitoring, performance improvements, and long-term care plans.'
  },
  {
    icon: Megaphone,
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    text: 'Sales and marketing support for websites, campaigns, SEO-ready pages, analytics, and conversion-focused funnels.',
    bullets: ['SEO setup', 'Campaign pages', 'Analytics'],
    image: '/images/service-digital-marketing.jpg',
    overview: 'We support digital growth with SEO-ready pages, campaign landing pages, analytics setup, marketing funnels, and conversion-focused website improvements.',
    details: [
      'SEO page structure, content sections, landing pages, analytics, lead capture flows, and conversion-focused improvements.',
      'Marketing support for service websites, software products, e-commerce brands, and business campaigns.',
      'Clear tracking and page structure so your website can support better traffic and inquiries.'
    ],
    deliverables: ['SEO page structure', 'Landing pages', 'Lead forms', 'Analytics setup', 'Campaign pages', 'Conversion guidance'],
    technologies: ['SEO meta', 'Analytics', 'Landing pages', 'Funnels', 'Content structure'],
    outcomes: ['Better search readiness', 'More inquiry flow', 'Clearer campaign pages'],
    seoTitle: 'Digital Marketing Services | SEO & Growth Pages | VortaxStudio',
    seoDescription: 'VortaxStudio provides digital marketing support including SEO-ready pages, landing pages, analytics, campaign pages, conversion funnels, and growth support.'
  }
]

export const capabilities = [
  { icon: Layers3, title: 'Digital Transformation', text: 'Modernize operations with better systems, automation, and customer-facing digital experiences.' },
  { icon: AppWindow, title: 'Design & Development', text: 'From idea to launch, we create polished interfaces and reliable technical foundations.' },
  { icon: FileCode2, title: 'Custom Software Development', text: 'Tailored tools for finance, sales, marketing, admin, operations, and customer support teams.' },
  { icon: LayoutDashboard, title: 'Business Dashboards', text: 'Smart dashboards for data, reporting, analytics, orders, users, invoices, and workflows.' },
  { icon: DatabaseZap, title: 'API & Database Systems', text: 'Clean integrations, structured data, secure APIs, and scalable backend architecture.' },
  { icon: BriefcaseBusiness, title: 'Professional Services & IT', text: 'Ongoing IT, client care, administrative, finance, accounting, and delivery support services.' }
]

export const processSteps = [
  { title: 'Discover', text: 'We understand your goals, users, workflows, required features, timeline, and launch priorities.' },
  { title: 'Plan', text: 'We define the scope, architecture, page structure, user journeys, and delivery roadmap.' },
  { title: 'Design', text: 'We create clean UI, responsive layouts, reusable sections, and a professional visual system.' },
  { title: 'Develop', text: 'We build scalable frontend, backend, APIs, integrations, dashboards, and business workflows.' },
  { title: 'Test & Launch', text: 'We review performance, responsiveness, usability, bugs, SEO basics, and deployment readiness.' },
  { title: 'Support', text: 'We provide maintenance, improvements, automation, monitoring, and long-term client care.' }
]

export const whyChoose = [
  { icon: Rocket, title: 'Production Mindset', text: 'Built with clean structure, reusable components, optimized pages, and deployment-ready workflows.' },
  { icon: MonitorSmartphone, title: 'Responsive by Default', text: 'Every page is designed to work smoothly across mobile, tablet, laptop, and desktop screens.' },
  { icon: Gauge, title: 'Performance Focused', text: 'Fast-loading sections, lightweight animation, clean code, and SEO-friendly page structure.' },
  { icon: LockKeyhole, title: 'Secure Approach', text: 'Security-conscious implementation for forms, access, APIs, integrations, and deployment.' },
  { icon: Handshake, title: 'Long-Term Partner', text: 'We do not just build and leave. We support, improve, and scale your product over time.' }
]

export const teamMembers = [
  {
    slug: 'founder-software-lead',
    name: 'Team Member 1',
    role: 'Founder & Software Lead',
    image: '/images/team-1.jpg',
    bio: 'Leads software architecture, client strategy, full-stack development, and scalable product delivery.',
    summary: 'A software delivery lead focused on turning business requirements into clear, scalable, and production-ready digital systems.',
    detail: 'This role connects client goals with practical software planning. From technical architecture and feature structure to delivery direction and long-term scalability, the focus is to build reliable systems that are easy to maintain and ready for real business use.',
    responsibilities: [
      'Plan scalable software architecture, technical workflows, and feature structures for websites, apps, SaaS products, dashboards, and business systems.',
      'Guide full-stack development decisions, API planning, database structure, integrations, and deployment readiness.',
      'Work with clients to understand business requirements and convert them into practical development milestones.'
    ],
    skills: ['Software Architecture', 'Full-Stack Planning', 'APIs', 'SaaS Platforms', 'Dashboards', 'Client Strategy'],
    focus: ['Custom software delivery', 'Technical planning', 'Scalable backend structure', 'Production deployment'],
    seoTitle: 'Founder & Software Lead | VortaxStudio Team',
    seoDescription: 'Meet the VortaxStudio Founder & Software Lead responsible for software architecture, client strategy, full-stack planning, and scalable product delivery.'
  },
  {
    slug: 'ui-ux-frontend-specialist',
    name: 'Team Member 2',
    role: 'UI/UX & Frontend Specialist',
    image: '/images/team-2.jpg',
    bio: 'Creates clean, responsive, user-friendly interfaces with smooth interactions and professional design systems.',
    summary: 'A design and frontend specialist focused on creating modern interfaces that feel smooth, responsive, and professional across all devices.',
    detail: 'This role shapes the visual experience of every product. From wireframes and layouts to responsive frontend implementation, the goal is to create clean user journeys, polished sections, readable content, and conversion-focused interfaces.',
    responsibilities: [
      'Design responsive UI layouts, landing pages, dashboards, forms, navigation systems, and reusable interface components.',
      'Build frontend experiences with smooth transitions, scalable spacing, consistent typography, and mobile-friendly structures.',
      'Improve usability, visual hierarchy, content flow, and user experience for websites, apps, and software platforms.'
    ],
    skills: ['UI/UX Design', 'Frontend Development', 'Responsive Layouts', 'Design Systems', 'Landing Pages', 'User Experience'],
    focus: ['Professional interface design', 'Mobile responsiveness', 'Smooth frontend interactions', 'Reusable components'],
    seoTitle: 'UI/UX & Frontend Specialist | VortaxStudio Team',
    seoDescription: 'Meet the VortaxStudio UI/UX and Frontend Specialist focused on responsive interfaces, smooth user experiences, and professional design systems.'
  },
  {
    slug: 'qa-devops-support-engineer',
    name: 'Team Member 3',
    role: 'QA, DevOps & Support Engineer',
    image: '/images/team-3.jpg',
    bio: 'Handles testing, deployment readiness, maintenance, automation, performance checks, and client support.',
    summary: 'A quality and delivery specialist focused on stable launches, responsive testing, deployment support, maintenance, and client care.',
    detail: 'This role helps make every project reliable before and after launch. The focus includes QA checks, performance review, deployment preparation, monitoring, issue tracking, support workflows, and continuous improvement.',
    responsibilities: [
      'Perform QA checks for forms, layouts, responsiveness, user flows, dashboards, integrations, and launch readiness.',
      'Support deployment workflows, hosting setup, release checks, monitoring, maintenance, and performance improvements.',
      'Help clients with ongoing support, bug fixing, updates, automation review, and long-term product care.'
    ],
    skills: ['Quality Assurance', 'DevOps Support', 'Deployment', 'Maintenance', 'Performance Checks', 'Client Support'],
    focus: ['Stable releases', 'Responsive QA', 'Maintenance support', 'Performance improvement'],
    seoTitle: 'QA, DevOps & Support Engineer | VortaxStudio Team',
    seoDescription: 'Meet the VortaxStudio QA, DevOps and Support Engineer focused on testing, deployment readiness, maintenance, performance, and client support.'
  }
]

export const industries = [
  'Startups', 'E-commerce Brands', 'Professional Services', 'Finance & Accounting', 'Sales & Marketing',
  'Administrative Teams', 'SaaS Products', 'Internal Operations', 'Client Support Teams', 'Digital Agencies'
]

export const seoPages = {
  home: {
    title: 'VortaxStudio | Software Development, Web Apps & Digital Transformation',
    description: 'VortaxStudio builds scalable websites, apps, custom software, SaaS platforms, e-commerce solutions, QA, DevOps, cybersecurity, automation, and digital marketing systems.',
    keywords: 'software development company, web development, app development, custom software, SaaS development, e-commerce development, QA, DevOps, cybersecurity, VortaxStudio'
  },
  about: {
    title: 'About VortaxStudio | Professional Software Company',
    description: 'Learn about VortaxStudio, a professional software company focused on scalable digital products, business applications, automation, QA, DevOps, and long-term support.',
    keywords: 'about VortaxStudio, software company, digital transformation, business applications, software team'
  },
  services: {
    title: 'Services | Web Development, App Development, SaaS, QA & DevOps',
    description: 'Explore VortaxStudio services including software development, web development, app development, UI/UX design, Dynamics 365, Salesforce, QA, DevOps, cybersecurity, e-commerce, maintenance, and digital marketing.',
    keywords: 'software services, web development services, app development services, SaaS, QA testing, DevOps, cybersecurity, e-commerce, digital marketing'
  },
  team: {
    title: 'Team | VortaxStudio Software Experts',
    description: 'Meet the VortaxStudio team providing software development, UI/UX, QA, DevOps, support, business apps, and digital transformation services.',
    keywords: 'VortaxStudio team, software experts, UI UX team, QA engineer, DevOps support'
  },
  contact: {
    title: 'Contact VortaxStudio | Start Your Software Project',
    description: 'Contact VortaxStudio for web development, app development, custom software, SaaS, e-commerce, QA, DevOps, cybersecurity, automation and digital transformation services.',
    keywords: 'contact VortaxStudio, software project inquiry, web development contact, app development quote, custom software company'
  }
}

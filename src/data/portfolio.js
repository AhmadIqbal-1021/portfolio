// ─── PORTFOLIO DATA ───────────────────────────────────────────────────────────
// Edit this file to update all portfolio content

export const personal = {
  name: 'Muhammad Ahmad Iqbal',
  firstName: 'Muhammad Ahmad',
  lastName: 'Iqbal',
  role: 'Full-Stack Developer',
  roleTagline: 'Automation Engineer',
  location: 'Lahore, Pakistan',
  email: 'ahmadiqbal1021412@gmail.com',
  github: 'https://github.com/AhmadIqbal-1021/',
  fiverr: 'https://www.fiverr.com/m_ahmad_iqbal21/',
  upwork: 'upwork.com/freelancers/ahmadiqbal',
  bio: `I build Chrome Extensions, web scrapers, and full-stack apps that automate what slows your business down. From eCommerce data extraction to AI-powered tools — I ship production-grade software.`,
  aboutParagraphs: [
    `I'm a <strong>Software Engineering student</strong> with a deep passion for building tools that solve real business problems. My specialty lies at the intersection of web automation, AI integrations, and scalable full-stack architecture.`,
    `Based in <strong>Lahore, Pakistan</strong>, I work with clients globally — helping eCommerce sellers extract competitive intelligence, building Chrome extensions that supercharge productivity, and engineering backend systems that just don't break.`,
    `I approach every project as a <strong>product engineer</strong>: shipping fast, thinking about the end user, and never cutting corners on quality.`,
  ],
}

export const stats = [
  { num: '3+', label: 'Projects Shipped' },
  { num: '10+', label: 'Tech Stack' },
  { num: '∞', label: 'Problems Solved' },
]

export const highlights = [
  {
    icon: '⚡',
    title: 'Chrome Extension Specialist',
    desc: 'Scraping, automation, AI integrations via browser',
  },
  {
    icon: '🤖',
    title: 'AI Integration Expert',
    desc: 'Gemini, REST APIs, intelligent data processing',
  },
  {
    icon: '📊',
    title: 'Data Scraping & Export',
    desc: 'Amazon, web data, CSV pipelines for real clients',
  },
]

export const niches = [
  {
    icon: '🛒',
    title: 'eCommerce Sellers',
    desc: 'Amazon price tracking, product data extraction, competitor analysis tools',
  },
  {
    icon: '⚙️',
    title: 'Business Automation',
    desc: 'Repetitive task automation, browser extension workflows, data pipelines',
  },
  {
    icon: '📱',
    title: 'Startups & Agencies',
    desc: 'Full-stack MVPs, API integrations, scalable web apps',
  },
  {
    icon: '🔬',
    title: 'Data Teams',
    desc: 'Web scraping pipelines, structured data extraction, export automation',
  },
]

export const skillCategories = [
  {
    title: '// Frontend',
    skills: [
      { icon: '⚛️', name: 'React' },
      { icon: '🌐', name: 'HTML5' },
      { icon: '🎨', name: 'CSS3' },
      { icon: '🟨', name: 'JavaScript' },
    ],
  },
  {
    title: '// Backend',
    skills: [
      { icon: '🟢', name: 'Node.js' },
      { icon: '🚂', name: 'Express.js' },
      { icon: '🐘', name: 'PHP' },
      { icon: '🔗', name: 'REST APIs' },
    ],
  },
  {
    title: '// Databases & Tools',
    skills: [
      { icon: '🍃', name: 'MongoDB' },
      { icon: '🐬', name: 'MySQL' },
      { icon: '🔧', name: 'Git' },
      { icon: '🤖', name: 'Gemini API' },
    ],
  },
  {
    title: '// Specialty',
    skills: [
      { icon: '🧩', name: 'Chrome Ext', accent: true },
      { icon: '🕷️', name: 'Web Scraping', accent: true },
      { icon: '📤', name: 'CSV Export' },
      { icon: '🔍', name: 'SEO Tools' },
    ],
  },
]

export const projects = [
  {
    id: 1,
    featured: true,
    number: '01',
    label: 'FEATURED',
    icon: '🧩',
    title: 'Chrome Extension — Scraper & Bookmark Manager',
    desc: 'A production-grade browser extension that scrapes active tab data, manages bookmarks with AI summaries, and provides a WhatsApp-style chat interface powered by Gemini API. Built for power users who live in their browser.',
    features: [
      'Scrapes active tab data with one click',
      'AI-powered summarization via Gemini API',
      'Export to CSV & HTML formats',
      'WhatsApp-style UI with dark/light mode',
      'Notes, history, and bookmark management',
    ],
    tech: ['Chrome Extension API', 'Gemini API', 'JavaScript', 'HTML/CSS'],
    github: 'https://github.com/AhmadIqbal-1021/chrome-scraper-bookmark-manager.git',
    demo: '#',
    thumbCode: `chrome.tabs.query({active:true},
  async (tabs) => {
    const data = await scrapeTab(tabs[0]);
    await gemini.summarize(data);
    exportCSV(data);
  });
// WhatsApp-style UI
// Dark/Light mode toggle
// AI Chat Interface`,
  },
  {
    id: 2,
    featured: false,
    number: '02',
    label: null,
    icon: '🛒',
    title: 'Amazon Product Scraper',
    desc: 'High-performance scraper for Amazon product data — pricing, ratings, and metadata extraction with intelligent rate limiting and error handling for reliable production use.',
    features: [
      'Price, rating & metadata extraction',
      'Rate limiting + error handling',
      'CSV export pipeline',
    ],
    tech: ['Node.js', 'Cheerio', 'Axios', 'CSV'],
    github: '#',
    demo: '#',
    thumbCode: `async function scrapeAmazon(url) {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  return {
    price: $('#price').text(),
    rating: $('[data-rating]').attr(),
    metadata: extractMeta($)
  };
}`,
  },
  {
    id: 3,
    featured: false,
    number: '03',
    label: null,
    icon: '📦',
    title: 'Assets Management System',
    desc: 'A full-stack asset tracking system with a clean REST API backend, CRUD operations, authentication, and a thoughtfully designed database schema for enterprise-grade reliability.',
    features: [
      'Full REST API architecture',
      'CRUD + authentication layer',
      'Optimized DB schema design',
    ],
    tech: ['Node.js', 'Express', 'MongoDB', 'REST API'],
    github: 'https://github.com/AhmadIqbal-1021/assets-management',
    demo: '#',
    thumbCode: `router.get('/assets', auth,
  async (req, res) => {
    const assets = await Asset
      .find(req.query)
      .populate('owner');
    res.json({ assets });
  }
);`,
  },
]

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

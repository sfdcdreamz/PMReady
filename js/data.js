// ============================================================
// PMReady — Data Layer
// All archetype definitions, quiz data, cases, feedback library
// ============================================================

// ── Archetype Definitions ─────────────────────────────────
const ARCHETYPES = {
  technical_pm: {
    id: 'technical_pm',
    name: 'Technical PM',
    emoji: '⚙️',
    tagline: 'Platform builder. Systems thinker. The PM engineers trust.',
    description: 'You thrive when depth matters — API design, infrastructure trade-offs, developer experience. GCCs and SaaS companies need Technical PMs who can credibly bridge engineering and product.',
    salaryRange: '₹15–30 LPA',
    targetCompanies: 'Razorpay, Freshworks, Zoho, Google GCC, Microsoft GCC, Postman',
    companyType: 'Mid-size SaaS / GCC / MNC',
    strengths: ['Systems thinking', 'Engineering credibility', 'API/platform design', 'Failure mode awareness'],
    gaps: ['Stakeholder storytelling', 'User empathy', 'Business strategy'],
    bestBackgrounds: ['engineer', 'qa', 'scrum'],
    weekOneLeads: 'strength'
  },
  growth_pm: {
    id: 'growth_pm',
    name: 'Growth PM',
    emoji: '📈',
    tagline: 'Metric obsessed. Hypothesis-driven. The PM who moves the needle.',
    description: 'You live in funnels. Retention, activation, revenue — you frame every feature as an experiment. India\'s fintech, e-commerce, and SaaS sectors are your playground.',
    salaryRange: '₹12–23.5 LPA',
    targetCompanies: 'Swiggy, Zomato, Meesho, Flipkart, INDmoney, PhonePe, CRED',
    companyType: 'Mid-size product company / Startup / FinTech',
    strengths: ['Data fluency', 'Hypothesis testing', 'Business impact orientation', 'A/B test design'],
    gaps: ['User empathy depth', 'Narrative communication', 'Roadmap ownership'],
    bestBackgrounds: ['analyst', 'mba', 'ops'],
    weekOneLeads: 'strength'
  },
  consumer_pm: {
    id: 'consumer_pm',
    name: 'Consumer PM',
    emoji: '🎨',
    tagline: 'User-first. Experience-obsessed. The PM who makes people love products.',
    description: 'You think in user journeys, pain points, and moments of delight. Consumer-facing apps in India — CRED, Nykaa, Urban Company, MakeMyTrip — are where you\'ll excel.',
    salaryRange: '₹12–22 LPA',
    targetCompanies: 'CRED, Nykaa, MakeMyTrip, Urban Company, OLA, Myntra, Meesho',
    companyType: 'Consumer app / E-commerce / FinTech',
    strengths: ['User empathy', 'UX intuition', 'Customer insight', 'Stakeholder management'],
    gaps: ['Data analytics', 'Business acumen', 'Technical feasibility'],
    bestBackgrounds: ['designer', 'support', 'ba'],
    weekOneLeads: 'strength'
  },
  ai_pm: {
    id: 'ai_pm',
    name: 'AI Product Manager',
    emoji: '🤖',
    tagline: 'Fastest-growing PM category in India. GCCs are hiring now.',
    description: 'India\'s 1,760+ GCCs are investing in Agentic AI. 58% are scaling AI mandates. AI PMs bridge product thinking with ML capabilities — 60% of hires globally are non-CS. Your background is not a barrier.',
    salaryRange: '₹22–65 LPA (PM) → ₹65–90 LPA (Director)',
    targetCompanies: 'Salesforce GCC, Adobe India, Amazon India, Bosch GCC, Google GCC',
    companyType: 'GCC / MNC / AI-first startup',
    strengths: ['Cross-domain thinking', 'AI tool fluency', 'Data reasoning', 'Product prototyping'],
    gaps: ['ML model evaluation', 'AI product roadmapping', 'Responsible AI framing'],
    bestBackgrounds: ['engineer', 'mba', 'analyst', 'designer'],
    weekOneLeads: 'strength'
  }
};

// ── Background Profiles ───────────────────────────────────
const BACKGROUNDS = {
  engineer: {
    id: 'engineer',
    label: 'Software Engineer / Developer',
    emoji: '👩‍💻',
    falsebelief: 'I just need more time on the platforms I\'m already using.',
    platformResponse: 'The gap isn\'t more content — it\'s directed practice. Your technical depth is an asset. User empathy and product narrative are the specific skills to build next.',
    needsValidation: false,
    validationStatement: null,
    primaryArchetype: 'technical_pm',
    secondaryArchetype: 'growth_pm',
  },
  mba: {
    id: 'mba',
    label: 'MBA / Business Graduate',
    emoji: '🎓',
    falsebelief: 'Business thinking is the hard part. I have that covered.',
    platformResponse: 'Your strategic framing is genuinely strong. But PM interviews expose a different gap — product intuition, technical literacy, and the ability to ship. That\'s what we\'ll close.',
    needsValidation: false,
    validationStatement: null,
    primaryArchetype: 'growth_pm',
    secondaryArchetype: 'ai_pm',
  },
  ba: {
    id: 'ba',
    label: 'Business Analyst / Consultant',
    emoji: '📊',
    falsebelief: 'I basically do PM already — I just need a title change.',
    platformResponse: 'You are closer than you think. The specific gap from BA to PM is strategic ownership and outcome accountability. That gap is real, specific, and closeable in 6–10 weeks.',
    needsValidation: false,
    validationStatement: null,
    primaryArchetype: 'consumer_pm',
    secondaryArchetype: 'growth_pm',
  },
  scrum: {
    id: 'scrum',
    label: 'Scrum Master / Agile Coach',
    emoji: '🔄',
    falsebelief: 'I know how product teams work from the inside.',
    platformResponse: 'You know delivery deeply. Product strategy and discovery are upstream of where you\'ve been working — that is the shift we\'re here for. You\'ll reach readiness faster than you expect.',
    needsValidation: false,
    validationStatement: null,
    primaryArchetype: 'technical_pm',
    secondaryArchetype: 'consumer_pm',
  },
  designer: {
    id: 'designer',
    label: 'UX / Product Designer',
    emoji: '🎨',
    falsebelief: 'I already understand users better than most PMs. I just need the business side.',
    platformResponse: 'User empathy is the hardest PM skill to teach from scratch. Most engineers spend years trying — you already have it. We\'ll build the analytics and business vocabulary on top.',
    needsValidation: false,
    validationStatement: null,
    primaryArchetype: 'consumer_pm',
    secondaryArchetype: 'ai_pm',
  },
  qa: {
    id: 'qa',
    label: 'QA Engineer / SDET',
    emoji: '🔍',
    falsebelief: 'My background is too negative and too technical for PM.',
    platformResponse: null, // handled via validation flow
    needsValidation: true,
    validationStatement: 'Edge-case thinking and failure mode awareness are exactly the PM skills that take the most years to develop from scratch. You already have them. You are starting from an undervalued advantage — not a deficit.',
    primaryArchetype: 'technical_pm',
    secondaryArchetype: 'ai_pm',
  },
  ops: {
    id: 'ops',
    label: 'Operations / Program Manager',
    emoji: '⚙️',
    falsebelief: 'I manage products already — I just have a different title.',
    platformResponse: null,
    needsValidation: true,
    validationStatement: 'Cross-functional execution without authority is one of the rarest PM skills. You execute without being the decision-maker — that discipline and coordination instinct is exactly what product teams need. You are starting with more than you realise.',
    primaryArchetype: 'growth_pm',
    secondaryArchetype: 'consumer_pm',
  },
  support: {
    id: 'support',
    label: 'Customer Success / Product Support',
    emoji: '🤝',
    falsebelief: 'I know the product better than the PMs who built it.',
    platformResponse: null,
    needsValidation: true,
    validationStatement: 'You have spoken to more real users in a week than most PMs see in a quarter. That unfiltered user truth is the most valuable raw material in product management. We will give you the PM vocabulary to make it audible in interviews.',
    primaryArchetype: 'consumer_pm',
    secondaryArchetype: 'growth_pm',
  },
  analyst: {
    id: 'analyst',
    label: 'Data / Business / Financial Analyst',
    emoji: '📈',
    falsebelief: 'I just need the product strategy part added on.',
    platformResponse: 'You are likely 8–10 weeks from readiness, not 6 months. Your quantitative foundation is the hardest PM skill to develop from scratch. The specific gap is user empathy and narrative communication — both teachable, both faster to close than you think.',
    needsValidation: false,
    validationStatement: null,
    primaryArchetype: 'growth_pm',
    secondaryArchetype: 'ai_pm',
  },
  switcher: {
    id: 'switcher',
    label: 'Career Switcher (Sales, Marketing, Healthcare, etc.)',
    emoji: '🌐',
    falsebelief: 'My background is too different. I need to start from zero.',
    platformResponse: null,
    needsValidation: true,
    validationStatement: 'Your domain expertise is the exact thing that will differentiate you in the right PM roles. A former teacher at an EdTech company. A healthcare professional at HealthTech. We will find the PM role where your background is the moat — not the obstacle.',
    primaryArchetype: 'consumer_pm',
    secondaryArchetype: 'ai_pm',
  }
};

// ── Quiz Questions ────────────────────────────────────────
const QUIZ_QUESTIONS = [
  {
    id: 'q1',
    layer: 1,
    question: 'How long have you been preparing for a PM role?',
    hint: 'Be honest — this helps us skip what you\'ve already covered.',
    type: 'single',
    options: [
      { value: 'just_starting', label: 'Just starting out', sub: 'This is literally Day 1', icon: '🌱' },
      { value: '1_3_months', label: '1–3 months in', sub: 'Some courses, exploring options', icon: '📖' },
      { value: '4_6_months', label: '4–6 months in', sub: 'Multiple platforms, some applications', icon: '⚡' },
      { value: '6_plus_months', label: '6+ months in', sub: 'Deep in it — multiple rejections possible', icon: '🔥' }
    ]
  },
  {
    id: 'q2',
    layer: 1,
    question: 'Which of these have you tried? (Select all that apply)',
    hint: 'We\'ll skip the basics for things you\'ve already covered.',
    type: 'multi',
    options: [
      { value: 'udemy', label: 'Udemy / Coursera PM courses', icon: '🖥️' },
      { value: 'nextleap', label: 'NextLeap / HelloPM / PM School', icon: '🚀' },
      { value: 'youtube', label: 'YouTube channels / free content', icon: '▶️' },
      { value: 'books', label: 'PM books (Inspired, Hooked, etc.)', icon: '📚' },
      { value: 'community', label: 'Product Folks / ProductHood communities', icon: '👥' },
      { value: 'nothing', label: 'Nothing yet — fresh start', icon: '0️⃣' }
    ]
  },
  {
    id: 'q3',
    layer: 2,
    question: 'What is your current professional background?',
    hint: 'This determines your starting point — your strengths and your gaps are different from everyone else\'s.',
    type: 'single',
    options: [
      { value: 'engineer', label: 'Software Engineer / Developer', sub: '60–70% of India PMs', icon: '👩‍💻' },
      { value: 'mba', label: 'MBA / Business Graduate', sub: 'Strategy, consulting, operations', icon: '🎓' },
      { value: 'ba', label: 'Business Analyst / Consultant', sub: 'Requirements, BRD, stakeholders', icon: '📊' },
      { value: 'designer', label: 'UX / Product Designer', sub: 'User research, wireframes, UX', icon: '🎨' },
      { value: 'analyst', label: 'Data / Business / Financial Analyst', sub: 'SQL, dashboards, A/B tests', icon: '📈' },
      { value: 'qa', label: 'QA Engineer / SDET', sub: 'Testing, automation, edge cases', icon: '🔍' },
      { value: 'scrum', label: 'Scrum Master / Agile Coach', sub: 'Sprints, backlogs, facilitation', icon: '🔄' },
      { value: 'ops', label: 'Operations / Program Manager', sub: 'City ops, supply chain, cross-functional', icon: '⚙️' },
      { value: 'support', label: 'Customer Success / Product Support', sub: 'Direct user contact, escalations', icon: '🤝' },
      { value: 'switcher', label: 'Something else entirely', sub: 'Sales, marketing, healthcare, teaching…', icon: '🌐' }
    ]
  },
  {
    id: 'q4',
    layer: 2,
    question: 'A consumer app\'s 30-day retention drops 15%. What\'s your immediate first move?',
    hint: 'There\'s no single right answer — we\'re detecting how you think, not testing what you know.',
    type: 'single',
    options: [
      { value: 'data_first', label: 'Dig into the data — segment by cohort, platform, geography', sub: 'Find where the drop is concentrated before forming hypotheses', icon: '📊' },
      { value: 'user_first', label: 'Talk to users who churned — find out why in their own words', sub: 'Qualitative insight before quantitative analysis', icon: '💬' },
      { value: 'hypothesis_first', label: 'Form 2–3 hypotheses and design tests for each simultaneously', sub: 'Structure the investigation before diving in', icon: '🧪' },
      { value: 'fix_first', label: 'Check recent releases — a new feature probably broke something', sub: 'Engineering root cause first', icon: '🔧' }
    ]
  },
  {
    id: 'q5',
    layer: 2,
    question: 'Rate your comfort level with these technical tasks:',
    hint: 'Honest self-assessment — we\'ll build on your strengths.',
    type: 'single',
    options: [
      { value: 'high_tech', label: 'Very comfortable — I can read code, API docs, system design specs', sub: 'Engineering is my native language', icon: '⚡' },
      { value: 'medium_tech', label: 'Comfortable with concepts, not always the implementation details', sub: 'I understand trade-offs but couldn\'t write the code', icon: '🔧' },
      { value: 'low_tech', label: 'I understand products at a user level, less at a technical level', sub: 'APIs, databases — I know they exist but avoid the details', icon: '📱' },
      { value: 'minimal_tech', label: 'Technical side is a growth area for me', sub: 'I\'m actively working to build this', icon: '📖' }
    ]
  },
  {
    id: 'q6',
    layer: 2,
    question: 'Which of these gets you most energised at work?',
    hint: 'Your instinctive answer reveals your PM orientation.',
    type: 'single',
    options: [
      { value: 'user_research', label: 'Understanding why users do what they do', sub: 'Interviews, surveys, usability tests', icon: '🔍' },
      { value: 'data_analysis', label: 'Finding patterns in data and turning them into decisions', sub: 'Dashboards, SQL queries, cohort analysis', icon: '📊' },
      { value: 'system_design', label: 'Designing how systems and APIs should work', sub: 'Architecture, integration, platform design', icon: '🏗️' },
      { value: 'strategy', label: 'Figuring out what to build next and why', sub: 'Roadmaps, prioritisation, market positioning', icon: '🗺️' }
    ]
  },
  {
    id: 'q7',
    layer: 3,
    question: 'Which PM type feels most aligned with how you see yourself?',
    hint: 'You can always say "not sure" — we\'ll figure it out together.',
    type: 'single',
    options: [
      { value: 'technical_pm', label: 'Technical PM', sub: 'Platform, API, infrastructure, developer tools', icon: '⚙️' },
      { value: 'growth_pm', label: 'Growth PM', sub: 'Metrics, funnels, retention, experimentation', icon: '📈' },
      { value: 'consumer_pm', label: 'Consumer PM', sub: 'User experience, engagement, product design', icon: '🎨' },
      { value: 'ai_pm', label: 'AI Product Manager', sub: 'AI/ML products, GCC roles, fastest growing', icon: '🤖' },
      { value: 'unsure', label: 'Not sure yet', sub: 'Help me figure out the best fit', icon: '🤔' }
    ]
  },
  {
    id: 'q8',
    layer: 3,
    question: 'What company type are you targeting?',
    hint: 'This affects what your preparation should focus on.',
    type: 'single',
    options: [
      { value: 'startup', label: 'Startup / Early-stage', sub: 'Speed, ambiguity, ownership', icon: '🚀' },
      { value: 'midsize', label: 'Mid-size product company', sub: 'Swiggy, Razorpay, CRED, Zepto — fastest-growing PM market', icon: '🏢' },
      { value: 'gcc_mnc', label: 'GCC / MNC', sub: 'Google, Microsoft, Salesforce, Adobe — +255% senior PM hiring', icon: '🌐' },
      { value: 'open', label: 'Open — wherever the best role is', sub: 'Undecided', icon: '🎯' }
    ]
  },
  {
    id: 'q9',
    layer: 3,
    question: 'What scares you most about PM interviews?',
    hint: 'This tells us what to prioritise in your preparation.',
    type: 'single',
    options: [
      { value: 'case_thinking', label: 'Not knowing how to structure a product case answer', sub: 'The framework problem', icon: '📋' },
      { value: 'metrics', label: 'Being asked about success metrics and not knowing what to say', sub: 'The data problem', icon: '📊' },
      { value: 'technical_q', label: 'Technical questions exposing that I\'m not technical enough', sub: 'The depth problem', icon: '🔧' },
      { value: 'readiness', label: 'Not knowing if I\'m ready to apply at all', sub: 'The timing problem', icon: '⏰' }
    ]
  }
];

// ── Archetype Scoring Logic ───────────────────────────────
function calculateArchetype(answers) {
  const scores = { technical_pm: 0, growth_pm: 0, consumer_pm: 0, ai_pm: 0 };

  // Background → base scoring
  const bgScores = {
    engineer: { technical_pm: 4, growth_pm: 1, consumer_pm: 0, ai_pm: 2 },
    mba:      { technical_pm: 0, growth_pm: 4, consumer_pm: 1, ai_pm: 2 },
    ba:       { technical_pm: 1, growth_pm: 3, consumer_pm: 3, ai_pm: 1 },
    scrum:    { technical_pm: 3, growth_pm: 1, consumer_pm: 2, ai_pm: 1 },
    designer: { technical_pm: 0, growth_pm: 1, consumer_pm: 4, ai_pm: 2 },
    qa:       { technical_pm: 4, growth_pm: 0, consumer_pm: 1, ai_pm: 3 },
    ops:      { technical_pm: 0, growth_pm: 3, consumer_pm: 3, ai_pm: 0 },
    support:  { technical_pm: 0, growth_pm: 1, consumer_pm: 4, ai_pm: 0 },
    analyst:  { technical_pm: 1, growth_pm: 4, consumer_pm: 1, ai_pm: 2 },
    switcher: { technical_pm: 0, growth_pm: 1, consumer_pm: 3, ai_pm: 2 },
  };

  const bg = answers.q3 || 'engineer';
  if (bgScores[bg]) {
    Object.keys(bgScores[bg]).forEach(k => scores[k] += bgScores[bg][k]);
  }

  // q4 — thinking style
  if (answers.q4 === 'data_first')       { scores.growth_pm += 2; scores.ai_pm += 1; }
  if (answers.q4 === 'user_first')       { scores.consumer_pm += 2; }
  if (answers.q4 === 'hypothesis_first') { scores.growth_pm += 2; scores.technical_pm += 1; }
  if (answers.q4 === 'fix_first')        { scores.technical_pm += 2; }

  // q5 — technical comfort
  if (answers.q5 === 'high_tech')   { scores.technical_pm += 2; scores.ai_pm += 1; }
  if (answers.q5 === 'medium_tech') { scores.technical_pm += 1; scores.growth_pm += 1; }
  if (answers.q5 === 'low_tech')    { scores.consumer_pm += 2; }

  // q6 — energy source
  if (answers.q6 === 'user_research') { scores.consumer_pm += 2; }
  if (answers.q6 === 'data_analysis') { scores.growth_pm += 2; scores.ai_pm += 1; }
  if (answers.q6 === 'system_design') { scores.technical_pm += 2; scores.ai_pm += 1; }
  if (answers.q6 === 'strategy')      { scores.growth_pm += 1; scores.consumer_pm += 1; }

  // q7 — self-selected archetype (strong signal if not 'unsure')
  if (answers.q7 && answers.q7 !== 'unsure') {
    scores[answers.q7] += 3;
  }

  // company type
  if (answers.q8 === 'gcc_mnc')  { scores.ai_pm += 1; scores.technical_pm += 1; }
  if (answers.q8 === 'midsize')  { scores.growth_pm += 1; scores.consumer_pm += 1; }

  // Find winner
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  return { primary: sorted[0][0], secondary: sorted[1][0], scores };
}

// ── Experience Level ──────────────────────────────────────
function getExperienceLevel(answers) {
  if (answers.q1 === 'just_starting') return 'beginner';
  if (answers.q1 === '1_3_months')    return 'early';
  if (answers.q1 === '4_6_months')    return 'mid';
  return 'advanced';
}

// ── Weekly Mission Data ───────────────────────────────────
const MISSIONS = {
  technical_pm: {
    week: 1,
    title: 'Technical PM — Week 1 Mission',
    case: {
      id: 'payments_launch_decision',
      title: 'The Payments Launch Decision',
      company: 'FinTech / Payments',
      format: 'Format B — Build or Kill',
      duration: '15 min',
      icon: '💳',
      description: 'You are a PM at a payments company launching a new checkout flow. Engineering says it\'s ready to ship. You have 24 hours to decide. What are the 5 questions you ask before approving the launch?',
      leadsWithStrength: true,
      strengthNote: 'This case rewards your edge-case and systems thinking. Notice how your instincts guide you here.'
    },
    concept: {
      title: 'Success Metrics First — Why the Metric Comes Before the Feature',
      duration: '10 min',
      icon: '📐',
      summary: 'The most common reason Technical PM candidates fail interviews: they jump to solution before defining what success looks like. In this concept close, you\'ll practise writing the success metric before you say anything else.',
    },
    action: {
      title: 'Write your pre-launch checklist',
      duration: '5 min',
      icon: '✍️',
      prompt: 'Based on the Payments case, write 3 key questions you\'d ask before launching any new feature — in your own words, no frameworks.',
    }
  },
  growth_pm: {
    week: 1,
    title: 'Growth PM — Week 1 Mission',
    case: {
      id: 'swiggy_retention_drop',
      title: 'Swiggy\'s Retention Drop — Tier-2 Crisis',
      company: 'Swiggy',
      format: 'Format A — Product Diagnosis',
      duration: '15 min',
      icon: '📦',
      description: 'Swiggy\'s 30-day retention has dropped 12% in Tier-2 cities over the last 6 weeks. The CEO review is in 48 hours. Walk through your first 3 hours of investigation — what you look at, what hypotheses you form, and what your first recommendation is.',
      leadsWithStrength: true,
      strengthNote: 'This case rewards analytical thinking. Start with the data structure — you\'re good at this.'
    },
    concept: {
      title: 'The Metric Comes First — Not the Solution',
      duration: '10 min',
      icon: '📊',
      summary: 'Growth PM candidates often define the metric after identifying the fix. In this concept close, you\'ll learn why the success definition must come before brainstorming — and practise doing it in 2 minutes.',
    },
    action: {
      title: 'Define the success metric',
      duration: '5 min',
      icon: '✍️',
      prompt: 'Write one sentence: "We will know we\'ve solved the Swiggy retention problem when [metric] returns to [target] by [date]." Fill in the blanks with real thinking.',
    }
  },
  consumer_pm: {
    week: 1,
    title: 'Consumer PM — Week 1 Mission',
    case: {
      id: 'cred_referral_mystery',
      title: 'CRED\'s Referral Mystery',
      company: 'CRED',
      format: 'Format A — Product Diagnosis',
      duration: '15 min',
      icon: '💳',
      description: 'CRED\'s referral program has a 40% referral rate — but DAUs are flat month-over-month. You suspect the referral program is attracting the wrong users. How do you investigate this, and what metrics tell you if you\'re right?',
      leadsWithStrength: true,
      strengthNote: 'This case rewards user empathy and qualitative reasoning. Your instinct about user motivation is your asset here.'
    },
    concept: {
      title: 'Translating User Insight into Business Language',
      duration: '10 min',
      icon: '💬',
      summary: 'The most impactful Consumer PM skill is making user insight audible in business terms. "Users are confused" is not a product decision. "Users are confused, which drives a 25% drop in activation, costing ₹X in LTV" is. Practise the translation.',
    },
    action: {
      title: 'Write the business case for a user problem',
      duration: '5 min',
      icon: '✍️',
      prompt: 'Think of one real product that confused you as a user. Write the business case for fixing it: the user problem + what metric it\'s hurting + why it should be prioritised now.',
    }
  },
  ai_pm: {
    week: 1,
    title: 'AI PM — Week 1 Mission',
    case: {
      id: 'gcс_ai_feature_decision',
      title: 'The GCC AI Feature Decision',
      company: 'SaaS / GCC',
      format: 'Format B — Build or Kill',
      duration: '15 min',
      icon: '🤖',
      description: 'Your GCC team wants to add an AI-powered recommendation engine to your enterprise SaaS product. Engineering estimates 3 months. Sales says 2 enterprise clients will churn without it. You have 1 week to decide: build now, defer to Q3, or buy a third-party solution. Walk through your decision framework.',
      leadsWithStrength: true,
      strengthNote: 'This case rewards cross-domain thinking. Your ability to balance technical, business, and user considerations is the strength here.'
    },
    concept: {
      title: 'AI PM vs PM with AI Tools — The Critical Difference',
      duration: '10 min',
      icon: '🧠',
      summary: 'GCC hiring managers are asking: "Can this PM evaluate whether our AI approach is the right one — not just use AI tools?" This concept close teaches you to frame AI product decisions: build vs buy, accuracy vs latency trade-offs, responsible AI framing.',
    },
    action: {
      title: 'Write one AI product decision',
      duration: '5 min',
      icon: '✍️',
      prompt: 'Pick a product you use that has an AI feature. Write 3 sentences: what the AI does, what success looks like (the metric), and what the failure mode is. Think like the PM who owns it.',
    }
  }
};

// ── Case Library ──────────────────────────────────────────
const CASES = {
  swiggy_retention_drop: {
    id: 'swiggy_retention_drop',
    title: 'Swiggy\'s Retention Drop — Tier-2 Crisis',
    company: 'Swiggy',
    format: 'format_a',
    duration: 900, // seconds (15 min)
    difficulty: 'intermediate',
    targetArchetypes: ['growth_pm', 'consumer_pm'],
    primarySkills: ['metric_reasoning', 'root_cause', 'hypothesis_formation'],
    scenario: `Swiggy's 30-day retention has dropped 12% in Tier-2 cities over the last 6 weeks. The CEO review is in 48 hours. The data team has given you raw events — no summary, no analysis done for you.

You know:
• Retention dropped in Kanpur, Indore, Patna, Nagpur — but NOT in Hyderabad or Pune Tier-2 zones
• Competitor Zomato has not announced any new promotions in these markets
• App ratings in these cities have been stable (4.1 → 4.0)
• A new menu redesign was shipped 7 weeks ago

Walk through:
1. Your first 3 hypotheses (ranked)
2. What data you look at for each (specific, named metrics)
3. Your recommendation for what to investigate in hour 1`,
    rubric: {
      strength_indicators: [
        'Segments the problem before proposing solutions',
        'Names specific metrics (retention cohort by city, session frequency, order frequency)',
        'Forms ranked, testable hypotheses',
        'Connects the menu redesign timing to the drop'
      ],
      gap_indicators: [
        'Jumps to solutions without diagnosing root cause',
        'Doesn\'t mention segmentation (city/cohort)',
        'Vague metrics ("look at the data" without naming which data)',
        'Doesn\'t acknowledge the correlation with the menu redesign'
      ]
    }
  },
  payments_launch_decision: {
    id: 'payments_launch_decision',
    title: 'The Payments Launch Decision',
    company: 'FinTech / Payments',
    format: 'format_b',
    duration: 900,
    difficulty: 'intermediate',
    targetArchetypes: ['technical_pm', 'ai_pm'],
    primarySkills: ['risk_assessment', 'launch_criteria', 'stakeholder_communication'],
    scenario: `You are a PM at a B2C payments company launching a new UPI checkout flow to 2M+ users. Engineering says Q&A is done and it\'s ready to ship. You have 24 hours before the scheduled release.

Context:
• 60,000 transactions/day run through the current flow
• The new flow passes all automated tests
• Support team flagged that 3 edge cases around network timeout handling are "low priority but unresolved"
• The CTO wants to ship to 100% users. You can propose a phased rollout instead.

Your task:
1. What are the 5 questions you ask before approving this launch?
2. Do you approve the launch as-is, propose a phased rollout, or delay? Defend your decision.
3. How do you communicate your decision to the CTO and the support team?`,
    rubric: {
      strength_indicators: [
        'Asks about rollback plan and monitoring dashboards',
        'Identifies the network timeout edge cases as high-risk for payments specifically',
        'Proposes phased rollout (e.g., 5% → 25% → 100%) with clear success criteria',
        'Differentiates communication for CTO vs support team'
      ],
      gap_indicators: [
        'Approves launch without addressing the 3 edge cases',
        'Doesn\'t mention rollback strategy',
        'Frames decision without defining success metric for the rollout',
        'One message for all stakeholders'
      ]
    }
  },
  cred_referral_mystery: {
    id: 'cred_referral_mystery',
    title: 'CRED\'s Referral Mystery',
    company: 'CRED',
    format: 'format_a',
    duration: 900,
    difficulty: 'intermediate',
    targetArchetypes: ['consumer_pm', 'growth_pm'],
    primarySkills: ['user_empathy', 'metric_definition', 'qualitative_reasoning'],
    scenario: `CRED's referral program has achieved a 40% referral rate — users are sending referrals. But DAUs are flat month-over-month. High referral rate + flat DAU shouldn't coexist if referrals = good users.

You suspect the referral program is attracting the wrong user segment.

Data you have:
• Referred users: 40% referral rate achieved, 18% activation rate (vs 34% organic activation)
• Referred users' 30-day retention: 28% (vs 51% for organic users)
• Average credit card bill paid by referred users: ₹12,400 (vs ₹34,000 organic)

Your task:
1. What is your primary hypothesis about why this is happening?
2. What 3 metrics would confirm or disprove your hypothesis?
3. What would you recommend: keep the program, modify it, or kill it — and why?`,
    rubric: {
      strength_indicators: [
        'Identifies the referred user profile mismatch (lower bill = wrong ICP)',
        'Forms hypothesis around incentive structure attracting wrong users',
        'Names specific confirmation metrics (referral source, referrer profile, first action of referred user)',
        'Recommends ICP-gating or restructuring incentive before killing program'
      ],
      gap_indicators: [
        'Focuses only on fixing the referral rate, not the user quality problem',
        'Vague hypothesis without data grounding',
        'Recommends killing program without investigating root cause',
        'Misses the CRED-specific user profile (high credit card bills = their ICP)'
      ]
    }
  },
  gcc_ai_feature_decision: {
    id: 'gcc_ai_feature_decision',
    title: 'The GCC AI Feature Decision',
    company: 'Enterprise SaaS / GCC',
    format: 'format_b',
    duration: 900,
    difficulty: 'intermediate',
    targetArchetypes: ['ai_pm', 'technical_pm'],
    primarySkills: ['build_buy_decision', 'stakeholder_alignment', 'ai_product_thinking'],
    scenario: `You lead product at a GCC building B2B SaaS for enterprise HR management. Your engineering team wants to add an AI-powered candidate screening engine.

Context:
• 2 enterprise clients (combined ARR ₹2.8 Cr) have verbally threatened churn if no AI screening by Q3
• Engineering estimates: 3 months to build internally
• A third-party API (Vervoe) can integrate in 3 weeks at ₹4L/year
• Your AI team is only 4 engineers — building this would pause 2 other roadmap items
• The product's current retention rate is 91% (industry-leading)

Your task:
1. What framework do you use to decide: build, buy, or defer?
2. What is your recommendation with rationale?
3. How do you handle the 2 at-risk clients while the solution is being implemented?`,
    rubric: {
      strength_indicators: [
        'Uses build vs buy framework: time, cost, core competency, differentiation',
        'Recognises that 3-week integration vs 3-month build = clear buy signal at this stage',
        'Addresses the 2 at-risk clients with a specific communication plan',
        'Mentions the roadmap trade-off cost of building internally'
      ],
      gap_indicators: [
        'Recommends build without considering the buy option',
        'Doesn\'t address the at-risk clients explicitly',
        'Ignores the roadmap opportunity cost',
        'No mention of what happens if the third-party API becomes a long-term dependency'
      ]
    }
  }
};

// ── Extended Case Library (added cases) ───────────────────
Object.assign(CASES, {
  zepto_dark_store: {
    id: 'zepto_dark_store',
    title: "Zepto's Dark Store Expansion Dilemma",
    company: 'Zepto',
    format: 'format_b',
    duration: 900,
    difficulty: 'intermediate',
    targetArchetypes: ['growth_pm', 'consumer_pm'],
    primarySkills: ['strategic_decision', 'unit_economics', 'prioritisation'],
    week: 2,
    scenario: `Zepto currently operates 350 dark stores across 10 cities. Category VP wants to expand to 5 new Tier-2 cities (Surat, Coimbatore, Jaipur, Lucknow, Kochi) before Blinkit does.

Data you have:
• Average new dark store payback period: 14 months
• Top-performing stores reach breakeven in 9 months; bottom 20% haven't broken even after 24 months
• Current cash runway: 18 months at current burn
• Blinkit has no presence in 3 of the 5 target cities yet
• Unit economics: avg order value ₹380, contribution margin 8.2% (industry best is ~11%)

Your task:
1. Should Zepto expand to all 5 cities now, pick 2–3, or wait? Make a clear recommendation.
2. What is your prioritisation framework for which cities to enter first?
3. What metric tells you a new dark store is succeeding in month 3?`,
    rubric: {
      strength_indicators: [
        'Considers cash runway constraint against payback period explicitly',
        'Proposes selective entry (2–3 cities) rather than all-or-nothing',
        'Names a city-level prioritisation framework (TAM, competitive gap, logistics density)',
        'Defines a leading indicator metric for month-3 success (repeat order rate, avg orders/store/day)'
      ],
      gap_indicators: [
        'Recommends all-5 expansion without addressing the 14-month payback vs 18-month runway risk',
        'No mention of bottom-20% underperforming stores — strategic pattern ignored',
        'Competitive framing only (beat Blinkit) without unit economics validation',
        'No month-3 success metric or early warning indicator defined'
      ]
    }
  },

  razorpay_api_limits: {
    id: 'razorpay_api_limits',
    title: "Razorpay's API Rate Limit Incident",
    company: 'Razorpay',
    format: 'format_a',
    duration: 900,
    difficulty: 'intermediate',
    targetArchetypes: ['technical_pm', 'ai_pm'],
    primarySkills: ['technical_diagnosis', 'developer_experience', 'incident_response'],
    week: 2,
    scenario: `Razorpay's Payment Links API is experiencing a 340% spike in failed API calls over the last 6 hours. The error code is 429 (rate limit exceeded). 12 enterprise merchants have raised P1 tickets.

Technical context:
• Rate limit: 500 requests/minute per API key
• 3 enterprise merchants are hitting 1,200–1,800 req/min (legitimate traffic spike — Diwali sale)
• Razorpay's infrastructure team says increasing limits globally would cost ₹18L/month extra
• A per-merchant dynamic rate limit feature would take 6 weeks to build
• Temporary manual limit overrides are possible but bypass security throttling

Your task:
1. What is your immediate (next 2 hours) action to unblock the 12 merchants?
2. What is your 2-week solution vs your 6-week solution?
3. How do you prioritise this vs the 3 other roadmap items currently in sprint?`,
    rubric: {
      strength_indicators: [
        'Identifies that manual overrides are a short-term bridge, not a solution',
        'Distinguishes between the 3 legitimate high-traffic merchants vs potential abuse',
        'Proposes tiered rate limits (volume-based pricing tiers) as the medium-term fix',
        'Frames the prioritisation using impact × urgency against existing sprint items'
      ],
      gap_indicators: [
        'Recommends global rate limit increase without flagging the ₹18L/month cost',
        'No distinction between legitimate traffic spikes and DDoS-like patterns',
        'Doesn\'t address the 12 enterprise merchants\' immediate unblocking needs',
        'Roadmap prioritisation framing missing — treats this as purely technical'
      ]
    }
  },

  phonepe_merchant_feature: {
    id: 'phonepe_merchant_feature',
    title: "PhonePe's UPI Merchant Analytics Feature",
    company: 'PhonePe',
    format: 'format_b',
    duration: 900,
    difficulty: 'intermediate',
    targetArchetypes: ['technical_pm', 'growth_pm'],
    primarySkills: ['build_buy_decision', 'merchant_insight', 'api_product_thinking'],
    week: 2,
    scenario: `PhonePe's merchant segment (2.4M active UPI merchants) has a 38% monthly churn rate. Research shows the top churn reason is: "I can't see which customers are returning vs new — I have no business visibility."

Product proposal: Build an in-app merchant analytics dashboard (customer return rate, peak hours, transaction trends).

Engineering estimate: 4 months for MVP.

Alternative: White-label a third-party analytics API (Singular or Appsflyer for merchants) — 3 weeks integration, ₹2.8Cr/year licensing.

Your task:
1. Build or buy? Make a recommendation with rationale.
2. What are the 3 must-have metrics in the MVP — and why those 3?
3. How do you validate that this feature actually reduces churn before investing further?`,
    rubric: {
      strength_indicators: [
        'Uses build-vs-buy framework: core competency, time-to-value, strategic data ownership',
        'Identifies that merchant transaction data is proprietary — build argument is strategically sound',
        'Names 3 specific merchant-relevant metrics (return customer rate, peak transaction hour, avg basket size)',
        'Proposes a churn reduction validation approach (cohort: merchants with analytics vs without, 60-day retention comparison)'
      ],
      gap_indicators: [
        'Recommends buy without noting PhonePe loses proprietary merchant data advantage',
        'Recommends build without addressing 4-month delay against active churn',
        'Generic metrics (revenue, transactions) instead of merchant-specific insight metrics',
        'No validation or success measurement plan for the feature'
      ]
    }
  },

  meesho_seller_onboarding: {
    id: 'meesho_seller_onboarding',
    title: "Meesho's Seller Onboarding Drop",
    company: 'Meesho',
    format: 'format_a',
    duration: 900,
    difficulty: 'intermediate',
    targetArchetypes: ['consumer_pm', 'growth_pm'],
    primarySkills: ['funnel_analysis', 'user_empathy', 'onboarding_design'],
    week: 2,
    scenario: `Meesho's seller onboarding funnel has a 61% drop-off at the "Upload your first product" step. Meesho targets first-time sellers — many are homemakers and small town self-employed individuals with limited smartphone fluency.

Data available:
• Drop-off step: "Upload first product" — users spend avg 9.2 minutes on this step before abandoning
• Device breakdown: 73% of drop-offs are on Android budget phones (≤3GB RAM)
• Top support ticket reason: "Photo upload failed" or "I don't know what category to choose"
• Competitors (Flipkart Shopsy) have a guided product listing assistant

Your task:
1. What are your top 3 hypotheses for why sellers drop at this step?
2. What is your recommendation to fix this — and what's the sequencing?
3. What does success look like at 30 days and 90 days?`,
    rubric: {
      strength_indicators: [
        'Identifies device performance (budget Android) as a likely UX degradation cause',
        'Segments hypotheses: technical (upload failure), UX (category confusion), motivation (effort vs reward clarity)',
        'Proposes progressive onboarding: guided first-listing assistant or template-based upload',
        'Defines both a 30-day leading metric (listing completion rate) and 90-day lagging metric (first GMV generated)'
      ],
      gap_indicators: [
        'Ignores the device/RAM constraint as a UX factor',
        'Generic hypothesis (bad UX) without specific Meesho-user-profile grounding',
        'Recommends adding more steps or fields to "help" users — ignores cognitive load',
        'Success metric is either vague or only one timeframe'
      ]
    }
  },

  nykaa_recommendation_engine: {
    id: 'nykaa_recommendation_engine',
    title: "Nykaa's Recommendation Engine — Build or Kill",
    company: 'Nykaa',
    format: 'format_b',
    duration: 900,
    difficulty: 'advanced',
    targetArchetypes: ['consumer_pm', 'ai_pm'],
    primarySkills: ['ai_product_thinking', 'build_buy_decision', 'personalization_strategy'],
    week: 3,
    scenario: `Nykaa's current recommendation engine drives 22% of total GMV. The data science team wants to rebuild it with an LLM-based conversational recommendation feature — "Tell me your skin type and I'll suggest a routine."

The ask: 6 months, ₹4Cr investment, 12-engineer team.

Context:
• Current engine (rule-based + collaborative filtering): 22% GMV, 87% uptime, ₹60L/year maintenance
• Proposed LLM feature: personalized at scale, but hallucination risk for product recommendations (user health implications for skincare)
• 3 Nykaa competitors (Purplle, Myntra Beauty) are already testing AI recommendation bots
• Regulatory: India's draft Digital Data Protection rules (2024) add friction to personalised health-adjacent data use

Your task:
1. Should Nykaa build the LLM recommendation engine now? Make a clear recommendation.
2. What are the 2 biggest risks specific to Nykaa's context — and how do you mitigate them?
3. If you approve it, what does the first 60-day milestone look like?`,
    rubric: {
      strength_indicators: [
        'Identifies hallucination risk as a Nykaa-specific product risk (skincare recommendations = health implications)',
        'References DPDP Act 2024 as a real regulatory constraint for personalized health-adjacent data',
        'Proposes a phased approach: augment existing engine with LLM layer, not full replacement',
        'Defines 60-day milestone with specific metrics (recommendation click-through rate, user satisfaction on recommendations, zero hallucination incidents)'
      ],
      gap_indicators: [
        'Ignores hallucination risk or treats it as purely technical, not a user safety issue',
        'No mention of regulatory landscape (DPDP)',
        'Full replacement recommendation without considering the existing engine\'s 22% GMV contribution',
        'Competitor pressure alone used as the build rationale'
      ]
    }
  },

  urban_company_supply_demand: {
    id: 'urban_company_supply_demand',
    title: "Urban Company's Supply-Demand Mismatch",
    company: 'Urban Company',
    format: 'format_a',
    duration: 900,
    difficulty: 'intermediate',
    targetArchetypes: ['consumer_pm', 'growth_pm'],
    primarySkills: ['marketplace_thinking', 'supply_side_analysis', 'metric_reasoning'],
    week: 3,
    scenario: `Urban Company's women's salon category in Delhi-NCR has a 34% unfulfilled booking rate — users book but no professional is available. Simultaneously, the supply team reports that 28% of registered professionals completed fewer than 2 bookings in the last 30 days ("ghost supply").

Data snapshot:
• Unfulfilled bookings peak: 6–9pm weekdays, 10am–2pm weekends
• Ghost professionals (< 2 bookings/month): concentrated in outer Delhi (Dwarka, Rohini, Faridabad)
• Top reason professionals give for low bookings: "I only get requests far from my area"
• Top reason users cite for cancelling after connecting: "Professional declined — location too far"

Your task:
1. What is the actual root cause of the 34% unfulfilled rate — is it a supply problem, a matching problem, or a demand distribution problem?
2. What is your first recommendation (can be implemented in 2 weeks)?
3. What metric tells you the intervention is working in 30 days?`,
    rubric: {
      strength_indicators: [
        'Correctly identifies this as a matching/geo-radius problem, not just a supply shortage',
        'Connects "ghost professionals" in outer areas to "location too far" decline pattern',
        'Proposes geo-aware matching or time-slot-specific pricing to shift demand/supply distribution',
        'Names a specific 30-day metric (unfulfilled booking rate by zone, professional utilisation rate by area)'
      ],
      gap_indicators: [
        'Recommends simply recruiting more professionals without addressing the matching inefficiency',
        'Doesn\'t connect the outer-Delhi ghost professional data to the location mismatch cause',
        'No recommendation for the supply-side: incentivising professionals to expand radius during peak hours',
        'Vague success metric ("improve fulfillment")'
      ]
    }
  },

  juspay_llm_fraud: {
    id: 'juspay_llm_fraud',
    title: "Juspay's LLM-Based Fraud Detection Bet",
    company: 'Juspay',
    format: 'format_b',
    duration: 900,
    difficulty: 'advanced',
    targetArchetypes: ['ai_pm', 'technical_pm'],
    primarySkills: ['ai_product_thinking', 'risk_assessment', 'responsible_ai'],
    week: 3,
    scenario: `Juspay processes 50M+ transactions/day for enterprise clients (Amazon, Swiggy, Ola). Current fraud detection: rule-based ML model with 94.3% accuracy, 0.4% false positive rate.

Proposal from the ML team: Replace with a GPT-4 based NLP anomaly detection model that processes transaction metadata + merchant descriptions.

Claimed improvement: 97.1% accuracy, but 1.8% false positive rate (legitimate transactions flagged as fraud).

Client impact: False positives = blocked legitimate payments. At Juspay's scale — 1.8% FPR = 900,000 legitimate transactions/day blocked.

Your task:
1. Do you approve this model switch? Make a clear recommendation.
2. What is the business case for your decision — quantified?
3. What does responsible AI governance look like for this specific use case?`,
    rubric: {
      strength_indicators: [
        'Correctly identifies that 1.8% FPR at 50M/day = 900,000 legitimate blocks/day — frames it as a quantified business risk',
        'Does NOT approve full switch — recommends layered approach (LLM as secondary signal, not primary gate)',
        'Proposes a specific A/B test structure: new model runs in shadow mode for 30 days before any production use',
        'Names responsible AI governance elements: human review escalation path, model drift monitoring, quarterly accuracy audits'
      ],
      gap_indicators: [
        'Approves the switch based solely on 97.1% accuracy without accounting for the FPR business impact',
        'No quantification of the 1.8% FPR at Juspay\'s scale',
        'No shadow mode or staged rollout proposed',
        'Responsible AI framing is generic (not specific to payment fraud context)'
      ]
    }
  },

  setu_open_banking: {
    id: 'setu_open_banking',
    title: "Setu's Open Banking SDK — Developer or Enterprise First?",
    company: 'Setu',
    format: 'format_b',
    duration: 900,
    difficulty: 'advanced',
    targetArchetypes: ['technical_pm', 'ai_pm'],
    primarySkills: ['platform_strategy', 'developer_experience', 'go_to_market'],
    week: 3,
    scenario: `Setu (a Pine Labs company) provides banking APIs and SDKs to fintech developers. They are launching a new Open Banking SDK — the decision is whether to go developer-first (bottom-up, self-serve) or enterprise-first (top-down, sales-led).

Context:
• Developer-first: 6-month roadmap to free tier + sandbox + documentation portal. Lower ACV but faster adoption. Estimated 2,000 developer sign-ups in 12 months.
• Enterprise-first: 3 LOIs from Indian banks (HDFC, Axis, ICICI) for ₹1.8Cr combined ACV. Requires custom integration work, 4-month delivery.
• Team bandwidth: 8 engineers, 1 PM (you). You cannot run both simultaneously.
• India's Account Aggregator framework (AA) makes this market timing-sensitive — window is 18 months.

Your task:
1. Which go-to-market do you choose — developer-first or enterprise-first? Defend your recommendation.
2. What does your 12-month roadmap look like under your chosen GTM?
3. What is the one assumption your entire recommendation rests on — and how do you test it fastest?`,
    rubric: {
      strength_indicators: [
        'Makes a clear recommendation (not "both") with explicit trade-off reasoning',
        'References the AA framework timing as a real constraint on the decision',
        'Identifies that enterprise-first derisks revenue but creates a developer adoption gap that\'s hard to recover',
        'Names the single key assumption and proposes a specific 30-day test to validate it'
      ],
      gap_indicators: [
        'Recommends running both simultaneously without addressing the bandwidth constraint',
        'Ignores the Account Aggregator framework timing window',
        'No 12-month roadmap — only a directional statement',
        'Doesn\'t identify the core assumption or how to test it'
      ]
    }
  }
});

// ── 5-Dimension Rubric Scorer ──────────────────────────────
// Replaces the old keyword heuristic with structured scoring
const RUBRIC_DIMENSIONS = {
  problem_framing: {
    label: 'Problem Framing',
    weight: 0.25,
    description: 'Hypothesis stated before solution; metric or success condition defined upfront',
    signals: ['hypothesis', 'root cause', 'because', 'framing', 'define success', 'success metric', 'north star', 'goal is', 'problem is', 'question is']
  },
  data_first_thinking: {
    label: 'Data-First Thinking',
    weight: 0.20,
    description: 'References specific data, segmentation, or named metrics before forming conclusions',
    signals: ['segment', 'cohort', 'metric', 'data', 'rate', 'percentage', '%', 'retention', 'conversion', 'funnel', 'dashboard', 'sql', 'analytics', 'breakdown', 'split by']
  },
  structure_clarity: {
    label: 'Structure & Clarity',
    weight: 0.20,
    description: 'Clear multi-part answer structure present (numbered points, distinct phases)',
    signals: ['first', 'second', 'third', '1.', '2.', '3.', 'step 1', 'step 2', 'phase', 'next', 'then', 'finally', 'in summary', 'my recommendation']
  },
  stakeholder_awareness: {
    label: 'Stakeholder Awareness',
    weight: 0.20,
    description: 'Considers users, business, and engineering trade-offs explicitly',
    signals: ['user', 'customer', 'engineer', 'stakeholder', 'team', 'business', 'revenue', 'cost', 'trade-off', 'tradeoff', 'impact', 'risk', 'ceo', 'cto', 'client']
  },
  recommendation_quality: {
    label: 'Recommendation Quality',
    weight: 0.15,
    description: 'Takes a clear position; doesn\'t hedge excessively',
    signals: ['i recommend', 'my recommendation', 'i would', 'decision is', 'we should', 'the answer is', 'approve', 'reject', 'build', 'buy', 'prioritise', 'defer', 'ship', 'do not ship']
  }
};

function computeRubricScore(response, cas) {
  const lower = (response || '').toLowerCase();
  const wordCount = response.trim().split(/\s+/).filter(Boolean).length;
  const dimensionScores = {};

  // Score each dimension
  Object.entries(RUBRIC_DIMENSIONS).forEach(([key, dim]) => {
    const hitCount = dim.signals.filter(s => lower.includes(s)).length;
    const rawScore = Math.min(1, hitCount / Math.max(3, dim.signals.length * 0.4));
    dimensionScores[key] = Math.round(rawScore * 100);
  });

  // Weighted total
  let weighted = 0;
  Object.entries(RUBRIC_DIMENSIONS).forEach(([key, dim]) => {
    weighted += (dimensionScores[key] / 100) * dim.weight;
  });

  // Word count bonus (longer = more depth, up to a cap)
  const lengthBonus = wordCount >= 250 ? 8 : wordCount >= 150 ? 4 : 0;

  // Case-specific rubric bonus
  let caseBonus = 0;
  if (cas && cas.rubric) {
    const strengthHits = cas.rubric.strength_indicators.filter(si => {
      const kws = si.toLowerCase().split(' ').filter(w => w.length > 4);
      return kws.some(kw => lower.includes(kw));
    }).length;
    const gapHits = cas.rubric.gap_indicators.filter(gi => {
      const kws = gi.toLowerCase().split(' ').filter(w => w.length > 4);
      return kws.some(kw => lower.includes(kw));
    }).length;
    caseBonus = (strengthHits * 4) - (gapHits * 3);
  }

  const total = Math.min(100, Math.max(30, Math.round(weighted * 100) + lengthBonus + caseBonus));
  return { total, dimensions: dimensionScores };
}

// ── Extended Concept Cards ─────────────────────────────────
const CONCEPT_CARDS = {
  technical_pm: [
    {
      week: 1,
      title: 'Success Metrics First — Why the Metric Comes Before the Feature',
      duration: '10 min',
      icon: '📐',
      body: `The most common reason Technical PM candidates fail interviews: they jump to solution before defining what success looks like.

**The pattern that fails:**
Engineer → "The API timeout issue means we should add retry logic."
PM → "What does success look like after we fix this?" ← This question must come first.

**The PM pattern:**
1. Define success condition: "Users complete checkout without a session error."
2. Define the metric: "Payment success rate ≥ 99.2% under peak load."
3. Then discuss the solution.

**Why this matters for Technical PM roles:** GCC and SaaS interviews test whether you can move from engineer-mode (solving a problem) to PM-mode (defining what solved looks like). The metric question is the switch.

**Practise prompt:** For any system you've worked on — write the success metric first, in one sentence, before describing any technical approach.`,
    },
    {
      week: 2,
      title: 'Developer Experience as Product Strategy',
      duration: '10 min',
      icon: '🔧',
      body: `DX is not UX for engineers — it is a product strategy lever.

**The key insight:** At API-first companies (Razorpay, Setu, Juspay, Postman), developer adoption speed is the growth metric. Every minute an engineer spends confused by your documentation is revenue risk.

**The PM's DX checklist:**
- Time-to-first-success: How long does a new developer take to make their first successful API call?
- Error message quality: Does the error tell developers what to do, not just what went wrong?
- SDK availability: Are there SDKs for the top 3 languages your users use?

**India context:** India's fintech and SaaS developer ecosystem (B2B, GCC) is where Technical PM DX skills create the most direct product impact.

**Practise prompt:** Pick any API you've used. Write 3 specific improvements to its documentation that would halve the time-to-first-success.`,
    }
  ],
  growth_pm: [
    {
      week: 1,
      title: 'The Metric Comes First — Not the Solution',
      duration: '10 min',
      icon: '📊',
      body: `Growth PM candidates often define the metric after identifying the fix. This is the wrong order — and interviewers notice.

**The correct sequence:**
1. State the problem in metric terms: "30-day retention dropped 12% in Tier-2."
2. Define what success looks like: "Retention returns to 68% within 6 weeks."
3. THEN form hypotheses and solutions.

**Why the order matters:** If you don't define the success metric first, your hypotheses can't be tested. You're doing analysis without a goal.

**The Growth PM test in interviews:** "How do you know when this is fixed?" If you can answer that in one sentence (a specific metric and threshold), you're thinking like a Growth PM.

**Practise prompt:** For any retention problem — write the success condition in one sentence: "We will know this is solved when [metric] reaches [number] by [date]."`,
    },
    {
      week: 2,
      title: 'Funnel Diagnosis — The 3-Layer Framework',
      duration: '10 min',
      icon: '🔻',
      body: `Every Growth PM case can be diagnosed with 3 questions asked in sequence.

**Layer 1 — Where is the drop concentrated?**
Segment before you hypothesise: by geography, device, cohort, acquisition channel, user type. The answer narrows your hypothesis space by 80%.

**Layer 2 — What changed?**
Product releases, competitor moves, seasonality, pricing changes. Retention drops rarely happen in a vacuum.

**Layer 3 — What does the user experience at that point?**
Go from data to user. The number tells you where — the user interview tells you why.

**India context:** Tier-2 and Tier-3 user segments behave differently than metro users. Network quality, device specs, and payment friction vary dramatically. Always segment by city tier in India growth cases.

**Practise prompt:** Take any metric drop. Run the 3-layer framework. Write one hypothesis per layer.`,
    }
  ],
  consumer_pm: [
    {
      week: 1,
      title: 'Translating User Insight into Business Language',
      duration: '10 min',
      icon: '💬',
      body: `The most impactful Consumer PM skill: making user insight audible in business terms.

**The translation that fails:**
"Users are confused during onboarding."

**The translation that works:**
"Users are confused during onboarding, which reduces 30-day activation by ~22%, which at our current acquisition cost of ₹340/user represents ₹2.8Cr in wasted CAC per quarter."

**Why this matters:** Consumer PM interviews end with business questions. "Your user insight is compelling — what does it cost the business if we don't fix it?" Without the translation, you can't answer.

**The 3-step translation:**
1. User problem (qualitative)
2. Metric it's hurting (quantitative link)
3. Business impact (₹ or % or time)

**Practise prompt:** Think of one product that confused you as a user. Write the 3-step translation: problem → metric → business impact.`,
    },
    {
      week: 2,
      title: 'Jobs-to-Be-Done for Consumer India',
      duration: '10 min',
      icon: '🎯',
      body: `JTBD is not a framework — it's a mindset shift about why people use products.

**The shift:** Users don't hire Swiggy because they're hungry. They hire Swiggy because they want to avoid the cognitive load of deciding, buying, and cooking after a long day. That's the job.

**Why this matters for India consumer products:**
- Meesho sellers don't want an "e-commerce platform" — they want income certainty from home.
- CRED users don't want a bill payment app — they want to feel financially accomplished without effort.
- Urban Company users don't want "a salon service" — they want to feel put-together without logistical friction.

**The PM's job:** Find the real job being hired for, not the feature being requested.

**Practise prompt:** Pick a product you use daily. Write the JTBD statement: "When [situation], I hire [product] to [job to be done], so that [outcome]."`,
    }
  ],
  ai_pm: [
    {
      week: 1,
      title: 'AI PM vs PM with AI Tools — The Critical Difference',
      duration: '10 min',
      icon: '🧠',
      body: `GCC hiring managers ask: "Can this PM evaluate whether our AI approach is the right one — not just use AI tools?"

**The difference:**
- PM with AI tools: uses ChatGPT to write PRDs, summarise research, generate ideas.
- AI PM: decides whether to build an LLM feature, what accuracy threshold is acceptable, what the failure mode means for users, and how to measure AI product success.

**The 4 AI PM questions you must be able to answer:**
1. What is the accuracy vs latency trade-off for this use case?
2. What does a wrong answer from this model do to a user?
3. How do we detect model drift in production?
4. Build, buy, or API? (OpenAI vs fine-tuned vs in-house)

**India GCC context:** 58% of GCCs are scaling AI mandates. The question isn't "do you know AI" — it's "can you make product decisions about AI systems under uncertainty."

**Practise prompt:** Pick an AI feature in a product you use. Write answers to all 4 questions above.`,
    },
    {
      week: 2,
      title: 'Responsible AI Framing for Product Decisions',
      duration: '10 min',
      icon: '⚖️',
      body: `Responsible AI is not compliance theater — it is product risk management.

**The PM's responsible AI checklist:**
- **Hallucination risk:** What happens when the model is confidently wrong? (Critical for healthcare, finance, legal)
- **Bias audit:** Does the model perform equally well across user segments? (India's diversity = mandatory segmentation)
- **Data privacy:** What user data trains the model? DPDP Act 2024 implications?
- **Human escalation path:** When should a human review the AI's output?
- **Model drift monitoring:** How do you know when the model stops performing?

**India regulatory context:** The Digital Personal Data Protection Act (2024) creates specific obligations for personal data use in AI. Health-adjacent, finance-adjacent, and identity-adjacent AI products face the most scrutiny.

**Practise prompt:** Pick an AI product decision (build a recommendation engine, fraud detector, or chat assistant). Write the responsible AI checklist for it.`,
    }
  ]
};

// ── Paywall Configuration ──────────────────────────────────
const PAYWALL_CONFIG = {
  enabled: true,
  freeSimsAllowed: 2,        // first 2 simulations always free
  freeWeeks: [1, 2],         // Week 1 and Week 2 cases are free
  paidWeeks: [3],            // Week 3+ cases require founding member
  regularPrice: 9999,
  foundingPrice: 1999,
  monthlyPrice: 999,
  foundingSlotsTotal: 100,
  currency: '₹',
  razorpayKeyId: 'YOUR_RAZORPAY_KEY_ID', // replace before going live
};

// ── Directional Feedback Templates ───────────────────────
const FEEDBACK_TEMPLATES = {
  engineer: {
    format_a: {
      q1_template: 'Your systems-thinking approach showed up in [specific]. That instinct to look for root causes before jumping to solutions is exactly what Technical and Growth PM interviewers value.',
      q2_template: 'Where the thinking broke down: you [specific_gap]. In product interviews, [gap_context].',
      q3_template: 'For Technical PM roles at GCCs and mid-size SaaS, the first interview signal is structured problem decomposition before any solution is mentioned.',
      q4_template: 'In your next simulation: before writing anything, spend 2 minutes writing only — what is the hypothesis and what data would disprove it. Build no solution until that\'s clear.'
    },
    format_b: {
      q1_template: 'Your engineering depth showed in how you identified [specific]. The risk awareness you brought is rare and genuinely PM-relevant.',
      q2_template: 'Where the thinking broke down: you [specific_gap]. The gap was [gap_context] — a classic engineering-to-PM transition moment.',
      q3_template: 'For Technical PM roles, the highest-value skill is translating engineering risk into stakeholder language. Not "here\'s the technical risk" — "here\'s what this means for the customer and the business."',
      q4_template: 'Next session: after you make a decision, write one sentence that explains it in business terms — no technical jargon. Practise the translation, not the decision.'
    }
  },
  analyst: {
    format_a: {
      q1_template: 'Your quantitative orientation was clear in [specific]. The ability to name specific metrics is something most PM candidates fake — you didn\'t.',
      q2_template: 'Where the thinking broke down: [specific_gap]. This is the expected pattern at your stage — strong on data structure, still developing product narrative.',
      q3_template: 'For Growth PM roles at companies like Swiggy and Meesho, the interview question after your analysis is always: "And what does that tell you about the user?" That\'s the bridge to build.',
      q4_template: 'Next session: after each data insight, write one sentence about the user behind the number. "Retention dropped 12%" → "Users who ordered 2+ times stopped — why would someone who liked the product stop?" Build the human narrative.'
    },
    format_b: {
      q1_template: 'Your scenario modelling was precise in [specific]. The ROI framing you brought is a genuine PM strength.',
      q2_template: 'Where the analysis broke down: [specific_gap]. The challenge is that decisions require judgment under uncertainty, not just the best model.',
      q3_template: 'For Data PM and Growth PM roles, interviewers push past your analysis: "What would you do if the data said the opposite?" If your answer requires different data, the data doesn\'t drive the decision — your judgment does.',
      q4_template: 'Next session: after reaching a data-driven conclusion, write one sentence: "I would make this same decision even if the data were 20% weaker because [reason]." Practise standing behind the judgment, not just the numbers.'
    }
  },
  designer: {
    format_a: {
      q1_template: 'Your user lens was the strongest part of this case — [specific]. That instinctive user segmentation is something most PM candidates learn analytically; you already feel it.',
      q2_template: 'Where the thinking broke down: [specific_gap]. This is the specific Consumer PM gap to close — user insight is strong, business translation is the work.',
      q3_template: 'For Consumer PM roles at CRED, Urban Company, and Nykaa, the closing interview question is "what does this cost the business if we don\'t fix it?" If you can\'t answer that, user empathy alone won\'t carry the case.',
      q4_template: 'Next session: after identifying a user problem, write one sentence connecting it to a business metric. "Users are confused in onboarding" → "This reduces 30-day activation by X%, which at our current scale costs ₹Y/month in LTV." That sentence is the bridge.'
    },
    format_b: {
      q1_template: 'Your empathy for the end-user experience showed in [specific]. The question you asked about "how will users encounter this?" is exactly right and often missed.',
      q2_template: 'Where the thinking broke down: [specific_gap]. The business rationale — why this decision matters financially — is the specific vocabulary to build.',
      q3_template: 'Consumer PM interviews end with a business question. "Your UX reasoning is great — what\'s the ROI of this over 6 months?" Practise closing the user argument with a business case.',
      q4_template: 'Next session: force yourself to write the financial impact of each product decision before finishing your answer. Even if you\'re estimating — "rough order of magnitude, this is a ₹2Cr annual impact." The estimate matters less than the habit.'
    }
  },
  qa: {
    format_a: {
      q1_template: 'BEFORE ANYTHING ELSE: your edge-case and failure-mode thinking showed up in [specific]. That instinct — looking for where things break before they break — is one of the rarest PM skills in any interview room.',
      q2_template: 'After that strength: the gap that showed here was [specific_gap]. This is the expected pattern — failure-mode thinking is strong, strategic framing of "what to build next" is the muscle to develop.',
      q3_template: 'For Technical PM roles at GCCs and platform companies, the highest-value skill is exactly what you demonstrated — thinking about edge cases and failure modes before approval. Most PMs don\'t. You do.',
      q4_template: 'Next session: take your edge-case thinking and translate it into a PM recommendation language. Not "this will fail if X happens" — "because X can happen, I recommend we [specific action] before shipping." Make the instinct actionable.'
    },
    format_b: {
      q1_template: 'Your pre-launch risk identification was specific and correct — [specific]. That is not normal. Most PM candidates approve launches without asking the questions you asked.',
      q2_template: 'The gap in this case: [specific_gap]. Specifically, the business rationale — "why does this matter to the CEO" — is the layer to add to your instinctively correct risk identification.',
      q3_template: 'Technical PM interviews often include a "what would you do before shipping" question. Your answer was technically strong. The additional layer: connect each risk to a business outcome. "If the timeout edge cases fail, we estimate X transactions/day fail = ₹Y/day in chargebacks."',
      q4_template: 'Next session: for each risk you identify, write the business consequence in one sentence. Practise the habit of connecting technical risk to business impact every single time.'
    }
  },
  ops: {
    format_a: {
      q1_template: 'Your cross-functional thinking showed in [specific] — you naturally considered the operational dependencies. That\'s rare and directly translates to PM work.',
      q2_template: 'Where the thinking broke down: [specific_gap]. The shift to notice: you framed this as an operational problem (how do we execute) rather than a product problem (why is the user doing this / what should we build).',
      q3_template: 'For Growth PM roles at Swiggy, Zomato, and Urban Company — where operations and product intersect — your operational depth is a genuine asset. The gap to close: leading with user motivation before process fix.',
      q4_template: 'Next session: before writing any process-level recommendation, write one sentence about the user: "The user stopped doing X because they felt Y." Then build the operational fix on top of that.'
    },
    format_b: {
      q1_template: 'Your stakeholder mapping was detailed and realistic — [specific]. The ability to name all affected parties before making a decision is more rare than it sounds.',
      q2_template: 'Where the thinking broke down: [specific_gap]. The product question — "what should we build, and for whom?" — was answered in operational terms rather than user value terms.',
      q3_template: 'For Consumer PM and Growth PM roles, the interview difference between an ops professional and a PM is one question: "Why does the user care?" Practise making that the first question, not the last.',
      q4_template: 'Next session: start your answer by writing the user problem in one sentence, in first-person user voice: "I am a Swiggy user in Tier-2 who stopped ordering because [specific reason]." That sentence grounds every recommendation that follows.'
    }
  },
  support: {
    format_a: {
      q1_template: 'Your user-level reading of this situation was precise — [specific]. The user truth you surfaced in your first hypothesis is the kind of insight that only comes from real user proximity. It\'s genuine, not researched.',
      q2_template: 'Where the thinking broke down: [specific_gap]. The translation gap — turning user insight into product strategy — is the specific work ahead.',
      q3_template: 'Consumer PM interviews at B2B and B2C companies both end with: "And why should we prioritise fixing this over what\'s already on the roadmap?" That\'s the question your user insight must answer in business language.',
      q4_template: 'Next session: take your strongest user observation and write the product case for it — in 3 sentences: (1) user problem, (2) business metric it\'s hurting, (3) why now over everything else. That\'s the PM translation of your support instinct.'
    },
    format_b: {
      q1_template: 'Your empathy for what users actually experience — not what the data says — was the strongest element of this case. [specific] showed that you read user motivation, not just behavior.',
      q2_template: 'The gap here: [specific_gap]. Specifically, the connection from user insight to business decision is the vocabulary to build.',
      q3_template: 'B2B and Consumer PM roles at SaaS companies place enormous value on user insight — it\'s what support and CS professionals have that no one else does. Your challenge is to claim it in PM language, not support language.',
      q4_template: 'Next session: after each user observation, add the data sentence. "Users are confused by X" → "This shows up as Y% of our support tickets, which takes Z hours/week to handle, which costs ₹W/month in support cost." Data turns insight into a decision.'
    }
  },
  mba: {
    format_a: {
      q1_template: 'Your problem framing was structured and well-scoped — [specific]. The ability to bound a problem before diving in is genuinely valuable and not common.',
      q2_template: 'Where the thinking broke down: [specific_gap]. This is the MBA-to-PM transition gap: strategy framing is strong, user-level product thinking is the gap.',
      q3_template: 'Growth PM interviews start with metrics but always pivot to user: "What does the 12% retention drop tell you about how users feel about the product?" The user question is not decoration — it\'s the product instinct signal.',
      q4_template: 'Next session: before any solution, write one sentence in the voice of the user: "I\'m a Swiggy user in Kanpur and I stopped ordering because [specific reason]." Then build your analysis from that human anchor.'
    },
    format_b: {
      q1_template: 'Your strategic framing was clear — [specific]. The ability to consider business context before diving into execution is a genuine PM asset.',
      q2_template: 'Where the thinking broke down: [specific_gap]. The challenge for MBA candidates: execution depth — how would this actually get built, in what order, by whom?',
      q3_template: 'For Growth PM and Strategy PM interviews, the pivot to execution comes after your framework: "Walk me through how you\'d actually implement this in Q1." That\'s where strategic framing alone runs out.',
      q4_template: 'Next session: after your strategic recommendation, add 3 sentences on implementation: who owns it, what the first sprint looks like, and what you measure in week 1 to know if it\'s working.'
    }
  },
  ba: {
    format_a: {
      q1_template: 'Your requirements-level thinking — [specific] — was precise. The ability to think in terms of conditions, edge cases, and user scenarios is a genuine BA-to-PM asset.',
      q2_template: 'Where the thinking broke: [specific_gap]. The shift to notice: you defined what\'s needed, but the product question is why and for whom — the vision upstream of the requirements.',
      q3_template: 'Consumer PM and B2B PM interviews both test: "If stakeholders disagree on priority, how do you decide?" That\'s the strategic ownership question — it goes beyond requirements gathering.',
      q4_template: 'Next session: before writing requirements or investigation steps, write one sentence: "The goal of this work is to [outcome], not just [output]." Practise the shift from output-thinking to outcome-thinking.'
    },
    format_b: {
      q1_template: 'Your stakeholder awareness — [specific] — was detailed and realistic. Seeing the full map of who\'s affected by a decision is rare and directly useful in PM interviews.',
      q2_template: 'Where the thinking broke: [specific_gap]. BA work involves facilitating other people\'s decisions. PM work involves making the call when they disagree. That switch is the specific gap.',
      q3_template: 'For Consumer and B2B PM interviews, the hardest question is: "If engineering says 2 months and sales says the client needs it in 3 weeks — what do you decide and why?" There\'s no right answer, but you must own one.',
      q4_template: 'Next session: when you face a prioritisation decision, write your recommendation first — before the analysis. Then explain why. Practise owning the call before you can justify it perfectly.'
    }
  },
  scrum: {
    format_a: {
      q1_template: 'Your team dynamics and delivery awareness — [specific] — are PM assets that most candidates have to earn through hard experience. You\'re starting with them.',
      q2_template: 'Where the thinking broke: [specific_gap]. The shift from Scrum to Product is from "how does the team deliver this?" to "why should we build this at all, and for whom?"',
      q3_template: 'For Technical PM and Consumer PM roles, the interview pivot is: "Walk me through how you decided what went into Q3 — not how you managed it, but how you decided it." That\'s the strategy question.',
      q4_template: 'Next session: before any answer about process or delivery, write one sentence upstream: "We chose to work on X because [user/business reason] — not because the stakeholder asked for it." Practise decision logic before execution logic.'
    },
    format_b: {
      q1_template: 'Your facilitation instinct — [specific] — produced a decision-making structure that most PM candidates don\'t naturally bring. You know how to navigate disagreement.',
      q2_template: 'Where the thinking broke: [specific_gap]. Scrum Masters are experts at facilitating other people\'s product decisions. PMs have to make the call unilaterally and own the outcome.',
      q3_template: 'The distinction interviewers make: "Did you facilitate this decision, or did you make this decision?" For PM roles, the latter is always the answer. Make the call, then explain it.',
      q4_template: 'Next session: write your recommendation first — before mentioning any stakeholder input or process. Then note the dissenting view and why you\'re overriding it. Own the decision before explaining the collaboration.'
    }
  },
  switcher: {
    format_a: {
      q1_template: 'Your domain expertise showed in [specific]. The user insight that comes from living in or serving a specific industry is not something a 3-month bootcamp can manufacture. You have it.',
      q2_template: 'Where the thinking broke: [specific_gap]. The PM vocabulary — framing domain insight in product strategy language — is the specific work ahead.',
      q3_template: 'For Consumer PM roles in your domain (EdTech, HealthTech, FinTech), the differentiating interview question is: "Why does [specific user problem you named] not get solved by existing products?" You have the domain answer. We\'re building the PM framing around it.',
      q4_template: 'Next session: take one domain insight you have from your prior career and write it as a product problem statement: "There is a user who [specific situation] who needs [specific thing] but currently [specific gap in existing solutions]." That format turns domain expertise into product language.'
    },
    format_b: {
      q1_template: 'Your perspective as someone who has been the user — not just studied them — showed in [specific]. That is your moat as a PM candidate. Not many people have it.',
      q2_template: 'Where the thinking broke: [specific_gap]. The PM vocabulary layer — how to frame your domain knowledge in the language of product decisions — is what we\'re building.',
      q3_template: 'For Career Switchers, the interview opportunity is: "Your domain expertise is exactly why we\'re talking to you. Help me understand a problem in [your domain] that a well-designed product could solve." Prepare 2–3 deep answers to that question.',
      q4_template: 'Next session: choose one product problem in your former domain and write the full problem statement, the user persona, and the success metric. Bring your domain knowledge into the product framework.'
    }
  }
};

// ── Readiness State Logic ─────────────────────────────────
const READINESS_STATES = {
  building: {
    id: 'building',
    label: '🔵 Building',
    shortLabel: 'Building',
    color: 'building',
    className: 'state-building',
    message: 'You are building. Keep going.',
    subMessage: 'Complete your weekly missions and simulations to advance.',
    ctaText: null
  },
  getting_close: {
    id: 'getting_close',
    label: '🟡 Getting Close',
    shortLabel: 'Getting Close',
    color: 'getting-close',
    className: 'state-getting-close',
    message: 'You are getting close.',
    subMessage: 'Start identifying 5–8 specific companies. Your background research now — before you\'re ready.',
    ctaText: 'Find My Target Companies'
  },
  ready: {
    id: 'ready',
    label: '🟢 Ready',
    shortLabel: 'Ready',
    color: 'ready',
    className: 'state-ready',
    message: 'You are ready. Not perfect — ready.',
    subMessage: 'Apply to 3–5 roles this week. Come back after each interview to debrief. The remaining gaps close faster in real interviews than in simulations.',
    ctaText: 'I Applied — Debrief Now'
  }
};

// ── State Persistence Helpers (Supabase + Local Fallback) ─────────────────────────────
const LOCAL_SESSION_KEY = 'pmready_session_id';
const STATE_KEY = 'pmready_state';

function getSessionId() {
  let sid = localStorage.getItem(LOCAL_SESSION_KEY);
  if (!sid) {
    sid = 'anon_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    localStorage.setItem(LOCAL_SESSION_KEY, sid);
  }
  return sid;
}

window._pmready_state_cache = null;

async function saveState(updates) {
  const current = await loadState();
  const next = { ...current, ...updates, updatedAt: new Date().toISOString() };
  window._pmready_state_cache = next;
  
  // ALways persist to localStorage as an immediate bulletproof fallback
  localStorage.setItem(STATE_KEY, JSON.stringify(next));

  try {
    const { supabase } = await import('./supabaseClient.js');
    const sid = getSessionId();

    const dbRow = {
      session_id: sid,
      archetype: next.archetype,
      background: next.background,
      secondaryArchetype: next.secondaryArchetype,
      readiness_state: next.readinessState || 'building',
      sim_completed: next.simCompleted || 0,
      week_number: next.weekNumber || 1,
      completed_cases: next.completedCases || [],
      action_response: next.actionResponse || '',
      avg_score: next.avgScore || 0,
    };

    await supabase.from('profiles').upsert(dbRow, { onConflict: 'session_id' });
  } catch (err) { console.warn('Supabase sync failed, relying on localStorage.'); }
  return next;
}

async function loadState() {
  // 1. Memory Cache
  if (window._pmready_state_cache) return window._pmready_state_cache;

  // 2. LocalStorage Cache (Synchronous & Bulletproof)
  let localState = {};
  try {
    const raw = localStorage.getItem(STATE_KEY);
    if (raw) localState = JSON.parse(raw);
  } catch (err) {}

  // 3. Supabase authoritative fetch
  try {
    const { supabase } = await import('./supabaseClient.js');
    const sid = getSessionId();
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('session_id', sid)
      .maybeSingle(); // Changed from .single() to avoid 406 error on new users

    if (error || !data) {
      window._pmready_state_cache = localState;
      return localState;
    }

    const next = {
      archetype: data.archetype,
      background: data.background,
      secondaryArchetype: data.secondaryArchetype,
      readinessState: data.readiness_state,
      simCompleted: data.sim_completed,
      weekNumber: data.week_number,
      completedCases: data.completed_cases || [],
      actionResponse: data.action_response,
      avgScore: data.avg_score
    };
    window._pmready_state_cache = next;
    // Keep local sync'd
    localStorage.setItem(STATE_KEY, JSON.stringify(next));
    return next;
  } catch (err) {
    window._pmready_state_cache = localState;
    return localState;
  }
}

async function clearState() {
  try {
    const { supabase } = await import('./supabaseClient.js');
    const sid = getSessionId();
    await supabase.from('profiles').delete().eq('session_id', sid);
  } catch (err) { }
  localStorage.removeItem(LOCAL_SESSION_KEY);
  localStorage.removeItem(STATE_KEY);
  window._pmready_state_cache = null;
}

// Readiness thresholds
function computeReadiness(state) {
  const completed = state.simCompleted || 0;
  const score = state.avgScore || 0;
  if (completed >= 4 && score >= 75) return 'ready';
  if (completed >= 2 && score >= 60) return 'getting_close';
  return 'building';
}

// ── Expose Global Data to ES Modules ──────────────────────────────
export {
  ARCHETYPES,
  BACKGROUNDS,
  CASES,
  QUIZ_QUESTIONS,
  RUBRIC_DIMENSIONS,
  CONCEPT_CARDS,
  MISSIONS,
  READINESS_STATES,
  PAYWALL_CONFIG,
  FEEDBACK_TEMPLATES,
  saveState,
  loadState,
  clearState,
  computeReadiness,
  computeRubricScore,
  calculateArchetype,
  getExperienceLevel
};

// Also expose globally for non-module script compatibility in detect.html
Object.assign(window, {
  ARCHETYPES,
  BACKGROUNDS,
  CASES,
  QUIZ_QUESTIONS,
  RUBRIC_DIMENSIONS,
  CONCEPT_CARDS,
  MISSIONS,
  READINESS_STATES,
  PAYWALL_CONFIG,
  FEEDBACK_TEMPLATES,
  saveState,
  loadState,
  clearState,
  computeReadiness,
  computeRubricScore,
  calculateArchetype,
  getExperienceLevel
});

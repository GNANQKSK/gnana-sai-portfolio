import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowDownRight, ArrowUpRight, BrainCircuit, Check, Code2, Database, Layers3, Menu, Moon, ScanLine, Sparkles, Sun, X, Workflow, Braces, FlaskConical, Bug, LineChart, Server, Cpu, HeartPulse, Activity, BookOpen, Bot, Gauge, Wallet, Coins, Timer, Gamepad2 } from 'lucide-react'
import './style.css'

const sections = ['Home', 'About', 'Expertise', 'Experience', 'Skills', 'Projects', 'Education', 'Contact']
const categories = ['ALL', 'AI / ML', 'LANGUAGES', 'FRONTEND', 'BACKEND', 'DATABASE', 'TOOLS', 'CORE']
const skills = [
  { name: 'Machine Learning', category: 'AI / ML', mark: 'ML' }, { name: 'Computer Vision', category: 'AI / ML', mark: 'CV' }, { name: 'YOLOv8', category: 'AI / ML', mark: 'Y8' }, { name: 'TensorFlow', category: 'AI / ML', mark: 'TF' }, { name: 'Scikit-learn', category: 'AI / ML', mark: 'Sk' }, { name: 'Data Analysis', category: 'AI / ML', mark: 'DA' }, { name: 'Data Visualization', category: 'AI / ML', mark: 'DV' },
  { name: 'Python', category: 'LANGUAGES', mark: 'Py' }, { name: 'Java', category: 'LANGUAGES', mark: 'J' }, { name: 'C++', category: 'LANGUAGES', mark: 'C+' }, { name: 'C', category: 'LANGUAGES', mark: 'C' },
  { name: 'HTML', category: 'FRONTEND', mark: 'H' }, { name: 'CSS', category: 'FRONTEND', mark: 'C' }, { name: 'React', category: 'FRONTEND', mark: 'R' },
  { name: 'Flask', category: 'BACKEND', mark: 'F' }, { name: 'FastAPI', category: 'BACKEND', mark: 'FA' }, { name: 'REST APIs', category: 'BACKEND', mark: 'API' },
  { name: 'SQL', category: 'DATABASE', mark: 'Sq' }, { name: 'DBMS', category: 'DATABASE', mark: 'DB' },
  { name: 'Git', category: 'TOOLS', mark: 'Git' }, { name: 'GitHub', category: 'TOOLS', mark: 'GH' }, { name: 'VS Code', category: 'TOOLS', mark: 'VS' }, { name: 'Jupyter', category: 'TOOLS', mark: 'Jp' }, { name: 'Google Colab', category: 'TOOLS', mark: 'Co' },
  { name: 'Data Structures & Algorithms', category: 'CORE', mark: 'DSA' }, { name: 'OOP', category: 'CORE', mark: 'OOP' }, { name: 'Operating Systems', category: 'CORE', mark: 'OS' },
]
const expertise = [
  { n: '01', title: 'AI / Machine Learning', detail: 'From computer vision models to applied machine learning, building AI solutions around a clearly defined problem.', icon: BrainCircuit, tags: ['Machine learning', 'Computer vision', 'Applied AI'] },
  { n: '02', title: 'Data Science', detail: 'Preparing and exploring data, selecting an approach, and developing a model that can be evaluated against the problem.', icon: ScanLine, tags: ['Data analysis', 'Modeling', 'Python'] },
  { n: '03', title: 'Data Analytics', detail: 'Turning structured data into useful findings through analysis and clear visual communication.', icon: Database, tags: ['SQL', 'Analysis', 'Visualization'] },
  { n: '04', title: 'Software Engineering', detail: 'Designing, implementing, and improving applications with clear responsibilities and practical interfaces.', icon: Code2, tags: ['Development', 'APIs', 'Iteration'] },
  { n: '05', title: 'Testing & Quality', detail: 'Checking expected behavior, validating inputs and outputs, and finding issues before they reach users.', icon: Check, tags: ['Validation', 'Debugging', 'Quality'] },
]
const experience = [
  { company: 'Indian Servers', role: 'Software Developer Intern', dates: 'May 2026 – Present', kind: 'SOFTWARE DEVELOPMENT', icon: Braces, description: 'Software development internship.' },
  { company: 'Indian Servers', role: 'AI & Computer Vision Intern', dates: 'Jun 2025 – Aug 2025', kind: 'AI / COMPUTER VISION', icon: Cpu, description: 'Internship focused on artificial intelligence and computer vision.' },
  { company: 'VisualProofs', role: 'Selected Internship Contribution', dates: 'SELECTED WORK', kind: 'PRODUCT CONTRIBUTION', icon: Layers3, description: 'A selected contribution from the internship, represented as one part of a larger product.' },
]
const projects = [
  { title: 'HeartCare-AI', type: 'AI / ML', description: 'An AI project focused on heart health.', tags: ['AI / ML', 'Python'], symbol: '♥ AI', icon: HeartPulse },
  { title: 'Medha – Business Analytics & Intelligence', type: 'Data & Analytics', description: 'A business analytics and intelligence project.', tags: ['Data Analysis', 'Visualization'], symbol: 'DATA', icon: LineChart },
  { title: 'Handwritten Math OCR', type: 'AI / ML', description: 'Recognizing handwritten mathematical expressions with computer vision and OCR.', tags: ['Computer Vision', 'OCR'], symbol: '∑ →', icon: Braces },
  { title: 'YOLOv8 Surgical Instrument Detection', type: 'AI / ML', description: 'Surgical instrument detection using YOLOv8.', tags: ['YOLOv8', 'Computer Vision'], symbol: 'CV / 08', icon: ScanLine },
  { title: 'AI Ticket Booking Bot', type: 'AI / ML', description: 'An AI-assisted ticket booking bot.', tags: ['AI / ML', 'Automation'], symbol: 'BOT', icon: Bot },
  { title: 'Java Speed Typing Application', type: 'Development', description: 'A typing speed application built with Java.', tags: ['Java', 'Application'], symbol: 'Aa / s', icon: Timer },
  { title: 'TypeMaster RPG', type: 'Development', description: 'A typing practice experience presented as an RPG.', tags: ['Typing', 'Game'], symbol: 'RPG', icon: Gamepad2 },
  { title: 'Study Tracker', type: 'Development', description: 'A tool for tracking study activity.', tags: ['Tracking', 'Productivity'], symbol: 'STUDY', icon: BookOpen },
  { title: 'Expense Tracker', type: 'Development', description: 'A tool for tracking expenses.', tags: ['Tracking', 'Finance'], symbol: '₹ +', icon: Wallet },
  { title: 'Currency Converter', type: 'Development', description: 'A currency conversion application.', tags: ['Currency', 'Application'], symbol: '₹ ↔ $', icon: Coins },
].map(project => ({ ...project, year: 'PROJECT', href: 'https://github.com/GNANQKSK' }))


function GithubIcon({ size = 22 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M15 22v-4.2c0-1.15-.4-1.8-1.1-2.2 3.6-.4 7.4-1.8 7.4-8 0-1.8-.6-3.2-1.6-4.3.2-.4.7-2-.2-4.2 0 0-1.3-.4-4.3 1.6a14.7 14.7 0 0 0-7.8 0C4.4-1.1 3.1-.7 3.1-.7c-.9 2.2-.4 3.8-.2 4.2-1 1.1-1.6 2.5-1.6 4.3 0 6.2 3.8 7.6 7.4 8-.7.4-1.1 1.1-1.1 2.2V22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
}

function LinkedinIcon({ size = 22 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M7 10v7M7 7.5v.01M11 17v-4.2a2.8 2.8 0 0 1 5.6 0V17M11 10v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
}

function Reveal({ children, className = '', delay = 0 }) {
  const reduced = useReducedMotion()
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: reduced ? 0 : .65, delay, ease: [.22, .8, .25, 1] }}>{children}</motion.div>
}

function App() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark')
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [category, setCategory] = useState('ALL')
  const [focus, setFocus] = useState(0)
  const [projectFilter, setProjectFilter] = useState('All work')
  const reduced = useReducedMotion()

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('gnana-portfolio-theme', theme) } catch { /* Theme remains active for this visit if storage is unavailable. */ }
  }, [theme])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32)
      let current = 'Home'
      for (const name of sections) {
        const el = document.getElementById(name.toLowerCase())
        if (el && el.getBoundingClientRect().top < window.innerHeight * .42) current = name
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll()
    const onPointer = (e) => {
      const root = document.documentElement
      root.style.setProperty('--cx', `${e.clientX}px`)
      root.style.setProperty('--cy', `${e.clientY}px`)
      document.querySelector('.custom-cursor')?.classList.toggle('cursor-active', Boolean(e.target.closest?.('a,button,[role="tab"]')))
    }
    if (!reduced) window.addEventListener('pointermove', onPointer, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('pointermove', onPointer) }
  }, [reduced])

  useEffect(() => {
    const onKeyDown = (e) => { if (e.key === 'Escape') { setMenuOpen(false); document.querySelector('.menu-toggle')?.focus() } }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const go = (name) => { setMenuOpen(false); document.getElementById(name.toLowerCase())?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' }) }
  const projectFilters = ['All work', 'AI / ML', 'Data & Analytics', 'Development']
  const visibleProjects = projects.filter(p => projectFilter === 'All work' || p.type === projectFilter)
  const visibleSkills = category === 'ALL' ? skills : [...skills].sort((a, b) => Number(b.category === category) - Number(a.category === category))

  return <>
    {!reduced && <><div className="cursor-glow" aria-hidden="true"/><div className="custom-cursor" aria-hidden="true"/></>}
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <a href="#home" className="wordmark" aria-label="Boddu Gnana Sai home" onClick={e => { e.preventDefault(); go('Home') }}><span className="wordmark-icon">G<span>.</span></span><span className="wordmark-name">BODDU GNANA SAI<small>AI / ML ENGINEER</small></span></a>
      <nav className="desktop-nav" aria-label="Main navigation">{sections.map((s, i) => <a key={s} href={`#${s.toLowerCase()}`} className={active === s ? 'active' : ''} aria-current={active === s ? 'location' : undefined} onClick={e => { e.preventDefault(); go(s) }}><span className="nav-index">0{i + 1}</span>{s}</a>)}</nav>
      <a href="mailto:gnanasaiboddu01@gmail.com" className="nav-cta">Let’s talk <ArrowUpRight size={14} /></a>
      <button className="theme-toggle" type="button" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} aria-pressed={theme === 'light'} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} onClick={() => setTheme(current => current === 'dark' ? 'light' : 'dark')}><AnimatePresence mode="wait" initial={false}><motion.span key={theme} className="theme-toggle-icon" initial={reduced ? false : { opacity: 0, rotate: -35, scale: .75 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={reduced ? undefined : { opacity: 0, rotate: 35, scale: .75 }} transition={{ duration: reduced ? 0 : .18 }}>{theme === 'dark' ? <Sun size={16} strokeWidth={1.7} /> : <Moon size={16} strokeWidth={1.7} />}</motion.span></AnimatePresence></button>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </header>
    <AnimatePresence>{menuOpen && <motion.nav id="mobile-navigation" className="mobile-menu" initial={reduced ? false : { opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={reduced ? undefined : { opacity: 0, height: 0 }} transition={{ duration: reduced ? 0 : .24 }} aria-label="Mobile navigation">{sections.map((s, i) => <a key={s} href={`#${s.toLowerCase()}`} onClick={e => { e.preventDefault(); go(s) }}><span>0{i + 1}</span>{s}<ArrowUpRight size={16} /></a>)}<a className="mobile-email" href="mailto:gnanasaiboddu01@gmail.com">gnanasaiboddu01@gmail.com</a></motion.nav>}</AnimatePresence>

    <main id="main-content">
      <section className="hero" id="home">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <motion.div className="eyebrow hero-eyebrow" initial={reduced ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : .3, delay: reduced ? 0 : .18 }}><span className="status-dot" /> AI / ML ENGINEER <span className="eyebrow-line" /> INDIA · IST</motion.div>
          <h1><motion.span className="hero-name" initial={reduced ? false : { opacity: 0, y: 45 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : .8, ease: [.2, .7, .25, 1] }}>BODDU GNANA</motion.span><motion.span className="hero-last" initial={reduced ? false : { opacity: 0, y: 45 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : .8, delay: reduced ? 0 : .12, ease: [.2, .7, .25, 1] }}>SAI<span className="accent-period">.</span></motion.span></h1>
          <motion.div className="hero-role" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reduced ? 0 : .25, delay: reduced ? 0 : .45 }}><span>AI/ML Engineer</span><i /> Data &amp; Software Developer</motion.div>
          <motion.p className="hero-intro" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reduced ? 0 : .25, delay: reduced ? 0 : .55 }}>I build thoughtful solutions at the intersection of intelligent systems, data, and software.</motion.p>
          <motion.div className="hero-actions" initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : .25, delay: reduced ? 0 : .68 }}><button className="button button-primary" onClick={() => go('Projects')}>Explore my work <ArrowDownRight size={16} /></button><button className="button button-quiet" onClick={() => go('Contact')}>Contact me <ArrowUpRight size={15} /></button></motion.div>
          <motion.div className="hero-social" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reduced ? 0 : .25, delay: reduced ? 0 : .8 }}><span>FIND ME ELSEWHERE</span><a href="https://github.com/GNANQKSK" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></a><a href="https://www.linkedin.com/in/gnana-sai-boddu-8449a829a" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a><a href="https://leetcode.com/u/Gnanasai01/" target="_blank" rel="noreferrer" className="leetcode-link" aria-label="LeetCode">LC</a></motion.div>
        </div>
        <motion.div className="hero-portrait-wrap" initial={reduced ? false : { opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: reduced ? 0 : 1, delay: reduced ? 0 : .25 }}>
          <div className="portrait-frame"><img src="/images/profile.png" alt="Portrait of Boddu Gnana Sai" className="portrait" /><div className="portrait-shade"/><span className="portrait-caption">BODDU GNANA SAI <span>· 2025</span></span><span className="portrait-corner" /></div>
          <div className="portrait-index">01 <span>/</span> 08</div><div className="portrait-note"><span>BASED IN</span>CHILAKALLAPALLI<br />ANDHRA PRADESH</div>
          <div className="orbit-label"><span className="orbit-dot" /> BUILDING WITH INTENTION</div>
        </motion.div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE <ArrowDown size={13} /></span><span className="hero-coordinate">16° N &nbsp; 82° E</span></div>
        <span className="hero-vertical">PORTFOLIO / 2025—26</span>
      </section>

      <section className="section about-section" id="about"><div className="section-head"><span className="eyebrow"><b>01</b> / THE PERSON BEHIND THE CODE</span><span className={"section-index" + (active === "About" ? " active" : "")}>ABOUT</span></div><div className="about-grid"><Reveal><h2 className="editorial-heading">Curious by nature.<br /><em>Engineer</em> by choice.</h2></Reveal><Reveal delay={.12}><div className="about-body"><p className="lead">I’m an AI/ML engineering student who enjoys making complex ideas useful in the real world.</p><p>My interests span machine learning, computer vision, data, and software development. I like moving between the details of implementation and the bigger question: who does this help, and how?</p><p>My internship experience includes software development, AI, and computer vision. I’m also continuing to build through practical projects, team planning, and prototype development.</p><p>Whether I’m exploring a dataset, building a prototype, or solving a new problem, I bring curiosity, steady iteration, and a willingness to keep learning.</p><div className="about-meta"><span><small>BASED IN</small>Andhra Pradesh, India</span><span><small>LANGUAGES</small>English · Telugu · Hindi</span></div></div></Reveal></div><div className="about-statement"><span className="statement-mark">“</span><p>Good technology should make a meaningful difference<br className="desktop-only" /> where it meets everyday life.</p><span className="statement-by">— A PRINCIPLE I BUILD BY</span></div></section>

      <section className="section expertise-section" id="expertise"><div className="section-head"><span className="eyebrow"><b>02</b> / WHAT I BRING TO THE TABLE</span><span className={"section-index" + (active === "Expertise" ? " active" : "")}>EXPERTISE</span></div><div className="expertise-intro"><Reveal><h2 className="section-title">A toolkit for <em>real problems.</em></h2></Reveal><Reveal><p>Different disciplines, one focus: build things that work, and understand why.</p></Reveal></div><div className="expertise-layout"><div className="expertise-list" role="tablist" aria-label="Areas of expertise">{expertise.map((item, i) => <button key={item.n} role="tab" tabIndex={focus === i ? 0 : -1} aria-selected={focus === i} aria-controls="expertise-panel" className={`expertise-row ${focus === i ? 'selected' : ''}`} onKeyDown={e => { if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); const next = (i + 1) % expertise.length; setFocus(next); e.currentTarget.parentElement.children[next].focus() } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); const next = (i + expertise.length - 1) % expertise.length; setFocus(next); e.currentTarget.parentElement.children[next].focus() } }} onFocus={() => setFocus(i)} onMouseEnter={() => setFocus(i)} onClick={() => setFocus(i)}><span className="expertise-number">{item.n}</span><span className="expertise-title">{item.title}</span><ArrowUpRight className="expertise-arrow" size={17} /></button>)}</div><AnimatePresence mode="wait"><motion.div id="expertise-panel" key={focus} className="expertise-detail" role="tabpanel" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} transition={{ duration: .25 }}><div className="expertise-detail-top"><span>FOCUS AREA / {expertise[focus].n}</span>{React.createElement(expertise[focus].icon, { size: 25 })}</div><h3>{expertise[focus].title}</h3><p>{expertise[focus].detail}</p><div className="tag-row">{expertise[focus].tags.map(t => <span key={t}>{t}</span>)}</div><div className="detail-decoration"><span>{expertise[focus].n}</span></div></motion.div></AnimatePresence></div></section>

      <section className="section workflow-section" id="workflow"><div className="section-head"><span className="eyebrow"><b>02A</b> / FROM QUESTION TO INSIGHT</span><span className="section-index">DATA / AI WORKFLOW</span></div><Reveal><div className="workflow-heading"><h2 className="section-title">A process that <em>stays curious.</em></h2><p>Each problem needs its own approach. This is the loop I use to keep the work grounded and testable.</p></div></Reveal><div className="workflow-steps">{[{icon: ScanLine,title:'Understand',text:'Clarify the problem, intended outcome, and available data.'},{icon: Database,title:'Explore',text:'Inspect the data, check its quality, and find useful patterns.'},{icon: BrainCircuit,title:'Build',text:'Choose an appropriate method and develop a focused solution.'},{icon: Gauge,title:'Evaluate',text:'Compare results against the goal and investigate what misses.'},{icon: LineChart,title:'Communicate',text:'Present the findings, limitations, and next practical step.'}].map((step,i)=><Reveal key={step.title} delay={i*.04}><article className="workflow-step"><span className="workflow-count">0{i+1}</span><step.icon size={20}/><h3>{step.title}</h3><p>{step.text}</p>{i<4&&<ArrowUpRight className="workflow-arrow" size={15}/>}</article></Reveal>)}</div></section>

      <section className="section engineering-section" id="engineering"><div className="section-head"><span className="eyebrow"><b>02B</b> / BUILD WITH INTENTION</span><span className="section-index">SOFTWARE ENGINEERING</span></div><div className="engineering-grid"><Reveal><div><span className="engineering-kicker"><Braces size={15}/> THE BUILDING BLOCKS</span><h2 className="section-title">Make it clear.<br/><em>Make it useful.</em></h2><p className="engineering-lead">Software engineering is the practice of turning a useful idea into a tool people can understand and rely on.</p></div></Reveal><div className="engineering-principles">{[{icon:Workflow,title:'Structure',text:'Break a problem into clear parts and keep responsibilities understandable.'},{icon:Server,title:'Integration',text:'Connect interfaces and services through explicit, well-defined APIs.'},{icon:Layers3,title:'Iteration',text:'Build in small steps, review the result, and improve what needs attention.'}].map((item,i)=><Reveal key={item.title} delay={i*.07}><article className="engineering-principle"><span>0{i+1}</span><item.icon size={18}/><div><h3>{item.title}</h3><p>{item.text}</p></div></article></Reveal>)}</div></div></section>

      <section className="section quality-section" id="quality"><div className="section-head"><span className="eyebrow"><b>02C</b> / VERIFY THE DETAILS</span><span className="section-index">TESTING & QUALITY</span></div><Reveal><div className="quality-intro"><div><span className="engineering-kicker"><FlaskConical size={15}/> QUALITY IS PART OF THE BUILD</span><h2 className="section-title">Trust the result.<br/><em>Check the work.</em></h2></div><p>Testing connects the intended behavior with what the software actually does. A deliberate feedback loop makes fixes easier to understand.</p></div></Reveal><div className="quality-checks">{[{icon:Check,title:'Expected behavior',text:'Check the common path against the intended outcome.'},{icon:Bug,title:'Edge cases',text:'Try boundary inputs, missing values, and invalid states.'},{icon:Activity,title:'Regression',text:'Recheck related behavior after making a change.'}].map((item,i)=><Reveal key={item.title} delay={i*.06}><article className="quality-check"><span>0{i+1}</span><item.icon size={19}/><h3>{item.title}</h3><p>{item.text}</p></article></Reveal>)}</div></section>

      <section className="section experience-section" id="experience"><div className="section-head"><span className="eyebrow"><b>03</b> / WORK & LEADERSHIP</span><span className={"section-index" + (active === "Experience" ? " active" : "")}>EXPERIENCE</span></div><div className="experience-list">{experience.map((item, i) => <Reveal key={`${item.company}-${item.role}`} delay={i * .06}><article className="experience-card"><div className="experience-card-icon">{React.createElement(item.icon, { size: 19 })}</div><div className="experience-card-main"><div className="experience-card-top"><span className="experience-company">{item.company}</span><span className="experience-type">{item.kind}</span></div><h2>{item.role}</h2><p>{item.description}</p></div><div className="experience-card-date">{item.dates}</div></article></Reveal>)}<Reveal delay={.18}><article className="experience-card leadership-card"><div className="experience-card-icon"><Workflow size={19} /></div><div className="experience-card-main"><div className="experience-card-top"><span className="experience-company">Smart India Hackathon 2025</span><span className="experience-type">TEAM LEAD</span></div><h2>AI / IoT project solutions</h2><p>Team and project planning, task allocation, technical implementation, prototype development, and presentation.</p><div className="experience-chips"><span>Planning</span><span>Implementation</span><span>Prototype</span><span>Presentation</span></div></div><div className="experience-card-date">2025</div></article></Reveal></div></section>

      <section className="section skills-section" id="skills"><div className="section-head"><span className="eyebrow"><b>04</b> / A GROWING TOOLKIT</span><span className={"section-index" + (active === "Skills" ? " active" : "")}>SKILLS</span></div><div className="skills-intro"><Reveal><h2 className="section-title">Built to <em>keep learning.</em></h2></Reveal><Reveal><p>Choose a discipline to explore the tools and strengths I bring into it.</p></Reveal></div><div className="skill-filters" role="group" aria-label="Filter skills by category">{categories.map(c => <button key={c} className={`filter-pill ${category === c ? 'chosen' : ''}`} onClick={() => setCategory(c)} aria-pressed={category === c}><span>{c}</span>{category === c && <motion.i layoutId="active-skill-pill" />}</button>)}</div><p className="sr-only" aria-live="polite">{category} category selected. Matching skills move to the beginning; other skills remain visible.</p><div className="skills-grid">{visibleSkills.map(skill => {const selected = category !== 'ALL' && category === skill.category;const dim = category !== 'ALL' && !selected;return <motion.div layout="position" key={`${skill.category}-${skill.name}`} className={`skill-item ${selected ? 'skill-selected' : ''} ${dim ? 'muted' : ''}`} animate={{ opacity: dim ? .43 : 1 }} transition={{ layout: { type: 'spring', stiffness: 360, damping: 34 }, opacity: { duration: .2 } }}><span className="skill-mark">{skill.mark}</span><span className="skill-name">{skill.name}</span><span className="skill-cat">{skill.category}</span><ArrowUpRight className="skill-arrow" size={14} /></motion.div>})}</div><p className="skills-footnote"><Sparkles size={13} /> Skills grow through building, testing, and asking better questions.</p></section>

      <section className="section projects-section" id="projects"><div className="section-head"><span className="eyebrow"><b>05</b> / SELECTED WORK</span><span className={"section-index" + (active === "Projects" ? " active" : "")}>PROJECTS</span></div><div className="projects-intro"><Reveal><h2 className="section-title">Ideas into <em>implementation.</em></h2></Reveal><Reveal><p>Selected projects across applied AI, analytics, and software development.</p></Reveal></div><div className="project-controls"><span>PROJECTS <b>({String(visibleProjects.length).padStart(2, '0')})</b></span><div className="project-filters" role="group" aria-label="Filter projects">{projectFilters.map(f => <button key={f} className={projectFilter === f ? 'active' : ''} onClick={() => setProjectFilter(f)} aria-pressed={projectFilter === f}>{f}</button>)}</div></div><motion.div layout className="projects-grid"><AnimatePresence mode="popLayout">{visibleProjects.map((p, i) => <motion.article layout key={p.title} className={`project-card project-card-${i + 1}`} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} transition={{ duration: .32 }}><a href={p.href} target="_blank" rel="noreferrer" className="project-link" aria-label={`See ${p.title} on the GitHub profile`}><div className={`project-art project-art-${i + 1}`}><div className="art-grid"/><span className="project-art-type">{p.type.toUpperCase()} <i /> {p.year}</span><span className="project-icon" aria-hidden="true">{React.createElement(p.icon, { size: 25 })}</span><span className="project-symbol">{p.symbol}</span><span className="project-art-index">{String(i + 1).padStart(2, '0')}</span><span className="project-open"><ArrowUpRight size={20} /></span></div><div className="project-info"><div><span className="project-kicker">{p.type} <i /> {p.year}</span><h3>{p.title}</h3></div><ArrowUpRight className="project-info-arrow" size={18} /></div><p className="project-description">{p.description}</p><div className="project-tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div></a></motion.article>)}</AnimatePresence></motion.div><a className="all-work-link" href="https://github.com/GNANQKSK" target="_blank" rel="noreferrer">Explore my GitHub <ArrowUpRight size={16} /></a></section>

      <section className="section education-section" id="education"><div className="section-head"><span className="eyebrow"><b>06</b> / THE FOUNDATION</span><span className={"section-index" + (active === "Education" ? " active" : "")}>EDUCATION</span></div><Reveal><div className="education-card"><div className="education-years">2023 <span>—</span> 2027</div><div className="education-info"><span className="eyebrow">BACHELOR OF TECHNOLOGY</span><h2>Computer Science Engineering</h2><h3>Artificial Intelligence &amp; Machine Learning</h3><p>GNA University</p></div><div className="education-seal"><Layers3 size={23} /><span>UNDERGRADUATE<br />STUDIES</span></div></div></Reveal></section>

      <section className="contact-section" id="contact"><div className="contact-grain" aria-hidden="true"/><div className="section-head"><span className="eyebrow"><b>07</b> / THE NEXT CHAPTER</span><span className={"section-index" + (active === "Contact" ? " active" : "")}>CONTACT</span></div><Reveal><div className="contact-content"><span className="contact-pretitle"><i /> PROJECTS, ROLES & COLLABORATION</span><h2>Let’s make<br /><em>something matter.</em></h2><p>Have an interesting problem, role, or idea in mind? I’d like to hear about it.</p><a className="contact-email" href="mailto:gnanasaiboddu01@gmail.com"><span>gnanasaiboddu01@gmail.com</span><ArrowUpRight size={20} /></a></div></Reveal><div className="contact-bottom"><div className="contact-location"><span>BASED IN</span>CHILAKALLAPALLI, ANDHRA PRADESH, INDIA</div><div className="contact-links"><a href="https://github.com/GNANQKSK" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={13} /></a><a href="https://www.linkedin.com/in/gnana-sai-boddu-8449a829a" target="_blank" rel="noreferrer">LINKEDIN <ArrowUpRight size={13} /></a><a href="https://leetcode.com/u/Gnanasai01/" target="_blank" rel="noreferrer">LEETCODE <ArrowUpRight size={13} /></a></div><span className="copyright">© 2026 BODDU GNANA SAI</span></div></section>
    </main>
    <footer className="site-footer"><a href="#home" className="footer-mark" aria-label="Back to top">G<span>.</span></a><span className="footer-copy">© 2026 BODDU GNANA SAI</span><span className="footer-note">BUILT WITH CURIOSITY · ANDHRA PRADESH, INDIA</span><a href="#home" className="back-to-top" onClick={e => { e.preventDefault(); go('Home') }}>BACK TO TOP <ArrowUpRight size={13}/></a></footer>
  </>
}

createRoot(document.getElementById('root')).render(<React.StrictMode><MotionConfig reducedMotion="user"><App /></MotionConfig></React.StrictMode>)

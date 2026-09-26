import { useEffect, useRef, useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import {
  ArrowDown, ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Blocks, Camera,
  Check, ChevronDown, Clapperboard, ExternalLink, Images,
  Layers3, Mail, MapPin, Menu, Moon, PenTool, Play, Send, Sun, Video,
  X, PanelsTopLeft, Sparkles, Quote, Search, Palette, MessageCircle,
} from 'lucide-react';
import { articles, certificates, faqs, person, projects, services, skillGroups, socialLinks, testimonials, tools } from './data/portfolio.js';

const iconMap = { PenTool, PanelsTopLeft, Images, Blocks, Clapperboard };
const navItems = [['Home', 'home'], ['About', 'about'], ['Services', 'services'], ['Work', 'work'], ['Journal', 'journal'], ['Contact', 'contact']];
const filters = ['All work', 'Branding', 'Social', 'Print', 'Photography', 'Video'];
const transition = { duration: 0.55, ease: [0.22, 1, 0.36, 1] };

function Reveal({ children, className = '', delay = 0, ...props }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ ...transition, delay }} {...props}>{children}</motion.div>;
}

function Header({ dark, setDark, progress }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-35% 0px -55% 0px' });
    navItems.forEach(([, id]) => { const node = document.getElementById(id); if (node) observer.observe(node); });
    return () => observer.disconnect();
  }, []);
  const closeMenu = () => setMenuOpen(false);
  return <>
    <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Bilal Raza home" onClick={closeMenu}>
        <img src={person.brandLogo} alt="" /> <span>bilal<span className="wordmark-dot">.</span></span>
      </a>
      <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
        {navItems.map(([label, id]) => <a key={id} className={active === id ? 'active' : ''} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
      </nav>
      <div className="header-actions">
        <button className="icon-button theme-toggle" type="button" onClick={() => setDark(!dark)} aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}>{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
        <a className="button button-small button-dark header-cta" href="#contact">Let’s talk <ArrowUpRight size={15} /></a>
        <button className="icon-button menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
    </header>
  </>;
}

function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return <div className={`section-heading ${align === 'center' ? 'heading-center' : ''}`}>
    <span className="eyebrow"><span />{eyebrow}</span>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>;
}

function Socials({ compact = false }) {
  return <div className={`social-links ${compact ? 'social-compact' : ''}`} aria-label="Social links">
    {socialLinks.map((item) => <a key={item.label} href={item.url} target="_blank" rel="noreferrer" aria-label={`Open Bilal's ${item.label} profile`} title={item.label}>{item.label === 'Instagram' ? <Camera size={16} /> : <span className="social-letter">{item.label === 'LinkedIn' ? 'in' : item.label === 'Behance' ? 'Be' : item.label === 'Dribbble' ? 'Dr' : 'Fi'}</span>}</a>)}
  </div>;
}

function Hero() {
  const [typedWord, setTypedWord] = useState('stick');
  useEffect(() => {
    const words = ['stick', 'connect', 'inspire'];
    let index = 0;
    const timer = window.setInterval(() => { index = (index + 1) % words.length; setTypedWord(words[index]); }, 2300);
    return () => window.clearInterval(timer);
  }, []);
  return <section className="hero section-shell" id="home">
    <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
    <div className="hero-content">
      <motion.div className="availability" initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}><span className="availability-dot" /> Available for select projects <span className="availability-arrow">↗</span></motion.div>
      <motion.p className="hero-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.22 }}>{person.name} <span>· {person.title}</span></motion.p>
      <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ ...transition, delay: 0.25 }}>I make ideas<br />feel <span className="hero-emphasis">impossible</span><br />to ignore<span className="hero-period">.</span></motion.h1>
      <motion.p className="hero-summary" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ ...transition, delay: 0.42 }}>Design, photography and motion for ideas that <AnimatePresence mode="wait"><motion.span className="hero-typed-word" key={typedWord} initial={{ opacity: 0, y: 7 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -7 }} transition={{ duration: 0.2 }}>{typedWord}</motion.span></AnimatePresence>.</motion.p>
      <motion.div className="hero-ctas" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.52 }}><a href="#work" className="button button-primary">Explore my work <ArrowDownRight size={17} /></a><a href="#contact" className="text-link">Let’s create together <ArrowUpRight size={16} /></a></motion.div>
      <motion.div className="hero-bottomline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}><Socials compact /><a className="scroll-cue" href="#about">Scroll to explore <ArrowDown size={14} /></a></motion.div>
    </div>
    <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.95, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ ...transition, delay: 0.2 }}>
      <div className="hero-image-backdrop" />
      <div className="hero-image-wrap"><img src={person.profile} alt="Bilal Raza, creative visual designer" fetchPriority="high" /></div>
      <div className="hero-sticker"><span>DESIGN</span><span className="sticker-star">✳</span><span>WITH FEELING</span></div>
      <div className="hero-caption"><span className="caption-icon"><Camera size={15} /></span><div><strong>Visual storyteller</strong><small>Based in Sargodha, Pakistan</small></div><ArrowUpRight size={16} /></div>
      <div className="hero-number">01 <span>—</span> 05</div>
    </motion.div>
    <div className="hero-side-note">DESIGN · CAPTURE · CREATE · INSPIRE</div>
  </section>;
}

function About() {
  return <section className="about-section section-pad" id="about"><div className="section-shell about-grid">
    <Reveal className="about-left"><SectionHeading eyebrow="A little about me" title={<>Creative work,<br /><span>with intention.</span></>} /><div className="about-stamp"><Sparkles size={19} /><span>Curiosity<br />in every frame</span></div></Reveal>
    <Reveal className="about-copy" delay={0.12}><p className="large-copy">I’m a multidisciplinary creative who believes that the best work doesn’t just look good — <em>it makes you feel something.</em></p><p>From the first sketch to the final frame, I bring thoughtful design and visual storytelling together to help people and brands show up with confidence. My work spans identity, digital design, photography and video.</p><div className="about-meta"><div><span>Based in</span><strong>{person.location}</strong></div><div><span>Working across</span><strong>Design · Photo · Motion</strong></div><div><span>Languages</span><strong>English · Urdu · Arabic</strong></div></div><a className="text-link" href={person.resume} target="_blank" rel="noreferrer">View my resume <ArrowUpRight size={16} /></a></Reveal>
    <div className="about-quote"><span className="quote-mark">“</span><p>Good design makes the complex feel beautifully simple.</p><span className="quote-byline">THE CREATIVE PRINCIPLE</span></div>
  </div></section>;
}

function Services() {
  return <section className="services-section section-pad" id="services"><div className="section-shell"><Reveal><SectionHeading eyebrow="What I can do for you" title={<>Creative services,<br /><span>thoughtfully made.</span></>} description="A considered mix of strategy, craft and execution — shaped around what your project actually needs." /></Reveal>
    <div className="service-grid">{services.map((service, index) => { const Icon = iconMap[service.icon]; return <Reveal key={service.number} delay={index * 0.07}><article className="service-card"><div className="service-card-top"><span className="service-icon"><Icon size={20} strokeWidth={1.7} /></span><span className="service-number">{service.number}</span></div><h3>{service.title}</h3><p>{service.text}</p><a href="#contact" className="service-arrow" aria-label={`Ask about ${service.title}`}><ArrowUpRight size={18} /></a></article></Reveal>; })}</div>
  </div></section>;
}

function Skills() {
  return <section className="skills-section section-pad" id="skills"><div className="section-shell skills-layout"><Reveal className="skills-intro"><SectionHeading eyebrow="The toolkit" title={<>Ideas first.<br /><span>Craft always.</span></>} description="A flexible creative toolkit for taking a project from early concept to a polished final delivery." /><p className="skill-footnote"><span className="availability-dot" /> Learning, experimenting, getting better — always.</p></Reveal><div className="skill-panels">{skillGroups.map((group, gi) => <Reveal key={group.title} delay={gi * 0.12}><div className="skill-panel"><div className="skill-panel-heading"><h3>{group.title}</h3><span>01 / 02</span></div>{group.skills.map((skill) => <div className="skill-row" key={skill.name}><div className="skill-label"><span>{skill.name}</span><span>{skill.value}%</span></div><div className="skill-track"><motion.span initial={{ width: 0 }} whileInView={{ width: `${skill.value}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }} /></div></div>)}</div></Reveal>)}<Reveal delay={0.15}><div className="tool-panel"><div className="skill-panel-heading"><h3>Tools I reach for</h3><Palette size={17} /></div><div className="tool-list">{tools.map((tool) => <span key={tool}>{tool}</span>)}</div></div></Reveal></div></div></section>;
}

function Experience() {
  return <section className="experience-section section-pad" id="experience"><div className="section-shell experience-grid"><Reveal><SectionHeading eyebrow="The journey so far" title={<>Growing through<br /><span>good work.</span></>} description="A few milestones that have shaped my creative practice." /></Reveal><div className="timeline">
    <Reveal><article className="timeline-item"><span className="timeline-dot" /><div className="timeline-date">2025 — NOW <span>FREELANCE</span></div><div><h3>Graphic Designer <small>· Fiverr</small></h3><p>Partnering with clients to create thoughtful visual design — from logo concepts and social content to print and campaign assets.</p><div className="timeline-tags"><span>Client collaboration</span><span>Visual identity</span><span>Remote</span></div></div></article></Reveal>
    <Reveal delay={0.1}><article className="timeline-item"><span className="timeline-dot" /><div className="timeline-date">2022 — 2026 <span>EDUCATION</span></div><div><h3>BS in Arabic Studies <small>· University of Sargodha</small></h3><p>Building a broader perspective through language, culture and communication — a foundation that informs how I approach stories and design.</p><div className="timeline-tags"><span>Communication</span><span>Culture</span></div></div></article></Reveal>
  </div></div></section>;
}

function Counter({ value, label, suffix = '+' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const spring = useSpring(count, { duration: 1700, bounce: 0 });
  const [display, setDisplay] = useState('0');
  useEffect(() => { if (isInView) count.set(value); }, [isInView, count, value]);
  useEffect(() => spring.on('change', (latest) => setDisplay(Math.round(latest).toString())), [spring]);
  return <div className="stat-item" ref={ref}><strong>{display}{suffix}</strong><span>{label}</span></div>;
}

function Stats() {
  return <section className="stats-band"><div className="section-shell stats-grid"><Counter value={6} label="Selected projects" /><Counter value={2} label="Years creating" /><Counter value={3} label="Languages" /><Counter value={2} label="Certificates" /></div></section>;
}

function Work() {
  const [filter, setFilter] = useState('All work');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const shown = projects.filter((project) => (filter === 'All work' || project.category === filter) && `${project.title} ${project.category} ${project.description}`.toLowerCase().includes(query.toLowerCase()));
  useEffect(() => { if (!selected) return undefined; const handleKey = (event) => { if (event.key === 'Escape') setSelected(null); }; window.addEventListener('keydown', handleKey); document.body.style.overflow = 'hidden'; return () => { window.removeEventListener('keydown', handleKey); document.body.style.overflow = ''; }; }, [selected]);
  return <section className="work-section section-pad" id="work"><div className="section-shell"><Reveal className="work-heading-row"><SectionHeading eyebrow="Selected work · 2024—26" title={<>Made with meaning<span className="hero-period">.</span></>} description="A selection of visual explorations and client work across different disciplines." /><a className="text-link work-all-link" href="https://www.behance.net/muhammabilalr4" target="_blank" rel="noreferrer">More on Behance <ArrowUpRight size={16} /></a></Reveal>
    <div className="work-controls"><div className="filter-list" role="group" aria-label="Filter projects">{filters.map((item) => <button key={item} type="button" className={filter === item ? 'filter-chip selected' : 'filter-chip'} onClick={() => setFilter(item)}>{item}</button>)}</div><label className="project-search"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search work" aria-label="Search projects" />{query && <button type="button" onClick={() => setQuery('')} aria-label="Clear search"><X size={14} /></button>}</label></div>
    {shown.length ? <div className="project-grid">{shown.map((project, index) => <Reveal key={project.id} delay={(index % 3) * 0.07}><button className={`project-card project-${project.color}`} type="button" onClick={() => setSelected(project)} aria-label={`View project ${project.title}`}><div className="project-image"><img src={project.image} alt={`${project.title} project artwork`} loading="lazy" /><span className="project-open"><ArrowUpRight size={18} /></span></div><div className="project-info"><div><span className="project-category">{project.type}</span><h3>{project.title}</h3></div><span className="project-index">0{project.id}</span></div></button></Reveal>)}</div> : <div className="empty-state">No projects match that search. Try another keyword.</div>}
    <div className="work-note"><span>Have a project in mind?</span><a href="#contact">Let’s make it happen <ArrowUpRight size={15} /></a></div>
  </div>
  <AnimatePresence>{selected && <motion.div className="modal-backdrop" role="presentation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}><motion.div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12 }} transition={transition}><button className="modal-close icon-button" type="button" onClick={() => setSelected(null)} aria-label="Close project"><X /></button><img src={selected.image} alt={`${selected.title} creative project`} /><div className="modal-copy"><span className="project-category">{selected.type}</span><h2 id="modal-title">{selected.title}</h2><p>{selected.description}</p><div className="timeline-tags">{selected.tools.map((tool) => <span key={tool}>{tool}</span>)}</div><a className="button button-dark" href="#contact" onClick={() => setSelected(null)}>Discuss a similar project <ArrowUpRight size={16} /></a></div></motion.div></motion.div>}</AnimatePresence>
  </section>;
}

function Certificates() {
  return <section className="credentials-section section-pad" id="credentials"><div className="section-shell credentials-grid"><Reveal><SectionHeading eyebrow="Proof of practice" title={<>Learning and<br /><span>showing up.</span></>} description="Every project is a chance to learn. Here are a couple of milestones along the way." /></Reveal><div className="certificate-list">{certificates.map((certificate, index) => <Reveal key={certificate.title} delay={index * 0.1}><a className="certificate-card" href={certificate.file} target="_blank" rel="noreferrer"><div className="certificate-icon"><Layers3 size={19} /></div><div className="certificate-info"><span>{certificate.type} · {certificate.date}</span><h3>{certificate.title}</h3><p>{certificate.issuer}</p></div><span className="certificate-arrow"><ExternalLink size={17} /></span></a></Reveal>)}</div></div></section>;
}

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const review = testimonials[current];
  const move = (step) => setCurrent((current + step + testimonials.length) % testimonials.length);
  return <section className="testimonials-section section-pad" id="testimonials"><div className="section-shell testimonial-wrap"><Reveal><SectionHeading eyebrow="Kind words" title="Good people. Good work." /></Reveal><div className="testimonial-card"><Quote className="testimonial-quote-icon" size={30} /><AnimatePresence mode="wait"><motion.div key={current} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}><blockquote>“{review.quote}”</blockquote><div className="review-author"><span className="review-avatar">{review.initials}</span><div><strong>{review.name}</strong><span>{review.role}</span></div></div></motion.div></AnimatePresence><div className="review-controls"><span>0{current + 1} <i>/</i> 0{testimonials.length}</span><button type="button" onClick={() => move(-1)} aria-label="Previous testimonial"><ArrowLeft size={17} /></button><button type="button" onClick={() => move(1)} aria-label="Next testimonial"><ArrowRight size={17} /></button></div></div></div></section>;
}

function Gallery() {
  const [active, setActive] = useState(null);
  useEffect(() => { if (!active) return undefined; const close = (event) => event.key === 'Escape' && setActive(null); window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close); }, [active]);
  return <section className="gallery-section section-pad" id="gallery"><div className="section-shell"><Reveal className="gallery-head"><div><SectionHeading eyebrow="A few frames" title={<>The world, in details<span className="hero-period">.</span></>} /></div><p>Small moments, considered compositions and things worth looking at twice.</p></Reveal><div className="gallery-grid">{projects.slice(0, 4).map((project, index) => <Reveal key={project.id} delay={index * 0.06}><button className={`gallery-tile gallery-tile-${index + 1}`} onClick={() => setActive(project)} type="button" aria-label={`Open ${project.title} image`}><img src={project.image} alt={`${project.title} visual`} loading="lazy" /><span><Play size={16} fill="currentColor" /></span></button></Reveal>)}</div></div>
  <AnimatePresence>{active && <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label={`${active.title} gallery image`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)}><button className="lightbox-close icon-button" type="button" aria-label="Close image"><X /></button><motion.img src={active.image} alt={`${active.title} creative`} initial={{ scale: 0.96 }} animate={{ scale: 1 }} onClick={(event) => event.stopPropagation()} /></motion.div>}</AnimatePresence>
  </section>;
}

function Journal() {
  return <section className="journal-section section-pad" id="journal"><div className="section-shell"><Reveal className="journal-heading"><SectionHeading eyebrow="Notes from the process" title={<>A little creative<br /><span>thinking.</span></>} description="Ideas, process notes and observations from the other side of the screen." /><span className="journal-label">THE JOURNAL · 2026</span></Reveal><div className="article-grid">{articles.map((article, index) => <Reveal key={article.title} delay={index * 0.08}><article className={`article-card article-card-${index + 1}`}><div className="article-art"><span className="article-art-label">{article.category}</span><span className="article-art-symbol">{index === 0 ? 'Aa' : index === 1 ? '▶' : '◌'}</span><span className="article-read">{article.read}</span></div><div className="article-content"><span className="article-category">{article.category} <i>·</i> {article.read}</span><h3>{article.title}</h3><p>{article.text}</p><a href="#contact" className="text-link">Read the story <ArrowUpRight size={15} /></a></div></article></Reveal>)}</div></div></section>;
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return <section className="faq-section section-pad" id="faq"><div className="section-shell faq-layout"><Reveal><SectionHeading eyebrow="A few quick answers" title={<>Good to know<br /><span>before we start.</span></>} description="Still have a question? I’m only a message away." /><a className="text-link" href="#contact">Ask me directly <ArrowUpRight size={15} /></a></Reveal><div className="faq-list">{faqs.map((item, index) => <div className={`faq-item ${open === index ? 'faq-open' : ''}`} key={item.question}><button type="button" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}><span>0{index + 1}</span><strong>{item.question}</strong><ChevronDown size={18} /></button><AnimatePresence initial={false}>{open === index && <motion.div className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}><p>{item.answer}</p></motion.div>}</AnimatePresence></div>)}</div></div></section>;
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event) => { event.preventDefault(); const data = new FormData(event.currentTarget); const name = data.get('name'); const email = data.get('email'); const service = data.get('service') || 'Not specified'; const message = data.get('message'); const subject = encodeURIComponent(`Portfolio enquiry from ${name}`); const body = encodeURIComponent(`From: ${name} (${email})\nService: ${service}\n\n${message}`); window.location.href = `mailto:${person.email}?subject=${subject}&body=${body}`; setSubmitted(true); };
  return <section className="contact-section section-pad" id="contact"><div className="section-shell contact-grid"><Reveal className="contact-intro"><SectionHeading eyebrow="Have something in mind?" title={<>Let’s make<br /><span>it matter.</span></>} description="Tell me a little about what you’re working on. I’ll get back to you as soon as I can." /><a className="contact-email" href={`mailto:${person.email}`}>{person.email}<ArrowUpRight size={17} /></a><div className="contact-details"><div><MapPin size={16} /><span>{person.location}</span></div><div><Video size={16} /><span>Available worldwide · Remote friendly</span></div></div><Socials /></Reveal>
    <Reveal className="contact-form-wrap" delay={0.12}><form className="contact-form" onSubmit={handleSubmit}><div className="form-topline"><span>PROJECT INQUIRY</span><span><span className="availability-dot" /> RESPONSE WITHIN 48H</span></div><label>Your name<input name="name" placeholder="How should I call you?" required /></label><label>Email address<input name="email" type="email" placeholder="you@example.com" required /></label><label>What are you looking for?<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Brand & graphic design</option><option>Social media design</option><option>Photography</option><option>Video editing</option><option>UI/UX design</option><option>Something else</option></select></label><label>Tell me about your project<textarea name="message" rows="3" placeholder="A few details, a big idea, a question..." required /></label><button className="button button-primary form-submit" type="submit">{submitted ? 'Email draft opened' : 'Send an inquiry'} {submitted ? <Check size={17} /> : <Send size={16} />}</button><p className="form-note">Your email app will open to send this message. No information is stored on this site.</p></form></Reveal>
  </div></section>;
}

function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  return <footer className="site-footer"><div className="section-shell footer-main"><div className="footer-brand"><a className="wordmark" href="#home"><img src={person.brandLogo} alt="" /><span>bilal<span className="wordmark-dot">.</span></span></a><p>Visual design, photography<br />& stories in motion.</p><Socials compact /></div><div className="footer-nav"><span className="footer-label">EXPLORE</span><div>{navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</div></div><div className="footer-newsletter"><span className="footer-label">A LITTLE CREATIVE MAIL</span><p>Occasional notes, new work and things worth sharing.</p><form onSubmit={(event) => { event.preventDefault(); if (email) setSubscribed(true); }}><label htmlFor="newsletter-email" className="sr-only">Your email address</label><input id="newsletter-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Your email address" required /><button type="submit" aria-label="Subscribe to newsletter">{subscribed ? <Check size={17} /> : <ArrowRight size={17} />}</button></form><small>{subscribed ? 'Thanks — you’re on the list (demo).' : 'A frontend-only sign-up preview.'}</small></div></div><div className="section-shell footer-bottom"><span>© {new Date().getFullYear()} Bilal Raza. Made with care.</span><span>SARGODHA, PAKISTAN <span className="footer-spark">✳</span></span><a href="#home">Back to top ↑</a></div></footer>;
}

function Home({ dark, setDark }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => { const update = () => { const total = document.documentElement.scrollHeight - window.innerHeight; setProgress(total > 0 ? window.scrollY / total : 0); }; window.addEventListener('scroll', update, { passive: true }); update(); return () => window.removeEventListener('scroll', update); }, []);
  return <><Header dark={dark} setDark={setDark} progress={progress} /><main><Hero /><div className="marquee" aria-label="Design, capture, create, inspire"><div className="marquee-track">{Array.from({ length: 4 }, (_, index) => <span key={index}>DESIGN <i>✳</i> CAPTURE <i>✳</i> CREATE <i>✳</i> INSPIRE <i>✳</i></span>)}</div></div><About /><Services /><Skills /><Experience /><Stats /><Work /><Certificates /><Testimonials /><Gallery /><Journal /><FAQ /><Contact /></main><Footer /><a className="whatsapp-button" href="https://wa.me/923036182730" target="_blank" rel="noreferrer" aria-label="Chat with Bilal on WhatsApp"><MessageIcon /></a><a className="back-to-top" href="#home" aria-label="Back to top"><ArrowDown className="back-top-arrow" size={17} /></a></>;
}

function MessageIcon() { return <MessageCircle size={22} strokeWidth={2.4} />; }

function NotFound() {
  const navigate = useNavigate();
  return <main className="not-found"><div className="not-found-mark">404</div><span className="eyebrow"><span /> WRONG TURN, RIGHT PLACE</span><h1>This page missed<br />the <em>creative brief.</em></h1><p>Let’s get you back to something worth looking at.</p><button className="button button-primary" onClick={() => navigate('/')}>Back to the portfolio <ArrowLeft size={16} /></button><a href="mailto:bilalofficial1527@gmail.com">Or get in touch <Mail size={15} /></a></main>;
}

export default function App() {
  const [dark, setDark] = useState(() => window.localStorage.getItem('bilal-theme') === 'dark');
  useEffect(() => { document.documentElement.dataset.theme = dark ? 'dark' : 'light'; window.localStorage.setItem('bilal-theme', dark ? 'dark' : 'light'); }, [dark]);
  return <Routes><Route path="/" element={<Home dark={dark} setDark={setDark} />} /><Route path="*" element={<NotFound />} /></Routes>;
}

import profile from '../../jpgs/profile.jpeg';
import brandLogo from '../../jpgs/logo.png';
import projectOne from '../../jpgs/p1.jpeg';
import projectTwo from '../../jpgs/p2.jpeg';
import projectThree from '../../jpgs/p3.jpeg';
import projectFour from '../../jpgs/p4.jpeg';
import projectFive from '../../jpgs/p5.jpeg';
import projectSix from '../../jpgs/p6.jpeg';
import graphicCertificate from '../../Graphic Certificate.pdf';
import participationCertificate from '../../Certificate of Participation.pdf';

export const person = {
  name: 'Bilal Raza',
  title: 'Creative Visual Designer',
  subtitle: 'Photographer · Videographer · Editor',
  tagline: 'Design. Capture. Create. Inspire.',
  email: 'bilalofficial1527@gmail.com',
  phone: '+92 303 6182730',
  location: 'Sargodha, Punjab, Pakistan',
  profile,
  brandLogo,
  resume: 'https://drive.google.com/file/d/1lifgNeZwurojKlyyL4743e7zaide6bIN/view?usp=sharing',
};

export const socialLinks = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/muhammad-bilal-raza-413b1334a/' },
  { label: 'Behance', url: 'https://www.behance.net/muhammabilalr4' },
  { label: 'Dribbble', url: 'https://dribbble.com/bilalofficial1527' },
  { label: 'Instagram', url: 'https://www.instagram.com/__bilal__rajpoot__/' },
  { label: 'Fiverr', url: 'https://www.fiverr.com/u_5b259717eac2' },
];

export const projects = [
  { id: 1, title: 'Bawawala Residence', category: 'Brand & Social', type: 'Social media campaign', image: projectOne, description: 'A bold property campaign designed to make a residential project feel clear, premium and easy to explore.', tools: ['Photoshop', 'Visual design'], color: 'peach' },
  { id: 2, title: 'Brand Identity Study', category: 'Branding', type: 'Identity design', image: projectTwo, description: 'A considered visual system bringing clarity, personality and consistency to a growing brand.', tools: ['Illustrator', 'Brand strategy'], color: 'lavender' },
  { id: 3, title: 'Social Stories', category: 'Social', type: 'Social content', image: projectThree, description: 'A scroll-stopping social content direction balancing strong typography and expressive imagery.', tools: ['Photoshop', 'Canva Pro'], color: 'rose' },
  { id: 4, title: 'Campaign Visuals', category: 'Print', type: 'Campaign design', image: projectFour, description: 'A cohesive promotional design suite built to work across print and digital placements.', tools: ['Illustrator', 'Photoshop'], color: 'gold' },
  { id: 5, title: 'Editorial Frames', category: 'Photography', type: 'Photo direction', image: projectFive, description: 'A visual storytelling study focused on mood, atmosphere and memorable composition.', tools: ['Photography', 'Lightroom'], color: 'blue' },
  { id: 6, title: 'Motion Cut', category: 'Video', type: 'Video editing', image: projectSix, description: 'A dynamic editing concept shaped around rhythm, clean transitions and a strong opening hook.', tools: ['Premiere Pro', 'After Effects'], color: 'green' },
];

export const services = [
  { number: '01', icon: 'PenTool', title: 'Logo & Brand Design', text: 'Distinctive marks and flexible identity systems that make a brand instantly recognizable.' },
  { number: '02', icon: 'PanelsTopLeft', title: 'Social Media Design', text: 'On-brand content systems, campaign posts and stories built to earn attention.' },
  { number: '03', icon: 'Images', title: 'Flyers & Brochures', text: 'Print-ready communication that turns complex information into clear visual stories.' },
  { number: '04', icon: 'Blocks', title: 'UI/UX Design', text: 'Thoughtful digital experiences with intuitive flows, polished interfaces and purpose.' },
  { number: '05', icon: 'Clapperboard', title: 'Video Editing', text: 'Engaging edits, color and motion that give every story a confident final cut.' },
];

export const skillGroups = [
  { title: 'Design & UI', skills: [{ name: 'Graphic design', value: 90 }, { name: 'Brand identity', value: 85 }, { name: 'UI / UX design', value: 78 }] },
  { title: 'Photo & Motion', skills: [{ name: 'Photography', value: 82 }, { name: 'Video editing', value: 86 }, { name: 'Photo editing', value: 84 }] },
];

export const tools = ['Photoshop', 'Illustrator', 'Canva Pro', 'Figma', 'Premiere Pro', 'DaVinci Resolve', 'After Effects', 'VN', 'CapCut', 'Filmora', 'Lightroom'];

export const testimonials = [
  { quote: 'Bilal understood the brief quickly and delivered visuals that felt polished, thoughtful and right for the brand.', name: 'Client feedback', role: 'Design collaboration', initials: 'CF' },
  { quote: 'The communication was clear throughout, and the final creative work gave our campaign a much stronger presence.', name: 'Project partner', role: 'Creative project', initials: 'PP' },
  { quote: 'A reliable creative with a good eye for detail. The design felt considered from the first draft to the final files.', name: 'Fiverr client', role: 'Brand design', initials: 'FC' },
];

export const faqs = [
  { question: 'What kind of projects do you take on?', answer: 'I work on brand identity, social media graphics, print collateral, UI/UX concepts, photography and video editing for people and businesses.' },
  { question: 'How does a project usually begin?', answer: 'We start with a short conversation about your goals, audience, references and timeline. I then share a clear creative direction before moving into production.' },
  { question: 'Do you work with clients outside Pakistan?', answer: 'Yes. I collaborate remotely and keep communication, feedback and delivery organized across time zones.' },
  { question: 'Can I request a custom package?', answer: 'Absolutely. Scope and deliverables can be tailored to your project. Send a short brief and I will suggest a practical way forward.' },
];

export const articles = [
  { category: 'Design notes', read: '4 min read', title: 'A visual identity is more than a logo', text: 'Why the strongest brands build a recognizable visual language around their mark.' },
  { category: 'Behind the edit', read: '5 min read', title: 'Finding the rhythm in a good video edit', text: 'A few practical thoughts on pacing, sound and shaping a story in the timeline.' },
  { category: 'Photography', read: '3 min read', title: 'Working with light, not against it', text: 'Simple ways to notice and use natural light for more expressive photographs.' },
];

export const certificates = [
  { title: 'Graphic Design Certificate', issuer: 'Professional development', date: 'July 2024', file: graphicCertificate, type: 'Certificate' },
  { title: 'Certificate of Participation', issuer: 'Creative participation', date: 'November 2024', file: participationCertificate, type: 'Achievement' },
];

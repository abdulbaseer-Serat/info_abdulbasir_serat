import {
  Cloud,
  Shield,
  Network,
  Terminal,
  Server,
  Monitor,
  Lock,
  GitBranch,
  Container,
  Code,
  Mail,
  Linkedin,
  Github,
  CheckCircle2,
  Circle,
  Clock,
  Target,
  Cpu,
  Activity,
  Building2,
  Zap,
  Eye,
} from 'lucide-react';

export const personalInfo = {
  name: 'Abdul Basir Serat',
  title: 'IT Support Specialist',
  tagline: 'Cisco Networking | Microsoft 365 | Azure Cloud | Cybersecurity',
  email: 'info.abdulbasir@gmail.com',
  github: 'https://github.com/YOUR_GITHUB_USERNAME',
  linkedin: 'https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME/',
  location: 'Afghanistan',
  experience: '8+ Years',
  photo: 'https://images.pexels.com/photos/26834972/pexels-photo-26834972.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

export const typedRoles = [
  'Supporting people through reliable technology',
  'Building secure Microsoft cloud environments',
  'Automating the everyday with PowerShell',
  'Learning, improving, and solving with purpose',
];

export const aboutText = `IT Support Specialist with 8+ years of hands-on experience across technical support, systems administration, network operations, and technology coordination. I help teams work securely and efficiently by troubleshooting complex issues, managing Microsoft environments, improving operational processes, and translating technical problems into practical solutions.`;

export const aboutDirection = `My professional direction is focused on Microsoft 365 administration, Azure cloud operations, cybersecurity, Windows Server, networking, and PowerShell automation. I am especially interested in building dependable infrastructure, strengthening security awareness, and automating repetitive work so people can focus on higher-value outcomes.`;

export const stats = [
  { icon: Clock, label: 'Years Experience', value: '8+' },
  { icon: Shield, label: 'Certifications', value: '4' },
  { icon: Server, label: 'Systems Managed', value: '500+' },
  { icon: Activity, label: 'Tickets Resolved', value: '5K+' },
];

export const skills = [
  { name: 'Microsoft 365', icon: Cloud, level: 90, color: '#0078d4' },
  { name: 'Azure Cloud', icon: Cloud, level: 80, color: '#0089d6' },
  { name: 'PowerShell', icon: Terminal, level: 85, color: '#5391fe' },
  { name: 'Cybersecurity', icon: Lock, level: 82, color: '#00a4ef' },
  { name: 'Networking', icon: Network, level: 92, color: '#1ba0d7' },
  { name: 'Windows Server', icon: Server, level: 88, color: '#0078d4' },
  { name: 'Docker', icon: Container, level: 70, color: '#2496ed' },
  { name: 'Git & GitHub', icon: GitBranch, level: 75, color: '#6e5494' },
];

export const focusAreas = [
  {
    icon: Cloud,
    title: 'Azure Administration',
    description: 'Cloud identity, resource management, governance, and reliable operations.',
  },
  {
    icon: Monitor,
    title: 'Microsoft 365',
    description: 'User support, tenant administration, collaboration tools, and secure productivity.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity Operations',
    description: 'Security fundamentals, incident awareness, access controls, and defensive practices.',
  },
  {
    icon: Terminal,
    title: 'Automation',
    description: 'PowerShell workflows that reduce repetitive tasks and improve consistency.',
  },
  {
    icon: Server,
    title: 'Infrastructure',
    description: 'Windows Server, networking, monitoring, troubleshooting, and service continuity.',
  },
];

export const certifications = {
  completed: [
    { name: 'Cisco Certified Network Associate', short: 'CCNA' },
    { name: 'CompTIA Security+', short: 'Security+' },
    { name: 'CCNP Enterprise Core', short: 'CCNP ENCOR' },
    { name: 'Implementing Cisco Enterprise Advanced Routing and Services', short: 'CCNP ENARSI' },
  ],
  inProgress: [
    { name: 'Microsoft Azure Fundamentals', short: 'AZ-900' },
    { name: 'Microsoft 365 Fundamentals', short: 'MS-900' },
    { name: 'Microsoft Security, Compliance, and Identity Fundamentals', short: 'SC-900' },
  ],
  future: [
    { name: 'Microsoft Azure Administrator', short: 'AZ-104' },
    { name: 'CompTIA Security+ (Renewal)', short: 'Security+' },
  ],
};

export const projects = [
  {
    title: 'Microsoft 365 Automation Scripts',
    description: 'A practical collection of PowerShell scripts for user administration, reporting, service checks, and repeatable Microsoft 365 support tasks.',
    tech: ['PowerShell', 'Microsoft Graph', 'Microsoft 365'],
    icon: Terminal,
    link: 'https://github.com/YOUR_GITHUB_USERNAME/microsoft-365-automation-scripts',
    accent: 'azure',
  },
  {
    title: 'Azure Administration Lab',
    description: 'A documented learning environment for exploring Azure identity, resource management, governance, monitoring, and secure cloud operations.',
    tech: ['Azure', 'Entra ID', 'Cloud Administration'],
    icon: Cloud,
    link: 'https://github.com/YOUR_GITHUB_USERNAME/azure-administration-lab',
    accent: 'cyan',
  },
  {
    title: 'Network Monitoring Toolkit',
    description: 'A lightweight toolkit for checking availability, collecting network health information, and turning troubleshooting into measurable insight.',
    tech: ['Networking', 'Monitoring', 'Automation'],
    icon: Activity,
    link: 'https://github.com/YOUR_GITHUB_USERNAME/network-monitoring-toolkit',
    accent: 'azure',
  },
  {
    title: 'Cybersecurity Learning Portfolio',
    description: 'Structured notes, defensive exercises, security checklists, and practical labs documenting continuous growth in cybersecurity operations.',
    tech: ['Security', 'Blue Team', 'Documentation'],
    icon: Shield,
    link: 'https://github.com/YOUR_GITHUB_USERNAME/cybersecurity-learning-portfolio',
    accent: 'cyan',
  },
];

export const goals = [
  'Grow into a capable Azure and Microsoft 365 administrator.',
  'Build stronger hands-on experience in cybersecurity operations and defensive security.',
  'Create reliable PowerShell automation that improves support quality and team productivity.',
  'Continue developing expertise in Windows Server, networking, identity, and cloud infrastructure.',
  'Share practical learning through useful documentation, labs, and open-source projects.',
  'Contribute to organizations that value secure, accessible, and dependable technology.',
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export {
  Cloud,
  Shield,
  Network,
  Terminal,
  Server,
  Monitor,
  Lock,
  GitBranch,
  Container,
  Code,
  Mail,
  Linkedin,
  Github,
  CheckCircle2,
  Circle,
  Clock,
  Target,
  Cpu,
  Activity,
  Building2,
  Zap,
  Eye,
};

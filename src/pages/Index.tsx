import { ProjectCard } from "@/components/ProjectCard";
import { RevenueStats } from "@/components/RevenueStats";
import { Linkedin, Twitter, Github, Send, MapPin } from "lucide-react";

const projects = [
  // {
  //   title: "Project Alpha",
  //   description: "A revolutionary SaaS platform for business analytics",
  //   image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  //   url: "#",
  //   revenue: "$50,000/mo",
  //   industry: "Analytics",
  //   techStack: ["React", "Node.js", "AWS"],
  //   type: "web" as const,
  //   acquired: true,
  //   exited: true,
  //   github: "https://github.com/yourusername/project-alpha"
  // },
  // {
  //   title: "Digital Tools Hub",
  //   description: "Collection of productivity tools for remote teams",
  //   image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  //   url: "#",
  //   revenue: "$35,000/mo",
  //   industry: "Productivity",
  //   techStack: ["Vue.js", "Firebase", "Flutter"],
  //   type: "mobile" as const,
  //   failed: true,
  //   github: "https://github.com/yourusername/digital-tools-hub"
  // },
  {
    title: "PortfolioGPT",
    description: "Generate smart portfolios in seconds with AI",
    image: "/portfoliogpt.png",
    url: "https://www.portfoliogpt.xyz/",
    revenue: "$650/mo",
    industry: "AI",
    techStack: ["Python", "Next.js", "MongoDB", "Vercel", "Heroku", "OpenAI API"],
    type: "web" as const,
    acquired: true,
    
  },
  {
    title: "TipsterGPT",
    description: "Bet predictions in seconds, not hours",
    image: "/tipstergpt.png",
    url: "https://www.tipstergpt.xyz/",
    revenue: "$1,300/mo",
    industry: "AI",
    techStack: ["Python", "Next.js", "MongoDB", "Vercel", "OpenAI API", "RapidAPI"],
    type: "web" as const,
    acquired: true
  },
  {
    title: "Swollet",
    description: "Financial Education. Gamified",
    image: "/swollet.jpeg",
    url: "https://swollet.xyz/",
    revenue: "$500/mo",
    industry: "Education",
    techStack: ["Flutter", "Firebase", "OpenAI API", "Polygon Blockchain"],
    type: "mobile" as const,
    acquired: false
  },
  {
    title: "Startups Showcase",
    description: "Showcase and grow your startups",
    image: "/laliotis.png",
    url: "https://laliotis.me/",
    revenue: "$0/mo",
    industry: "Productivity",
    techStack: ["Vite", "Typescript", "React", "shadcn-ui", "Tailwind CSS"],
    type: "web" as const,
    acquired: false,
    github: "https://github.com/llaliotis/interactive-revenue-gallery"
  },
  {
    title: "Candidate Matchmaker",
    description: "Upload a resume and job description to see how well they match",
    image: "/candidate.png",
    url: "https://candidate-matchmaker.lovable.app/",
    revenue: "$0/mo",
    industry: "HR",
    techStack: ["Vite", "Typescript", "React", "shadcn-ui", "Tailwind CSS"],
    type: "web" as const,
    acquired: false,
    github: "https://github.com/llaliotis/candidate-matchmaker"
  },
];

const socialLinks = [
  { icon: <Github className="h-6 w-6" />, url: "https://github.com/llaliotis", label: "Github" },
  { icon: <Linkedin className="h-6 w-6" />, url: "https://www.linkedin.com/in/eleftherios-laliotis/", label: "LinkedIn" },
  { icon: <Twitter className="h-6 w-6" />, url: "https://x.com/greekdubliner", label: "X (Twitter)" },
  { icon: <Send className="h-6 w-6" />, url: "https://t.me/LaliotisJR", label: "Telegram" },
];

const favoriteTools = [
  {
    name: "Vercel",
    url: "https://vercel.com",
    icon: "/vercel.svg",
  },
  {
    name: "Supabase",
    url: "https://supabase.com",
    icon: "/supabase.svg",
  },
  {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com",
    icon: "/tailwind.svg",
  },
  {
    name: "OpenAI",
    url: "https://openai.com",
    icon: "/openai.svg",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] via-[#221F26] to-[#1A1F2C]">
      <div className="container py-12">
        <div className="mb-16 text-center">
          <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-[#0EA5E9]/20 p-1">
            <img
              src="/prof.jpg"
              alt="Profile"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <h1 className="animate-fade-up gradient-text text-4xl font-bold tracking-tight sm:text-6xl">
            Lefteris Laliotis
          </h1>
          <div className="animate-fade-up mt-3 flex items-center justify-center gap-1 text-gray-400">
            <MapPin className="h-4 w-4 text-[#0EA5E9]" />
            <span>Dublin, Ireland</span>
          </div>
          <div className="animate-fade-up mt-6 flex justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0EA5E9] transition-colors hover:text-[#22C55E]"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="animate-fade-up mt-6 text-lg text-gray-400 animation-delay-100">
            Building startups for my family and friends
          </p>
        </div>

        <div className="mb-16 animate-fade-up animation-delay-200">
          <h2 className="mb-8 gradient-text text-2xl font-semibold tracking-tight">
            Performance Overview
          </h2>
          <RevenueStats />
        </div>

        <div className="mb-16 animate-fade-up animation-delay-250">
          <h2 className="mb-8 gradient-text text-2xl font-semibold tracking-tight">
            Favorite Tools
          </h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {favoriteTools.map((tool) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-6 h-6 object-contain filter grayscale group-hover:filter-none transition-all"
                />
                <span className="text-gray-400 group-hover:text-gray-200 transition-colors">
                  {tool.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="animate-fade-up animation-delay-300">
          <h2 className="mb-8 gradient-text text-2xl font-semibold tracking-tight">
            Showcase
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

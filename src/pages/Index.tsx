import { ProjectCard } from "@/components/ProjectCard";
import { RevenueStats } from "@/components/RevenueStats";
import { Linkedin, Twitter, Send, MapPin } from "lucide-react";

const projects = [
  {
    title: "Project Alpha",
    description: "A revolutionary SaaS platform for business analytics",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    url: "#",
    revenue: "$50,000/mo",
    industry: "Analytics",
    techStack: ["React", "Node.js", "AWS"],
    type: "web" as const,
    acquired: true
  },
  {
    title: "Digital Tools Hub",
    description: "Collection of productivity tools for remote teams",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    url: "#",
    revenue: "$35,000/mo",
    industry: "Productivity",
    techStack: ["Vue.js", "Firebase", "Flutter"],
    type: "mobile" as const,
    exited: true
  },
  {
    title: "Tech Solutions",
    description: "Enterprise software solutions for growing businesses",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    url: "#",
    revenue: "$43,400/mo",
    industry: "Enterprise",
    techStack: ["Angular", "Java", "Azure"],
    type: "web" as const,
    acquired: false
  },
];

const socialLinks = [
  { icon: <Linkedin className="h-6 w-6" />, url: "#", label: "LinkedIn" },
  { icon: <Twitter className="h-6 w-6" />, url: "#", label: "X (Twitter)" },
  { icon: <Send className="h-6 w-6" />, url: "#", label: "Telegram" },
  
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] via-[#221F26] to-[#1A1F2C]">
      <div className="container py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-[#0EA5E9]/20 p-1">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              alt="Profile"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <h1 className="animate-fade-up gradient-text text-4xl font-bold tracking-tight sm:text-6xl">
            My Startups
          </h1>
          <div className="animate-fade-up mt-3 flex items-center justify-center gap-1 text-gray-400">
            <MapPin className="h-4 w-4 text-[#0EA5E9]" />
            <span>San Francisco, CA</span>
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
            Showcasing innovative online businesses and digital tools
          </p>
        </div>

        {/* Revenue Stats */}
        <div className="mb-16 animate-fade-up animation-delay-200">
          <h2 className="mb-8 gradient-text text-2xl font-semibold tracking-tight">
            Performance Overview
          </h2>
          <RevenueStats />
        </div>

        {/* Projects Grid */}
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

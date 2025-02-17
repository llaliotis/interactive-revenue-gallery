
import { ProjectCard } from "@/components/ProjectCard";
import { RevenueStats } from "@/components/RevenueStats";
import { Linkedin, Twitter, Github, Send, MapPin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
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

const paidTools = [
  {
    name: "Cursor",
    url: "https://www.cursor.com/",
    icon: "https://www.cursor.com/apple-touch-icon.png",
    price: "$20/mo"
  },
  {
    name: "Lovable",
    url: "https://lovable.dev/",
    icon: "https://sacra.cdn.prismic.io/sacra/Z4V6ApbqstJ99Zom_lovablelogo.svg",
    price: "$50/mo"
  },
  {
    name: "Claude",
    url: "https://claude.ai/",
    icon: "https://zorgle.co.uk/wp-content/uploads/2024/11/Claude-ai-logo.png",
    price: "$20/mo"
  },
  {
    name: "ChatGPT",
    url: "https://openai.com",
    icon: "https://metricool.com/wp-content/uploads/ChatGPT_logo.svg.png",
    price: "$20/mo"
  },
];

const freeTools = [
  {
    name: "Vercel",
    url: "https://vercel.com",
    icon: "https://pipedream.com/s.v0/app_XaLh2x/logo/orig",
  },
  {
    name: "code2prompt",
    url: "https://github.com/mufeedvh/code2prompt",
    icon: "https://github.com/mufeedvh/code2prompt/raw/main/.assets/code2prompt-screenshot.png",
  },
  {
    name: "Shipfast",
    url: "https://shipfa.st/?via=sleepwow",
    icon: "https://shipfa.st/logo_transparent.png",
  },
];

const ToolGrid = ({ tools, showPrice }: { tools: any[] }) => (
  <div className="flex flex-wrap gap-6 justify-center">
    {tools.map((tool) => (
      <a
        key={tool.name}
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
      >
        <img
          src={tool.icon}
          alt={tool.name}
          className="w-6 h-6 object-contain filter grayscale group-hover:filter-none transition-all duration-300"
        />
        <div className="flex flex-col">
          <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
            {tool.name}
          </span>
          {showPrice && 'price' in tool && (
            <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
              {tool.price}
            </span>
          )}
        </div>
      </a>
    ))}
  </div>
);

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
          <h2 className="mb-8 text-center gradient-text text-3xl font-bold tracking-tight">
            Performance Overview
          </h2>
          <RevenueStats />
        </div>

        <div className="mb-16 animate-fade-up animation-delay-250">
          <h2 className="mb-8 text-center gradient-text text-3xl font-bold tracking-tight">
            Favorite Tools
          </h2>
          <Tabs defaultValue="paid" className="w-full">
            <TabsList className="grid w-[400px] max-w-[90vw] grid-cols-2 mx-auto mb-8 bg-[#1A1F2C]/80 border border-[#8B5CF6]/10 backdrop-blur-sm p-1 rounded-xl">
              <TabsTrigger 
                value="paid" 
                className="text-lg px-8 py-2 rounded-lg data-[state=active]:bg-[#8B5CF6]/20 data-[state=active]:text-white transition-all duration-300"
              >
                Paid
              </TabsTrigger>
              <TabsTrigger 
                value="free" 
                className="text-lg px-8 py-2 rounded-lg data-[state=active]:bg-[#8B5CF6]/20 data-[state=active]:text-white transition-all duration-300"
              >
                Free
              </TabsTrigger>
            </TabsList>
            <TabsContent value="paid" className="animate-fade-in mt-0">
              <ToolGrid tools={paidTools} showPrice={true} />
            </TabsContent>
            <TabsContent value="free" className="animate-fade-in mt-0">
              <ToolGrid tools={freeTools} />
            </TabsContent>
          </Tabs>
        </div>

        <div className="animate-fade-up animation-delay-300">
          <h2 className="mb-8 text-center gradient-text text-3xl font-bold tracking-tight">
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

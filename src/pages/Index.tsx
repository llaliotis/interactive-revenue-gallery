
import { ProjectCard } from "@/components/ProjectCard";
import { RevenueStats } from "@/components/RevenueStats";

const projects = [
  {
    title: "Project Alpha",
    description: "A revolutionary SaaS platform for business analytics",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    url: "#",
    revenue: "$50,000/mo",
  },
  {
    title: "Digital Tools Hub",
    description: "Collection of productivity tools for remote teams",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    url: "#",
    revenue: "$35,000/mo",
  },
  {
    title: "Tech Solutions",
    description: "Enterprise software solutions for growing businesses",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    url: "#",
    revenue: "$43,400/mo",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="animate-fade-up text-4xl font-bold tracking-tight sm:text-6xl">
            My Digital Portfolio
          </h1>
          <p className="animate-fade-up mt-6 text-lg text-muted-foreground animation-delay-100">
            Showcasing innovative online businesses and digital tools
          </p>
        </div>

        {/* Revenue Stats */}
        <div className="mb-16 animate-fade-up animation-delay-200">
          <h2 className="mb-8 text-2xl font-semibold tracking-tight">
            Performance Overview
          </h2>
          <RevenueStats />
        </div>

        {/* Projects Grid */}
        <div className="animate-fade-up animation-delay-300">
          <h2 className="mb-8 text-2xl font-semibold tracking-tight">
            Featured Projects
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

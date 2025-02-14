
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { ArrowUpRight, Globe, Database, Smartphone, CheckCircle2 } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
  revenue?: string;
  industry: string;
  techStack: string[];
  type: 'web' | 'mobile';
  acquired?: boolean;
}

export const ProjectCard = ({ 
  title, 
  description, 
  image, 
  url, 
  revenue,
  industry,
  techStack,
  type,
  acquired 
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="project-card group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.open(url, '_blank')}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{title}</h3>
          <ArrowUpRight 
            className={`h-5 w-5 transition-transform duration-300 ${
              isHovered ? 'translate-x-1 -translate-y-1' : ''
            }`}
          />
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {revenue && (
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
              Revenue: {revenue}
            </span>
          )}
          <span className="flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
            <Globe className="h-4 w-4" />
            {industry}
          </span>
          <span className="flex items-center gap-1 rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">
            {type === 'web' ? <Database className="h-4 w-4" /> : <Smartphone className="h-4 w-4" />}
            {type === 'web' ? 'Web App' : 'Mobile App'}
          </span>
          {acquired && (
            <span className="flex items-center gap-1 rounded-full bg-teal-100 px-3 py-1 text-sm font-medium text-teal-800">
              <CheckCircle2 className="h-4 w-4" />
              Acquired
            </span>
          )}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span key={tech} className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

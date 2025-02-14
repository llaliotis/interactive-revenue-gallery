
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
      className="project-card group cursor-pointer backdrop-blur-sm bg-white/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.open(url, '_blank')}
    >
      <div className="relative aspect-video overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-xl font-semibold text-transparent">{title}</h3>
          <ArrowUpRight 
            className={`h-5 w-5 text-[#8B5CF6] transition-transform duration-300 ${
              isHovered ? 'translate-x-1 -translate-y-1' : ''
            }`}
          />
        </div>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {revenue && (
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
              Revenue: {revenue}
            </span>
          )}
          <span className="rounded-full bg-[#E5DEFF] px-3 py-1 text-sm font-medium text-[#8B5CF6]">
            <Globe className="mr-1 inline-block h-4 w-4" />
            {industry}
          </span>
          <span className="rounded-full bg-[#FDE1D3] px-3 py-1 text-sm font-medium text-[#F97316]">
            {type === 'web' ? <Database className="mr-1 inline-block h-4 w-4" /> : <Smartphone className="mr-1 inline-block h-4 w-4" />}
            {type === 'web' ? 'Web App' : 'Mobile App'}
          </span>
          {acquired && (
            <span className="rounded-full bg-[#F2FCE2] px-3 py-1 text-sm font-medium text-emerald-600">
              <CheckCircle2 className="mr-1 inline-block h-4 w-4" />
              Acquired
            </span>
          )}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span key={tech} className="rounded-full bg-[#FFDEE2] px-3 py-1 text-sm font-medium text-[#D946EF]">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

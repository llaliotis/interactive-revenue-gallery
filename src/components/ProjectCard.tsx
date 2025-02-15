
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { ArrowUpRight, Globe, Database, Smartphone, CheckCircle2, XCircle, Github } from "lucide-react";

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
  failed?: boolean;
  exited?: boolean;
  github?: string;
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
  acquired,
  failed,
  exited,
  github
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent, link: string) => {
    e.stopPropagation();
    window.open(link, '_blank');
  };

  return (
    <Card 
      className="project-card group cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.open(url, '_blank')}
    >
      {acquired && (
        <div className="absolute right-4 top-4 z-10">
          <span className="inline-flex items-center rounded-full bg-emerald-500 px-3 py-1 text-sm font-medium text-white">
            <CheckCircle2 className="mr-1 h-3.5 w-3.5" />
            Acquired
          </span>
        </div>
      )}
      {failed && (
        <div className="absolute right-4 top-4 z-10">
          <span className="inline-flex items-center rounded-full bg-red-500 px-3 py-1 text-sm font-medium text-white">
            <XCircle className="mr-1 h-3.5 w-3.5" />
            Failed
          </span>
        </div>
      )}
      {exited && (
        <div className="absolute -left-2 top-6 z-10">
          <div className="relative">
            <div className="absolute -left-2 -top-2 h-2 w-2 bg-emerald-900" />
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 px-4 py-1 text-sm font-semibold text-white shadow-lg">
              Exited
            </div>
          </div>
        </div>
      )}
      <div className="relative aspect-video overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="gradient-text text-xl font-semibold">{title}</h3>
          <ArrowUpRight 
            className={`h-5 w-5 text-[#0EA5E9] transition-transform duration-300 ${
              isHovered ? 'translate-x-1 -translate-y-1' : ''
            }`}
          />
        </div>
        <p className="mt-2 text-sm text-gray-400">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {revenue && (
            <span className="rounded-full bg-emerald-950 px-3 py-1 text-sm font-medium text-emerald-400">
              Revenue: {revenue}
            </span>
          )}
          <span className="rounded-full bg-sky-950 px-3 py-1 text-sm font-medium text-sky-400">
            <Globe className="mr-1 inline-block h-4 w-4" />
            {industry}
          </span>
          <span className="rounded-full bg-orange-950 px-3 py-1 text-sm font-medium text-orange-400">
            {type === 'web' ? <Database className="mr-1 inline-block h-4 w-4" /> : <Smartphone className="mr-1 inline-block h-4 w-4" />}
            {type === 'web' ? 'Web App' : 'Mobile App'}
          </span>
        </div>
        <div className="mt-3">
          <div className="flex flex-wrap gap-2 mb-8">
            {techStack.map((tech) => (
              <span key={tech} className="rounded-full bg-purple-950 px-3 py-1 text-sm font-medium text-purple-400">
                {tech}
              </span>
            ))}
          </div>
          {github && (
            <div className="absolute bottom-4 right-4">
              <button 
                onClick={(e) => handleClick(e, github)}
                className="rounded-full bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
                aria-label="View GitHub Repository"
              >
                <Github className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};


import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { ExternalLink, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
  revenue?: string;
}

export const ProjectCard = ({ title, description, image, url, revenue }: ProjectCardProps) => {
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
        {revenue && (
          <div className="mt-4 flex items-center gap-2 text-sm font-medium">
            <span className="rounded-full bg-green-100 px-3 py-1 text-green-800">
              Revenue: {revenue}
            </span>
          </div>
        )}
      </div>
    </Card>
  );
};

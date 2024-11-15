import React from 'react';
import { Calendar, Users, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  deadline: string;
  members: number;
  progress: number;
  tags: string[];
}

export default function ProjectCard({
  title,
  description,
  deadline,
  members,
  progress,
  tags
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
          {progress}%
        </span>
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {deadline}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {members} members
          </span>
        </div>
        <button className="text-purple-500 hover:text-purple-600 flex items-center gap-1">
          View Details
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
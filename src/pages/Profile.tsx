import React from 'react';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProjectCard from '../components/projects/ProjectCard';
import ChatSidebar from '../components/chat/ChatSidebar';

export default function Profile() {
  const projects = [
    {
      title: 'School Environmental Initiative',
      description: 'Leading a project to reduce waste and implement recycling programs across campus.',
      deadline: 'May 2024',
      members: 8,
      progress: 75,
      tags: ['Environment', 'Leadership', 'Community']
    },
    {
      title: 'Mental Health Awareness Week',
      description: 'Organizing workshops and activities to promote mental health awareness among students.',
      deadline: 'March 2024',
      members: 12,
      progress: 40,
      tags: ['Wellbeing', 'Events', 'Education']
    },
    {
      title: 'Student Mentorship Program',
      description: 'Connecting senior students with juniors for academic and personal guidance.',
      deadline: 'Ongoing',
      members: 24,
      progress: 60,
      tags: ['Mentorship', 'Education', 'Support']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <ProfileHeader
              name="Emma Thompson"
              role="Head Girl"
              school="St. Mary's Academy"
              location="London, UK"
              email="emma.t@stmarys.edu"
              graduationYear="2024"
              avatarUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
            />
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Current Projects</h2>
                <button className="px-4 py-2 text-sm bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                  New Project
                </button>
              </div>
              
              <div className="grid gap-6">
                {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </div>
          </div>

          {/* Chat Sidebar */}
          <div className="lg:col-span-1">
            <ChatSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
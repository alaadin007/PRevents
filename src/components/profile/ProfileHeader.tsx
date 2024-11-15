import React from 'react';
import { MapPin, Mail, School, Calendar } from 'lucide-react';

interface ProfileHeaderProps {
  name: string;
  role: string;
  school: string;
  location: string;
  email: string;
  graduationYear: string;
  avatarUrl: string;
}

export default function ProfileHeader({
  name,
  role,
  school,
  location,
  email,
  graduationYear,
  avatarUrl
}: ProfileHeaderProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="relative">
          <img
            src={avatarUrl}
            alt={name}
            className="w-32 h-32 rounded-full object-cover border-4 border-purple-500"
          />
          <span className="absolute bottom-0 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></span>
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
            <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
              {role}
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <School className="w-4 h-4 text-purple-500" />
              <span>{school}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-purple-500" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-purple-500" />
              <span>{email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-purple-500" />
              <span>Class of {graduationYear}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
            Edit Profile
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
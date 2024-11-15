import React, { useState } from 'react';
import { School, User, Mail, Calendar, MapPin, Shield } from 'lucide-react';

interface FormData {
  role: 'head_boy' | 'head_girl';
  firstName: string;
  lastName: string;
  email: string;
  school: string;
  graduationYear: string;
  location: string;
}

export default function SignUpForm() {
  const [formData, setFormData] = useState<FormData>({
    role: 'head_boy',
    firstName: '',
    lastName: '',
    email: '',
    school: '',
    graduationYear: '',
    location: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Role Selection */}
      <div className="grid grid-cols-2 gap-4">
        {['head_boy', 'head_girl'].map((role) => (
          <label
            key={role}
            className={`
              relative flex items-center justify-center p-4 rounded-xl cursor-pointer
              ${formData.role === role 
                ? 'bg-purple-100 border-2 border-purple-500' 
                : 'bg-white border-2 border-gray-200'}
            `}
          >
            <input
              type="radio"
              name="role"
              value={role}
              checked={formData.role === role}
              onChange={handleChange}
              className="sr-only"
            />
            <div className="text-center">
              <Shield className={`w-8 h-8 mx-auto mb-2 ${formData.role === role ? 'text-purple-500' : 'text-gray-400'}`} />
              <span className={`font-medium ${formData.role === role ? 'text-purple-700' : 'text-gray-600'}`}>
                {role === 'head_boy' ? 'Head Boy' : 'Head Girl'}
              </span>
            </div>
          </label>
        ))}
      </div>

      {/* Personal Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <User className="w-4 h-4 mr-2 text-purple-500" />
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <User className="w-4 h-4 mr-2 text-purple-500" />
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          />
        </div>
      </div>

      {/* School Details */}
      <div>
        <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
          <School className="w-4 h-4 mr-2 text-purple-500" />
          School Name
        </label>
        <input
          type="text"
          name="school"
          value={formData.school}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <Calendar className="w-4 h-4 mr-2 text-purple-500" />
            Graduation Year
          </label>
          <input
            type="text"
            name="graduationYear"
            value={formData.graduationYear}
            onChange={handleChange}
            placeholder="e.g., 2024"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <MapPin className="w-4 h-4 mr-2 text-purple-500" />
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="City, Country"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          />
        </div>
      </div>

      <div>
        <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
          <Mail className="w-4 h-4 mr-2 text-purple-500" />
          School Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@school.edu"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-blue-600 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg"
      >
        Create Account
      </button>
    </form>
  );
}
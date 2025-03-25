import React from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Image, FileText, Settings, Users, Book, Target } from 'lucide-react';

const AdminDashboard = () => {
  const adminSections = [
    {
      title: 'Media Manager',
      description: 'Manage images and videos for vital points and terminology',
      icon: <Image className="w-6 h-6" />,
      path: '/admin/media',
      color: 'bg-blue-500'
    },
    {
      title: 'Content Manager',
      description: 'Edit and manage wiki content',
      icon: <FileText className="w-6 h-6" />,
      path: '/admin/content',
      color: 'bg-green-500'
    },
    {
      title: 'User Management',
      description: 'Manage user accounts and permissions',
      icon: <Users className="w-6 h-6" />,
      path: '/admin/users',
      color: 'bg-purple-500'
    },
    {
      title: 'Terminology',
      description: 'Manage karate terminology and translations',
      icon: <Book className="w-6 h-6" />,
      path: '/admin/terminology',
      color: 'bg-yellow-500'
    },
    {
      title: 'Vital Points',
      description: 'Manage vital points information and diagrams',
      icon: <Target className="w-6 h-6" />,
      path: '/admin/vital-points',
      color: 'bg-red-500'
    },
    {
      title: 'Settings',
      description: 'Configure system settings and preferences',
      icon: <Settings className="w-6 h-6" />,
      path: '/admin/settings',
      color: 'bg-gray-500'
    }
  ];

  return (
    <AdminLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your wiki content and settings
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {adminSections.map((section) => (
            <Link
              key={section.path}
              to={section.path}
              className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${section.color} text-white`}>
                  {section.icon}
                </div>
                <h3 className="ml-4 text-lg font-medium text-gray-900">
                  {section.title}
                </h3>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                {section.description}
              </p>
            </Link>
          ))}
        </div>
      </motion.div>
    </AdminLayout>
  );
};

export default AdminDashboard; 
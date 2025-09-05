import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaBook,
  FaEnvelope,
  FaUsers,
  FaChartBar,
  FaCog,
  FaHome,
} from 'react-icons/fa';

const Dashboard = () => {
  const cards = [
    { title: 'Bookings', icon: <FaBook />, color: 'purple', path: '/admin/bookings' },
    { title: 'Contacts', icon: <FaEnvelope />, color: 'blue', path: '/admin/contacts' },
    // { title: 'Users', icon: <FaUsers />, color: 'green', path: '/api/users' },
    // { title: 'Reports', icon: <FaChartBar />, color: 'red', path: '/api/reports' },
    // { title: 'Settings', icon: <FaCog />, color: 'gray', path: '/api/settings' },
    { title: 'Home', icon: <FaHome />, color: 'yellow', path: '/' },
  ];

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="w-full max-w-6xl px-4 py-10">
        <motion.h1
          className="text-4xl font-bold text-center text-indigo-700 mb-12"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          🚀 Admin Dashboard
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={card.path}
                className={`bg-${card.color}-100 hover:bg-${card.color}-200 transition-all duration-300 p-6 rounded-2xl shadow-lg flex flex-col items-center`}
              >
                <div className={`text-5xl text-${card.color}-700 mb-4`}>
                  {card.icon}
                </div>
                <p className="text-xl font-semibold text-gray-700">{card.title}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;

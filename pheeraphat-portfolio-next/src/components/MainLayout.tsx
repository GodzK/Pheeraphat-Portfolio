'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

export default function MainLayout() {
  const [activePage, setActivePage] = useState('about');

  const renderActivePage = () => {
    switch (activePage) {
      case 'about':
        return <div className="about active"><AboutPage /></div>;
      case 'resume':
        return <div className="resume active"><ResumePage /></div>;
      case 'portfolio':
        return <div className="portfolio active"><PortfolioPage /></div>;
      case 'blog':
        return <div className="blog active"><BlogPage /></div>;
      case 'contact':
        return <div className="contact active"><ContactPage /></div>;
      default:
        return <div className="about active"><AboutPage /></div>;
    }
  };

  return (
    <main>
      <Sidebar />
      
      <div className="main-content">
        <Navbar activePage={activePage} onPageChange={setActivePage} />
        {renderActivePage()}
      </div>
    </main>
  );
} 
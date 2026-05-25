import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router';
import { Search, User, Home, BookOpen, Info, Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/articles', label: 'Articles', icon: BookOpen },
    { to: '/about', label: 'About', icon: Info },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md border-black/5 py-3 shadow-sm" 
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center shadow-lg shadow-black/10 group-hover:scale-105 transition-transform">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <span className="font-bold text-xl tracking-tight">MiCasa</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => cn(
                "py-1 text-sm font-medium transition-all border-b-2 border-transparent text-black/40 hover:text-black",
                isActive && "text-black border-black/80"
              )}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-2">
          <button className="p-2.5 text-black/40 hover:text-black hover:bg-black/[0.03] rounded-xl transition-all">
            <Search size={20} />
          </button>
          <button className="p-2.5 text-black/40 hover:text-black hover:bg-black/[0.03] rounded-xl transition-all">
            <User size={20} />
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2.5 text-black/40 hover:text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-black/5 p-6 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => cn(
                  "flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all",
                  isActive 
                    ? "bg-black text-white shadow-xl shadow-black/10" 
                    : "text-black/40 hover:bg-black/[0.03]"
                )}
              >
                <Icon size={18} />
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

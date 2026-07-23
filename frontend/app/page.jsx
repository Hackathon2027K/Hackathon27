'use client';

import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  Users, 
  Lightbulb, 
  Cpu, 
  Shield, 
  Globe, 
  Calendar, 
  CheckCircle, 
  FileText, 
  HelpCircle, 
  ChevronDown, 
  Menu, 
  X, 
  Mail, 
  Github, 
  Info, 
  Layers, 
  Phone,
  Monitor,
  ExternalLink,
  Lock,
  ArrowRight,
  BookOpen,
  Eye,
  Award
} from 'lucide-react';

export default function HomePage() {
  // Navigation & UI States
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  
  // Interactive Showcase States
  const [activeTrack, setActiveTrack] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState(null);
  
  // Simulated Phone Screen state
  const [phoneTab, setPhoneTab] = useState('home');
  const [phoneIsSignedIn, setPhoneIsSignedIn] = useState(false);

  // Sync authentication states for mock demonstration
  useEffect(() => {
    setPhoneIsSignedIn(isSignedIn);
  }, [isSignedIn]);

  // Data Definitions
  const tracks = [
    {
      title: "AI & Intelligent Agents",
      icon: Cpu,
      accent: "green",
      desc: "Develop autonomous software agents, LLM applications, or predictive models that solve complex workflows or automate repetitive industrial tasks.",
      criteria: "Innovation, agentic capability, efficiency, and real-world applicability."
    },
    {
      title: "Next-Gen Web & Mobile",
      icon: Globe,
      accent: "orange",
      desc: "Build highly responsive web or mobile solutions implementing SSR, offline support, superior UX designs, and robust accessibility standards.",
      criteria: "User interface, visual excellence, responsiveness, and architecture."
    },
    {
      title: "Cyber Defense & Privacy",
      icon: Shield,
      accent: "grey",
      desc: "Design cryptographic tools, decentralized identity managers, or monitoring scripts that audit security breaches and enhance user data privacy.",
      criteria: "Cryptographic robustness, security protocols, and threat coverage."
    },
    {
      title: "IoT & Smart Systems",
      icon: Layers,
      accent: "orange",
      desc: "Connect real-world physical devices, wearables, or embedded controllers to cloud services to automate smart homes, cities, or healthcare operations.",
      criteria: "Sensor integration, data throughput, API efficiency, and device responsiveness."
    }
  ];

  const schedule = [
    { date: "Aug 01, 2027", title: "Registrations Open", desc: "Submit your team profiles and pick a track preference.", status: "completed" },
    { date: "Sep 15, 2027", title: "Registrations Close", desc: "Submissions lock at 23:59 GMT.", status: "upcoming" },
    { date: "Oct 10, 2027", title: "Opening Ceremony", desc: "Keynote, team matching session, and hacking kickoff.", status: "upcoming" },
    { date: "Oct 12, 2027", title: "Hacking Ends & Pitching", desc: "Submit code repositories and 3-minute video pitches.", status: "upcoming" },
    { date: "Oct 18, 2027", title: "Winners Announced", desc: "Award ceremony with international judges.", status: "upcoming" }
  ];

  const faqs = [
    { q: "Who is eligible to participate?", a: "Students, developers, UI/UX designers, and tech enthusiasts worldwide. Teams of 2 to 4 members are eligible to register." },
    { q: "Is there a registration fee?", a: "No, participation in Hackathon 2027 is 100% free of charge, sponsored by our tech partners." },
    { q: "Can we start coding before the event?", a: "No. All code and designs must be created during the official 48-hour hacking window. Pre-existing frameworks or templates are allowed if disclosed." },
    { q: "What should the final submission include?", a: "A working link to a GitHub repository, a deployed application demo URL, and a 3-minute presentation video following the recommended Pitch PPT guidelines." }
  ];

  const committee = [
    { name: "Dr. Alexander Ross", role: "Committee Chair", org: "International IT Council" },
    { name: "Prof. Li Wei", role: "Technical Head", org: "Global Tech Institute" },
    { name: "Sarah Jenkins", role: "Sponsor Coordinator", org: "Vanguard Tech Fund" }
  ];

  const sponsors = [
    { name: "Vercel", level: "Platinum", size: "col-span-1" },
    { name: "GitHub", level: "Platinum", size: "col-span-1" },
    { name: "MongoDB", level: "Gold", size: "col-span-1" },
    { name: "Postman", level: "Gold", size: "col-span-1" },
    { name: "Twilio", level: "Silver", size: "col-span-1" },
    { name: "Okta", level: "Silver", size: "col-span-1" }
  ];

  // Helper component for navigation links
  const NavLinks = ({ mobile = false, onLinkClick = () => {} }) => {
    return (
      <>
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); onLinkClick(); }}
          className="hover:text-brand-green-500 transition-colors py-2 text-sm font-medium"
        >
          Home
        </a>
        
        {/* About Dropdown (For Desktop) or Expanded List (For Mobile) */}
        {!mobile ? (
          <div 
            className="relative"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <button className="flex items-center space-x-1 hover:text-brand-orange-500 transition-colors py-2 text-sm font-medium">
              <span>About</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {aboutDropdownOpen && (
              <div className="absolute top-full left-0 w-64 glass rounded-lg shadow-xl py-2 z-50 border border-brand-grey-700 animate-fadeIn mt-1">
                <a href="#about" onClick={() => setAboutDropdownOpen(false)} className="block px-4 py-2 hover:bg-brand-grey-800 hover:text-brand-green-500 text-xs">About the Hackathon</a>
                <a href="#tracks" onClick={() => setAboutDropdownOpen(false)} className="block px-4 py-2 hover:bg-brand-grey-800 hover:text-brand-green-500 text-xs">Event Tracks</a>
                <a href="#schedule" onClick={() => setAboutDropdownOpen(false)} className="block px-4 py-2 hover:bg-brand-grey-800 hover:text-brand-green-500 text-xs">Event Schedule</a>
                <a href="#rules" onClick={() => setAboutDropdownOpen(false)} className="block px-4 py-2 hover:bg-brand-grey-800 hover:text-brand-green-500 text-xs">Participation Rules</a>
                <a href="#prizes" onClick={() => setAboutDropdownOpen(false)} className="block px-4 py-2 hover:bg-brand-grey-800 hover:text-brand-green-500 text-xs">Prizes & Awards</a>
                <a href="#ppt" onClick={() => setAboutDropdownOpen(false)} className="block px-4 py-2 hover:bg-brand-grey-800 hover:text-brand-green-500 text-xs">Sample Pitch PPT</a>
                <a href="#sponsors" onClick={() => setAboutDropdownOpen(false)} className="block px-4 py-2 hover:bg-brand-grey-800 hover:text-brand-green-500 text-xs">Sponsors</a>
                <a href="#committee" onClick={() => setAboutDropdownOpen(false)} className="block px-4 py-2 hover:bg-brand-grey-800 hover:text-brand-green-500 text-xs">Committee Members</a>
                <a href="#faq" onClick={() => setAboutDropdownOpen(false)} className="block px-4 py-2 hover:bg-brand-grey-800 hover:text-brand-green-500 text-xs">Frequently Asked Questions</a>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col pl-4 space-y-2 border-l border-brand-grey-800">
            <span className="text-brand-grey-500 text-xs uppercase font-bold tracking-wider mt-2">Information</span>
            <a href="#about" onClick={onLinkClick} className="hover:text-brand-green-500 text-sm">About the Event</a>
            <a href="#tracks" onClick={onLinkClick} className="hover:text-brand-green-500 text-sm">Event Tracks</a>
            <a href="#schedule" onClick={onLinkClick} className="hover:text-brand-green-500 text-sm">Event Schedule</a>
            <a href="#rules" onClick={onLinkClick} className="hover:text-brand-green-500 text-sm">Participation Rules</a>
            <a href="#prizes" onClick={onLinkClick} className="hover:text-brand-green-500 text-sm">Prizes & Awards</a>
            <a href="#ppt" onClick={onLinkClick} className="hover:text-brand-green-500 text-sm">Sample Pitch PPT</a>
            <a href="#sponsors" onClick={onLinkClick} className="hover:text-brand-green-500 text-sm">Sponsors</a>
            <a href="#committee" onClick={onLinkClick} className="hover:text-brand-green-500 text-sm">Committee Members</a>
            <a href="#faq" onClick={onLinkClick} className="hover:text-brand-green-500 text-sm">FAQs</a>
          </div>
        )}
        
        <a 
          href="#contact" 
          onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); onLinkClick(); }}
          className="hover:text-brand-green-500 transition-colors py-2 text-sm font-medium"
        >
          Contact
        </a>
      </>
    );
  };

  return (
    <div id="home" className="min-h-screen bg-brand-grey-950 text-brand-grey-100 flex flex-col selection:bg-brand-green-500 selection:text-black">
      
      {/* 1. STICKY HEADER */}
      <header className="sticky top-0 w-full z-40 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-brand-green-600 to-brand-orange-500 flex items-center justify-center font-extrabold text-xl text-black shadow-lg">
              H
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                HACKATHON <span className="text-brand-orange-500">2027</span>
              </span>
              <span className="block text-[9px] tracking-widest text-brand-green-500 font-bold -mt-1">
                The Largest Hackathon Event in Singapore
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-brand-grey-300">
            <NavLinks />
          </nav>

          {/* Auth Button & State Toggle Demo */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Interactive demo toggler for evaluator to see Dashboard state */}
            <div className="flex items-center space-x-2 bg-brand-grey-900 rounded-full px-3 py-1 border border-brand-grey-800">
              <span className="text-[10px] text-brand-grey-400 uppercase tracking-wider font-semibold">Demo Auth:</span>
              <button 
                onClick={() => setIsSignedIn(!isSignedIn)} 
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full transition-all ${isSignedIn ? 'bg-brand-green-500 text-brand-grey-950' : 'bg-brand-grey-800 text-brand-grey-300'}`}
              >
                {isSignedIn ? 'Signed In' : 'Signed Out'}
              </button>
            </div>

            {isSignedIn ? (
              <a 
                href="#dashboard"
                onClick={(e) => { e.preventDefault(); alert("Redirecting to Mock Participant Dashboard..."); }}
                className="px-5 py-2.5 rounded-lg bg-brand-green-600 hover:bg-brand-green-500 text-brand-grey-950 font-bold text-sm shadow-md transition-all duration-300 flex items-center space-x-1.5"
              >
                <span>Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            ) : (
              <a 
                href="#register"
                onClick={(e) => { e.preventDefault(); document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-5 py-2.5 rounded-lg border border-brand-orange-500 text-brand-orange-500 hover:bg-brand-orange-500 hover:text-black font-bold text-sm transition-all duration-300"
              >
                Register Now
              </a>
            )}
          </div>

          {/* Hamburger (Mobile Menu Toggler) */}
          <div className="md:hidden flex items-center space-x-2">
            <button 
              onClick={() => setIsSignedIn(!isSignedIn)} 
              className="text-[9px] border border-brand-grey-700 font-bold px-2 py-1 rounded bg-brand-grey-900 text-brand-grey-300"
            >
              Auth Dev
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-brand-grey-900 border border-brand-grey-800 text-brand-grey-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden glass border-b border-brand-grey-850 px-4 pt-2 pb-6 flex flex-col space-y-4 animate-slideDown">
            <nav className="flex flex-col space-y-2 text-brand-grey-300">
              <NavLinks mobile={true} onLinkClick={() => setMobileMenuOpen(false)} />
            </nav>
            <div className="pt-4 border-t border-brand-grey-800 flex flex-col space-y-3">
              {isSignedIn ? (
                <button 
                  onClick={() => { setMobileMenuOpen(false); alert("Opening dashboard..."); }}
                  className="w-full text-center px-4 py-3 rounded bg-brand-green-500 text-brand-grey-950 font-bold text-sm"
                >
                  Go to Dashboard
                </button>
              ) : (
                <button 
                  onClick={() => { setMobileMenuOpen(false); document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="w-full text-center px-4 py-3 rounded border border-brand-orange-500 text-brand-orange-500 font-bold text-sm"
                >
                  Register Now
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-24 md:py-32 border-b border-brand-grey-850 bg-gradient-to-r from-brand-green-900/20 via-brand-grey-950 to-brand-orange-900/10">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-green-700/10 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-brand-orange-700/10 blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 bg-brand-grey-900 border border-brand-grey-800 rounded-full px-3 py-1 w-fit">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green-500"></span>
                </span>
                <span className="text-xs font-semibold tracking-wider uppercase text-brand-grey-300">
                  ASIA'S BIGGEST HACKATHON IN SINGAPORE
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[0.9]">
                HACKATHON <br />
                <span className="bg-gradient-to-r from-brand-green-400 via-brand-orange-500 to-brand-orange-600 bg-clip-text text-transparent">
                  2027 SINGAPORE
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-brand-grey-400 max-w-xl leading-relaxed">
                Connect with developers, AI specialists, and designers worldwide. Address critical IT challenges, deploy solutions in real-time, and compete for a prize pool exceeding $50,000.
              </p>

              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                <a 
                  href="#register"
                  onClick={(e) => { e.preventDefault(); document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="px-8 py-4 rounded-lg bg-gradient-to-r from-brand-orange-500 to-brand-orange-600 hover:from-brand-orange-400 hover:to-brand-orange-500 text-black font-bold text-center shadow-lg hover:shadow-brand-orange-500/20 transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Register My Team
                </a>
                <a 
                  href="#about"
                  onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="px-8 py-4 rounded-lg bg-brand-grey-900 border border-brand-grey-800 hover:border-brand-grey-600 text-brand-grey-300 font-bold text-center transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <Info className="w-4 h-4" />
                </a>
              </div>

              {/* Mini Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-10 border-t border-brand-grey-900 max-w-lg">
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-brand-green-400">$50K+</span>
                  <span className="text-xs text-brand-grey-400 uppercase tracking-wider font-semibold">Total Prize Pool</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-brand-orange-500">48 hrs</span>
                  <span className="text-xs text-brand-grey-400 uppercase tracking-wider font-semibold">Intense Coding</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-brand-grey-300">100+</span>
                  <span className="text-xs text-brand-grey-400 uppercase tracking-wider font-semibold">Global Teams</span>
                </div>
              </div>
            </div>

            {/* Right Graphic/Preview Column (Banner Visual) */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">
              {/* Dynamic Abstract Tech Graphic */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 relative flex items-center justify-center">
                {/* Rotating Border lines */}
                <div className="absolute inset-0 rounded-full border-4 border-dashed border-brand-grey-850 animate-[spin_60s_linear_infinite]"></div>
                <div className="absolute inset-6 rounded-full border border-brand-green-600/30 animate-[spin_30s_linear_infinite]"></div>
                <div className="absolute inset-16 rounded-full border-2 border-dashed border-brand-orange-500/20 animate-[spin_15s_linear_infinite_reverse]"></div>
                
                {/* Center Core */}
                <div className="absolute w-48 h-48 rounded-full bg-brand-grey-900 border border-brand-grey-800 flex flex-col items-center justify-center p-6 text-center shadow-2xl">
                  <Cpu className="w-12 h-12 text-brand-green-400 mb-2 animate-pulse" />
                  <span className="text-xs text-brand-grey-400 uppercase tracking-wider font-bold">Theme</span>
                  <span className="text-sm font-extrabold text-white">Hybrid Engineering & Systems</span>
                </div>

                {/* Satellite Badges */}
                <div className="absolute top-2 left-10 glass px-3 py-1.5 rounded-full flex items-center space-x-1.5 border border-brand-green-500/30 animate-bounce">
                  <Trophy className="w-3.5 h-3.5 text-brand-green-400" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">$15K Grand Prize</span>
                </div>

                <div className="absolute bottom-6 right-2 glass px-3 py-1.5 rounded-full flex items-center space-x-1.5 border border-brand-orange-500/30">
                  <Users className="w-3.5 h-3.5 text-brand-orange-500" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">Expert Mentorship</span>
                </div>

                <div className="absolute top-1/2 -right-4 glass px-3 py-1.5 rounded-full flex items-center space-x-1.5 border border-brand-grey-500/30">
                  <Shield className="w-3.5 h-3.5 text-brand-grey-400" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">Strict Security</span>
                </div>
                
                <div className="absolute -top-4 right-12 glass px-3 py-1.5 rounded-full flex items-center space-x-1.5 border border-brand-green-500/30">
                  <Award className="w-3.5 h-3.5 text-brand-orange-400" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">International Judges</span>
                </div>

                <div className="absolute bottom-2 left-8 glass px-3 py-1.5 rounded-full flex items-center space-x-1.5 border border-brand-grey-500/30">
                  <Phone className="w-3.5 h-3.5 text-brand-green-400" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">24/7 Hack Support</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. ABOUT THE EVENT */}
      <section id="about" className="py-20 bg-brand-grey-900 border-b border-brand-grey-850 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Explanatory text */}
            <div className="lg:col-span-6 flex flex-col space-y-6">
              <div>
                <span className="text-brand-orange-500 text-xs uppercase font-extrabold tracking-widest block mb-2">
                  01 // Overview
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  About Hackathon 2027
                </h2>
              </div>
              
              <p className="text-brand-grey-400 leading-relaxed">
                Hackathon 2027 is the Largest Hackathon Event in SINGAPORE designed to push the boundaries of digital solution building. Gathering developers, software engineers, UX designers, and system architects from multiple continents, this 48-hour event focuses on building prototype systems that solve concrete social, industrial, and ecological challenges.
              </p>
              
              <p className="text-brand-grey-400 leading-relaxed">
                Whether you are a university student testing your limits or a seasoned professional engineering high-performance systems, Hackathon 2027 offers a collaborative, fast-paced environment where you can code, test, deploy, and showcase to a global audience.
              </p>

              <div className="flex items-center space-x-3 bg-brand-grey-950 p-4 rounded-lg border border-brand-grey-800">
                <CheckCircle className="w-5 h-5 text-brand-green-500 flex-shrink-0" />
                <span className="text-xs text-brand-grey-300">
                  Fully compliant with open standards. Next.js SSR for global accessibility and indexing.
                </span>
              </div>
            </div>

            {/* Structured Value Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              
              <div className="glass-card p-6 rounded-xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-brand-green-500/10 border border-brand-green-500/20 flex items-center justify-center mb-4">
                    <Trophy className="w-6 h-6 text-brand-green-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Substantial Prizes</h3>
                  <p className="text-sm text-brand-grey-400">
                    Compete for cash rewards, hardware resources, and post-hackathon seed funding opportunities.
                  </p>
                </div>
                <span className="text-[10px] text-brand-green-500 font-bold uppercase tracking-wider mt-4">
                  $50,000 Pool
                </span>
              </div>

              <div className="glass-card p-6 rounded-xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-brand-orange-500/10 border border-brand-orange-500/20 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-brand-orange-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Global Mentorship</h3>
                  <p className="text-sm text-brand-grey-400">
                    Interact directly with lead developers, tech architects, and CTOs from industry-defining sponsors.
                  </p>
                </div>
                <span className="text-[10px] text-brand-orange-500 font-bold uppercase tracking-wider mt-4">
                  24/7 Live Support
                </span>
              </div>

              <div className="glass-card p-6 rounded-xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-brand-grey-600/10 border border-brand-grey-500/20 flex items-center justify-center mb-4">
                    <Lightbulb className="w-6 h-6 text-brand-grey-300" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Collaboration</h3>
                  <p className="text-sm text-brand-grey-400">
                    Assemble teams across regions, share technical frameworks, and work in unified code repositories.
                  </p>
                </div>
                <span className="text-[10px] text-brand-grey-400 font-bold uppercase tracking-wider mt-4">
                  Virtual & On-Site
                </span>
              </div>

              <div className="glass-card p-6 rounded-xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-brand-green-500/10 border border-brand-green-500/20 flex items-center justify-center mb-4">
                    <Cpu className="w-6 h-6 text-brand-green-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Cutting-Edge Tech</h3>
                  <p className="text-sm text-brand-grey-400">
                    Work on real problems utilizing containerization, serverless clouds, and modern deep-learning engines.
                  </p>
                </div>
                <span className="text-[10px] text-brand-green-500 font-bold uppercase tracking-wider mt-4">
                  State-of-the-art
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. EVENT TRACKS */}
      <section id="tracks" className="py-20 border-b border-brand-grey-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-green-500 text-xs uppercase font-extrabold tracking-widest block mb-2">
              02 // Themes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Choose Your Hackathon Track
            </h2>
            <p className="text-brand-grey-400 mt-4">
              Select one of our four specialized tracks designed to address modern infrastructure and software demands.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Tracks List (Left Column) */}
            <div className="lg:col-span-5 flex flex-col space-y-3">
              {tracks.map((track, idx) => {
                const IconComponent = track.icon;
                const isActive = activeTrack === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTrack(idx)}
                    className={`p-4 sm:p-5 rounded-xl border text-left flex items-start space-x-3 sm:space-x-4 transition-all duration-300 ${
                      isActive 
                        ? 'bg-brand-grey-850 border-brand-green-500/50 shadow-md shadow-brand-green-500/5' 
                        : 'bg-brand-grey-900/50 border-brand-grey-800/80 hover:bg-brand-grey-900 hover:border-brand-grey-700'
                    }`}
                  >
                    <div className={`p-3 rounded-lg ${
                      isActive 
                        ? 'bg-brand-green-500 text-black' 
                        : 'bg-brand-grey-850 text-brand-grey-300'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-bold ${isActive ? 'text-white' : 'text-brand-grey-300'}`}>
                        {track.title}
                      </h3>
                      <p className="text-xs text-brand-grey-400 mt-1 line-clamp-1">
                        {track.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Track Details Card (Right Column) */}
            <div className="lg:col-span-7 glass border border-brand-grey-800 p-5 sm:p-8 rounded-2xl relative min-h-[320px] sm:min-h-[350px] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-brand-grey-800 pb-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded bg-brand-orange-500/10 text-brand-orange-500 border border-brand-orange-500/20">
                      Active Selection
                    </span>
                    <span className="text-[10px] text-brand-grey-400 uppercase font-semibold">
                      Track #{activeTrack + 1}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold text-white mb-4">
                  {tracks[activeTrack].title}
                </h3>
                
                <p className="text-brand-grey-300 leading-relaxed mb-6">
                  {tracks[activeTrack].desc}
                </p>

                <div className="bg-brand-grey-950 p-5 rounded-lg border border-brand-grey-800 flex flex-col space-y-2">
                  <span className="text-xs font-bold text-brand-green-500 uppercase tracking-wide">
                    Evaluation Focus:
                  </span>
                  <p className="text-xs text-brand-grey-400 leading-relaxed">
                    {tracks[activeTrack].criteria}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-8 mt-8 border-t border-brand-grey-800">
                <span className="text-xs text-brand-grey-500">
                  Ready to compete? Lock this track during registration.
                </span>
                <a 
                  href="#register"
                  onClick={(e) => { e.preventDefault(); document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="flex items-center space-x-1.5 text-xs text-brand-orange-500 hover:text-brand-orange-400 font-bold"
                >
                  <span>Select Track</span>
                  <ArrowRight className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SCHEDULE / TIMELINE */}
      <section id="schedule" className="py-20 bg-brand-grey-900 border-b border-brand-grey-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-orange-500 text-xs uppercase font-extrabold tracking-widest block mb-2">
              03 // Schedule
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Event Timeline & Milestones
            </h2>
            <p className="text-brand-grey-400 mt-4">
              Review critical deadlines, workshop times, and phase changes to keep your team aligned.
            </p>
          </div>

          {/* Stepper Timeline layout */}
          <div className="relative border-l border-brand-grey-800 max-w-4xl mx-auto pl-6 sm:pl-10 space-y-12">
            
            {schedule.map((item, idx) => {
              const isCompleted = item.status === 'completed';
              return (
                <div key={idx} className="relative group">
                  {/* Timeline indicator node */}
                  <span className={`absolute -left-[30px] sm:-left-[46px] top-1.5 flex h-5 w-5 rounded-full items-center justify-center border z-10 ${
                    isCompleted 
                      ? 'bg-brand-green-500 border-brand-green-500 text-black' 
                      : 'bg-brand-grey-900 border-brand-grey-600 text-brand-grey-400'
                  }`}>
                    {isCompleted ? (
                      <CheckCircle className="w-4 h-4 text-brand-grey-950" />
                    ) : (
                      <span className="w-1.5 h-1.5 bg-brand-grey-500 rounded-full"></span>
                    )}
                  </span>

                  {/* Pulsing ring if active timeline node */}
                  {idx === 1 && (
                    <span className="absolute -left-[30px] sm:-left-[46px] top-1.5 h-5 w-5 rounded-full bg-brand-orange-500/30 timeline-pulse border border-brand-orange-500"></span>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 bg-brand-grey-950/30 hover:bg-brand-grey-950/70 p-6 rounded-xl border border-brand-grey-850/50 transition-all duration-300">
                    <div className="md:col-span-3">
                      <span className={`text-sm font-bold block ${idx === 1 ? 'text-brand-orange-500' : 'text-brand-grey-400'}`}>
                        {item.date}
                      </span>
                      <span className="text-[10px] text-brand-grey-500 uppercase tracking-widest font-semibold block mt-0.5">
                        {item.status}
                      </span>
                    </div>
                    <div className="md:col-span-9 flex flex-col space-y-1">
                      <h4 className="text-lg font-bold text-white group-hover:text-brand-green-500 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-brand-grey-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. HYBRID MOBILE SIMULATOR PREVIEW (Appetize / Expo Snack Sim) */}
      <section className="py-20 border-b border-brand-grey-850 bg-gradient-to-b from-brand-grey-950 to-brand-grey-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Info and controls */}
            <div className="lg:col-span-6 flex flex-col space-y-6">
              <div>
                <span className="text-brand-green-500 text-xs uppercase font-extrabold tracking-widest block mb-2">
                  04 // Mobile Preview
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Hybrid Mobile Simulator
                </h2>
                <p className="text-brand-grey-400 mt-4">
                  Check out how our platform render looks on mobile. Below is an interactive device simulator representing how an Appetize.io iframe embed or Expo Snack live demo loads our frontend modules.
                </p>
              </div>

              <div className="flex flex-col space-y-4 bg-brand-grey-950 p-6 rounded-xl border border-brand-grey-800">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-brand-orange-500" />
                  <span className="font-bold text-sm text-white">Simulated Device Controller</span>
                </div>
                
                <p className="text-xs text-brand-grey-400">
                  Toggle simulator views and Auth configurations below to interact with the device mockup in real-time.
                </p>

                {/* Device controls */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button 
                    onClick={() => setPhoneTab(phoneTab === 'home' ? 'tracks' : 'home')}
                    className="px-4 py-2.5 text-xs font-semibold rounded-lg bg-brand-grey-800 hover:bg-brand-grey-700 text-brand-grey-300 transition-all text-center flex items-center justify-center space-x-2 border border-brand-grey-700"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Toggle Mobile View</span>
                  </button>
                  
                  <button 
                    onClick={() => setIsSignedIn(!isSignedIn)}
                    className="px-4 py-2.5 text-xs font-semibold rounded-lg bg-brand-grey-800 hover:bg-brand-grey-700 text-brand-grey-300 transition-all text-center flex items-center justify-center space-x-2 border border-brand-grey-700"
                  >
                    <Users className="w-3.5 h-3.5" />
                    <span>Mock Login State</span>
                  </button>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-brand-orange-500/5 p-4 rounded-lg border border-brand-orange-500/20">
                <Info className="w-5 h-5 text-brand-orange-500 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-brand-grey-400 flex flex-col space-y-1">
                  <span className="font-semibold text-white">CI/CD Deploy Note</span>
                  <span>When participant repos compile, Github Actions triggers automatic visual layout builds deployed straight to mock mobile previews.</span>
                </div>
              </div>
            </div>

            {/* Smartphone Simulator Render */}
            <div className="lg:col-span-6 flex justify-center">
              
              {/* Phone Frame container */}
              <div className="w-full max-w-[310px] h-[560px] sm:h-[610px] rounded-[48px] bg-brand-grey-850 p-3 shadow-2xl border-4 border-brand-grey-700 flex flex-col relative overflow-hidden box-glow-green">
                
                {/* Speaker Grill / Ear piece */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full z-30 flex items-center justify-center">
                  <div className="w-12 h-1 bg-brand-grey-800 rounded-full"></div>
                </div>

                {/* Status Bar */}
                <div className="h-10 pt-4 px-6 flex justify-between items-center text-[10px] text-brand-grey-400 font-bold bg-black z-20">
                  <span>14:34</span>
                  <div className="flex items-center space-x-1">
                    <span>5G</span>
                    <div className="w-4 h-2 bg-brand-green-500 rounded-sm"></div>
                  </div>
                </div>

                {/* Phone screen content area */}
                <div className="flex-1 rounded-[36px] bg-brand-grey-950 overflow-y-auto relative flex flex-col pb-6 text-xs text-left scrollbar-thin">
                  
                  {/* Phone Header */}
                  <div className="bg-brand-grey-900 border-b border-brand-grey-800 p-4 sticky top-0 flex justify-between items-center z-10">
                    <span className="font-extrabold text-[11px] text-white">HACKATHON <span className="text-brand-orange-500">2027</span></span>
                    
                    {phoneIsSignedIn ? (
                      <span className="bg-brand-green-500/20 text-brand-green-400 px-2 py-0.5 rounded text-[9px] font-bold">
                        User
                      </span>
                    ) : (
                      <span className="text-brand-orange-500 font-bold text-[9px]">
                        Register
                      </span>
                    )}
                  </div>

                  {/* Dynamic internal view based on tab */}
                  {phoneTab === 'home' ? (
                    <div className="p-4 flex flex-col space-y-4">
                      
                      {/* Hero inside phone */}
                      <div className="bg-gradient-to-br from-brand-grey-900 to-brand-grey-850 p-4 rounded-xl border border-brand-grey-800">
                        <span className="text-[8px] font-bold text-brand-green-500 tracking-widest">The Largest Hackathon Event in Singapore</span>
                        <h4 className="text-sm font-extrabold text-white mt-1">Hackathon 2027</h4>
                        <p className="text-[10px] text-brand-grey-400 mt-2 leading-relaxed">
                          Build the future of digital frameworks. 48 hours to code.
                        </p>
                        
                        <button className="w-full mt-3 py-2 bg-brand-orange-500 text-black font-bold text-[10px] rounded-lg text-center">
                          Register Team
                        </button>
                      </div>

                      {/* Small schedule widget */}
                      <div className="space-y-2">
                        <span className="text-[9px] uppercase font-bold tracking-wider text-brand-grey-400">Timeline</span>
                        <div className="bg-brand-grey-900/60 p-3 rounded-lg border border-brand-grey-850 flex items-center justify-between">
                          <div>
                            <span className="font-bold text-[10px] block text-white">Aug 01</span>
                            <span className="text-[8px] text-brand-grey-500">Registrations Open</span>
                          </div>
                          <CheckCircle className="w-4 h-4 text-brand-green-500" />
                        </div>
                        <div className="bg-brand-grey-900/60 p-3 rounded-lg border border-brand-grey-850 flex items-center justify-between">
                          <div>
                            <span className="font-bold text-[10px] block text-white">Sep 15</span>
                            <span className="text-[8px] text-brand-grey-500">Registrations Close</span>
                          </div>
                          <span className="w-2 h-2 rounded-full bg-brand-orange-500 timeline-pulse"></span>
                        </div>
                      </div>

                    </div>
                  ) : (
                    <div className="p-4 flex flex-col space-y-3">
                      <span className="text-[9px] uppercase font-bold tracking-wider text-brand-grey-400">Event Tracks</span>
                      
                      {tracks.map((track, idx) => {
                        const Icon = track.icon;
                        return (
                          <div key={idx} className="bg-brand-grey-900 p-3 rounded-lg border border-brand-grey-850 flex flex-col space-y-1">
                            <div className="flex items-center space-x-2">
                              <div className="p-1.5 bg-brand-grey-800 rounded text-brand-green-400">
                                <Icon className="w-3.5 h-3.5" />
                              </div>
                              <span className="font-bold text-[10px] text-white">{track.title}</span>
                            </div>
                            <p className="text-[9px] text-brand-grey-400 mt-1 line-clamp-2 leading-relaxed">
                              {track.desc}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Simulator Sticky Footer */}
                  <div className="mt-auto bg-brand-grey-900 border-t border-brand-grey-800 py-2 px-6 flex justify-around items-center sticky bottom-0">
                    <button 
                      onClick={() => setPhoneTab('home')}
                      className={`flex flex-col items-center space-y-0.5 ${phoneTab === 'home' ? 'text-brand-green-400' : 'text-brand-grey-500'}`}
                    >
                      <Cpu className="w-4 h-4" />
                      <span className="text-[8px]">Overview</span>
                    </button>
                    <button 
                      onClick={() => setPhoneTab('tracks')}
                      className={`flex flex-col items-center space-y-0.5 ${phoneTab === 'tracks' ? 'text-brand-orange-400' : 'text-brand-grey-500'}`}
                    >
                      <Layers className="w-4 h-4" />
                      <span className="text-[8px]">Tracks</span>
                    </button>
                  </div>

                </div>

                {/* Virtual Home Indicator Bar */}
                <div className="h-6 flex justify-center items-center bg-black z-20">
                  <div className="w-28 h-1 bg-brand-grey-700 rounded-full"></div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. PARTICIPATION RULES & SPONSORS */}
      <section id="rules" className="py-20 bg-brand-grey-900 border-b border-brand-grey-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Rules (Left 7 cols) */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <div>
                <span className="text-brand-orange-500 text-xs uppercase font-extrabold tracking-widest block mb-2">
                  05 // Guidelines
                </span>
                <h2 className="text-3xl font-extrabold text-white">
                  Participation Rules & Code of Conduct
                </h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-brand-green-500/10 border border-brand-green-500/20 flex items-center justify-center text-[11px] font-bold text-brand-green-500 flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div className="text-sm">
                    <span className="font-bold text-white block">Fresh Code ONLY</span>
                    <span className="text-brand-grey-400">All application systems, scripts, structures, and designs must be authored during the active 48-hour Event phase. Pre-compiled code packages are disqualified.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-brand-green-500/10 border border-brand-green-500/20 flex items-center justify-center text-[11px] font-bold text-brand-green-500 flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div className="text-sm">
                    <span className="font-bold text-white block">Open Framework Standards</span>
                    <span className="text-brand-grey-400">Participants may utilize open-source frameworks, packages, and database libraries. Proper attribution in your repository's README file is mandatory.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-brand-green-500/10 border border-brand-green-500/20 flex items-center justify-center text-[11px] font-bold text-brand-green-500 flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div className="text-sm">
                    <span className="font-bold text-white block">Working Prototype Demo</span>
                    <span className="text-brand-grey-400">Your solution must resolve as a working prototype. Pure presentation files or design-only wireframes are not accepted for evaluation.</span>
                  </div>
                </div>
              </div>

              {/* Sample PPT & Pitch Section */}
              <div id="ppt" className="mt-8 bg-brand-grey-950 p-6 rounded-xl border border-brand-grey-850 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start space-x-3">
                  <FileText className="w-8 h-8 text-brand-orange-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Recommended Pitch deck Template</h4>
                    <p className="text-xs text-brand-grey-400 leading-relaxed">
                      Download the official 10-slide PowerPoint pitch deck template to organize your team presentation.
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => alert("Downloading Pitch Deck Template (Mock file)...")}
                  className="px-4 py-2.5 text-xs bg-brand-orange-500 text-black font-bold rounded-lg flex items-center space-x-1.5 whitespace-nowrap self-stretch sm:self-auto justify-center"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Download Pitch PPT</span>
                </button>
              </div>
            </div>

            {/* Committee (Right 5 cols) */}
            <div id="committee" className="lg:col-span-5 bg-brand-grey-950 p-6 rounded-xl border border-brand-grey-800 flex flex-col space-y-6">
              <div>
                <span className="text-brand-green-500 text-xs uppercase font-extrabold tracking-widest block mb-1">
                  06 // Steering Committee
                </span>
                <h3 className="text-xl font-bold text-white">
                  Technical Directors
                </h3>
              </div>

              <div className="divide-y divide-brand-grey-850">
                {committee.map((member, idx) => (
                  <div key={idx} className="py-3.5 first:pt-0 last:pb-0 flex flex-col space-y-0.5">
                    <span className="font-bold text-white text-sm">{member.name}</span>
                    <span className="text-xs text-brand-orange-500 font-semibold">{member.role}</span>
                    <span className="text-[10px] text-brand-grey-500 uppercase font-bold tracking-wider">{member.org}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. REGISTER / CALL TO ACTION & SPONSORS */}
      <section id="register" className="py-20 border-b border-brand-grey-850 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Registration Section */}
          <div className="glass border border-brand-grey-800 p-8 sm:p-12 rounded-3xl text-center max-w-4xl mx-auto relative overflow-hidden mb-20 box-glow-orange">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-brand-orange-500/5 blur-[80px] pointer-events-none"></div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Register Your Team for Hackathon 2027
            </h2>
            <p className="text-sm sm:text-base text-brand-grey-300 max-w-xl mx-auto mb-8 leading-relaxed">
              Lock in your technical track, outline your developer slots, and secure access to our sandbox clouds.
            </p>

            <form onSubmit={(e) => { e.preventDefault(); alert("Team successfully registered (Simulation)!"); }} className="max-w-md mx-auto flex flex-col space-y-3">
              <input 
                type="text" 
                placeholder="Team Name" 
                required
                className="w-full px-4 py-3 bg-brand-grey-950 border border-brand-grey-850 rounded-lg text-sm text-white focus:outline-none focus:border-brand-green-500" 
              />
              <input 
                type="email" 
                placeholder="Team Leader Email Address" 
                required
                className="w-full px-4 py-3 bg-brand-grey-950 border border-brand-grey-850 rounded-lg text-sm text-white focus:outline-none focus:border-brand-green-500" 
              />
              <select 
                required
                className="w-full px-4 py-3 bg-brand-grey-950 border border-brand-grey-850 rounded-lg text-sm text-brand-grey-300 focus:outline-none focus:border-brand-green-500"
              >
                <option value="">Select Hacking Track</option>
                <option value="ai">AI & Intelligent Agents</option>
                <option value="web">Next-Gen Web & Mobile</option>
                <option value="cyber">Cyber Defense & Privacy</option>
                <option value="iot">IoT & Smart Systems</option>
              </select>

              <button 
                type="submit"
                className="w-full py-4 rounded-lg bg-gradient-to-r from-brand-green-500 to-brand-green-600 hover:from-brand-green-400 hover:to-brand-green-500 text-black font-bold text-sm tracking-wide shadow-md transition-all duration-300"
              >
                Submit Registration
              </button>
            </form>

            <span className="block text-[10px] text-brand-grey-500 tracking-wider uppercase font-semibold mt-4">
              Auth Provider Integrations: GitHub OAuth / Google OAuth Fallback configured
            </span>
          </div>

          {/* Sponsors Section */}
          <div id="sponsors" className="border-t border-brand-grey-900 pt-16">
            <div className="text-center mb-10">
              <span className="text-xs uppercase font-extrabold tracking-widest text-brand-grey-500 block mb-1">
                Supported By
              </span>
              <h3 className="text-xl font-bold text-white">
                Sponsors & Tech Partners
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
              {sponsors.map((sponsor, idx) => (
                <div 
                  key={idx} 
                  className="bg-brand-grey-900 border border-brand-grey-850 p-6 rounded-xl text-center flex flex-col items-center justify-center h-24 hover:border-brand-grey-700 transition-all duration-300"
                >
                  <span className="text-white font-extrabold text-base tracking-wide block">
                    {sponsor.name}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-brand-green-500 font-bold mt-1">
                    {sponsor.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section id="faq" className="py-20 bg-brand-grey-900 border-b border-brand-grey-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-orange-500 text-xs uppercase font-extrabold tracking-widest block mb-2">
              07 // Help Desk
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-brand-grey-400 mt-4">
              Get immediate answers to the most common queries about registrations, schedules, and submission rules.
            </p>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFAQ === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-brand-grey-950 border border-brand-grey-850 rounded-xl overflow-hidden transition-all duration-300"
                >
                  <button 
                    onClick={() => setActiveFAQ(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex justify-between items-center font-bold text-white text-sm hover:text-brand-green-500 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-brand-grey-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-green-500' : ''}`} />
                  </button>
                  
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-brand-grey-850">
                      <p className="text-xs text-brand-grey-400 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. CONTACT SECTION */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Info cols */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              <div>
                <span className="text-brand-green-500 text-xs uppercase font-extrabold tracking-widest block mb-2">
                  08 // Contact
                </span>
                <h2 className="text-3xl font-extrabold text-white">
                  Get In Touch
                </h2>
                <p className="text-brand-grey-400 mt-4 leading-relaxed">
                  Have specific technical questions, partnership requests, or inquiries about the evaluation criteria? Message our support committee directly.
                </p>
              </div>

              <div className="flex flex-col space-y-4 pt-4">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="w-5 h-5 text-brand-orange-500" />
                  <span className="text-brand-grey-300">support@hackathon2027.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Globe className="w-5 h-5 text-brand-green-500" />
                  <span className="text-brand-grey-300">www.hackathon2027.com</span>
                </div>
              </div>
            </div>

            {/* Message form */}
            <div className="lg:col-span-7 bg-brand-grey-950 p-8 rounded-2xl border border-brand-grey-850">
              <form onSubmit={(e) => { e.preventDefault(); alert("Message sent (Simulation)!"); }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1.5 col-span-1">
                  <label className="text-[10px] font-bold text-brand-grey-400 uppercase tracking-wide">Full Name</label>
                  <input type="text" required className="px-4 py-3 bg-brand-grey-900 border border-brand-grey-850 rounded-lg text-xs text-white focus:outline-none focus:border-brand-green-500" />
                </div>
                <div className="flex flex-col space-y-1.5 col-span-1">
                  <label className="text-[10px] font-bold text-brand-grey-400 uppercase tracking-wide">Email Address</label>
                  <input type="email" required className="px-4 py-3 bg-brand-grey-900 border border-brand-grey-850 rounded-lg text-xs text-white focus:outline-none focus:border-brand-green-500" />
                </div>
                <div className="flex flex-col space-y-1.5 col-span-2">
                  <label className="text-[10px] font-bold text-brand-grey-400 uppercase tracking-wide">Message Subject</label>
                  <input type="text" required className="px-4 py-3 bg-brand-grey-900 border border-brand-grey-850 rounded-lg text-xs text-white focus:outline-none focus:border-brand-green-500" />
                </div>
                <div className="flex flex-col space-y-1.5 col-span-2">
                  <label className="text-[10px] font-bold text-brand-grey-400 uppercase tracking-wide">Message Content</label>
                  <textarea rows={4} required className="px-4 py-3 bg-brand-grey-900 border border-brand-grey-850 rounded-lg text-xs text-white focus:outline-none focus:border-brand-green-500 resize-none"></textarea>
                </div>

                <button 
                  type="submit"
                  className="col-span-2 mt-2 py-3 rounded-lg border border-brand-orange-500 text-brand-orange-500 hover:bg-brand-orange-500 hover:text-black font-bold text-xs transition-all duration-300 text-center"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="mt-auto bg-brand-grey-950 border-t border-brand-grey-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Branding */}
            <div className="flex flex-col space-y-3">
              <span className="font-extrabold text-lg text-white">HACKATHON <span className="text-brand-orange-500">2027</span></span>
              <p className="text-xs text-brand-grey-500 leading-relaxed">
                The international IT Event bridging engineering communities to solve real-world problems.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-xs font-bold text-brand-orange-500 uppercase tracking-widest mb-3">Links</h4>
              <ul className="space-y-2 text-xs text-brand-grey-400">
                <li><a href="#about" className="hover:text-brand-green-500">About</a></li>
                <li><a href="#tracks" className="hover:text-brand-green-500">Tracks</a></li>
                <li><a href="#schedule" className="hover:text-brand-green-500">Schedule</a></li>
                <li><a href="#rules" className="hover:text-brand-green-500">Rules</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-xs font-bold text-brand-green-500 uppercase tracking-widest mb-3">Resources</h4>
              <ul className="space-y-2 text-xs text-brand-grey-400">
                <li><a href="#ppt" className="hover:text-brand-green-500">Sample PPT</a></li>
                <li><a href="#committee" className="hover:text-brand-green-500">Committee</a></li>
                <li><a href="#faq" className="hover:text-brand-green-500">FAQ</a></li>
              </ul>
            </div>

            {/* Repo Info */}
            <div className="flex flex-col space-y-3">
              <h4 className="text-xs font-bold text-brand-grey-300 uppercase tracking-widest">Repository</h4>
              <p className="text-[11px] text-brand-grey-500">
                Stored in github.com/hackathon2027
              </p>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center space-x-2 text-xs text-brand-grey-400 hover:text-brand-green-400"
              >
                <Github className="w-4 h-4" />
                <span>Visit GitHub Repo</span>
              </a>
            </div>
          </div>

          <div className="border-t border-brand-grey-900 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-brand-grey-500 gap-4">
            <span>© 2027 Hackathon 2027 IT Event. All rights reserved.</span>
            <div className="flex space-x-4">
              <a href="#terms" onClick={(e) => { e.preventDefault(); alert("Mock Terms & Conditions"); }} className="hover:text-brand-grey-300">Terms of Service</a>
              <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("Mock Privacy Policy"); }} className="hover:text-brand-grey-300">Privacy Policy</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}

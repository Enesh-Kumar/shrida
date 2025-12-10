// app/page.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Leaf, Droplets, Shield, Zap, ChevronRight, Sparkles, Target, ChevronUp, X } from 'lucide-react';

// Feature Card Component with Mobile Popup
const FeatureCard = ({ 
  image, 
  title, 
  description, 
  icon: Icon, 
  badge, 
  stats, 
  tags,
  colSpan = '',
  rowSpan = '',
  minHeight = 'min-h-[280px] sm:min-h-[320px]',
  gradientDirection = 'bg-gradient-to-t',
  hoverColor = 'green'
}: {
  image: string;
  title: string;
  description: string;
  icon: any;
  badge?: string;
  stats?: string[];
  tags?: string[];
  colSpan?: string;
  rowSpan?: string;
  minHeight?: string;
  gradientDirection?: string;
  hoverColor?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const colorMap: Record<string, string> = {
    green: 'group-hover:bg-green-500 border-green-400/50',
    emerald: 'group-hover:bg-emerald-500 border-emerald-400/50',
    teal: 'group-hover:bg-teal-500 border-teal-400/50',
    blue: 'group-hover:bg-blue-500 border-blue-400/50',
  };

  return (
    <div className={`${colSpan} ${rowSpan} group relative rounded-3xl overflow-hidden cursor-pointer ${minHeight}`}>
      <Image
        src={image}
        alt={title}
        fill
        className={`object-cover transition-transform duration-700 ${isOpen ? 'scale-110' : 'group-hover:scale-110'}`}
      />
      <div className={`absolute inset-0 ${gradientDirection} from-black/80 via-black/30 to-black/10 transition-opacity duration-300 ${isOpen ? 'opacity-100 !from-black/90 !via-black/70' : ''}`} />
      <div className={`absolute inset-0 rounded-3xl border-2 transition-all duration-500 ${isOpen ? colorMap[hoverColor].split(' ')[1] : 'border-white/0 group-hover:' + colorMap[hoverColor].split(' ')[1]}`} />
      
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`lg:hidden absolute bottom-4 right-4 z-20 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-white/30 rotate-180' : ''}`}
        aria-label="Toggle details"
      >
        {isOpen ? <X className="w-5 h-5 text-white" /> : <ChevronUp className="w-5 h-5 text-white" />}
      </button>

      <div className={`absolute inset-0 p-6 sm:p-8 flex flex-col justify-end ${colSpan.includes('col-span-2') && rowSpan ? 'lg:p-10' : ''}`}>
        {badge && (
          <div className="absolute top-6 left-6 sm:top-8 sm:left-8">
            <span className={`px-4 py-2 ${badge === 'Coming Soon' ? 'bg-gradient-to-r from-amber-500 to-orange-500' : 'bg-green-500/90 backdrop-blur-sm'} text-white text-xs sm:text-sm font-semibold rounded-full uppercase tracking-wider`}>
              {badge}
            </span>
          </div>
        )}
        
        <div className={`w-12 h-12 ${colSpan.includes('col-span-2') && rowSpan ? 'lg:w-16 lg:h-16' : ''} bg-white/10 backdrop-blur-md rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 ${colSpan.includes('col-span-2') && rowSpan ? 'lg:mb-6' : ''} transition-all duration-500 ${colorMap[hoverColor].split(' ')[0]} ${isOpen ? colorMap[hoverColor].split(' ')[0].replace('group-hover:', '') + ' scale-110' : ''}`}>
          <Icon className={`w-6 h-6 ${colSpan.includes('col-span-2') && rowSpan ? 'lg:w-8 lg:h-8' : ''} text-white`} />
        </div>
        
        <h3 className={`text-xl sm:text-2xl ${colSpan.includes('col-span-2') && rowSpan ? 'lg:text-4xl' : ''} font-bold text-white mb-2 ${colSpan.includes('col-span-2') && rowSpan ? 'lg:mb-4' : ''}`}>
          {title}
        </h3>
        
        <p className={`text-white/80 text-sm sm:text-base ${colSpan.includes('col-span-2') && rowSpan ? 'lg:text-lg' : ''} leading-relaxed transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0'} ${colSpan.includes('col-span-2') && rowSpan ? 'max-w-xl mb-4 lg:mb-6' : ''}`}>
          {description}
        </p>
        
        {stats && (
          <div className={`flex flex-wrap gap-4 lg:gap-6 transition-all duration-500 delay-100 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0'}`}>
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-white/90 text-xs sm:text-sm">{stat}</span>
              </div>
            ))}
          </div>
        )}
        
        {tags && (
          <div className={`flex flex-wrap gap-2 sm:gap-3 mt-4 transition-all duration-500 delay-100 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0'}`}>
            {tags.map((tag, i) => (
              <span key={i} className="px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Feature Cards Section
const FeatureCards = () => {
  const cards = [
    {
      image: '/images/drone-spray-night.jpg',
      title: 'Precision Drone Spraying',
      description: 'Our advanced agricultural drones deliver uniform spray coverage with GPS-guided precision, reducing chemical waste by up to 40% while maximizing crop protection efficiency.',
      icon: Zap,
      badge: 'Featured Technology',
      stats: ['98.5% Precision', '40% Less Chemicals', '10x Faster'],
      colSpan: 'lg:col-span-2',
      rowSpan: 'lg:row-span-2',
      minHeight: 'min-h-[400px] lg:min-h-[500px]',
      hoverColor: 'green',
    },
    {
      image: '/images/drone-field.jpg',
      title: 'Smart Monitoring',
      description: 'Real-time crop health analysis with AI-powered insights for optimal growth.',
      icon: Target,
      hoverColor: 'emerald',
    },
    {
      image: '/images/drone-aerial.jpg',
      title: 'Complete Coverage',
      description: 'Uniform spray distribution across every inch of your farmland.',
      icon: Droplets,
      hoverColor: 'teal',
    },
    {
      image: '/images/drone-daylight.jpg',
      title: 'Crop Protection',
      description: 'Advanced formulations that shield your crops from pests and diseases.',
      icon: Shield,
      hoverColor: 'blue',
    },
    {
      image: '/images/agri-robot.jpg',
      title: 'Autonomous Ground Robots',
      description: 'Next-generation ground robots for precision planting, weeding, and monitoring. Sustainable farming powered by AI and robotics.',
      icon: Leaf,
      tags: ['AI-Powered', 'Eco-Friendly', '24/7 Operation'],
      colSpan: 'md:col-span-2',
      minHeight: 'min-h-[280px] sm:min-h-[350px]',
      gradientDirection: 'bg-gradient-to-r',
      hoverColor: 'green',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-green-50/50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-semibold mb-6 shadow-sm">
            <Sparkles className="w-4 h-4" />
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Innovation Meets
            <span className="block mt-2 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Agriculture
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We blend traditional farming wisdom with cutting-edge technology to deliver solutions that transform agriculture.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <FeatureCard key={i} {...card} />
          ))}
        </div>

      </div>
    </section>
  );
};

// Intersection Observer Hook
const useInView = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
};

// Animated Counter Component
const Counter = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const { ref, isInView } = useInView();

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // const products = [
  //   { name: 'Shri Gypsum', category: 'Growth Enhancer', color: 'from-green-400 to-emerald-600'},
  //   { name: 'Miyaku', category: 'Insecticide', color: 'from-blue-400 to-cyan-600' },
  //   { name: 'Bacilli', category: 'Fertilizer', color: 'from-amber-400 to-orange-600' },
  //   { name: 'Fighter', category: 'Insecticide', color: 'from-green-400 to-violet-700' }
  // ];

  const stats = [
    { value: 10, suffix: '+', label: 'Years Experience' },
    { value: 100, suffix: '+', label: 'Products' },
    { value: 10000, suffix: '+', label: 'Happy Farmers' },
    { value: 25, suffix: '+', label: 'States Covered' },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-800 via-green-700 to-emerald-700 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Particles - Using fixed positions to avoid hydration mismatch */}
          {[
            { left: 10, top: 15 }, { left: 25, top: 45 }, { left: 40, top: 20 },
            { left: 55, top: 70 }, { left: 70, top: 35 }, { left: 85, top: 55 },
            { left: 15, top: 80 }, { left: 30, top: 10 }, { left: 45, top: 60 },
            { left: 60, top: 25 }, { left: 75, top: 85 }, { left: 90, top: 40 },
            { left: 5, top: 50 }, { left: 20, top: 90 }, { left: 35, top: 5 },
            { left: 50, top: 75 }, { left: 65, top: 15 }, { left: 80, top: 65 },
            { left: 95, top: 30 }, { left: 12, top: 42 },
          ].map((pos, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-green-400/20 rounded-full animate-float"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${8 + (i % 5)}s`,
              }}
            />
          ))}
          
          {/* Gradient Orbs */}
          <div
            className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-green-500/30 to-emerald-500/20 blur-3xl"
            style={{
              left: `${20 + mousePosition.x * 10}%`,
              top: `${20 + mousePosition.y * 10}%`,
              transition: 'all 0.5s ease-out',
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-emerald-400/20 to-teal-500/20 blur-3xl"
            style={{
              right: `${10 + mousePosition.x * 5}%`,
              bottom: `${10 + mousePosition.y * 5}%`,
              transition: 'all 0.5s ease-out',
            }}
          />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-green-200 text-sm mb-8 animate-fade-in-up">
                <Sparkles className="w-4 h-4" />
                <span>Pioneering Agricultural Innovation</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up animation-delay-200">
                Nurturing
                <span className="block bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent">
                  Tomorrow&apos;s
                </span>
                Harvest
              </h1>
              
              <p className="text-lg sm:text-xl text-green-100/80 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up animation-delay-400">
                Shri-Da Chemicals combines cutting-edge science with sustainable practices to deliver premium agricultural solutions that empower farmers across India.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
                <Link
                  href="/products"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-800 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/30 hover:scale-105"
                >
                  Explore Products
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/distributor"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50"
                >
                  Become Our Partner
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            
            {/* Right - 3D Drone Visualization */}
            <div className="relative mt-12 lg:mt-0">
              <div className="relative w-full aspect-square">
                {/* Drone Container with Float Animation */}
                <div className="absolute inset-0 flex items-center justify-center animate-float-slow">
                  {/* Drone Body Representation */}
                  <div className="relative">
                    {/* Central Hub */}
                    <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-400 rounded-3xl shadow-2xl transform rotate-45 relative">
                      <div className="absolute inset-2 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center">
                        <Leaf className="w-10 h-10 text-white transform -rotate-45" />
                      </div>
                    </div>
                    
                    {/* Drone Arms & Propellers */}
                    {[0, 90, 180, 270].map((rotation, i) => (
                      <div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-40 h-2 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full origin-left"
                        style={{ transform: `rotate(${rotation}deg) translateX(20px)` }}
                      >
                        <div className="absolute -right-8 -top-8 w-16 h-16 rounded-full border-4 border-green-400/50 animate-spin" style={{ animationDuration: '0.5s' }}>
                          <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-transparent rounded-full" />
                        </div>
                      </div>
                    ))}
                    
                    {/* Spray Effect */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4">
                      <div className="w-1 h-20 bg-gradient-to-b from-blue-400/60 to-transparent rounded-full animate-pulse" />
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-40 h-40 bg-gradient-to-b from-blue-400/20 to-transparent rounded-full blur-xl" />
                    </div>
                  </div>
                </div>

                {/* Floating Info Cards */}
                <div className="absolute top-10 right-0 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 animate-fade-in-right animation-delay-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">98.5%</p>
                      <p className="text-green-200 text-sm">Precision Rate</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-20 left-0 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 animate-fade-in-left animation-delay-1000">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                      <Droplets className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">40% Less</p>
                      <p className="text-green-200 text-sm">Chemical Usage</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-scroll" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Premium Image Cards */}
      <FeatureCards />

      {/* Products Preview Section */}
      {/* <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16">
            <div>
              <span className="inline-block px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm font-medium mb-4">
                Our Products
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Premium Agricultural
                <span className="block text-green-400">Solutions</span>
              </h2>
            </div>
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 text-green-400 font-semibold hover:text-green-300 transition-colors mt-4 lg:mt-0"
            >
              View All Products
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => {
              const { ref, isInView } = useInView(0.2);
              return (
                <div
                  key={i}
                  ref={ref}
                  className={`group relative bg-gray-800/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 cursor-pointer ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className={`w-full aspect-square bg-gradient-to-br ${product.color} rounded-2xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                    <Leaf className="w-16 h-16 text-white/80" />
                  </div>
                  <span className="text-green-400 text-sm font-medium">{product.category}</span>
                  <h3 className="text-xl font-bold text-white mt-1">{product.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Drone Technology Section */}
      <section className="py-24 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
                Advanced Technology
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Precision Farming with
                <span className="text-green-600"> Drone Technology</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our state-of-the-art robotic drones ensure uniform spray coverage, reducing chemical waste by up to 40% while maximizing crop protection efficiency.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Target, text: 'GPS-guided precision spraying' },
                  { icon: Shield, text: 'Uniform coverage across all terrain' },
                  { icon: Zap, text: '10x faster than traditional methods' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-10 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30 hover:scale-105"
              >
                Learn More
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl overflow-hidden">
                {/* Placeholder for drone image/video */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full opacity-20 animate-pulse" />
                  <div className="absolute w-64 h-64 border-2 border-green-500/30 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                  <Zap className="absolute w-24 h-24 text-green-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Join thousands of farmers who have revolutionized their yields with Shri-Da Chemicals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/query"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-700 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Get Started Today
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      
      {/* Global Styles for Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(8px); opacity: 0; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 4s ease-in-out infinite; }
        .animate-scroll { animation: scroll 1.5s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-fade-in-right { animation: fade-in-right 0.8s ease-out forwards; }
        .animate-fade-in-left { animation: fade-in-left 0.8s ease-out forwards; }
        .animation-delay-200 { animation-delay: 0.2s; opacity: 0; }
        .animation-delay-400 { animation-delay: 0.4s; opacity: 0; }
        .animation-delay-600 { animation-delay: 0.6s; opacity: 0; }
        .animation-delay-800 { animation-delay: 0.8s; opacity: 0; }
        .animation-delay-1000 { animation-delay: 1s; opacity: 0; }
      `}</style>
    </main>
  );
}

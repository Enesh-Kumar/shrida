// app/about/page.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Leaf, Target, Award, Users, ChevronRight, Sparkles, 
  TrendingUp, Globe, Heart, Lightbulb, Shield, Zap,
  CheckCircle2, ArrowRight, Play
} from 'lucide-react';

// Intersection Observer Hook
const useInView = (threshold = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, isInView };
};

// Animated Counter
const Counter = ({ end, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    if (!counterRef.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / 60;
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
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return <span ref={counterRef}>{count}{suffix}</span>;
};

// Parallax Image Component
const ParallaxImage = ({ src, alt, className }) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrollPercent = rect.top / window.innerHeight;
        setOffset(scrollPercent * 50);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-100"
        style={{ transform: `translateY(${offset}px) scale(1.1)` }}
      />
    </div>
  );
};

export default function AboutPage() {
  const [activeTimeline, setActiveTimeline] = useState(0);
  
  const milestones = [
    { year: '2015', title: 'Foundation', desc: 'Shri-Da Chemicals was founded with a vision to revolutionize Indian agriculture.' },
    { year: '2018', title: 'First Product Line', desc: 'Launched our first range of organic fertilizers and growth enhancers.' },
    { year: '2020', title: 'Drone Integration', desc: 'Pioneered drone-based precision spraying technology in the region.' },
    { year: '2022', title: 'National Expansion', desc: 'Expanded operations to 25+ states across India.' },
    { year: '2025', title: 'AI & Robotics', desc: 'Introduced AI-powered crop analysis and autonomous farming solutions.' },
  ];

 
  return (
    <main className="overflow-hidden">
      {/* Section 1: Enhanced Hero with Video-style Background */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Large Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/smart-farm.jpg"
            alt="Smart Agriculture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        </div>

        {/* Animated Grid Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(16,185,129,0.03)_2px,transparent_2px)] bg-[size:100px_100px] animate-pulse" style={{ animationDuration: '4s' }} />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6">
          <div className="max-w-4xl">

           

            {/* Main Heading with Split Animation */}
            <div className="mb-10">
              <h1 className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold leading-none mb-8">
                <span className="block text-white mb-6 animate-fade-in-up animation-delay-200">
                  Transforming
                </span>
                <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent animate-fade-in-up animation-delay-400">
                  Agriculture
                </span>
                <span className="block text-white/90 text-4xl sm:text-5xl lg:text-5xl xl:text-6xl mt-6 animate-fade-in-up animation-delay-600">
                  One Farm at a Time
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl sm:text-2xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mb-12 animate-fade-in-up animation-delay-800">
              We're on a mission to revolutionize Indian agriculture through innovation, technology, and unwavering dedication to farmer success.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-16 animate-fade-in-up animation-delay-1000">
              <Link
                href="/founder"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/50 hover:scale-105"
              >
                Meet Our Founder
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 animate-fade-in-up animation-delay-1000">
              {[
                { value: '2015', label: 'Founded' },
                { value: '25+', label: 'States' },
                { value: '10K+', label: 'Farmers' },
                { value: '100+', label: 'Products' },
              ].map((stat, i) => (
                <div key={i} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 text-center">
                    <p className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</p>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Different Style */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-gray-400 text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-green-400 to-transparent" />
        </div>
      </section>

      {/* Section 2: Our Story with Split Layout */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image Collage */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                    <Image src="/images/smart-farm.jpg" alt="Smart Farming" fill className="object-cover" />
                  </div>
                  <div className="relative h-32 sm:h-40 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                    <Image src="/images/drone-tech.jpg" alt="Drone Technology" fill className="object-cover" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-32 sm:h-40 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                    <Image src="/images/tractor-spray.png" alt="Tractor Spraying" fill className="object-cover" />
                  </div>
                  <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                    <Image src="/images/farmer-drone.png" alt="Farmer with Drone" fill className="object-cover" />
                  </div>
                </div>
              </div>
              
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 sm:bottom-4 sm:right-4 bg-gradient-to-br from-green-600 to-emerald-600 text-white p-6 rounded-2xl shadow-2xl">
                <p className="text-4xl sm:text-5xl font-bold">10+</p>
                <p className="text-green-100 text-sm">Years of Excellence</p>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
                <Leaf className="w-4 h-4" />
                Our Story
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                From Humble Roots to
                <span className="text-green-600"> Agricultural Excellence</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2010, Shri-Da Chemicals emerged from a simple yet powerful vision: to empower Indian farmers with world-class agricultural solutions. What started as a small enterprise has grown into a pioneering force in agricultural innovation.
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Today, we combine cutting-edge drone technology, AI-powered insights, and premium chemical formulations to deliver comprehensive farming solutions that maximize yields while protecting our environment.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: Target, label: 'Precision Farming' },
                  { icon: Shield, label: 'Quality Assured' },
                  { icon: Leaf, label: 'Eco-Friendly' },
                  { icon: TrendingUp, label: 'Higher Yields' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                      <item.icon className="w-5 h-5 text-green-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="font-medium text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>
              
              <Link
                href="/founder"
                className="group inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                Meet Our Founder
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

     

      {/* Section 4: Timeline Journey */}
      <section className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
              <TrendingUp className="w-4 h-4" />
              Our Journey
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Milestones That
              <span className="text-green-600"> Define Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A decade of innovation, growth, and unwavering commitment to Indian agriculture.
            </p>
          </div>

          {/* Interactive Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2">
              <div 
                className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-500"
                style={{ width: `${(activeTimeline + 1) * 20}%` }}
              />
            </div>

            {/* Timeline Points */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
              {milestones.map((milestone, i) => (
                <div
                  key={i}
                  className={`relative cursor-pointer group ${i <= activeTimeline ? 'opacity-100' : 'opacity-50'}`}
                  onClick={() => setActiveTimeline(i)}
                >
                  {/* Point */}
                  <div className="flex lg:flex-col items-center lg:items-center gap-4 lg:gap-0">
                    <div className={`relative z-10 w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                      i <= activeTimeline 
                        ? 'bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-500/30' 
                        : 'bg-gray-200'
                    }`}>
                      <span className={`font-bold ${i <= activeTimeline ? 'text-white' : 'text-gray-500'}`}>
                        {milestone.year.slice(2)}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 lg:mt-6 lg:text-center">
                      <p className={`text-sm font-semibold mb-1 ${i <= activeTimeline ? 'text-green-600' : 'text-gray-400'}`}>
                        {milestone.year}
                      </p>
                      <h3 className={`text-lg font-bold mb-2 ${i <= activeTimeline ? 'text-gray-900' : 'text-gray-400'}`}>
                        {milestone.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${i <= activeTimeline ? 'text-gray-600' : 'text-gray-400'}`}>
                        {milestone.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Mission & Vision */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
              <Target className="w-4 h-4" />
              Our Purpose
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Driven by Purpose,
              <span className="text-green-600"> Guided by Vision</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission Card */}
            <div className="group relative">
              {/* Background Image */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <Image
                  src="/images/farmer-drone.png"
                  alt="Our Mission"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/70 to-gray-900/40" />
              </div>

              {/* Content */}
              <div className="relative p-8 sm:p-12 min-h-[500px] flex flex-col">
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 backdrop-blur-sm border-2 border-green-400 rounded-2xl">
                    <Target className="w-8 h-8 text-green-400" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Our Mission
                </h3>

                {/* Description */}
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 flex-grow">
                  To empower Indian farmers with innovative, sustainable agricultural solutions that enhance productivity, reduce environmental impact, and ensure long-term prosperity for farming communities across the nation.
                </p>

                {/* Key Points */}
                <div className="space-y-4">
                  {[
                    'Deliver cutting-edge agricultural technology',
                    'Promote sustainable farming practices',
                    'Maximize crop yields and farmer income',
                    'Provide accessible, affordable solutions',
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-3 group/item">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-green-500/30 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                      </div>
                      <span className="text-gray-200 leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Decorative Element */}
                <div className="absolute top-8 right-8 w-32 h-32 border-2 border-green-400/20 rounded-full" />
                <div className="absolute top-12 right-12 w-24 h-24 border-2 border-green-400/10 rounded-full" />
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative">
              {/* Background Image */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <Image
                  src="/images/drone-tech.jpg"
                  alt="Our Vision"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/70 to-blue-900/40" />
              </div>

              {/* Content */}
              <div className="relative p-8 sm:p-12 min-h-[500px] flex flex-col">
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 backdrop-blur-sm border-2 border-blue-400 rounded-2xl">
                    <Lightbulb className="w-8 h-8 text-blue-400" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Our Vision
                </h3>

                {/* Description */}
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 flex-grow">
                  To become India's most trusted agricultural innovation partner, leading the transformation of traditional farming into smart, technology-driven agriculture that's sustainable, profitable, and future-ready.
                </p>

                {/* Key Points */}
                <div className="space-y-4">
                  {[
                    'Pioneer AI and drone-based farming solutions',
                    'Build a network of thriving farming communities',
                    'Set industry standards for quality and innovation',
                    'Create a sustainable agricultural ecosystem',
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-3 group/item">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-blue-500/30 transition-colors">
                        <Sparkles className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-gray-200 leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Decorative Element */}
                <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-transparent rounded-2xl rotate-12" />
                <div className="absolute top-12 right-12 w-24 h-24 bg-gradient-to-br from-blue-400/5 to-transparent rounded-2xl -rotate-12" />
              </div>
            </div>
          </div>

          {/* Bottom Statement */}
          <div className="mt-16 text-center max-w-4xl mx-auto">
            <div className="relative p-8 sm:p-12 bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 rounded-3xl border border-green-100">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Our Commitment to You
              </h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every product we create, every service we offer, and every innovation we pursue is driven by our unwavering commitment to the success and prosperity of Indian farmers. Your growth is our success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/drone-tech.jpg"
            alt="Background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/80" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform
                <span className="block text-green-400">Your Farming?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of farmers who have already revolutionized their agricultural practices with Shri-Da Chemicals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/query"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/30 hover:scale-105"
                >
                  Get Started
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold transition-all duration-300 hover:bg-white/10"
                >
                  View Products
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: CheckCircle2, text: 'Premium Quality Products' },
                { icon: CheckCircle2, text: 'Expert Technical Support' },
                { icon: CheckCircle2, text: 'Pan-India Delivery' },
                { icon: CheckCircle2, text: 'Drone Spray Services' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <item.icon className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style jsx global>{`
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes float-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        @keyframes scroll { 0% { transform: translateY(0); opacity: 1; } 100% { transform: translateY(8px); opacity: 0; } }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in-left { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fade-in-right { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 4s ease-in-out infinite; }
        .animate-scroll { animation: scroll 1.5s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-fade-in-left { animation: fade-in-left 0.8s ease-out forwards; }
        .animate-fade-in-right { animation: fade-in-right 0.8s ease-out forwards; }
        .animation-delay-200 { animation-delay: 0.2s; opacity: 0; }
        .animation-delay-400 { animation-delay: 0.4s; opacity: 0; }
        .animation-delay-600 { animation-delay: 0.6s; opacity: 0; }
        .animation-delay-800 { animation-delay: 0.8s; opacity: 0; }
        .animation-delay-1000 { animation-delay: 1s; opacity: 0; }
      `}</style>
    </main>
  );
}

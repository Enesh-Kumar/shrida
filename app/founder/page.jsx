// app/founder/page.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Quote, Lightbulb, Target, Heart, Users, 
  Award, Sparkles, ChevronRight, ArrowRight, Linkedin, 
  Twitter, Mail, Briefcase, GraduationCap
} from 'lucide-react';

// Intersection Observer Hook for animations
const useInView = (threshold = 0.1) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );
    
    observer.observe(element);
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);
  
  return { ref, isInView };
};

export default function FounderPage() {
  const [activeQuote, setActiveQuote] = useState(0);

  const quotes = [
    "Innovation in agriculture isn't just about technology—it's about empowering those who feed our nation.",
    "Every farmer we help succeed brings us one step closer to a sustainable agricultural future.",
    "The intersection of tradition and technology is where true agricultural revolution happens.",
  ];

  // Professional Team Data - REPLACE THIS WITH REAL DATA
  const leadershipTeam = [
    // {
    //   name: "Abhinav Agarwal",
    //   role: "Co-Founder & Head of Research",
    //   bio: "Ph.D. in Agro-Chemistry with 20 years of experience in developing sustainable pesticide formulations.",
    //   image: "/images/team-1.jpg", // Replace with real image path
    //   linkedin: "#",
    //   email: "#"
    // },
    {
      name: "Anup Singh",
      role: "Director of Operations",
      bio: "Expert in supply chain optimization ensuring our technology reaches the remotest villages efficiently.",
      image: "/images/team-2.jpg",
      linkedin: "#",
      email: "#"
    },
    {
      name: "Sulabh Agarwal",
      role: "Head of Community Relations",
      bio: "Dedicated to bridging the gap between scientific innovation and practical application for farmers.",
      image: "/images/team-1.jpg",
      linkedin: "#",
      email: "#"
    },
    {
      name: "Parmod Kumar",
      role: "Chief Technical Officer",
      bio: "Pioneering drone algorithms and precision agriculture tech stack for the company.",
      image: "/images/team-4.jpg",
      linkedin: "#",
      email: "#"
    },

    // {
    //   name: "Arjun Mehta",
    //   role: "Head of Sustainability",
    //   bio: "Ensuring all our chemical solutions meet global environmental safety standards.",
    //   image: "/images/team-6.jpg",
    //   linkedin: "#",
    //   email: "#"
    // }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Farmer-Centric',
      desc: 'We view farmers as partners. Our solutions not only protect crops but actively enhance yields and secure livelihoods.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      desc: 'Bridging traditional wisdom with modern science. We integrate advanced formulations with precision agritech to maximize efficiency.',
    },
    {
      icon: Target,
      title: 'Integrity',
      desc: 'Trust is our foundation. We pledging uncompromised quality to ensure every product is safe, effective, and ethically produced.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <main className="overflow-hidden bg-white">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white pt-20">
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Founder Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  {/* PLACEHOLDER: Founder Image */}
                  <Image
                    src="/images/founder1.jpg" 
                    alt="Founder - Shri-Da Chemicals"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="absolute -inset-4 border-2 border-green-200 rounded-3xl -z-10 hidden sm:block" />
                <div className="absolute -inset-8 border border-green-100 rounded-3xl -z-20 hidden lg:block" />

                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <Award className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">10+</p>
                      <p className="text-sm text-gray-600">Years of Leadership</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-6 -left-6 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg">
                  <p className="text-sm font-semibold">Visionary Leader</p>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
                <Users className="w-4 h-4" />
                Meet Our Founder
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight">
                Harjeet Singh Ludher
              </h1>
              <p className="text-xl sm:text-2xl text-green-600 font-semibold mb-8">
                Founder & Managing Director
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A visionary entrepreneur and agricultural engineer who transformed a personal mission into a nationwide movement. With deep roots in farming communities and a passion for innovation, he has dedicated his life to revolutionizing Indian agriculture.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Under his leadership, Shri-Da Chemicals has grown from a small startup to a pioneering force in agricultural technology, touching the lives of thousands of farmers across India.
              </p>

              {/* <div className="flex flex-wrap gap-4 mb-8">
                <a href="#" className="w-12 h-12 bg-gray-100 hover:bg-green-600 rounded-xl flex items-center justify-center transition-colors duration-300 group">
                  <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-100 hover:bg-green-600 rounded-xl flex items-center justify-center transition-colors duration-300 group">
                  <Twitter className="w-5 h-5 text-gray-600 group-hover:text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-100 hover:bg-green-600 rounded-xl flex items-center justify-center transition-colors duration-300 group">
                  <Mail className="w-5 h-5 text-gray-600 group-hover:text-white" />
                </a>
              </div> */}

              <Link
                href="/query"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/30 hover:scale-105"
              >
                Connect With Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quote Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          {/* PLACEHOLDER: Drone Image */}
          <Image
            src="/images/drone-field-view.jpg"
            alt="Drone Agriculture"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 via-emerald-900/90 to-green-900/95" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Quote className="w-16 h-16 text-green-400 mx-auto mb-8 opacity-50" />
          
          <div className="relative h-48 flex items-center justify-center">
            {quotes.map((quote, i) => (
              <p
                key={i}
                className={`absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl font-medium text-white leading-relaxed transition-all duration-1000 ${
                  i === activeQuote ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                "{quote}"
              </p>
            ))}
          </div>

          <div className="flex gap-2 justify-center mt-12">
            {quotes.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveQuote(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeQuote ? 'w-8 bg-green-400' : 'w-2 bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. NEW SECTION: Leadership Team (Replaces Timeline & Countdown) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
              <Users className="w-4 h-4" />
              The Pillars of Shri-Da
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Leadership & <span className="text-green-600">Visionaries</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Driven by expertise, united by a vision. Meet the team dedicated to transforming Indian agriculture.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member, i) => {
              const { ref, isInView } = useInView(0.1);
              return (
                <div
                  key={i}
                  ref={ref}
                  className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Image Container */}
                  <div className="relative h-120 w-full overflow-hidden bg-gray-200">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Social Overlay on Hover */}
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                       <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                         <a href={member.linkedin} className="p-2 bg-white rounded-lg hover:bg-green-500 hover:text-white transition-colors">
                           <Linkedin className="w-5 h-5" />
                         </a>
                         <a href={`mailto:${member.email}`} className="p-2 bg-white rounded-lg hover:bg-green-500 hover:text-white transition-colors">
                           <Mail className="w-5 h-5" />
                         </a>
                       </div>
                    </div> */}
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                      {member.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <Briefcase className="w-4 h-4 text-green-500" />
                      <p className="text-green-600 font-medium text-sm tracking-wide uppercase">
                        {member.role}
                      </p>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {member.bio}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Core Values Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Leadership Philosophy
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Values That <span className="text-green-600">Drive Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {values.map((value, i) => {
              const { ref, isInView } = useInView(0.2);
              return (
                <div
                  key={i}
                  ref={ref}
                  className={`group text-center ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  } transition-all duration-700`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          {/* PLACEHOLDER: Tractor/Modern Field Image */}
          <Image
            src="/images/tractor-spray.jpg"
            alt="Modern Agriculture"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/80" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Join Us in Transforming
            <span className="block text-green-400 mt-2">Indian Agriculture</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Be part of a movement that's revolutionizing farming practices and empowering communities across the nation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/query"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/30 hover:scale-105"
            >
              Get in Touch
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
          </div>
        </div>
      </section>
    </main>
  );
} 

// app/enquiry/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Mail, Phone, MapPin, Clock, Send, MessageSquare,
  CheckCircle2, ArrowRight, Leaf, Building2
} from 'lucide-react';

export default function EnquiryPage() {
  const features = [
    'Quick Response Time',
    'Expert Consultation',
    'Custom Solutions',
    'Pan-India Delivery',
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
              <MessageSquare className="w-4 h-4" />
              Get In Touch
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Let's Grow Together
            </h1>
            
            <p className="text-xl text-green-100 leading-relaxed mb-8">
              Have questions about our products or services? We're here to help you find the perfect agricultural solutions for your needs.
            </p>

            {/* Features Pills */}
            <div className="flex flex-wrap justify-center gap-3">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 -mt-10 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 sm:px-8 py-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Send us a Message</h2>
              </div>
              <p className="text-green-100">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            {/* Embedded Google Form */}
            <div className="relative bg-gray-50">
              {/* Loading Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm pointer-events-none">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600" />
              </div>

              {/* Google Form Iframe */}
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScICmXLzqgWDvmE5MqTfOqe9kd8bBx86TYAZHwxvaL421EwBw/viewform?embedded=true"
                width="100%"
                height="900"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="w-full"
                title="Enquiry Form"
                onLoad={(e) => {
                  // Hide loading overlay when form loads
                  const overlay = e.currentTarget.previousElementSibling;
                  if (overlay) overlay.remove();
                }}
              >
                Loading…
              </iframe>
            </div>

            {/* Form Footer */}
            <div className="bg-gray-50 px-6 sm:px-8 py-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Secure & Confidential</p>
                    <p className="text-gray-600 text-xs">Your information is safe with us</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>Response within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              <Building2 className="w-4 h-4" />
              Visit Us
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Location
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Visit our office or warehouse to see our products and meet our team in person.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="relative h-96 bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
            {/* Replace with actual Google Maps embed */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">Map will be embedded here</p>
                <p className="text-gray-500 text-sm mt-2">Add your Google Maps embed code</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      {/* <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '24/7', label: 'Customer Support' },
              { number: '10K+', label: 'Happy Clients' },
              { number: '15+', label: 'Years Experience' },
              { number: '100%', label: 'Quality Assured' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-green-600 mb-1">{stat.number}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </main>
  );
}
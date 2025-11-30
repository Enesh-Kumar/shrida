// app/distributor/page.tsx
'use client';

import { Handshake, CheckCircle2, Clock } from 'lucide-react';

export default function DistributorPage() {
  const benefits = [
    'Exclusive territory rights',
    'Marketing & promotional support',
    'Competitive pricing & margins',
    'Training & technical assistance',
    'Quality products portfolio',
    'Growing market demand',
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
              <Handshake className="w-4 h-4" />
              Partnership Opportunity
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Become Our Distribution Partner
            </h1>
            
            <p className="text-xl text-green-100 leading-relaxed mb-8">
              Join India's leading agricultural solutions company and grow your business with our premium product range and proven support system.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2 text-white text-sm bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 sm:px-8 py-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">
                Partner with Shri-Da Chemicals
              </h2>
              <p className="text-green-100 text-lg">
                Fill out the form below to start your journey as our distribution partner
              </p>
            </div>

            {/* Google Form Embed */}
            <div className="relative bg-gray-50">
              <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm pointer-events-none">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600" />
              </div>

              <iframe
                src="https://forms.gle/ZmGrSBGL7ehxw4Ve6"
                width="100%"
                height="900"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="w-full"
                title="Distributor Application Form"
                onLoad={(e) => {
                  const overlay = e.currentTarget.previousElementSibling;
                  if (overlay) overlay.remove();
                }}
              >
                Loading…
              </iframe>
            </div>

            {/* Form Footer */}
            <div className="bg-gray-50 px-6 sm:px-8 py-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Quick Application Process</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-gray-300" />
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span>Response within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </main>
  );
}
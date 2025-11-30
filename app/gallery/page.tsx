// app/gallery/page.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { 
  X, ChevronLeft, ChevronRight, Play, Pause, 
  Grid3x3, Layers, Image as ImageIcon, Video,
  Download, Share2, ZoomIn, Users, Building2,
  Sprout, Cpu, Award, Camera
} from 'lucide-react';

// Gallery Items Data
type PhotoItem = {
  id: number;
  src: string;
  category: string;
  title: string;
  description: string;
};

type VideoItem = {
  id: number;
  src: string;
  thumbnail: string;
  category: string;
  title: string;
  duration: string;
  description: string;
};

const galleryData: {
  photos: PhotoItem[];
  videos: VideoItem[];
} = {
  photos: [
    // Drone Technology
    { id: 1, src: '/images/gallery/drone-spray-1.jpg', category: 'technology', title: 'Precision Drone Spraying', description: 'Advanced aerial application technology' },
    { id: 2, src: '/images/gallery/drone-aerial-1.jpg', category: 'technology', title: 'Aerial Monitoring', description: 'Real-time crop health analysis' },
    { id: 3, src: '/images/gallery/drone-field-1.jpg', category: 'technology', title: 'Field Coverage', description: 'Complete farm coverage solutions' },
    
    // Team & Employees
    { id: 4, src: '/images/gallery/team-meeting.jpg', category: 'team', title: 'Team Collaboration', description: 'Our dedicated professionals' },
    { id: 5, src: '/images/gallery/field-team.jpg', category: 'team', title: 'Field Operations', description: 'On-ground excellence' },
    { id: 6, src: '/images/gallery/lab-team.jpg', category: 'team', title: 'R&D Department', description: 'Innovation in action' },
    
    // Company & Facilities
    { id: 7, src: '/images/gallery/office-exterior.jpg', category: 'company', title: 'Corporate Office', description: 'Our headquarters' },
    { id: 8, src: '/images/gallery/warehouse.jpg', category: 'company', title: 'Storage Facility', description: 'State-of-the-art warehousing' },
    { id: 9, src: '/images/gallery/production.jpg', category: 'company', title: 'Production Unit', description: 'Quality manufacturing' },
    
    // Farmers & Impact
    { id: 10, src: '/images/gallery/farmer-training.jpg', category: 'farmers', title: 'Farmer Training', description: 'Empowering through education' },
    { id: 11, src: '/images/gallery/field-visit.jpg', category: 'farmers', title: 'Field Visits', description: 'Direct farmer engagement' },
    { id: 12, src: '/images/gallery/harvest.jpg', category: 'farmers', title: 'Successful Harvest', description: 'Results that matter' },
    
    // Products
    { id: 13, src: '/images/gallery/products-display.jpg', category: 'products', title: 'Product Range', description: 'Comprehensive solutions' },
    { id: 14, src: '/images/gallery/packaging.jpg', category: 'products', title: 'Premium Packaging', description: 'Quality assured' },
    
    // Events & Awards
    { id: 15, src: '/images/gallery/award-ceremony.jpg', category: 'events', title: 'Industry Recognition', description: 'Excellence acknowledged' },
    { id: 16, src: '/images/gallery/expo-booth.jpg', category: 'events', title: 'Agricultural Expo', description: 'Industry participation' },
  ],
  videos: [
    { id: 101, src: '/videos/drone-demo.mp4', thumbnail: '/images/gallery/video-thumb-1.jpg', category: 'technology', title: 'Drone Technology Demo', duration: '3:45', description: 'Watch our advanced drone systems in action' },
    { id: 102, src: '/videos/company-tour.mp4', thumbnail: '/images/gallery/video-thumb-2.jpg', category: 'company', title: 'Factory Tour', duration: '5:20', description: 'Inside our state-of-the-art facilities' },
    { id: 103, src: '/videos/farmer-testimonial.mp4', thumbnail: '/images/gallery/video-thumb-3.jpg', category: 'farmers', title: 'Success Stories', duration: '2:30', description: 'Hear from our satisfied farmers' },
  ],
};

const categories = [
  { id: 'all', name: 'All', icon: Layers, count: 19 },
  { id: 'technology', name: 'Technology', icon: Cpu, count: 3 },
  { id: 'team', name: 'Our Team', icon: Users, count: 3 },
  { id: 'company', name: 'Company', icon: Building2, count: 3 },
  { id: 'farmers', name: 'Farmers', icon: Sprout, count: 3 },
  { id: 'products', name: 'Products', icon: ImageIcon, count: 2 },
  { id: 'events', name: 'Events', icon: Award, count: 2 },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const filteredItems: (PhotoItem | VideoItem)[] = galleryData[activeTab].filter(
    item => selectedCategory === 'all' || item.category === selectedCategory
  );

  // Lightbox Navigation
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
    setIsPlaying(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [lightboxOpen, currentImageIndex]);

  const currentItem = filteredItems[currentImageIndex];

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
            <Camera className="w-4 h-4" />
            Visual Journey
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Gallery
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Explore our journey through images and videos showcasing innovation, teamwork, and impact across Indian agriculture.
          </p>
        </div>
      </section>

      {/* Main Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Switcher */}
          <div className="flex justify-center gap-3 mb-12">
            <button
              onClick={() => { setActiveTab('photos'); setSelectedCategory('all'); }}
              className={`group flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                activeTab === 'photos'
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/30'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <ImageIcon className={`w-5 h-5 ${activeTab === 'photos' ? 'text-white' : 'text-green-600'}`} />
              Photos
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                activeTab === 'photos' ? 'bg-white/20' : 'bg-green-100 text-green-700'
              }`}>
                {galleryData.photos.length}
              </span>
            </button>
            
            <button
              onClick={() => { setActiveTab('videos'); setSelectedCategory('all'); }}
              className={`group flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                activeTab === 'videos'
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/30'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Video className={`w-5 h-5 ${activeTab === 'videos' ? 'text-white' : 'text-green-600'}`} />
              Videos
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                activeTab === 'videos' ? 'bg-white/20' : 'bg-green-100 text-green-700'
              }`}>
                {galleryData.videos.length}
              </span>
            </button>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`group flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-green-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-700'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.name}
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  selectedCategory === cat.id ? 'bg-white/20' : 'bg-gray-100'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                {/* Image/Thumbnail */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={activeTab === 'videos' ? (item as VideoItem).thumbnail : (item as PhotoItem).src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        {activeTab === 'videos' ? (
                          <Play className="w-8 h-8 text-green-600 ml-1" />
                        ) : (
                          <ZoomIn className="w-8 h-8 text-green-600" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Video Duration Badge */}
                  {activeTab === 'videos' && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/70 backdrop-blur-sm text-white text-xs font-semibold rounded-lg">
                      {(item as VideoItem).duration}
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-green-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    {categories.find(c => c.id === item.category)?.name}
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1 group-hover:text-green-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="w-10 h-10 text-gray-400" />
              </div>
              <p className="text-gray-500 text-lg">No items found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && currentItem && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-50"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation Arrows */}
          {filteredItems.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </>
          )}

          {/* Content */}
          <div className="flex items-center justify-center min-h-screen p-4 sm:p-8">
            <div className="max-w-6xl w-full">
              {/* Image/Video Container */}
              <div className="relative bg-black rounded-2xl overflow-hidden mb-6">
                {activeTab === 'photos' ? (
                  <div className="relative aspect-video">
                    <Image
                      src={(currentItem as PhotoItem).src}
                      alt={currentItem.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="relative aspect-video bg-black">
                    <video
                      ref={videoRef}
                      src={(currentItem as VideoItem).src}
                      className="w-full h-full"
                      controls
                      autoPlay
                    />
                  </div>
                )}
              </div>

              {/* Info Bar */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="inline-block px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full mb-3">
                      {categories.find(c => c.id === currentItem.category)?.name}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{currentItem.title}</h3>
                    <p className="text-gray-300">{currentItem.description}</p>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                      <Share2 className="w-5 h-5 text-white" />
                    </button>
                    <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                      <Download className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                {/* Counter */}
                <div className="mt-4 text-center text-gray-400 text-sm">
                  {currentImageIndex + 1} / {filteredItems.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Want to See More?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Follow us on social media for daily updates and behind-the-scenes content.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="px-8 py-4 bg-white text-green-700 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
              Follow on Instagram
            </a>
            <a href="#" className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
// app/products/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Search, Filter, Sprout, Shield, 
  FlaskConical, Sun, Droplets, Leaf, CheckCircle2
} from 'lucide-react';

// --- DATA: Product Catalog ---
const categories = ["All", "Insecticides", "Fungicides", "Plant Growth Regulators", "Bio-Fertilizers"];

const products = [
  {
    id: 1,
    name: "Bacilli",
    category: "Bio-Fertilizers",
    activeIngredient: "Immunomodulator",
    description: "Contains beneficial Bacillus bacteria for soil health. Improves root growth and disease resistance.",
    features: ["soil health", "disease resistance", "root strength"],
    // crops: "Cotton, Paddy, Vegetables",
    image: "/images/product-bottle-1a.jpg", 
    isNew: true
  },
  {
    id: 2,
    name: "Attract",
    category: "Plant Growth Regulators",
    activeIngredient: "Mixture of Micro Nutrients",
    description: "Used to attract pollinators or pests into traps. Improves crop fruit setting indirectly.",
    features: ["pest attraction", "trap efficiency", "population control"
],
    // crops: "Non-cropped areas, Tea",
    image: "/images/product-bottle-2b.jpg",
    isNew: false
  },
  {
    id: 3,
    name: "Miyaku",
    category: "Insecticides",
    activeIngredient: "Agricultural Use",
    description: "Controls sucking and chewing pests. Commonly used in vegetables and field crops.",
    features: ["pest control", "quick action", "systemic protection"
],
    // crops: "Potato, Tomato, Grapes",
    image: "/images/product-bottle-3.jpg",
    isNew: false
  },
  {
    id: 4,
    name: "Shri Gypsum",
    category: "Plant Growth Regulators",
    activeIngredient: "Gypsum Granuler",
    description: "Supplies calcium and sulfur to soil. Improves soil structure and reduces salinity",
    features: ["soil improvement", "calcium supply", "salinity control"],
    // crops: "Sugarcane, Paddy, Fruits",
    image: "/images/product-bottle-4.jpg",
    isNew: true
  },
  {
    id: 5,
    name: "M Rayza",
    category: "Plant Growth Regulators",
    activeIngredient: "Bio Extract Mixture",
    description: "Enhances root development and early plant growth. Improves nutrient uptake.",
    features: ["root growth", "nutrient uptake", "early vigor"],
    // crops: "All Crops",
    image: "/images/product-bottle-5.jpg",
    isNew: false
  },
  {
    id: 6,
    name: "Bash",
    category: "Insecticides",
    activeIngredient: "Ferrous Sulphate 19%",
    description: "Specialized acaricide for the control of mites. Acts by contact and fumigant action, effectively breaking the mite resistance cycle.",
    features: [ "instant knockdown", "pest killing", "rapid control"
],
    // crops: "Tea, Chilli, Brinjal",
    image: "/images/product-bottle-6.jpg",
    isNew: false
  },


  {
    id: 7,
    name: "Sarpanch",
    category: "Plant Growth Regulators",
    activeIngredient: "Soil Conditioner",
    description: "Organic root developer that enhances nutrient uptake and water absorption efficiency. Promotes vigorous root system development.",
    features: ["growth regulation", "plant strength", "yield enhancement"
],
    // crops: "All Crops",
    image: "/images/product-bottle-7.jpg",
    isNew: false
  },


  {
    id: 8,
    name: "Grace",
    category: "Fungicides",
    activeIngredient: "Micro Nutrient Mixture",
    description: "Protects crops from fungal diseases. Works as a preventive and curative product.",
    features: ["fungal protection", "disease prevention", "crop safety"
],
    // crops: "All Crops",
    image: "/images/product-bottle-8.jpg",
    isNew: false
  },


  {
    id: 9,
    name: "Kisan",
    category: "Bio-Fertilizers",
    activeIngredient: "Organic Mixture",
    description: "Provides essential macro and micro nutrients. Improves overall crop vigor.",
    features: ["balanced nutrition", "crop vigor", "healthy growth"],
    // crops: "All Crops",
    image: "/images/product-bottle-9.jpg",
    isNew: false
  },


  {
    id: 10,
    name: "Kranti",
    category: "Insecticides",
    activeIngredient: "Phosphate Rich Organic Mixture",
    description: "Organic root developer that enhances nutrient uptake and water absorption efficiency. Promotes vigorous root system development.",
    features: ["broad protection", "pest management", "yield safety"
],
    // crops: "All Crops",
    image: "/images/product-bottle-10.jpg",
    isNew: false
  },


  {
    id: 11,
    name: "Ujala",
    category: "Plant Growth Regulators",
    activeIngredient: "Molasses Granular",
    description: "Enhances leaf brightness and photosynthesis. Improves crop appearance and yield.",
    features: ["leaf greening", "shine improvement", "photosynthesis boost"
],
    // crops: "All Crops",
    image: "/images/product-bottle-11.jpg",
    isNew: false
  },


  {
    id: 12,
    name: "Leaf Ultra",
    category: "Bio-Fertilizers",
    activeIngredient: "Bio Extract Mixture",
    description: "Supplies essential trace elements through leaves. Corrects nutrient deficiencies quickly.",
    features: ["micronutrient supply", "deficiency correction", "fast absorption"],
    // crops: "All Crops",
    image: "/images/product-bottle-12.jpg",
    isNew: false
  },


  {
    id: 13,
    name: "Leaf Pro",
    category: "Plant Growth Regulators",
    activeIngredient: "Soil and Plant Booster",
    description: "Boosts leaf development and chlorophyll formation. Helps in faster vegetative growth.",
    features: ["vegetative growth", "chlorophyll boost", "leaf strength"
],
    // crops: "All Crops",
    image: "/images/product-bottle-13.jpg",
    isNew: false
  },
   
  {
    id: 14,
    name: "Trust",
    category: "Bio-Fertilizers",
    activeIngredient: "Micro Nutrients",
    description: "Organic root developer that enhances nutrient uptake and water absorption efficiency. Promotes vigorous root system development.",
    features: ["soil fertility", "microbial activity", "sustainable growth"],
    // crops: "All Crops",
    image: "/images/product-bottle-14.jpg",
    isNew: false
  },

  {
    id: 15,
    name: "Dhanvarsha",
    category: "Bio-Fertilizers",
    activeIngredient: "Potash",
    description: " Increases flowering and grain filling. Improves final crop yield.",
    features: ["yield booster", "grain filling", "crop productivity"
],
    // crops: "All Crops",
    image: "/images/product-bottle-15.jpg",
    isNew: false
  },

  {
    id: 16,
    name: "Refresh",
    category: "Insecticides",
    activeIngredient: "Fe-19% S-10%",
    description: "Helps crops recover from heat, drought, or pesticide stress. Restores plant vitality",
    features: ["stress relief", "plant recovery", "vigor restoration"
],
    // crops: "All Crops",
    image: "/images/product-bottle-16.jpg",
    isNew: false
  },

  {
    id: 17,
    name: "Dev",
    category: "Insecticides",
    activeIngredient: "NPK 19:19:19",
    description: "Used for controlling major crop pests. Provides long-lasting protection.",
    features: [ "long protection", "pest control", "residual action"
],
    // crops: "All Crops",
    image: "/images/product-bottle-17.jpg",
    isNew: false
  },

  {
    id: 18,
    name: "Enriched",
    category: "Bio-Fertilizers",
    activeIngredient: "Mycorrhiza",
    description: "Contains enriched nutrients for better plant nutrition. Improves crop quality and growth.",
    features: ["nutrient fortification", "growth improvement", "quality enhancement"
],
    crops: "All Crops",
    image: "/images/product-bottle-18.jpg",
    isNew: false
  },

  {
    id: 19,
    name: "Fighter",
    category: "Insecticides",
    activeIngredient: "Chlorantraniliprole 18.5%",
    description: "Strong action against resistant pests. Used in severe infestation conditions.",
    features: ["strong control", "resistance management", "heavy infestation"
],
    // crops: "All Crops",
    image: "/images/product-bottle-19.jpg",
    isNew: false
  },

  {
    id: 20,
    name: "Shri-Da Potash",
    category: "Plant Growth Regulators",
    activeIngredient: "Bio Potash Liq",
    description: "Supplies potassium for strong stems and better fruit quality. Improves disease resistance.",
    features: ["potassium supply", "fruit quality", "stem strength"
],
    // crops: "All Crops",
    image: "/images/product-bottle-20.jpg",
    isNew: false
  },

  {
    id: 21,
    name: "Blossam",
    category: "Plant Growth Regulators",
    activeIngredient: "Silicon Based Sticker",
    description: "Promotes flowering and fruit set. Reduces flower drop.Promotes vigorous root system development.",
    features: ["flower induction", "fruit setting", "drop reduction"
],
    // crops: "All Crops",
    image: "/images/product-bottle-21.jpg",
    isNew: false
  },

  {
    id: 22,
    name: "Nitro",
    category: "Plant Growth Regulators",
    activeIngredient: "Nitrobenzene 20%",
    description: "Boosts vegetative growth rapidly. Increases leaf size and greenness. Promotes vigorous root system development.",
    features: ["nitrogen boost", "leaf growth", "green effect"
],
    // crops: "All Crops",
    image: "/images/product-bottle-22.jpg",
    isNew: false
  },

  {
    id: 23,
    name: "Greeny",
    category: "Plant Growth Regulators",
    activeIngredient: "Bio Stimultant",
    description: "Improves chlorophyll content and plant greenness. Enhances photosynthesis efficiency.",
    features: ["chlorophyll activation", "healthy growth", "lush appearance"
],
    // crops: "All Crops",
    image: "/images/product-bottle-23.jpg",
    isNew: false
  },

  {
    id: 24,
    name: "Shinjo",
    category: "Fungicides",
    activeIngredient: "Humic Acid 12%",
    description: " Controls fungal diseases like blight and rot. Protects crop throughout growth.",
    features: ["fungal control", "disease suppression", "crop protection"
],
    // crops: "All Crops",
    image: "/images/product-bottle-24.jpg",
    isNew: false
  },

  {
    id: 25,
    name: "Spark",
    category: "Plant Growth Regulators",
    activeIngredient: "Micro Nutrient Mixture",
    description: "Triggers quick plant response and growth. Used during stress or early stages.",
    features: ["growth stimulation", "early vigor", "quick response"],
    // crops: "All Crops",
    image: "/images/product-bottle-25.jpg",
    isNew: false
  },

  {
    id: 26,
    name: "Starch",
    category: "Bio-Fertilizers",
    activeIngredient: "Organic Manure Active Constituent",
    description: " Helps in carbohydrate formation in plants. Improves grain weight and fruit quality.",
    features: ["weight enhancement", "quality improvement", "grain filling"],
    // crops: "All Crops",
    image: "/images/product-bottle-26.jpg",
    isNew: false
  },

];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter Logic
  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.activeIngredient.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* 1. Hero Section: Fixed Positioning with pt-20 */}
      <section className="relative h-[60vh] min-h-[555px] flex items-center pt-20"> 
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {/* <Image
            src="/images/lab-field-mix.jpg"
            alt="Advanced Agricultural Research"
            fill
            className="object-cover"
            priority
          /> */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-950/95 via-green-900/90 to-emerald-900/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-medium mb-6 backdrop-blur-sm">
              <FlaskConical className="w-4 h-4" />
              <span>Scientifically Formulated</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Advanced Crop <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                Protection Solutions
              </span>
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-2xl">
              From soil to harvest, our comprehensive range of high-performance agrochemicals ensures maximum yield, crop safety, and sustainable farming practices.
            </p>
            
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <p className="text-3xl font-bold text-white">12+</p>
                <p className="text-sm text-green-200 mt-1">Specialized Formulas</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-sm text-green-200 mt-1">Quality Tested</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">ISO</p>
                <p className="text-sm text-green-200 mt-1">Certified Plant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Filter & Search Bar */}
      <section className="sticky top-0 mt-5 z-40 bg-white shadow-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Horizontal Scrollable Categories */}
            <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              <div className="flex gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === cat
                        ? "bg-green-600 text-white shadow-lg shadow-green-500/25"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                placeholder="Search products or ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product Grid */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Results Count */}
        <div className="mb-8 flex items-center justify-between">
          <p className="text-gray-500">
            Showing <span className="font-semibold text-gray-900">{filteredProducts.length}</span> results for 
            <span className="font-semibold text-green-600"> {activeCategory}</span>
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-green-900/5 transition-all duration-300 flex flex-col"
              >
                {/* Image Area */}
                <div className="relative h-64 bg-gradient-to-b from-gray-50 to-white p-6 flex items-center justify-center overflow-hidden">
                  {/* Badge */}
                  {product.isNew && (
                    <span className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                      New Arrival
                    </span>
                  )}
                  
                  {/* Category Tag */}
                  <span className="absolute top-4 right-4 bg-white/80 backdrop-blur border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1 rounded-full z-10">
                    {product.category}
                  </span>

                  {/* Product Image */}
                  <div className="relative w-40 h-48 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain drop-shadow-xl"
                    />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Title & Ingredient */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-green-600 font-medium bg-green-50 inline-block px-2 py-1 rounded-md">
                      {product.activeIngredient}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {product.description}
                  </p>

                  {/* Tech Specs / Crops */}
                  <div className="mt-auto pt-4 border-t border-gray-100 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, i) => (
                        <span key={i} className="inline-flex items-center gap-1 text-[11px] font-semibold text-gray-500 bg-gray-50 border border-gray-100 px-2 py-1 rounded">
                          <CheckCircle2 className="w-3 h-3 text-green-500" />
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    {/* <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Sprout className="w-4 h-4" />
                      <span className="truncate max-w-[150px]">{product.crops}</span>
                    </div> */}
                    {/* The "Details" Link has been removed here */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or category filter.</p>
            <button 
              onClick={() => {setSearchQuery(""); setActiveCategory("All")}}
              className="mt-4 text-green-600 font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>

      {/* 4. Why Choose Us / Trust Badges */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Quality Assured</h4>
                <p className="text-sm text-gray-500">Every batch undergoes rigorous lab testing.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Eco-Conscious</h4>
                <p className="text-sm text-gray-500">Formulations designed for minimal environmental impact.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                <Droplets className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Precise Action</h4>
                <p className="text-sm text-gray-500">Targeted control with optimal dosage requirements.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                <Sun className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Climate Resilient</h4>
                <p className="text-sm text-gray-500">Stable performance across varying weather conditions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="bg-green-900 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Bulk Quantities or Technical Advice?</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Our agricultural experts are ready to assist you with customized crop protection schedules and bulk dealership opportunities.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/query" 
              className="px-8 py-3 bg-white text-green-900 rounded-full font-bold hover:bg-green-50 transition-colors"
            >
              Join Us
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-3 border border-green-400 text-white rounded-full font-bold hover:bg-green-800 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

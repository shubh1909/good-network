'use client';

import React, { useState, useMemo } from 'react';
import { Search, MapPin, Phone, Mail, Globe, Filter, Building2 } from 'lucide-react';

interface Organization {
  id: number;
  name: string;
  city: string;
  description: string;
  contact: string;
  email: string;
  website?: string;
  category: string;
}

// Sample data with enhanced information
const organizationsData: Organization[] = [
  {
    id: 1,
    name: "Green Earth Foundation",
    city: "Mumbai",
    description: "Environmental conservation and awareness programs focused on creating sustainable communities and promoting eco-friendly practices.",
    contact: "+91-9876543210",
    email: "contact@greenearth.org",
    website: "www.greenearth.org",
    category: "Environment"
  },
  {
    id: 2,
    name: "Education for All",
    city: "Delhi",
    description: "Providing quality education to underprivileged children through innovative teaching methods and community engagement.",
    contact: "+91-9876543211",
    email: "info@educationforall.org",
    category: "Education"
  },
  {
    id: 3,
    name: "Health Care Plus",
    city: "Bangalore",
    description: "Comprehensive healthcare services for rural communities including free medical camps and health awareness programs.",
    contact: "+91-9876543212",
    email: "help@healthcareplus.org",
    website: "www.healthcareplus.org",
    category: "Healthcare"
  },
  {
    id: 4,
    name: "Women Empowerment Society",
    city: "Mumbai",
    description: "Empowering women through skill development programs, entrepreneurship training, and financial literacy initiatives.",
    contact: "+91-9876543213",
    email: "contact@wes.org",
    website: "www.wes.org",
    category: "Women Empowerment"
  },
  {
    id: 5,
    name: "Digital Literacy Hub",
    city: "Chennai",
    description: "Bridging the digital divide by teaching computer skills and internet literacy to underserved communities.",
    contact: "+91-9876543214",
    email: "info@digitalhub.org",
    category: "Technology"
  },
  {
    id: 6,
    name: "Community Kitchen Network",
    city: "Kolkata",
    description: "Fighting hunger through community kitchens and food distribution programs for those in need.",
    contact: "+91-9876543215",
    email: "help@communitykitchen.org",
    website: "www.communitykitchen.org",
    category: "Food Security"
  }
];

const categoryColors: { [key: string]: string } = {
  "Environment": "bg-green-100 text-green-800",
  "Education": "bg-blue-100 text-blue-800",
  "Healthcare": "bg-red-100 text-red-800",
  "Women Empowerment": "bg-purple-100 text-purple-800",
  "Technology": "bg-indigo-100 text-indigo-800",
  "Food Security": "bg-orange-100 text-orange-800"
};

const Organizations: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Get unique cities and categories for filter dropdowns
  const uniqueCities = useMemo(() => {
    return Array.from(new Set(organizationsData.map(org => org.city))).sort();
  }, []);

  const uniqueCategories = useMemo(() => {
    return Array.from(new Set(organizationsData.map(org => org.category))).sort();
  }, []);

  // Filter organizations based on search term, city, and category
  const filteredOrganizations = useMemo(() => {
    return organizationsData.filter(org => {
      const matchesSearch = org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           org.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCity = selectedCity === '' || org.city === selectedCity;
      const matchesCategory = selectedCategory === '' || org.category === selectedCategory;
      
      return matchesSearch && matchesCity && matchesCategory;
    });
  }, [searchTerm, selectedCity, selectedCategory]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCity('');
    setSelectedCategory('');
  };

  return (
    <div className="min-h-screen" style={{backgroundColor: '#fcf9f5'}}>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-violet-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-violet-100 bg-clip-text text-transparent">
              Partner Organizations
            </h1>
            <p className="text-xl text-violet-100 max-w-2xl mx-auto">
              Connect with verified NGOs and organizations making a difference in communities across India
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-8">
        {/* Search and Filters Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-0">
          {/* Main Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search organizations by name or description..."
              className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all"
            />
          </div>

          {/* Filter Toggle Button */}
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-gray-600 hover:text-violet-600 transition-colors"
            >
              <Filter className="w-4 h-4" />
              <span className="font-medium">
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </span>
            </button>
            
            {(selectedCity || selectedCategory) && (
              <button
                onClick={clearFilters}
                className="text-sm text-violet-600 hover:text-violet-800 transition-colors"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* Collapsible Filters */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t pt-6">
              {/* City Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  <MapPin className="inline w-4 h-4 mr-2" />
                  City
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all"
                >
                  <option value="">All Cities</option>
                  {uniqueCities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  <Building2 className="inline w-4 h-4 mr-2" />
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all"
                >
                  <option value="">All Categories</option>
                  {uniqueCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Results Summary */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-lg text-gray-700">
              <span className="font-semibold text-violet-600">{filteredOrganizations.length}</span> 
              {' '}of {organizationsData.length} organizations found
            </p>
          </div>
        </div>

        {/* Organizations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredOrganizations.map(org => (
            <div key={org.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {/* Category Badge */}
              <div className="p-6 pb-0">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${categoryColors[org.category] || 'bg-gray-100 text-gray-800'}`}>
                  {org.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-violet-600 transition-colors">
                  {org.name}
                </h3>
                
                {/* Location */}
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-2 text-violet-500" />
                  <span className="font-medium">{org.city}</span>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {org.description}
                </p>
                
                {/* Contact Information */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="w-4 h-4 mr-3 text-violet-600" />
                    <span>{org.contact}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="w-4 h-4 mr-3 text-purple-600" />
                    <span className="truncate">{org.email}</span>
                  </div>
                  {org.website && (
                    <div className="flex items-center text-sm text-violet-600">
                      <Globe className="w-4 h-4 mr-3 text-violet-700" />
                      <span className="truncate">{org.website}</span>
                    </div>
                  )}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-violet-600 to-purple-700 text-white py-3 px-4 rounded-xl hover:from-violet-700 hover:to-purple-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    Contact
                  </button>
                  <button className="px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-violet-300 hover:bg-violet-50 transition-all duration-300 text-gray-600 hover:text-violet-600">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results State */}
        {filteredOrganizations.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-600 mb-3">No organizations found</h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              We could not find any organizations matching your criteria. Try adjusting your search or filters.
            </p>
            <button
              onClick={clearFilters}
              className="bg-violet-600 text-white py-3 px-6 rounded-xl hover:bg-violet-700 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Organizations;
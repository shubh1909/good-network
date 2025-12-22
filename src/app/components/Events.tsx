'use client';

import React, { useState, useMemo } from 'react';
import { Search, MapPin, Calendar, Clock, Users, Phone, Tag, Filter } from 'lucide-react';

interface Event {
  id: number;
  name: string;
  city: string;
  date: string;
  time: string;
  description: string;
  organizerName: string;
  organizerContact: string;
  location: string;
  capacity: number;
  eventType: string;
}

// Sample data with more diverse events
const eventsData: Event[] = [
  {
    id: 1,
    name: "Clean Mumbai Drive",
    city: "Mumbai",
    date: "2025-10-15",
    time: "09:00",
    description: "Join us for a city-wide cleanliness drive to make Mumbai cleaner and greener. Together we can make a difference in our community.",
    organizerName: "Green Earth Foundation",
    organizerContact: "+91-9876543210",
    location: "Marine Drive",
    capacity: 200,
    eventType: "Community Service"
  },
  {
    id: 2,
    name: "Education Workshop",
    city: "Delhi",
    date: "2025-10-20",
    time: "14:00",
    description: "Interactive workshop on modern teaching methods for rural educators. Learn innovative techniques to engage students.",
    organizerName: "Education for All",
    organizerContact: "+91-9876543211",
    location: "India Gate Community Center",
    capacity: 50,
    eventType: "Workshop"
  },
  {
    id: 3,
    name: "Health Awareness Camp",
    city: "Bangalore",
    date: "2025-10-25",
    time: "10:00",
    description: "Free health checkups and awareness session for rural communities. Professional medical staff will be available.",
    organizerName: "Health Care Plus",
    organizerContact: "+91-9876543212",
    location: "Cubbon Park",
    capacity: 300,
    eventType: "Health Camp"
  },
  {
    id: 4,
    name: "Women Skills Development",
    city: "Mumbai",
    date: "2025-11-01",
    time: "11:00",
    description: "Comprehensive skill development program for women entrepreneurs. Network with like-minded individuals.",
    organizerName: "Women Empowerment Society",
    organizerContact: "+91-9876543213",
    location: "Bandra Community Hall",
    capacity: 100,
    eventType: "Training"
  },
  {
    id: 5,
    name: "Digital Literacy Drive",
    city: "Chennai",
    date: "2025-11-05",
    time: "15:30",
    description: "Teaching basic computer and internet skills to elderly citizens. Bridging the digital divide one person at a time.",
    organizerName: "Tech for Good",
    organizerContact: "+91-9876543214",
    location: "Central Library",
    capacity: 75,
    eventType: "Workshop"
  },
  {
    id: 6,
    name: "Food Distribution Drive",
    city: "Kolkata",
    date: "2025-11-10",
    time: "18:00",
    description: "Weekly food distribution program for underprivileged families. Every helping hand makes a difference.",
    organizerName: "Helping Hands NGO",
    organizerContact: "+91-9876543215",
    location: "Howrah Bridge Area",
    capacity: 150,
    eventType: "Community Service"
  }
];

const eventTypeColors: { [key: string]: string } = {
  "Community Service": "bg-green-100 text-green-800",
  "Workshop": "bg-blue-100 text-blue-800",
  "Health Camp": "bg-red-100 text-red-800",
  "Training": "bg-purple-100 text-purple-800"
};

const Events: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedEventType, setSelectedEventType] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Get unique cities and event types for filter dropdowns
  const uniqueCities = useMemo(() => {
    return Array.from(new Set(eventsData.map(event => event.city))).sort();
  }, []);

  const uniqueEventTypes = useMemo(() => {
    return Array.from(new Set(eventsData.map(event => event.eventType))).sort();
  }, []);

  // Filter events based on search term, city, and event type
  const filteredEvents = useMemo(() => {
    return eventsData.filter(event => {
      const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           event.organizerName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCity = selectedCity === '' || event.city === selectedCity;
      const matchesEventType = selectedEventType === '' || event.eventType === selectedEventType;
      
      return matchesSearch && matchesCity && matchesEventType;
    });
  }, [searchTerm, selectedCity, selectedEventType]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':');
    const time = new Date();
    time.setHours(parseInt(hours), parseInt(minutes));
    return time.toLocaleTimeString('en-IN', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCity('');
    setSelectedEventType('');
  };

  return (
    <div className="min-h-screen" style={{backgroundColor: '#fcf9f5'}}>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
              Discover Events
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Find meaningful volunteer opportunities and community events near you
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
              placeholder="Search events by name, description, or organizer..."
              className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
            />
          </div>

          {/* Filter Toggle Button */}
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
            >
              <Filter className="w-4 h-4" />
              <span className="font-medium">
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </span>
            </button>
            
            {(selectedCity || selectedEventType) && (
              <button
                onClick={clearFilters}
                className="text-sm text-green-600 hover:text-green-800 transition-colors"
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
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                >
                  <option value="">All Cities</option>
                  {uniqueCities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              {/* Event Type Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  <Tag className="inline w-4 h-4 mr-2" />
                  Event Type
                </label>
                <select
                  value={selectedEventType}
                  onChange={(e) => setSelectedEventType(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                >
                  <option value="">All Types</option>
                  {uniqueEventTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
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
              <span className="font-semibold text-green-600">{filteredEvents.length}</span> 
              {' '}of {eventsData.length} events found
            </p>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredEvents.map(event => (
            <div key={event.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {/* Event Type Badge */}
              <div className="p-6 pb-0">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${eventTypeColors[event.eventType] || 'bg-gray-100 text-gray-800'}`}>
                  {event.eventType}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                  {event.name}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {event.description}
                </p>
                
                {/* Event Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-3 text-green-500" />
                    <div>
                      <p className="font-medium">{event.location}</p>
                      <p className="text-sm text-gray-500">{event.city}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-3 text-emerald-500" />
                    <div>
                      <p className="font-medium">{formatDate(event.date)}</p>
                      <p className="text-sm text-gray-500 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {formatTime(event.time)}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-3 text-green-600" />
                    <div>
                      <p className="font-medium">{event.capacity} spots</p>
                      <p className="text-sm text-gray-500">Available</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 mr-3 text-green-700" />
                    <div>
                      <p className="font-medium text-sm">{event.organizerContact}</p>
                      <p className="text-sm text-gray-500">{event.organizerName}</p>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-green-600 to-emerald-700 text-white py-3 px-6 rounded-xl hover:from-green-700 hover:to-emerald-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    Register Now
                  </button>
                  <button className="px-6 py-3 border-2 border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-300 text-gray-600 hover:text-green-600">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-600 mb-3">No events found</h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              We could not find any events matching your criteria. Try adjusting your search or filters.
            </p>
            <button
              onClick={clearFilters}
              className="bg-green-600 text-white py-3 px-6 rounded-xl hover:bg-green-700 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
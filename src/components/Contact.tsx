import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Zap, DollarSign, Target } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    revenue: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-black rounded-full text-sm font-black mb-6 animate-pulse">
            <Zap className="h-5 w-5 mr-2" />
            FREE $10K CAMPAIGN AUDIT
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6">
            READY TO 
            <span className="block bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              DOMINATE?
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto font-medium px-4">
            Get a FREE campaign audit worth $10,000. We'll show you exactly how to 10x your results in the next 90 days.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 border border-gray-700 p-6 lg:p-8 rounded-2xl">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">GET YOUR FREE AUDIT</h3>
            <p className="text-gray-400 mb-6 lg:mb-8 text-sm sm:text-base">Fill this out and we'll audit your campaigns for FREE (normally $10K)</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-white mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label htmlFor="revenue" className="block text-sm font-bold text-white mb-2">
                    Monthly Revenue *
                  </label>
                  <select
                    id="revenue"
                    name="revenue"
                    required
                    value={formData.revenue}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
                  >
                    <option value="">Select revenue range</option>
                    <option value="0-10k">$0 - $10K</option>
                    <option value="10k-50k">$10K - $50K</option>
                    <option value="50k-100k">$50K - $100K</option>
                    <option value="100k-500k">$100K - $500K</option>
                    <option value="500k+">$500K+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-bold text-white mb-2">
                  Ad Spend Budget *
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
                >
                  <option value="">Select ad spend budget</option>
                  <option value="5k-10k">$5K - $10K/month</option>
                  <option value="10k-25k">$10K - $25K/month</option>
                  <option value="25k-50k">$25K - $50K/month</option>
                  <option value="50k-100k">$50K - $100K/month</option>
                  <option value="100k+">$100K+/month</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-white mb-2">
                  What's Your Biggest Challenge? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
                  placeholder="Tell us about your biggest advertising challenge..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-black text-base sm:text-lg hover:from-red-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center group"
              >
                GET MY FREE $10K AUDIT
                <Send className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform duration-200" />
              </button>
            </form>
          </div>

          {/* Contact Information & Guarantees */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-gray-900 border border-gray-700 p-6 lg:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-black text-white mb-6">CONTACT THE LEGENDS</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base">Email the Team</h4>
                    <p className="text-gray-400 text-sm sm:text-base">dominate@advantagepro.com</p>
                    <p className="text-gray-400 text-sm sm:text-base">results@advantagepro.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base">Call the Legends</h4>
                    <p className="text-gray-400 text-sm sm:text-base">+1 (555) DOMINATE</p>
                    <p className="text-gray-400 text-sm sm:text-base">+1 (555) 366-4628</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base">HQ Location</h4>
                    <p className="text-gray-400 text-sm sm:text-base">1337 Performance Blvd</p>
                    <p className="text-gray-400 text-sm sm:text-base">Domination City, CA 90210</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 lg:p-8 rounded-2xl text-white">
              <h3 className="text-xl sm:text-2xl font-black mb-6">OUR IRON-CLAD GUARANTEES</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="h-6 w-6" />
                  <span className="font-bold text-sm sm:text-base">10x ROI or we work for FREE</span>
                </div>
                <div className="flex items-center space-x-3">
                  <DollarSign className="h-6 w-6" />
                  <span className="font-bold text-sm sm:text-base">Results in 90 days or full refund</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6" />
                  <span className="font-bold text-sm sm:text-base">24/7 campaign monitoring</span>
                </div>
              </div>
            </div>

            {/* Response time */}
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-4 sm:p-6 rounded-2xl text-black text-center">
              <h4 className="text-lg sm:text-xl font-black mb-2">⚡ LIGHTNING FAST RESPONSE</h4>
              <p className="font-bold text-sm sm:text-base">We respond within 15 minutes during business hours!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
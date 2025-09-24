import React from 'react';
import { Zap, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, TrendingUp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-red-600 to-pink-600 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-black">AdVantage Pro</span>
            </div>
            <p className="text-gray-400 leading-relaxed font-medium text-sm sm:text-base">
              The #1 performance advertising agency that turns ad spend into profit machines. We don't just run campaigns - we engineer dominance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-black mb-4 text-red-400">DOMINATION SERVICES</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200 font-semibold text-sm sm:text-base">Google Ads Mastery</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200 font-semibold text-sm sm:text-base">Facebook/Meta Domination</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200 font-semibold text-sm sm:text-base">YouTube Ads Explosion</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200 font-semibold text-sm sm:text-base">LinkedIn Lead Generation</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200 font-semibold text-sm sm:text-base">Performance Analytics</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200 font-semibold text-sm sm:text-base">Conversion Optimization</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base sm:text-lg font-black mb-4 text-blue-400">COMPANY</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors duration-200 font-semibold text-sm sm:text-base">About the Legends</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200 font-semibold text-sm sm:text-base">Success Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200 font-semibold text-sm sm:text-base">Join Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200 font-semibold text-sm sm:text-base">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200 font-semibold text-sm sm:text-base">Performance Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200 font-semibold text-sm sm:text-base">Media Kit</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base sm:text-lg font-black mb-4 text-green-400">GET RESULTS NOW</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-400" />
                <span className="font-semibold text-sm sm:text-base">dominate@advantagepro.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="font-semibold text-sm sm:text-base">+1 (555) DOMINATE</span>
              </div>
              <div className="mt-4 bg-gradient-to-r from-red-600 to-pink-600 p-3 sm:p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-white" />
                  <span className="text-white font-black text-sm sm:text-base">LIVE RESULTS</span>
                </div>
                <p className="text-white text-xs sm:text-sm font-bold">$2.4M+ generated this month</p>
                <p className="text-white text-xs sm:text-sm font-bold">847% average ROAS</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs sm:text-sm font-semibold text-center md:text-left">
              © 2025 AdVantage Pro. All rights reserved. We dominate, you profit.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200 font-semibold">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200 font-semibold">Terms of Domination</a>
              <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200 font-semibold">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
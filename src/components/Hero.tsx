import React from 'react';
import { ArrowRight, TrendingUp, Target, Zap, BarChart3 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full text-sm font-bold animate-bounce">
                <TrendingUp className="h-4 w-4 mr-2" />
                LIVE: +2,847% ROI This Month
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                DOMINATE
                <span className="block bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                  EVERY CLICK
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-medium">
                We don't just run ads - we engineer conversion machines. Our AI-powered campaigns generate 10x more leads while slashing your cost-per-acquisition by 70%.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:from-red-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 shadow-2xl flex items-center justify-center group">
                SCALE NOW - FREE AUDIT
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform duration-200" />
              </button>
              <button className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-yellow-400 text-yellow-400 rounded-lg font-bold text-base sm:text-lg hover:bg-yellow-400 hover:text-black transition-all duration-200 group">
                <BarChart3 className="mr-2 h-6 w-6" />
                VIEW LIVE RESULTS
              </button>
            </div>

            {/* Real-time metrics */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-green-400 animate-pulse">$2.4M+</div>
                <div className="text-xs sm:text-sm text-gray-400 font-semibold">Generated This Week</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-400 animate-pulse">847%</div>
                <div className="text-xs sm:text-sm text-gray-400 font-semibold">Avg ROAS</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-purple-400 animate-pulse">24/7</div>
                <div className="text-xs sm:text-sm text-gray-400 font-semibold">Campaign Monitoring</div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            {/* Dashboard mockup */}
            <div className="bg-gray-900 rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-bold text-base sm:text-lg">Campaign Performance</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-semibold">LIVE</span>
                </div>
              </div>
              
              {/* Fake metrics */}
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 sm:p-4 bg-gray-800 rounded-lg">
                  <div>
                    <div className="text-white font-semibold text-sm sm:text-base">Google Ads</div>
                    <div className="text-gray-400 text-sm">Search Campaign</div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-bold text-lg">+347%</div>
                    <div className="text-gray-400 text-sm">ROI</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 sm:p-4 bg-gray-800 rounded-lg">
                  <div>
                    <div className="text-white font-semibold text-sm sm:text-base">Facebook Ads</div>
                    <div className="text-gray-400 text-sm">Conversion Campaign</div>
                  </div>
                  <div className="text-right">
                    <div className="text-blue-400 font-bold text-lg">+892%</div>
                    <div className="text-gray-400 text-sm">ROAS</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 sm:p-4 bg-gray-800 rounded-lg">
                  <div>
                    <div className="text-white font-semibold text-sm sm:text-base">YouTube Ads</div>
                    <div className="text-gray-400 text-sm">Video Campaign</div>
                  </div>
                  <div className="text-right">
                    <div className="text-purple-400 font-bold text-lg">+156%</div>
                    <div className="text-gray-400 text-sm">CTR</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating performance cards */}
            <div className="absolute -top-4 sm:-top-8 -left-4 sm:-left-8 bg-gradient-to-r from-green-500 to-emerald-500 p-3 sm:p-4 rounded-xl shadow-2xl animate-bounce">
              <div className="text-white text-center">
                <div className="text-xl sm:text-2xl font-black">$47K</div>
                <div className="text-xs opacity-90">Revenue Today</div>
              </div>
            </div>

            <div className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 bg-gradient-to-r from-purple-500 to-pink-500 p-3 sm:p-4 rounded-xl shadow-2xl animate-bounce animation-delay-1000">
              <div className="text-white text-center">
                <div className="text-xl sm:text-2xl font-black">2,847</div>
                <div className="text-xs opacity-90">Leads Generated</div>
              </div>
            </div>

            <div className="absolute top-1/2 -left-3 sm:-left-6 bg-gradient-to-r from-blue-500 to-cyan-500 p-3 sm:p-4 rounded-xl shadow-2xl animate-bounce animation-delay-2000 hidden sm:block">
              <div className="text-white text-center">
                <div className="text-xl sm:text-2xl font-black">0.34¢</div>
                <div className="text-xs opacity-90">Cost Per Click</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
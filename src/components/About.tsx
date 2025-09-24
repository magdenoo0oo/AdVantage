import React from 'react';
import { Trophy, Zap, Target, TrendingUp, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    { icon: Trophy, label: "Campaigns Launched", value: "10,000+", color: "text-yellow-400" },
    { icon: TrendingUp, label: "Revenue Generated", value: "$500M+", color: "text-green-400" },
    { icon: Target, label: "Average ROAS", value: "847%", color: "text-blue-400" },
    { icon: Users, label: "Clients Scaled", value: "2,500+", color: "text-purple-400" }
  ];

  const certifications = [
    "Google Ads Premier Partner",
    "Facebook Marketing Partner", 
    "Microsoft Advertising Partner",
    "YouTube Certified",
    "LinkedIn Marketing Partner",
    "TikTok Marketing Partner"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20">
          <div>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-black rounded-full text-sm font-black mb-8 animate-pulse">
              <Award className="h-5 w-5 mr-2" />
              #1 PERFORMANCE AGENCY
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-8 leading-tight">
              WE EAT, SLEEP & 
              <span className="block bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                BREATHE ROAS
              </span>
            </h2>
            
            <div className="space-y-6 text-base sm:text-lg text-gray-300 font-medium">
              <p>
                We're not your typical "marketing agency." We're performance obsessed maniacs who live and die by one metric: <span className="text-green-400 font-bold">RETURN ON AD SPEND</span>.
              </p>
              <p>
                While other agencies talk about "brand awareness" and "engagement," we're busy generating <span className="text-yellow-400 font-bold">$500M+ in revenue</span> for our clients through ruthlessly optimized campaigns.
              </p>
              <p>
                Our secret? We treat every dollar like it's our own. Every campaign is built to <span className="text-red-400 font-bold">DOMINATE</span>, not just participate.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-2 bg-gray-800 px-3 sm:px-4 py-2 rounded-lg">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-white text-xs sm:text-sm font-semibold">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            {/* Team image with overlay */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Performance marketing team"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">The Revenue Generators</h3>
                <p className="text-gray-300 text-sm sm:text-base">50+ certified specialists obsessed with your success</p>
              </div>
            </div>

            {/* Floating achievement cards */}
            <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-gradient-to-r from-green-500 to-emerald-500 p-3 sm:p-4 rounded-xl shadow-2xl animate-bounce">
              <div className="text-white text-center">
                <div className="text-xl sm:text-2xl font-black">$2.4M</div>
                <div className="text-xs opacity-90">Generated This Month</div>
              </div>
            </div>

            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-gradient-to-r from-purple-500 to-pink-500 p-3 sm:p-4 rounded-xl shadow-2xl animate-bounce animation-delay-1000">
              <div className="text-white text-center">
                <div className="text-xl sm:text-2xl font-black">847%</div>
                <div className="text-xs opacity-90">Average ROAS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gray-900 border border-gray-700 p-4 sm:p-6 lg:p-8 rounded-2xl text-center hover:border-gray-500 transition-all duration-300 transform hover:scale-105">
              <div className="bg-gray-800 p-4 rounded-xl w-fit mx-auto mb-6">
                <achievement.icon className={`h-10 w-10 ${achievement.color}`} />
              </div>
              <div className={`text-2xl sm:text-3xl lg:text-4xl font-black mb-2 ${achievement.color}`}>{achievement.value}</div>
              <div className="text-gray-400 font-semibold text-xs sm:text-sm lg:text-base">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 rounded-3xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
              OBSESSED WITH YOUR SUCCESS
            </h3>
            <p className="text-lg sm:text-xl text-white mb-6 sm:mb-8 opacity-90 px-4">
              We don't get paid unless you make money. That's how confident we are.
            </p>
            <button className="bg-black text-white px-8 sm:px-12 py-3 sm:py-4 rounded-xl font-black text-base sm:text-lg hover:bg-gray-900 transition-colors duration-200 transform hover:scale-105">
              LET'S DOMINATE TOGETHER
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
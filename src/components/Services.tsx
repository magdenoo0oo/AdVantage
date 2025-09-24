import React from 'react';
import { Zap, Target, TrendingUp, Eye, Users, BarChart3, Rocket, DollarSign } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Zap,
      title: "Google Ads Domination",
      description: "Crush your competition with laser-targeted Google Ads that convert at 3x industry average.",
      metrics: ["847% Avg ROAS", "0.23¢ Avg CPC", "47% Conv Rate"],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Target,
      title: "Facebook/Meta Mastery",
      description: "Precision-targeted campaigns that turn cold traffic into hot leads and paying customers.",
      metrics: ["12.4% CTR", "$0.87 CPL", "34% ROAS"],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: TrendingUp,
      title: "YouTube Ads Explosion",
      description: "Video campaigns that go viral and generate massive brand awareness + conversions.",
      metrics: ["2.8M+ Views", "23% View Rate", "156% CTR"],
      color: "from-red-600 to-pink-600"
    },
    {
      icon: Eye,
      title: "Display Network Blitz",
      description: "Retargeting campaigns that follow your prospects everywhere until they convert.",
      metrics: ["89% Reach", "4.7% CTR", "234% Lift"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "LinkedIn Lead Generation",
      description: "B2B campaigns that generate high-quality leads from decision-makers.",
      metrics: ["$12 CPL", "67% Open Rate", "23% Conv Rate"],
      color: "from-blue-600 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Real-time dashboards and AI-powered optimization that maximizes every dollar spent.",
      metrics: ["24/7 Monitoring", "AI Optimization", "Live Reporting"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full text-sm font-black mb-6 animate-pulse">
            <Rocket className="h-5 w-5 mr-2" />
            PERFORMANCE-DRIVEN ADVERTISING
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6">
            WE DON'T JUST RUN ADS
            <span className="block bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              WE ENGINEER RESULTS
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto font-medium px-4">
            Every campaign is built to dominate. Every click is optimized for conversion. Every dollar is maximized for ROI.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 lg:p-8 hover:border-gray-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl h-full flex flex-col">
                <div className={`bg-gradient-to-r ${service.color} p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed flex-grow text-sm lg:text-base">{service.description}</p>
                
                <div className="space-y-3 mb-8">
                  {service.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center justify-between bg-gray-800 px-3 lg:px-4 py-2 rounded-lg">
                      <span className="text-gray-400 text-sm">{metric.split(' ')[0]}</span>
                      <span className="text-white font-bold text-sm lg:text-base">{metric.split(' ').slice(1).join(' ')}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 px-4 bg-gradient-to-r ${service.color} text-white rounded-lg font-bold hover:shadow-lg transition-all duration-200 transform hover:scale-105 text-sm lg:text-base mt-auto`}>
                  DOMINATE NOW
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 rounded-3xl p-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-6">
              READY TO 10X YOUR RESULTS?
            </h3>
            <p className="text-lg sm:text-xl text-white mb-8 opacity-90 px-4">
              Get a FREE campaign audit and see exactly how we'll dominate your market.
            </p>
            <button className="bg-white text-black px-8 sm:px-12 py-3 sm:py-4 rounded-xl font-black text-base sm:text-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 flex items-center mx-auto">
              <DollarSign className="mr-2 h-6 w-6" />
              GET FREE $10K AUDIT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
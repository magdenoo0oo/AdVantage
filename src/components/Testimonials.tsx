import React from 'react';
import { Star, TrendingUp, DollarSign, Zap } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Marcus Rodriguez",
      role: "CEO, TechScale Solutions",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "These guys are INSANE! They took our dying Google Ads account and turned it into a $2.3M revenue machine in 90 days. ROI went from -23% to +847%. I'm not even kidding.",
      results: "+847% ROI",
      revenue: "$2.3M Generated",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Sarah Chen",
      role: "Founder, EcomBlast",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "I was spending $50K/month on Facebook ads with ZERO results. These legends came in and now I'm doing $400K/month in revenue. They literally saved my business.",
      results: "+1,200% ROAS",
      revenue: "$400K Monthly",
      color: "from-blue-500 to-purple-500"
    },
    {
      name: "Jake Thompson",
      role: "CMO, FitnessPro",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Holy sh*t! (Sorry for the language but I'm PUMPED!) They turned our YouTube ads into a lead generation BEAST. 50,000 new customers in 6 months. UNREAL!",
      results: "+2,400% Leads",
      revenue: "50K New Customers",
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Amanda Foster",
      role: "Director, LuxuryBrand Co",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "We were skeptical about their 'aggressive' approach, but DAMN! LinkedIn campaigns are now generating $100K+ monthly in B2B sales. These guys are the real deal.",
      results: "+567% Conv Rate",
      revenue: "$100K+ Monthly",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-red-500 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-red-500 text-black rounded-full text-sm font-black mb-6 animate-pulse">
            <TrendingUp className="h-5 w-5 mr-2" />
            REAL CLIENTS, REAL RESULTS
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6">
            OUR CLIENTS DON'T JUST WIN
            <span className="block bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              THEY DOMINATE
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto font-medium px-4">
            These aren't fake testimonials. These are real business owners who went from struggling to CRUSHING their competition.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative group">
              <div className="bg-gray-900 border border-gray-700 p-6 lg:p-8 rounded-2xl hover:border-gray-500 transition-all duration-300 transform hover:scale-105">
                {/* Results badge */}
                <div className={`absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-gradient-to-r ${testimonial.color} px-3 sm:px-4 py-2 rounded-xl shadow-lg`}>
                  <div className="text-white text-xs sm:text-sm font-black">{testimonial.results}</div>
                </div>

                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 sm:w-16 h-12 sm:h-16 rounded-full object-cover mr-4 border-2 border-gray-700"
                  />
                  <div>
                    <h4 className="font-bold text-white text-base sm:text-lg">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm sm:text-base">{testimonial.role}</p>
                    <div className="flex mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6 text-base sm:text-lg font-medium">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center justify-between bg-gray-800 px-3 sm:px-4 py-3 rounded-lg">
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-green-400 mr-2" />
                    <span className="text-green-400 font-bold text-sm sm:text-base">{testimonial.revenue}</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="text-yellow-400 font-bold text-sm sm:text-base">VERIFIED</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof section */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 sm:p-12 text-center border border-gray-700">
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-8">
            JOIN THE WINNERS CIRCLE
          </h3>
          
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-green-400 mb-2">$500M+</div>
              <div className="text-gray-400 font-semibold text-xs sm:text-sm lg:text-base">Total Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-400 mb-2">2,500+</div>
              <div className="text-gray-400 font-semibold text-xs sm:text-sm lg:text-base">Businesses Scaled</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-purple-400 mb-2">847%</div>
              <div className="text-gray-400 font-semibold text-xs sm:text-sm lg:text-base">Average ROAS</div>
            </div>
          </div>

          <button className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-xl font-black text-base sm:text-lg hover:from-red-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105">
            GET YOUR SUCCESS STORY
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-[#2D63EA] selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      
      {/* Partners Section */}
      <section id="partners" className="py-12 lg:py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 font-bold uppercase tracking-widest mb-6 sm:mb-8 text-xs sm:text-sm">Trusted Partners & Platforms</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10">
            {[
              { id: 1, name: '禾木家居', img: '/hemu.jpg' },
              { id: 2, name: '华硕电脑', img: '/asus.jpg' },
              { id: 3, name: '张金宝酸菜串串', img: '/zhang.jpg' },
              { id: 4, name: '金玫瑰大酒店', img: '/jin.jpg' },
            ].map((partner) => (
              <div 
                key={partner.id} 
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-gray-100 aspect-[1280/497]"
              >
                <img 
                  src={partner.img} 
                  alt={partner.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                  <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300 drop-shadow-lg">
                    {partner.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <Link to="/cases" className="inline-flex items-center justify-center bg-white text-gray-800 px-8 py-3 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all shadow-sm border border-gray-200">
            查看更多成功案例
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

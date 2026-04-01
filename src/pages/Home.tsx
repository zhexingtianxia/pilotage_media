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
          
          <div className="w-full h-[400px] md:h-[450px] overflow-hidden rounded-2xl mb-10 shadow-xl">
            <div className="flex flex-col md:flex-row h-full w-full md:w-[110%] md:-ml-[5%]">
              {[
                { id: 1, name: '禾木家居', img: 'https://picsum.photos/seed/hemu/800/400' },
                { id: 2, name: '华硕电脑', img: 'https://picsum.photos/seed/asus/800/400' },
                { id: 3, name: '张金宝酸菜串串', img: 'https://picsum.photos/seed/zhang/800/400' },
                { id: 4, name: '金玫瑰大酒店', img: 'https://picsum.photos/seed/jin/800/400' },
              ].map((partner) => (
                <div 
                  key={partner.id} 
                  className="group relative flex-1 h-full overflow-hidden transition-all duration-500 ease-out hover:flex-[1.5] md:-skew-x-12 border-y-2 md:border-y-0 md:border-x-2 border-white cursor-pointer"
                >
                  <div className="w-full h-full relative md:skew-x-12 scale-100 md:scale-[1.35]">
                    <img 
                      src={partner.img} 
                      alt={partner.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/10 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white font-bold text-xl md:text-2xl opacity-100 md:opacity-0 group-hover:opacity-100 md:translate-y-4 group-hover:translate-y-0 transition-all duration-500 drop-shadow-xl tracking-wider">
                        {partner.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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

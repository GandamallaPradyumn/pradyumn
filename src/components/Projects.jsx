import React, { useState } from 'react';
import { motion } from 'framer-motion';
import accuracyImage from '../assets/projects/dashboard_accuracy.png';
import overviewImage from '../assets/projects/operations_overview.png';

const Projects = () => {
  const [activeScreen, setActiveScreen] = useState('accuracy');

  const project = {
    title: "TGSRTC Dynamic Scheduling & Demand Forecasting System",
    tags: ["Python", "XGBoost", "FastAPI", "Streamlit", "Pandas", "Parquet", "Open-Meteo API"],
    description: "Build an end-to-end AI pipeline predicting passenger demand 2 days ahead using XGBoost with temporal, lag, weather, and Telugu festival features across 20+ TGSRTC depots.",
    highlights: [
      "Engineered 15+ features including day-of-week lags, 7-day rolling stats, same-DOW medians, and holiday proximity flags.",
      "Designed two scheduling engines — Delta-KMs (trip-count optimization) and EPK/OR (earnings-per-km decisions).",
      "Built 3-stage automated pipeline: CSV ingestion → GOLD parquet → XGBoost T+2 forecast → schedule output.",
      "Delivered Streamlit dashboard with Demand Accuracy, Supply Accuracy, and Daily Schedule tabs with Plotly charts."
    ]
  };

  return (
    <section id="projects" className="bg-white py-24 px-6 md:px-12 w-full relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
            <div data-aos="fade-up" className="mb-16">
                <span className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8 shadow-sm bg-white">
                    Featured Work
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                    Live Production AI Systems
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-12">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group relative bg-[#f8f8f8] rounded-[2.5rem] p-8 md:p-12 overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
                >
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-4 py-1.5 bg-white text-black text-xs font-bold rounded-full border border-gray-200 shadow-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-3xl font-black mb-6 text-gray-900 group-hover:text-[#818CF8] transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed font-medium">
                                {project.description}
                            </p>
                            <ul className="space-y-4">
                                {project.highlights.map((highlight, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-700 font-medium">
                                        <span className="mt-1.5 w-1.5 h-1.5 bg-[#818CF8] rounded-full shrink-0" />
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Interactive Screen Mockup Container */}
                        <div className="w-full lg:w-5/12 flex flex-col gap-4">
                             {/* Sleek Browser/Tablet Mockup */}
                             <div className="bg-[#1e1e2f] rounded-2xl border border-indigo-500/10 overflow-hidden shadow-2xl transition-all duration-300">
                                  {/* Window Title Bar */}
                                  <div className="bg-[#12121e] px-4 py-2.5 flex items-center gap-2 border-b border-indigo-950">
                                       <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                                       <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                                       <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                                       <span className="text-[10px] text-indigo-200/40 font-mono ml-4 truncate">
                                            {activeScreen === 'accuracy' ? 'demand_accuracy.png' : 'operations_overview.png'}
                                       </span>
                                  </div>
                                  {/* Image Body */}
                                  <div className="aspect-[16/9] w-full bg-[#131321] relative overflow-hidden flex items-center justify-center p-1.5">
                                       <img 
                                            src={activeScreen === 'accuracy' ? accuracyImage : overviewImage} 
                                            alt={activeScreen === 'accuracy' ? 'Demand Prediction Accuracy Dashboard' : 'Operations Overview Scatter Plot'} 
                                            className="w-full h-full object-contain rounded-lg shadow-inner"
                                       />
                                  </div>
                             </div>

                             {/* Interactive Navigation controls */}
                             <div className="flex justify-center gap-3 text-xs font-bold font-mono">
                                  <button 
                                       onClick={() => setActiveScreen('accuracy')}
                                       className={`px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                                            activeScreen === 'accuracy' 
                                                 ? 'bg-[#1A1A2E] text-white border-[#1A1A2E] shadow-md shadow-indigo-950/20' 
                                                 : 'bg-[#1A1A2E]/5 text-gray-500 border-gray-200 hover:border-gray-400 hover:text-black'
                                       }`}
                                  >
                                       Demand Accuracy
                                  </button>
                                  <button 
                                       onClick={() => setActiveScreen('overview')}
                                       className={`px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                                            activeScreen === 'overview' 
                                                 ? 'bg-[#1A1A2E] text-white border-[#1A1A2E] shadow-md shadow-indigo-950/20' 
                                                 : 'bg-[#1A1A2E]/5 text-gray-500 border-gray-200 hover:border-gray-400 hover:text-black'
                                       }`}
                                  >
                                       Operations Overview
                                  </button>
                             </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
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
                    <div className="flex flex-col md:flex-row gap-12">
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
                        {/* Placeholder for project image/visual */}
                        <div className="w-full md:w-1/3 bg-gray-200 rounded-3xl aspect-square flex items-center justify-center relative overflow-hidden border-4 border-white shadow-xl">
                             <div className="absolute inset-0 bg-gradient-to-br from-[#818CF8]/20 to-transparent z-10" />
                             <svg className="w-20 h-20 text-gray-400 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                             </svg>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  );
};

export default Projects;

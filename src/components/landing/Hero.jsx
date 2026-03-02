import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
            {/* Background HUD Decor */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="hud-line absolute top-1/4"></div>
                <div className="hud-line absolute top-3/4"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-6 inline-block px-4 py-1 border border-accent-primary/30 rounded-full bg-accent-primary/10">
                        <span className="tech-font text-[10px] tracking-[4px] text-accent-highlight">Industrial Grade Telemetry</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl mb-6 leading-tight">
                        Intelligent Vehicle <br />
                        <span className="text-accent-primary">Telemetry. Reimagined.</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-text-secondary text-lg md:text-xl mb-10">
                        A scalable, AI-powered ecosystem delivering real-time operational insights for cars, bikes, and EVs.
                        Built for drivers, fleets, and smart city integration.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="btn btn-primary px-10 border-b-4 border-black/20 hover:border-white/20 transition-all flex items-center gap-2 group">
                            Launch Dashboard <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                        <button className="btn btn-outline px-10 border border-white/10 hover:border-accent-highlight transition-all">
                            View Architecture
                        </button>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
                <div className="w-[1px] h-12 bg-gradient-to-t from-accent-primary to-transparent"></div>
            </div>
        </section>
    );
};

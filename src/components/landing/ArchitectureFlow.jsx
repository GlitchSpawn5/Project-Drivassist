import React from 'react';
import { Smartphone, Database, Cloud, Share2, LayoutPanelLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const FLOW_STEPS = [
    { id: '1', name: 'IoT Device', icon: Smartphone, desc: 'OBD-II / CAN BUS Integration' },
    { id: '2', name: 'Local Cache', icon: Database, desc: 'Offline-First Local Buffer' },
    { id: '3', name: 'Cloud Sync', icon: Cloud, desc: 'Event-Driven Data Sync' },
    { id: '4', name: 'AI Engine', icon: Share2, desc: 'Predictive Recommendation' },
    { id: '5', name: 'Dashboard', icon: LayoutPanelLeft, desc: 'Real-time Visualization' },
];

export const ArchitectureFlow = () => {
    return (
        <section className="section-padding bg-black/10">
            <div className="container overflow-x-auto py-10">
                <div className="text-center mb-16">
                    <h5 className="tech-font text-accent-highlight tracking-widest text-xs mb-3">Enterprise Logic</h5>
                    <h2 className="text-4xl md:text-5xl">Architecture Map</h2>
                    <div className="w-20 h-1 bg-accent-primary mx-auto mt-6"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 min-w-[300px] md:min-w-fit md:mx-auto">
                    {FLOW_STEPS.map((step, index) => (
                        <React.Fragment key={step.id}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center text-center gap-4 relative group md:flex-1"
                            >
                                <div
                                    className="w-16 h-16 rounded-full border border-white/10 glass-panel bg-white/5 flex items-center justify-center p-3 text-white transition-all group-hover:border-accent-primary group-hover:bg-accent-primary/5 shadow-2xl shadow-black"
                                >
                                    <step.icon size={28} />
                                </div>
                                <div>
                                    <h3 className="tech-font text-[10px] tracking-widest font-bold text-accent-highlight mb-1 whitespace-nowrap">{step.name}</h3>
                                    <p className="text-[10px] text-text-secondary w-20 leading-tight mx-auto">{step.desc}</p>
                                </div>
                            </motion.div>

                            {index < FLOW_STEPS.length - 1 && (
                                <div className="hidden md:flex items-center justify-center flex-1">
                                    <div className="w-16 h-[1px] bg-white/5 flow-connector"></div>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

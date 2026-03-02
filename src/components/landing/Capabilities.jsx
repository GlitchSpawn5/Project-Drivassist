import React from 'react';
import { Truck, ShieldCheck, Activity, Battery, HandCoins, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const CAPABILITIES = [
    {
        title: 'Fleet Management',
        icon: Truck,
        desc: 'Real-time vehicle tracking and route optimization for enterprise logistics.',
        iconColor: 'var(--accent-primary)'
    },
    {
        title: 'Safety Monitoring',
        icon: ShieldCheck,
        desc: 'AI-driven driver behavior scoring and real-time coaching for reduced accidents.',
        iconColor: 'var(--accent-highlight)'
    },
    {
        title: 'Predictive Maintenance',
        icon: Activity,
        desc: 'Vibration and thermal anomaly detection to prevent catastrophic failures.',
        iconColor: 'var(--accent-primary)'
    },
    {
        title: 'EV Battery Health',
        icon: Battery,
        desc: 'SoH monitoring and charging cycle optimization for extended battery life.',
        iconColor: 'var(--accent-highlight)'
    },
    {
        title: 'Insurance Risk Scoring',
        icon: HandCoins,
        desc: 'Transparent telemetry-based risk profiling for fair, performance-led premiums.',
        iconColor: 'var(--accent-primary)'
    },
    {
        title: 'Smart City Integration',
        icon: Globe,
        desc: 'Connecting vehicles to urban infrastructure for smarter traffic management.',
        iconColor: 'var(--accent-highlight)'
    },
];

export const Capabilities = () => {
    return (
        <section className="section-padding bg-black/10">
            <div className="container">
                <div className="text-center mb-16">
                    <h5 className="tech-font text-accent-highlight tracking-widest text-xs mb-3">Capabilities</h5>
                    <h2 className="text-4xl md:text-5xl">Industry-Ready Modules</h2>
                    <div className="w-20 h-1 bg-accent-primary mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CAPABILITIES.map((cap, index) => (
                        <motion.div
                            key={cap.title}
                            whileHover={{ y: -8 }}
                            className="glass-panel p-8 relative group overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-accent-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="p-4 rounded-xl bg-accent-primary/5 w-fit mb-6 text-accent-primary">
                                <cap.icon size={28} style={{ color: cap.iconColor }} />
                            </div>
                            <h3 className="text-xl mb-4 tech-font tracking-wide">{cap.title}</h3>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                {cap.desc}
                            </p>

                            <div className="mt-8 flex items-center text-xs font-bold tech-font text-accent-highlight/40 group-hover:text-accent-highlight transition-colors cursor-pointer">
                                LEARN MORE →
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

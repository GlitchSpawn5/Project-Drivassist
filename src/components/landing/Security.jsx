import React from 'react';
import { ShieldAlert, ShieldCheck, Lock, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';

const SECURITY_POINTS = [
    { id: '1', name: 'End-to-End Encryption', icon: Lock, desc: 'Highest military-grade TLS/AES data encryption.' },
    { id: '2', name: 'User Consent Control', icon: ShieldCheck, desc: 'Granular sharing permissions for fleets and insurers.' },
    { id: '3', name: 'GDPR Compliance', icon: ShieldAlert, desc: 'Full adherence to European Union data regulations.' },
    { id: '4', name: 'Selective Masking', icon: EyeOff, desc: 'PII anonymization at the edge before cloud sync.' },
];

export const Security = () => {
    return (
        <section className="section-padding bg-black/20 border-t border-white/5">
            <div className="container">
                <div className="text-center mb-16">
                    <h5 className="tech-font text-accent-highlight tracking-widest text-xs mb-3">Governance</h5>
                    <h2 className="text-4xl md:text-5xl">Privacy-First Security</h2>
                    <div className="w-20 h-1 bg-accent-primary mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                    {SECURITY_POINTS.map((item, index) => (
                        <motion.div
                            key={item.id}
                            whileHover={{ x: 10 }}
                            className="flex items-start gap-6 p-6 glass-panel group"
                        >
                            <div className="p-4 rounded-full bg-accent-primary/10 group-hover:bg-accent-primary/20 transition-all text-accent-primary">
                                <item.icon size={28} />
                            </div>
                            <div>
                                <h3 className="tech-font text-lg mb-2 tracking-wide font-bold">{item.name}</h3>
                                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

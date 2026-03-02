import React from 'react';
import { Smartphone, Mail, Globe, MapPin, Shield } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="pt-24 pb-12 bg-bg-primary border-t border-white/5 relative overflow-hidden">
            <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-accent-primary rounded flex items-center justify-center shadow-lg shadow-accent-primary/20">
                                <Smartphone size={20} className="text-white" />
                            </div>
                            <h1 className="tech-font text-xl select-none">
                                Driv<span className="text-accent-primary">Assist</span>
                            </h1>
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed mb-6">
                            Redefining precision-engineered vehicle telemetry for the intelligent mobility ecosystem.
                        </p>
                        <div className="flex gap-4 opacity-50">
                            <Globe size={18} className="hover:text-accent-primary pointer-events-none" />
                            <MapPin size={18} className="hover:text-accent-primary pointer-events-none" />
                        </div>
                    </div>

                    <div>
                        <h3 className="tech-font text-xs tracking-widest text-accent-highlight mb-6">Product</h3>
                        <ul className="text-text-secondary text-sm space-y-4">
                            <li className="hover:text-accent-highlight cursor-pointer transition-colors">Fleet Management</li>
                            <li className="hover:text-accent-highlight cursor-pointer transition-colors">EV Battery Health</li>
                            <li className="hover:text-accent-highlight cursor-pointer transition-colors">Insurance Risk Scoring</li>
                            <li className="hover:text-accent-highlight cursor-pointer transition-colors">Predictive Maintenance</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="tech-font text-xs tracking-widest text-accent-highlight mb-6">Transparency</h3>
                        <ul className="text-text-secondary text-sm space-y-4">
                            <li className="hover:text-accent-highlight cursor-pointer transition-colors">GDPR Compliance</li>
                            <li className="hover:text-accent-highlight cursor-pointer transition-colors">End-to-End Encryption</li>
                            <li className="hover:text-accent-highlight cursor-pointer transition-colors">Data Privacy Policy</li>
                            <li className="hover:text-accent-highlight cursor-pointer transition-colors">System Uptime</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="tech-font text-xs tracking-widest text-accent-highlight mb-6">Integration</h3>
                        <ul className="text-text-secondary text-sm space-y-4">
                            <li className="flex items-center gap-2 hover:text-accent-highlight cursor-pointer transition-colors">
                                <Mail size={14} /> Contact Enterprise
                            </li>
                            <li className="flex items-center gap-2 hover:text-accent-highlight cursor-pointer transition-colors">
                                <Shield size={14} /> Security Disclosure
                            </li>
                        </ul>
                        <div className="mt-8 p-4 glass-panel border-accent-primary/20">
                            <span className="text-[10px] uppercase font-bold tracking-widest block mb-2 text-accent-primary">System Status</span>
                            <span className="text-xs font-mono">99.98% / OPTIMAL</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40">
                    <p className="text-[10px] tech-font tracking-widest uppercase">Project DrivAssist // Industrial Grade v1.0.4-LTS</p>
                    <p className="text-[10px] font-mono">© 2026 MOBILITY INTELLIGENCE ECOSYSTEM. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </footer>
    );
};

import React from 'react';
import { Smartphone, ShieldCheck, User } from 'lucide-react';

export const Navbar = ({ scrolled }) => {
    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-logo">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent-primary rounded flex items-center justify-center shadow-lg shadow-accent-primary/20">
                        <Smartphone size={20} className="text-white" />
                    </div>
                    <h1 className="tech-font text-lg tracking-widest leading-none">
                        Driv<span className="text-accent-primary">Assist</span>
                    </h1>
                </div>
            </div>

            <div className="navbar-links">
                <a href="#" className="tech-font text-[11px] font-bold tracking-widest text-white">Platform</a>
                <a href="#" className="tech-font text-[11px] font-bold tracking-widest text-white/50 hover:text-white transition-all">Connect</a>
                <a href="#" className="tech-font text-[11px] font-bold tracking-widest text-white/50 hover:text-white transition-all">Support</a>
                <a href="#" className="tech-font text-[11px] font-bold tracking-widest text-white/50 hover:text-white transition-all">Enterprise</a>
            </div>

            <div className="navbar-cta">
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex items-center gap-2 px-3 py-1 border border-accent-highlight/30 rounded-full bg-accent-highlight/10">
                        <ShieldCheck size={12} className="text-accent-highlight" />
                        <span className="tech-font text-[9px] tracking-widest text-accent-highlight">SECURE NODE-01</span>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-primary hover:border-accent-highlight hover:text-white transition-all">
                        <User size={18} />
                    </button>
                </div>
            </div>
        </nav>
    );
};

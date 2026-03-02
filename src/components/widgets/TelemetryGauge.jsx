import React from 'react';
import { Gauge } from 'lucide-react';

export const TelemetryGauge = ({ label, value, unit, color = 'var(--accent-primary)', icon: Icon = Gauge }) => {
    return (
        <div className="glass-panel p-6 flex flex-col items-center justify-center min-h-[160px] relative overflow-hidden group shadow-xl">
            {/* Icon Circular Container */}
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 transition-all group-hover:border-accent-primary/50 group-hover:bg-accent-primary/10">
                <Icon size={18} style={{ color }} />
            </div>

            <div className="flex flex-col items-center z-10">
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold tech-font tracking-tighter" style={{ color }}>
                        {value}
                    </span>
                    <span className="text-[10px] opacity-40 uppercase tracking-widest font-bold">
                        {unit}
                    </span>
                </div>
                <h4 className="text-[10px] uppercase font-bold tracking-[2px] text-center opacity-40 mt-3 group-hover:text-white group-hover:opacity-100 transition-all">
                    {label}
                </h4>
            </div>

            {/* Subtle Progress HUD at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5 overflow-hidden">
                <div
                    className="h-full transition-all duration-1000 ease-out"
                    style={{
                        width: `${Math.min(100, (value / 120) * 100)}%`,
                        backgroundColor: color,
                        boxShadow: `0 0 10px ${color}`
                    }}
                />
            </div>
        </div>
    );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gauge, Battery, ShieldAlert, Truck, Activity, Cpu, Wind, Zap } from 'lucide-react';
import { useTelemetryStore } from '../../store/useTelemetryStore';
import { useTelemetryStream } from '../../store/useTelemetryStream';
import { TelemetryGauge } from '../widgets/TelemetryGauge';
import { TelemetryChart } from '../widgets/TelemetryChart';

const MODE_OPTIONS = [
    { id: 'FLEET', name: 'Fleet', icon: Truck, color: 'var(--accent-primary)' },
    { id: 'SAFETY', name: 'Safety', icon: Activity, color: 'var(--accent-highlight)' },
    { id: 'EV_BATTERY', name: 'EV', icon: Battery, color: 'var(--text-secondary)' },
];

export const DashboardPreview = () => {
    const { metrics, mode, setMode } = useTelemetryStore();
    useTelemetryStream(); // Start the live simulation

    return (
        <section className="section-padding bg-black/10 border-y border-white/5 relative overflow-hidden">
            <div className="container relative z-10">
                <div className="text-center mb-16">
                    <h5 className="tech-font text-accent-highlight tracking-widest text-xs mb-3">Live Console Preview</h5>
                    <h2 className="text-4xl md:text-5xl">Mission Control Interface</h2>
                    <div className="w-20 h-1 bg-accent-primary mx-auto mt-6"></div>

                    <div className="mt-12 flex justify-center gap-4">
                        {MODE_OPTIONS.map((m) => (
                            <button
                                key={m.id}
                                onClick={() => setMode(m.id)}
                                className={`flex items-center gap-3 px-6 py-4 glass-panel text-xs tech-font tracking-widest font-extrabold transition-all border-b-2 ${mode === m.id ? 'border-accent-primary bg-accent-primary/5 text-accent-primary' : 'border-transparent text-text-secondary opacity-60'
                                    }`}
                            >
                                <m.icon size={16} /> {m.name}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    key={mode}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="glass-panel p-10 bg-black/40 border-accent-primary/10 shadow-[0_0_100px_rgba(220,0,0,0.05)]"
                >
                    {/* Dashboard HUD Style Headers */}
                    <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-6 opacity-60">
                        <div className="flex items-center gap-6">
                            <div className="flex flex-col">
                                <span className="text-[8px] uppercase font-bold tracking-[2px] text-accent-highlight">Active Sensor Node</span>
                                <span className="tech-font text-[11px]">CAN_BUS_X_091</span>
                            </div>
                            <div className="w-[1px] h-6 bg-white/20"></div>
                            <div className="flex flex-col">
                                <span className="text-[8px] uppercase font-bold tracking-[2px] text-accent-highlight">Global Latency</span>
                                <span className="tech-font text-[11px]">12.4ms / 60Hz</span>
                            </div>
                            <div className="w-[1px] h-6 bg-white/20"></div>
                            <div className="flex flex-col">
                                <span className="text-[8px] uppercase font-bold tracking-[2px] text-accent-highlight">Encryption Status</span>
                                <span className="tech-font text-[11px] text-accent-highlight flex items-center gap-1">
                                    <Zap size={10} /> RSA-4096 VALID
                                </span>
                            </div>
                        </div>
                        <div className="text-right flex flex-col items-end">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse"></div>
                                <span className="tech-font text-[8px] tracking-[2px]">STREAMING_ENCRYPTED</span>
                            </div>
                            <span className="text-[10px] font-mono font-bold text-white/40">34.0522°N, 118.2437°W</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        <div className="md:col-span-8 space-y-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                <TelemetryGauge label="Speed" value={metrics.speed} unit="km/h" color="var(--accent-primary)" icon={Gauge} />
                                <TelemetryGauge label="SoC (Battery)" value={metrics.soc} unit="%" color="var(--text-secondary)" icon={Battery} />
                                <TelemetryGauge label="Efficiency" value={84} unit="%" color="var(--accent-highlight)" icon={Zap} />
                            </div>
                            <div className="h-[350px]">
                                <TelemetryChart label="Braking Intensity Stream" metric="brakingIntensity" color="var(--accent-primary)" />
                            </div>
                        </div>

                        <div className="md:col-span-4 flex flex-col gap-8">
                            <div className="glass-panel p-6 bg-white/5 border border-white/5 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10"><Cpu size={48} /></div>
                                <h3 className="tech-font text-xs tracking-widest text-accent-highlight mb-4 flex items-center gap-2">
                                    <ShieldAlert size={14} /> AI Driver Insights
                                </h3>
                                <div className="space-y-4">
                                    <div className="p-4 border-l-2 border-accent-primary bg-accent-primary/5 rounded-xl text-xs leading-relaxed">
                                        <span className="font-bold uppercase tracking-widest block mb-1 opacity-60">Engine Thermal Anomaly</span>
                                        Vibration exceeds 0.08G in Front Axle. Increases tire wear by 15%. Check alignment.
                                    </div>
                                    <div className="p-4 border-l-2 border-accent-highlight bg-white/5 rounded-xl text-xs leading-relaxed opacity-50 grayscale hover:grayscale-0 transition-all hover:opacity-100 cursor-pointer">
                                        <span className="font-bold uppercase tracking-widest block mb-1 opacity-60">Fuel Efficiency coaching</span>
                                        Optimal speed for route is 112km/h. Reduce drag by maintaining steady pace.
                                    </div>
                                </div>
                            </div>

                            <div className="glass-panel p-6 bg-white/5 border border-white/5">
                                <h3 className="tech-font text-xs tracking-widest text-accent-highlight mb-4">Diagnostics Grid</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        { n: 'Oil Temp', v: '92°C' },
                                        { n: 'Gear', v: 'P-DRIVE' },
                                        { n: 'Aerodynamics', v: '0.29cd' },
                                        { n: 'G-Force', v: '0.45G' }
                                    ].map(it => (
                                        <div key={it.n} className="p-3 bg-white/5 rounded-lg text-center border border-white/5 hover:border-accent-primary/30 transition-all cursor-default group">
                                            <span className="block text-[8px] uppercase tracking-tighter opacity-40 font-bold group-hover:text-accent-primary">{it.n}</span>
                                            <span className="tech-font text-[14px] mt-1 block">{it.v}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

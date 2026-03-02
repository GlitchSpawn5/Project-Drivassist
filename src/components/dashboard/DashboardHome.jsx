import { Gauge, Zap, Wind, ShieldAlert, Activity, Cpu, Timer, TrendingUp, AlertTriangle, Trophy } from 'lucide-react';
import { useTelemetryStore } from '../../store/useTelemetryStore';
import { TelemetryGauge } from '../widgets/TelemetryGauge';
import { TelemetryChart } from '../widgets/TelemetryChart';

const formatTime = (ms) => {
    const min = Math.floor(ms / 60000);
    const sec = Math.floor((ms % 60000) / 1000);
    const msec = Math.floor((ms % 1000) / 10);
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}.${msec.toString().padStart(2, '0')}`;
};

export const DashboardHome = () => {
    const { metrics, mode, lapTimes, currentLapTime, addLapTime } = useTelemetryStore();

    const isRaceMode = mode === 'RACE';

    return (
        <div className="space-y-8 flex flex-col">
            {/* Header Info */}
            <div className="flex justify-between items-end border-b border-white/5 pb-6">
                <div className="flex flex-col gap-1">
                    <h2 className="tech-font text-2xl font-bold tracking-tighter flex items-center gap-3">
                        {mode.replace('_', ' ')}
                        <span className="text-accent-primary opacity-50">//</span>
                        <span className="text-accent-primary">ACTIVE_NODE</span>
                    </h2>
                    <p className="text-text-secondary text-[10px] tech-font tracking-[4px] opacity-60 uppercase">
                        Protocol: {isRaceMode ? 'MOTORSPORT_CHASSIS_V4' : 'INDUSTRIAL_TELEMETRY_SYNC'}
                    </p>
                </div>
                <div className="text-right flex flex-col items-end gap-1">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 px-2 py-0.5 rounded bg-accent-primary/10 border border-accent-primary/20">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse"></div>
                            <span className="tech-font text-[9px] tracking-widest text-accent-primary uppercase font-bold">Live Stream</span>
                        </div>
                        <span className="tech-font text-[10px] tracking-widest text-white/40 uppercase">RSA-4096_VALID</span>
                    </div>
                    <span className="text-[10px] font-mono opacity-30 mt-1">LATENCY: 8.42ms // FREQ: 500Hz</span>
                </div>
            </div>

            {/* RACE MODE OVERLAY (Lap Timer) */}
            {isRaceMode && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-span-8 glass-panel p-8 bg-accent-primary/10 border-accent-primary/30 flex justify-between items-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-accent-primary animate-pulse"></div>
                        <div className="relative z-10">
                            <span className="tech-font text-[10px] text-accent-highlight tracking-[4px] block mb-2 font-bold">CURRENT LAP</span>
                            <div className="tech-font text-6xl font-extrabold tracking-tighter text-white tabular-nums">
                                {formatTime(currentLapTime)}
                            </div>
                        </div>
                        <div className="relative z-10 flex flex-col items-end gap-4">
                            <button
                                onClick={() => addLapTime(currentLapTime)}
                                className="btn btn-primary px-8 py-4 text-xs tracking-[4px]"
                            >
                                MARK LAP
                            </button>
                            <div className="flex gap-4">
                                <div className="text-right">
                                    <span className="text-[9px] uppercase opacity-40 block">Last Lap</span>
                                    <span className="tech-font text-sm">{lapTimes[0] ? formatTime(lapTimes[0]) : '--:--.--'}</span>
                                </div>
                                <div className="text-right border-l border-white/10 pl-4">
                                    <span className="text-[9px] uppercase opacity-40 block">Best Lap</span>
                                    <span className="tech-font text-sm text-green-400">
                                        {lapTimes.length > 0 ? formatTime(Math.min(...lapTimes)) : '--:--.--'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-4 glass-panel p-6 bg-black/40 border-white/5">
                        <h3 className="tech-font text-[10px] tracking-widest opacity-40 mb-4 flex items-center gap-2 uppercase">
                            <TrendingUp size={14} /> AI Driving Coach
                        </h3>
                        <div className="space-y-4">
                            <div className="p-3 rounded bg-white/5 border-l-2 border-accent-highlight">
                                <p className="text-[11px] leading-relaxed">
                                    <span className="text-accent-highlight font-bold">LATE APEX:</span> Turn 4 entry speed too high. Sacrifice entry for better exit drive.
                                </p>
                            </div>
                            <div className="p-3 rounded bg-white/5 border-l-2 border-green-500/50">
                                <p className="text-[11px] leading-relaxed">
                                    <span className="text-green-400 font-bold">BRAKING:</span> Perfect modulation on Turn 1. 0.2s gained against historic delta.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* KPI GRID - 4 cards aligned perfectly */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <TelemetryGauge label="Ground Speed" value={metrics.speed} unit="km/h" icon={Gauge} />
                <TelemetryGauge label="Core Thermal" value={metrics.engineTemp} unit="°C" color="var(--accent-primary)" icon={Activity} />
                <TelemetryGauge label="G-Force (Lat)" value={0.84} unit="G" color="var(--accent-primary)" icon={Activity} />
                <TelemetryGauge label="Power Output" value={92} unit="%" color="var(--accent-primary)" icon={Zap} />
            </div>

            {/* Analytics Area - 2 large panels (REDFOCUSED) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[400px]">
                <div className="glass-panel p-6 bg-black/20 flex flex-col gap-4 overflow-hidden border-none shadow-2xl h-[400px]">
                    <TelemetryChart label="Velocity Dynamics" metric="speed" color="var(--accent-primary)" />
                </div>
                <div className="glass-panel p-6 bg-black/20 flex flex-col gap-4 overflow-hidden border-none shadow-2xl h-[400px]">
                    <TelemetryChart label="Torque Distribution" metric="acceleration" color="var(--accent-primary)" />
                </div>
            </div>

            {/* Bottom Insights - Aligned Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-8">
                <div className="md:col-span-8 glass-panel p-8 bg-black/40 border-accent-primary/10 relative overflow-hidden group">
                    <div
                        className="absolute transition-all duration-1000 transform group-hover:scale-110"
                        style={{
                            bottom: '-60px',
                            right: '-40px',
                            opacity: isRaceMode ? 0.04 : 0.02,
                            pointerEvents: 'none',
                            zIndex: 0
                        }}
                    >
                        {isRaceMode ? <Trophy size={320} /> : <ShieldAlert size={320} />}
                    </div>
                    <div className="relative z-10 h-full flex flex-col">
                        <h3 className="tech-font text-xs text-accent-highlight mb-8 tracking-[4px] flex items-center gap-3 font-bold uppercase">
                            <AlertTriangle size={18} /> System Engineering Analysis
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 flex-1">
                            <div className="space-y-4">
                                <span className="text-[10px] uppercase font-bold tracking-[3px] block opacity-30">Power Unit</span>
                                <p className="text-[13px] leading-relaxed text-white/80">
                                    {isRaceMode
                                        ? "Hybrid deployment at 100%. Thermal soak detected in MGU-K. Suggesting lift-and-coast on long straights."
                                        : "Secondary inverter phase timing adjusted. Peak efficiency maintained at 94.2% across current cycle."}
                                </p>
                                <button className="text-[10px] tech-font text-accent-primary border-b border-accent-primary/30 pb-1 mt-4 hover:border-accent-primary transition-all uppercase tracking-widest">Diagnostics Report</button>
                            </div>
                            <div className="space-y-4">
                                <span className="text-[10px] uppercase font-bold tracking-[3px] block opacity-30">Dynamics Hub</span>
                                <p className="text-[13px] leading-relaxed text-white/80">
                                    {isRaceMode
                                        ? "Front-left tire pressure +2.1 PSI above target. Camber adjustment recommended for next session."
                                        : "Chassis vibration frequency stable. Suspension damping optimized for urban pavement coefficients."}
                                </p>
                                <button className="text-[10px] tech-font text-accent-highlight border-b border-accent-highlight/30 pb-1 mt-4 hover:border-accent-highlight transition-all uppercase tracking-widest">View Flux Map</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-4 flex flex-col gap-6">
                    <div className="glass-panel p-8 bg-accent-primary/5 border-accent-primary/20 flex flex-col justify-between">
                        <div>
                            <span className="text-[10px] uppercase font-bold tracking-[4px] opacity-40 block mb-2">Performance Index</span>
                            <div className="flex items-baseline gap-2">
                                <span className="tech-font text-5xl font-bold text-white">9{isRaceMode ? '4' : '8'}.4</span>
                                <span className="text-[12px] text-accent-primary font-bold">/ 100</span>
                            </div>
                        </div>
                        <div className="mt-8 flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-[9px] uppercase opacity-40">System Health</span>
                                <span className="tech-font text-[11px]">OPTIMAL</span>
                            </div>
                            <Activity className="text-accent-primary" size={28} />
                        </div>
                    </div>

                    <div className="glass-panel p-6 bg-white/2 border-white/5 flex-1">
                        <h4 className="tech-font text-[10px] tracking-widest opacity-40 mb-6 uppercase font-bold">Data Stream Console</h4>
                        <div className="space-y-4 font-mono text-[9px]">
                            {[
                                { t: '13:54:01', msg: 'HEARTBEAT_READY', s: 'UP' },
                                { t: '13:54:12', msg: 'METRICS_ENCRYPTED', s: 'VALID' },
                                { t: '13:54:25', msg: 'IO_NODE_CALIB', s: 'DONE' },
                                { t: '13:54:48', msg: 'MODE_SYNC_ACTIVE', s: 'LIVE' },
                            ].map((log, i) => (
                                <div key={i} className="flex justify-between border-b border-white/5 pb-2 last:border-0">
                                    <span className="opacity-40">[{log.t}] {log.msg}</span>
                                    <span className="text-accent-primary font-bold">{log.s}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

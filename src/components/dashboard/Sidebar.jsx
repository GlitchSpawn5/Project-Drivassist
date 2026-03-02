import React from 'react';
import { Truck, Activity, Cpu, Battery, ShieldAlert, Globe, Trophy } from 'lucide-react';
import { useTelemetryStore } from '../../store/useTelemetryStore';

const MENU_ITEMS = [
    { id: 'FLEET', label: 'Fleet', icon: Truck },
    { id: 'SAFETY', label: 'Safety', icon: Activity },
    { id: 'PREDICTIVE', label: 'Predictive', icon: Cpu },
    { id: 'EV_BATTERY', label: 'EV Battery', icon: Battery },
    { id: 'INSURANCE', label: 'Insurance', icon: ShieldAlert },
    { id: 'SMART_CITY', label: 'Smart City', icon: Globe },
    { id: 'RACE', label: 'Race Mode', icon: Trophy },
];

export const Sidebar = () => {
    const { mode, setMode } = useTelemetryStore();

    return (
        <aside className="sidebar">
            {MENU_ITEMS.map((item) => (
                <div
                    key={item.id}
                    className={`sidebar-item ${mode === item.id ? 'active' : ''}`}
                    onClick={() => setMode(item.id)}
                >
                    <div className="sidebar-item-icon">
                        <item.icon size={18} />
                    </div>
                    <span className="sidebar-item-label tech-font text-[11px] font-bold tracking-widest">
                        {item.label}
                    </span>

                    {mode === item.id && (
                        <div className="absolute right-0 w-1 h-3/5 bg-accent-highlight rounded-l blur-[2px] opacity-50" />
                    )}
                </div>
            ))}

            <div className="mt-auto p-6 opacity-30">
                <div className="tech-font text-[8px] tracking-[4px] mb-2">SYSTEM_LTS_V1.4</div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-accent-highlight" />
                </div>
            </div>
        </aside>
    );
};

import React, { useState } from 'react';
import { motion, Reorder } from 'framer-motion';
import { Layout, Plus, GripVertical, Trash2, Gauge, Activity, Battery, Thermometer, Wind } from 'lucide-react';

const AVAILABLE_WIDGETS = [
    { id: 'S1', name: 'Speedometer', icon: Gauge, color: 'var(--primary)' },
    { id: 'S2', name: 'G-Force Meter', icon: Activity, color: 'var(--danger)' },
    { id: 'S3', name: 'Battery Efficiency', icon: Battery, color: 'var(--success)' },
    { id: 'S4', name: 'Inverter Temp', icon: Thermometer, color: 'var(--accent)' },
    { id: 'S5', name: 'Aerodynamics', icon: Wind, color: 'var(--secondary)' },
];

export const CustomModeEditor = () => {
    const [items, setItems] = useState(['S1', 'S2', 'S3']);

    return (
        <div className="p-8 glass rounded-3xl m-6 border-dashed border-2 border-white/10">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="tech-font text-2xl">Mode Customizer</h2>
                    <p className="text-dim text-sm">Drag to reorder your mission-critical telemetry widgets.</p>
                </div>
                <button className="btn-primary text-xs px-4 py-2">Save Layout</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-4 bg-white/5 p-6 rounded-2xl border border-white/10 h-fit">
                    <h3 className="text-xs uppercase font-bold tracking-widest opacity-40 mb-4">Available Streams</h3>
                    <div className="flex flex-col gap-3">
                        {AVAILABLE_WIDGETS.map(w => (
                            <div key={w.id} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:border-primary/50 transition-all cursor-pointer group">
                                <div className="flex items-center gap-3">
                                    <w.icon size={16} className="opacity-60" />
                                    <span className="text-sm font-medium">{w.name}</span>
                                </div>
                                <Plus size={14} className="opacity-20 group-hover:opacity-100 text-primary" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="md:col-span-8">
                    <Reorder.Group axis="y" values={items} onReorder={setItems} className="flex flex-col gap-4">
                        {items.map((id) => {
                            const widget = AVAILABLE_WIDGETS.find(w => w.id === id);
                            return (
                                <Reorder.Item
                                    key={id}
                                    value={id}
                                    className="glass p-5 rounded-2xl flex items-center justify-between border-l-4"
                                    style={{ borderColor: widget?.color || 'var(--primary)' }}
                                >
                                    <div className="flex items-center gap-4">
                                        <GripVertical className="opacity-20 cursor-grab active:cursor-grabbing" size={20} />
                                        <div>
                                            <h4 className="font-bold text-sm uppercase tracking-wide">{widget?.name}</h4>
                                            <p className="text-[10px] opacity-40">Live Data Stream Source: CAN_BUS_01</p>
                                        </div>
                                    </div>
                                    <button className="p-2 text-danger/40 hover:text-danger hover:bg-danger/10 rounded-lg transition-all">
                                        <Trash2 size={16} />
                                    </button>
                                </Reorder.Item>
                            );
                        })}
                    </Reorder.Group>

                    {items.length === 0 && (
                        <div className="h-[300px] border-2 border-dashed border-white/5 rounded-3xl flex flex-col items-center justify-center text-dim">
                            <Layout size={48} className="mb-4 opacity-10" />
                            <p>Drag widgets here to start building your HUD.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

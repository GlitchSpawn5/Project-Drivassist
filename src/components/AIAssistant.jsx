import React, { useMemo } from 'react';
import { useTelemetryStore } from '../store/useTelemetryStore';
import { Sparkles, AlertTriangle, Battery, Gauge } from 'lucide-react';

export const AIAssistant = () => {
    const { metrics } = useTelemetryStore();

    const insights = useMemo(() => {
        const list = [];

        // Braking Analysis
        if (metrics.brakingIntensity > 0.8) {
            list.push({
                id: 'brake_alert',
                type: 'DANGER',
                icon: <AlertTriangle className="text-danger" />,
                header: "Harsh braking detected",
                recommendation: " smoother braking recommended. This increases brake wear by 20% over normal usage.",
                action: "Check brake pad health in Diagnostic Mode."
            });
        }

        // Battery Optimization (EV)
        if (metrics.soc < 20) {
            list.push({
                id: 'battery_low',
                type: 'WARNING',
                icon: <Battery className="text-secondary" />,
                header: "Low battery (20%)",
                recommendation: "Reduce power profile. Your energy consumption can be optimized by maintaining 50 km/h.",
                action: "Find nearest charging station."
            });
        }

        // Performance
        if (metrics.speed > 100) {
            list.push({
                id: 'speed_perf',
                type: 'INFO',
                icon: <Gauge className="text-primary" />,
                header: "High speed cruising",
                recommendation: "Maintaining 110km/h is optimal for aerodynamic efficiency on this route.",
                action: "Engage Cruise Control for 8% fuel savings."
            });
        }

        // Vibration / Maintenance
        if (metrics.vibration > 0.1) {
            list.push({
                id: 'vib_alert',
                type: 'CAUTION',
                icon: <Sparkles className="text-accent" />,
                header: "Vibration Anomaly",
                recommendation: "Front axle vibration exceeds 0.08G. This could indicate tire pressure imbalance or alignment issues.",
                action: "Schedule alignment check."
            });
        }

        return list;
    }, [metrics]);

    return (
        <div className="glass p-6 rounded-2xl flex flex-col gap-4 border-l-4 border-primary">
            <div className="flex items-center gap-2 mb-2">
                <Sparkles className="text-primary pulsate" />
                <h3 className="tech-font">AI Driver Coach (Explainable)</h3>
            </div>

            <div className="flex flex-col gap-3">
                {insights.length > 0 ? (
                    insights.map(item => (
                        <div key={item.id} className="p-4 rounded-xl bg-white/5 border border-white/10 flex gap-4 animate-in">
                            <div className="p-2 bg-white/10 rounded-lg h-fit">
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="font-bold text-sm uppercase tracking-wide opacity-80">{item.header}</h4>
                                <p className="text-sm text-dim leading-relaxed">
                                    <span className="text-white">→</span> {item.recommendation}
                                </p>
                                <p className="mt-2 text-xs font-mono text-primary uppercase">{item.action}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-sm text-center text-dim italic">Monitoring system state... All systems optimal.</p>
                )}
            </div>
        </div>
    );
};

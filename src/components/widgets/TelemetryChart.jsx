import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useTelemetryStore } from '../../store/useTelemetryStore';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const TelemetryChart = ({ label, metric, color = 'var(--accent-primary)' }) => {
    const { history } = useTelemetryStore();

    const data = {
        labels: history.map((h, i) => i),
        datasets: [
            {
                label: label,
                data: history.map((h) => h[metric]),
                fill: true,
                borderColor: color,
                backgroundColor: `${color}10`,
                borderWidth: 2,
                tension: 0.4,
                pointRadius: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
        },
        scales: {
            x: { display: false },
            y: {
                display: true,
                grid: { color: 'rgba(255,255,255,0.02)' },
                ticks: { color: 'rgba(255,255,255,0.2)', font: { size: 10, family: 'Orbitron' } }
            },
        },
        animation: {
            duration: 0,
        },
    };

    return (
        <div className="glass-panel p-6 h-full flex flex-col gap-4 bg-black/20 border-none shadow-2xl">
            <div className="flex justify-between items-center">
                <h3 className="tech-font text-[10px] tracking-widest opacity-60 font-bold">{label} // REALTIME_STREAM</h3>
                <div className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse shadow-[0_0_8px_var(--accent-highlight)]" />
            </div>
            <div className="flex-1 w-full min-h-0">
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

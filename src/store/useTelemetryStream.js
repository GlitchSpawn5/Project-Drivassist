import { useEffect, useRef } from 'react';
import { useTelemetryStore } from './useTelemetryStore';

export const useTelemetryStream = () => {
    const { metrics, isOnline, updateMetrics, setSyncStatus } = useTelemetryStore();
    const bufferRef = useRef([]);

    useEffect(() => {
        const timer = setInterval(() => {
            // Simulate slight variation in telemetry data
            const deltaSpeed = (Math.random() - 0.5) * 5;
            const newSpeed = Math.max(0, Math.min(120, metrics.speed + deltaSpeed));
            const newRPM = newSpeed * (100 + Math.random() * 20); // rough simulation
            const newBraking = Math.random() > 0.8 ? Math.random() : 0;
            const newVibration = Math.random() * 0.15;
            const newBatteryTemp = metrics.batteryTemp + (Math.random() - 0.45) * 0.2;
            const newSOC = metrics.soc - (newSpeed > 0 ? 0.001 : -0.0001);

            const updated = {
                speed: parseFloat(newSpeed.toFixed(1)),
                rpm: Math.round(newRPM),
                brakingIntensity: parseFloat(newBraking.toFixed(2)),
                vibration: parseFloat(newVibration.toFixed(2)),
                batteryTemp: parseFloat(newBatteryTemp.toFixed(1)),
                soc: parseFloat(newSOC.toFixed(2)),
            };

            if (isOnline) {
                updateMetrics(updated);
                // If we have backlogged data, "sync" it
                if (bufferRef.current.length > 0) {
                    console.group('Backlogged Data Sync');
                    console.log(`Syncing ${bufferRef.current.length} historical events...`);
                    bufferRef.current = [];
                    setSyncStatus('synced');
                    console.groupEnd();
                }
            } else {
                // Offline mode: Buffer data
                bufferRef.current.push({ ts: Date.now(), ...updated });
                setSyncStatus('pending');
                updateMetrics(updated); // Still update UI locally
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [metrics, isOnline, updateMetrics, setSyncStatus]);

    return { bufferCount: bufferRef.current.length };
};

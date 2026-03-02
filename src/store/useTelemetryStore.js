import { create } from 'zustand';

const INITIAL_METRICS = {
  speed: 0,
  rpm: 0,
  soc: 85, // State of Charge for EV
  batteryTemp: 28,
  engineTemp: 90,
  brakingIntensity: 0,
  acceleration: 0,
  latitude: 34.0522,
  longitude: -118.2437,
  vibration: 0.1,
  fuelLevel: 75,
};

export const useTelemetryStore = create((set) => ({
  metrics: INITIAL_METRICS,
  history: [],
  mode: 'FLEET', // FLEET, SAFETY, PREDICTIVE, EV_BATTERY, INSURANCE, SMART_CITY, RACE
  lapTimes: [],
  currentLapTime: 0,
  isOnline: true,
  syncStatus: 'synced', // synced, pending, offline

  updateMetrics: (newMetrics) => set((state) => {
    const updatedMetrics = { ...state.metrics, ...newMetrics };
    const newHistory = [...state.history, { ts: Date.now(), ...updatedMetrics }].slice(-100);

    // Update lap timer if in Race mode
    let newLapTime = state.currentLapTime;
    if (state.mode === 'RACE') {
      newLapTime += 100; // Simulating 100ms increment
    }

    return {
      metrics: updatedMetrics,
      history: newHistory,
      currentLapTime: newLapTime
    };
  }),

  addLapTime: (time) => set((state) => ({
    lapTimes: [time, ...state.lapTimes].slice(0, 10),
    currentLapTime: 0
  })),

  setMode: (mode) => set({ mode, currentLapTime: 0 }),
  setSyncStatus: (status) => set({ syncStatus: status }),
  toggleOnline: () => set((state) => ({ isOnline: !state.isOnline })),
}));

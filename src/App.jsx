import React, { useEffect, useState } from 'react';
import { useTelemetryStore } from './store/useTelemetryStore';
import { useTelemetryStream } from './store/useTelemetryStream';
import { Navbar } from './components/dashboard/Navbar';
import { Sidebar } from './components/dashboard/Sidebar';
import { DashboardHome } from './components/dashboard/DashboardHome';

function App() {
  const { mode } = useTelemetryStore();
  const [scrolled, setScrolled] = useState(false);

  // Start telemetry simulation
  useTelemetryStream();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    // Apply background mode class to body
    document.body.className = `mode-${mode}`;

    return () => window.removeEventListener('scroll', handleScroll);
  }, [mode]);

  return (
    <div className="min-h-screen">
      <Navbar scrolled={scrolled} />

      <div className="dashboard-container">
        <Sidebar aria-label="Main Navigation" />

        <main className="main-content">
          <DashboardHome />
        </main>
      </div>
    </div>
  );
}

export default App;

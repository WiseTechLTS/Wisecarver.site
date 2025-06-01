/**
 * MarketOutlook.jsx
 * Component to display a Chart.js bar chart of the US LiFi market growth.
 * Uses Tailwind CSS for styling and manages chart lifecycle with React hooks.
 */
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js with auto-registered components

const MarketOutlook = () => {
  const canvasRef = useRef(null); // Ref for the canvas element
  const chartInstanceRef = useRef(null); // Ref for the Chart.js instance

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext('2d');

    // Destroy existing chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
      chartInstanceRef.current = null;
    }

    // Create new Chart.js instance
    chartInstanceRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['2025', '2026', '2027', '2028', '2029', '2030'],
        datasets: [
          {
            label: 'Market Growth ($M)',
            data: [100, 167, 280, 468, 785, 1315],
            backgroundColor: '#28a745',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Market Size ($M)',
            },
          },
          x: {
            title: {
              display: true,
              text: 'Year',
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
      },
    });

    // Cleanup on unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section id="market" className="py-16 md:py-24 bg-white fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">Market Outlook</h2>
        <p className="text-base md:text-lg text-center max-w-3xl mx-auto mb-8 md:mb-12">
          The US LiFi market is projected to grow at a 67.5% CAGR from 2025–2030, driven by IoT and smart cities. Challenges
          include line-of-sight limitations.
        </p>
        <div className="w-full max-w-4xl mx-auto" style={{ height: '400px' }}>
          <canvas id="marketChart" ref={canvasRef} />
        </div>
      </div>
    </section>
  );
};

export default MarketOutlook;

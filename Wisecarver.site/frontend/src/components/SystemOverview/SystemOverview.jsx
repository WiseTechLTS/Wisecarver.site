/**
 * SystemOverview.jsx
 * Component to display a D3.js force-directed network visualization of the LiFi and Edge AI system.
 * Uses Tailwind CSS for styling and includes a technical workflow description.
 */
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3'; // Import D3.js using ES modules

const SystemOverview = () => {
  const svgRef = useRef(null); // Ref for the SVG element

  // D3 Visualization
  useEffect(() => {
    if (!svgRef.current) return;

    const nodes = [
      { id: 'pureLiFi XC', type: 'pureLiFi XC', color: '#00C4B4' },
      { id: 'Patient Devices (50-50) - VISHAY BPW21R (1)', type: 'VISHAY BPW21R Photodiode', color: '#FFA500' },
      { id: 'Patient Devices (50-50) - VISHAY BPW21R (2)', type: 'VISHAY BPW21R Photodiode', color: '#FFA500' },
      { id: 'Jetson Nano 98.9% Accuracy', type: 'NVIDIA Jetson Nano', color: '#FF69B4' },
      { id: 'TruLiFi LED 1 Gbps', type: 'Signify TruLiFi LED', color: '#1E90FF' },
      { id: 'EHR System', type: 'EHR System', color: '#800080' },
    ];

    const links = [
      { source: 'pureLiFi XC', target: 'Patient Devices (50-50) - VISHAY BPW21R (1)' },
      { source: 'pureLiFi XC', target: 'Patient Devices (50-50) - VISHAY BPW21R (2)' },
      { source: 'pureLiFi XC', target: 'Jetson Nano 98.9% Accuracy' },
      { source: 'pureLiFi XC', target: 'TruLiFi LED 1 Gbps' },
      { source: 'Jetson Nano 98.9% Accuracy', target: 'EHR System' },
    ];

    const svg = d3.select(svgRef.current);
    const width = 600;
    const height = 400;

    // Clear existing content to prevent duplication
    svg.selectAll('*').remove();

    const simulation = d3
      .forceSimulation(nodes)
      .force('link', d3.forceLink(links).id((d) => d.id).distance(100))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2));

    const link = svg
      .append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('class', 'link')
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.6);

    const node = svg
      .append('g')
      .attr('class', 'nodes')
      .selectAll('g')
      .data(nodes)
      .enter()
      .append('g')
      .attr('class', 'node')
      .call(
        d3
          .drag()
          .on('start', (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on('drag', (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on('end', (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          })
      );

    node.append('circle').attr('r', 20).attr('fill', (d) => d.color);

    node
      .append('text')
      .attr('class', 'label')
      .attr('dy', 35)
      .attr('text-anchor', 'middle')
      .text((d) => d.id);

    simulation.on('tick', () => {
      link
        .attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y);

      node.attr('transform', (d) => `translate(${d.x},${d.y})`);
    });

    // Cleanup on unmount
    return () => {
      svg.selectAll('*').remove();
    };
  }, []);

  return (
    <section id="system-overview" className="py-16 md:py-24 bg-gray-100 fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">System Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <svg
              ref={svgRef}
              width="600"
              height="400"
              className="w-full h-auto rounded-lg shadow-md"
              role="img"
              aria-label="LiFi and Edge AI Network Diagram"
            />
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center">LiFi and Edge AI Network</h3>
            <p className="text-base md:text-lg text-center max-w-3xl mx-auto">
              Our systems enable high-performance monitoring by transmitting data via light at speeds up to 1 Gbps,
              processing it locally for real-time insights.
            </p>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border-l-4 border-blue-800">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Technical Workflow</h3>
            <p className="text-base md:text-lg mb-4">
              Patient wearables collect vital signs, transmitting data through LiFi hardware using OOK modulation at 100
              Mbps–1 Gbps. The NVIDIA Jetson Nano, running TensorFlow Lite models, processes data with &lt; 10ms latency,
              integrating with HL7-compliant EHR systems or triggering provider alerts.
            </p>
            <p className="text-base md:text-lg">
              Security is ensured via AES-256 encryption and localized LiFi transmission, meeting HIPAA requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemOverview;

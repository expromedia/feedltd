import React from 'react';
import {
  SatelliteIcon,
  CpuIcon,
  MapIcon,
  CheckCircle2Icon,
  XCircleIcon } from
'lucide-react';
export function Technology() {
  return (
    <section
      id="technology"
      className="py-20 lg:py-28 bg-brand-dark-light text-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-2 text-brand-gold font-semibold tracking-wide uppercase text-sm">
            Our Technology
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Satellite-Based Exploration
          </h2>
          <p className="text-gray-300 text-lg">
            We use advanced satellite sensors to detect the unique
            electromagnetic signatures of underground oil and gas reservoirs. It
            is simple, fast, and highly accurate.
          </p>
        </div>

        {/* How It Works - 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-brand-green/30 z-0"></div>

          {[
          {
            icon: <SatelliteIcon size={32} />,
            title: '1. Data Acquisition',
            desc: 'Satellites scan the target area from space, capturing deep subsurface electromagnetic data without touching the ground.'
          },
          {
            icon: <CpuIcon size={32} />,
            title: '2. AI-Powered Analysis',
            desc: 'Our proprietary algorithms process the data to identify the exact location and depth of hydrocarbon reserves.'
          },
          {
            icon: <MapIcon size={32} />,
            title: '3. Drill-Ready Results',
            desc: 'We deliver precise 3D maps and drilling coordinates, telling you exactly where to drill for commercial success.'
          }].
          map((step, idx) =>
          <div
            key={idx}
            className="relative z-10 flex flex-col items-center text-center bg-brand-dark p-8 rounded-sm border border-white/5 shadow-xl">
            
              <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,107,63,0.3)] border-4 border-brand-dark-light">
                {step.icon}
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          )}
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto bg-brand-dark rounded-sm overflow-hidden border border-white/10 shadow-2xl">
          <div className="p-6 md:p-8 border-b border-white/10 text-center">
            <h3 className="text-2xl font-heading font-bold">
              Why Switch from Seismic?
            </h3>
            <p className="text-gray-400 mt-2 text-sm">
              A clear comparison of exploration methods
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5">
                  <th className="p-4 md:p-6 font-heading font-semibold text-gray-300 border-b border-white/10 w-1/3">
                    Feature
                  </th>
                  <th className="p-4 md:p-6 font-heading font-bold text-brand-gold border-b border-white/10 w-1/3 bg-brand-gold/5">
                    FEEDL Satellite Tech
                  </th>
                  <th className="p-4 md:p-6 font-heading font-semibold text-gray-400 border-b border-white/10 w-1/3">
                    Traditional Seismic
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                {[
                {
                  feature: 'Time to Results',
                  sat: 'Weeks',
                  seis: 'Months to Years'
                },
                {
                  feature: 'Exploration Cost',
                  sat: 'Fraction of the cost',
                  seis: 'Millions of Dollars'
                },
                {
                  feature: 'Environmental Impact',
                  sat: 'Zero (Eco-Friendly)',
                  seis: 'High (Clearing land, explosives)'
                },
                {
                  feature: 'Terrain Limitations',
                  sat: 'None (Scans from space)',
                  seis: 'Restricted by swamps, mountains'
                },
                {
                  feature: 'Risk of Dry Wells',
                  sat: 'Significantly Reduced',
                  seis: 'High'
                }].
                map((row, idx) =>
                <tr
                  key={idx}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  
                    <td className="p-4 md:p-6 text-gray-300 font-medium">
                      {row.feature}
                    </td>
                    <td className="p-4 md:p-6 text-white font-semibold bg-brand-gold/5 flex items-center gap-2">
                      <CheckCircle2Icon
                      className="text-brand-green shrink-0"
                      size={18} />
                    
                      {row.sat}
                    </td>
                    <td className="p-4 md:p-6 text-gray-500">
                      <div className="flex items-center gap-2">
                        <XCircleIcon
                        className="text-red-500/70 shrink-0"
                        size={18} />
                      
                        {row.seis}
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>);

}
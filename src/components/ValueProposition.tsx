import React from 'react';
import { PiggyBankIcon, ZapIcon, ShieldAlertIcon, LeafIcon } from 'lucide-react';
export function ValueProposition() {
  const values = [
  {
    icon: <PiggyBankIcon size={32} />,
    title: 'Cost Savings',
    description:
    'Save millions of dollars by eliminating expensive seismic surveys and reducing dry well drilling.',
    color: 'text-brand-gold',
    bg: 'bg-brand-gold/10'
  },
  {
    icon: <ZapIcon size={32} />,
    title: 'Faster Results',
    description:
    'Get drill-ready coordinates in weeks, not months or years. Accelerate your path to first oil.',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  {
    icon: <ShieldAlertIcon size={32} />,
    title: 'Lower Risk',
    description:
    'De-risk your exploration portfolio with highly accurate, regulator-approved data before committing capital.',
    color: 'text-brand-green',
    bg: 'bg-brand-green/10'
  },
  {
    icon: <LeafIcon size={32} />,
    title: 'Eco-Friendly',
    description:
    'Zero environmental footprint. No land clearing, no explosives, no community disruption.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10'
  }];

  return (
    <section className="py-20 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">
            Why Choose FEEDL?
          </h2>
          <p className="text-gray-600 text-lg">
            The traditional way of finding oil is broken. We offer a smarter,
            safer, and more profitable alternative.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) =>
          <div
            key={idx}
            className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 text-center flex flex-col items-center">
            
              <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${val.bg} ${val.color}`}>
              
                {val.icon}
              </div>
              <h3 className="text-lg font-heading font-bold text-brand-dark mb-3">
                {val.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {val.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>);

}
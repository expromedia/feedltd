import React from 'react';
import { SearchIcon, BarChart3Icon, MapIcon, FactoryIcon } from 'lucide-react';
export function Services() {
  const services = [
  {
    icon: <SearchIcon size={28} />,
    title: 'Exploration Support',
    description:
    'We guide your exploration strategy by identifying high-probability hydrocarbon zones before you deploy ground teams or rigs.'
  },
  {
    icon: <BarChart3Icon size={28} />,
    title: 'Asset Evaluation',
    description:
    'Accurately assess the value and potential of oil blocks before acquisition or farm-in agreements.'
  },
  {
    icon: <MapIcon size={28} />,
    title: 'Acreage Assessment',
    description:
    'Rapidly scan massive license areas to pinpoint the most lucrative sections, optimizing your acreage relinquishment strategy.'
  },
  {
    icon: <FactoryIcon size={28} />,
    title: 'Oil & Gas Resource Development',
    description:
    'End-to-end data support to move your asset from discovery to commercial production efficiently.'
  }];

  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-2 text-brand-green font-semibold tracking-wide uppercase text-sm">
            What We Offer
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg">
            Comprehensive data and intelligence services designed to de-risk
            every stage of the exploration lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) =>
          <div
            key={idx}
            className="group bg-white border border-gray-100 p-8 rounded-sm shadow-sm hover:shadow-xl hover:border-brand-green/30 transition-all duration-300">
            
              <div className="w-14 h-14 bg-brand-green-light text-brand-green rounded-sm flex items-center justify-center mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>);

}
import React from 'react';
import { EyeIcon, TargetIcon, StarIcon } from 'lucide-react';
export function VisionMission() {
  return (
    <section className="py-20 bg-brand-green-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-t-brand-green">
            <div className="w-12 h-12 bg-brand-green-light text-brand-green rounded-sm flex items-center justify-center mb-6">
              <EyeIcon size={24} />
            </div>
            <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To become the company of choice in Nigeria for advanced,
              efficient, and sustainable oil and gas exploration technology.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-t-brand-gold">
            <div className="w-12 h-12 bg-brand-gold/10 text-brand-gold rounded-sm flex items-center justify-center mb-6">
              <TargetIcon size={24} />
            </div>
            <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4">
              Our Mission
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>
                Ensure Energy Security
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>
                Drive Sustainability
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>
                Maintain Strong Governance
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>
                Deliver Maximum Customer Value
              </li>
            </ul>
          </div>

          {/* Core Values */}
          <div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-t-brand-dark">
            <div className="w-12 h-12 bg-gray-100 text-brand-dark rounded-sm flex items-center justify-center mb-6">
              <StarIcon size={24} />
            </div>
            <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4">
              Core Values
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-sm text-center text-sm font-semibold text-brand-dark border border-gray-100">
                Financial Security
              </div>
              <div className="bg-gray-50 p-3 rounded-sm text-center text-sm font-semibold text-brand-dark border border-gray-100">
                Technology
              </div>
              <div className="bg-gray-50 p-3 rounded-sm text-center text-sm font-semibold text-brand-dark border border-gray-100">
                Respect
              </div>
              <div className="bg-gray-50 p-3 rounded-sm text-center text-sm font-semibold text-brand-dark border border-gray-100">
                Excellence
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
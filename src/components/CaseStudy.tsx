import React from 'react';
import {
  TrendingDownIcon,
  ClockIcon,
  CheckCircleIcon,
  QuoteIcon } from
'lucide-react';
export function CaseStudy() {
  return (
    <section id="case-study" className="py-20 lg:py-28 bg-brand-green-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-2 text-brand-green font-semibold tracking-wide uppercase text-sm">
            Proof of Concept
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">
            The Ogbama Field Success Story
          </h2>
          <p className="text-gray-600 text-lg">
            Real results from the field. How our satellite technology led to
            commercial production in Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Story Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-4 border-b border-gray-100 pb-4">
                The Challenge
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Platform Petroleum Limited faced high risks and massive costs
                associated with traditional seismic exploration at the Ogbama
                Field. They needed a faster, more cost-effective way to identify
                viable drilling locations without committing millions of dollars
                upfront.
              </p>
            </div>

            <div className="bg-brand-green text-white p-8 rounded-sm shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <h3 className="text-xl font-heading font-bold mb-4 border-b border-white/20 pb-4 relative z-10">
                The FEEDL Solution
              </h3>
              <p className="text-white/90 leading-relaxed relative z-10">
                FEEDL deployed its satellite-based remote sensing technology to
                scan the Ogbama Field. Within weeks, we provided precise 3D
                subsurface maps and drill-ready coordinates, completely
                bypassing the need for expensive seismic surveys.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 border-l-4 border-l-brand-gold">
              <h3 className="text-xl font-heading font-bold text-brand-dark mb-4 border-b border-gray-100 pb-4">
                The Result
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Based on FEEDL's coordinates, Platform Petroleum drilled the
                recommended locations. The result was a resounding success,
                leading directly to{' '}
                <strong className="text-brand-dark">
                  commercial oil production
                </strong>
                .
              </p>
            </div>
          </div>

          {/* Metrics & Testimonial */}
          <div className="lg:col-span-5 space-y-6">
            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 text-center">
                <div className="w-10 h-10 mx-auto bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-3">
                  <TrendingDownIcon size={20} />
                </div>
                <div className="text-2xl font-bold text-brand-dark mb-1">
                  Millions
                </div>
                <div className="text-xs text-gray-500 uppercase font-semibold">
                  Saved in Costs
                </div>
              </div>
              <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 text-center">
                <div className="w-10 h-10 mx-auto bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-3">
                  <ClockIcon size={20} />
                </div>
                <div className="text-2xl font-bold text-brand-dark mb-1">
                  Months
                </div>
                <div className="text-xs text-gray-500 uppercase font-semibold">
                  Saved in Time
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircleIcon className="text-brand-green" size={24} />
                <span className="font-semibold text-brand-dark">
                  NUPRC Approved Technology
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircleIcon className="text-brand-green" size={24} />
                <span className="font-semibold text-brand-dark">
                  Platform Petroleum Verified
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircleIcon className="text-brand-green" size={24} />
                <span className="font-semibold text-brand-dark">
                  Commercial Production Achieved
                </span>
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="bg-brand-dark text-white p-8 rounded-sm shadow-lg relative mt-8">
              <QuoteIcon
                className="absolute top-6 right-6 text-white/10"
                size={48} />
              
              <p className="text-gray-300 italic relative z-10 mb-6 leading-relaxed">
                "FEEDL's satellite technology provided us with the exact
                coordinates we needed. We drilled based on their data, and it
                resulted in successful commercial production at the Ogbama
                Field. It completely changed our exploration economics."
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center font-bold text-brand-dark text-xl">
                  PP
                </div>
                <div>
                  <div className="font-bold">Platform Petroleum Limited</div>
                  <div className="text-sm text-gray-400">
                    Operating Partner, Ogbama Field
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
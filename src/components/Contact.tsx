import React, { useState } from 'react';
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  UserIcon,
  BuildingIcon,
  SendIcon } from
'lucide-react';
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>(
    'idle'
  );
  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
      });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-2 text-brand-green font-semibold tracking-wide uppercase text-sm">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">
            Schedule a Presentation
          </h2>
          <p className="text-gray-600 text-lg">
            Contact us today to learn how our satellite technology can de-risk
            your next exploration project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info & Map */}
          <div>
            <div className="bg-brand-dark text-white p-8 rounded-sm shadow-lg mb-8">
              <h3 className="text-2xl font-heading font-bold mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-green/20 rounded-sm flex items-center justify-center text-brand-green shrink-0">
                    <UserIcon size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Mr. Kenneth Otamiri</div>
                    <div className="text-gray-400 text-sm">
                      Managing Director
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-green/20 rounded-sm flex items-center justify-center text-brand-green shrink-0">
                    <MapPinIcon size={20} />
                  </div>
                  <div>
                    <div className="font-bold mb-1">Head Office</div>
                    <div className="text-gray-400 text-sm leading-relaxed">
                      CRID Estate, Office Block Flat 2, 3rd Floor,
                      <br />
                      Plot 1234 Zakari A Kyari Street,
                      <br />
                      Mabushi, Abuja
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-green/20 rounded-sm flex items-center justify-center text-brand-green shrink-0">
                    <PhoneIcon size={20} />
                  </div>
                  <div className="text-gray-300">07060941707</div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-green/20 rounded-sm flex items-center justify-center text-brand-green shrink-0">
                    <MailIcon size={20} />
                  </div>
                  <a
                    href="mailto:kenneth.otamiri@futureexplorationenergy.com"
                    className="text-brand-gold hover:text-white transition-colors break-all text-sm sm:text-base">
                    
                    kenneth.otamiri@futureexplorationenergy.com
                  </a>
                </div>
              </div>
            </div>

            {/* Static Map Placeholder */}
            <div className="h-64 bg-gray-200 rounded-sm overflow-hidden relative border border-gray-300">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Map of Abuja"
                className="w-full h-full object-cover opacity-60 grayscale" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white px-4 py-2 rounded-sm shadow-md font-bold text-brand-dark flex items-center gap-2">
                  <MapPinIcon className="text-brand-green" size={18} />
                  Mabushi, Abuja
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-sm shadow-xl border border-gray-100">
            <h3 className="text-2xl font-heading font-bold text-brand-dark mb-6">
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition-all"
                    placeholder="John Doe" />
                  
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition-all"
                    placeholder="Oil & Gas Corp" />
                  
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition-all"
                    placeholder="john@company.com" />
                  
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition-all"
                    placeholder="+234 ..." />
                  
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  
                  How can we help you? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition-all resize-none"
                  placeholder="I am interested in a presentation for our upcoming exploration project...">
                </textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className={`w-full py-4 rounded-sm font-bold flex items-center justify-center gap-2 transition-colors ${status === 'success' ? 'bg-green-500 text-white' : 'bg-brand-green text-white hover:bg-brand-green-dark'}`}>
                
                {status === 'submitting' ?
                'Sending...' :
                status === 'success' ?
                'Message Sent!' :

                <>
                    Send Message
                    <SendIcon size={18} />
                  </>
                }
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>);

}
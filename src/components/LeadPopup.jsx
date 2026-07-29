import React, { useState, useEffect } from 'react';

const cities = [
  'Virginia Beach', 'Norfolk', 'Chesapeake', 'Newport News', 'Hampton', 'Portsmouth', 'Suffolk'
];

const services = [
  '🚨 24/7 Emergency Electrical Repair',
  '⚡ Electrical Panel Upgrade (200A/400A)',
  '🚘 Level 2 EV Charging Station',
  '🔋 Whole Home Standby Generator',
  '💡 Custom & Recessed LED Lighting',
  '🏊 Pool / Hot Tub Electrical Wiring',
  '🏢 Commercial Electrical Contracting',
  '🔍 General Electrical Inspection'
];

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Virginia Beach',
    service: '🚨 24/7 Emergency Electrical Repair'
  });

  useEffect(() => {
    // Open immediately on load each time page is loaded
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "popup",
        ...formData
      })
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-gradient-to-br from-brand-card via-brand-dark to-brand-card border border-brand-gold/50 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-gold-glow/30 text-left overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full bg-brand-dark/60 hover:bg-gray-800 transition-all focus:outline-none"
          aria-label="Close modal"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="text-5xl">⚡</div>
            <h3 className="font-heading text-2xl font-extrabold text-brand-gold">
              Request Received Immediately!
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Thank you, <strong className="text-white">{formData.name}</strong>. A Scott's Electric Master Electricians serving <strong>{formData.city}</strong> will call your phone at <strong className="text-brand-amber">{formData.phone}</strong> shortly.
            </p>
            <div className="pt-4">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-brand-gold text-black font-extrabold text-xs px-6 py-3 rounded-full hover:bg-yellow-400 transition-all shadow-gold-glow"
              >
                Continue Browsing Site →
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="text-center space-y-1.5">
              <span className="text-[10px] font-extrabold tracking-widest text-brand-gold uppercase bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20">
                ⚡ Rapid 757 Electrical Dispatch
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                Request a <span class="gold-gradient-text">Fast Call Back</span>
              </h2>
              <p className="text-xs text-gray-300">
                Get priority callback from a licensed Master Electrician across Virginia Beach, Norfolk, Chesapeake & 757.
              </p>
            </div>

            <form 
              name="popup" 
              method="POST" 
              data-netlify="true" 
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit} 
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="popup" />
              <p className="hidden">
                <label>Don’t fill this out if human: <input name="bot-field" /></label>
              </p>

              <div>
                <label className="block text-[11px] font-bold text-gray-300 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-brand-dark/90 border border-gray-800 text-white rounded-xl p-3 text-xs focus:border-brand-gold focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-gray-300 mb-1">Phone Number (757) *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(757) 536-0478"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-brand-dark/90 border border-gray-800 text-white rounded-xl p-3 text-xs focus:border-brand-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-brand-dark/90 border border-gray-800 text-white rounded-xl p-3 text-xs focus:border-brand-gold focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-gray-300 mb-1">757 Location *</label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-brand-dark/90 border border-gray-800 text-white rounded-xl p-3 text-xs focus:border-brand-gold focus:outline-none"
                  >
                    {cities.map(c => (
                      <option key={c} value={c}>{c}, VA</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-300 mb-1">Service Needed *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-brand-dark/90 border border-gray-800 text-white rounded-xl p-3 text-xs focus:border-brand-gold focus:outline-none"
                  >
                    {services.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-black font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-gold-glow transition-all transform hover:scale-[1.01] mt-2"
              >
                ⚡ Request Priority Call Back Now
              </button>

              <p className="text-[10px] text-gray-400 text-center">
                🔒 We respect your privacy. No spam. 24/7 Dispatch Hotline: (757) 536-0478
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

import React, { useState } from 'react';

const serviceOptions = [
  { id: 'panel', name: 'Electrical Panel Upgrade (200A/400A)', basePrice: 1800, icon: '⚡' },
  { id: 'ev', name: 'Level 2 EV Charging Station', basePrice: 650, icon: '🚘' },
  { id: 'generator', name: 'Whole Home Standby Generator', basePrice: 4200, icon: '🔋' },
  { id: 'lighting', name: 'Recessed & Ambient Custom Lighting', basePrice: 550, icon: '💡' },
  { id: 'smarthome', name: 'Smart Home Automation System', basePrice: 850, icon: '📱' },
  { id: 'pool', name: 'Pool / Hot Tub Electrical Wiring', basePrice: 950, icon: '🏊' },
  { id: 'inspection', name: 'Electrical Safety Inspection & Audit', basePrice: 199, icon: '🔍' },
];

const cities = [
  'Virginia Beach', 'Norfolk', 'Chesapeake', 'Newport News', 'Hampton', 'Portsmouth', 'Suffolk'
];

export default function InteractiveQuoteCalculator() {
  const [selectedServices, setSelectedServices] = useState(['panel']);
  const [selectedCity, setSelectedCity] = useState('Virginia Beach');
  const [urgency, setUrgency] = useState('standard');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  const toggleService = (id) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const calculateEstimate = () => {
    let total = selectedServices.reduce((sum, id) => {
      const srv = serviceOptions.find(s => s.id === id);
      return sum + (srv ? srv.basePrice : 0);
    }, 0);

    if (urgency === 'emergency') total *= 1.15;
    return Math.round(total);
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceNames = selectedServices.map(id => {
      const srv = serviceOptions.find(s => s.id === id);
      return srv ? srv.name : id;
    }).join(', ');

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "quote-request",
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        city: selectedCity,
        urgency: urgency,
        services: serviceNames,
        estimatedBudget: `$${calculateEstimate()}`
      })
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true));
  };

  return (
    <div className="bg-gradient-to-br from-brand-card via-brand-dark to-brand-card p-6 md:p-10 rounded-3xl border border-gray-800 shadow-gold-glow max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <span className="text-xs font-bold text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full border border-brand-gold/20 uppercase tracking-widest">
          Instant 757 Electrical Estimator
        </span>
        <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-white mt-3">
          Calculate Your Electrical Project Estimate
        </h2>
        <p className="text-xs md:text-sm text-gray-400 mt-1">
          Select your services and location in Hampton Roads for an immediate budget estimate
        </p>
      </div>

      {submitted ? (
        <div className="bg-emerald-950/60 border border-emerald-500/40 p-8 rounded-2xl text-center space-y-4">
          <div className="text-4xl">✅</div>
          <h3 className="font-heading text-2xl font-bold text-emerald-400">
            Quote Request Received!
          </h3>
          <p className="text-sm text-gray-300">
            Thank you, <strong className="text-white">{formData.name}</strong>. A Scott's Electric Master Electrician serving <strong>{selectedCity}</strong> will contact you at <strong>{formData.phone}</strong> within 15 minutes.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs text-brand-gold hover:underline font-bold"
            >
              ← Calculate Another Quote
            </button>
          </div>
        </div>
      ) : (
        <form 
          name="quote-request" 
          method="POST" 
          data-netlify="true" 
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit} 
          className="space-y-8"
        >
          {/* Netlify hidden form inputs */}
          <input type="hidden" name="form-name" value="quote-request" />
          <p className="hidden">
            <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
          </p>

          {/* Step 1: Services */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-brand-amber mb-3">
              1. Select Service(s) Required:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {serviceOptions.map(service => {
                const active = selectedServices.includes(service.id);
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => toggleService(service.id)}
                    className={`flex items-center justify-between p-3.5 rounded-xl text-left border transition-all text-xs font-semibold ${
                      active 
                        ? 'bg-brand-cardHover border-brand-gold text-white shadow-gold-glow' 
                        : 'bg-brand-dark/80 border-gray-800 text-gray-400 hover:border-gray-700'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="text-lg">{service.icon}</span>
                      <span>{service.name}</span>
                    </span>
                    <span className="font-mono text-brand-gold">
                      ${service.basePrice}+
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: City & Urgency */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-brand-amber mb-2">
                2. Your 757 City / Location:
              </label>
              <select
                name="city"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full bg-brand-dark border border-gray-800 text-white rounded-xl p-3 text-xs focus:border-brand-gold focus:outline-none"
              >
                {cities.map(c => (
                  <option key={c} value={c}>{c}, VA</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-brand-amber mb-2">
                3. Service Timeline:
              </label>
              <select
                name="urgency"
                value={urgency}
                onChange={(e) => setUrgency(e.target.value)}
                className="w-full bg-brand-dark border border-gray-800 text-white rounded-xl p-3 text-xs focus:border-brand-gold focus:outline-none"
              >
                <option value="standard">Standard Appointment (Scheduled)</option>
                <option value="sameDay">Same-Day Service Dispatch</option>
                <option value="emergency">🚨 24/7 Immediate Emergency Dispatch</option>
              </select>
            </div>
          </div>

          {/* Estimated Total Display */}
          <div className="bg-brand-dark/90 p-5 rounded-2xl border border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-gray-400 block">Estimated Starting Budget Range:</span>
              <span className="font-heading text-3xl font-extrabold text-brand-gold">
                ${calculateEstimate()} - ${Math.round(calculateEstimate() * 1.25)}
              </span>
              <span className="text-[10px] text-gray-500 block">Includes parts, labor & local code compliance assessment</span>
            </div>
            <div className="text-right">
              <span className="inline-block bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-[11px] px-3 py-1 rounded-full font-semibold">
                Free On-Site Confirmation
              </span>
            </div>
          </div>

          {/* Step 3: Contact details */}
          <div className="space-y-4 pt-2 border-t border-gray-800">
            <label className="block text-xs font-bold uppercase tracking-wider text-brand-amber">
              4. Request Your Lock-In Estimate & Appointment:
            </label>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                name="name"
                required
                placeholder="Full Name *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-brand-dark border border-gray-800 text-white rounded-xl p-3 text-xs focus:border-brand-gold focus:outline-none"
              />
              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone Number (757) *"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-brand-dark border border-gray-800 text-white rounded-xl p-3 text-xs focus:border-brand-gold focus:outline-none"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email Address *"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-brand-dark border border-gray-800 text-white rounded-xl p-3 text-xs focus:border-brand-gold focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-black font-extrabold text-sm py-4 rounded-xl shadow-gold-glow transition-all transform hover:scale-[1.01]"
            >
              Get Free Locked-In Quote for {selectedCity} →
            </button>
          </div>

        </form>
      )}
    </div>
  );
}

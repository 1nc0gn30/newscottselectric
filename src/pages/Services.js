import React from 'react';

const services = [
  { name: "Appliance Installation", description: "Expert installation of all major home appliances." },
  { name: "Electrical Panel Installation", description: "We ensure safe and efficient electrical panel installations." },
  { name: "EV Charging Station Installation", description: "Install a reliable electric vehicle charging station at your home." },
  { name: "Heater Installation", description: "Professional heater installation services for residential properties." },
  { name: "Lighting Installation", description: "Indoor and outdoor lighting installation and repairs." },
  { name: "Outlet Installation", description: "Fast and safe installation of electrical outlets in any room." },
  { name: "Residential Services", description: "Comprehensive electrical services for your home." },
  { name: "Security System Repair", description: "Keep your home secure with our repair services." },
  { name: "Solar Panel Installation", description: "Harness renewable energy with our solar panel installations." },
  { name: "Wiring Repair", description: "Repair and replacement of faulty or outdated wiring." },
  { name: "Commercial Services", description: "Electrical services tailored to your business needs." },
  { name: "Electrical Panel Repair", description: "We provide troubleshooting and repair of electrical panels." },
  { name: "Generator Installation", description: "Reliable generator installations to ensure power during outages." },
  { name: "Home Theater Installation", description: "Enjoy the ultimate home theater experience with our installation services." },
  { name: "Lighting Repair", description: "Get your lights fixed quickly with our professional repair services." },
  { name: "Outlet Repair", description: "Repair damaged or malfunctioning electrical outlets." },
  { name: "Security System Installation", description: "Install advanced security systems to protect your property." },
  { name: "Smoke Detector Installation", description: "Stay safe with proper smoke detector installation." },
  { name: "Wiring Installation", description: "Full wiring installation services for new or remodeled homes." },
];

const Services = () => {
  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <div className="service-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

'use client';

import { useState } from 'react';
import type { Metadata } from 'next';

// Note: metadata export requires this file to be a server component
// For client component with form, we'll skip metadata or use generateMetadata

// Page Header
function PageHeader() {
  return (
    <section className="relative pt-32 pb-20 bg-charcoal overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-full" style={{
          backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(201, 169, 98, 0.4) 0%, transparent 50%)',
        }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <span className="section-label !text-gold mb-6 inline-block">Get In Touch</span>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6">
          Contact Us
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Ready to create something delicious? We&apos;d love to hear from you.
        </p>
      </div>
    </section>
  );
}

// Contact Form
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    guests: '',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-24 lg:py-32 bg-cream pattern-overlay">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-6">
              Let&apos;s Plan Your Event
            </h2>
            <p className="text-charcoal-light text-lg mb-10 leading-relaxed">
              Whether you&apos;re planning a corporate function, wedding reception, or private party,
              our team is ready to help you create an unforgettable experience.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-charcoal">Address</h4>
                  <p className="text-charcoal-light">Lagos, Nigeria</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-charcoal">Email</h4>
                  <a href="mailto:info@comfortchefsnig.com" className="text-terracotta hover:underline">
                    info@comfortchefsnig.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-charcoal">Phone</h4>
                  <a href="tel:+2341234567890" className="text-terracotta hover:underline">
                    +234 123 456 7890
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-display text-lg font-semibold text-charcoal mb-4">Operating Hours</h4>
              <div className="space-y-2 text-charcoal-light">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium text-charcoal">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium text-charcoal">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-charcoal">By Appointment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl">
            <h3 className="font-display text-2xl font-semibold text-charcoal mb-6">
              Request a Quote
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-cream-dark focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-cream-dark focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-cream-dark focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
                    placeholder="+234 xxx xxx xxxx"
                  />
                </div>
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-charcoal mb-2">
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-cream-dark focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all bg-white"
                  >
                    <option value="">Select event type</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="wedding">Wedding</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="private">Private Dinner</option>
                    <option value="canteen">Canteen Management</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-charcoal mb-2">
                    Expected Guests
                  </label>
                  <input
                    type="text"
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-cream-dark focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
                    placeholder="e.g., 50-100"
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-charcoal mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-cream-dark focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-cream-dark focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all resize-none"
                  placeholder="Tell us more about your event..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHeader />
      <ContactForm />
    </>
  );
}

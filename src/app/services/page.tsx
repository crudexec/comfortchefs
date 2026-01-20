import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Comfort Chefs',
  description: 'Premium catering services for corporate events, weddings, private parties, and canteen management. Serving Nigeria\'s top organizations.',
};

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
        <span className="section-label !text-gold mb-6 inline-block">What We Offer</span>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6">
          Our Services
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Experience unparalleled excellence in service from start to finish.
        </p>
      </div>
    </section>
  );
}

// Services Grid
function ServicesGrid() {
  const services = [
    {
      category: 'Corporate Events',
      items: [
        'Company Cafeteria Management',
        'Christmas Party Catering',
        'Cocktail Events',
        'Office Luncheons & Tea Breaks',
        'Grand Openings',
        'Staff Training Catering',
      ],
      description: 'Complete catering solutions for businesses of all sizes. We manage canteens for some of Nigeria\'s leading corporations.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      category: 'Personal Events',
      items: [
        'Wedding Receptions',
        'Private Parties',
        'Birthday Celebrations',
        'Burial Receptions',
        'Barbecues & Outdoor Events',
        'Anniversary Celebrations',
      ],
      description: 'Make your special moments unforgettable with our bespoke catering services tailored to your unique taste.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      category: 'Public & Other Events',
      items: [
        'Government Functions',
        'Sporting Events',
        'Bakery Services',
        'Hotel Services',
        'Training & Consultancy',
        'Conference Catering',
      ],
      description: 'Professional catering for large-scale public events. We can handle gatherings of any magnitude.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-cream pattern-overlay">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-lift"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-terracotta to-terracotta-dark flex items-center justify-center text-white mb-6">
                {service.icon}
              </div>

              <h3 className="font-display text-2xl font-semibold text-charcoal mb-4">
                {service.category}
              </h3>

              <p className="text-charcoal-light mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-charcoal">
                    <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Clients Section
function ClientsSection() {
  const clients = [
    {
      name: 'First Bank of Nigeria',
      service: 'Management Canteen, Staff Training Centre',
      capacity: '35 daily',
      period: '2009 - Present',
    },
    {
      name: 'Access Bank, Ikeja',
      service: 'Staff Training, Special Events',
      capacity: '150 daily',
      period: '1999 - Present',
    },
    {
      name: 'Unilever Plc, Oregun',
      service: 'Canteen Management',
      capacity: '400 daily',
      period: '2015 - Present',
    },
    {
      name: 'Cadbury Nigeria Plc',
      service: 'Canteen Management',
      capacity: '800 daily',
      period: '2015 - Present',
    },
    {
      name: 'Coca-Cola Nigeria',
      service: 'Staff Canteen',
      capacity: '150 daily',
      period: '2017 - Present',
    },
    {
      name: 'Zenith Bank',
      service: 'Training Programs',
      capacity: '50-100 daily',
      period: '2016 - Present',
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-forest">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label !text-gold mb-6 inline-block">Track Record</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-6">
            Our Corporate Clients
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            We have sustained long-term relationships with Nigeria&apos;s leading organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <h3 className="font-display text-xl font-semibold text-white mb-3">
                {client.name}
              </h3>
              <p className="text-gold text-sm mb-4">{client.service}</p>
              <div className="flex justify-between text-white/60 text-sm">
                <span>{client.capacity}</span>
                <span>{client.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Value Added Services
function ValueAddedSection() {
  const values = [
    'Competitive Pricing',
    'Good Quality Meals',
    'Timely Delivery',
    'Focus on Hygiene and Safety',
    'Digital Approach to Administration',
    'Professional Staff',
  ];

  return (
    <section className="py-24 lg:py-32 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label mb-6 inline-block">Value Added</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal mb-6">
              What Sets Us Apart
            </h2>
            <p className="text-charcoal-light text-lg mb-8 leading-relaxed">
              Our company&apos;s over four decades of experience in the catering and hospitality
              industry has made it possible for us to maintain standard operations and
              cost-effectiveness in producing high-quality dishes.
            </p>
            <p className="text-charcoal-light leading-relaxed">
              We presently have staff strength of over <strong className="text-terracotta">170</strong> uniformed
              personnel who are well trained with relevant qualifications in the catering
              and hospitality industry.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-terracotta" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-charcoal font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-24 bg-terracotta relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='%23fff'/%3E%3C/svg%3E")`,
        backgroundSize: '30px 30px'
      }} />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-6">
          Let&apos;s Discuss Your Event
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
          We assure you of our capability of providing large catering services at agreed times
          and special meals for your events at very short notice.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-terracotta px-8 py-4 font-medium uppercase tracking-wider text-sm hover:bg-cream transition-colors inline-block"
          >
            Contact Us
          </Link>
          <Link
            href="/menu"
            className="border-2 border-white text-white px-8 py-4 font-medium uppercase tracking-wider text-sm hover:bg-white hover:text-terracotta transition-colors inline-block"
          >
            View Menu
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader />
      <ServicesGrid />
      <ClientsSection />
      <ValueAddedSection />
      <CTASection />
    </>
  );
}

import Link from 'next/link';
import Image from 'next/image';

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-forest">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-terracotta blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gold blur-3xl" />
        </div>
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L100 50L50 100L0 50z' fill='none' stroke='%23C9A962' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-gold text-sm font-medium tracking-wider uppercase">Since 1973</span>
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
        </div>

        {/* Main heading */}
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white leading-tight mb-6">
          Crafting Culinary
          <br />
          <span className="text-gradient">Excellence</span>
        </h1>

        {/* Subheading */}
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body">
          Comfort Chefs specializes in premium catering, hospitality, and consulting services.
          Over 50 years of bringing exceptional taste to Nigeria&apos;s finest events.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-primary">
            Plan Your Event
          </Link>
          <Link href="/services" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-charcoal">
            Our Services
          </Link>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {[
            { number: '50+', label: 'Years Experience' },
            { number: '170+', label: 'Team Members' },
            { number: '2000+', label: 'Events Served' },
            { number: '15+', label: 'Corporate Clients' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-semibold text-gold mb-2">
                {stat.number}
              </div>
              <div className="text-white/60 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

// About Preview Section
function AboutPreview() {
  return (
    <section className="py-24 lg:py-32 bg-cream pattern-overlay">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-terracotta/20 to-forest/20">
              <div className="absolute inset-0 bg-gradient-to-br from-terracotta/20 to-transparent z-10" />
              <Image
                src="/images/about-preview.jpg"
                alt="Comfort Chefs kitchen"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                  <span className="font-display text-2xl font-bold text-white">50+</span>
                </div>
                <div>
                  <p className="font-display text-lg font-semibold text-charcoal">Years of</p>
                  <p className="text-terracotta font-medium">Excellence</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-gold/30 rounded-xl -z-10" />
          </div>

          {/* Content side */}
          <div>
            <span className="section-label mb-6 inline-block">About Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal mb-6 leading-tight">
              A Legacy of Hospitality Since 1973
            </h2>
            <p className="text-charcoal-light text-lg mb-6 leading-relaxed">
              Comfort Chefs, formerly known as Dokroy Catering Services, has been a cornerstone
              of Nigerian hospitality for over five decades. Founded by Mrs. Funmi Dina, we&apos;ve
              grown from humble beginnings to become the trusted caterer for Nigeria&apos;s leading
              corporations.
            </p>
            <p className="text-charcoal-light mb-8 leading-relaxed">
              Our operations now include a state-of-the-art bakery, a Guest Inn, a multipurpose
              hall, and a large commercial kitchen staffed by over 170 trained professionals.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                'Local & International Cuisine',
                '100% Natural Ingredients',
                'Customizable Menus',
                'Professional Service'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-terracotta" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-charcoal">{feature}</span>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary inline-block">
              Learn Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Corporate Catering',
      description: 'Complete canteen management and catering solutions for businesses of all sizes. Daily meals, training events, and corporate functions.',
      items: ['Company Cafeterias', 'Office Luncheons', 'Christmas Parties', 'Grand Openings']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Personal Events',
      description: 'Make your special moments unforgettable with our bespoke catering services. From intimate gatherings to grand celebrations.',
      items: ['Wedding Receptions', 'Birthday Parties', 'Private Dinners', 'Barbecues']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: 'Public Events',
      description: 'Professional catering for large-scale public events, government functions, and sporting events. We handle gatherings of any magnitude.',
      items: ['Government Functions', 'Sporting Events', 'Conferences', 'Training Programs']
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-forest relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-full" style={{
          backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(201, 169, 98, 0.3) 0%, transparent 50%)',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label !text-gold mb-6 inline-block">What We Do</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-6">
            Exceptional Catering Services
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            From intimate gatherings to large corporate events, we deliver culinary excellence
            tailored to your unique needs.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 card-lift"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-terracotta to-terracotta-dark flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="font-display text-2xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service items */}
              <ul className="space-y-2 mb-6">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-terracotta-light font-medium group-hover:text-gold transition-colors"
              >
                Learn More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

// Clients Section
function ClientsSection() {
  const clients = [
    'First Bank of Nigeria',
    'Access Bank',
    'Unilever Plc',
    'Cadbury Nigeria Plc',
    'Coca-Cola Nigeria',
    'Zenith Bank',
  ];

  return (
    <section className="py-20 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-charcoal-light text-sm uppercase tracking-widest">Trusted By</span>
          <h3 className="font-display text-2xl font-semibold text-charcoal mt-2">Nigeria&apos;s Leading Organizations</h3>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clients.map((client, index) => (
            <div
              key={index}
              className="text-charcoal/40 hover:text-terracotta transition-colors font-display text-lg md:text-xl font-medium"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Menu Preview Section
function MenuPreview() {
  const categories = [
    {
      name: 'Local Cuisine',
      description: 'Traditional Nigerian dishes prepared with authentic recipes',
      image: '/images/local-cuisine.jpg',
    },
    {
      name: 'International',
      description: 'Continental and intercontinental culinary delights',
      image: '/images/international.jpg',
    },
    {
      name: 'Desserts',
      description: 'Sweet treats and pastries from our bakery',
      image: '/images/desserts.jpg',
    },
    {
      name: 'Beverages',
      description: 'Refreshing drinks and specialty beverages',
      image: '/images/beverages.jpg',
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-cream pattern-overlay">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label mb-6 inline-block">Our Menu</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal mb-6">
            A Feast for Every Occasion
          </h2>
          <p className="text-charcoal-light max-w-2xl mx-auto text-lg">
            From authentic Nigerian delicacies to international favorites, our menu
            is crafted to satisfy every palate.
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              href="/menu"
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden card-lift"
            >
              {/* Background image */}
              <div className="absolute inset-0 bg-gradient-to-br from-forest to-charcoal">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-display text-2xl font-semibold text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-white/70 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.description}
                </p>
                <div className="flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore Menu
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold/50 group-hover:border-gold transition-colors" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/menu" className="btn-secondary">
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Food is stunning, cocktails wow, wine great and lovely selection of beers. Love this place and will continue to visit.",
      author: "Frederick S. Eastland",
      role: "Senior Manager",
    },
    {
      quote: "This is my favorite caterer. The food is amazing and no matter what we order, we're always satisfied!",
      author: "Kate Beckinsale",
      role: "Office Staff",
    },
    {
      quote: "The food here is excellent. The menu is extensive and seasonal with an exceptionally high standard.",
      author: "James David",
      role: "Business Manager",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-charcoal relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-terracotta/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label !text-gold mb-6 inline-block">Testimonials</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              {/* Quote icon */}
              <svg className="w-10 h-10 text-gold/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-white/80 text-lg leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-terracotta to-gold flex items-center justify-center">
                  <span className="text-white font-display font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-white/50 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-terracotta relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='%23fff'/%3E%3C/svg%3E")`,
        backgroundSize: '30px 30px'
      }} />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6">
          Ready to Create Something Delicious?
        </h2>
        <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Let our team of expert chefs bring exceptional taste to your next event.
          Contact us today for a personalized consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-terracotta px-8 py-4 font-medium uppercase tracking-wider text-sm hover:bg-cream transition-colors"
          >
            Get in Touch
          </Link>
          <Link
            href="tel:+2341234567890"
            className="border-2 border-white text-white px-8 py-4 font-medium uppercase tracking-wider text-sm hover:bg-white hover:text-terracotta transition-colors"
          >
            Call Us Now
          </Link>
        </div>
      </div>
    </section>
  );
}

// Main Page Component
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesSection />
      <ClientsSection />
      <MenuPreview />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

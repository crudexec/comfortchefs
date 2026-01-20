import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Comfort Chefs',
  description: 'Learn about Comfort Chefs - over 50 years of culinary excellence serving Nigeria\'s leading corporations since 1973.',
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
        <span className="section-label !text-gold mb-6 inline-block">Our Story</span>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6">
          About Us
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          A legacy of hospitality excellence, serving Nigeria since 1973.
        </p>
      </div>
    </section>
  );
}

// Story Section
function StorySection() {
  return (
    <section className="py-24 lg:py-32 bg-cream pattern-overlay">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/founder.jpg"
                alt="Mrs. Funmi Dina - Founder & CEO"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-terracotta text-white p-8 rounded-xl shadow-xl max-w-xs">
              <p className="font-display text-2xl font-semibold mb-2">Mrs. Funmi Dina</p>
              <p className="text-white/80">Founder & CEO</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal mb-8 leading-tight">
              Comfort Chefs Hospitality Limited
            </h2>
            <div className="space-y-6 text-charcoal-light leading-relaxed">
              <p>
                Formerly known as <strong className="text-charcoal">Dokroy Catering Services</strong>,
                Comfort Chefs has been in operation since <strong className="text-terracotta">1973</strong>.
                What started as a small catering venture has blossomed into one of Nigeria&apos;s most
                respected hospitality companies.
              </p>
              <p>
                Today, our operations have expanded to include a <strong className="text-charcoal">bakery</strong>,
                a <strong className="text-charcoal">Guest Inn</strong>, a <strong className="text-charcoal">multipurpose hall</strong>,
                fast food production line, and a large commercial kitchen.
              </p>
              <p>
                Having been in the hospitality business for over <strong className="text-terracotta">50 years</strong> and
                catered for companies in different sectors of the Nigerian economy, we have been able to sustain
                long-term relationships and partnerships with various organizations and individuals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Mission Vision Section
function MissionVisionSection() {
  const items = [
    {
      title: 'Our Mission',
      description: 'To break new ground and introduce service innovations in the hospitality industry. Quality, friendly attentive service, coupled with dedication by our team to customers is the solid cornerstone on which the future of Comfort Chefs is built.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Our Vision',
      description: 'Over the coming years, Comfort Chefs will emerge as the premier caterer of food and snack products wherever we choose to compete, major hospitality managers, and provider of consulting services and training to the hospitality industry.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: 'Our Goal',
      description: 'Our first priority is to satisfy customer needs while providing superior quality services at reasonable prices. This will ensure that Comfort Chefs will continue to be... a standard in excellence.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-forest">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label !text-gold mb-6 inline-block">Our Purpose</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white">
            Mission, Vision & Goal
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-terracotta to-terracotta-dark flex items-center justify-center text-white mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="font-display text-2xl font-semibold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Why Choose Us Section
function WhyChooseUsSection() {
  const reasons = [
    {
      title: 'Local & International Cuisine',
      description: 'We cater to a large selection of dishes – local and international. Whatever you would like us to do, we can arrange it for you.',
    },
    {
      title: '100% Natural',
      description: 'As a policy, we do not rely on chemical-based spices. Nature has provided us with much better and healthier alternatives.',
    },
    {
      title: 'Family Matters',
      description: 'We can go the extra mile to prepare a particular dish that you\'re fond of, even if it\'s not on our regular menu.',
    },
    {
      title: 'Customizable Menu',
      description: 'You don\'t have to be stuck with only the menu arrangements we\'ve provided. We can create a menu suitable to your taste.',
    },
    {
      title: 'HSE Compliant',
      description: 'We adhere strictly to Hygiene and Safety policy in all aspects of our activities and food preparation.',
    },
    {
      title: 'Digital Operations',
      description: 'Our system is fully computerized and we embrace technology within the context of catering service.',
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-cream pattern-overlay">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label mb-6 inline-block">Why Choose Us</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal">
            A Few Reasons to Choose Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow card-lift"
            >
              <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center mb-6">
                <span className="font-display text-terracotta text-xl font-bold">{index + 1}</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-3">
                {reason.title}
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Stats Section
function StatsSection() {
  const stats = [
    { number: '50+', label: 'Years in Business' },
    { number: '170+', label: 'Team Members' },
    { number: '2000+', label: 'Daily Meals' },
    { number: '15+', label: 'Corporate Clients' },
  ];

  return (
    <section className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-5xl md:text-6xl font-semibold text-gold mb-2">
                {stat.number}
              </div>
              <div className="text-white/60 uppercase tracking-wider text-sm">
                {stat.label}
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
    <section className="py-24 bg-terracotta">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-6">
          Ready to Work With Us?
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
          Let us bring our 50+ years of culinary expertise to your next event.
        </p>
        <Link
          href="/contact"
          className="bg-white text-terracotta px-8 py-4 font-medium uppercase tracking-wider text-sm hover:bg-cream transition-colors inline-block"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHeader />
      <StorySection />
      <MissionVisionSection />
      <WhyChooseUsSection />
      <StatsSection />
      <CTASection />
    </>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Menu | Comfort Chefs',
  description: 'Explore our diverse menu of local Nigerian cuisine and international dishes. Customizable options for every event.',
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
        <span className="section-label !text-gold mb-6 inline-block">Culinary Delights</span>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6">
          Our Menu
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          A feast for every occasion, crafted with passion and the finest ingredients.
        </p>
      </div>
    </section>
  );
}

// Menu Categories
function MenuCategories() {
  const categories = [
    {
      name: 'Local Nigerian Cuisine',
      description: 'Traditional dishes prepared with authentic recipes and fresh local ingredients.',
      items: [
        { name: 'Jollof Rice', description: 'Classic Nigerian rice dish with tomato sauce and spices' },
        { name: 'Egusi Soup', description: 'Melon seed soup with assorted meat and fish' },
        { name: 'Pounded Yam', description: 'Smooth yam fufu, perfect with any Nigerian soup' },
        { name: 'Suya', description: 'Spiced grilled meat skewers with groundnut spice' },
        { name: 'Moi Moi', description: 'Steamed bean pudding with eggs and fish' },
        { name: 'Pepper Soup', description: 'Spicy meat or fish broth with local herbs' },
      ],
      image: '/images/local-cuisine.jpg',
    },
    {
      name: 'Continental Dishes',
      description: 'International favorites prepared by our expert chefs.',
      items: [
        { name: 'Grilled Chicken', description: 'Herb-marinated chicken with sides' },
        { name: 'Pasta Selections', description: 'Various pasta dishes with premium sauces' },
        { name: 'Rice & Curry', description: 'Aromatic rice with rich curry preparations' },
        { name: 'Seafood Platters', description: 'Fresh fish and seafood preparations' },
        { name: 'Salad Bar', description: 'Fresh garden salads with dressings' },
        { name: 'Sandwiches', description: 'Gourmet sandwiches and wraps' },
      ],
      image: '/images/international.jpg',
    },
    {
      name: 'Bakery & Pastries',
      description: 'Fresh baked goods from our in-house Dokroy Bakery.',
      items: [
        { name: 'Fresh Bread', description: 'Variety of freshly baked breads daily' },
        { name: 'Cakes', description: 'Custom cakes for all occasions' },
        { name: 'Pastries', description: 'Meat pies, sausage rolls, and more' },
        { name: 'Chin Chin', description: 'Crunchy fried dough snacks' },
        { name: 'Doughnuts', description: 'Fresh glazed and filled doughnuts' },
        { name: 'Cookies', description: 'Assorted cookies and biscuits' },
      ],
      image: '/images/desserts.jpg',
    },
    {
      name: 'Beverages',
      description: 'Refreshing drinks for every taste.',
      items: [
        { name: 'Fresh Juices', description: 'Orange, pineapple, watermelon, and more' },
        { name: 'Smoothies', description: 'Fruit and vegetable blends' },
        { name: 'Zobo', description: 'Traditional hibiscus drink' },
        { name: 'Chapman', description: 'Nigerian cocktail mocktail' },
        { name: 'Coffee & Tea', description: 'Premium hot beverages' },
        { name: 'Soft Drinks', description: 'Assorted carbonated beverages' },
      ],
      image: '/images/beverages.jpg',
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-cream pattern-overlay">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-24">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold/30 rounded-xl -z-10" />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal mb-4">
                  {category.name}
                </h2>
                <p className="text-charcoal-light text-lg mb-8 leading-relaxed">
                  {category.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.items.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
                    >
                      <h4 className="font-display text-lg font-semibold text-charcoal mb-1">
                        {item.name}
                      </h4>
                      <p className="text-charcoal-light text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Custom Menu Section
function CustomMenuSection() {
  return (
    <section className="py-24 lg:py-32 bg-forest">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <span className="section-label !text-gold mb-6 inline-block">Tailored For You</span>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-6">
          Customizable Menus
        </h2>
        <p className="text-white/70 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
          Whether you choose our plated meals or buffet, and no matter how many courses you
          decide upon, you don&apos;t have to be stuck with only the menu arrangements we&apos;ve provided.
          We can create a menu suitable to your taste and suggest various options to complement your choice.
        </p>
        <p className="text-white/70 leading-relaxed max-w-2xl mx-auto mb-10">
          To invoke the sense of family tradition to your functions, we can go the extra mile
          to prepare a particular dish that you&apos;re fond of, even if it&apos;s not on our regular menu.
        </p>
        <Link
          href="/contact"
          className="btn-primary inline-block"
        >
          Request Custom Menu
        </Link>
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
          Ready to Taste Excellence?
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
          Contact us to discuss your event menu. We&apos;ll work with you to create
          the perfect culinary experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-terracotta px-8 py-4 font-medium uppercase tracking-wider text-sm hover:bg-cream transition-colors inline-block"
          >
            Get a Quote
          </Link>
          <Link
            href="tel:+2341234567890"
            className="border-2 border-white text-white px-8 py-4 font-medium uppercase tracking-wider text-sm hover:bg-white hover:text-terracotta transition-colors inline-block"
          >
            Call Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function MenuPage() {
  return (
    <>
      <PageHeader />
      <MenuCategories />
      <CustomMenuSection />
      <CTASection />
    </>
  );
}

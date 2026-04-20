"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Award, CheckCircle, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="medium"
        sizing="mediumLargeSizeMediumTitles"
        background="none"
        cardStyle="glass-depth"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "Process",
          id: "#how-it-works",
        },
        {
          name: "Why Us",
          id: "#why-us",
        },
        {
          name: "Reviews",
          id: "#testimonials",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="GoldCoast Gold Buyers"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Turn Your Gold Into Cash Today"
      description="Trusted by hundreds with a perfect 5-star rating. Walk in, get tested, get paid — no appointments needed."
      buttons={[
        {
          text: "Get Directions",
          href: "#contact",
        },
        {
          text: "Call (708) 477-5814",
          href: "tel:7084775814",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/jeweler-working-shop-with-equipment_23-2150914228.jpg?_wi=1"
      showDimOverlay={true}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/craftswoman-working-workshop_107420-65234.jpg",
          alt: "Craftswoman working in workshop",
        },
        {
          src: "http://img.b2bpic.net/free-photo/engagement-rings_627829-11906.jpg",
          alt: "Engagement rings",
        },
        {
          src: "http://img.b2bpic.net/free-photo/front-view-jeweler-making-jewellery_23-2150931467.jpg",
          alt: "Front view jeweler making jewellery",
        },
        {
          src: "http://img.b2bpic.net/free-photo/side-view-jeweler-making-jewellery_23-2150931466.jpg",
          alt: "Side view jeweler making jewellery",
        },
        {
          src: "http://img.b2bpic.net/free-photo/hookah-still-life-composition_23-2149213336.jpg",
          alt: "Hookah still life composition",
        },
      ]}
      avatarText="Join 500+ happy clients"
    />
  </div>

  <div id="trust" data-section="trust">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "5.0",
          title: "Google Rating",
          description: "Based on hundreds of verified reviews.",
          icon: Star,
        },
        {
          id: "m2",
          value: "20+",
          title: "Years Serving",
          description: "Expertise you can count on.",
          icon: Award,
        },
        {
          id: "m3",
          value: "100%",
          title: "Transparency",
          description: "Everything tested in front of you.",
          icon: CheckCircle,
        },
      ]}
      title="Proven Trust"
      description="Serving Chicago's South Suburbs for over 20 years."
    />
  </div>

  <div id="how-it-works" data-section="how-it-works">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "step1",
          title: "Walk In Anytime",
          tags: [
            "No Appointment",
          ],
          imageSrc: "http://img.b2bpic.net/free-vector/isometric-shopping-concept-with-people_23-2147851692.jpg?_wi=1",
        },
        {
          id: "step2",
          title: "Watch Us Test It",
          tags: [
            "Full Transparency",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/senior-painter-using-watercolor-his-art_23-2150214827.jpg?_wi=1",
        },
        {
          id: "step3",
          title: "Get Paid On the Spot",
          tags: [
            "Same-Day Cash",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/rolls-banknotes-economy-word_23-2148546862.jpg?_wi=1",
        },
      ]}
      title="From Old Jewelry to Cash in 3 Steps"
      description="Simple, honest, and transparent process."
    />
  </div>

  <div id="why-us" data-section="why-us">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          id: "f1",
          title: "Transparent Testing",
          tags: [
            "Honest",
          ],
          imageSrc: "http://img.b2bpic.net/free-vector/people-doing-things-collection_23-2148079737.jpg",
          imageAlt: "People doing things collection",
        },
        {
          id: "f2",
          title: "Live Market Pricing",
          tags: [
            "Fair",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/jeweler-working-shop-with-equipment_23-2150914228.jpg?_wi=2",
          imageAlt: "People doing things collection",
        },
        {
          id: "f3",
          title: "No Pressure, Ever",
          tags: [
            "Comfort",
          ],
          imageSrc: "http://img.b2bpic.net/free-vector/isometric-shopping-concept-with-people_23-2147851692.jpg?_wi=2",
          imageAlt: "People doing things collection",
        },
        {
          id: "f4",
          title: "All Gold Welcome",
          tags: [
            "Versatile",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/senior-painter-using-watercolor-his-art_23-2150214827.jpg?_wi=2",
          imageAlt: "People doing things collection",
        },
        {
          id: "f5",
          title: "Family-Owned Trust",
          tags: [
            "Local",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/rolls-banknotes-economy-word_23-2148546862.jpg?_wi=2",
          imageAlt: "People doing things collection",
        },
        {
          id: "f6",
          title: "Instant Cash Payout",
          tags: [
            "Fast",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-joyful-woman-holding-mobile-phone_171337-4024.jpg?_wi=1",
          imageAlt: "People doing things collection",
        },
      ]}
      title="Why 198+ Customers Gave Us 5 Stars"
      description="Experience the GoldCoast difference today."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="opacity"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Gold Jewelry",
          price: "Rings & Chains",
          imageSrc: "http://img.b2bpic.net/free-photo/spa-treatment-dark-surface_176420-8880.jpg",
        },
        {
          id: "p2",
          name: "Broken Pieces",
          price: "Single Earrings",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-dollar-coins-scale_23-2150794353.jpg",
        },
        {
          id: "p3",
          name: "Scrap Gold",
          price: "Dental & Industrial",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-dollar-coins-scale_23-2150794354.jpg",
        },
        {
          id: "p4",
          name: "Gold Coins",
          price: "Bullion & Rounds",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-engraving-art-tools_23-2149186753.jpg",
        },
        {
          id: "p5",
          name: "Silver & Platinum",
          price: "Bullion & Jewelry",
          imageSrc: "http://img.b2bpic.net/free-photo/white-beans-ethnic-metallic-pot-high-quality-photo_114579-77879.jpg",
        },
        {
          id: "p6",
          name: "Estate Collections",
          price: "Inherited Items",
          imageSrc: "http://img.b2bpic.net/free-photo/concept-wealth-retirement-golden-eggs_185193-109684.jpg",
        },
      ]}
      title="What We Buy"
      description="Bring us any gold, silver, or platinum."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "AJ",
          role: "Customer",
          testimonial: "The process was straightforward and transparent.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-joyful-woman-holding-mobile-phone_171337-4024.jpg?_wi=2",
        },
        {
          id: "t2",
          name: "Geneva J.",
          role: "Customer",
          testimonial: "Best prices and service. Jamal educated me on the market.",
          imageSrc: "http://img.b2bpic.net/free-photo/girl-sitting-table-holding-mobile-phone-indoors_171337-17096.jpg",
        },
        {
          id: "t3",
          name: "Sonja B.",
          role: "Local Guide",
          testimonial: "Exceptional transparency and fair pricing.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiley-modern-male_23-2148514900.jpg",
        },
        {
          id: "t4",
          name: "Mike D.",
          role: "Customer",
          testimonial: "Great guy, chill vibes, best prices.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-portrait-beautiful-young-woman-giving-thumbs-up-standing-isolated-rosy_176532-7958.jpg",
        },
        {
          id: "t5",
          name: "Sarah P.",
          role: "Customer",
          testimonial: "Highly recommend! Will be back soon.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",
        },
      ]}
      title="Customer Stories"
      description="What our neighbors say about us."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Do I need an appointment?",
          content: "Nope. Walk in during business hours.",
        },
        {
          id: "q2",
          title: "How do you determine value?",
          content: "Market rates based on weight and purity.",
        },
        {
          id: "q3",
          title: "Do you buy broken gold?",
          content: "Yes, it all has value.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/long-corridor-showcase_1127-3441.jpg"
      mediaAnimation="slide-up"
      title="Questions? Answers."
      description="Everything you need to know."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Ready to Sell?"
      description="Visit us in Midlothian."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "phone",
          type: "tel",
          placeholder: "Your Phone",
          required: true,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/married-couple-chooses-diamond-rings-anniversary-salesperson-shows-rings-customers-africanamerican-couple-jewelry-store_166373-8881.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#",
            },
            {
              label: "Contact",
              href: "#",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Refinery",
              href: "#",
            },
            {
              label: "Valuation",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2025 GoldCoast Gold Buyers"
      bottomRightText="Midlothian, IL"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

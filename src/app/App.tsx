import { useState, useEffect } from "react";
import {
  Menu, X, Star, Check, ArrowRight, ChevronDown, ChevronUp,
  Mail, Phone, Globe, ShoppingCart, Layout, Users, Award,
  Clock, Shield, TrendingUp, Zap, MessageSquare, BarChart2, Quote
} from "lucide-react";

const SERVICES = [
  {
    icon: Layout,
    title: "Business Websites",
    subtitle: "Elementor & WordPress",
    description: "Clean, high-converting websites built with Elementor Pro. Pixel-perfect designs that represent your brand and turn visitors into customers.",
    features: ["Custom Elementor design", "Mobile-first responsive", "SEO-optimized structure", "Performance optimized"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Stores",
    subtitle: "WooCommerce Solutions",
    description: "Full-featured online stores with WooCommerce, payment gateways, inventory management, and conversion-focused product pages.",
    features: ["WooCommerce setup", "Payment gateway integration", "Product catalog design", "Cart & checkout optimization"],
  },
  {
    icon: Globe,
    title: "Presentational Sites",
    subtitle: "Portfolios & Brochures",
    description: "Elegant brochure websites and portfolios that make lasting impressions. Perfect for consultants, creatives, and professional services.",
    features: ["Storytelling layouts", "Gallery & portfolio sections", "Fast-loading pages", "Lead capture forms"],
  },
  {
    icon: Users,
    title: "Agency White-Label",
    subtitle: "Outsource & Scale",
    description: "Reliable development partner for agencies. I handle the builds while you focus on client relationships and growing your business.",
    features: ["NDA-friendly partnership", "Consistent turnaround", "Agency-level quality", "Direct communication"],
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We start with a focused 30-minute call to understand your business, goals, target audience, and what success looks like for your website.",
  },
  {
    number: "02",
    title: "Strategy & Proposal",
    description: "I create a detailed project scope, sitemap, and timeline. No surprises — you know exactly what you're getting before we start.",
  },
  {
    number: "03",
    title: "Design & Development",
    description: "I build your site with precision using WordPress and Elementor Pro, keeping you updated at each milestone for feedback.",
  },
  {
    number: "04",
    title: "Review & Refine",
    description: "Two rounds of revisions are included. Your feedback shapes the final product until it's exactly right.",
  },
  {
    number: "05",
    title: "Launch & Handover",
    description: "Your site goes live with full training, documentation, and 30 days of post-launch support included.",
  },
];

const PORTFOLIO_ITEMS = [
  {
    title: "Kova Legal Partners",
    category: "Business",
    type: "Law firm website",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&auto=format",
    tags: ["Elementor", "WordPress", "SEO"],
  },
  {
    title: "Bloom Organics",
    category: "E-shop",
    type: "E-commerce store",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format",
    tags: ["WooCommerce", "Payments", "Inventory"],
  },
  {
    title: "Studio Meridian",
    category: "Portfolio",
    type: "Architecture portfolio",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop&auto=format",
    tags: ["Elementor", "Portfolio", "Gallery"],
  },
  {
    title: "Vertex Consulting",
    category: "Business",
    type: "Consulting firm",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format",
    tags: ["WordPress", "CRM", "Lead forms"],
  },
  {
    title: "The Roast Project",
    category: "E-shop",
    type: "Coffee brand store",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop&auto=format",
    tags: ["WooCommerce", "Subscriptions", "Brand"],
  },
  {
    title: "North & Grey Agency",
    category: "Agency",
    type: "Agency white-label",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&auto=format",
    tags: ["White-label", "Elementor", "Fast delivery"],
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    role: "Owner, Mitchell Interiors",
    text: "Working with Alex transformed our online presence completely. Within 90 days of launching, our consultation requests tripled and the quality of leads improved dramatically. Every detail of the site reflects who we are.",
    rating: 5,
  },
  {
    name: "Tomáš Kovář",
    role: "CEO, Vertex Consulting",
    text: "We had tried two other developers before Alex. Night and day difference. He understood our business needs, not just the technical requirements, and delivered a site that genuinely represents our expertise.",
    rating: 5,
  },
  {
    name: "Emma Blackwell",
    role: "Head of Digital, Northgate Agency",
    text: "Alex is our go-to developer for client projects. Reliable, professional, and consistently delivers above expectations. He's been a core part of our delivery team for over 2 years now.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Founder, Bloom Organics",
    text: "The WooCommerce store Alex built handles our entire product catalog seamlessly. Sales increased 40% in the first month after launch. The checkout experience is exactly what our customers needed.",
    rating: 5,
  },
  {
    name: "Petra Horáková",
    role: "Managing Director, Kova Legal",
    text: "We were skeptical about the ROI of a new website. Alex changed our minds completely. The site practically markets the firm for us — new client inquiries went from sporadic to consistent within weeks.",
    rating: 5,
  },
];

const FAQ_ITEMS = [
  {
    question: "How long does it take to build a website?",
    answer: "Most business websites take 3–5 weeks from kick-off to launch. E-commerce projects typically run 5–8 weeks depending on product catalog size. Rush delivery is available for qualifying projects.",
  },
  {
    question: "Do I need to provide content, or can you help with that?",
    answer: "Ideally you provide the core content — your story, services, and key messages. I handle layout, structure, and visual presentation. For clients who need support, I can recommend experienced copywriters I regularly collaborate with.",
  },
  {
    question: "Will my website work well on mobile?",
    answer: "Absolutely. Every site I build is mobile-first, meaning the mobile experience is designed and tested first. With over 60% of web traffic on mobile, this is non-negotiable.",
  },
  {
    question: "Will I be able to update the site myself?",
    answer: "Yes. WordPress and Elementor are specifically chosen for their user-friendliness. I include a training session and video walkthrough so you or your team can make updates with confidence.",
  },
  {
    question: "Do you work with agencies on a white-label basis?",
    answer: "Yes, this is a significant part of my business. I work under NDA with several agencies, building sites that go out under their brand. I'm a reliable, discreet development partner.",
  },
  {
    question: "What happens after the website launches?",
    answer: "Every project includes 30 days of post-launch support. Ongoing maintenance packages are available for clients who want regular updates, security monitoring, and performance optimization.",
  },
  {
    question: "What does a website cost?",
    answer: "Business websites typically start at €1,500. E-commerce projects start at €2,500. Exact pricing depends on scope — I provide a detailed quote after our discovery call with no obligation.",
  },
];

const PACKAGES = [
  {
    name: "Starter",
    price: "from €1,500",
    ideal: "Ideal for small businesses",
    features: [
      "Up to 5 pages",
      "WordPress + Elementor",
      "Mobile responsive",
      "Basic SEO setup",
      "Contact form",
      "30 days support",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "from €2,800",
    ideal: "Most popular choice",
    features: [
      "Up to 12 pages",
      "Custom Elementor design",
      "Advanced SEO optimization",
      "Google Analytics setup",
      "Lead capture integration",
      "Speed optimization",
      "60 days support",
    ],
    highlighted: true,
  },
  {
    name: "E-Commerce",
    price: "from €3,500",
    ideal: "For online stores",
    features: [
      "WooCommerce setup",
      "Unlimited products",
      "Payment gateway integration",
      "Inventory management",
      "Order email automation",
      "Customer account portal",
      "90 days support",
    ],
    highlighted: false,
  },
];

const STATS = [
  { value: "10+", label: "Years of experience" },
  { value: "150+", label: "Projects delivered" },
  { value: "98%", label: "Client satisfaction" },
  { value: "12", label: "Agency partners" },
];

const TECH_STACK = [
  "WordPress", "Elementor Pro", "WooCommerce", "PHP", "MySQL",
  "HTML / CSS", "JavaScript", "ACF", "Yoast SEO", "WP Rocket",
];

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", projectType: "", message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const filteredPortfolio = activeFilter === "All"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(p => p.category === activeFilter);

  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">

      {/* ── NAVIGATION ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-xl font-semibold text-foreground tracking-tight">
            Alex<span style={{ color: "var(--accent)" }}>.</span>dev
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a key={link.label} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                {link.label}
              </a>
            ))}
            <a href="#contact" className="text-sm bg-foreground text-primary-foreground px-4 py-2 rounded hover:opacity-80 transition-opacity duration-200 font-medium">
              Get a Quote
            </a>
          </div>
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-border px-6 py-5 flex flex-col gap-5">
            {NAV_LINKS.map(link => (
              <a key={link.label} href={link.href} className="text-sm font-medium text-foreground" onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className="text-sm bg-foreground text-primary-foreground px-4 py-2.5 rounded text-center font-medium" onClick={() => setMenuOpen(false)}>
              Get a Quote
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="pt-24 pb-20 md:pt-36 md:pb-28 bg-background">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-border text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-8" style={{ color: "var(--accent)" }}>
              10+ Years · WordPress Specialist
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground mb-6">
              Websites That<br />
              <em className="font-display not-italic" style={{ color: "var(--accent)" }}>Actually Work</em><br />
              for Your Business
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
              Senior WordPress developer with over a decade of experience. I build high-quality, conversion-focused websites that represent your business at its best — and keep working for you around the clock.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#portfolio" className="inline-flex items-center gap-2 text-white px-6 py-3 rounded font-semibold text-sm hover:opacity-90 transition-opacity" style={{ backgroundColor: "var(--accent)" }}>
                View My Work <ArrowRight size={16} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 border border-foreground text-foreground px-6 py-3 rounded font-semibold text-sm hover:bg-foreground hover:text-white transition-colors duration-200">
                Start a Project
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded overflow-hidden bg-muted">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=700&h=875&fit=crop&auto=format"
                alt="Professional web developer at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white border border-border shadow-lg rounded p-4">
              <div className="flex items-center gap-1 mb-1.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={11} fill="var(--accent)" style={{ color: "var(--accent)" }} />)}
              </div>
              <p className="font-semibold text-foreground text-xs">"Exceeded every expectation."</p>
              <p className="text-muted-foreground text-xs mt-0.5">— Sarah M., Mitchell Interiors</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-foreground text-primary-foreground py-14">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map(stat => (
            <div key={stat.label}>
              <div className="font-display text-4xl md:text-5xl font-bold mb-1" style={{ color: "var(--accent)" }}>{stat.value}</div>
              <div className="text-sm uppercase tracking-wide" style={{ color: "rgba(255,255,255,0.6)" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROBLEM STATEMENT ── */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>The Reality</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Your website is your hardest-working employee — or it's costing you business.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              94% of first impressions are design-related. Visitors judge your business in under 0.05 seconds. A slow, outdated, or confusing website doesn't just fail to convert — it actively sends potential customers to your competitors.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                stat: "3 seconds",
                title: "Users leave if your site loads slowly",
                description: "Every second of delay reduces conversions by 7%. A fast website isn't a luxury — it's a business necessity.",
              },
              {
                icon: TrendingUp,
                stat: "75%",
                title: "Of credibility comes from web design",
                description: "Customers judge your credibility based on your website before they ever speak with you. First impressions are lasting ones.",
              },
              {
                icon: BarChart2,
                stat: "200%+",
                title: "ROI from a well-built website",
                description: "Businesses with high-quality websites consistently outperform competitors in lead generation, conversion, and customer trust.",
              },
            ].map(item => (
              <div key={item.title} className="bg-white p-8 rounded border border-border hover:shadow-sm transition-shadow duration-200">
                <item.icon size={22} className="mb-4" style={{ color: "var(--accent)" }} />
                <div className="font-display text-3xl font-bold text-foreground mb-2">{item.stat}</div>
                <h3 className="font-semibold text-foreground mb-3 text-sm">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>What I Build</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Expertise across every type of WordPress project
            </h2>
            <p className="text-muted-foreground text-lg">From brochure sites to full e-commerce solutions — built to the highest standard every time.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((service, i) => (
              <div key={service.title} className="border border-border rounded p-8 hover:border-opacity-50 hover:shadow-sm transition-all duration-200 group" style={{ "--tw-border-opacity": "1" } as React.CSSProperties}>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <service.icon size={26} className="mb-3" style={{ color: "var(--accent)" }} />
                    <h3 className="font-display text-2xl font-bold text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{service.subtitle}</p>
                  </div>
                  <span className="font-display text-4xl font-light text-muted-foreground opacity-30">0{i + 1}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <Check size={13} className="flex-shrink-0" style={{ color: "var(--accent)" }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY INVEST ── */}
      <section className="py-20 md:py-28 bg-foreground text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>Why It Matters</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
                A great website pays for itself — repeatedly
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
                Think of your website not as a cost, but as your best-performing sales asset. Unlike staff, advertising, or outreach, your website works 24/7, never calls in sick, and scales infinitely.
              </p>
              <div className="space-y-4">
                {[
                  "Generate qualified leads while you sleep",
                  "Build credibility before the first conversation",
                  "Serve customers across time zones simultaneously",
                  "Outperform competitors with outdated web presence",
                  "Reduce the cost of acquiring each new customer",
                ].map(point => (
                  <div key={point} className="flex items-start gap-3">
                    <Check size={15} className="mt-0.5 flex-shrink-0" style={{ color: "var(--accent)" }} />
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { metric: "↑ 3.2×", desc: "Average increase in online inquiries after a professional website redesign" },
                { metric: "↓ 45%", desc: "Reduction in bounce rate with optimized site structure and speed" },
                { metric: "↑ 40%", desc: "Average uplift in e-commerce conversion with UX-focused store builds" },
                { metric: "< 2s", desc: "Load time target for all sites — keeping visitors engaged and Google happy" },
              ].map(card => (
                <div key={card.metric} className="rounded p-6" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div className="font-display text-3xl font-bold mb-3" style={{ color: "var(--accent)" }}>{card.metric}</div>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="py-20 md:py-28 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>How It Works</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              A clear process. No surprises. On time.
            </h2>
            <p className="text-muted-foreground text-lg">From first conversation to launch, every step is defined and communicated upfront.</p>
          </div>
          <div className="space-y-5">
            {PROCESS_STEPS.map((step) => (
              <div key={step.number} className="grid md:grid-cols-[72px_1fr] gap-6 items-stretch">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-foreground text-primary-foreground font-display font-bold text-base flex-shrink-0">
                  {step.number}
                </div>
                <div className="bg-white rounded border border-border p-7 flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>Selected Work</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Projects that deliver results
              </h2>
            </div>
            <div className="flex gap-2 flex-wrap">
              {["All", "Business", "E-shop", "Portfolio", "Agency"].map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-1.5 text-sm rounded border transition-colors duration-200 ${
                    activeFilter === filter
                      ? "bg-foreground text-primary-foreground border-foreground"
                      : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map(project => (
              <div key={project.title} className="group border border-border rounded overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="aspect-[3/2] overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">{project.title}</h3>
                      <p className="text-muted-foreground text-xs mt-0.5">{project.type}</p>
                    </div>
                    <span className="text-xs bg-secondary text-muted-foreground px-2 py-0.5 rounded">{project.category}</span>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium" style={{ color: "var(--accent)" }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED CASE STUDY ── */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-8" style={{ color: "var(--accent)" }}>Case Study</p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                How a law firm doubled its client inquiries in 60 days
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Kova Legal Partners came with an outdated website that was losing potential clients to competitors. The site was slow, hard to navigate on mobile, and failed to convey the firm's expertise.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I rebuilt their digital presence from scratch — a fast, authoritative, mobile-first site built with WordPress and Elementor Pro, optimized for local search and designed to convert visitors into consultations.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { metric: "2.1×", label: "More inquiries" },
                  { metric: "67%", label: "Less bounce rate" },
                  { metric: "0.8s", label: "Load time" },
                ].map(r => (
                  <div key={r.label} className="text-center bg-white border border-border rounded p-4">
                    <div className="font-display text-2xl font-bold mb-1" style={{ color: "var(--accent)" }}>{r.metric}</div>
                    <div className="text-xs text-muted-foreground">{r.label}</div>
                  </div>
                ))}
              </div>
              <blockquote className="border-l-2 pl-4 italic text-muted-foreground text-sm" style={{ borderColor: "var(--accent)" }}>
                "Alex understood that a law firm's website needs to build trust immediately. He delivered exactly that — and more."
                <footer className="mt-2 font-semibold not-italic text-foreground text-xs">— Petra Horáková, Managing Director</footer>
              </blockquote>
            </div>
            <div className="rounded overflow-hidden bg-muted aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&auto=format"
                alt="Kova Legal Partners website case study"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="py-12 bg-background border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-xs text-muted-foreground uppercase tracking-widest mb-6">Technologies & Tools</p>
          <div className="flex flex-wrap justify-center gap-3">
            {TECH_STACK.map(tech => (
              <span key={tech} className="border border-border text-muted-foreground text-sm px-4 py-1.5 rounded hover:border-foreground hover:text-foreground transition-colors duration-200 cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS (main) ── */}
      <section id="testimonials" className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>Client Testimonials</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Don't take my word for it
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map(t => (
              <div key={t.name} className="border border-border rounded p-8 flex flex-col hover:shadow-sm transition-shadow duration-200">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={13} fill="var(--accent)" style={{ color: "var(--accent)" }} />)}
                </div>
                <p className="text-foreground text-sm leading-relaxed flex-1 mb-6">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-20 md:py-28 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[3/4] rounded overflow-hidden bg-muted">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&auto=format"
                alt="Alex Novak — Senior WordPress Developer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-foreground text-primary-foreground rounded p-5 max-w-[220px]">
              <Award size={18} className="mb-2" style={{ color: "var(--accent)" }} />
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>WordPress Certified Developer with agency & freelance experience across 3 countries</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>About Me</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Senior developer who treats your business like his own
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm Alex Novak, a WordPress specialist with over 10 years of experience building websites that genuinely move the needle for businesses. I started my career at a digital agency in Prague, worked with clients across Central Europe, and now take on select projects independently.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              My focus has always been the intersection of good design and good business thinking. A beautiful website that doesn't convert is just an expensive brochure. I build websites that look exceptional and work even harder.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Globe, text: "WordPress & Elementor Expert" },
                { icon: ShoppingCart, text: "WooCommerce Specialist" },
                { icon: Users, text: "Agency-trusted Developer" },
                { icon: Shield, text: "NDA-friendly Collaboration" },
              ].map(item => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-foreground">
                  <item.icon size={13} className="flex-shrink-0" style={{ color: "var(--accent)" }} />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO I WORK WITH ── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>Who I Work With</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Two types of clients.<br />One consistent standard.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-foreground text-primary-foreground rounded p-10">
              <div className="w-12 h-12 flex items-center justify-center rounded mb-6" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                <TrendingUp size={20} style={{ color: "var(--accent)" }} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Small & Medium Businesses</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                You've built a real business. Now you need a website that matches its quality and helps you grow. Whether you're starting fresh or upgrading from an outdated site, I'll create a digital presence that earns trust and generates leads.
              </p>
              <ul className="space-y-3">
                {[
                  "Professional services & consultants",
                  "Retail & hospitality businesses",
                  "Healthcare & wellness providers",
                  "Real estate & property companies",
                  "Restaurants, spas & lifestyle brands",
                ].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                    <ArrowRight size={11} className="flex-shrink-0" style={{ color: "var(--accent)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-border rounded p-10">
              <div className="w-12 h-12 bg-secondary flex items-center justify-center rounded mb-6">
                <Zap size={20} style={{ color: "var(--accent)" }} />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Marketing & Digital Agencies</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                You need a reliable development partner you can count on — someone who delivers clean code on deadline without being managed. I integrate seamlessly into agency workflows and operate with full discretion.
              </p>
              <ul className="space-y-3">
                {[
                  "White-label development under your brand",
                  "Consistent quality across every project",
                  "Clear communication, no micromanagement needed",
                  "NDA and confidentiality agreements available",
                  "Flexible capacity for busy periods",
                ].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <ArrowRight size={11} className="flex-shrink-0" style={{ color: "var(--accent)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── MORE TESTIMONIALS ── */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.slice(3).map(t => (
              <div key={t.name} className="bg-white rounded border border-border p-8 md:p-10">
                <Quote size={26} className="mb-5" style={{ color: "var(--accent)" }} />
                <p className="font-display text-lg font-medium text-foreground leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs mt-0.5">{t.role}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={12} fill="var(--accent)" style={{ color: "var(--accent)" }} />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS NUMBERS ── */}
      <section className="py-20 text-white" style={{ backgroundColor: "var(--accent)" }}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>Across All Projects</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12">Results that speak for themselves</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "150+", label: "Websites launched" },
              { value: "€2.4M+", label: "Revenue generated for clients" },
              { value: "8", label: "Industries served" },
              { value: "30d", label: "Post-launch support included" },
            ].map(item => (
              <div key={item.label}>
                <div className="font-display text-4xl md:text-5xl font-bold text-white mb-2">{item.value}</div>
                <div className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[280px_1fr] gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>FAQ</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              Frequently asked questions
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Can't find what you're looking for?{" "}
              <a href="#contact" className="hover:underline" style={{ color: "var(--accent)" }}>Get in touch</a>{" "}
              and I'll answer directly.
            </p>
          </div>
          <div className="divide-y divide-border">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="py-5">
                <button
                  className="w-full flex items-center justify-between text-left gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-foreground text-sm pr-4">{item.question}</span>
                  {openFaq === i
                    ? <ChevronUp size={16} className="text-muted-foreground flex-shrink-0" />
                    : <ChevronDown size={16} className="text-muted-foreground flex-shrink-0" />
                  }
                </button>
                {openFaq === i && (
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed pr-8">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section id="packages" className="py-20 md:py-28 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>Investment</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Transparent pricing. No hidden fees.
            </h2>
            <p className="text-muted-foreground text-lg">Every project gets a detailed quote after our discovery call. The packages below are starting points.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PACKAGES.map(pkg => (
              <div
                key={pkg.name}
                className={`rounded p-8 flex flex-col ${
                  pkg.highlighted ? "bg-foreground text-primary-foreground" : "bg-white border border-border"
                }`}
              >
                {pkg.highlighted && (
                  <span className="inline-block text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded mb-4 self-start" style={{ backgroundColor: "var(--accent)" }}>
                    Most Popular
                  </span>
                )}
                <h3 className={`font-display text-2xl font-bold mb-1 ${pkg.highlighted ? "text-white" : "text-foreground"}`}>
                  {pkg.name}
                </h3>
                <p className={`text-xs mb-5 ${pkg.highlighted ? "" : "text-muted-foreground"}`} style={pkg.highlighted ? { color: "rgba(255,255,255,0.5)" } : {}}>
                  {pkg.ideal}
                </p>
                <p className="font-display text-3xl font-bold mb-6" style={{ color: pkg.highlighted ? "var(--accent)" : "var(--foreground)" }}>
                  {pkg.price}
                </p>
                <ul className="space-y-3 flex-1 mb-8">
                  {pkg.features.map(feature => (
                    <li key={feature} className={`flex items-start gap-2 text-sm ${pkg.highlighted ? "" : "text-foreground"}`} style={pkg.highlighted ? { color: "rgba(255,255,255,0.8)" } : {}}>
                      <Check size={13} className="mt-0.5 flex-shrink-0" style={{ color: "var(--accent)" }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`w-full text-center text-sm font-semibold py-3 rounded transition-colors duration-200 block ${
                    pkg.highlighted
                      ? "text-white hover:opacity-90"
                      : "border border-foreground text-foreground hover:bg-foreground hover:text-white"
                  }`}
                  style={pkg.highlighted ? { backgroundColor: "var(--accent)" } : {}}
                >
                  Get a Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUARANTEE BAR ── */}
      <section className="py-16 bg-background border-y border-border">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: Shield, title: "Quality Guarantee", desc: "I don't consider a project done until you're genuinely happy with it." },
            { icon: Clock, title: "On-Time Delivery", desc: "Every project has a fixed timeline. I've never missed a launch date." },
            { icon: MessageSquare, title: "Clear Communication", desc: "Regular updates, fast responses, and no technical jargon." },
            { icon: Award, title: "Senior Expertise", desc: "10+ years of real-world WordPress and Elementor experience on every project." },
          ].map(item => (
            <div key={item.title} className="flex flex-col items-center">
              <div className="w-11 h-11 bg-secondary rounded flex items-center justify-center mb-4">
                <item.icon size={18} style={{ color: "var(--accent)" }} />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BIG CTA ── */}
      <section className="py-24 md:py-36 bg-foreground text-primary-foreground text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>Ready to Start?</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Let's build something<br />
            <em className="font-display not-italic" style={{ color: "var(--accent)" }}>worth being proud of.</em>
          </h2>
          <p className="text-lg mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            A 30-minute discovery call is free, zero commitment, and often the most valuable conversation you'll have about your business this year.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 text-white px-8 py-4 rounded font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: "var(--accent)" }}>
              Book a Free Call <ArrowRight size={16} />
            </a>
            <a href="mailto:hello@alexdev.com" className="inline-flex items-center gap-2 px-8 py-4 rounded font-semibold hover:bg-white/5 transition-colors border" style={{ borderColor: "rgba(255,255,255,0.25)", color: "white" }}>
              <Mail size={16} /> hello@alexdev.com
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-20 md:py-28 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>Contact</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Start the conversation
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Tell me about your project and I'll come back to you within 24 hours. If you're not sure what you need yet, that's perfectly fine — let's figure it out together.
            </p>
            <div className="space-y-4 mb-8">
              {[
                { icon: Mail, label: "hello@alexdev.com" },
                { icon: Phone, label: "+420 721 456 789" },
                { icon: Globe, label: "Based in Prague · Available worldwide" },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-3 text-sm text-foreground">
                  <item.icon size={15} className="flex-shrink-0" style={{ color: "var(--accent)" }} />
                  {item.label}
                </div>
              ))}
            </div>
            <div className="bg-white border border-border rounded p-5">
              <p className="text-sm font-semibold text-foreground mb-1">Typical response time</p>
              <p className="text-xs text-muted-foreground leading-relaxed">I respond to all inquiries within 24 hours on business days. Often much sooner.</p>
            </div>
          </div>
          <div>
            {formSubmitted ? (
              <div className="bg-white border border-border rounded p-10 text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: "rgba(196,148,44,0.1)" }}>
                  <Check size={22} style={{ color: "var(--accent)" }} />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">Message received!</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">I'll get back to you within 24 hours. Looking forward to learning about your project.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-border rounded p-8 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-foreground uppercase tracking-wide block mb-1.5">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-border rounded px-3 py-2.5 text-sm text-foreground bg-secondary focus:outline-none transition-colors"
                      style={{ outlineColor: "var(--accent)" }}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-foreground uppercase tracking-wide block mb-1.5">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-border rounded px-3 py-2.5 text-sm text-foreground bg-secondary focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-foreground uppercase tracking-wide block mb-1.5">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                    className="w-full border border-border rounded px-3 py-2.5 text-sm text-foreground bg-secondary focus:outline-none transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-foreground uppercase tracking-wide block mb-1.5">Project Type</label>
                  <select
                    value={formData.projectType}
                    onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full border border-border rounded px-3 py-2.5 text-sm text-foreground bg-secondary focus:outline-none transition-colors"
                  >
                    <option value="">Select a project type</option>
                    <option value="business">Business Website</option>
                    <option value="ecommerce">E-Commerce Store</option>
                    <option value="portfolio">Presentational / Portfolio</option>
                    <option value="agency">Agency Partnership</option>
                    <option value="other">Other / Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-foreground uppercase tracking-wide block mb-1.5">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border border-border rounded px-3 py-2.5 text-sm text-foreground bg-secondary focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project, your goals, and your timeline..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white py-3 rounded font-semibold text-sm hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "var(--foreground)" }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-foreground text-primary-foreground py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div className="md:col-span-2">
              <p className="font-display text-xl font-semibold mb-3">
                Alex<span style={{ color: "var(--accent)" }}>.</span>dev
              </p>
              <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
                Senior WordPress developer specializing in Elementor, WooCommerce, and presentation websites. Based in Prague, working globally.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>Services</p>
              <ul className="space-y-2">
                {["Business Websites", "E-Commerce Stores", "Presentational Sites", "Agency White-Label"].map(s => (
                  <li key={s}>
                    <a href="#services" className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.55)" }}>{s}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>Quick Links</p>
              <ul className="space-y-2">
                {[
                  { label: "Portfolio", href: "#portfolio" },
                  { label: "Process", href: "#process" },
                  { label: "FAQ", href: "#" },
                  { label: "Contact", href: "#contact" },
                ].map(s => (
                  <li key={s.label}>
                    <a href={s.href} className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.55)" }}>{s.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>© {new Date().getFullYear()} Alex Novak. All rights reserved.</p>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>hello@alexdev.com · +420 721 456 789</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

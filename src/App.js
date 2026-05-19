import './App.css';

const heroImage =
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85';

const projects = [
  {
    title: 'Sage Residence',
    type: 'Luxury Apartment',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'The Quiet Villa',
    type: 'Modern Home',
    image:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Ivory Lounge',
    type: 'Living Space',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Warm Minimal Suite',
    type: 'Bedroom Design',
    image:
      'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1200&q=80',
  },
];

const services = [
  ['Interior Design', 'Bespoke concepts, material palettes, furniture curation, and turnkey styling.'],
  ['Vastu Consultation', 'Scientific vastu guidance for harmony, flow, light, and mindful planning.'],
  ['Space Planning', 'Elegant layouts that make every square foot feel intentional and spacious.'],
  ['Renovation', 'Modern upgrades for homes, studios, and premium commercial spaces.'],
];

const testimonials = [
  ['Daydream Interio transformed our flat into a calm luxury home that feels deeply personal.', 'Aarohi Mehta'],
  ['The design team balanced vastu, function, and beauty with remarkable clarity.', 'Rohan Shah'],
  ['Every corner feels refined. Their palette, lighting, and detailing were exceptional.', 'Nisha Kulkarni'],
];

const timeline = [
  ['01', 'Discover', 'We understand lifestyle, vastu needs, budget, and the emotional tone of the space.'],
  ['02', 'Design', 'Moodboards, layouts, materials, and lighting come together in a clear design direction.'],
  ['03', 'Execute', 'Trusted vendors, site coordination, and detail-led supervision bring the vision to life.'],
  ['04', 'Style', 'Final styling, art, decor, and handover create a polished Daydream finish.'],
];

const portfolioImages = [
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80',
];

function App() {
  const whatsappMessage = encodeURIComponent(
    'Hello Daydream Interio, I would like to book a consultation for my interior project.'
  );

  return (
    <main className="site-shell">
      <nav className="glass-nav" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Daydream Interio home">
          <span className="brand-mark">DI</span>
          <span>
            <strong>Daydream Interio</strong>
            <small>Luxury Interior Studio</small>
          </span>
        </a>
        <div className="nav-links">
          {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      <section id="home" className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay" />
        <div className="hero-content reveal">
          <p className="eyebrow">Premium interiors, calm details, timeless homes</p>
          <h1>Designing Dream Spaces Into Reality</h1>
          <p className="hero-copy">Luxury interiors blended with modern elegance and scientific vastu.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#portfolio">
              Explore Projects
            </a>
            <a className="btn btn-ghost" href={`https://wa.me/919999999999?text=${whatsappMessage}`}>
              Book Consultation
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section about-grid">
        <div className="section-copy reveal">
          <p className="eyebrow">About the studio</p>
          <h2>Soft luxury shaped around the way you live.</h2>
          <p>
            Daydream Interio creates serene, detail-rich interiors with warm materiality,
            intelligent planning, and vastu-aware design. Our spaces feel composed, modern,
            and quietly premium, with every texture and corner chosen for purpose.
          </p>
        </div>
        <div className="about-card reveal">
          <span>12+</span>
          <p>Design disciplines blended across interiors, styling, renovation, and vastu.</p>
        </div>
      </section>

      <section id="services" className="section tint-section">
        <div className="section-heading reveal">
          <p className="eyebrow">Services</p>
          <h2>Everything your space needs, thoughtfully orchestrated.</h2>
        </div>
        <div className="card-grid">
          {services.map(([title, copy]) => (
            <article className="service-card reveal" key={title}>
              <span />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="portfolio" className="section">
        <div className="section-heading reveal">
          <p className="eyebrow">Featured projects</p>
          <h2>Swipe through spaces with a softer sense of grandeur.</h2>
        </div>
        <div className="project-carousel" aria-label="Featured project carousel">
          {projects.map((project) => (
            <article className="project-card reveal" key={project.title}>
              <img src={project.image} alt={`${project.title} interior`} />
              <div>
                <p>{project.type}</p>
                <h3>{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section testimonials">
        <div className="section-heading reveal">
          <p className="eyebrow">Client words</p>
          <h2>Calm process, beautiful outcomes.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map(([quote, name]) => (
            <article className="testimonial-card reveal" key={name}>
              <p>"{quote}"</p>
              <strong>{name}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <div className="section-heading reveal">
          <p className="eyebrow">Our process</p>
          <h2>From first daydream to final styling.</h2>
        </div>
        <div className="timeline">
          {timeline.map(([number, title, copy]) => (
            <article className="timeline-item reveal" key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section insta-section">
        <div className="section-heading reveal">
          <p className="eyebrow">Portfolio grid</p>
          <h2>Instagram-inspired moments, curated for the save folder.</h2>
        </div>
        <div className="insta-grid">
          {portfolioImages.map((image, index) => (
            <img className="reveal" key={image} src={image} alt={`Daydream Interio portfolio ${index + 1}`} />
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="section-copy reveal">
          <p className="eyebrow">Contact</p>
          <h2>Let us shape your next dream space.</h2>
          <p>
            Share your location, room type, and design goals. We will help you choose
            the right design path, from a single-room refresh to a full home transformation.
          </p>
        </div>
        <form className="contact-form reveal">
          <input type="text" name="name" placeholder="Your name" aria-label="Your name" />
          <input type="tel" name="phone" placeholder="Phone number" aria-label="Phone number" />
          <input type="text" name="project" placeholder="Project type" aria-label="Project type" />
          <textarea name="message" placeholder="Tell us about your space" aria-label="Tell us about your space" />
          <a className="btn btn-primary" href={`https://wa.me/919999999999?text=${whatsappMessage}`}>
            Send on WhatsApp
          </a>
        </form>
      </section>

      <footer className="footer">
        <a className="brand" href="#home" aria-label="Daydream Interio home">
          <span className="brand-mark">DI</span>
          <span>
            <strong>Daydream Interio</strong>
            <small>Luxury Interior Studio</small>
          </span>
        </a>
        <div className="social-links">
          <a href="https://www.instagram.com/" aria-label="Instagram">
            Instagram
          </a>
          <a href="https://www.facebook.com/" aria-label="Facebook">
            Facebook
          </a>
          <a href="https://www.pinterest.com/" aria-label="Pinterest">
            Pinterest
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;

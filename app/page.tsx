import Image from "next/image";

const projects = [
  {
    number: "01",
    name: "CYFURCOIN",
    role: "Community Management & Growth",
    summary: "Helping shape an active, informed and welcoming community around the project.",
    contributions: [
      "Manage and support the Telegram community",
      "Plan contests, quizzes, game nights and community events",
      "Create announcements and educational content",
      "Coordinate engagement campaigns and support project visibility",
      "Encourage participation, retention and organic community growth",
    ],
    signal: "COMMUNITY / ENGAGEMENT / OPERATIONS",
  },
  {
    number: "02",
    name: "RALLY25",
    role: "Community Manager",
    summary: "Building the community from its early days and helping new members find their place.",
    contributions: [
      "Manage the official Telegram community",
      "Welcome and onboard new members",
      "Support daily conversations and member questions",
      "Share updates and coordinate community engagement",
      "Help maintain a connected, active and informed community",
    ],
    signal: "EARLY-STAGE / ONBOARDING / COMMUNITY",
    metric: "8 → 100+",
    metricLabel: "COMMUNITY MEMBERS",
  },
];

const experience = [
  { project: "ANTARCTIC WALLET", role: "Ambassador", focus: "Community advocacy" },
  { project: "QUANTIO", role: "Ambassador", focus: "Content and engagement" },
  { project: "OZAK AI", role: "Ambassador", focus: "Awareness and advocacy" },
  { project: "CYFURCOIN", role: "Community Manager", focus: "Community growth and operations" },
];

const services = [
  ["01", "COMMUNITY MANAGEMENT", "Day-to-day community care, moderation, member support and clear communication."],
  ["02", "COMMUNITY BUILDING & GROWTH", "Welcoming new members, creating participation loops and supporting healthy organic growth."],
  ["03", "WEB3 CONTENT & STRATEGY", "Informative posts, threads, announcements and educational content shaped around a project's voice."],
  ["04", "SOCIAL MEDIA MANAGEMENT", "Consistent project communication, audience engagement and content coordination."],
  ["05", "GROWTH CAMPAIGNS", "Contests, quizzes, game nights, community events and coordinated engagement activities."],
  ["06", "CAMPAIGN COORDINATION", "Planning and organizing community activities so members know what is happening and how to participate."],
];

const skills = [
  "Community management", "Community moderation", "Community growth",
  "Web3 content writing", "Content strategy", "Social media management",
  "Ambassador relations", "Campaign coordination", "Graphic design",
];

const proof = [
  ["/proof-ambassador.jpg", "Ambassador appointment confirmation", "AMBASSADORSHIP"],
  ["/proof-partner.jpg", "Web3 partnership confirmation", "PARTNERSHIP"],
  ["/proof-admin.jpg", "Community administrator appointment", "COMMUNITY OPERATIONS"],
  ["/proof-pm.jpg", "Project management invitation", "PROJECT MANAGEMENT"],
  ["/proof-administrator.jpg", "Administrator role invitation", "OPERATIONS"],
  ["/proof-launch.jpg", "Launch administration and growth planning", "LAUNCH SUPPORT"],
];

const payments = [
  ["/receipt-usdc.jpg", "USDC payment receipt", "USDC"],
  ["/receipt-sol.jpg", "SOL payment receipt", "SOL"],
  ["/receipt-usdt.jpg", "USDT payment receipts", "USDT"],
];

const packages = [
  {
    name: "STARTER",
    promise: "BUILD YOUR FOUNDATION",
    weekly: "$100+",
    monthly: "$400+",
    items: ["Basic content support", "Community moderation", "Engagement support", "Weekly or monthly reporting"],
  },
  {
    name: "GROWTH",
    promise: "EXPAND YOUR REACH",
    weekly: "$200+",
    monthly: "$800+",
    featured: true,
    items: ["Content writing (posts and threads)", "Community management", "Growth strategy support", "Campaign support", "Reports and insights"],
  },
  {
    name: "PREMIUM",
    promise: "MAXIMUM IMPACT",
    weekly: "$300+",
    monthly: "$1,200+",
    items: ["Full content support", "Advanced community management", "Complete growth strategy", "Strategic campaign support", "In-depth reports and analysis"],
  },
];

export default function Home() {
  return (
    <main className="portfolio-v2" id="top">
      <header className="masthead">
        <a className="mast-logo focus-ring" href="#top" aria-label="PRIME home">P/07</a>
        <p>PRECIOUS AFOLAYAN<br />WEB3 COMMUNITY & GROWTH</p>
        <nav className="mast-nav" aria-label="Main navigation">
          <a href="#work">WORK</a><a href="#services">SERVICES</a><a href="#about">ABOUT</a>
        </nav>
        <a className="mast-contact focus-ring" href="#contact">LET&apos;S TALK ↗</a>
      </header>

      <section className="raw-hero" aria-labelledby="hero-title">
        <div className="hero-index" aria-hidden="true">PRIME® — WEB3 / 2026</div>
        <div className="hero-type">
          <p className="raw-kicker">PRECIOUS AFOLAYAN / KNOWN AS PRIME</p>
          <h1 id="hero-title"><span>COMMUNITIES</span><br />DON&apos;T GROW<br /><em>BY ACCIDENT.</em></h1>
          <p className="hero-position">WEB3 COMMUNITY BUILDER <i>·</i> CONTENT STRATEGIST <i>·</i> GROWTH</p>
          <div className="hero-note"><span>↘</span><p>I help Web3 projects build stronger communities through thoughtful communication, useful content and consistent engagement.</p></div>
          <div className="hero-actions">
            <a className="hero-primary focus-ring" href="#work">EXPLORE MY WORK ↘</a>
            <a className="hero-secondary focus-ring" href="https://t.me/preciousprime07" target="_blank" rel="noreferrer">GET IN TOUCH ↗</a>
          </div>
        </div>
        <div className="hero-portrait">
          <div className="portrait-label">IDENTITY / PRIME</div>
          <Image src="/prime-profile.jpg" alt="PRIME's illustrated profile portrait" width={640} height={640} priority />
          <div className="portrait-stamp">LEARN<br />CREATE<br />BUILD</div>
          <div className="portrait-coords">WEB3 / COMMUNITY<br />ALWAYS BUILDING</div>
        </div>
        <div className="hero-ledger">
          <div><strong>02</strong><span>FEATURED PROJECTS</span></div>
          <div><strong>8 → 100+</strong><span>RALLY25 COMMUNITY</span></div>
          <div><strong>WEB3</strong><span>BUILT IN PUBLIC</span></div>
          <a className="hero-channel focus-ring" href="#about">GET TO KNOW PRIME ↗</a>
        </div>
      </section>

      <section className="manifesto" id="about" aria-labelledby="about-title">
        <div className="manifesto-side">ABOUT / 001</div>
        <div>
          <p className="raw-kicker">LEARN. CREATE. BUILD.</p>
          <h2 id="about-title">GOOD PROJECTS<br />NEED PEOPLE<br />WHO <span>CARE.</span></h2>
          <div className="about-copy">
            <p>I&apos;m Precious Afolayan, also known as PRIME — a Web3-focused community builder and content professional passionate about helping blockchain projects grow through meaningful communication, strategic content and strong community engagement.</p>
            <p>My journey in Web3 is built around learning, creating and building. I enjoy understanding a project&apos;s vision, communicating its value and creating environments where people can connect, participate and grow.</p>
            <p>I believe successful Web3 projects need more than visibility. They need consistency, clear communication and people who care about the community behind the product.</p>
          </div>
        </div>
      </section>

      <section className="project-section" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <p>SELECTED CONTRIBUTIONS / 002</p>
          <h2 id="work-title">WHERE I&apos;VE<br /><span>BEEN BUILDING.</span></h2>
          <p>Two communities. Different stages. One focus: making it easier for people to participate, connect and stay involved.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-topline"><span>{project.number} / FEATURED PROJECT</span><span>{project.signal}</span></div>
              <div className="project-main">
                <div className="project-name-block">
                  <p>COMMUNITY CASE FILE</p>
                  <h3>{project.name}</h3>
                  <strong>{project.role}</strong>
                  {project.metric && <div className="project-metric"><b>{project.metric}</b><span>{project.metricLabel}</span></div>}
                </div>
                <div className="project-detail">
                  <p className="project-summary">{project.summary}</p>
                  <h4>MY CONTRIBUTIONS</h4>
                  <ul>{project.contributions.map((item) => <li key={item}><span>↗</span>{item}</li>)}</ul>
                </div>
              </div>
              <div className="project-bottom"><span>PRIME / COMMUNITY IN PRACTICE</span><span>LEARN · CREATE · BUILD</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section" aria-labelledby="experience-title">
        <div className="experience-intro">
          <p>EXPERIENCE / 003</p>
          <h2>IN THE<br /><i>ECOSYSTEM.</i></h2>
          <p>Alongside my featured community work, I&apos;ve contributed across ambassador, advocacy and project support roles.</p>
        </div>
        <div className="experience-list">
          <div className="experience-head"><span>PROJECT</span><span>ROLE</span><span>FOCUS</span></div>
          {experience.map((item, index) => (
            <article key={item.project}>
              <span className="experience-number">0{index + 1}</span>
              <strong>{item.project}</strong>
              <span>{item.role}</span>
              <span>{item.focus}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="service-deck" id="services" aria-labelledby="service-title">
        <div className="deck-header"><p>HOW I CAN CONTRIBUTE / 004</p><h2 id="service-title">WAYS<br />I HELP.</h2><p>COMMUNITY FIRST.<br />BUILT AROUND YOUR GOALS.</p></div>
        <div className="raw-service-list">
          {services.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p><b aria-hidden="true">↗</b></article>)}
        </div>
      </section>

      <section className="skills-section" aria-labelledby="skills-title">
        <div><p>TOOLS OF THE TRADE / 005</p><h2 id="skills-title">WHAT I<br /><span>BRING.</span></h2></div>
        <div className="skill-cloud">{skills.map((skill, index) => <span key={skill}><i>0{index + 1}</i>{skill}</span>)}</div>
      </section>

      <section className="proof-section" aria-labelledby="proof-title">
        <div className="proof-heading"><p>TRUST & PROOF / 006</p><h2 id="proof-title">THE WORK<br /><span>SPEAKS.</span></h2><p>Appointments, project conversations and feedback that reflect the trust built through showing up and doing the work.</p></div>
        <div className="proof-grid">
          {proof.slice(0, 3).map(([src, alt, caption], index) => (
            <figure className={`proof-card proof-card-${index + 1}`} key={src}>
              <Image src={src} alt={alt} width={1280} height={900} />
              <figcaption><span>0{index + 1}</span>{caption}</figcaption>
            </figure>
          ))}
        </div>
        <details className="proof-more">
          <summary className="proof-more-trigger focus-ring">MORE EXPERIENCE & COMMUNITY PROOF <span aria-hidden="true">+</span></summary>
          <div className="proof-grid proof-grid-more">
            {proof.slice(3).map(([src, alt, caption], index) => (
              <figure className={`proof-card proof-card-${index + 4}`} key={src}>
                <Image src={src} alt={alt} width={1280} height={900} />
                <figcaption><span>0{index + 4}</span>{caption}</figcaption>
              </figure>
            ))}
          </div>
        </details>
        <div className="payment-proof">
          <div className="payment-proof-heading"><p>PAID CONTRIBUTIONS / 007</p><h3>TRUST THAT<br /><span>GOES BOTH WAYS.</span></h3><p>Selected payment records from completed Web3 work. A reminder that community and content work can create real value.</p></div>
          <div className="payment-grid">
            {payments.map(([src, alt, caption], index) => (
              <figure className="payment-card" key={src}>
                <Image src={src} alt={alt} width={1280} height={720} />
                <figcaption><span>0{index + 1}</span>{caption} / PAYMENT RECORD</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-section" id="rates" aria-labelledby="pricing-title">
        <div className="section-heading pricing-heading">
          <p>WAYS TO WORK TOGETHER / 008</p>
          <h2 id="pricing-title">CLEAR SCOPE.<br /><span>FLEXIBLE SUPPORT.</span></h2>
          <p>Choose a starting point based on the support your project needs. Custom and project-based arrangements are welcome.</p>
        </div>
        <div className="pricing-grid">
          {packages.map((item) => (
            <article className={`price-card ${item.featured ? "price-featured" : ""}`} key={item.name}>
              <div className="price-card-top"><span>{item.name}</span>{item.featured && <b>POPULAR STARTING POINT</b>}</div>
              <p className="price-promise">{item.promise}</p>
              <div className="price-points">
                <div><strong>{item.weekly}</strong><span>/ WEEK</span></div>
                <div><strong>{item.monthly}</strong><span>/ MONTH</span></div>
              </div>
              <ul>{item.items.map((line) => <li key={line}><span>✓</span>{line}</li>)}</ul>
              <a href="https://t.me/preciousprime07" target="_blank" rel="noreferrer" className="price-cta focus-ring">DISCUSS THIS PACKAGE ↗</a>
            </article>
          ))}
        </div>
        <p className="pricing-note">All packages are starting points. Final scope, timelines and deliverables are agreed around each project&apos;s needs.</p>
      </section>

      <section className="final-call" id="contact" aria-labelledby="contact-title">
        <p>FOR PROJECTS, TEAMS & COLLABORATORS</p>
        <h2 id="contact-title">LET&apos;S BUILD<br />SOMETHING <span>MEANINGFUL.</span></h2>
        <p className="contact-intro">Have a community to grow, a story to tell or a project that needs thoughtful support? Let&apos;s talk.</p>
        <div className="contact-links">
          <a className="block-button focus-ring" href="mailto:preciousafolayan6@gmail.com">EMAIL PRIME <span>↗</span></a>
          <a className="block-button inverse focus-ring" href="https://t.me/preciousprime07" target="_blank" rel="noreferrer">TELEGRAM <span>↗</span></a>
          <a className="block-button focus-ring" href="https://x.com/preciousprime07" target="_blank" rel="noreferrer">X / @PRECIOUSPRIME07 <span>↗</span></a>
        </div>
      </section>

      <footer className="raw-footer"><strong>PRIME®</strong><p>PRECIOUS AFOLAYAN / WEB3 COMMUNITY & GROWTH</p><a className="focus-ring" href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}

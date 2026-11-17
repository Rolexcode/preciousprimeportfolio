import Image from "next/image";

const roles = [
  { project: "CYFURCOIN", role: "Community Management", scope: "Growth / Engagement" },
  { project: "RALLY25", role: "Community Manager", scope: "Onboarding / Support" },
  { project: "ANTARCTIC WALLET", role: "Ambassador", scope: "Community / Advocacy" },
  { project: "QUANTIO", role: "Ambassador", scope: "Content / Engagement" },
];

const services = [
  ["01", "COMMUNITY MANAGEMENT & MODERATION", "Building a safe, welcoming, active space while keeping day-to-day conversations organised."],
  ["02", "COMMUNITY BUILDING & GROWTH", "Creating onboarding, retention and participation systems that make a community worth joining."],
  ["03", "WEB3 CONTENT & STRATEGY", "Writing posts, threads, updates and educational content that communicates a project’s value."],
  ["04", "SOCIAL MEDIA MANAGEMENT", "Coordinating an active social presence, strategic engagement and consistent project communication."],
  ["05", "GROWTH CAMPAIGNS & ENGAGEMENT", "Planning contests, quizzes, game nights and campaigns that turn attention into participation."],
  ["06", "COMMUNITY ACTIVITIES & COORDINATION", "Keeping activities, announcements and feedback loops moving across the community."],
  ["07", "AMBASSADOR & VISUAL SUPPORT", "Supporting project advocacy, promotion and simple visual content that improves visibility."],
];

const featuredProjects = [
  {
    number: "01",
    project: "CYFURCOIN",
    role: "COMMUNITY MANAGEMENT & GROWTH",
    copy: "Supporting the Telegram community with engagement campaigns, contests, announcements, educational content and day-to-day moderation that keeps the room active, organised and welcoming.",
  },
  {
    number: "02",
    project: "RALLY25",
    role: "COMMUNITY MANAGER",
    copy: "Helping build the official Telegram community from an early group of 8 members to 100+ through onboarding, daily support, clear updates and consistent member engagement.",
  },
];

const featuredProof = [
  ["/proof-ambassador.jpg", "Ambassador appointment confirmed", "Ambassadorship / 01"],
  ["/proof-partner.jpg", "Web3 partnership confirmed", "Partnership / 02"],
  ["/proof-admin.jpg", "Community administrator appointment", "Community admin / 03"],
];

const moreProof = [
  ["/proof-pm.jpg", "Online project manager invitation", "Project management / 04"],
  ["/proof-administrator.jpg", "Administrator role invitation", "Operations / 05"],
  ["/proof-launch.jpg", "Launch administration and growth planning", "Launch support / 06"],
];

const payments = [
  ["/receipt-usdc.jpg", "USDC payment receipt", "USDC / Payment 01"],
  ["/receipt-sol.jpg", "SOL payment receipt", "SOL / Payment 02"],
  ["/receipt-usdt.jpg", "USDT payment receipts", "USDT / Payment 03"],
];

export default function Home() {
  return (
    <main className="portfolio-v2" id="top">
      <header className="masthead">
        <a className="mast-logo focus-ring" href="#top" aria-label="Prime home">P/07</a>
        <p>GROWTH SYSTEMS FOR<br />INTERNET-NATIVE TEAMS</p>
        <p className="mast-status"><span aria-hidden="true" /> AVAILABLE FOR SELECT PROJECTS</p>
        <a className="mast-contact focus-ring" href="https://t.me/preciousprime07" target="_blank" rel="noreferrer">START A CHAT ↗</a>
      </header>

      <section className="raw-hero" aria-labelledby="hero-title">
        <div className="hero-index" aria-hidden="true">PRIME® — 2026</div>
        <div className="hero-type">
          <p className="raw-kicker">PRIME / COMMUNITY · CONTENT · GROWTH</p>
          <h1 id="hero-title"><span>WEB3 GROWTH</span><br />& COMMUNITY<br /><em>STRATEGIST.</em></h1>
          <div className="hero-note"><span>↘</span><p>I help early-stage Web3 projects build visibility, stronger communities and momentum before and after launch.</p></div>
        </div>

        <div className="hero-portrait">
          <div className="portrait-label">IDENTITY / 001</div>
          <Image src="/prime-profile.jpg" alt="Prime's monochrome illustrated profile portrait" width={640} height={640} priority />
          <div className="portrait-stamp">GROW<br />BUILD<br />LEAD</div>
          <div className="portrait-coords">ONLINE / WEB3<br />SIGNAL: STRONG</div>
        </div>

        <div className="hero-ledger">
          <div><strong>2K+</strong><span>NETWORK</span></div>
          <div><strong>9K</strong><span>POSTS</span></div>
          <div><strong>3+</strong><span>AMBASSADORSHIPS</span></div>
          <a className="hero-channel focus-ring" href="https://t.me/primeschamb" target="_blank" rel="noreferrer">ENTER PRIME&apos;S CHAMBER ↗</a>
        </div>
      </section>

      <section className="manifesto" aria-labelledby="manifesto-title">
        <div className="manifesto-side">THE JOB / 001</div>
        <div><p className="raw-kicker">ABOUT PRIME / COMMUNITY-FIRST WEB3 WORK.</p><h2 id="manifesto-title">LEARN.<br />CREATE.<br /><span>BUILD.</span></h2><p className="manifesto-copy">I&apos;m Precious Afolayan, known as PRIME—a Web3 community builder and content professional. I help projects communicate their value, build trust and create places where members can learn, participate and stay.</p></div>
      </section>

      <section className="service-deck" id="services" aria-labelledby="service-title">
        <div className="deck-header"><p>CAPABILITIES / 002</p><h2 id="service-title">WHAT<br />I DO.</h2><p>FROM FIRST COMMUNITY SETUP<br />TO POST-LAUNCH GROWTH.</p></div>
        <div className="raw-service-list">
          {services.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p><b aria-hidden="true">↗</b></article>)}
        </div>
      </section>

      <section className="work-ledger" aria-labelledby="work-title">
        <div className="work-intro"><p>PROJECT LEDGER / 003</p><h2 id="work-title">TRUSTED<br />IN THE<br /><i>FIELD.</i></h2><p className="work-copy">From advocacy to project coordination, I work inside the conversation—not above it.</p></div>
        <div className="role-table" role="list" aria-label="Selected Web3 roles">
          <div className="role-head"><span>PROJECT</span><span>ROLE</span><span>SCOPE</span></div>
          {roles.map((item, index) => <article key={item.project} role="listitem"><div><small>0{index + 1}</small><strong>{item.project}</strong></div><p>{item.role}</p><p>{item.scope}</p></article>)}
        </div>
      </section>

      <section className="project-stories" aria-labelledby="projects-title">
        <div className="project-stories-heading"><p>FEATURED PROJECTS / 004</p><h2 id="projects-title">BUILT<br />WITH THE<br /><span>COMMUNITY.</span></h2><p>Two communities where PRIME has contributed directly to conversation, support and growth.</p></div>
        <div className="project-story-grid">
          {featuredProjects.map((item) => (
            <article className="project-story" key={item.project}>
              <span>{item.number}</span><p>{item.role}</p><h3>{item.project}</h3><p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="proof-section" aria-labelledby="proof-title">
        <div className="proof-heading"><p>PROOF OF WORK / 005</p><h2 id="proof-title">THE WORK<br /><span>SPEAKS.</span></h2><p>Real conversations. Real appointments. Real trust earned across ambassador, community, operations and launch roles.</p></div>
        <div className="proof-grid">
          {featuredProof.map(([src, alt, caption], index) => (
            <figure className={`proof-card proof-card-${index + 1}`} key={src}>
              <Image src={src} alt={alt} width={1280} height={900} />
              <figcaption><span>0{index + 1}</span>{caption}</figcaption>
            </figure>
          ))}
        </div>

        <div className="payment-proof" aria-labelledby="payment-title">
          <div className="payment-proof-heading"><p>PAYMENT PROOF / 006</p><h3 id="payment-title">PAID IN<br /><span>CRYPTO.</span></h3><p>Selected on-chain and stablecoin payment records from completed Web3 work.</p></div>
          <div className="payment-grid">
            {payments.map(([src, alt, caption], index) => (
              <figure className="payment-card" key={src}>
                <Image src={src} alt={alt} width={1280} height={720} />
                <figcaption><span>0{index + 1}</span>{caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <details className="proof-more">
          <summary className="proof-more-trigger focus-ring">SEE MORE WORK PROOF <span aria-hidden="true">+</span></summary>
          <div className="proof-grid proof-grid-more">
            {moreProof.map(([src, alt, caption], index) => (
              <figure className={`proof-card proof-card-${index + 4}`} key={src}>
                <Image src={src} alt={alt} width={1280} height={900} />
                <figcaption><span>0{index + 4}</span>{caption}</figcaption>
              </figure>
            ))}
          </div>
        </details>
      </section>

      <section className="rate-guide" aria-labelledby="rate-title">
        <div className="rate-guide-heading"><p>SERVICE GUIDE / 007</p><h2 id="rate-title">IMPRESSED BY<br />THE WORK?<br /><span>SEE THE RATES.</span></h2><p>Clear packages for content, community management and growth support. Custom scopes are available for the right project.</p></div>
        <figure className="rate-card-frame">
          <Image src="/prime-web3-rate-card.png" alt="Prime Web3 rate card showing content writing, community management and growth strategy packages" width={1024} height={1536} />
          <figcaption>PRIME WEB3 RATE CARD / PACKAGES & CUSTOM SCOPES</figcaption>
        </figure>
        <div className="rate-actions"><a className="rate-action focus-ring" href="https://t.me/preciousprime07" target="_blank" rel="noreferrer">ASK ABOUT A PACKAGE <span>↗</span></a><a className="rate-action rate-action-alt focus-ring" href="mailto:preciousafolayan6@gmail.com">EMAIL PRIME <span>↗</span></a></div>
      </section>

      <section className="final-call" aria-labelledby="contact-title">
        <p>YOUR COMMUNITY SHOULD FEEL ALIVE.</p><h2 id="contact-title">LET&apos;S MAKE<br />SOME <span>NOISE.</span></h2><a className="contact-email focus-ring" href="mailto:preciousafolayan6@gmail.com">preciousafolayan6@gmail.com</a>
        <div className="final-actions"><a className="block-button focus-ring" href="https://t.me/preciousprime07" target="_blank" rel="noreferrer">MESSAGE PRIME ON TELEGRAM <span>↗</span></a><a className="block-button inverse focus-ring" href="https://x.com/preciousprime07" target="_blank" rel="noreferrer">FOLLOW @PRECIOUSPRIME07 <span>↗</span></a></div>
      </section>

      <footer className="raw-footer"><strong>PRIME®</strong><p>WEB3 GROWTH & COMMUNITY STRATEGIST</p><a className="focus-ring" href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}

import Image from "next/image";

const roles = [
  { project: "ANTARCTIC WALLET", role: "Ambassador", scope: "Community / Advocacy" },
  { project: "QUANTIO", role: "Ambassador", scope: "Content / Engagement" },
  { project: "OZAK AI", role: "Ambassador", scope: "Awareness / Advocacy" },
  { project: "CYFURCOIN", role: "Community Manager", scope: "Community growth / Operations" },
];

const services = [
  ["01", "COMMUNITY MANAGEMENT & MODERATION", "Managing daily conversations, member support and moderation to keep Web3 communities active, organized and welcoming."],
  ["02", "COMMUNITY BUILDING & GROWTH", "Welcoming new members, encouraging participation and supporting organic growth and retention."],
  ["03", "WEB3 CONTENT CREATION & STRATEGY", "Creating informative posts, threads, announcements, project updates and educational content."],
  ["04", "SOCIAL MEDIA MANAGEMENT", "Maintaining project communication, audience engagement and a consistent social presence."],
  ["05", "GROWTH CAMPAIGNS & ENGAGEMENT", "Planning contests, quizzes, game nights, community events and coordinated engagement campaigns."],
  ["06", "AMBASSADOR & COMMUNITY ADVOCACY", "Supporting Web3 projects through promotion, education, outreach and community advocacy."],
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
        <p>PRECIOUS AFOLAYAN<br />WEB3 COMMUNITY & GROWTH</p>
        <p className="mast-status"><span aria-hidden="true" /> LEARN · CREATE · BUILD</p>
        <a className="mast-contact focus-ring" href="https://t.me/preciousprime07" target="_blank" rel="noreferrer">START A CHAT ↗</a>
      </header>

      <section className="raw-hero" aria-labelledby="hero-title">
        <div className="hero-index" aria-hidden="true">PRIME® — 2026</div>
        <div className="hero-type">
          <p className="raw-kicker">PRECIOUS AFOLAYAN / KNOWN AS PRIME</p>
          <h1 id="hero-title"><span>WEB3 COMMUNITY</span><br />& CONTENT<br /><em>BUILDER.</em></h1>
          <div className="hero-note"><span>↘</span><p>I help Web3 projects grow through meaningful communication, strategic content and active, well-managed communities.</p></div>
        </div>

        <div className="hero-portrait">
          <div className="portrait-label">IDENTITY / 001</div>
          <Image src="/prime-profile.jpg" alt="Prime's monochrome illustrated profile portrait" width={640} height={640} priority />
          <div className="portrait-stamp">GROW<br />BUILD<br />LEAD</div>
          <div className="portrait-coords">ONLINE / WEB3<br />SIGNAL: STRONG</div>
        </div>

        <div className="hero-ledger">
          <div><strong>02</strong><span>FEATURED PROJECTS</span></div>
          <div><strong>8 → 100+</strong><span>RALLY25 COMMUNITY</span></div>
          <div><strong>WEB3</strong><span>COMMUNITY & CONTENT</span></div>
          <a className="hero-channel focus-ring" href="#work">EXPLORE MY WORK ↗</a>
        </div>
      </section>

      <section className="manifesto" id="about" aria-labelledby="manifesto-title">
        <div className="manifesto-side">ABOUT / 001</div>
        <div><p className="raw-kicker">LEARN. CREATE. BUILD.</p><h2 id="manifesto-title">GOOD PROJECTS<br />NEED PEOPLE<br /><span>WHO CARE.</span></h2><p className="manifesto-copy">I&apos;m Precious Afolayan, also known as PRIME, a Web3-focused community builder and content professional passionate about helping blockchain projects grow through meaningful communication, strategic content and strong community engagement. My journey in Web3 is built around learning, creating and building. I enjoy understanding a project&apos;s vision, communicating its value and creating environments where communities can grow and thrive. I believe successful Web3 projects need more than visibility. They need people who understand the importance of community, consistency, communication and long-term growth.</p></div>
      </section>

      <section className="service-deck" id="services" aria-labelledby="service-title">
        <div className="deck-header"><p>CAPABILITIES / 002</p><h2 id="service-title">WHAT<br />I DO.</h2><p>FROM FIRST COMMUNITY SETUP<br />TO POST-LAUNCH GROWTH.</p></div>
        <div className="raw-service-list">
          {services.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p><b aria-hidden="true">↗</b></article>)}
        </div>
      </section>

      <section className="work-ledger" id="work" aria-labelledby="work-title">
        <div className="work-intro"><p>FEATURED PROJECTS / 003</p><h2 id="work-title">WHERE I&apos;VE<br />BEEN <i>BUILDING.</i></h2><p className="work-copy">Community work across two projects, from early-stage onboarding to ongoing engagement and growth.</p></div>
        <div className="role-table" role="list" aria-label="Featured Web3 projects">
          <div className="role-head"><span>PROJECT / ROLE</span><span>CONTRIBUTIONS</span><span>IMPACT</span></div>
          <article role="listitem"><div><small>01</small><strong>CYFURCOIN</strong></div><p>Community Management & Growth</p><p>Telegram management, contests, quizzes, game nights, announcements, educational content, engagement campaigns and community retention.</p></article>
          <article role="listitem"><div><small>02</small><strong>RALLY25</strong></div><p>Community Manager</p><p>Early-stage community building, onboarding, daily member support, updates and engagement. Grew from 8 to 100+ members.</p></article>
        </div>
      </section>

      <section className="work-ledger" aria-labelledby="experience-title">
        <div className="work-intro"><p>EXPERIENCE / 004</p><h2 id="experience-title">IN THE<br /><i>ECOSYSTEM.</i></h2><p className="work-copy">Alongside featured projects, I&apos;ve contributed through ambassador and project support roles.</p></div>
        <div className="role-table" role="list" aria-label="Selected Web3 roles">
          <div className="role-head"><span>PROJECT</span><span>ROLE</span><span>SCOPE</span></div>
          {roles.map((item, index) => <article key={item.project} role="listitem"><div><small>0{index + 1}</small><strong>{item.project}</strong></div><p>{item.role}</p><p>{item.scope}</p></article>)}
        </div>
      </section>

      <section className="proof-section" aria-labelledby="proof-title">
        <div className="proof-heading"><p>PROOF OF WORK / 004</p><h2 id="proof-title">THE WORK<br /><span>SPEAKS.</span></h2><p>Selected appointments, project conversations and payment records that reflect trust built through consistent work and contribution.</p></div>
        <div className="proof-grid">
          {featuredProof.map(([src, alt, caption], index) => (
            <figure className={`proof-card proof-card-${index + 1}`} key={src}>
              <Image src={src} alt={alt} width={1280} height={900} />
              <figcaption><span>0{index + 1}</span>{caption}</figcaption>
            </figure>
          ))}
        </div>

        <div className="payment-proof" aria-labelledby="payment-title">
          <div className="payment-proof-heading"><p>PAYMENT PROOF / 005</p><h3 id="payment-title">PAID IN<br /><span>CRYPTO.</span></h3><p>Selected on-chain and stablecoin payment records from completed Web3 work.</p></div>
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
          <summary className="proof-more-trigger focus-ring">SEE DEV REVIEWS <span aria-hidden="true">+</span></summary>
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

      <section className="service-deck" id="rates" aria-labelledby="rates-title">
        <div className="deck-header"><p>WAYS TO WORK TOGETHER / 006</p><h2 id="rates-title">PRIME&apos;S<br />RATE CARD.</h2><p>STARTING PACKAGES.<br />CUSTOM OPTIONS AVAILABLE.</p></div>
        <div className="raw-service-list">
          <article><span>01</span><h3>STARTER — $100+ / WEEK · $400+ / MONTH</h3><p>Basic content support, community moderation, engagement support and weekly or monthly reports.</p><b aria-hidden="true">↗</b></article>
          <article><span>02</span><h3>GROWTH — $200+ / WEEK · $800+ / MONTH</h3><p>Content writing, community management, growth strategy support, campaign support, detailed reports and insights.</p><b aria-hidden="true">↗</b></article>
          <article><span>03</span><h3>PREMIUM — $300+ / WEEK · $1,200+ / MONTH</h3><p>Full content support, advanced community management, complete growth strategy, strategic campaign support, in-depth reports and analysis.</p><b aria-hidden="true">↗</b></article>
        </div>
      </section>

      <section className="final-call" id="contact" aria-labelledby="contact-title">
        <p>FOR PROJECTS, TEAMS & COLLABORATORS</p><h2 id="contact-title">LET&apos;S BUILD<br />SOMETHING <span>MEANINGFUL.</span></h2>
        <p className="manifesto-copy">Have a community to grow, a story to tell or a project that needs thoughtful support? Let&apos;s talk.</p>
        <div className="final-actions"><a className="block-button focus-ring" href="mailto:preciousafolayan6@gmail.com">EMAIL PRIME <span>↗</span></a><a className="block-button inverse focus-ring" href="https://t.me/preciousprime07" target="_blank" rel="noreferrer">TELEGRAM <span>↗</span></a><a className="block-button focus-ring" href="https://x.com/preciousprime07" target="_blank" rel="noreferrer">X / @PRECIOUSPRIME07 <span>↗</span></a></div>
      </section>

      <footer className="raw-footer"><strong>PRIME®</strong><p>PRECIOUS AFOLAYAN / WEB3 COMMUNITY & GROWTH</p><a className="focus-ring" href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}

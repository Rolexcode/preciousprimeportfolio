import Image from "next/image";

const roles = [
  { project: "CYFURCOIN", role: "Community Manager", scope: "Growth / Engagement" },
  { project: "RALLY25", role: "Community Manager", scope: "8 → 100+ Members" },
  { project: "ANTARCTIC WALLET", role: "Ambassador", scope: "Community / Advocacy" },
  { project: "QUANTIO", role: "Ambassador", scope: "Content / Engagement" },
];

const services = [
  ["01", "COMMUNITY MANAGEMENT", "Building, managing and keeping Web3 communities active, organised and engaged."],
  ["02", "COMMUNITY MODERATION", "Maintaining a safe, welcoming environment while supporting daily member conversations."],
  ["03", "COMMUNITY BUILDING & GROWTH", "Creating practical onboarding, engagement and retention systems that help a community grow."],
  ["04", "SOCIAL MEDIA MANAGEMENT", "Coordinating an active social presence, strategic engagement and consistent project communication."],
  ["05", "GROWTH CAMPAIGNS & ENGAGEMENT", "Planning contests, quizzes, game nights and campaigns that turn attention into participation."],
  ["06", "WEB3 CONTENT & STRATEGY", "Posts, threads, updates and educational content that communicate a project’s value."],
  ["07", "AMBASSADOR & VISUAL SUPPORT", "Project advocacy and simple visual content that improve awareness and visibility."],
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

/* const payments = [
  ["/receipt-usdc.jpg", "USDC payment receipt", "USDC / Payment 01"],
  ["/receipt-sol.jpg", "SOL payment receipt", "SOL / Payment 02"],
  ["/receipt-usdt.jpg", "USDT payment receipts", "USDT / Payment 03"],
]; */

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
          <p className="raw-kicker">PRIME / STRATEGY · GROWTH · COMMUNITY</p>
          <h1 id="hero-title"><span>WEB3 GROWTH</span><br />& COMMUNITY<br /><em>STRATEGIST.</em></h1>
          <div className="hero-note"><span>↘</span><p>I help early-stage Web3 projects build visibility, community systems and momentum before and after launch.</p></div>
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
        <div><p className="raw-kicker">A COMMUNITY IS NOT A FOLLOWER COUNT.</p><h2 id="manifesto-title">I DON&apos;T JUST<br />WATCH THE CHAT.<br /><span>I MOVE IT.</span></h2><p className="manifesto-copy">I&apos;m Precious Afolayan, known as PRIME—a Web3 community builder and content professional. Good community work is part strategist, part host and part fire-fighter: knowing when to spark a conversation, when to listen and when to protect the room.</p></div>
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
        <div className="project-notes" aria-label="Selected project contributions">
          <article><p>CYFURCOIN / COMMUNITY MANAGEMENT & GROWTH</p><h3>KEEPING THE ROOM ACTIVE.</h3><p>Telegram management, community activities, contests, announcements, education and social support designed to encourage participation and retention.</p></article>
          <article><p>RALLY25 / COMMUNITY MANAGER</p><h3>BUILDING FROM EARLY.</h3><p>Member onboarding, daily support, project updates and discussion management—from an early group of 8 to a community of 100+ members.</p></article>
        </div>
      </section>

      <section className="proof-section">
        {/*
        <div className="proof-heading"><p>PROOF OF WORK / 004</p><h2 id="proof-title">THE WORK<br /><span>SPEAKS.</span></h2><p>Real conversations. Real appointments. Real trust earned across ambassador, community, operations and launch roles.</p></div>
        */}
        <div className="proof-grid">
          {featuredProof.map(([src, alt, caption], index) => (
            <figure className={`proof-card proof-card-${index + 1}`} key={src}>
              <Image src={src} alt={alt} width={1280} height={900} />
              <figcaption><span>0{index + 1}</span>{caption}</figcaption>
            </figure>
          ))}
        </div>

        {/*
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
        */}

        {/*
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
        */}
        <div className="rate-card-showcase" aria-labelledby="rate-card-title">
          <div className="rate-card-heading"><p>RATE CARD / 006</p><h3 id="rate-card-title">READY TO<br /><span>WORK?</span></h3><p>Packages for content, community management and sustainable growth. Custom scopes are available.</p></div>
          <div className="rate-card-inline">
            <figure className="proof-card"><Image src="/prime-web3-rate-card.png" alt="Prime Web3 rate card showing content writing, community management and growth strategy packages" width={1024} height={1536} /><figcaption><span>RATE CARD</span>PACKAGES & CUSTOM SCOPES</figcaption></figure>
            <a className="rate-card-contact focus-ring" href="https://t.me/preciousprime07" target="_blank" rel="noreferrer">ASK ABOUT A PACKAGE ↗</a>
          </div>
        </div>
      </section>

      <section className="final-call" aria-labelledby="contact-title">
        <p>YOUR COMMUNITY SHOULD FEEL ALIVE.</p><h2 id="contact-title">LET&apos;S MAKE<br />SOME <span>NOISE.</span></h2><a className="contact-email focus-ring" href="mailto:preciousafolayan6@gmail.com">preciousafolayan6@gmail.com</a>
        <div className="final-actions"><a className="block-button focus-ring" href="https://t.me/preciousprime07" target="_blank" rel="noreferrer">MESSAGE PRIME ON TELEGRAM <span>↗</span></a><a className="block-button inverse focus-ring" href="https://x.com/preciousprime07" target="_blank" rel="noreferrer">FOLLOW @PRECIOUSPRIME07 <span>↗</span></a></div>
      </section>

      <footer className="raw-footer"><strong>PRIME®</strong><p>WEB3 GROWTH & COMMUNITY STRATEGIST</p><a className="focus-ring" href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}

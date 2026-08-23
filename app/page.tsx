import Image from "next/image";

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark focus-ring" href="#top" aria-label="PRIME home">
          PRIME<span>.</span>
        </a>
        <div className="nav-links">
          <a className="nav-link focus-ring" href="#services">Expertise</a>
          <a className="nav-cta focus-ring" href="https://t.me/preciousprime07Tg" target="_blank" rel="noreferrer">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span aria-hidden="true" /> Web3 community operator</p>
          <h1>Strong communities don&apos;t happen by chance.</h1>
          <p className="hero-lede">
            I&apos;m Prime — a community manager, moderator and content builder helping Web3 teams turn attention into active, lasting communities.
          </p>
          <div className="hero-actions">
            <a className="primary-button focus-ring" href="https://t.me/preciousprime07Tg" target="_blank" rel="noreferrer">
              Start a conversation <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link focus-ring" href="https://x.com/preciousprime07" target="_blank" rel="noreferrer">
              Follow on X <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="portrait-stage" aria-label="Portrait of Prime">
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="portrait-frame">
            <Image
              src="/prime-profile.jpg"
              alt="Prime's black-and-white illustrated profile portrait"
              width={640}
              height={640}
              priority
            />
          </div>
          <div className="availability"><span aria-hidden="true" /> Available for the right project</div>
          <div className="portrait-tag">CM · MOD · CONTENT</div>
        </div>
      </section>

      <section className="signal-bar" id="services" aria-label="Prime's expertise">
        <p>Community management</p><span aria-hidden="true">✦</span>
        <p>Moderation</p><span aria-hidden="true">✦</span>
        <p>Content strategy</p><span aria-hidden="true">✦</span>
        <p>Web3 growth</p>
      </section>

      <section className="impact-section section-shell" aria-labelledby="impact-title">
        <div className="section-kicker">01 / Impact</div>
        <div className="impact-intro">
          <h2 id="impact-title">From audience<br />to belonging.</h2>
          <div>
            <p>I help founders create the rhythm, trust and daily energy that makes people want to stay.</p>
            <a className="arrow-link focus-ring" href="https://t.me/primeschambX" target="_blank" rel="noreferrer">
              Enter Prime&apos;s Chamber <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="metrics-grid">
          <article><strong>2K+</strong><span>X network</span><p>An active Web3 audience built through consistent conversation.</p></article>
          <article><strong>9K</strong><span>Posts</span><p>Hands-on presence, project discovery and daily community touchpoints.</p></article>
          <article><strong>3+</strong><span>Ambassador roles</span><p>Representing products with clarity, consistency and genuine advocacy.</p></article>
        </div>
      </section>

      <section className="services-section section-shell" aria-labelledby="services-title">
        <div className="section-kicker light">02 / What I do</div>
        <div className="services-heading">
          <h2 id="services-title">Community is<br />the product.</h2>
          <p>Strategy is only useful when it shows up every day. I combine direction with hands-on execution.</p>
        </div>
        <div className="service-list">
          <article><span>01</span><h3>Community management</h3><p>Culture, programming, feedback loops and daily operations that keep members active.</p></article>
          <article><span>02</span><h3>Moderation & safety</h3><p>Clear rules, calm conflict resolution and fast response to spam, scams and disruption.</p></article>
          <article><span>03</span><h3>Growth & engagement</h3><p>Campaigns, activations and conversations that turn reach into meaningful participation.</p></article>
          <article><span>04</span><h3>Content & advocacy</h3><p>Native Web3 content, project storytelling and ambassador support across X and Telegram.</p></article>
        </div>
      </section>

      <section className="experience-section section-shell" aria-labelledby="experience-title">
        <div className="section-kicker">03 / Selected experience</div>
        <div className="experience-layout">
          <div>
            <h2 id="experience-title">In the room.<br />In the replies.<br />On the pulse.</h2>
            <p className="experience-copy">I work where Web3 communities actually live — building momentum, listening closely and making sure no important conversation gets missed.</p>
          </div>
          <div className="role-list">
            <article><div><span>Ambassador</span><h3>Antarctic Wallet</h3></div><p>Brand advocacy · Community</p></article>
            <article><div><span>Ambassador</span><h3>Quantio</h3></div><p>Content · Engagement</p></article>
            <article><div><span>Ambassador</span><h3>Ozak AI</h3></div><p>Awareness · Advocacy</p></article>
            <article><div><span>Project Manager</span><h3>CyFurCoin</h3></div><p>Coordination · Growth</p></article>
          </div>
        </div>
      </section>

      <section className="principles-section" aria-labelledby="principles-title">
        <div className="section-shell principles-inner">
          <div className="section-kicker light">04 / Operating principles</div>
          <h2 id="principles-title">Visible. Reliable.<br />Human.</h2>
          <div className="principles-grid">
            <article><span>01</span><h3>Be present</h3><p>Community work happens in real time. Show up, listen and respond with context.</p></article>
            <article><span>02</span><h3>Protect the room</h3><p>Trust grows when good members feel safe and bad actors are handled quickly.</p></article>
            <article><span>03</span><h3>Make it matter</h3><p>Every campaign should give people a reason to contribute, not just another task.</p></article>
          </div>
        </div>
      </section>

      <section className="contact-section section-shell" aria-labelledby="contact-title">
        <p className="eyebrow"><span aria-hidden="true" /> Open to community roles & collaborations</p>
        <h2 id="contact-title">Let&apos;s build a community people choose to stay in.</h2>
        <div className="contact-actions">
          <a className="primary-button large focus-ring" href="https://t.me/preciousprime07Tg" target="_blank" rel="noreferrer">Message me on Telegram <span aria-hidden="true">↗</span></a>
          <a className="outline-button focus-ring" href="https://x.com/preciousprime07" target="_blank" rel="noreferrer">Connect on X <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <footer className="site-footer">
        <a className="wordmark focus-ring" href="#top">PRIME<span>.</span></a>
        <p>Community manager · Moderator · Web3 operator</p>
        <p>Built for the next conversation.</p>
      </footer>
    </main>
  );
}

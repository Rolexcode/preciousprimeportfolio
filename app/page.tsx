import Image from "next/image";

const roles = [
  { project: "ANTARCTIC WALLET", role: "Ambassador", scope: "Community / Advocacy" },
  { project: "QUANTIO", role: "Ambassador", scope: "Content / Engagement" },
  { project: "OZAK AI", role: "Ambassador", scope: "Awareness / Advocacy" },
  { project: "CYFURCOIN", role: "Project Manager", scope: "Coordination / Growth" },
];

const services = [
  ["01", "BUILD THE ROOM", "Community setup, culture, rituals and programming that give people a reason to return."],
  ["02", "KEEP IT CLEAN", "Active moderation, scam defense, clear rules and calm conflict resolution."],
  ["03", "MOVE THE CROWD", "Campaigns and conversation loops that turn passive reach into participation."],
  ["04", "TELL THE STORY", "Web3-native content and project advocacy across X and Telegram."],
];

export default function Home() {
  return (
    <main className="portfolio-v2" id="top">
      <header className="masthead">
        <a className="mast-logo focus-ring" href="#top" aria-label="Prime home">P/07</a>
        <p>COMMUNITY SYSTEMS FOR<br />INTERNET-NATIVE TEAMS</p>
        <p className="mast-status"><span aria-hidden="true" /> AVAILABLE FOR SELECT PROJECTS</p>
        <a className="mast-contact focus-ring" href="https://t.me/preciousprime07Tg" target="_blank" rel="noreferrer">START A CHAT ↗</a>
      </header>

      <section className="raw-hero" aria-labelledby="hero-title">
        <div className="hero-index" aria-hidden="true">PRIME® — 2026</div>
        <div className="hero-type">
          <p className="raw-kicker">COMMUNITY MANAGER · MODERATOR · WEB3 OPERATOR</p>
          <h1 id="hero-title"><span>PRIME</span><br />BUILDS<br /><em>THE ROOM.</em></h1>
          <div className="hero-note"><span>↘</span><p>I turn scattered audiences into communities that talk, contribute and stay.</p></div>
        </div>

        <div className="hero-portrait">
          <div className="portrait-label">IDENTITY / 001</div>
          <Image src="/prime-profile.jpg" alt="Prime's monochrome illustrated profile portrait" width={640} height={640} priority />
          <div className="portrait-stamp">MOD<br />CM<br />PM</div>
          <div className="portrait-coords">ONLINE / WEB3<br />SIGNAL: STRONG</div>
        </div>

        <div className="hero-ledger">
          <div><strong>2K+</strong><span>NETWORK</span></div>
          <div><strong>9K</strong><span>POSTS</span></div>
          <div><strong>3+</strong><span>AMBASSADORSHIPS</span></div>
          <a className="hero-channel focus-ring" href="https://t.me/primeschambX" target="_blank" rel="noreferrer">ENTER PRIME&apos;S CHAMBER ↗</a>
        </div>
      </section>

      <section className="manifesto" aria-labelledby="manifesto-title">
        <div className="manifesto-side">THE JOB / 001</div>
        <div><p className="raw-kicker">A COMMUNITY IS NOT A FOLLOWER COUNT.</p><h2 id="manifesto-title">I DON&apos;T JUST<br />WATCH THE CHAT.<br /><span>I MOVE IT.</span></h2><p className="manifesto-copy">Good community work is part strategist, part host, part fire-fighter. It means knowing when to spark a conversation, when to listen, and when to protect the room.</p></div>
      </section>

      <section className="service-deck" id="services" aria-labelledby="service-title">
        <div className="deck-header"><p>CAPABILITIES / 002</p><h2 id="service-title">WHAT I<br />HANDLE.</h2><p>STRATEGY IS CHEAP.<br />SHOWING UP IS THE WORK.</p></div>
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

      <section className="receipts" aria-labelledby="receipts-title">
        <div className="receipt-copy"><p>ON-CHAIN RECEIPTS / 004</p><h2 id="receipts-title">WORK.<br />DELIVER.<br /><span>GET PAID.</span></h2><p>Selected on-chain payment records from Prime&apos;s work archive. The work leaves a trail.</p></div>
        <div className="receipt-stack">
          <figure className="receipt-card receipt-a"><Image src="/receipt-usdc.jpg" alt="Selected USDC payment record" width={1280} height={700} /><figcaption>REC / USDC / 01</figcaption></figure>
          <figure className="receipt-card receipt-b"><Image src="/receipt-sol.jpg" alt="Selected SOL payment record" width={1280} height={376} /><figcaption>REC / SOL / 02</figcaption></figure>
          <figure className="receipt-card receipt-c"><Image src="/receipt-usdt.jpg" alt="Selected USDT payment records" width={1280} height={764} /><figcaption>REC / USDT / 03</figcaption></figure>
        </div>
      </section>

      <section className="final-call" aria-labelledby="contact-title">
        <p>YOUR COMMUNITY SHOULD FEEL ALIVE.</p><h2 id="contact-title">LET&apos;S MAKE<br />SOME <span>NOISE.</span></h2>
        <div className="final-actions"><a className="block-button focus-ring" href="https://t.me/preciousprime07Tg" target="_blank" rel="noreferrer">MESSAGE PRIME ON TELEGRAM <span>↗</span></a><a className="block-button inverse focus-ring" href="https://x.com/preciousprime07" target="_blank" rel="noreferrer">FOLLOW @PRECIOUSPRIME07 <span>↗</span></a></div>
      </section>

      <footer className="raw-footer"><strong>PRIME®</strong><p>COMMUNITY MANAGER / MODERATOR / OPERATOR</p><a className="focus-ring" href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}

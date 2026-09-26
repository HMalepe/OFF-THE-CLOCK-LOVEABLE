import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Off The Clock — A Leadership & Wellbeing Podcast" },
      {
        name: "description",
        content:
          "Off The Clock is a leadership and wellbeing podcast co-founded by Peter Mehlape, author of Winning in Africa: Your Next 8 Moves. Honest conversations about work, rest and winning on this continent.",
      },
      { property: "og:title", content: "Off The Clock — A Leadership & Wellbeing Podcast" },
      {
        property: "og:description",
        content:
          "Honest conversations about leadership, wellbeing and winning in Africa — with co-founder and author Peter Mehlape.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=Manrope:wght@300;400;500;600&display=swap",
      },
      { rel: "stylesheet", href: "/otc/css/styles.css" },
    ],
  }),
  component: Index,
});

const SCRIPTS = [
  "/otc/js/vendor/gsap.min.js",
  "/otc/js/vendor/ScrollTrigger.min.js",
  "/otc/js/vendor/lenis.min.js",
  "/otc/js/main.js",
];

function Index() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      root.classList.add("static");
    }
    let cancelled = false;
    const added: HTMLScriptElement[] = [];
    const load = (src: string) =>
      new Promise<void>((resolve) => {
        const el = document.createElement("script");
        el.src = src;
        el.onload = () => resolve();
        el.onerror = () => resolve();
        document.body.appendChild(el);
        added.push(el);
      });
    (async () => {
      for (const src of SCRIPTS) {
        if (cancelled) return;
        await load(src);
      }
    })();
    return () => {
      cancelled = true;
      added.forEach((el) => el.remove());
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: MARKUP }} />;
}

const MARKUP = String.raw`
<div class="loader" aria-hidden="true">
  <div class="loader__inner">
    <span class="loader__mark">OTC</span>
    <span class="loader__rule"></span>
    <span class="loader__word">Leadership, off the clock.</span>
  </div>
</div>

<header class="hdr" data-hdr>
  <a class="hdr__side" href="#newsletter" aria-label="Subscribe to the newsletter">
    <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5.5" width="18" height="13" rx="1.5"/><path d="M3.5 6.5 12 13l8.5-6.5"/></svg>
    <span>Subscribe</span>
  </a>
  <a class="hdr__brand" href="#top" aria-label="Off The Clock — home">
    <span class="crest">OTC</span>
    <span class="hdr__name">Off The<br>Clock</span>
  </a>
  <button class="hdr__burger" type="button" aria-expanded="false" aria-controls="drawer" data-menu-open>
    <span class="sr">Open menu</span>
    <i></i><i></i><i></i>
  </button>
</header>

<div class="drawer-scrim" data-menu-close></div>
<aside class="drawer" id="drawer" aria-label="Main menu" inert>
  <button class="drawer__close" type="button" data-menu-close><span class="sr">Close menu</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5l14 14M19 5 5 19"/></svg></button>
  <p class="drawer__title">Main menu</p>
  <nav class="drawer__nav">
    <details><summary>Listen</summary>
      <a href="#journal">Episodes</a><a href="#topics">Themes</a><a href="#story">Our story</a>
    </details>
    <details><summary>The book</summary>
      <a href="#mission">Winning in Africa</a><a href="#try">Take the quiz</a>
    </details>
    <details><summary>Work with us</summary>
      <a href="#faq">Sponsorship</a><a href="#faq">Speaking &amp; workshops</a>
    </details>
    <details><summary>Contact</summary>
      <a href="mailto:hello@offtheclock.co.za">hello@offtheclock.co.za</a>
    </details>
  </nav>
  <p class="drawer__title">Follow along</p>
  <div class="drawer__social">
    <a href="#" rel="noopener">LinkedIn</a>
    <a href="#" rel="noopener">YouTube</a>
  </div>
</aside>

<main id="main">

<section class="hero" id="top">
  <div class="hero__media">
    <div class="hero__zoom" data-hero-zoom>
      <div class="ph ph--hero" data-hero-img style="--g1:#3c6d86;--g2:#0e2033;--g3:#9fc6d6">
        <picture>
          <source media="(max-width: 760px)" srcset="/otc/assets/hero-placeholder-mobile-poster.jpg">
          <img src="/otc/assets/hero-placeholder-poster.jpg" alt="" fetchpriority="high" decoding="async">
        </picture>
      </div>
      <video class="hero__video" data-hero-video muted loop playsinline disablepictureinpicture preload="none" aria-hidden="true" tabindex="-1"
        poster="/otc/assets/hero-placeholder-poster.jpg"
        data-poster-mobile="/otc/assets/hero-placeholder-mobile-poster.jpg"
        data-src-webm="/otc/assets/hero-placeholder.webm"
        data-src-mp4="/otc/assets/hero-placeholder.mp4"
        data-src-webm-mobile="/otc/assets/hero-placeholder-mobile.webm"
        data-src-mp4-mobile="/otc/assets/hero-placeholder-mobile.mp4"></video>
    </div>
  </div>
  <div class="hero__shade"></div>
  <div class="hero__content" data-hero-content>
    <p class="eyebrow" data-hero-fade>A Leadership &amp; Wellbeing Podcast</p>
    <h1 class="hero__title" data-split="hero">
      <span class="line">Leadership,</span>
      <span class="line">off the clock</span>
    </h1>
    <p class="hero__sub" data-hero-fade>Honest conversations about how leaders actually work, rest and win — recorded once the meetings are over and the titles come off.</p>
  </div>
  <button class="hero__toggle" type="button" data-video-toggle aria-pressed="false" hidden>
    <svg class="i-pause" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6v12M15 6v12"/></svg>
    <svg class="i-play" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10.5-6.5z"/></svg>
    <span class="sr" data-video-label>Pause background video</span>
  </button>
  <a class="hero__cue" href="#hello" aria-label="Scroll to introduction" data-hero-fade>
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
  </a>
</section>

<section class="hello section--ink" id="hello">
  <div class="wrap hello__grid">
    <h2 class="h-display" data-split data-speed="0.8">Hello</h2>
    <div class="hello__copy">
      <p data-fade>Off The Clock is a leadership and wellbeing podcast co-founded by Peter Mehlape — executive, author of <em>Winning in Africa: Your Next 8 Moves</em>, and someone who spent years learning the hard way that performance without recovery has a shelf life.</p>
      <p data-fade>Every episode is a long-form conversation with people who lead teams, build businesses and carry pressure on this continent. What they got wrong. What rest actually looks like in their diary. What they'd tell the version of themselves who was still proving a point.</p>
      <ul class="stats" data-stagger>
        <li><strong data-count="40" data-suffix="+">40+</strong><span>episodes recorded</span></li>
        <li><strong data-count="8" data-suffix="">8</strong><span>moves in the book</span></li>
        <li><strong>1</strong><span>honest conversation at a time</span></li>
      </ul>
      <a class="tlink" href="#story" data-fade>Our story</a>
    </div>
  </div>
</section>

<section class="story" id="story" data-pin="story">
  <div class="story__stage">
    <div class="story__media" data-story-img>
      <div class="ph story__slide" data-slide style="--img:url(/otc/assets/behind-the-mic.png);--g1:#4d7d96;--g2:#12293f;--g3:#cfe2ea"></div>
      <div class="ph story__slide" data-slide style="--g1:#8ea9b8;--g2:#16304a;--g3:#dfe9ef"></div>
      <div class="ph story__slide" data-slide style="--g1:#6fc9e0;--g2:#0e2033;--g3:#e8eef3"></div>
    </div>
    <div class="story__shade" data-story-shade></div>
    <article class="story__card" data-story-card>
      <h2 class="h-display h-display--ink" data-split>Behind the mic</h2>
      <p>Peter co-founded Off The Clock because the most useful leadership advice he ever got was never said on a stage. It was said afterwards, off the record. So the show is built on three rules.</p>
      <ol class="principles">
        <li data-principle><span>01</span><div><strong>No highlight reels</strong><em>The cost gets talked about, not just the win.</em></div></li>
        <li data-principle><span>02</span><div><strong>Made for this continent</strong><em>African markets, African realities, African leaders.</em></div></li>
        <li data-principle><span>03</span><div><strong>Wellbeing is strategy</strong><em>Rest is how good judgement stays available.</em></div></li>
      </ol>
    </article>
  </div>
</section>

<section class="marquee section--ink" aria-hidden="true">
  <div class="marquee__row" data-marquee>
    <div class="marquee__set"><span>Leadership</span><i>✦</i><span>Wellbeing</span><i>✦</i><span>Winning in Africa</span><i>✦</i><span>Burnout</span><i>✦</i><span>Behind the mic</span><i>✦</i></div>
    <div class="marquee__set"><span>Leadership</span><i>✦</i><span>Wellbeing</span><i>✦</i><span>Winning in Africa</span><i>✦</i><span>Burnout</span><i>✦</i><span>Behind the mic</span><i>✦</i></div>
  </div>
</section>

<section class="topics section--ink" id="topics" data-pin="topics">
  <div class="topics__stage">
    <div class="topics__head wrap">
      <h2 class="h-display" data-split>What we talk about</h2>
      <p class="topics__hint" data-fade>Keep scrolling <span aria-hidden="true">→</span></p>
    </div>
    <div class="topics__viewport">
      <div class="topics__track" data-track>
        <a class="tcard" href="#journal"><div class="tcard__media"><div class="zoom"><div class="ph" style="--g1:#5b8fa8;--g2:#12293f;--g3:#d6e6ee"></div></div></div><span class="tcard__label">Leading under pressure</span><span class="tcard__meta">Decisions made when there is no clean option</span></a>
        <a class="tcard" href="#journal"><div class="tcard__media"><div class="zoom"><div class="ph" style="--g1:#8fa7b3;--g2:#16304a;--g3:#e2ecf1"></div></div></div><span class="tcard__label">Burnout, honestly</span><span class="tcard__meta">What it cost, and what changed afterwards</span></a>
        <a class="tcard" href="#mission"><div class="tcard__media"><div class="zoom"><div class="ph" style="--g1:#6fc9e0;--g2:#0e2033;--g3:#e8f4f9"></div></div></div><span class="tcard__label">Winning in Africa</span><span class="tcard__meta">The eight moves, unpacked with the people making them</span></a>
        <a class="tcard" href="#journal"><div class="tcard__media"><div class="zoom"><div class="ph" style="--g1:#b39a72;--g2:#3b2f22;--g3:#efe3cf"></div></div></div><span class="tcard__label">Building teams</span><span class="tcard__meta">Hiring, trust and the conversations leaders avoid</span></a>
        <a class="tcard" href="#try"><div class="tcard__media"><div class="zoom"><div class="ph" style="--g1:#8b9fc0;--g2:#20304a;--g3:#dde4f0"></div></div></div><span class="tcard__label">Off the clock</span><span class="tcard__meta">Rest, family and the life behind the title</span></a>
      </div>
    </div>
    <div class="topics__progress" aria-hidden="true"><span data-track-bar></span></div>
  </div>
</section>

<section class="quizzes section--mist" id="quizzes">
  <div class="wrap">
    <header class="sec-head">
      <p class="eyebrow eyebrow--dark" data-fade>Listen</p>
      <h2 class="h-display h-display--ink" data-split>Recent episodes</h2>
      <p class="sec-head__lead" data-fade>Long-form conversations with leaders across the continent. Full episodes are free; the extended cuts go out to subscribers first.</p>
    </header>

    <ul class="qgrid" data-batch>
      <li class="qcard" data-tilt>
        <div class="qcard__media"><div class="zoom"><div class="ph" style="--g1:#6fc9e0;--g2:#12293f;--g3:#e2f1f7"></div></div></div>
        <div class="qcard__body"><span class="tag">Episode</span><h3>The cost of always being on</h3><p>Why the calendar wins, and how to take it back.</p><a class="btn btn--ink" href="#try">Listen · 48 min</a></div>
      </li>
      <li class="qcard" data-tilt>
        <div class="qcard__media"><div class="zoom"><div class="ph" style="--g1:#8fa7b3;--g2:#16304a;--g3:#e7eef1"></div></div></div>
        <div class="qcard__body"><span class="tag">Episode</span><h3>Eight moves for Africa</h3><p>Peter on the playbook behind the book.</p><a class="btn btn--ink" href="#mission">Listen · 52 min</a></div>
      </li>
      <li class="qcard" data-tilt>
        <div class="qcard__media"><div class="zoom"><div class="ph" style="--g1:#b39a72;--g2:#3b2f22;--g3:#f0e5d3"></div></div></div>
        <div class="qcard__body"><span class="tag tag--members">Extended</span><h3>Leading after a failure</h3><p>The conversation that didn't fit in the episode.</p><a class="btn btn--line" href="#newsletter">Unlock</a></div>
      </li>
      <li class="qcard" data-tilt>
        <div class="qcard__media"><div class="zoom"><div class="ph" style="--g1:#8b9fc0;--g2:#20304a;--g3:#e3e8f2"></div></div></div>
        <div class="qcard__body"><span class="tag tag--members">Extended</span><h3>Money, meaning and burnout</h3><p>Three founders on what they'd do differently.</p><a class="btn btn--line" href="#newsletter">Unlock</a></div>
      </li>
    </ul>

    <div class="tryquiz" id="try" data-fade>
      <div class="tryquiz__intro" data-speed="0.92">
        <p class="eyebrow eyebrow--dark">Try one now</p>
        <h3 class="tryquiz__title">Myth or fact?</h3>
        <p>Three quick ones from the show. No sign-up needed.</p>
      </div>
      <div class="tryquiz__panel" data-quiz aria-live="polite">
        <noscript><p>Enable JavaScript to play the quiz.</p></noscript>
      </div>
    </div>
  </div>
</section>

<section class="mission" id="mission">
  <div class="mission__media media-drift">
    <div class="ph" data-drift style="--img:url(/otc/assets/winning-in-africa.png);--g1:#4a7fa6;--g2:#0e2033;--g3:#bcd8e8"></div>
  </div>
  <div class="mission__shade"></div>
  <div class="mission__content wrap">
    <h2 class="h-display" data-split>Winning in Africa</h2>
    <p data-fade>Peter Mehlape's book, <em>Winning in Africa: Your Next 8 Moves for Business Success in Africa</em> — foreword by Vodacom group CEO Shameel Joosub — is the spine of many of these conversations: eight practical moves for building something that lasts on this continent.</p>
    <a class="tlink" href="#faq" data-fade>More about the book</a>
  </div>
</section>

<section class="journal section--paper" id="journal">
  <div class="wrap">
    <header class="sec-head sec-head--center">
      <h2 class="h-display h-display--ink" data-split>From the show notes</h2>
    </header>
    <ul class="jgrid" data-batch>
      <li class="jcard"><a href="#"><div class="jcard__media"><div class="zoom"><div class="ph" style="--g1:#a8c6d6;--g2:#3f6b86;--g3:#e9f3f8"></div></div></div><p><span>Leadership —</span> The meeting you should have cancelled</p></a></li>
      <li class="jcard"><a href="#"><div class="jcard__media"><div class="zoom"><div class="ph" style="--g1:#c4d4dc;--g2:#5a7a88;--g3:#eef4f7"></div></div></div><p><span>Wellbeing —</span> What rest looks like in a real diary</p></a></li>
      <li class="jcard"><a href="#"><div class="jcard__media"><div class="zoom"><div class="ph" style="--g1:#d8c7a6;--g2:#7d6a45;--g3:#f4ecdd"></div></div></div><p><span>Africa —</span> Move three: build for the market you're in</p></a></li>
      <li class="jcard"><a href="#"><div class="jcard__media"><div class="zoom"><div class="ph" style="--g1:#a9b6cf;--g2:#40506e;--g3:#e7ecf5"></div></div></div><p><span>Behind the mic —</span> Questions we ask every guest</p></a></li>
    </ul>
    <p class="center"><a class="tlink tlink--ink" href="#">All episodes</a></p>
  </div>
</section>

<section class="faq section--mist" id="faq">
  <div class="wrap faq__grid">
    <header class="sec-head" data-speed="0.85">
      <p class="eyebrow eyebrow--dark" data-fade>FAQ</p>
      <h2 class="h-display h-display--ink" data-split>Questions we get asked</h2>
    </header>
    <div class="faq__list">
      <details data-fade><summary>Where can I listen?</summary><p>New episodes go out on the major podcast platforms and on YouTube. Subscribe to the newsletter and each one lands in your inbox the morning it drops.</p></details>
      <details data-fade><summary>How do I get on the show as a guest?</summary><p>Email us a short note about what you'd want to talk about honestly — not your bio. We record in Johannesburg and remotely.</p></details>
      <details data-fade><summary>Where can I buy Winning in Africa?</summary><p>It's available through major South African booksellers and online. Bulk and corporate orders can go through the email address below.</p></details>
      <details data-fade><summary>Do you do speaking and workshops?</summary><p>Yes — leadership, wellbeing and the eight moves, for teams and conferences. Send us the date, audience and format.</p></details>
      <details data-fade><summary>Do you take sponsors?</summary><p>Selectively, and only brands we'd recommend off air. Sponsored segments are always announced in the episode.</p></details>
    </div>
  </div>
</section>

<section class="newsletter section--ink" id="newsletter">
  <div class="wrap newsletter__inner">
    <h2 class="h-display" data-split>The Off The Clock Note</h2>
    <p data-fade>One email a fortnight: the new episode, one idea worth stealing from it, and the extended cut before anyone else.</p>
    <form class="signup" data-signup data-fade action="#" method="post" novalidate>
      <label class="sr" for="email">Email address</label>
      <input id="email" name="email" type="email" placeholder="Your email address" autocomplete="email" required>
      <button class="btn btn--light" type="submit">Subscribe</button>
      <p class="signup__msg" data-signup-msg role="status"></p>
    </form>
    <p class="fine" data-fade>No spam. Unsubscribe any time.</p>
  </div>
</section>

</main>

<footer class="ftr" id="footer">
  <div class="wrap ftr__top">
    <span class="crest crest--lg">OTC</span>
    <p class="ftr__name">Off The Clock</p>
    <p class="ftr__script">A Leadership &amp; Wellbeing Podcast</p>
    <ul class="ftr__social" data-stagger>
      <li><a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="3"/><path d="M8 10.5V17M8 7.6v.1M12 17v-3.6a2 2 0 0 1 4 0V17"/></svg></a></li>
      <li><a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10.5 9.5v5l4.5-2.5z"/></svg></a></li>
      <li><a href="mailto:hello@offtheclock.co.za" aria-label="Email"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5.5" width="18" height="13" rx="1.5"/><path d="M3.5 6.5 12 13l8.5-6.5"/></svg></a></li>
    </ul>
  </div>
  <nav class="ftr__links wrap" aria-label="Footer" data-stagger>
    <a href="#story">About</a><a href="#quizzes">Episodes</a><a href="#mission">The book</a><a href="#faq">Work with us</a><a href="#newsletter">Newsletter</a><a href="#">Privacy</a>
  </nav>
  <div class="wrap ftr__base" data-fade>
    <p>Conversations on this site are general leadership and wellbeing insight, not personal medical or financial advice.</p>
    <p>© <span data-year>2026</span> · Off The Clock™ · Co-founded by Peter Mehlape</p>
  </div>
  <div class="ftr__mark" aria-hidden="true"><span data-footer-mark>Off</span></div>
</footer>

<a class="totop" href="#top" data-totop aria-label="Back to top">
  <svg class="totop__ring" viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="22" class="totop__track"/><circle cx="24" cy="24" r="22" class="totop__bar" data-totop-bar pathLength="1"/></svg>
  <svg class="totop__arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 15 6-6 6 6"/></svg>
</a>
`;

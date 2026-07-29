/* ============================================================
   EDIT THIS FILE TO UPDATE YOUR SITE — no other file needed.
   Save, refresh the browser, done.
   ============================================================ */

window.SITE = {
  /* ---------- Stats -----------------------------------------------
     These are typed in by hand on purpose. Neither TikTok nor
     LinkedIn exposes these numbers to a website — see README
     "Why the stats aren't live" for the full reason.

     Update the numbers, then change `updated` to the current month.
     The site prints that date next to them so they read as honest
     rather than stale.

     TikTok numbers below were read off your profile on 27 Jul 2026.
  ------------------------------------------------------------------ */
  stats: {
    updated: "July 2026",
    tiktok: {
      views:      "4M+",     /* combined TikTok + Instagram */
      likes:      "607.2K",
      followers:  "2,118",
      engagement: "8.21%",
    },
    linkedin: {
      followers:   "6,000",
      impressions: "656,000+",
      engagements: "7K",
    },
    instagram: {
      followers: "3,546",   /* read off @kiminguyennn, 27 Jul 2026 */
    },
  },

  /* ---------- Collections -----------------------------------------
     Each collection is its own page:
       career  -> career.html
       beauty  -> beauty.html

     Every video below is a real post pulled from
     tiktok.com/@kiminguyenn, newest data 27 Jul 2026.

     To add a video: copy a whole { ... } block, paste it, edit it.
     `url`   the tiktok.com/@kiminguyenn/video/... link
     `thumb` a file in assets/tiktok/ — save a screenshot there and
             point at it. (Don't hotlink TikTok's CDN: those URLs are
             signed and expire within a day.)
  ------------------------------------------------------------------ */
  collections: {
    career: {
      slug: "career",
      title: "Career & University",
      tagline: "Internships, resumes, and the parts of student life nobody posts about.",
      emoji: "🎓",
      hashtags: ["#Internships", "#CareerAdvice", "#StudentLife"],
      brandKey: "career",
      videos: [
        {
          title: "do a remote externship NOW so you have experience to talk about when recruiters come around this spring",
          url: "https://www.tiktok.com/@kiminguyenn/video/7612348499023105298",
          thumb: "assets/tiktok/career-137k.jpg",
          views: "137.1K",
          tag: "Extern",
        },
        {
          title: "srsly, let go of that dusty ex and replace with Amazon, TikTok or Pfizer. MUCH better ROI ;)",
          url: "https://www.tiktok.com/@kiminguyenn/video/7619076528571288839",
          thumb: "assets/tiktok/career-99k.jpg",
          views: "98.6K",
          tag: "Extern",
        },
        {
          title: "accepting the unpaid, 5 days in office, no vacation days, 2h from my house internship in a completely different field bc i have no other offers",
          url: "https://www.tiktok.com/@kiminguyenn/video/7490968419982953734",
          thumb: "assets/tiktok/career-713k.jpg",
          views: "713.8K",
          tag: "Humor",
        },
        {
          title: "thank god for externships, or else we'd all be so cooked 😭",
          url: "https://www.tiktok.com/@kiminguyenn/video/7639461482895363346",
          thumb: "assets/tiktok/career-403k.jpg",
          views: "403.4K",
          tag: "Extern",
        },
        {
          title: "can we all just slow down a bit…",
          url: "https://www.tiktok.com/@kiminguyenn/video/7554210736537390344",
          thumb: "assets/tiktok/career-380k.jpg",
          views: "379.8K",
          tag: "Humor",
        },
        {
          title: "but like it's meant to be spun isn't it ???",
          url: "https://www.tiktok.com/@kiminguyenn/video/7551935379063000327",
          thumb: "assets/tiktok/career-253k.jpg",
          views: "252.9K",
          tag: "Internship",
        },
        {
          title: "probably going to delete this LMFAO",
          url: "https://www.tiktok.com/@kiminguyenn/video/7563544593841818888",
          thumb: "assets/tiktok/career-203k.jpg",
          views: "203.1K",
          tag: "Humor",
        },
        {
          title: "no more questions go play with your siblings EY and Pwc",
          url: "https://www.tiktok.com/@kiminguyenn/video/7618594151705332999",
          thumb: "assets/tiktok/career-195k.jpg",
          views: "195.3K",
          tag: "Humor",
        },
      ],
    },

    /* ---------- Events ----------------------------------------------
       Hackathons, networking nights, and the videos where I hand people
       a mic and ask them things.

       A mix of TikToks and Instagram reels. Cards render from
       `platform`: an "instagram" card gets a "View on Instagram" link,
       everything else says TikTok.

       To add an Instagram post: copy a block below, set
       platform: "instagram", and paste the post link into `url`
       (open the post -> ... -> Copy link). Save a screenshot into
       assets/tiktok/ and point `thumb` at it.

       Most cards have a real cover frame pulled from the video itself.
       A card with no `thumb` still works — it falls back to a gradient
       tile with the caption on it.
    ------------------------------------------------------------------ */
    events: {
      slug: "events",
      title: "Events & Interviews",
      tagline: "Hackathons, networking nights, and asking strangers slightly unserious questions.",
      emoji: "🎤",
      hashtags: ["#Hackathons", "#Networking", "#CampusEvents"],
      videos: [
        {
          title: "try these at ur next hackathon?",
          url: "https://www.instagram.com/reel/DbJj40mI2xE/",
          thumb: "assets/tiktok/events-hackathon.jpg",
          views: "1.1M",
          platform: "instagram",
          tag: "Cursor",
        },
        {
          title: "someone send help — networking event edition",
          url: "https://www.tiktok.com/@kiminguyenn/video/7643473286558403858",
          thumb: "assets/tiktok/events-networking.jpg",
          views: "10.1K",
          platform: "tiktok",
          tag: "Akatos",
        },
        {
          title: "Playa Bowls",
          url: "https://www.instagram.com/reel/DZ5pwcLopfb/",
          thumb: "assets/tiktok/events-playa-bowls.jpg",
          platform: "instagram",
          tag: "Playa Bowls",
        },
        {
          title: "WHATTT DID HE SAYYY!?",
          url: "https://www.tiktok.com/@kiminguyenn/video/7665524967898893575",
          thumb: "assets/tiktok/events-interview.jpg",
          /* two-line caption starts high — the centre cut dropped
             "TECH HOT TAKES" and sliced the line under it */
          focus: "50% 30%",
          views: "1,443",
          platform: "tiktok",
          tag: "Hack the 6ix",
        },
        {
          title: "Asking about hot takes at Toronto Tech Week",
          url: "https://www.instagram.com/reel/DY4iUgZRPA5/",
          thumb: "assets/tiktok/events-creatin.jpg",
          /* same two-line caption problem as the Hack the 6ix card */
          focus: "50% 22%",
          platform: "instagram",
          tag: "Toronto Tech Week",
        },
        {
          title: "thank you hackers for ur honesty 🤣 (i ACTUALLY asked what their favourite vegetable was)",
          url: "https://www.tiktok.com/@kiminguyenn/video/7664673735412157714",
          thumb: "assets/tiktok/events-vegetables.jpg",
          views: "1,175",
          platform: "tiktok",
          tag: "Hack the 6ix",
        },
      ],
    },

    beauty: {
      slug: "beauty",
      title: "K-Beauty & Skincare",
      tagline: "Honest routines, real repurchases, and the PR that earns a spot on my shelf.",
      emoji: "🧴",
      hashtags: ["#KBeauty", "#KoreanSkincare", "#HonestReviews"],
      brandKey: "beauty",
      videos: [
        {
          title: "Baerry is a K-beauty shop where the BEST korean sunscreens r accessible for everyone 😙💕",
          url: "https://www.instagram.com/reel/DabJoelIqlh/",
          thumb: "assets/tiktok/beauty-baerry.jpg",
          /* the centre crop sliced through "from Baerry!" — hold the
             frame higher so the caption in the video clears the edge */
          focus: "50% 22%",
          platform: "instagram",
          brand: "Baerry",
        },
        {
          title: "i genuinely receive sm compliments on my skin from this !!! 😭",
          url: "https://www.instagram.com/reel/DYz6Po1oVYq/",
          thumb: "assets/tiktok/beauty-goodal.jpg",
          platform: "instagram",
          brand: "Goodal",
        },
        {
          title: "u can get this 10% off with my yesstyle code: KMBRLY1 🍀",
          url: "https://www.instagram.com/reel/DbEhDPjod1e/",
          thumb: "assets/tiktok/beauty-axis-y.jpg",
          /* caption sits low in this one — hold the frame lower so
             "eye serum" clears the bottom edge */
          focus: "50% 58%",
          platform: "instagram",
          brand: "AXIS-Y",
        },
        {
          title: "cop this RIGHT NEOW on yesstyle!! code KMBRLY1 💪😌",
          url: "https://www.tiktok.com/@kiminguyenn/video/7630543271160188178",
          thumb: "assets/tiktok/beauty-aplb.jpg",
          views: "1,383",
          brand: "APLB × YesStyle",
        },
        {
          title: "no trending audio! ty to COSRX & YesStyle for gifting me these 💕",
          url: "https://www.tiktok.com/@kiminguyenn/video/7605343140114992391",
          thumb: "assets/tiktok/beauty-cosrx.jpg",
          views: "1,253",
          brand: "COSRX × YesStyle",
        },
        {
          title: "i love when skincare is made for sensitive and dry skin girlies 😚💖",
          url: "https://www.tiktok.com/@kiminguyenn/video/7594576571638369543",
          thumb: "assets/tiktok/beauty-anua-pdrn.jpg",
          views: "1,199",
          brand: "Anua",
        },
        {
          title: "available at COSTCO (US) !!! 😤 go grab it neowww",
          url: "https://www.tiktok.com/@kiminguyenn/video/7580846212937551112",
          thumb: "assets/tiktok/beauty-haircare.jpg",
          views: "1,133",
          brand: "KUNDAL",
        },
        {
          title: "YES i actually use the PR i'm gifted! these are my FEW faves tho 🌚",
          url: "https://www.tiktok.com/@kiminguyenn/video/7634321592029416722",
          thumb: "assets/tiktok/beauty-pr-i-use.jpg",
          views: "1,492",
          brand: "Various brands",
        },
        {
          title: "can never have too much pink 🎀",
          url: "https://www.tiktok.com/@kiminguyenn/video/7619461941341293831",
          thumb: "assets/tiktok/beauty-euthymol.jpg",
          views: "1,011",
          brand: "Euthymol",
        },
      ],
      /* product cutouts featured above the grid on this page only.

         `url` points at the product's page on the brand's own site, so
         a tile becomes a link. Leave `url` off and the tile still
         renders — it just isn't clickable.

         Note on the KUNDAL tube: the brand doesn't sell that treatment
         on its own in the US store, only bundled, so its link goes to
         the Violet Muguet set that contains it. */
      products: [
        {
          name: "Anua Niacinamide 10% + TXA Serum",
          img: "assets/photos/anua-serum.png",
          url: "https://anua.com/products/niacinamide-10-txa-4-serum-2",
        },
        {
          name: "COSRX Peptide Collagen Lifting Glow Pads",
          img: "assets/photos/cosrx-pad.png",
          url: "https://www.cosrx.com/products/one-step-original-peptide-collagen-lifting-glow-pad",
        },
        {
          name: "COSRX The 6 Peptide Skin Booster",
          img: "assets/photos/cosrx-booster.png",
          url: "https://www.cosrx.com/products/the-6-peptide-skin-booster-serum",
        },
        {
          name: "KUNDAL Protein Bonding Treatment",
          img: "assets/photos/kundal-tube.png",
          url: "https://kundal.us/products/kundal-protein-bonding-2-set-shampoo-500ml-treatment-250ml-violet-muguet",
        },
      ],
    },
  },

  /* ---------- Brands ---------------------------------------------
     Logos live in assets/brands/. To add one, drop the logo file in
     that folder and add a line here.
  ---------------------------------------------------------------- */
  brandGroups: [
    {
      key: "career",
      label: "Career & Productivity",
      emoji: "📚",
      brands: [
        { name: "Wealthsimple Foundation", logo: "assets/brands/wealthsimple.jpg", url: "https://wealthsimplefoundation.com/" },
        { name: "Extern",         logo: "assets/brands/extern.png",         url: "https://extern.com/" },
        { name: "Riipen",         logo: "assets/brands/riipen.png",         url: "https://riipen.com/" },
        { name: "Tomo AI",        logo: "assets/brands/tomo.png",           url: "https://tomo.ai/" },
        { name: "Auralyze",       logo: "assets/brands/auralyze.png",       url: "https://auralyze.ai/" },
        { name: "SafeWrite",      logo: "assets/brands/safewrite.png",      url: "https://safewrite.ai/" },
        { name: "Blossom Social", logo: "assets/brands/blossom-social.png", url: "https://blossomsocial.com/" },
        /* `homeOnly` shows a brand on the home wall and counts it as a
           partner, but keeps it off this group's own page — Akatos is a
           partner whose video sits under Events, not Career. */
        { name: "Akatos",         logo: "assets/brands/akatos.png",         url: "https://www.akatos.house/", homeOnly: true },
        /* Logo files for these three aren't in assets/brands/ yet. Until
           they are, each tile falls back to the company name as text —
           save the images at exactly these paths and they take over. */
        { name: "Intern Insider", logo: "assets/brands/intern-insider.png", url: "https://interninsider.me/" },
        { name: "Predis AI",      logo: "assets/brands/predis-ai.png",      url: "https://predis.ai/" },
        { name: "Jobright",       logo: "assets/brands/jobright.png",       url: "https://jobright.ai/" },
      ],
    },
    {
      key: "beauty",
      label: "Skincare & Beauty",
      emoji: "🧴",
      brands: [
        { name: "YesStyle",     logo: "assets/brands/yesstyle.png",     url: "https://yesstyle.com/" },
        { name: "Anua",         logo: "assets/brands/anua.png",         url: "https://anua.com/" },
        { name: "COSRX",        logo: "assets/brands/cosrx.png",        url: "https://cosrx.com/" },
        { name: "KUNDAL",       logo: "assets/brands/kundal.png",       url: "https://kundal.us/" },
        { name: "K-SECRET",     logo: "assets/brands/k-secret.png",     url: "https://ksecretcosmetics.com/" },
        { name: "NACIFIC",      logo: "assets/brands/nacific.png",      url: "https://en.nacific.com/" },
        { name: "EUTHYMOL",     logo: "assets/brands/euthymol.png",     url: "https://lgbeauty.com/brands/euthymol" },
        { name: "shaishaishai", logo: "assets/brands/shaishaishai.png", url: "https://shaishaishai.shop/" },
        { name: "Aveeno",       logo: "assets/brands/aveeno.png",       url: "https://aveeno.com/" },
        { name: "BLITHE",       logo: "assets/brands/blithe.png",       url: "https://www.blithecosmetic.com/" },
        { name: "THE TOOL LAB", logo: "assets/brands/the-tool-lab.png", url: "https://m.en.thetoollab.co.kr/shopinfo/company.html" },
        { name: "iunik",        logo: "assets/brands/iunik.png",        url: "https://www.iunik.com/" },
        { name: "APLB",         logo: "assets/brands/aplb.png",         url: "https://aplb.co.kr/" },
        { name: "AXIS-Y",       logo: "assets/brands/axis-y.png",       url: "https://www.axis-y.com/" },
        { name: "Minus",        logo: "assets/brands/minus.png",        url: "https://byminus.com/" },
        { name: "Rovectin",     logo: "assets/brands/rovectin.png",     url: "https://rovectin.com/" },
        { name: "Abib",         logo: "assets/brands/abib.png",         url: "https://en.abib.com/" },
        { name: "baerry",       logo: "assets/brands/baerry.png",       url: "https://thebaerry.com/" },
      ],
    },
  ],

  /* ---------- Events I've been to --------------------------------
     Deliberately NOT a brandGroup. brandGroups all render together on
     the home page and feed the "brands partnered with" count on the
     bento tile — folding events attended in there would inflate that
     number and blur the line between a partnership and a ticket.
     This list renders only where `#event-orgs` appears (events.html).

     Same tile styling as the brand wall, same missing-logo behaviour:
     until a file exists at `logo`, the tile shows `name` as text.
  ------------------------------------------------------------------ */
  eventOrgs: [
    { name: "DeerHacks",         logo: "assets/brands/deerhacks.png",     url: "https://deerhacks.ca/" },
    { name: "Hack the 6ix",      logo: "assets/brands/hack-the-6ix.svg",  url: "https://hackthe6ix.com/" },
    { name: "Toronto Tech Week", logo: "assets/brands/toronto-tech-week.svg", url: "https://www.torontotechweek.com/" },
    { name: "Cursor",            logo: "assets/brands/cursor.svg",        url: "https://cursor.com/" },
    { name: "Creatin",           logo: "assets/brands/creatin.png",       url: "https://www.creatin.ca/" },
    { name: "Akatos",            logo: "assets/brands/akatos.png",        url: "https://www.akatos.house/" },
    { name: "Sip & Scale",       logo: "assets/brands/sip-and-scale.svg", url: "https://sipnscale.com/" },
    { name: "Playa Bowls",       logo: "assets/brands/playa-bowls.svg",   url: "https://www.playabowls.com/" },
  ],

  /* The tools list on /built is NOT here — it's written straight into
     built.html. That page is short enough to read top to bottom, so the
     copy lives with the page instead of being assembled from data. */

  /* ---------- Testimonials ---------------------------------------
     `company` must appear verbatim inside `role` — the renderer finds
     that substring and turns it into the link. If it doesn't match, the
     link is appended after the role instead, so a typo degrades rather
     than losing the link. Drop companyUrl to un-link one.

     `linkedin` turns the person's name into a link to their profile.
     Drop it and the name renders as plain text.                        */
  testimonials: [
    {
      quote: "Kimi is a pleasure to work with, and has an exceptional eye for content. shes a great communicator and always delivers content on schedule and proactively follows up.",
      name: "Jonathan Chao",
      role: "Prev. Growth @ Extern",
      company: "Extern",
      companyUrl: "https://extern.com/",
      linkedin: "https://www.linkedin.com/in/jonathanchaovc/",
      photo: "assets/photos/jonathan-chao.jpg",
    },
    {
      quote: "Kimi is phenomenal – she's incredibly kind and a great storyteller. I'd recommend her to anyone looking to help bring their life's work to market.",
      name: "Justin Quan",
      role: "Founder @ Tomo AI",
      company: "Tomo AI",
      companyUrl: "https://tomo.ai/",
      linkedin: "https://www.linkedin.com/in/justquan/",
      photo: "assets/photos/justin-quan.jpg",
    },
  ],
};

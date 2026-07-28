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
          title: "accepting the unpaid, 5 days in office, no vacation days, 2h from my house internship in a completely different field bc i have no other offers",
          url: "https://www.tiktok.com/@kiminguyenn/video/7490968419982953734",
          thumb: "assets/tiktok/career-713k.jpg",
          views: "713.8K",
          pinned: true,
        },
        {
          title: "thank god for externships, or else we'd all be so cooked 😭",
          url: "https://www.tiktok.com/@kiminguyenn/video/7639461482895363346",
          thumb: "assets/tiktok/career-403k.jpg",
          views: "403.4K",
          pinned: false,
        },
        {
          title: "can we all just slow down a bit…",
          url: "https://www.tiktok.com/@kiminguyenn/video/7554210736537390344",
          thumb: "assets/tiktok/career-380k.jpg",
          views: "379.8K",
          pinned: true,
        },
        {
          title: "but like it's meant to be spun isn't it ???",
          url: "https://www.tiktok.com/@kiminguyenn/video/7551935379063000327",
          thumb: "assets/tiktok/career-253k.jpg",
          views: "252.9K",
          pinned: true,
        },
        {
          title: "probably going to delete this LMFAO",
          url: "https://www.tiktok.com/@kiminguyenn/video/7563544593841818888",
          thumb: "assets/tiktok/career-203k.jpg",
          views: "203.1K",
          pinned: false,
        },
        {
          title: "no more questions go play with your siblings EY and Pwc",
          url: "https://www.tiktok.com/@kiminguyenn/video/7618594151705332999",
          thumb: "assets/tiktok/career-195k.jpg",
          views: "195.3K",
          pinned: false,
        },
        {
          title: "do a remote externship NOW so you have experience to talk about when recruiters come around this spring",
          url: "https://www.tiktok.com/@kiminguyenn/video/7612348499023105298",
          thumb: "assets/tiktok/career-137k.jpg",
          views: "137.1K",
          pinned: false,
        },
        {
          title: "srsly, let go of that dusty ex and replace with Amazon, TikTok or Pfizer. MUCH better ROI ;)",
          url: "https://www.tiktok.com/@kiminguyenn/video/7619076528571288839",
          thumb: "assets/tiktok/career-99k.jpg",
          views: "98.6K",
          pinned: false,
        },
      ],
    },

    /* ---------- Events ----------------------------------------------
       Hackathons, networking nights, and the videos where I hand people
       a mic and ask them things.

       Mostly TikToks, plus the Cursor reel at the top which lives on
       Instagram. Cards render from `platform`: an "instagram" card gets
       a "View on Instagram" link, everything else says TikTok.

       To add an Instagram post: copy a block below, set
       platform: "instagram", and paste the post link into `url`
       (open the post -> ... -> Copy link). Save a screenshot into
       assets/tiktok/ and point `thumb` at it.

       Every card here now has a real cover frame pulled from the video
       itself. A card with no `thumb` still works — it falls back to a
       gradient tile with the caption on it.
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
          title: "honestly quite fun, would do again",
          url: "https://www.tiktok.com/@kiminguyenn/video/7576162826255928594",
          thumb: "assets/tiktok/events-uoft-hackathon.jpg",
          views: "4,524",
          platform: "tiktok",
          tag: "UofT hackathon",
        },
        {
          title: "WHATTT DID HE SAYYY!?",
          url: "https://www.tiktok.com/@kiminguyenn/video/7665524967898893575",
          thumb: "assets/tiktok/events-interview.jpg",
          views: "1,443",
          platform: "tiktok",
          tag: "Hack the 6ix",
        },
        {
          title: "yes, i just romanticized a hackathon. that's the power of marketing 🙌",
          url: "https://www.tiktok.com/@kiminguyenn/video/7614275453037202695",
          thumb: "assets/tiktok/events-romanticized.jpg",
          views: "1,298",
          platform: "tiktok",
          tag: "DeerHacks",
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
          title: "bye u can see my dry hands in these clips 😪 at least u know im a real customer tho",
          url: "https://www.tiktok.com/@kiminguyenn/video/7580489703443418376",
          thumb: "assets/tiktok/beauty-aveeno-dry.jpg",
          views: "1,575",
          brand: "Aveeno",
        },
        {
          title: "YES i actually use the PR i'm gifted! these are my FEW faves tho 🌚",
          url: "https://www.tiktok.com/@kiminguyenn/video/7634321592029416722",
          thumb: "assets/tiktok/beauty-pr-i-use.jpg",
          views: "1,492",
          brand: "COSRX",
        },
        {
          title: "this is NOT an ad i just love aveeno 😭",
          url: "https://www.tiktok.com/@kiminguyenn/video/7556766774008548616",
          thumb: "assets/tiktok/beauty-aveeno-eczema.jpg",
          views: "1,431",
          brand: "Aveeno",
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
          brand: "Perfume Your Hair",
        },
        {
          title: "love this new addition 🥰",
          url: "https://www.tiktok.com/@kiminguyenn/video/7616035341790645512",
          thumb: "assets/tiktok/beauty-shaishaishai.jpg",
          views: "1,037",
          brand: "shaishaishai",
        },
        {
          title: "can never have too much pink 🎀",
          url: "https://www.tiktok.com/@kiminguyenn/video/7619461941341293831",
          thumb: "assets/tiktok/beauty-euthymol.jpg",
          views: "1,011",
          brand: "Euthymol",
        },
      ],
      /* product cutouts featured above the grid on this page only */
      products: [
        { name: "Anua Niacinamide 10% + TXA Serum", img: "assets/photos/anua-serum.png" },
        { name: "COSRX Peptide Collagen Lifting Glow Pads", img: "assets/photos/cosrx-pad.png" },
        { name: "COSRX The 6 Peptide Skin Booster", img: "assets/photos/cosrx-booster.png" },
        { name: "KUNDAL Protein Bonding Treatment", img: "assets/photos/kundal-tube.png" },
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
      label: "Career & Education",
      emoji: "📚",
      brands: [
        { name: "Wealthsimple Foundation", logo: "assets/brands/wealthsimple.jpg", url: "https://wealthsimplefoundation.com/" },
        { name: "Extern",         logo: "assets/brands/extern.png",         url: "https://extern.com/" },
        { name: "Riipen",         logo: "assets/brands/riipen.png",         url: "https://riipen.com/" },
        { name: "Tomo AI",        logo: "assets/brands/tomo.png",           url: "https://tomo.ai/" },
        { name: "Auralyze",       logo: "assets/brands/auralyze.png",       url: "https://auralyze.ai/" },
        { name: "SafeWrite",      logo: "assets/brands/safewrite.png",      url: "https://safewrite.ai/" },
        { name: "Blossom Social", logo: "assets/brands/blossom-social.png", url: "https://blossomsocial.com/" },
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
      ],
    },
  ],

  /* ---------- Testimonials ---------------------------------------
     `company` must appear verbatim inside `role` — the renderer finds
     that substring and turns it into the link. If it doesn't match, the
     link is appended after the role instead, so a typo degrades rather
     than losing the link. Drop companyUrl to un-link one.               */
  testimonials: [
    {
      quote: "Kimi is a pleasure to work with, and has an exceptional eye for content. shes a great communicator and always delivers content on schedule and proactively follows up.",
      name: "Jonathan Chao",
      role: "Prev. Growth @ Extern",
      company: "Extern",
      companyUrl: "https://extern.com/",
      photo: "assets/photos/jonathan-chao.jpg",
    },
    {
      quote: "Kimi is phenomenal – she's incredibly kind and a great storyteller. I'd recommend her to anyone looking to help bring their life's work to market.",
      name: "Justin Quan",
      role: "Founder @ Tomo AI",
      company: "Tomo AI",
      companyUrl: "https://tomo.ai/",
      photo: "assets/photos/justin-quan.jpg",
    },
  ],
};

# Kimi Nguyen — portfolio

A replacement for the Canva site. Plain HTML, CSS and JavaScript — no build step,
no framework, no webfonts, no account required. Open `index.html` and it works.

## Layout

`index.html` is two screens stacked:

1. **The lander** — full-bleed hero on `art-three-flowers.jpg`. Logo far left,
   short centred glass bar, socials and Contact far right. Headline low-left
   with its second line below it, the two buttons directly beneath, and the
   headshot in a glass bubble on the right ringed by smaller empty ones. The
   big mark straddles the seam into the section below. Type is **SF Pro at
   weight 400**, not the Charter serif the rest of the site uses.
2. **The bento** — everything that used to be the landing page, under a
   "My work" lead-in.

### The bento grid

Four columns. The three long cards zig-zag, with a small stat card filling
the gap each one leaves:

```
row 1–2   About Me (cols 1–3)          │ chair photo
row 3     4M+ views  │ Early Career (cols 2–4)
row 4     Korean Beauty (cols 1–3)     │ LinkedIn
row 5     Brands     │ Tech Events (cols 2–4)
row 6     testimonials (full width)
```

Nothing is explicitly placed. Source order is hero, chair, views, career,
beauty, linkedin, brands, events, quote, and that auto-places into exactly
the shape above with no holes — so **reordering the HTML reorders the grid**.
The stagger needs three small cards for three long ones; drop one and a
blank cell opens up.

At two columns the full-width cards can't fit beside the tall chair photo,
which would leave the cells next to it empty: sparse auto-placement never
moves its cursor backwards. `grid-auto-flow: row dense` at that breakpoint
back-fills two of the stat cards in beside it. The third lands after the
full-width collection cards with nothing to pair with and no earlier gap to
fall into, so `.art-petal` widens to span 2 there.

⚠️ That widening has to be **undone again at one column** — the rule still
matches below 560px, and a `span 2` against a `1fr` template conjures an
implicit second column and wrecks the entire grid. `.art-petal` is in the
reset list in the 560px block for exactly that reason.

## Pages

| Page | What it is |
| --- | --- |
| `index.html` | The bento board — a grid of gradient cards. Entry points, not a video list. |
| `career.html` | Career & University collection (8 real videos + education partners). |
| `beauty.html` | K-Beauty & Skincare collection (products, 9 real videos + beauty partners). |
| `events.html` | Events & Interviews collection (6 real videos — hackathons, networking, interviews). |

`Brands` is no longer in the nav — `Events` took its slot. The brands section is
still on the landing page at `index.html#brands`, linked from the footer area.

## Files

| File | What it's for |
| --- | --- |
| **`content.js`** | **The only file you normally need to touch.** Stats, videos, hashtags, brands, testimonials. |
| `styles.css` | All the styling. Type, colors and shapes live in the `:root` block at the top. |
| `main.js` | Renders `content.js` onto the page. You shouldn't need to edit this. |
| `assets/tiktok/` | Real thumbnails pulled from your TikTok posts. |
| `assets/photos/`, `assets/brands/` | Photos and brand logos. |

## Your headshot

Live on the landing page as the tall portrait tile. I compressed it from 1.4 MB
to 56 KB (it was being displayed at a fraction of its size) and kept the
full-resolution file as `kimi-headshot-original.jpg` in case you want it.

To swap it later, just overwrite `assets/photos/kimi-headshot.jpg`. If that file
ever goes missing the tile shows a note with the path rather than a broken image.

### Still unused, if you want the folder smaller

- `assets/photos/kimi-headshot-original.jpg` — 1.4 MB, the pre-compression
  headshot. Kept as a backup; delete if you don't need the full-res copy.
- `assets/photos/linkedin-profile.png`, `tiktok-profile.png`,
  `pink-laptop.png` — pulled from Canva, never used on the site.
- `assets/photos/art-watermelon.jpg` — replaced on the LinkedIn tile by the
  single flower, now unplaced.

`kimi-blossom.jpg` has been deleted.

`assets/raw/` and `assets/content/` have been deleted.

## Type

Two faces, both named on your reference board, and both already on macOS/iOS — so
there are no fonts to download and the page renders instantly offline:

- **Charter** — all headings and the big stat numbers.
- **SF Pro** — body copy, nav, labels, chips.

## Tile backgrounds — photo or plain grey, no gradients

Every tile is translucent glass. Behind that it is either one of the art
photos or plain grey — the same flat grey as the grey cards on the
reference bento board. There are no colour gradients on any tile.

| Tile | Background |
| --- | --- |
| About Me | `surface-lite` — the lighter grey |
| `kimi-chair.jpg` | the seated portrait |
| 4M+ views | `art-sky.jpg` |
| LinkedIn | `art-small-flower.jpg` |
| Career / K-Beauty / Events | `surface` — plain grey |
| testimonial | `art-yellow.jpg` |

The hashtag pills on the collection tiles are properly glassy —
`rgba(255,255,255,.16)` with a 26px blur, so you see the tile straight
through them — and each drifts on its own `bob` loop. The three durations (6.2s, 8.1s,
7.3s) are deliberately non-multiples so they never resynchronise into
looking aligned. They pause and settle on hover.

`--surface` is `rgba(241,241,244,.72)` and `--surface-lite` is
`rgba(247,247,249,.78)`. Both stay translucent so the glass blur still
reads. To move a tile between photo and grey, swap its class in
`index.html` — nothing else needs to change.

`art-watermelon.jpg` measured a 0.00 required scrim on the LinkedIn tile at
`50% 90%`, so it carries dark text with no overlay at all.

One art image is still unplaced: `art-small-flower.jpg`. It measured a 0.60
required scrim on a collection tile (it's a saturated red), which would have
buried it, so I left it out rather than force it.

## Brand logo sizing

`.logo img` uses pixel caps (`max-height: 32px`, `max-width: 92px`), not
percentages. `max-height: 100%` wasn't resolving against the 50px content
box, so the square marks — Wealthsimple Foundation, Blossom Social,
Auralyze — were rendering **114px tall inside a 50px cell** and spilling
into the row beneath. Those three also get a tighter 27px cap, since a
square mark reads visually larger than a wordmark at the same height.

If you add a new square-ish logo and it looks oversized next to the
wordmarks, add its `alt` to that selector.

## Art behind the collection titles

Each collection page's title band sits on its own photo:

| Page | Photo | Crop | Veil |
| --- | --- | --- | --- |
| Career | `art-flowers.jpg` | 50% 60% | 0.49 -> 4.61:1 |
| K-Beauty | `art-tulips-soft.jpg` | 50% 0% | 0.41 -> 4.56:1 |
| Events | `art-blue.jpg` | 50% 60% | 0.26 -> 4.59:1 |

Every veil is solved, not eyeballed: for the real 1136x385 box at that crop,
take the darkest pixel inside the text column and find the smallest white
alpha where `--ink-soft` clears 4.5:1 and the h1 clears 3:1. **Swap a photo
and you have to re-solve** — a darker image needs more.

The veil is **graded, not flat**. Measured on career.html, the longest line
ends at 49.2% of the box and the h1 at 38.6%, so the right half carries no
text: full strength runs to 64%, then eases off, and the photograph reads
instead of being bleached. Below 1000px the copy keeps its 48ch measure while
the card narrows, so it runs past the ramp — there the veil goes flat.

Two picks worth explaining:

- **Not `art-tulips.jpg`** for K-Beauty, even though it's the obvious pink
  one. That file is drawn out of ASCII characters, and behind body copy the
  glyph texture is unreadable noise. The blurred `-soft` version is the same
  image without that problem, and needs less veil (0.41 vs 0.52).
- **`art-blue.jpg` for Events**, so the three pages aren't all peach. The
  crop centres the yellow tulip head, which lands on the right of the banner
  where there's no text.

## The footer band

The email and phone are **glass chips**, not underlined links. The rim does
what the underline used to; the teal lives in the icon and the hover rim,
because teal as text is only 2.47:1 against the veiled tulips behind them.


Background is `art-tulips-soft.jpg` — the blurred tulips
tile, pre-blurred at radius 26 — with your headshot as the photo.

The photo **flips like a card on hover** to a second shot, and flips back on
the way out. `overflow: hidden` and 3D transforms fight each other — a
clipping parent flattens its children in some engines — so the clip stays on
`.collab-photo` and the rotation happens on an inner element that isn't
clipping anything. The reverse face carries its own `rotateY(180deg)` so it
lands the right way round rather than mirrored.

A single pink heart drifts off the right edge on each hover. The animation
is bound to `:hover` rather than to a class, and that's what makes it
**replay** — leaving and returning re-applies it from frame zero. The heart
lives outside `.flip-inner`, or the card's rotation would carry it away.

**Blurred, not darkened**, as asked. Blur alone doesn't make it legible though:
even at radius 26 the image still runs from L 0.036 to L 0.592, and no single
text colour survives that range. So it's lifted with a **white** veil instead
of a dark one and the type went to ink. At 0.54 the darkest pixel lands at
L 0.33, which is 5.6:1 for body copy.

One knock-on: the small footer text had to move from `--ink-soft` to `--ink`.
`--ink-soft` measured 2.91:1 against the veiled image — it needs a much
lighter background than this treatment gives.

## The headshot on the lander

Her photo sits in a **glass bubble** rimmed exactly like the ghost button —
`rgba(255,255,255,.14)`, a 16px blur, a `rgba(255,255,255,.5)` rim — with
seven small empty bubbles around it.

The small ones get their **shine** from three stacked layers in CSS, not an
image: a bright specular cap at the upper left, a cool tint pooling at the
lower right, and an inset rim light curving round the underside. On top of
that an `::after` is a true circle — the hard glint — kept circular rather
than an ellipse so it stays crisp at the 15px size of the smallest bubble.

The bubbles **drift away from the cursor**, gently. `initBubbles()` in
`main.js` owns their transform so idle drift and the nudge compose into one
value; a CSS animation would fight an inline transform, so the drift is
switched off when JS takes over.

The push is deliberately soft: a squared falloff over a 90px reach, capped
at 26px. At 30px away that's a 13px nudge; at 90px it's under 1px. **The
cursor can catch a bubble if you chase it** — that's the intent, they move
like bubbles rather than fleeing.

They also get **heavier the closer the pointer gets**. The follow factor is
not constant: it eases from `0.035` out at the edge of range down to `0.009`
dead centre, so a bubble under the cursor travels at roughly a quarter the
speed of one drifting free. That's the "slow, like a real bubble" behaviour —
it's the easing that sells it, not the size of the push.

Each bubble also carries a fallback bearing for the case where the pointer
lands exactly on its centre, since the direction vector collapses to zero
there and it would otherwise sit still.

Two positioning notes, both learned the hard way:

- `.lander-orbit` must stay a **positioning context**. The portrait inside is
  `inset: 0`, so when the orbit was `position: static` on mobile that resolved
  against `.lander` and the bubble filled the entire hero with the headline
  across her face.
- On one column there's no room beside the headline, and absolute positioning
  put the bubble behind the 125px nav. So the mobile hero **stacks**: bubble
  first, right-aligned and below the bar, then the copy.

## The testimonials tile

Each quote credits a company, and that company links out to their site. The
data lives in `content.js`: `company` has to appear **verbatim inside** `role`,
because `roleHTML()` finds that substring and wraps it. If it doesn't match,
the link is appended after the role instead — a typo degrades rather than
silently dropping the link. Remove `companyUrl` to un-link one.

Affordance is teal plus a small arrow, not an underline: teal measures 5.53:1
on the quote panel, and the underline only appears on hover.


Both recommendations render side by side from `content.js` — Jonathan Chao
and Justin Quan. The label is "You heard it here first", and each panel
lifts independently on hover with its avatar scaling slightly.

## Photo tiles and text colour

`art-flower` carries a 0.44 white veil. Its sub-text had to step from
`--ink-soft` to `--ink`: `--ink-soft` only reached 3.38:1 at that veil and
needed 0.62 to clear 4.5, which washed the flower out. `--ink` clears
6.4:1 at 0.44, so the picture stays vivid and the type got darker instead.
Same treatment on `art-sky`.

`art-yellow.jpg` (the testimonial background) has been sharpened with two
unsharp passes — it was soft enough that you couldn't read what it was.

## The Contact button

Solid white pill, type in the hero photo's own teal. The photo's teal is
about `#567e84`, which is 4.46:1 on white — just under — so the type uses
`#3f6068`, the same hue two steps down, at 6.8:1. Over the light page the
pill gains a faint border, since white-on-white has no edge otherwise.

## The 4M+ tile

The caption is just **"All time"** now — no date, no 365-day window. Hovering
the tile fires a small confetti spritz: twelve particles, each with its own
direction, colour and delay via `nth-child`, all CSS. It's `aria-hidden` and
collapses under `prefers-reduced-motion`.

## The three photo tiles

| File | Tile |
| --- | --- |
| `assets/photos/art-flowers.jpg` | hero — "Hi, I'm Kimi" |
| `assets/photos/art-sky.jpg` | 4M+ views |

All three are in place and compressed (929 KB → 505 KB combined; they're
decorative backgrounds rendered at 560px wide at most, so 900px source is
ample). Each tile also stacks a CSS gradient *underneath* the photo, so if
a file is ever moved or renamed the tile falls back to a coloured tint
instead of going blank.

### The scrims are measured, not guessed

Each white overlay is set from the actual darkest pixel in the region the
copy occupies, for that tile's exact `cover` crop:

| Tile | Darkest pixel under the copy | Needs | Set to |
| --- | --- | --- | --- |
| hero (desktop) | `rgb(140,106,79)` L=0.164 | 0.56 | **0.62** |
| hero (mobile) | `rgb(4,93,157)` L=0.103 | 0.64 | **0.66** |
| 4M+ | `rgb(0,74,121)` L=0.063 | 0.67 | **0.72** |

`art-sky` is pinned to `50% 0%` deliberately — any lower and the dark
green hill enters the crop, which pushed the required scrim to 0.74 and
buried the photo.

If you swap any of these images, **re-check the scrim** — a darker photo
needs a higher value. The numbers above are what to beat.

## Why the stats aren't live

Short version: **neither platform will give a website these numbers**, so they're
typed into the `stats` block at the top of `content.js`. The site prints an
"as of July 2026" next to them so they read as honest rather than stale — update
the `updated` field when you change them.

The longer reason, so you don't have to wonder:

- **TikTok** — the only official route is the Display API. It needs a registered
  app, an app review, and an OAuth login that has to be refreshed. Even then it
  returns per-video stats for the logged-in user, not a lifetime "total views"
  figure. It also can't be called from a static page: the app secret would be
  visible in the source, and the browser blocks the request anyway.
- **LinkedIn** — follower counts exist in the Marketing API for *company pages
  only*. There is no API, official or otherwise, that returns a personal
  profile's follower count.
- **Scraping from the page** won't work either — both sites block cross-origin
  requests from browsers, and block automated ones from servers.

If you ever want the TikTok side automated, it's doable but it needs a small
server-side job (say a daily GitHub Action) that holds the OAuth token and
writes a JSON file the page reads. LinkedIn personal followers would still have
to stay manual. Happy to build that if the manual number becomes annoying.

## Changing the colors

Top of `styles.css`, in `:root`:

```css
--accent:      #f2b2ae;   /* the peach — surfaces, fills, decorative      */
--accent-deep: #c1291f;   /* same hue, dark enough to BE text             */
--accent-ink:  #a7231b;   /* hover                                       */
```

The peach is light (L 0.538). That means it works as a surface but **cannot
be text and cannot carry white text** — white on it is 1.79:1. So anything
that has to read as type, or sit under white type, uses `--accent-deep`:
the same hue (3.5°) taken down to L 0.130, which clears 5.83:1 in both
directions.

Knock-ons from that, all measured:

- **The LinkedIn mark** is white, with no disc behind it — that was a
  deliberate call of Kimi's, and it costs contrast. Flat white measures
  **1.28:1** against the palest pixel of that flower tile, far under the 3:1
  a graphic wants. What makes it legible is three stacked dark drop-shadows
  (`0 0 1px` at 0.9 alpha, `0 1px 2px` at 0.75, `0 4px 10px` at 0.5), not
  the fill. If it ever stops reading, the fix is a disc behind it or a dark
  mark — don't just thicken the shadow further.

Card washes are the `.fill-warm` / `.fill-cool` / `.fill-rose` / `.fill-blue` /
`.fill-mint` classes. Swap a card's fill class in the HTML to recolor it.

⚠️ Three constraints worth knowing before you tweak these. White text needs a
dark enough background (that's why `--accent-deep` exists alongside the peach
`--accent`, which is far too pale to carry type). The card washes are deliberately pale — a punchier fill drops the
small grey labels below readable contrast. And the nav bar's translucency
bottoms out at `0.62` alpha; any sheerer and the white links stop being legible
where it passes over a pale part of the page. Every text/background pair
currently meets the WCAG AA 4.5:1 minimum.

## Previewing locally

Double-clicking `index.html` works. For a proper local server:

```bash
cd ~/Downloads/portfolio && python3 -m http.server 4321
```

Then open http://localhost:4321

## Putting it online

Static site, so most hosts are drag-and-drop and free:

- **Netlify Drop** — app.netlify.com/drop, drag the `portfolio` folder in. Done.
- **Cloudflare Pages** or **GitHub Pages** — same idea, both free.

Any of these let you connect a custom domain like `kiminguyen.com`.

## Load animation

The bento tiles fly into place on load — a staggered `tileIn` keyframe,
60ms apart, driven purely by CSS. It's scoped to `.js` for consistency
with the scroll reveal, and `prefers-reduced-motion` collapses it to
nothing. No JavaScript is involved in making the tiles visible, so a
script failure can't leave the grid blank.

## The bubble cursor

The pointer is a small soap bubble — `assets/cursor/bubble.png` on `body`,
with a larger version carrying a halo ring on `a, button, summary,
[role=button]`.

Three things are deliberate:

- **PNG, not SVG.** This was an SVG data URI first and it silently did nothing
  in Safari, which does not load SVG cursors and just falls back to the
  keyword. PNG is the only format every browser accepts here. The files are
  generated, not drawn by hand — the script is in the repo history; re-render
  at 1x and 2x if the design changes.
- **It is drawn twice over.** A teal outer rim so it reads on the pale pages,
  a white rim just inside it so it still reads on the dark lander photo.
  Checked against page grey, card grey, the dark lander and the peach tile.
- **Links get their own, bigger one.** Replacing the system cursor throws away
  the arrow-to-hand hover cue, so the affordance had to be rebuilt — that's
  what the halo is for. Don't collapse the two into one.

It's scoped to `@media (hover: hover) and (pointer: fine)`, since a touch
device has no cursor to restyle, and inputs keep the normal text caret.

### The bubble trail

`initCursorBubbles()` drops a tiny `<i>` at the pointer as it moves; each one
floats, drifts and pops on its own CSS animation.

- **CSS animation, not rAF.** Each bubble removes itself on `animationend`, so
  a busy main thread can't strand them on the page.
- **Distance-gated, not time-gated.** Nothing spawns until the pointer has
  travelled 30px, so a still cursor makes no bubbles and a slow drag makes a
  trail rather than a puddle.
- **Each move emits a cluster, not a bubble** — one at 5–12px plus one or two
  at 2.8–5.6px, scattered off the pointer and running shorter so they thin out
  first. One lone bubble reads as a dot trailing the cursor; the cluster is
  what reads as soap. The small range bottoms out at 2.8px and the keyframe
  opens at `scale(0.6)`: below that the rim and fill have no room and it stops
  looking like a bubble at all.

- **⚠️ Never centre these with a percentage margin.** They were positioned with
  `margin: -50% 0 0 -50%`, meaning "half my own size" — but a percentage margin
  resolves against the **containing block's width**, and the containing block
  here is the full-viewport layer. That made it −632px, and every bubble flew
  off-screen; the effect looked completely dead while the elements were being
  created correctly. `main.js` subtracts half the size from `left`/`top`
  instead. A `transform: translate(-50%,-50%)` would work too, except the
  keyframes already own `transform`.

  Worth remembering how this slipped through: the first check counted the
  spawned elements and read back their inline styles, both of which were
  right. Nothing measured where they actually landed. **Assert on
  `getBoundingClientRect`, not on the styles you just set.**
- **Capped at 34 live elements** — a fast scribble can't flood the DOM. The cap
  counts every element, cluster members included.
- **There's a `setTimeout` fallback next to the `animationend` handler.** If
  that event never lands the live counter would stick at the cap and the
  effect would be dead for the rest of the session.

## Logo and favicon

`assets/logos/logo-white.png` sits in the nav over the hero photo;
`logo-black.png` swaps in once the nav flips to its ink state. Two files
rather than a CSS filter, so the mark stays crisp.

The favicon is a **tulip emoji**, inlined as an SVG data URI in each page's
`<link rel="icon">` — no image file to keep in sync. To change it, swap the
percent-encoded emoji in that one attribute on all four pages.

## The nav

Logo and Contact sit **outside** the bar as plain white text; the bar itself is
short and centred and holds only the links. The **Work** flyout opens on hover
and on keyboard focus (`:focus-within`) — no JavaScript, and the panel is the
glassy blurred one from the reference.

Three things here are measured, not styled by eye:

- **⚠️ The light bar is a known, deliberate exception.** The bar is a 0.10
  white fill over the hero photo. Reconstructing the real stack — photo,
  vignette, `blur(20px) saturate(1.7)` — puts the lightest pixel under it at
  `rgb(100,141,150)`, which leaves the three nav links at **3.63:1**, under
  the 4.5 WCAG asks at 14.5px. **These are the only failing text nodes on the
  site**, and only on the home page; the collection pages flip the nav to ink
  over a light background and pass comfortably.

  Kimi chose this look after seeing the alternative, so don't "fix" it
  silently. If it's ever revisited, the measured answers are: a **0.26 dark**
  tint on the bar gives **5.43:1**, and tinting the hover pill **0.16 darker**
  than the bar (rather than lighter) gives **6.65:1**. In that version the
  shine has to be a 1px rim plus a ~6px crescent along the top edge — the
  glyph cap height starts ~12.7px down — because a half-height sheen across
  the middle measured 3.20:1.

  (Measured twice, in PIL and again through Chrome's own canvas filter; they
  agree to within one 8-bit step. An older 5.66:1 figure recorded here was
  stale — it predated the swap to `art-three-flowers.jpg`, and the contrast
  sweep had been trusting that number instead of measuring.)
- **`--nav-h`.** The lander pulls itself up by exactly the nav's height so the
  photo starts at the top of the page. That was a hard-coded 86px, which left
  the two-row mobile nav (125px) sticking out above the photo — white text on
  white. It's a variable now: 80px base, 128px on phones.

The pill itself is one element for the whole bar, moved to whichever link is
hovered so it appears to slide. It's positioned from `getBoundingClientRect`
deltas rather than `offsetLeft`, because `.nav-links` carries a `z-index` — it
has to sit above the pill — which makes it the `offsetParent` and would throw
every reading off by the list's own offset. It rests on the `aria-current`
link where a page has one, and fades out where none does.

Once the photo scrolls away, white-on-white would return, so `main.js` flips the
nav to ink. That's driven by an **IntersectionObserver** on a sentinel at the
lander's bottom edge rather than a scroll listener, so it reports correctly
however the page moved. Pages with no lander start in the ink state.

⚠️ This is the one piece that needs JavaScript. Without it the nav stays white
and becomes hard to read once you scroll past the hero. Everything else on the
site works with JS off.

## Notes

- The arrows on the collection tiles are pinned to the card (absolute,
  19px from top and right), not to the heading row. They used to drift
  with the heading's line wrap, which is why they never lined up.
- Images are lazy-loaded; the layout is responsive down to 375px wide.
- Motion respects `prefers-reduced-motion`.
- The scroll-reveal is scoped to a `.js` class, so if JavaScript fails the
  content still shows rather than staying invisible.

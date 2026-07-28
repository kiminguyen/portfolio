/* Renders the data in content.js and wires up small interactions.
   You shouldn't need to edit this file — change content.js instead. */

(function () {
  "use strict";

  /* Tells the stylesheet it's safe to hide .reveal elements, because
     this script is alive and will reveal them again. Set first so a
     later error can't leave the page blank. */
  document.documentElement.classList.add("js");

  var DATA = window.SITE || {};
  var TIKTOK = "https://www.tiktok.com/@kiminguyenn";

  /* escape anything that came from content.js before it hits innerHTML */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  var ARROW =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" ' +
    'stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>';

  /* ------------------------------------------- video grid (per page) */
  function renderVideos() {
    var grid = document.getElementById("video-grid");
    if (!grid) return;

    var key = document.body.getAttribute("data-collection");
    var col = (DATA.collections || {})[key];
    if (!col) return;
    var isBeauty = key === "beauty";

    /* rotate the fallback fills so thumbnail-less cards don't all match */
    var FALLBACK = ["surface", "surface", "surface", "surface", "surface"];

    grid.innerHTML = col.videos.map(function (v, i) {
      var href = v.url || TIKTOK;
      var onIg = v.platform === "instagram";
      var label = onIg
        ? "View on Instagram"
        : (v.url ? "Watch on TikTok" : "View on TikTok");

      /* no screenshot saved yet: show a gradient tile with the caption */
      var thumb = v.thumb
        ? '<img src="' + esc(v.thumb) + '" alt="' + esc(v.title) + '" loading="lazy">'
        : '<span class="glyph" aria-hidden="true">' + (onIg ? "◎" : "▶") + "</span>" +
          '<span class="vthumb-cap">' + esc(v.title) + "</span>";

      return (
        '<a class="vcard" href="' + esc(href) + '" target="_blank" rel="noopener">' +
          '<div class="vthumb' +
            (v.thumb ? "" : " vthumb--none " + FALLBACK[i % FALLBACK.length]) + '">' +
            thumb +
            (v.pinned ? '<span class="vpin">Pinned</span>' : "") +
            (v.views
              ? '<span class="vviews">' +
                  '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>' +
                  esc(v.views) +
                "</span>"
              : "") +
            '<span class="vplay" aria-hidden="true"><span>' +
              '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>' +
            "</span></span>" +
          "</div>" +
          '<div class="vbody">' +
            "<p>" + esc(v.title) + "</p>" +
            '<div class="vmeta">' +
              '<span class="chip' + (isBeauty ? " is-beauty" : " is-blue") + '">' +
                '<span class="dot"></span>' + esc(v.brand || v.tag || col.title) +
              "</span>" +
              '<span class="vlink">' + label + " &rarr;</span>" +
            "</div>" +
          "</div>" +
        "</a>"
      );
    }).join("");
  }

  /* ------------------------------------- hashtag pills on a tile */
  function renderHashtags() {
    document.querySelectorAll("[data-hashtags-for]").forEach(function (host) {
      var key = host.getAttribute("data-hashtags-for");
      var col = (DATA.collections || {})[key];
      if (!col || !col.hashtags) return;
      var beauty = key === "beauty";

      host.innerHTML = col.hashtags.map(function (t) {
        var body = String(t).replace(/^#/, "");
        return (
          '<span class="chip chip--tag' + (beauty ? " is-beauty" : "") + '">' +
            "<i>#</i>" + esc(body) +
          "</span>"
        );
      }).join("");
    });
  }

  /* ------------------------------- hand-maintained stats block */
  function renderStats() {
    var s = DATA.stats;
    if (!s) return;

    document.querySelectorAll("[data-stat]").forEach(function (el) {
      var path = el.getAttribute("data-stat").split(".");
      var v = s;
      for (var i = 0; i < path.length; i++) {
        if (v == null) return;
        v = v[path[i]];
      }
      if (v != null) el.textContent = v;
    });

    document.querySelectorAll("[data-stat-updated]").forEach(function (el) {
      if (s.updated) el.textContent = s.updated;
    });
  }

  /* ------------------------------------ product strip (beauty page) */
  function renderProducts() {
    var host = document.getElementById("products");
    if (!host) return;

    var key = document.body.getAttribute("data-collection");
    var col = (DATA.collections || {})[key];
    if (!col || !col.products) return;

    var fills = ["surface", "surface", "surface", "surface"];
    host.innerHTML = col.products.map(function (p, i) {
      return (
        '<div class="product ' + fills[i % fills.length] + '">' +
          '<img src="' + esc(p.img) + '" alt="' + esc(p.name) + '" loading="lazy">' +
          "<span>" + esc(p.name) + "</span>" +
        "</div>"
      );
    }).join("");
  }

  /* ---------------------------------------------------------- brands
     On a collection page, `data-brand-key` narrows this to one group. */
  function renderBrands() {
    var host = document.getElementById("brand-groups");
    if (!host || !DATA.brandGroups) return;

    var only = host.getAttribute("data-brand-key");
    var groups = only
      ? DATA.brandGroups.filter(function (g) { return g.key === only; })
      : DATA.brandGroups;

    host.innerHTML = groups.map(function (g) {
      var logos = g.brands.map(function (b) {
        return (
          '<a class="logo" href="' + esc(b.url) + '" target="_blank" rel="noopener" title="' + esc(b.name) + '">' +
            '<img src="' + esc(b.logo) + '" alt="' + esc(b.name) + '" loading="lazy">' +
          "</a>"
        );
      }).join("");

      return (
        '<div class="brand-group">' +
          "<h3>" + esc(g.label) + ' <span aria-hidden="true">' + esc(g.emoji || "") + "</span></h3>" +
          '<div class="logos">' + logos + "</div>" +
        "</div>"
      );
    }).join("");
  }

  /* The role line, with the company turned into a link out to their site.
     esc() runs on every piece before any markup is added, so the anchor is
     built around escaped text rather than injected into it. */
  function roleHTML(t) {
    var role = esc(t.role || "");
    if (!t.companyUrl || !t.company) return role;

    var link =
      '<a class="qco" href="' + esc(t.companyUrl) + '" target="_blank" rel="noopener">' +
        esc(t.company) +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" ' +
        'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        '<path d="M7 17 17 7M9 7h8v8"/></svg>' +
      "</a>";

    var co = esc(t.company);
    var at = role.indexOf(co);
    /* substring swap when the company is named in the role, otherwise
       tack it on — never silently drop the link */
    return at === -1
      ? role + " &middot; " + link
      : role.slice(0, at) + link + role.slice(at + co.length);
  }

  /* ------------------------------------- both testimonials, side by side */
  function renderQuotePair() {
    var host = document.querySelector("[data-quotes]");
    if (!host || !DATA.testimonials) return;

    host.innerHTML = DATA.testimonials.map(function (t) {
      return (
        '<figure class="panel">' + esc(t.quote) +
          '<figcaption class="who">' +
            (t.photo ? '<img src="' + esc(t.photo) + '" alt="" loading="lazy">' : "") +
            "<div><b>" + esc(t.name) + "</b><span>" + roleHTML(t) + "</span></div>" +
          "</figcaption>" +
        "</figure>"
      );
    }).join("");
  }

  /* ----------------------------------------------- testimonial cards */
  function renderQuotes() {
    var host = document.getElementById("quotes");
    if (!host || !DATA.testimonials) return;

    host.innerHTML = DATA.testimonials.map(function (t, i) {
      return (
        '<figure class="b b--wide b--quote ' + (i % 2 ? "surface" : "surface") + '" style="margin:0;">' +
          '<p class="eyebrow">You heard it here first</p>' +
          '<div class="panel">' + esc(t.quote) +
            '<div class="who">' +
              (t.photo ? '<img src="' + esc(t.photo) + '" alt="" loading="lazy">' : "") +
              "<div><b>" + esc(t.name) + "</b><span>" + roleHTML(t) + "</span></div>" +
            "</div>" +
          "</div>" +
        "</figure>"
      );
    }).join("");
  }

  /* --------------------------- keep the bento counts honest */
  function fillCounts() {
    document.querySelectorAll("[data-count-for]").forEach(function (el) {
      var col = (DATA.collections || {})[el.getAttribute("data-count-for")];
      if (col && col.videos) el.textContent = col.videos.length;
    });

    /* counted from the logo wall itself, so adding a brand updates the
       card and nobody has to remember to edit a number by hand */
    var brandCards = document.querySelectorAll("[data-brand-count]");
    if (!brandCards.length) return;
    var total = (DATA.brandGroups || []).reduce(function (n, g) {
      return n + ((g.brands || g.logos || []).length);
    }, 0);
    if (total) brandCards.forEach(function (el) { el.textContent = total + "+"; });
  }

  /* --------------------------------- bubbles that dodge the cursor
     JS owns the transform here so idle drift and repulsion compose in
     one value — a CSS animation would fight an inline transform. The
     push is sized so the pointer never reaches a bubble's edge. */
  function initBubbles() {
    var orbit = document.querySelector(".lander-orbit");
    var lander = document.querySelector(".lander");
    if (!orbit || !lander) return;

    /* the headshot rides along with the empties, just heavier. It goes
       last so the empties keep the phases they were tuned with. */
    var portrait = orbit.querySelector(".bubble--portrait");
    var bubbles = [].slice.call(orbit.querySelectorAll(".bubble--sm"));
    if (portrait) bubbles.push(portrait);
    if (!bubbles.length) return;

    var still = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (still) return;

    /* take over from the CSS drift */
    bubbles.forEach(function (b) { b.style.animation = "none"; });

    var items = bubbles.map(function (el, i) {
      var big = el === portrait;
      return {
        el: el, tx: 0, ty: 0,
        phase: i * 1.9,
        /* the portrait is wider than the whole orbit, so the empties'
           drift would read as a wobble on it — slower, travelling only
           a little further than they do */
        speed: big ? 0.19 : 0.34 + i * 0.07,
        ax: big ? 5 : 4,
        ay: big ? 7 : 5,
        /* how far past its own rim a bubble feels the pointer. The
           empties start easing away from 90px out; the portrait only
           answers once the cursor is basically on the glass. */
        pad: big ? 30 : 90,
        /* the empties take a fixed shove. The portrait's is a fraction
           of its own width, so the 126px mobile one doesn't drive
           itself out through the hero's clipped edge. */
        push: big ? 0 : 26,
        pushRel: big ? 0.14 : 0,
        /* squared falloff makes the empties flick away near their middle
           and ignore a distant pointer. The portrait is wide enough that
           a squared curve leaves most of the face dead, so it tracks
           linearly — every part of it pushes. */
        soft: big,
        ease: big ? 0.05 : 0.035,
        drag: big ? 0.028 : 0.026,
        /* a per-bubble escape bearing, used when the pointer lands dead
           on the centre and the direction vector collapses to zero */
        bail: i * 1.31
      };
    });
    var portraitItem = portrait ? items[items.length - 1] : null;

    var px = -9999, py = -9999, live = false;
    lander.addEventListener("pointermove", function (e) {
      px = e.clientX; py = e.clientY; live = true;
    }, { passive: true });
    lander.addEventListener("pointerleave", function () { live = false; });

    var t = 0;
    (function frame() {
      t += 0.016;
      for (var i = 0; i < items.length; i++) {
        var s = items[i];
        /* idle drift */
        var dx = Math.sin(t * s.speed + s.phase) * s.ax;
        var dy = Math.cos(t * s.speed * 0.82 + s.phase) * s.ay;
        var ease = s.ease;

        if (live) {
          var r = s.el.getBoundingClientRect();
          /* subtract the offset already applied, so we measure from the
             bubble's resting centre and don't feed back on ourselves */
          var cx = r.left + r.width / 2 - s.tx;
          var cy = r.top + r.height / 2 - s.ty;
          var vx = cx - px, vy = cy - py;
          var d = Math.sqrt(vx * vx + vy * vy);
          /* pointer sitting exactly on the centre gives a zero vector, so
             the bubble would sit still and get touched. Bail out along a
             fixed bearing instead. */
          if (d < 0.5) { vx = Math.cos(s.bail); vy = Math.sin(s.bail); d = 1; }
          /* A soft nudge, not a hard exclusion zone: the push fades to
             nothing at the edge of range, and it's scaled right down —
             real bubbles drift out of the way, they don't flee. This
             does mean the cursor can catch one if you chase it, which
             is the intent. */
          var reach = r.width / 2 + s.pad;
          if (d < reach) {
            var f = (reach - d) / reach;         /* 1 at the centre, 0 at range */
            var push = (s.soft ? f : f * f) * (s.pushRel ? r.width * s.pushRel : s.push);
            dx += (vx / d) * push;
            dy += (vy / d) * push;
            /* and they get heavier the closer the pointer gets — an empty
               under the cursor follows at 0.009 against 0.035 free, about
               a quarter the speed, and the portrait lands near half */
            ease -= f * s.drag;
          }

          /* the hero clips its overflow, so the portrait has to stop
             short of the edge instead of sliding out through it */
          if (s === portraitItem) {
            var lr = lander.getBoundingClientRect();
            dx = Math.min(lr.right - 4 - (r.right - s.tx),
                 Math.max(lr.left + 4 - (r.left - s.tx), dx));
            dy = Math.min(lr.bottom - 4 - (r.bottom - s.ty),
                 Math.max(lr.top + 4 - (r.top - s.ty), dy));
          }
        }

        /* slow follow, so they ease rather than snap */
        s.tx += (dx - s.tx) * ease;
        s.ty += (dy - s.ty) * ease;
        s.el.style.transform = "translate(" + s.tx.toFixed(2) + "px," + s.ty.toFixed(2) + "px)";
      }
      requestAnimationFrame(frame);
    })();
  }

  /* --------------------------------- the sliding pill in the menu bar
     One pill for the whole bar, moved to whichever link is hovered, so
     it appears to slide between them. It rests on the current page's
     link where there is one, and fades out otherwise. */
  function initNavPill() {
    var nav = document.querySelector(".nav");
    var pill = nav && nav.querySelector(".nav-pill");
    if (!nav || !pill) return;

    var links = [].slice.call(nav.querySelectorAll(".nav-links a"));
    if (!links.length) return;

    var home = nav.querySelector('.nav-links a[aria-current="page"]');
    var at = null;

    /* measured from rects, not offsetLeft: .nav-links carries a z-index,
       which makes it the offsetParent and would shift every reading. */
    function moveTo(a, animate) {
      at = a;
      if (!a) { pill.classList.remove("is-on"); return; }
      if (!animate) pill.style.transition = "none";

      var n = nav.getBoundingClientRect(), r = a.getBoundingClientRect();
      pill.style.width = r.width + "px";
      pill.style.height = r.height + "px";
      pill.style.transform =
        "translate(" + (r.left - n.left) + "px," + (r.top - n.top) + "px)";
      pill.classList.add("is-on");

      if (!animate) {
        void pill.offsetWidth;          /* flush, so the next move animates */
        pill.style.transition = "";
      }
    }

    links.forEach(function (a) {
      a.addEventListener("pointerenter", function () { moveTo(a, true); });
      a.addEventListener("focus", function () { moveTo(a, true); });
    });
    nav.addEventListener("pointerleave", function () { moveTo(home, true); });
    nav.addEventListener("focusout", function (e) {
      if (!nav.contains(e.relatedTarget)) moveTo(home, true);
    });

    /* the bar's width changes with the viewport, so re-measure without
       animating — otherwise the pill slides around during a resize */
    addEventListener("resize", function () { moveTo(at, false); }, { passive: true });

    moveTo(home, false);
  }

  /* ------------------------------------------ the soap-bubble layer
     One fixed layer holds every bubble on the page; the cursor trail and
     the burst off the headshot both draw into it. Each caller gets its
     own spawner with its own cap, so a trail sitting at its limit can't
     swallow the bubbles a click is owed.

     The animation is CSS, not rAF: each bubble cleans itself up on
     animationend, so a busy main thread can't leave them stuck on the
     page. Travel comes in as --dx/--rise rather than being rolled here,
     because the trail wants a loose upward wander and the burst wants a
     deliberate bearing. */
  var bubbleLayer = null;
  function bubbleSpawner(max) {
    if (!bubbleLayer) {
      bubbleLayer = document.createElement("div");
      bubbleLayer.className = "bubble-trail";
      bubbleLayer.setAttribute("aria-hidden", "true");
      document.body.appendChild(bubbleLayer);
    }
    var layer = bubbleLayer, live = 0;

    return function (x, y, size, secs, dx, rise) {
      if (live >= max) return;
      var b = document.createElement("i");
      /* centred on the point by hand. A -50% margin can't do this: a
         percentage margin resolves against the containing block's width,
         not the element's own size. */
      b.style.cssText =
        "left:" + (x - size / 2).toFixed(1) + "px;" +
        "top:" + (y - size / 2).toFixed(1) + "px;" +
        "width:" + size.toFixed(1) + "px;height:" + size.toFixed(1) + "px;" +
        "--dx:" + dx.toFixed(1) + "px;" +
        "--rise:" + rise.toFixed(1) + "px;" +
        "animation-duration:" + secs.toFixed(2) + "s";
      live++;

      var done = false;
      function reap() {
        if (done) return;
        done = true;
        b.remove();
        live--;
      }
      b.addEventListener("animationend", reap);
      /* if animationend never lands — animations disabled, the tab was
         backgrounded mid-flight — the counter would stick at the cap and
         the effect would die for the rest of the session */
      setTimeout(reap, secs * 1000 + 400);

      layer.appendChild(b);
    };
  }

  /* ------------------------------------ soap bubbles off the cursor
     Tiny bubbles that spawn as the pointer moves and float away.
     Spawning is distance-gated rather than time-gated, so a slow drag
     makes a trail and a still cursor makes nothing. */
  function initCursorBubbles() {
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    /* the cap counts every element, and each move emits a cluster rather
       than one bubble, so it's higher than it was */
    var pop = bubbleSpawner(34);
    var lastX = null, lastY = null;

    /* a loose upward wander — no bearing, these just drift off */
    function wanderX() { return Math.random() * 34 - 17; }
    function wanderY() { return -38 - Math.random() * 34; }

    addEventListener("pointermove", function (e) {
      if (e.pointerType && e.pointerType !== "mouse") return;
      if (lastX === null) { lastX = e.clientX; lastY = e.clientY; return; }

      var dx = e.clientX - lastX, dy = e.clientY - lastY;
      if (dx * dx + dy * dy < 900) return;      /* < 30px travelled */
      lastX = e.clientX; lastY = e.clientY;

      /* one bubble reads as a dot following the pointer; a cluster of one
         bigger and two much smaller ones reads as soap. The little ones are
         scattered off the pointer and run shorter, so they thin out first.
         The small range bottoms out at 2.8px rather than lower — below that
         the rim and the fill have no room and it stops reading as a bubble. */
      pop(e.clientX, e.clientY, 5 + Math.random() * 7, 1.5 + Math.random() * 1.1,
          wanderX(), wanderY());

      var tiny = 1 + (Math.random() < 0.65 ? 1 : 0);
      for (var i = 0; i < tiny; i++) {
        pop(e.clientX + (Math.random() * 28 - 14),
            e.clientY + (Math.random() * 24 - 12),
            2.8 + Math.random() * 2.8,
            1.0 + Math.random() * 0.8,
            wanderX(), wanderY());
      }
    }, { passive: true });
  }

  /* --------------------------------- a burst of bubbles off the headshot
     Press the portrait and bubbles rise out of the spot you pressed, once
     per press. The listener is on the figure because .lander-orbit is
     pointer-events:none — the figure takes them back for its own circle,
     so the empty bubbles around it still never eat a click.

     pointerdown rather than click, so it fires under a finger as well as
     a mouse and lands the moment you press instead of on release. It is
     passive and never calls preventDefault, so a drag that happens to
     start on the photo still scrolls the page. */
  function initPortraitBurst() {
    var portrait = document.querySelector(".lander-orbit .bubble--portrait");
    if (!portrait) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    /* its own budget, kept clear of the trail's — a click should always
       produce a full burst even mid-sweep across the hero */
    var pop = bubbleSpawner(72);
    var pressTimer = null;

    portrait.addEventListener("pointerdown", function (e) {
      /* the photo dips under the press, so a click that lands while an
         earlier burst is still rising doesn't feel unacknowledged. It's on
         the img: the figure's own transform belongs to the rAF drift loop
         in initBubbles, and setting it here would fight that. */
      clearTimeout(pressTimer);
      portrait.classList.add("is-pressed");
      pressTimer = setTimeout(function () {
        portrait.classList.remove("is-pressed");
      }, 200);

      var n = 8 + Math.round(Math.random() * 4);          /* 8..12 */
      for (var i = 0; i < n; i++) {
        /* bearings fan across a cone centred on straight up, not a full
           circle — these are soap bubbles, and ones heading downward read
           as debris. Each gets its own slice of the cone plus jitter,
           because pure randomness clumps, and a clump reads as one fat
           bubble rather than a burst. */
        var a = (-1.15 + 2.3 * ((i + Math.random()) / n));
        var dist = 70 + Math.random() * 90;

        /* a few big ones among many small, matching the trail's mix. The
           big ones run longer, so they're still climbing once the fine
           spray has gone. */
        var big = Math.random() < 0.3;
        var size = big ? 8 + Math.random() * 6 : 3.2 + Math.random() * 4;
        var secs = big ? 1.6 + Math.random() * 0.7 : 1.1 + Math.random() * 0.7;

        /* scattered off the press point so they don't all leave from the
           same pixel, which reads as a fountain rather than a burst */
        pop(e.clientX + (Math.random() * 22 - 11),
            e.clientY + (Math.random() * 18 - 9),
            size, secs,
            Math.sin(a) * dist, -Math.cos(a) * dist);
      }
    }, { passive: true });
  }

  /* ------------------------------------------- nav over the lander
     The nav sits in white text over the hero photo. Once the photo has
     scrolled away that would be white-on-near-white, so flip it to ink.
     Only runs where there IS a lander; other pages start scrolled. */
  function initNav() {
    var shell = document.querySelector(".nav-shell");
    var lander = document.querySelector(".lander");
    if (!shell) return;

    /* pages without a hero photo start in the ink state */
    if (!lander) { shell.classList.add("is-scrolled"); return; }

    function set(past) { shell.classList.toggle("is-scrolled", past); }

    /* An observer rather than a scroll listener: it reports the state
       change however the page moved — wheel, keyboard, anchor jump,
       scrollTo, resize — and costs nothing while idle. */
    if ("IntersectionObserver" in window) {
      var sentinel = document.createElement("div");
      sentinel.setAttribute("aria-hidden", "true");
      sentinel.style.cssText =
        "position:absolute;left:0;width:1px;height:1px;pointer-events:none;" +
        "top:calc(100% - 96px)";
      lander.appendChild(sentinel);
      new IntersectionObserver(function (entries) {
        set(!entries[0].isIntersecting && entries[0].boundingClientRect.top < 0);
      }, { threshold: 0 }).observe(sentinel);
    }

    /* belt and braces, and it covers the very first paint */
    function sync() { set(lander.getBoundingClientRect().bottom < 96); }
    sync();
    addEventListener("scroll", sync, { passive: true });
    addEventListener("resize", sync);
  }

  /* ------------------------------------ in-page jumps, minus the hash
     About, Collab and the brands tile all point at sections on this same
     page. Left to the browser those scroll AND stamp #about on the URL,
     where it then sits in the address bar and rides along in anything
     the visitor copies afterwards.

     The href stays in the markup on purpose: with JS off the links still
     jump, and assistive tech still announces them as in-page links. This
     only takes over the scrolling and skips the history entry.

     Focus is moved by hand because preventDefault also cancels the focus
     move the browser would have done — without it a keyboard user
     carries on tabbing from the top of the document rather than from the
     section they just jumped to. */
  function initQuietAnchors() {
    /* let CSS decide the manner of the scroll: html has scroll-behavior
       smooth, and the reduced-motion block turns it back to auto. Asking
       for "smooth" here would override that and animate anyway. */
    var still = matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      var id = a.getAttribute("href").slice(1);
      if (!id) return;                      /* a bare "#" isn't a jump */
      var target = document.getElementById(id);
      if (!target) return;

      a.addEventListener("click", function (e) {
        /* cmd/ctrl/shift-click still belongs to the browser — opening an
           in-page link in a new tab should land on the section, and that
           needs the hash left on */
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();

        target.scrollIntoView({ behavior: still ? "auto" : "smooth", block: "start" });

        /* -1 so it can take focus without joining the tab order */
        if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
        /* preventScroll: the smooth scroll is already under way and
           focus() would otherwise snap it straight to the end */
        target.focus({ preventScroll: true });
      });
    });
  }

  /* --------------------------------------------- scroll reveal */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    function showAll() { items.forEach(function (el) { el.classList.add("in"); }); }

    if (!("IntersectionObserver" in window)) { showAll(); return; }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });

    items.forEach(function (el) { io.observe(el); });

    /* Insurance: if the observer somehow never fires, don't leave the
       page invisible. Losing the animation beats losing the content. */
    setTimeout(showAll, 5000);
  }

  /* ------------------------------------------------------ init */
  renderVideos();
  renderProducts();
  renderBrands();
  renderQuotes();
  renderQuotePair();
  renderHashtags();
  renderStats();
  initNav();
  initNavPill();
  initBubbles();
  initCursorBubbles();
  initPortraitBurst();
  initQuietAnchors();
  fillCounts();
  initReveal();

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();

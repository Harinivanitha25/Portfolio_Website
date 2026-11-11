document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- Mobile menu ---------- */
  const btn = document.querySelector(".menu-btn");
  const menu = document.getElementById("menu");

  function setMenu(open) {
    menu.classList.toggle("open", open);
    document.body.classList.toggle("no-scroll", open);
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
  btn.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
  menu.addEventListener("click", (e) => { if (e.target.tagName === "A") setMenu(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
  window.addEventListener("resize", () => { if (innerWidth > 900) setMenu(false); });

  /* ---------- Highlight current section in the nav ---------- */
  const links = [...menu.querySelectorAll("a")];
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    links.forEach((a) => { const s = document.querySelector(a.getAttribute("href")); if (s) io.observe(s); });
  }

  /* ---------- Projects carousel ---------- */
  const track = document.querySelector(".carousel");
  const section = document.getElementById("projects");
  const cards = [...track.children];
  const dotsBox = document.querySelector(".dots");

  // One dot per project
  const dots = cards.map((_, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.setAttribute("aria-label", "Show project " + (i + 1));
    b.addEventListener("click", () => goTo(i));
    dotsBox.appendChild(b);
    return b;
  });

  const step = () => (cards[1] ? cards[1].offsetLeft - cards[0].offsetLeft : track.clientWidth);
  // Furthest position the track can scroll to (fewer than the number of cards when several fit on screen)
  const maxPos = () => Math.max(0, Math.round((track.scrollWidth - track.clientWidth) / step()));
  const pos = () => Math.round(track.scrollLeft / step());
  const atEnd = () => track.scrollLeft >= track.scrollWidth - track.clientWidth - 4;

  // While a smooth scroll is running, remember where it is heading so quick key presses add up
  let target = null;
  let settle;

  function goTo(i) {
    target = Math.max(0, Math.min(maxPos(), i));
    track.scrollTo({ left: target * step(), behavior: "smooth" });
  }
  function mark() {
    const active = atEnd() ? cards.length - 1 : pos();
    dots.forEach((d, k) => d.setAttribute("aria-current", String(k === active)));
  }

  track.addEventListener("scroll", () => {
    requestAnimationFrame(mark);
    clearTimeout(settle);
    settle = setTimeout(() => { target = null; }, 150);
  }, { passive: true });
  window.addEventListener("resize", mark);
  mark();

  /* ---------- Left / Right arrow keys move the project cards ---------- */
  // Active only while the Projects section is in the middle of the screen,
  // so the keys never get hijacked in other sections.
  let projectsInView = false;
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([en]) => { projectsInView = en.isIntersecting; },
      { rootMargin: "-30% 0px -30% 0px" }).observe(section);
  } else {
    projectsInView = true;
  }

  document.addEventListener("keydown", (e) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;           // leave browser shortcuts alone
    if (!projectsInView) return;
    const t = e.target;
    if (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return;  // typing in a form field
    e.preventDefault();
    const from = target !== null ? target : pos();
    goTo(from + (e.key === "ArrowRight" ? 1 : -1));
  });
});
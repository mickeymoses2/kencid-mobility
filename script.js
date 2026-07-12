const body = document.body;
body.classList.add("js");
const menu = document.querySelector("#mobile-menu");
const openButton = document.querySelector(".menu-toggle");
const closeControls = document.querySelectorAll("[data-menu-close]");
const menuLinks = document.querySelectorAll(".sidebar-nav a, .sidebar-contact");

function setMenu(open) {
  body.classList.toggle("menu-open", open);
  openButton.setAttribute("aria-expanded", String(open));
  menu.setAttribute("aria-hidden", String(!open));

  if (open) {
    menu.querySelector(".sidebar-close").focus();
  } else {
    openButton.focus();
  }
}

openButton.addEventListener("click", () => setMenu(true));
closeControls.forEach((control) => {
  control.addEventListener("click", () => setMenu(false));
});
menuLinks.forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && body.classList.contains("menu-open")) {
    setMenu(false);
  }
});

const canUseCursorDot = window.matchMedia(
  "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
).matches;

if (canUseCursorDot) {
  const cursorDot = document.createElement("span");
  cursorDot.className = "cursor-dot";
  cursorDot.setAttribute("aria-hidden", "true");
  body.append(cursorDot);

  let pointerX = 0;
  let pointerY = 0;
  let frameId = 0;

  function moveCursorDot() {
    cursorDot.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%)`;
    frameId = 0;
  }

  document.addEventListener("pointermove", (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;
    body.classList.add("has-cursor-dot");

    if (!frameId) {
      frameId = window.requestAnimationFrame(moveCursorDot);
    }
  });
}

const solutionsGrid = document.querySelector(".solutions-grid");
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

const interiorTabs = document.querySelectorAll(".interior-tab");
const interiorSlides = document.querySelectorAll(".interior-slide");
const interiorCaption = document.querySelector("[data-interior-caption]");

if (interiorTabs.length && interiorSlides.length) {
  let activeInteriorTab = 0;
  let interiorSlideInterval = 0;

  function setInteriorTab(index) {
    const activeIndex = (index + interiorTabs.length) % interiorTabs.length;
    activeInteriorTab = activeIndex;

    interiorTabs.forEach((tab, tabIndex) => {
      const isActive = tabIndex === activeIndex;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
      tab.setAttribute("tabindex", isActive ? "0" : "-1");
    });

    interiorSlides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === activeIndex);
    });

    if (interiorCaption) {
      interiorCaption.textContent = interiorTabs[activeIndex].textContent.trim();
    }
  }

  function restartInteriorSlideshow() {
    if (prefersReducedMotion) return;

    window.clearInterval(interiorSlideInterval);
    interiorSlideInterval = window.setInterval(() => {
      setInteriorTab(activeInteriorTab + 1);
    }, 4500);
  }

  interiorTabs.forEach((tab, tabIndex) => {
    tab.addEventListener("click", () => {
      setInteriorTab(tabIndex);
      restartInteriorSlideshow();
    });

    tab.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;

      event.preventDefault();
      const direction = event.key === "ArrowRight" ? 1 : -1;
      const nextIndex = (tabIndex + direction + interiorTabs.length) % interiorTabs.length;
      setInteriorTab(nextIndex);
      restartInteriorSlideshow();
      interiorTabs[nextIndex].focus();
    });
  });

  setInteriorTab(0);
  restartInteriorSlideshow();
}

const aboutSection = document.querySelector(".about-section");

if (aboutSection && !prefersReducedMotion) {
  const aboutObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        aboutSection.classList.add("in-view");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.25 },
  );

  aboutObserver.observe(aboutSection);
}

if (solutionsGrid && !prefersReducedMotion) {
  const cards = solutionsGrid.querySelectorAll(".solution-card");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        cards.forEach((card, index) => {
          card.style.transitionDelay = `${index * 90}ms`;
          card.addEventListener(
            "transitionend",
            () => {
              card.style.transitionDelay = "";
            },
            { once: true },
          );
        });

        solutionsGrid.classList.add("in-view");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.2 },
  );

  observer.observe(solutionsGrid);
}

const aboutPillars = document.querySelector(".about-pillars");

if (aboutPillars && !prefersReducedMotion) {
  const pillars = aboutPillars.querySelectorAll("li");

  const pillarsObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        pillars.forEach((pillar, index) => {
          pillar.style.transitionDelay = `${index * 110}ms`;
          pillar.addEventListener(
            "transitionend",
            () => {
              pillar.style.transitionDelay = "";
            },
            { once: true },
          );
        });

        aboutPillars.classList.add("in-view");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.4 },
  );

  pillarsObserver.observe(aboutPillars);
}

const aboutCta = document.querySelector(".about-cta");

if (aboutCta && !prefersReducedMotion) {
  const ctaObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        aboutCta.classList.add("in-view");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.6 },
  );

  ctaObserver.observe(aboutCta);
}

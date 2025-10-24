document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "50px 0px",
    }
  );

  const target = document.querySelector(".pricing");
  if (target) {
    observer.observe(target);

    // immediate fallback for mobile
    if (target.getBoundingClientRect().top < window.innerHeight) {
      target.classList.add("visible");
    }
  }
});

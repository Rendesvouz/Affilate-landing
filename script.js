document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "-100px",
    }
  );

  const pricingSection = document.querySelector(".pricing");
  if (pricingSection) {
    observer.observe(pricingSection);
  }
});

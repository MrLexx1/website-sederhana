document.querySelectorAll("nav .menu ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = this.getAttribute("href");
    const scrollToTarget = document.querySelector(target);

    scrollToTarget.scrollIntoView({
      behavior: "smooth",
    });

    document.querySelectorAll("nav .menu ul li a").forEach((link) => {
      link.classList.remove("active");
    });
    this.classList.add("active");
  });
});

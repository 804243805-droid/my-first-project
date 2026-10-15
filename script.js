/**
 * 渐进增强脚本：跟随滚动位置高亮当前所在的导航项。
 *
 * 页面在禁用 JavaScript 时依然完整可用——锚点跳转由原生 <a href="#..."> 完成，
 * 平滑滚动与悬停动效全部交给 CSS（包含 prefers-reduced-motion 处理）。
 * 这里只做 CSS 做不到的事：判断当前处于哪个板块。
 */
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!sections.length || !("IntersectionObserver" in window)) return;

  const visibleSections = new Set();

  const setCurrent = (id) => {
    navLinks.forEach((link) => {
      const isCurrent = id !== null && link.getAttribute("href") === `#${id}`;
      link.classList.toggle("is-active", isCurrent);

      if (isCurrent) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSections.add(entry.target.id);
        } else {
          visibleSections.delete(entry.target.id);
        }
      });

      // sections 保持文档顺序，取最靠上的可见板块作为当前板块
      const current = sections.find((section) => visibleSections.has(section.id));
      setCurrent(current ? current.id : null);
    },
    {
      // 观察带：吸顶导航下方，到视口上方 40% 之间的一条窄带
      rootMargin: "-96px 0px -60% 0px",
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));
});

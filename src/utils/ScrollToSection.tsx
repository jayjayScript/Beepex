export const scrollToSection = (id: string, offset = 80, duration = 700) => {
  const easeInOutQuad = (t: number) =>
    t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  const section = document.getElementById(id);
  if (!section) return;

  const targetY = section.offsetTop - offset;
  const startY = window.scrollY;
  const distanceY = targetY - startY;
  let startTime: number | null = null;

  const step = (currentTime: number) => {
    if (!startTime) startTime = currentTime;
    const time = Math.min(1, (currentTime - startTime) / duration);
    const easedTime = easeInOutQuad(time);

    window.scrollTo(0, startY + distanceY * easedTime);

    if (time < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

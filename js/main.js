document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (!toggle || !mobileNav) return;

  toggle.addEventListener('click', () => {
    const willOpen = !mobileNav.classList.contains('is-open');
    mobileNav.classList.toggle('is-open', willOpen);
    toggle.setAttribute('aria-expanded', String(willOpen));
  });

  // メニュー内リンクを押したら閉じる
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // PC幅に戻ったら閉じる
  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) {
      mobileNav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
});

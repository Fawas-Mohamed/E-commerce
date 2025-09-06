
function myFunction() {
  const btn = document.getElementById('cat-btn');
  const menu = document.getElementById('cat-menu');
  if (!btn || !menu) return;

  if (menu.classList.contains('show')) {
    closeDropdown(btn, menu);
  } else {
    openDropdown(btn, menu);
  }
}

function openDropdown(btn, menu) {
  const items = ensureMenuSetup(btn, menu);
  menu.classList.add('show');
  btn.setAttribute('aria-expanded', 'true');
  menu.setAttribute('aria-hidden', 'false');
  items.forEach(i => i.setAttribute('tabindex', '0'));
  if (items.length) items[0].focus();
  document.addEventListener('click', outsideClickHandler);
}

function closeDropdown(btn, menu, restoreFocus = true) {
  const items = Array.from(menu.querySelectorAll('a, button, [role="menuitem"]'));
  menu.classList.remove('show');
  btn.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-hidden', 'true');
  items.forEach(i => i.setAttribute('tabindex', '-1'));
  if (restoreFocus) btn.focus();
  document.removeEventListener('click', outsideClickHandler);
}

function outsideClickHandler(e) {
  const btn = document.getElementById('cat-btn');
  const menu = document.getElementById('cat-menu');
  if (!btn || !menu) return;
  if (!btn.contains(e.target) && !menu.contains(e.target)) {
    closeDropdown(btn, menu, false);
  }
}

function ensureMenuSetup(btn, menu) {
  menu.setAttribute('role', menu.getAttribute('role') || 'menu');
  btn.setAttribute('aria-haspopup', 'true');
  if (!btn.hasAttribute('aria-expanded')) btn.setAttribute('aria-expanded', 'false');
  if (!menu.hasAttribute('aria-hidden')) menu.setAttribute('aria-hidden', 'true');

  const items = Array.from(menu.querySelectorAll('a, button, [role="menuitem"]'));
  items.forEach(item => {
    if (!item.hasAttribute('role')) item.setAttribute('role', 'menuitem');
    if (!item.hasAttribute('tabindex')) item.setAttribute('tabindex', '-1');
  });
  return items;
}

(function attachHandlers() {
  const btn = document.getElementById('cat-btn');
  const menu = document.getElementById('cat-menu');
  if (!btn || !menu) return;
  ensureMenuSetup(btn, menu);
  btn.addEventListener('keydown', (e) => {
    const items = Array.from(menu.querySelectorAll('a, button, [role="menuitem"]'));
    if (e.key === 'ArrowDown' || e.key === 'Down') {
      e.preventDefault();
      if (!menu.classList.contains('show')) openDropdown(btn, menu);
      else items[0]?.focus();
    } else if (e.key === 'ArrowUp' || e.key === 'Up') {
      e.preventDefault();
      if (!menu.classList.contains('show')) openDropdown(btn, menu);
      else items[items.length - 1]?.focus();
    } else if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault();
      myFunction(); 
    } else if (e.key === 'Escape' || e.key === 'Esc') {
      if (menu.classList.contains('show')) closeDropdown(btn, menu);
    }
  });

  menu.addEventListener('keydown', (e) => {
    const items = Array.from(menu.querySelectorAll('a, button, [role="menuitem"]'));
    const currentIndex = items.indexOf(document.activeElement);

    if (e.key === 'ArrowDown' || e.key === 'Down') {
      e.preventDefault();
      const next = (currentIndex + 1) % items.length;
      items[next]?.focus();
    } else if (e.key === 'ArrowUp' || e.key === 'Up') {
      e.preventDefault();
      const prev = (currentIndex - 1 + items.length) % items.length;
      items[prev]?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      items[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      items[items.length - 1]?.focus();
    } else if (e.key === 'Escape' || e.key === 'Esc') {
      e.preventDefault();
      closeDropdown(btn, menu);
    } else if (e.key === 'Tab') {
      closeDropdown(btn, menu, false);
    }
  });
  const items = Array.from(menu.querySelectorAll('a, button, [role="menuitem"]'));
  items.forEach(it => it.addEventListener('click', () => closeDropdown(btn, menu, false)));
  document.addEventListener('keydown', (e) => {
    if ((e.key === 'Escape' || e.key === 'Esc') && menu.classList.contains('show')) {
      closeDropdown(btn, menu);
    }
  });
})();

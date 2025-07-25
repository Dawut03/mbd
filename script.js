const translations = {
  ru: { points: 'Баллы', clicks: 'Клики', click: 'НАЖМИ', shop: 'Магазин', tasks: 'Задания', social: 'Наши соцсети', comingSoon: 'Скоро будет доступно!' },
  en: { points: 'Points', clicks: 'Clicks', click: 'CLICK', shop: 'Shop', tasks: 'Tasks', social: 'Our Socials', comingSoon: 'Coming soon!' },
  tm: { points: 'Bally', clicks: 'Çykma', click: 'BASYŇ', shop: 'Dükan', tasks: 'Wezipeler', social: 'Sosiallar', comingSoon: 'Ýakynda!' },
  tr: { points: 'Puan', clicks: 'Tıklama', click: 'TIKLA', shop: 'Mağaza', tasks: 'Görevler', social: 'Sosyal Medya', comingSoon: 'Yakında!' }
};

function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
}

let lang = localStorage.getItem('lang') || 'ru';
setLanguage(lang);

// Tabs
function switchTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
}

// Click logic
updateUI();
updateTimer();
setInterval(updateTimer, 1000);
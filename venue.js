/* «Ёлка»: часы по томскому времени и подпись, какие адреса открыты прямо сейчас */
(function () {
  var cl = document.querySelectorAll('[data-clock]');
  function tick() {
    var d = new Date(Date.now() + 7 * 3600e3), h = d.getUTCHours(), m = d.getUTCMinutes();
    cl.forEach(function (e) { e.textContent = (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m; });
    var box = document.querySelector('[data-now4]'), say = document.querySelector('[data-say4]');
    if (!box || !say) return;
    var on = box.querySelectorAll('.st.on').length;
    say.textContent = on >= 4 ? 'Сейчас открыты все четыре Ёлки.' : on <= 1 ? 'Сейчас открыт только Дворец. Остальные Ёлки откроются утром.' : 'Сейчас открыто адресов: ' + on + ' из 4.';
  }
  tick(); setInterval(tick, 15000);
})();

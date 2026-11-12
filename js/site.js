(function () {
  "use strict";

  var promo = document.getElementById("promo");
  if (!promo) return;

  var until = promo.getAttribute("data-until");
  if (!until || !/^\d{4}-\d{2}-\d{2}$/.test(until)) return;

  // Valid through the end of data-until in Oklahoma.
  // December is Central Standard Time (UTC−6).
  var end = Date.parse(until + "T23:59:59-06:00");
  if (!Number.isNaN(end) && Date.now() > end) promo.remove();
})();

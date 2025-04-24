// Simple JS to load nav, footer, and header
fetch("nav.html")
  .then((res) => res.text())
  .then(
    (data) => (document.getElementById("nav-placeholder").innerHTML = data)
  );

fetch("footer.html")
  .then((res) => res.text())
  .then(
    (data) => (document.getElementById("footer-placeholder").innerHTML = data)
  );

fetch("header.html")
  .then((res) => res.text())
  .then(
    (data) => (document.getElementById("header-placeholder").innerHTML = data)
  );

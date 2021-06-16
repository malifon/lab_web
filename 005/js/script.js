const menu_selector = document.getElementById("menu-select");

menu_selector.addEventListener("change", (e) => {
  const url = e.target.value;
  window.location.href = `./${url}`;
});

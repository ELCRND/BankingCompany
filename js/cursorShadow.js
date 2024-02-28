const item = document.querySelector(".shadow");

document.onmousemove = function (e) {
  item.style.position = "fixed";
  item.style.left = e.clientX + "px";
  item.style.top = e.clientY + "px";
};

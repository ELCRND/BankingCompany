const item = document.querySelector(".shadow");

window.addEventListener("resize", (e) => {
  e.target.innerWidth >= 1024
    ? document.addEventListener("mousemove", (e) => {
        item.style.position = "fixed";
        item.style.left = e.clientX + "px";
        item.style.top = e.clientY + "px";
      })
    : document.removeEventListener("mousemove", (e) => {
        item.style.position = "fixed";
        item.style.left = e.clientX + "px";
        item.style.top = e.clientY + "px";
      });
});

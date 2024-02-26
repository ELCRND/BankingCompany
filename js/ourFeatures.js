const onlineBacnking = document.querySelector(
  "[data-content='Online_Banking']"
);
const financialTools = document.querySelector(
  "[data-content='Financial_Tools']"
); // lorem content
const customerSupport = document.querySelector(
  "[data-content='Customer_Support']"
); // lorem content
const featuresToggle = document.querySelectorAll(".features-toggle");

const onlineBacnkingAttr = onlineBacnking.getAttribute("data-content");
const financialToolsAttr = financialTools.getAttribute("data-content");
const customerSupportAttr = customerSupport.getAttribute("data-content");

featuresToggle.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.id === onlineBacnkingAttr) {
      onlineBacnking.classList.remove("hidden");
      financialTools.classList.add("hidden");
      customerSupport.classList.add("hidden");
      return;
    }
    if (e.target.id === financialToolsAttr) {
      onlineBacnking.classList.add("hidden");
      financialTools.classList.remove("hidden");
      customerSupport.classList.add("hidden");
      return;
    }
    if (e.target.id === customerSupportAttr) {
      onlineBacnking.classList.add("hidden");
      financialTools.classList.add("hidden");
      customerSupport.classList.remove("hidden");
      return;
    }
  });
});

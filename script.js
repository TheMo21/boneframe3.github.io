// get btn elements
const aboutBtn = document.getElementById("about-btn");
const pricingBtn = document.getElementById("pricing-btn");
const galleryBtn = document.getElementById("gallery-btn");
const contactBtn = document.getElementById("contact-btn");
const formContainer = document.querySelector("form-container");
const body = document.querySelector("body");

// get all content blocks
const contentNodes = document.querySelectorAll(".content");

const scrollToNode = function (i) {
  contentNodes[i].scrollIntoView();
};
// give btn elements on click scroll

aboutBtn.onclick = () => {
  scrollToNode(0);
};

galleryBtn.onclick = () => {
  scrollToNode(1);
};

contactBtn.onclick = () => {
  formContainer.classList.toggle("show");
  body.classList.toggle("disable-scrolling");
};

window.addEventListener("click", (event) => {
  let form = document.querySelector("form");

  if (
    event.target.parentNode !== form &&
    event.target !== contactBtn &&
    formContainer.classList.contains("show")
  ) {
    formContainer.classList.remove("show");
    body.classList.remove("disable-scrolling");
  }
});

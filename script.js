// get btn elements
const aboutBtn = document.getElementById("about-btn");
const pricingBtn = document.getElementById("pricing-btn");
const galleryBtn = document.getElementById("gallery-btn");
const contactBtn = document.getElementById("contact-btn");
const form = document.querySelector("form-container");

// get all content blocks
const contentNodes = document.querySelectorAll(".content");

const scrollToNode = function (i) {
  contentNodes[i].scrollIntoView();
};
// give btn elements on click scroll

aboutBtn.onclick = () => {
  scrollToNode(0);
};

pricingBtn.onclick = () => {
  scrollToNode(1);
};

galleryBtn.onclick = () => {
  scrollToNode(2);
};

contactBtn.onclick = () => {
  console.log(form);
  form.classList.toggle(".show");
};

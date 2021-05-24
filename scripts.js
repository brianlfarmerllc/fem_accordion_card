// DOM selectors
const arrow = document.querySelectorAll(".arrow");
const paragraph = document.querySelectorAll("p");
const header4 = document.querySelectorAll("h4");

// Functions

function viewParagraph() {
  // Var
  const arrowImg = this.closest("div").children[1];
  const pText = this.closest(".text-container").children[1];
  const h4Text = this.closest("div").children[0];
  console.log(this.className);

  if (this.className != "dark") {
    arrow.forEach((el) => el.classList.remove("active"));
    paragraph.forEach((el) => el.classList.remove("view"));
    header4.forEach((el) => el.classList.remove("dark"));
    arrowImg.classList.toggle("active");
    h4Text.classList.toggle("dark");
    pText.classList.toggle("view");
  } else {
    arrow.forEach((el) => el.classList.remove("active"));
    paragraph.forEach((el) => el.classList.remove("view"));
    header4.forEach((el) => el.classList.remove("dark"));
  }
}

// Events Handelers

arrow.forEach((el) => {
  el.addEventListener("click", viewParagraph);
});
header4.forEach((el) => {
  el.addEventListener("click", viewParagraph);
});

const acc = document.querySelectorAll(".price-box__title");
console.log(acc);

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    console.log ("нажал");
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
}
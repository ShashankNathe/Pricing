const pricebtn = document.querySelectorAll(".pricebtn");
const addbtn = document.querySelectorAll("span.show");
const removebtn = document.querySelectorAll("span.hide");
const price1 = document.querySelector(".price1");
const price2 = document.querySelector(".price2");
const price3 = document.querySelector(".price3");

const yearprice = [17, 32, 52];
const monthprice = [24, 39, 79];

pricebtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.previousElementSibling) {
      btn.previousElementSibling.classList.remove("active");
      btn.classList.add("active");
    } else if (btn.nextElementSibling) {
      btn.classList.add("active");
      btn.nextElementSibling.classList.remove("active");
    }
    if (btn.textContent === "Yearly") {
      price1.textContent = yearprice[0];
      price2.textContent = yearprice[1];
      price3.textContent = yearprice[2];
    } else if (btn.textContent === "Monthly") {
      price1.textContent = monthprice[0];
      price2.textContent = monthprice[1];
      price3.textContent = monthprice[2];
    }
  });
});

addbtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const text = btn.parentElement.parentElement.nextElementSibling;
    text.classList.remove("hide");
    btn.classList.remove("show");
    btn.classList.add("hide");
    btn.nextElementSibling.classList.remove("hide");
  });
});
removebtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const text = btn.parentElement.parentElement.nextElementSibling;
    text.classList.add("hide");
    btn.classList.add("hide");
    btn.previousElementSibling.classList.remove("hide");
    btn.previousElementSibling.classList.add("show");
  });
});

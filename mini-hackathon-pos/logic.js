let roomThree = document.getElementById("threeStar");
let roomFour = document.getElementById("fourStar");
let roomFive = document.getElementById("fiveStar");
let roomPent = document.getElementById("pentHouse");
let backToList = document.getElementById("backToList");

let elRoom = document.getElementById("elRoom");
let elOption = document.getElementById("elOption");
let selectedRoom = document.getElementById("selectedRoom");

let stayNightOption = document.getElementById("stayNightOption");
let guestNoOption = document.getElementById("guestNoOption");
let roomServiceOption = document.getElementById("roomServiceOption");
let breakfastOption = document.getElementById("breakfastOption");

let addOption = document.getElementById("addOption");
let optionSummary = document.getElementsByClassName("summary");
let totalPrice = document.getElementById("totalPrice");
let totalPriceValue;

roomThree.addEventListener("click", addCart);
roomFour.addEventListener("click", addCart);
roomFive.addEventListener("click", addCart);
roomPent.addEventListener("click", addCart);
addOption.addEventListener("click", applyOption);
backToList.addEventListener("click", back);

function back() {
  elRoom.style.display = "flex";
  elOption.style.display = "none";
}
function addCart() {
  elRoom.style.display = "none";
  elOption.style.display = "block";
  selectedRoom.innerText = this.children[1].children[1].innerText;
  totalPriceValue = Number(this.dataset.price);
}

function applyOption() {
  optionSummary[0].children[1].innerHTML = stayNightOption.value;
  optionSummary[0].children[3].innerHTML = guestNoOption.value;
  optionSummary[0].children[5].innerHTML = roomServiceOption.value;
  optionSummary[0].children[7].innerHTML = breakfastOption.value;
  totalPrice.innerText =
    totalPriceValue * stayNightOption.value +
    guestNoOption.value * 10 +
    (roomServiceOption.value === "A class" ? 30 : 50) +
    (breakfastOption.value === "Yes" ? 10 : 0);
}

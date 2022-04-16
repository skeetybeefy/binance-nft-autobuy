console.log("********SCRIPT HAS STARTED********")

const btnContainerClass = ".css-1ate4o7" // on an item page
const btnsContainerClass = ".css-sr9689" // on a modal window (Confirm buy window)
const btnContainer = document.querySelector(btnContainerClass)
let buyInterval = setInterval(buy, 1);
let confirmInterval;

function buy() {
  if (btnContainer.querySelector("button")) {
    btnContainer.querySelector("button").click();
    clearInterval(buyInterval)
    confirmInterval = setInterval(confirm, 1)
  }
}

function confirm() {
  const btnsContainer = document.querySelector(btnsContainerClass)
  if (btnsContainer !== null) {
    const btns = btnsContainer.querySelectorAll("button")
    for (let i = 1; i >= 0; i--) {
      if (btns[i].textContent === "Confirm") {
        btns[i].click()
        clearInterval(confirmInterval)
      }
    }
  }
}
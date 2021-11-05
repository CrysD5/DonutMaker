// Instantiate new object
const donutMaker = new DonutMaker()

// target HTML classes
const aboutGame = document.querySelector(".about-game")
const aboutCrys = document.querySelector(".about-Crys")
const inspiration = document.querySelector(".inspiration")
const resetBtn = document.querySelector(".reset")

const dCount = document.querySelector(".d-count")
const dBtn = document.querySelector(".make-donut")
const dVal = document.querySelector(".donut-value")

const acValue = document.querySelector(".ac-count")
const acBtn = document.querySelector(".ac-btn")
const acCost = document.querySelector(".ac-cost")

const multiplierCount = document.querySelector(".m-count")
const multiplierBtn = document.querySelector(".m-btn")
const multiplierCost = document.querySelector(".m-cost")

// text boxes & Reset button functionality
const about = () => {
    if  (aboutGame.style.display === "block") {
     aboutGame.style.display = "none"
    } else {
     aboutGame.style.display = "block"
    }
}

const showCrys = () => {
    if (aboutCrys.style.display === "block") {
        aboutCrys.style.display = "none"
    } else {
        aboutCrys.style.display = "block"
    }
}

const inspire = () => {
    if (inspiration.style.display === "block") {
        inspiration.style.display = "none"
    } else {
        inspiration.style.display = "block"
    }
}

const clearScreen = resetBtn => {
    resetBtn.addEventListener("click", () => {
        location.reload()
    })
}

// Create update functions
const updateDonutCount = (donutCount, donutMaker) => {
    donutCount.textContent = Math.round(donutMaker.getDonutCount())
}

const updateAutoClickerCount = (acValue, donutMaker) => {
    acValue.textContent = Math.round(donutMaker.getAutoClickerCount())
}

const updateAutoClickerCost = (acCost, donutMaker) => {
    acCost.textContent = Math.round(donutMaker.getAutoClickerCost())
}

const updateMultiplierCount = (MultiplierCount, donutMaker) => {
    MultiplierCount.textContent = Math.round(donutMaker.getMultiplierCount())
}

const updateMultiplierCost = (multiplierCost, donutMaker) => {
    multiplierCost.textContent = Math.round(donutMaker.getMultiplierCost())
}

const updateDonutValue = (dVal, donutMaker) => {
    dVal.textContent = donutMaker.getDonutValue().toFixed(1)
}

// Create aClicker
const autoClicker = setInterval(autoClick, 1000)

function autoClick() {
    updateDonutCount(dCount, donutMaker)
    donutMaker.makeAutoClickerWork()
    enableAutoClickerBtn()
    enableMultiplierBtn()
}

// button function
const makeDonutBtn = (donutBtn, donutCount, donutMaker) => {
    donutBtn.addEventListener("click", () => {
        donutMaker.donutClicked()
        updateDonutCount(donutCount, donutMaker)
    })
}

const makeAutoClickerBtn = (acValue, acBtn, acCost, donutMaker) => {
    acBtn.addEventListener("click", () => {
        donutMaker.addAutoClicker()
        updateAutoClickerCount(acValue, donutMaker)
        updateAutoClickerCost(acCost, donutMaker)
    })
}

const makeMultiplierBtn = (
    multiplierCount,
    multiplierBtn,
    multiplierCost,
    donutMaker
) => {
    multiplierBtn.addEventListener("click", () => {
        donutMaker.addMultiplier()
        updateMultiplierCount(multiplierCount, donutMaker)
        updateMultiplierCost(multiplierCost, donutMaker)
        updateDonutValue(dVal, donutMaker)
    })
}


function enableAutoClickerBtn() {
    if (donutMaker.donutClick >= donutMaker.autoClickerCost) {
        acBtn.removeAttribute("disabled")
    } else {
        acBtn.disabled = true
    }
}

function enableMultiplierBtn() {
    if (donutMaker.donutClick >= donutMaker.multiplierCost) {
        multiplierBtn.removeAttribute("disabled")
    } else {
        multiplierBtn.disabled = true
    }
}

// Call functions
makeDonutBtn(dBtn, dCount, donutMaker)

makeAutoClickerBtn(acValue, acBtn, acCost, donutMaker)

makeMultiplierBtn(multiplierCount, multiplierBtn, multiplierCost, donutMaker)

updateDonutValue(dVal, donutMaker)

clearScreen(resetBtn)
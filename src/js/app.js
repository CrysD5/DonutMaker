// instantiate variables and constants here
import {DonutMaker} from "./donutMaker";

let newDonutMaker = new DonutMaker();

const donutBtn = document.getElementById("clickDonut");
const autoClickButton = document.getElementById("autoClickBtn");
const counter = document.getElementById("countDonuts");
const multiClickButton = document.getElementById("donutMultiBtn");
const autoDisplay = document.getElementById("autoClickDisplay");
const multiplierDisplay = document.getElementById("donutMultiDisplay");
const autoClickCost = document.getElementById("autoClick-currentCost");
const multiplierCost = document.getElementById("donutMulti-currentCost");
const resetBtn = document.getElementById("reset");
const perSec = document.getElementById("donutsPer");

//event listeners go here

donutBtn.addEventListener("click",() =>{
    newDonutMaker.clickRecord();
    counter.innerText = `${Math.round(
        newDonutMaker.currentDonutCount
    )} Donuts`;
});

autoClickButton.addEventListener("click", () => {
    newDonutMaker.buyAuto();

    counter.innerText = `${Math.round(
        newDonutMaker.currentDonutCount
    )} Donuts`;

    autoDisplay.innerText = `${newDonutMaker.autoCount} Auto-Clickers Owned`;
    autoClickCost.innerText = `Current auto-clicker Cost: ${Math.round(
        newDonutMaker.autoCost
    )} donuts`;
    perSec.innerText = `You're making ${newDonutMaker.perSecCount} donuts per second`;
});

multiClickButton.addEventListener("click", () => {
    newDonutMaker.buyMulti();

    counter.innerText = `${Math.round(
        newDonutMaker.currentDonutCount
    )} Donuts`;
    multiplierDisplay.innerText = `${newDonutMaker.multiplierCount} Donut Multipliers Owned`;
    multiplierCost.innerText = `Current donut multiplier cost: ${Math.round(
        newDonutMaker.multiplierCost
    )} donuts`;
    perSec.innerText = `You're making ${newDonutMaker.perSecCount} donuts per second`;

})

resetBtn.addEventListener("click", () => {
    newDonutMaker.clickCount = 0;
    newDonutMaker.multiplierCount = 0;
    newDonutMaker.autoClickCount = 0;
    newDonutMaker.multiplierCost = 10;
    newDonutMaker.autoCost = 100;
    autoDisplay.innerText = `${newDonutMaker.autoCount} Auto-Clickers Owned`;
    autoClickCost.innerText = `Current auto-clicker cost: ${Math.round(
    newDonutMaker.autoCost
  )} donuts`;
    multiplierDisplay.innerText = `${newDonutMaker.multiplierCount} Donut Multipliers Owned`;
    multiplierCost.innerText = `Current donut multiplier cost: ${Math.round(
    newDonutMaker.multiplierCost
  )} donuts`;
    perSec.innerText = `You're making ${newDonutMaker.perSecCount} donuts each second`;
});


setInterval(function () {
    newDonutMaker.activateAuto();
    counter.innerText = `${Math.round(
        newDonutMaker.currentDonutCount
    )} Donuts`;

    autoClickButton.disabled = newDonutMaker.clickCount < newDonutMaker.autoCost;

    multiClickButton.disabled = newDonutMaker.clickCount < newDonutMaker.multiplierCost;
}, 1000);

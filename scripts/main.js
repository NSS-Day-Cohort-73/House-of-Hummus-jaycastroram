import { FoodTruck } from "./FoodTruck.js"
import { savePurchase } from "./Sales.js"

const mainContainer = document.querySelector("#container");

const renderAllHTML = async () => {
    mainContainer.innerHTML = await FoodTruck();
    attachEventListeners(); 
}


renderAllHTML();

const attachEventListeners = () => {
    const purchaseButton = document.getElementById("purchase");

    if (purchaseButton) {
        purchaseButton.addEventListener("click", async () => {
            await savePurchase();
            await renderAllHTML(); 
        });
    }
};

const fetchAllPurchases = async () => {
    const response = await fetch("http://localhost:8088/purchases");
    const purchases = await response.json();


    console.log("All Purchases:", purchases);
};

fetchAllPurchases();

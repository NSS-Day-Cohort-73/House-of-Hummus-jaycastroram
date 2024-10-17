import { Sales } from "./Sales.js"
import { Entrees } from "./Entrees.js"
import { Vegetables } from "./Vegetables.js"
import { SideDishes } from "./SideDishes.js"

export const FoodTruck = async () => {
    const entreesHTML = await Entrees();
    const vegetablesHTML = await Vegetables();
    const sidesHTML = await SideDishes();

    const salesHTML = await Sales();

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article class="mealOptions">
            <h2>Entrees</h2>
            <div id="entrees">${entreesHTML}</div>

            <h2>Vegetables</h2>
            <div id="vegetables">${vegetablesHTML}</div>

            <h2>Side Dishes</h2>
            <div id="sideDishes">${sidesHTML}</div>

            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>
    `;
};

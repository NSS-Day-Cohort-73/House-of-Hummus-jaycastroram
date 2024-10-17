import { transientState, clearSelections } from './State.js';

export const savePurchase = async () => {
    if (!transientState.entreeId || !transientState.vegetableId || !transientState.sideDishId) {
        alert("Please select one option from each category.");
        return;
    }

    const purchase = {
        entreeId: transientState.entreeId,
        vegetableId: transientState.vegetableId,
        sideDishId: transientState.sideDishId,
        totalCost: calculateTotal()
    };

    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(purchase)
    };

    await fetch("http://localhost:8088/purchases", postOptions);
    clearSelections(); 
};

export const Sales = async () => {
    const response = await fetch("http://localhost:8088/purchases");
    const purchases = await response.json();

    return purchases.map((purchase, index) => {
        const totalCost = purchase.totalCost !== null && purchase.totalCost !== undefined ? purchase.totalCost : 0;
        
        return `<div>Receipt #${index + 1} = $${totalCost.toFixed(2)}</div>`;
    }).join("");
};


const calculateTotal = () => {
    const entreePrice = transientState.entreePrice || 0;
    const vegetablePrice = transientState.vegetablePrice || 0;
    const sideDishPrice = transientState.sideDishPrice || 0;

    return entreePrice + vegetablePrice + sideDishPrice;
};


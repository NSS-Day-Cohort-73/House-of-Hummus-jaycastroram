export let transientState = {
    entreeId: null,
    vegetableId: null,
    sideDishId: null,
    entreePrice: 0,
    vegetablePrice: 0,
    sideDishPrice: 0
};

document.addEventListener("change", (event) => {
    if (event.target.name === "entree") {
        transientState.entreeId = parseInt(event.target.value);
        transientState.entreePrice = parseFloat(event.target.dataset.price);
    } else if (event.target.name === "vegetable") {
        transientState.vegetableId = parseInt(event.target.value);
        transientState.vegetablePrice = parseFloat(event.target.dataset.price);
    } else if (event.target.name === "sideDish") {
        transientState.sideDishId = parseInt(event.target.value);
        transientState.sideDishPrice = parseFloat(event.target.dataset.price);
    }
});

export const clearSelections = () => {
    transientState = {
        entreeId: null,
        vegetableId: null,
        sideDishId: null,
        entreePrice: 0,
        vegetablePrice: 0,
        sideDishPrice: 0
    };
};

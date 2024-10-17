export const Entrees = async () => {
    const response = await fetch("http://localhost:8088/entrees");
    const entrees = await response.json();

    return entrees.map(entree => `
        <div>
            <input type="radio" name="entree" value="${entree.id}" data-price="${entree.price}" /> ${entree.name} ($${entree.price})
        </div>
    `).join("");
};

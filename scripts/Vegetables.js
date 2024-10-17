export const Vegetables = async () => {
    const response = await fetch("http://localhost:8088/vegetables");
    const vegetables = await response.json();

    return vegetables.map(vegetable => `
        <div>
            <input type="radio" name="vegetable" value="${vegetable.id}" data-price="${vegetable.price}" /> ${vegetable.type} ($${vegetable.price})
        </div>
    `).join("");
};

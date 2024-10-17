export const SideDishes = async () => {
    const response = await fetch("http://localhost:8088/sides");
    const sides = await response.json();

    return sides.map(sideDish => `
        <div>
            <input type="radio" name="sideDish" value="${sideDish.id}" data-price="${sideDish.price}" /> ${sideDish.title} ($${sideDish.price})
        </div>
    `).join("");
};

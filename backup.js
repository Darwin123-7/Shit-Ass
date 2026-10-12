export function code() {
    const form = document.querySelector("form");
    const input = document.querySelector("input");
    const p = document.createElement("p");
    const cars = ["F1", "Camaro 67", "Ferrari", "Corolla", "Rolls Royce", "Bughatti Chiron"];

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let i = 0;
        while (i < cars.length) {
            if (cars.includes(input.value)) {
                p.textContent = `${input.value} is in the list`;
            }else if (!cars.includes(input.value)) {
                p.textContent = `${input.value} is not in the list`;
            };
            i++;
        }
        form.appendChild(p);
    })
}

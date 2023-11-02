import colors from "palette.json";

const handleEvent = (event) => {
    event.prevent();
    const form = document.getElementById("First-Form");
    const title = form.title.value;
    const color1 = form.color1.value;
    const color2 = form.color2.value;
    const color3 = form.color3.value;
    const temperature = form.temperature.value;
    const formData = new FormData(form);

    console.log(formData);
    const obj  = Object.fromEntries(formData);
    console.log(obj)
}
const createPalette = (title, color1, color2, color3, temperature) => {
    const palette = {
        title: title,
        colors: [color1, color2, color3],
        temperature: temperature
    };
}

const li = document.createElement("li");

li.innerHTML = makeCard(obj)

const ul = document.getElementById("palettes");
ul.appendChild(li)
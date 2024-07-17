import Icon from "../public/more-horz.png";

const createDropdown = () => {
    // Under which container do you want this dropdown
    const container = document.querySelector("#container");

    // What items should go in the dropdown texts
    const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

    let img = document.createElement("img");
    img.src = Icon;
    img.classList.add("icon");
    img.alt = "dropdown";

    container.appendChild(img);

    let dropdown = document.createElement("div");
    dropdown.id = "dropdown";

    container.appendChild(dropdown);

    for (let i = 0; i < items.length; i++) {
        let item = document.createElement("div");
        item.classList.add("item");

        let text = document.createElement("div");
        text.classList.add("text");
        text.innerHTML = items[i];
        item.appendChild(text);

        dropdown.appendChild(item);
    }
};

export default createDropdown;

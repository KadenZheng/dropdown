import toggleState from "./state.js";

const createToggle = () => {
    let icon = document.querySelector(".icon");

    //! Change the dropdown identifier here
    let dropdown = document.querySelector("#dropdown");

    icon.addEventListener("click", () => {
        toggleState() === 0
            ? dropdown.classList.remove("invisible")
            : dropdown.classList.add("invisible");
    });
};

export default createToggle;

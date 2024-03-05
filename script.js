let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = document.querySelector("#Input");
    const container = document.querySelector("#list-task");
    const check_input = inputValue.value.trim();

    if (check_input !== "") {
        if (check_input.match(/^[A-Z a-z 0-9 :]+$/)) {
            container.innerHTML += `<li><input type="checkbox" class="checkbox">${inputValue.value} <i class="fa-solid fa-trash"></i></li>`;
        }
        else alert("String tak re baba");
    }
    else alert("Kuch to de de");

    let close_li = document.querySelectorAll(".fa-solid");
    close_li.forEach(li => {
        li.addEventListener("click", (e) => {
            e.target.parentNode.remove();
        });
    });

    let checkBoxes = document.querySelectorAll(".checkbox");
    checkBoxes.forEach(box => {
        box.addEventListener("click", (evt) => {
            box.parentNode.classList.toggle("check");
        });
    });
    inputValue.value = "";
});







document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = document.querySelector("#Input");
    const container = document.querySelector("#list-task");
    const check_input = inputValue.value.trim();

    if (check_input !== "") {
        if (check_input.match(/^[A-Z a-z 0-9 :]+$/)){
            container.innerHTML += `<li><i class="fa-regular fa-circle-check"></i>${inputValue.value} <i class="fa-solid fa-trash"></i></li>`;
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
    let flag = true;
    let li_list = document.querySelectorAll("li");
    li_list.forEach(li => {
        li.addEventListener("click", (evt) => {
            if (flag) {
                evt.target.style.textDecoration = `line-through`;
                evt.target.style.backgroundColor = "yellow";
                evt.target.firstChild.style.display = `inline-block`;
                flag = false;
            }else{
                evt.target.style.textDecoration = `none`;
                evt.target.style.backgroundColor = "aqua";
                evt.target.firstChild.style.display = `none`;
                flag = true;
            }

        });
    });
    inputValue.value = "";
});






let elForim = document.querySelector(".form");
let elFormInput = elForim.querySelector(".form-input");
let elFormInputcheck  = elForim.querySelectorAll(".input-check");
let elTextBox = document.querySelector(".form-input-text");

let elText = document.createElement("p")
elText.style.opacity = ".5";
elTextBox.appendChild(elText)

elForim.addEventListener("submit", function (evt) {
    evt.preventDefault();

    let inputValue = Number(elFormInput.value);
    
    if(inputValue >= 15 && inputValue < 40) {
        if(elFormInputcheck[0].checked && elFormInputcheck[1].checked) {
           elText.textContent = "Siz zalda yugursangiz bo'ladi";
           elText.style.color = "green";
        }
        else if(elFormInputcheck[0].checked) {
            elText.textContent = "Sizning yugurishingiz yomg'ir sababli hatarli";
            elText.style.color = "red";
        }
        else {
            elText.textContent = "Siz yugursangiz bo'ladi";
            elText.style.color = "green";
        }

        elFormInputcheck[0].removeAttribute("disabled","");
    }
    else if(inputValue > 0 && inputValue < 15) {
        if(elFormInputcheck[0].checked && elFormInputcheck[1].checked) {
            elText.textContent = "Siz zalda yugursangiz bo'ladi";
            elText.style.color = "green";
        }
        else if(elFormInputcheck[0].checked) {
            elText.textContent = "Yomg'ir yog'ayotganligi sababli  yugurishingiz  hatarli";
            elText.style.color = "red";
        }
        else {
            elText.textContent = "Kun sovuqligi sababli yugurishingiz  hatarli";
            elText.style.color = "red";
        }

        elFormInputcheck[0].removeAttribute("disabled", "")
    }
    else if (inputValue <= 0 ) {
        elFormInputcheck[0].removeAttribute("disabled");
        elText.textContent = "Kun juda sovuqligi sababli yugurishingiz hatarli";
        elText.style.color = "red";
    }
    else {
        if(inputValue >= 40) {
            elFormInputcheck[0].checked = false
            elFormInputcheck[0].setAttribute("disabled", "");
        }
        elText.textContent = "Kun juda issiqligi sababli yugurishingiz mumkin emas";
        elText.style.color = "red";
    }
})
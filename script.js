let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

document.querySelector(".ECUTune").addEventListener("click", function() {
    if (counter1 % 2 === 0) {
        this.classList.add("show-description");
        counter1++;
    }
    else {
        this.classList.remove("show-description");
        counter1++;
    }
})

document.querySelector(".TurboKit").addEventListener("click", function() {
    if (counter2 % 2 === 0) {
        this.classList.add("show-description");
        counter2++;
    }
    else {
        this.classList.remove("show-description");
        counter2++;
    }
})

document.querySelector(".TracksideServices").addEventListener("click", function() {
    if (counter3 % 2 === 0) {
        this.classList.add("show-description");
        counter3++;
    }
    else {
        this.classList.remove("show-description");
        counter3++;
    }
})
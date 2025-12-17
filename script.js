const kolory = document.querySelectorAll(".color_box");
const zdjecia = document.querySelectorAll(".photo_product");


kolory.forEach(function(kolor, index) {
    kolor.addEventListener("click", function() {
        zdjecia.forEach(function(img) {
            img.style.display = "none";
        });
        zdjecia[index].style.display = "block";
        kolory.forEach(function(box) {
            box.classList.remove("active");
        });
        kolory[index].classList.add("active");
    });
});

const dodajPrzycisk = document.getElementById("add");
const odejmijPrzycisk = document.getElementById("sub");
let iloscElement = document.getElementById("number");


let ilosc = 1;

dodajPrzycisk.addEventListener("click", dodawanie);
odejmijPrzycisk.addEventListener("click", odejmowanie);

function dodawanie() {
    if (ilosc < 5) {
    ilosc++;
    iloscElement.innerHTML = ilosc;
}}

function odejmowanie() {
    if (ilosc > 1) { 
    ilosc--;
    iloscElement.innerHTML = ilosc;
}}



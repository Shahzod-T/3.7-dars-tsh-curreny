
var elForm = document.querySelector(".header__form")
var elInput = document.querySelector(".info__input")
var elSelect = document.querySelector(".info__select")
var elSpan = document.querySelector(".info__span")

elForm.addEventListener("submit", function (event){
    event.preventDefault();

    var elInputVal = elInput.value;
    var elSelectVal = elSelect.value;
    var currency = elInputVal * elSelectVal

    elSpan.textContent=(`${currency}`)


}
);
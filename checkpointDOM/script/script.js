
// heart
let colr= Array.from(document.querySelectorAll(".fa-heart"))
for (let col of colr){
    col.addEventListener("click",function(){
        col.style.color === 'red' ? col.style.color = 'black' : col.style.color = 'red'
    })
}

// btn delete
let delbtn = Array.from(document.querySelectorAll(".fa-trash-alt"))
for (let del in delbtn){
 delbtn[del].addEventListener('click', function(event){
        event.target.parentElement.parentElement.remove()
total()
    })
}

// button plus
let plusBtns = Array.from(document.querySelectorAll(".plus-btn"))
for (let plusBtn of plusBtns) {
    plusBtn.addEventListener("click", function () {
        plusBtn.nextElementSibling.innerHTML++;
      total()  
    })
}

// button moins
let minusBtns = Array.from(document.querySelectorAll(".minus-btn"))
for (let minusBtn of minusBtns) {
    minusBtn.addEventListener("click", function () {
        minusBtn.previousElementSibling.innerHTML > 0 ? minusBtn.previousElementSibling.innerHTML-- : null;
   total()
    })


}

// price
let totalPrice = document.querySelector(".total-price")
let quantities = Array.from(document.querySelectorAll(".qute"))
let unitPrices = Array.from(document.querySelectorAll(".unit-price"))
function total() {
    let s = 0;
    for (let i in totalPrice) {
        s = s + unitPrices[i].innerText * quantities[i].innerText
    }
    totalPrice.innerText = s
}
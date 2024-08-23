console.log(document)

console.log("hello")

function onChangeValue(){
    let input = document.getElementById("input");
    let total= document.getElementById("total-character");
    let remaining=document.getElementById("remaining-character");
    total.innerText=`Total Character: ${input.value.length}`;
    remaining.innerText=`Remaining :${ 50 - input.value.length}`

}


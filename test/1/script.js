const FORMEL = document.forms.CARD;

const nameEl = document.getElementById('Name');
const accnoEl = document.querySelector("#Cno");
const expiryEl = document.getElementById('Expiry');
const NameINP = document.getElementById('Cname');
const AccINP = document.querySelector("#accNo > p");




accnoEl.addEventListener("input", (event) => {
    const input = event.target.value;
    
    if (/^\d{0,16}$/.test(input)) {
        AccINP.innerText = input.padEnd(16, '\u00A0');

    } else {
        return AccINP.innerText;
    }
});

NameINP.addEventListener("input", (e) => {
   if(nameEl.innerText != e.target.value){
    nameEl.innerText = e.target.value;
   }else{
    return false;
   }
})



nameEl.style.cssText = "padding-top: 15px;padding-left: 5px;color: #fff";
expiryEl.style.cssText = "padding-right: 5px;padding-top: 0;color: #fff; letter-spacing: 2px;";


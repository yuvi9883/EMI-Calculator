const loanamountip = document.querySelector(".loan-amount");
const intrestRateip = document.querySelector(".intrest-rate");
const tenureip = document.querySelector(".tenure");

const loanemi = document.querySelector(".loan-emi .value");
const totalintrest = document.querySelector(".total-intrest .value");
const totalamount = document.querySelector(".Total-Amount .value");

const calculatebtn = document.querySelector(".btn");

let loanamount = parseFloat(loanamountip.value);
let intrestrate = parseFloat(intrestRateip.value);
let tenure = parseFloat(tenureip.value);

let intrest = intrestrate / 12/100 ;

let calculateEmi = () => {
    let emi = loanamount * intrest * (((1+intrest)**tenure)/(((1+intrest)**tenure)-1));
return emi;
};

const updateDate = (emi) =>{
    loanemi.innerHTML = Math.round(emi);
    let amount = Math.round(tenure*emi);
    totalamount.innerHTML = amount;
    let intrest = Math.round(amount-loanamount);
    totalintrest.innerHTML = intrest;
}
const refreshInputValues =()=>{
    loanamount = parseFloat(loanamountip.value);
    intrestrate = parseFloat(intrestRateip.value);
    tenure = parseFloat(tenureip.value);
    intrest = intrestrate / 12/100 ;
}
const init =() =>{
    refreshInputValues();
    let emi = calculateEmi();
    updateDate(emi);
};
init();



calculatebtn.addEventListener("click",init)
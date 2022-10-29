var amount, year, rate;
function changeamount()
{
    amount = document.getElementById("txtatm").value;
    document.getElementById("lblloan").innerHTML = `<b>&#8377; ${amount}<b/>`;
}
function changeyear(){
    year = document.getElementById("txtsbi").value;
    document.getElementById("lblyear").innerHTML = `<b> ${year}<b/>`;
}
function changerate()
{
    rate = document.getElementById("txthdfc").value;
    document.getElementById("lblrate").innerHTML = `<b> ${rate} %<b/>`;
}
function calculator()
{
    var p = parseFloat(amount);
    var n = parseInt(year) * 12;
    var r = parseFloat(rate)/12/100;
    var EMI =  p * r / (1- (Math.pow(1/(1 + r), n)));
    document.getElementById("result").innerHTML = `
       You EMI amount is &#8377; <b>${Math.round(EMI)}</b> per month
    `;
}
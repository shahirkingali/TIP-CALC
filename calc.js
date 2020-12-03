function calculateTip() {

    resetTip();

    var billAmount = document.getElementById("amount").value;
    var tipPercentage = document.getElementById("tip").value;
    var numberOfPeople = document.getElementById("numberPeople").value;

    if (billAmount === "") {
        alert("Please enter bill amount.");
        return;
    }

    function tipCalc() {
        let tipTotal = ((billAmount * 100) * tipPercentage) / 100;
        tipTotal = tipTotal.toFixed(2);
        return tipTotal;
    }

    var totalTip = tipCalc();

    if (numberOfPeople > 1) {
        document.getElementById("multiple").style.display = "block";
        let bill = (billAmount / numberOfPeople);
        let tip = (totalTip / numberOfPeople);
        document.getElementById("totalTipMultiple").innerHTML = tip.toFixed(2);

        let amountEach = parseFloat(bill) + parseFloat(tip);
        document.getElementById("totalAmountEach").innerHTML = amountEach.toFixed(2);

        let multipleTotal = parseFloat(billAmount) + parseFloat(totalTip);
        document.getElementById("billTotalmultiple").innerHTML = multipleTotal.toFixed(2);

    } else {
        document.getElementById("single").style.display = "block";
        let singleTotal = (parseFloat(billAmount) + parseFloat(totalTip));
        document.getElementById("tipAmount").innerHTML = totalTip;
        document.getElementById("billTotal").innerHTML = singleTotal.toFixed(2);
    }
}

resetTip();

function resetTip() {
    document.getElementById("single").style.display = "none";
    document.getElementById("multiple").style.display = "none";
}
const genaretedPinFildvalue = document.getElementById('geanaretedPinFild');

function genaratePin() {
    const pin = Math.round(Math.random() * 10000);
    const pinStr = pin + '';
    if (pinStr.length == 4) {
        genaretedPinFildvalue.value = pinStr;
    }
}
const preveusKeypadFild = document.getElementById('keypad-output-fild');
document.getElementById('number-pad').addEventListener('click', function (event) {
    const keypress = event.target.innerText;
    if (isNaN(keypress)) {
        console.log(keypress);
        if (keypress == 'C') {
            preveusKeypadFild.value = '';
        }
        else if (keypress == '<') {
            preveusKeypadFild.value = preveusKeypadFild.value.slice(0, -1);
        }
    }
    else {

        preveusKeypadFild.value = preveusKeypadFild.value + keypress;
    }
})

function verefyPin() {
    if (preveusKeypadFild.value == genaretedPinFildvalue.value) {
        document.getElementById('match-section').style.display = "block";
        document.getElementById('not-match-section').style.display = "none";

    }
    else {
        document.getElementById('match-section').style.display = "none";
        document.getElementById('not-match-section').style.display = "block";
    }
}
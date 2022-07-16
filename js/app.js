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
        if (keypress == 'C') {
            preveusKeypadFild.value = '';
        }
    }
    else {

        preveusKeypadFild.value = preveusKeypadFild.value + keypress;
    }
})
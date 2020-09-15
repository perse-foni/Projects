const CelciusInput = document.querySelector('#Celcius > input');
const FahrenheitInput = document.querySelector('#Fahrenheit > input');
const KelvinInput = document.querySelector('#Kelvin > input');


function roundNum(num) {
    return Math.round(num * 100) / 100;
}


function celciusToFarenheitAndKelvin() {
    const cTemp = parseFloat(CelciusInput.value);
    const fTemp = (cTemp * (9 / 5)) + 32;
    const kTemp = cTemp + 273.15;
    FahrenheitInput.value = roundNum(fTemp);
    KelvinInput.value = roundNum(kTemp);
}

function fahrenheitToCelciusAndKelvin() {
    const fTemp = parseFloat(FahrenheitInput.value);
    const cTemp = (fTemp - 32) * (5 / 9);
    const kTemp = (fTemp + 459.67) * 5 / 9;
    CelciusInput.value = roundNum(cTemp);
    KelvinInput.value = roundNum(kTemp);

}


function kelvinToCelciusAndFarenheit() {
    const kTemp = parseFloat(KelvinInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp = 9 / 5 * (kTemp - 273) + 32;
    CelciusInput.value = roundNum(cTemp);
    FahrenheitInput.value = roundNum(fTemp);

}


function main() {
    CelciusInput.addEventListener('input', celciusToFarenheitAndKelvin);
    FahrenheitInput.addEventListener('input', fahrenheitToCelciusAndKelvin);
    KelvinInput.addEventListener('input', kelvinToCelciusAndFarenheit);
}

main();



/*CelciusInput.addEventListener('input', function () {
    const cTemp = parseFloat(CelciusInput.value);
    const fTemp = (cTemp * (9 / 5)) + 32;
    const kTemp = cTemp + 273.15;
    FahrenheitInput.value = fTemp;
    KelvinInput.value = kTemp;

});*/
const input = document.getElementById("input");
const convertBtn = document.getElementById("convert-btn");
const lengthValue = document.getElementById("length");
const volumeValue = document.getElementById("volume");
const massValue = document.getElementById("mass");

// Conversion factors
const METER_TO_FEET = 3.281;
const LITER_TO_GALLON = 0.264;
const KILO_TO_POUND = 2.204;

// Utility function to round to three decimal places
const roundToThree = (num) => Math.round(num * 1000) / 1000;

convertBtn.addEventListener("click", function () {
    const value = parseFloat(input.value); // Convert the input value to a number

    // Length conversion
    lengthValue.innerHTML = `
        ${value} meters = ${roundToThree(value * METER_TO_FEET)} feet | 
        ${value} feet = ${roundToThree(value / METER_TO_FEET)} meters`;

    // Volume conversion
    volumeValue.innerHTML = `
        ${value} liters = ${roundToThree(value * LITER_TO_GALLON)} gallons | 
        ${value} gallons = ${roundToThree(value / LITER_TO_GALLON)} liters`;

    // Mass conversion
    massValue.innerHTML = `
        ${value} kilos = ${roundToThree(value * KILO_TO_POUND)} pounds | 
        ${value} pounds = ${roundToThree(value / KILO_TO_POUND)} kilos`;
});

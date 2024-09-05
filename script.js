const input = document.getElementById("input");
const convertBtn = document.getElementById("convert-btn");
const lengthValue = document.getElementById("length");
const volumeValue = document.getElementById("volume");
const massValue = document.getElementById("mass");

const conversionFactors = {
    length: 3.281,
    volume: 0.264,
    mass: 2.204
};

const units = {
    length: ['meters', 'feet'],
    volume: ['liters', 'gallons'],
    mass: ['kilos', 'pounds']
};

function round(value) {
    return Math.round(value * 1000) / 1000;
}

function formatConversion(value, factor, unitFrom, unitTo) {
    const forward = round(value * factor);
    const backward = round(value / factor);
    return `${value} ${unitFrom} = ${forward} ${unitTo} | ${value} ${unitTo} = ${backward} ${unitFrom}`;
}

function updateConversions() {
    const value = parseFloat(input.value);
    if (isNaN(value)) return;

    lengthValue.textContent = formatConversion(value, conversionFactors.length, ...units.length);
    volumeValue.textContent = formatConversion(value, conversionFactors.volume, ...units.volume);
    massValue.textContent = formatConversion(value, conversionFactors.mass, ...units.mass);
}

convertBtn.addEventListener("click", updateConversions);
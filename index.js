const milesDriven = document.getElementById('milesDriven');
const milesPerGallon = document.getElementById('milesPerGallon');
const wagesEarned = document.getElementById('wagesEarned');
const fuelPrice = document.getElementById('fuelPrice');
const timeDriven = document.getElementById('timeDriven');
const calculateBtn = document.getElementById('calculateBtn');


calculateBtn.addEventListener('click', function() {
    const miles = parseFloat(milesDriven.value);
    const mpg = parseFloat(milesPerGallon.value);
    const wages = parseFloat(wagesEarned.value);
    const fuel = parseFloat(fuelPrice.value);
    const time = parseFloat(timeDriven.value);

    const fuelCost = (miles / mpg) * fuel;

    const netEarnings = wages - fuelCost;

    const hourlyEarnings = netEarnings / time;


    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <p>Fuel Cost: $${fuelCost.toFixed(2)}</p>
        <p>Net Earnings: $${netEarnings.toFixed(2)}</p>
        <p>Hourly Earnings: $${hourlyEarnings.toFixed(2)}</p>
    `;

    console.log('Net Earnings:', netEarnings);
 });

 
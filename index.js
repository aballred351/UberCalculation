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

// Add after calculations but before fetch
console.log({
    miles,
    mpg,
    wages,
    fuel,
    time,
    fuelCost,
    netEarnings,
    hourlyEarnings
});
    
fetch('https://script.google.com/macros/s/AKfycbzlIZs4J6iHqPO-M20hdGJEuHWMqDpCIzPaIqzRyGAvtytx4wKkm0z2XWgmKqL8PxR0/exec', {
    method: 'POST',
    body: JSON.stringify({
        miles: miles,
        mpg: mpg,
        wages: wages,
        fuel: fuel,
        time: time,
        fuelCost: fuelCost,
        netEarnings: netEarnings,
        hourlyEarnings: hourlyEarnings
    })
})
.then(response => console.log('Data saved'))
.catch(error => console.error('Error:', error));
    
    console.log('Net Earnings:', netEarnings);
 });

 

const milesDriven = document.getElementById('milesDriven');
const milesPerGallon = document.getElementById('milesPerGallon');
const wagesEarned = document.getElementById('wagesEarned');
const fuelPrice = document.getElementById('fuelPrice');
const timeDriven = document.getElementById('timeDriven');
const calculateBtn = document.getElementById('calculateBtn');

calculateBtn.addEventListener('click', function() {
   // Input validation
   const miles = parseFloat(milesDriven.value) || 0;
   const mpg = parseFloat(milesPerGallon.value) || 1;
   const wages = parseFloat(wagesEarned.value) || 0;
   const fuel = parseFloat(fuelPrice.value) || 0;
   const time = parseFloat(timeDriven.value) || 1;

   // Calculations with decimal precision
   const fuelCost = Number(((miles / mpg) * fuel).toFixed(2));
   const netEarnings = Number((wages - fuelCost).toFixed(2));
   const hourlyEarnings = Number((netEarnings / time).toFixed(2));

   // Update display
   const resultsDiv = document.getElementById('results');
   resultsDiv.innerHTML = `
       <p>Fuel Cost: $${fuelCost.toFixed(2)}</p>
       <p>Net Earnings: $${netEarnings.toFixed(2)}</p>
       <p>Hourly Earnings: $${hourlyEarnings.toFixed(2)}</p>
   `;

   // Console logging for debugging
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

   // Send to Google Sheet
   fetch('https://script.google.com/macros/s/AKfycbzlIZs4J6iHqPO-M20hdGJEuHWMqDpCIzPaIqzRyGAvtytx4wKkm0z2XWgmKqL8PxR0/exec', {
       method: 'POST',
       body: JSON.stringify({
           miles,
           mpg,
           wages,
           fuel,
           time,
           fuelCost,
           netEarnings,
           hourlyEarnings
       })
   })
   .then(response => console.log('Data saved'))
   .catch(error => console.error('Error:', error));
});

const milesDriven = document.getElementById('milesDriven');
const milesPerGallon = document.getElementById('milesPerGallon');
const wagesEarned = document.getElementById('wagesEarned');
const fuelPrice = document.getElementById('fuelPrice');
const timeDriven = document.getElementById('timeDriven');
const calculateBtn = document.getElementById('calculateBtn');
const container = document.querySelector('.container');

calculateBtn.addEventListener('click', function() {
   // Input validation
   const miles = parseFloat(milesDriven.value) || 0;
   const mpg = parseFloat(milesPerGallon.value) || 1; // Prevent division by zero
   const wages = parseFloat(wagesEarned.value) || 0;
   const fuel = parseFloat(fuelPrice.value) || 0;
   const time = parseFloat(timeDriven.value) || 1; // Prevent division by zero

   // Calculations with decimal precision
   const fuelCost = Number(((miles / mpg) * fuel).toFixed(2));
   const netEarnings = Number((wages - fuelCost).toFixed(2));
   const hourlyEarnings = Number((netEarnings / time).toFixed(2));

   // Clear the container and show results
   container.innerHTML = `
       <div class="results-display" id="results">
           <p>Fuel Cost: $${fuelCost.toFixed(2)}</p>
           <p>Net Earnings: $${netEarnings.toFixed(2)}</p>
           <p>Hourly Earnings: $${hourlyEarnings.toFixed(2)}</p>
       </div>
       <button onclick="location.reload()" id="newRecordBtn">Submit Another Record</button>
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

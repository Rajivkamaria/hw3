// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.

//  Assign variable names, retrieve their data, store them
  let firstname = ride.passengerDetails.first 
  let lastname = ride.passengerDetails.last
  let phonenumber = ride.passengerDetails.phoneNumber
  let pickuplocation = ride.pickupLocation
  let dropofflocation = ride.dropoffLocation
  let numberofpassengers = ride.numberOfPassengers

  // Create composite variable, retrive sub-data, store them
  let pickup = `${pickuplocation.address}, ${pickuplocation.city}, ${pickuplocation.state}, ${pickuplocation.zip}`
  let dropoff = `${dropofflocation.address}, ${dropofflocation.city}, ${dropofflocation.state}, ${dropofflocation.zip}`
     
  // Apply conditions, store them
  if (ride.purpleRequested == true) {
    Type='Noober Purple'
  } else if (ride.numberofpassengers > 3) {
    Type = 'Noober XL'
  } else (Type = 'Noober x')

  
  console.log (`${Type} Passenger: ${firstname} ${lastname} - Phone: ${phonenumber}. Pickup at ${pickup}. Drop off at ${dropoff}.`)

})
// 🔥 YOUR CODE ENDS HERE 🔥

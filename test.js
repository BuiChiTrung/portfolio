// Define a function to be executed repeatedly
a = 1;

  
  // Set an interval to execute the function every second (1000 milliseconds)
  const intervalId = setInterval(() => {console.log(a);}, 1000);

  setTimeout(() => {a += 2;}, 2000);
  
  // After 5 seconds, clear the interval
//   setTimeout(() => {
//     clearInterval(intervalId); // Stop the interval
//     console.log("Interval cleared after 5 seconds");
//   }, 5000);
  
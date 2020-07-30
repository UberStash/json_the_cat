const request = require('request');
const input = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search/?q=${input[0]}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const data = JSON.parse(body);
  if (data[0]) {
    console.log(data[0]); // Print the HTML for the Google homepage.
  } else {
    console.log("Error, you might have entered the wrong name try again!");
  }
});


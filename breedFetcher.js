const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`, (error, response, body) => {
  // console.log('error:', error);
    const data = JSON.parse(body);
  
    if (!data[0]) {
      error = "you enetered the wrong breed try again";
    }
    callback(error, data[0].description);
  });
};

module.exports = fetchBreedDescription;
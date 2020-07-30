
const fetchBreedDescription = require('./breedFetcher');

const input = process.argv[2];


fetchBreedDescription(input, (error, desc) => {
  
  if (error) {
    console.log('Error details:', error);
    
  } else {
    console.log(desc);
  }
});

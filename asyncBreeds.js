// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, done) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) done(data);
  });
};
const outputDetailsFromFile = (data)=>{
  console.log('Return Value: ', data); // => will NOT print out details, instead we will see undefined!
};

// we try to get the return value
breedDetailsFromFile('Bombay', outputDetailsFromFile);

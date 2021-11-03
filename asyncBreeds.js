// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, done) {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) done(data);
    else done(undefined);
  });
};
const outputDetailsFromFile = (data)=>{
  console.log('Return Value:', data); // => will NOT print out details, instead we will see undefined!
};

module.exports = breedDetailsFromFile;
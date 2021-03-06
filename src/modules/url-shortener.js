// const fs = require('fs');

function returnStringGen(stringLength) {
// String to hold values of randomized string creation
  const strSource = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// Empty value to collect random characters as the creation loop runs
  let strReturn = '';
// Loops through specified string length to create random URL
  for (let i = 0; i < stringLength; i += 1) {
  // Find a random position in strSource string and append to strReturn
    const rand = Math.round(Math.random() * (strSource.length - 1));
    strReturn += strSource.charAt(rand);
  }

// Return contents of strReturn
  return strReturn;
}

// Export returnStringGen so it is available to any file that requires it
exports.stringGen = returnStringGen;

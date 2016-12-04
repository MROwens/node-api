function returnStringGen(stringLength){

// String to hold values of randomized string creation
var strSource = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

// Empty value to collect random characters as the creation loop runs
var strReturn = '';

// Loops through specified string length to create random URL
for( var i=0; i<stringLength; i++){
  
  var rand = Math.round(Math.random() * (strSource.length-1));
  strReturn += strSource.charAt(rand);
}


return strReturn;
}

exports.stringGen = returnStringGen;

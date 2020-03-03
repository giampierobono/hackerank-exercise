const ASCII_LENGTH = 256; // length ASCII extended 

const isStringLengthValid = (stringToCheck) => stringToCheck.length > 0 && stringToCheck.length <= ASCII_LENGTH;

const uniqueChars = (stringToCompare) => {
  if(!isStringLengthValid(stringToCompare)) {
    return false;
  }
   const occurrencies = {};
   
   for(let i = 0; i < stringToCompare.length; i++) {
     const charAt = stringToCompare.charAt(i);
     if(occurrencies[charAt]) {
       return false;
     }
     occurrencies[charAt] = true;
   }
   
   return true;
}
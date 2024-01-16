var generateBtn = document.querySelector("#generate");

// Function to prompt user for password criteria
function getPasswordCriteria() {
  var length = prompt("Enter the length of the password (between 8 and 128 characters):");
  // Validate the length input
  while (length < 8 || length > 128 || isNaN(length)) {
    alert("Please enter a valid length between 8 and 128 characters.");
    length = prompt("Enter the length of the password (between 8 and 128 characters):");
  }

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate that at least one character type is selected
  while (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
    alert("At least one character type must be selected.");
    includeLowercase = confirm("Include lowercase characters?");
    includeUppercase = confirm("Include uppercase characters?");
    includeNumeric = confirm("Include numeric characters?");
    includeSpecial = confirm("Include special characters?");
  }

  return {
    length: length,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
    includeNumeric: includeNumeric,
    includeSpecial: includeSpecial
  };
}

// Function to generate a random password based on criteria
function generatePassword() {
  var criteria = getPasswordCriteria();
  var characterSet = "";
  var lowercaseSet = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericSet = "0123456789";
  var specialSet = "!@#$%^&*()_-+=<>?";

  if (criteria.includeLowercase) {
    characterSet += lowercaseSet;
  }
  if (criteria.includeUppercase) {
    characterSet += uppercaseSet;
  }
  if (criteria.includeNumeric) {
    characterSet += numericSet;
  }
  if (criteria.includeSpecial) {
    characterSet += specialSet;
  }

  var password = "";
  for (var i = 0; i < criteria.length; i++) {
    var randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet.charAt(randomIndex);
  }

  return password;
}

// Function to write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

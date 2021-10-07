var fs = require("fs"); // library required for creating the JSON file
var XLSX = require("xlsx"); // library required for casting the Excel sheet into an array of objects

export default () => {
  var validContacts = []; // empty array made to store only the valid contacts

  for (let i = 0; i < contact.length; i++) {
    // loop to validate e-mail and phone
    if (validatePhone(contact[i].phone) === true && validateEmail(contact[i].email)) {
      validContacts.push(contact[i]); // adds the contact to the array of valid contacts if it meets the criteria
    }
  }

  var validContactsString = JSON.stringify(validContacts); // converts the valid contacts into JSON as a string

  fs.writeFile("contacts.json", validContactsString, function (err, result) {
    // saves the JSON file
    if (err) console.log("error", err);
  });
};

var workbook = XLSX.readFile("./src/first_challenge/contacts.xlsx");
var sheet = workbook.SheetNames; // reads the Excel sheet and casts it into JSON
var contact = XLSX.utils.sheet_to_json(workbook.Sheets[sheet[0]]);

function validateEmail(x) {
  // function for e-mail validation
  var reEmail = /\S+@\S+\.\S+/; // RegEx to validate e-mail according to the standard   "string@string.string"
  return reEmail.test(x); // compares the contact's email to the RegEx and returns 'true'or 'false'
}

function validatePhone(y) {
  // function for e-mail validation
  var rePhone = /^\([1-9]{2}\) (9 [1-9])[0-9]{3}\-[0-9]{4}$/; //RegEx to validate phone according to "(xx) 9 xxxx-xxxx"
  return rePhone.test(y); // compares the contact's email to the RegEx and returns 'true'or 'false'
}

const fs = require("fs");

fs.wrightFile("hey.txt", "hellow world", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("done - node");
  }
});

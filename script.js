const fs = require("fs");

fs.writeFile("hey.txt", "hellow world", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("done - node");
  }
});

// it work edit same file, and add more text
fs.appendFile(
  "hellow.txt",
  "hellow world from done =>2 - node test",
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("done =>2 - node");
    }
  }
);

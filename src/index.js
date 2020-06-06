const fs = require("fs");
const path = require("path");
const docx = require("./readDocx");

const directoryPath = path.join(__dirname, "docks-directory");
function main() {
  console.log("DOCX-19");

  console.log("Read directory: ", directoryPath);
  fs.readdir(directoryPath, function (err, files) {
    if (err) return console.log(err);
    files.forEach((el) => {
      console.log("FILE: ", el);
      docx.extract(path.join(directoryPath, el)).then((data) => {
        console.log("CONTENT: ", data);
      });
    });
  });
}

main();

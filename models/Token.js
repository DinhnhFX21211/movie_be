const fs = require("fs");
const path = require("path");

module.exports = class Token {
  //readFile userToken.json
  static userToken() {
    return JSON.parse(
      fs.readFileSync(
        path.join(__dirname, "..", "data", "userToken.json"),
        "utf8"
      )
    );
  }
};

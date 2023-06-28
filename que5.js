const request = require("request");
function getGoogleHomePage() {
  return new Promise((resolve, reject) => {
    request("http://www.google.com", (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(body);
      }
    });
  });
}
console.log(getGoogleHomePage());

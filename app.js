const axios = require("axios");
const fs = require("fs");
const saveImg = require("./saveImg");


async function getImage(url) {
  try {
    const imgPath = await saveImg(url);
    console.log("Image saved at:", imgPath);
  } catch (error) {
    console.error("Error while saving image:", error);
  }
}

getImage('https://random.imagecdn.app/500/150');



// const image = fs.readFileSync("YOUR_IMAGE.jpg", {
//     encoding: "base64"
// });

// axios({
//     method: "POST",
//     url: "https://detect.roboflow.com/aadhar-gp4c2/1",
//     params: {
//         api_key: "PKKHZq473wte6cFU0HV2"
//     },
//     data: image,
//     headers: {
//         "Content-Type": "application/x-www-form-urlencoded"
//     }
// })
// .then(function(response) {
//     console.log(response.data);
// })
// .catch(function(error) {
//     console.log(error.message);
// });
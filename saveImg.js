const axios = require("axios");
const fs = require("fs");

module.exports = async function (url) {
  try {
    const response = await axios({
      method: "GET",
      url: url,
      responseType: "arraybuffer"
    });
    
    const image = Buffer.from(response.data, "binary").toString("base64");

    const imgPath = "img/savedImg.jpg";

    fs.writeFileSync(imgPath, image, "base64");

    return imgPath;
  } catch (error) {
    throw error;
  }
};
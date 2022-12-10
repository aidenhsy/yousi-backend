let co = require("co");
let OSS = require("ali-oss");

let uploadImage = (req, res) => {
  let client = new OSS({
    region: "oss-cn-shanghai",
    accessKeyId: process.env.OSS_ACCESSKEYID,
    accessKeySecret: process.env.OSS_ACCESSKEYSECRET,
  });
  if (req.files) {
    let file = req.files.equipNo;
    file.mv("./temp/" + file.name);
  }
};

module.exports = uploadImage;

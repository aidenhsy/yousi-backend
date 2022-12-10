const path = require("path");
const express = require("express");
const multer = require("multer");
const MAO = require("multer-aliyun-oss");
const router = express.Router();

//ali oss
let co = require("co");
let OSS = require("ali-oss");

let client = new OSS({
  region: "oss-cn-shanghai",
  accessKeyId: process.env.OSS_ACCESSKEYID,
  accessKeySecret: process.env.OSS_ACCESSKEYSECRET,
});

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.originalname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: MAO({
    config: {
      region: "oss-cn-shanghai",
      accessKeyId: process.env.OSS_ACCESSKEYID,
      accessKeySecret: process.env.OSS_ACCESSKEYSECRET,
      bucket: "yousi-shanghai",
    },
    destination: "",
  }),
});

router.route("/").post(upload.single("image"), (req, res) => {
  console.log(req);
  res.send(`/${req.file.path}`);
});

module.exports = router;

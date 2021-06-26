const fs = require("fs");
const path = require("path");
const FormData = require("form-data");

console.log("server-upload");
// 单文件上传
const form1 = new FormData();
form1.append(
  "file",
  fs.createReadStream(path.join(__dirname, "images/image-1.jpeg"))
);
form1.submit("http://localhost:3000/upload/single", (error, response) => {
  if(error) {
    console.log("单图上传失败");
    return;
  }
  console.log("单图上传成功");
});

// 多文件上传
const form2 = new FormData();
form2.append(
  "file",
  fs.createReadStream(path.join(__dirname, "images/image-2.jpeg"))
);
form2.append(
  "file",
  fs.createReadStream(path.join(__dirname, "images/image-3.jpeg"))
);
form2.submit("http://localhost:3000/upload/multiple", (error, response) => {
  if(error) {
    console.log("多图上传失败");
    return;
  }
  console.log("多图上传成功");
});

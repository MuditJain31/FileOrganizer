const fs = require("fs");
const path = require("path");

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ["zip", "7z", "tar", "gz", "ar", "xz", "rar", "iso"],
    documents: [
      "docx",
      "doc",
      "xlsx",
      "xls",
      "odt",
      "ods",
      "odp",
      "odg",
      "odf",
      "ps",
      "tex",
      "pdf",
      "txt",
    ],
    app: ["exe", "pkg", "dmg", "deb"],
    image: ["jpeg", "png", "JPG"],
  };

function organize(dirPath) {
    // input of a directory path
    let destPath;
  
    if (!dirPath) {
      console.log("Please enter a directory path");
      return;
    } else {
      let doesExists = fs.existsSync(dirPath);
  
      if (doesExists) {
        destPath = path.join(dirPath, "organized_files");
  
        if (fs.existsSync(destPath) == false) {
          fs.mkdirSync(destPath);
        } else {
          console.log("Folder already exist");
        }
      } else {
        console.log("Please enter a valid path");
      }
    }
    organizeHelper(dirPath,destPath);
  }
  
  function organizeHelper(src, destination) {
    let childNames = fs.readdirSync(src);
  
    for (let i = 0; i < childNames.length; i++) {
      let childAddress = path.join(src, childNames[i]);
      let isFile = fs.lstatSync(childAddress).isFile();
  
      if (isFile) {
        let fileCategory = getCategory(childNames[i]);
  
        sendFiles(childAddress,destination,fileCategory);
      }
    }
  }
  
  function getCategory(name) {
    let ext = path.extname(name);
    ext = ext.slice(1);
  
    for (let type in types) {
      let categoryTypeArr = types[type];
  
      for (let i = 0; i < categoryTypeArr.length; i++) {
        if (ext == categoryTypeArr[i]) {
          return type;
        }
      }
    }
    return 'others';
  }
  
  function sendFiles(srcPath,destPath,fileCategory){
    let catPath = path.join(destPath,fileCategory);
    if(fs.existsSync(catPath)==false){
      fs.mkdirSync(catPath);
    } 
  
    let fileName = path.basename(srcPath);
    let destFilePath = path.join(catPath,fileName);
    fs.copyFileSync(srcPath,destFilePath); 
    fs.unlinkSync(srcPath);
  }

  module.exports={
      organize : organize
  }
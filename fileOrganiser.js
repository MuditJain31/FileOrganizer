// INPUT IN JS
let input = process.argv.slice(2);

const fs = require("fs");
const path = require("path");

const helpObj = require("./command/help.js");
const organizeObj = require("./command/organize.js");
const treeObj = require("./command/tree.js");



let command = input[0];

switch (command) {
  case "tree":
    treeObj.tree(input[1]);
    break;

  case "organize":
    organizeObj.organize(input[1]);
    break;

  case "help":
    helpObj.help()
    break;

  default:
    console.log("Wrong Input");
}

// function tree(dirPath) {
//   if(dirPath==undefined){
//     console.log("Please enter a valid path");
//   }else{
//     let doesExist = fs.existsSync(dirPath);
//     if(doesExist){
//       treeHelper(dirPath," ");
//     }
//   }
// }

// function treeHelper(dirPath,indent){
//   let isFile = fs.lstatSync(dirPath).isFile();

//   if(isFile){
//     let fileName = path.basename(dirPath);
//     console.log(indent+" ├── "+fileName);
//   }
//   else{
//     let dirname = path.basename(dirPath);
//     console.log(indent+" └── "+dirname);

//     let children = fs.readdirSync(dirPath);

//     for(let i =0; i<children.length;i++){
//       let childPAth = path.join(dirPath,children[i]);
//       treeHelper(childPAth,indent+"\t");
//     }
//   }
// }

// function organize(dirPath) {
//   // input of a directory path
//   let destPath;

//   if (!dirPath) {
//     console.log("Please enter a directory path");
//     return;
//   } else {
//     let doesExists = fs.existsSync(dirPath);

//     if (doesExists) {
//       destPath = path.join(dirPath, "organized_files");

//       if (fs.existsSync(destPath) == false) {
//         fs.mkdirSync(destPath);
//       } else {
//         console.log("Folder already exist");
//       }
//     } else {
//       console.log("Please enter a valid path");
//     }
//   }
//   organizeHelper(dirPath,destPath);
// }

// function organizeHelper(src, destination) {
//   let childNames = fs.readdirSync(src);

//   for (let i = 0; i < childNames.length; i++) {
//     let childAddress = path.join(src, childNames[i]);
//     let isFile = fs.lstatSync(childAddress).isFile();

//     if (isFile) {
//       let fileCategory = getCategory(childNames[i]);

//       sendFiles(childAddress,destination,fileCategory);
//     }
//   }
// }

// function getCategory(name) {
//   let ext = path.extname(name);
//   ext = ext.slice(1);

//   for (let type in types) {
//     let categoryTypeArr = types[type];

//     for (let i = 0; i < categoryTypeArr.length; i++) {
//       if (ext == categoryTypeArr[i]) {
//         return type;
//       }
//     }
//   }
//   return 'others';
// }

// function sendFiles(srcPath,destPath,fileCategory){
//   let catPath = path.join(destPath,fileCategory);
//   if(fs.existsSync(catPath)==false){
//     fs.mkdirSync(catPath);
//   } 

//   let fileName = path.basename(srcPath);
//   let destFilePath = path.join(catPath,fileName);
//   fs.copyFileSync(srcPath,destFilePath); 
//   fs.unlinkSync(srcPath);
// }

// function help() {
//   console.log(
//     `List of al the commands - \n1) Tree command - node fileOrganiser.js tree <dirname> \n2) Organize command - node fileOrganiser.js organize <dirname> \n3) Help - node fileOrganiser.js help`
//   );
// }

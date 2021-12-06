const fs = require("fs");
const path = require("path");


function tree(dirPath) {
    if(dirPath==undefined){
      console.log("Please enter a valid path");
    }else{
      let doesExist = fs.existsSync(dirPath);
      if(doesExist){
        treeHelper(dirPath," ");
      }
    }
  }
  
  function treeHelper(dirPath,indent){
    let isFile = fs.lstatSync(dirPath).isFile();
  
    if(isFile){
      let fileName = path.basename(dirPath);
      console.log(indent+" ├── "+fileName);
    }
    else{
      let dirname = path.basename(dirPath);
      console.log(indent+" └── "+dirname);
  
      let children = fs.readdirSync(dirPath);
  
      for(let i =0; i<children.length;i++){
        let childPAth = path.join(dirPath,children[i]);
        treeHelper(childPAth,indent+"\t");
      }
    }
  }

  module.exports={
      tree:tree
  }
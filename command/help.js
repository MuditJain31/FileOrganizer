
function help() {
    console.log(
      `List of al the commands - \n1) Tree command - node fileOrganiser.js tree <dirname> \n2) Organize command - node fileOrganiser.js organize <dirname> \n3) Help - node fileOrganiser.js help`
    );
  }

  module.exports={
      help : help
  }
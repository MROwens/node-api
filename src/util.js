const fs = require('fs');

function debug(msg,status){

  if(process.env.DEBUG){

    if(staus= 'error'){
      fs.appendFile('logs/log', 'w/e', (err)=>{
        if (err) throw err;
      });
    }else if(status = 'warn' ){
      fs.appendFile('logs/log', 'w/e', (err)=>{
        if (err) return console.log(err);
      });
    }else if(status = 'success'){
      fs.appendFile('logs/log', 'w/e', (err)=>{
        console.log(chalk.blue('Good'));
      });
    }
  }

}

exports.debug = debug;

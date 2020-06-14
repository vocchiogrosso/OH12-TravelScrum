require('dotenv').config();
const chalk = require('chalk');
const mongoose = require('mongoose');

// Creates Connection String
function _Build_Connection_String(){
    const MONGO_CONNECTION_STRING = ("mongodb://"+process.env.DB1_MONGO_USERNAME+":"+process.env.DB1_MONGO_PASSWORD+"@"+process.env.DB1_SHARD_1+","+process.env.DB1_SHARD_2+","+process.env.DB1_SHARD_3+"/"+process.env.DB1_MONGO_DATABASE+"?ssl="+process.env.DB1_SSL+"&replicaSet="+process.env.DB1_ReplicaSet+"&authSource="+process.env.DB1_AuthSource+"&retryWrites="+process.env.DB1_RetryWrites);
    return MONGO_CONNECTION_STRING;
}

// Tests Connection
function _Check_Connection_State(){
    switch(mongoose.connection.readyState){
        case 0:
            return ("Database Status: "+chalk.red(" Disconnected"));
        case 1:
            return ("Database Status: "+chalk.green(" Connected"));
        case 2:
            return ("Database Status: "+chalk.blue(" Connecting"));
        case 3:
            return ("Database Status: "+chalk.yellow(" Disconnecting"));
    }

    return result;
}

module.exports={
    BuildConnectionString:_Build_Connection_String,
    CheckConnectionState:_Check_Connection_State
}
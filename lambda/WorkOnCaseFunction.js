exports.handler = (event, context, callback) => {    
    var min = 0;
    var max = 1;    
    var myCaseStatus = Math.floor(Math.random() * (max - min + 1)) + min;
    var myCaseID = event.Case;
    var myMessage = event.Message;
    if (myCaseStatus == 1) {
        myMessage = myMessage + "resolved...";
    } else if (myCaseStatus == 0) {
        myMessage = myMessage + "unresolved...";
    } 
    var result = {Case: myCaseID, Status : myCaseStatus, Message: myMessage};
    callback(null, result); 
};

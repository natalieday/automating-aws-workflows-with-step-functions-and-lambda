exports.handler = (event, context, callback) => {    
    var myCaseID = event.Case;    
    var myCaseStatus = event.Status;    
    var myMessage = event.Message + "escalating.";    
    var result = {Case: myCaseID, Status : myCaseStatus, Message: myMessage};
    callback(null, result);
};

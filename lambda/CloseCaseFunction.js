exports.handler = (event, context, callback) => { 
    var myCaseStatus = event.Status;    
    var myCaseID = event.Case;    
    var myMessage = event.Message + "closed.";    
    var result = {Case: myCaseID, Status : myCaseStatus, Message: myMessage};
    callback(null, result);
};

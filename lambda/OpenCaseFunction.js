exports.handler = (event, context, callback) => {
    var myCaseID = event.inputCaseID;
    var myMessage = "Case " + myCaseID + ": opened...";   
    var result = {Case: myCaseID, Message: myMessage};
    callback(null, result);    
};

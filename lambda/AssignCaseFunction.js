exports.handler = (event, context, callback) => {    
    var myCaseID = event.Case;    
    var myMessage = event.Message + "assigned...";    
    var result = {Case: myCaseID, Message: myMessage};
    callback(null, result);        
};

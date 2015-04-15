var fs = require('fs');

var csvFile = fs.readFileSync("friend_list.csv","utf8");
console.log(csvFile);

function csvParse(csvTestFile){
	friends = [];
	var FRIEND = function(firstName,lastName,numMonthsSinceContact,emailAdd){
		this.firstName = firstName;
		this.lastName = lastName;
		this.numMonthsSinceContact = numMonthsSinceContact;
		this.emailAdd = emailAdd;
	};

	firstName2 = "";
	lastName2 = "";
	numMonthsSinceContact2 = "";
	emailAdd2 = "";
    commaCounter = 0;

	for(var i = 54;i<csvTestFile.length+1;i++){
		//console.log(csvTestFile.length);
		//console.log(commaCounter);
		//console.log(i)
		//console.log(csvTestFile[i])
		//console.log((i+1)===csvTestFile.length);
		if(csvTestFile[i] == ","){
			commaCounter++;
		}
		else if(commaCounter === 0){
			firstName2 += csvTestFile[i];
		}
		else if(commaCounter === 1){
			lastName2 += csvTestFile[i];
		}
		else if(commaCounter === 2){
			numMonthsSinceContact2 += csvTestFile[i];
		}
		else if(commaCounter === 3){
		    //console.log(i);
		    //console.log(csvTestFile[i]);
			    if(csvTestFile[i] === "/"){
    	        commaCounter += 1
			    }
    	        else if(i===(csvTestFile.length-1)){
    	            emailAdd2+= csvTestFile[i];
    	            commaCounter += 1
    	       	}
    			else {
    			    emailAdd2 += csvTestFile[i];
                }
		}
		else if(commaCounter === 4){
            //console.log("what");
		    //console.log(firstName2+lastName2)
		    var newFriend = {};
			newFriend = new FRIEND(firstName2,lastName2,numMonthsSinceContact2,emailAdd2);
			friends.push(newFriend);
			firstName2 = "";
            lastName2 = "";
        	numMonthsSinceContact2 = "";
        	emailAdd2 = "";
			commaCounter = 0;
		}
	}
	return friends;
}
console.log(csvParse(csvFile))
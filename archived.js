function convertBusinessHoursToText(textInput){
    let splitArray = textInput.split(" ");
    let outputText = "";
    let totalHours = 0;
    let toDays = 0;
    let toHours = 0;
    if(splitArray.length >= 4){
        totalHours = (Number(splitArray[0])*24) + Number(splitArray[2]);
    } else if(splitArray.length == 2 || splitArray.length == 3){
        totalHours = (Number(splitArray[0]));
    }
    
    //console.log(totalHours);
    toDays = Math.floor(totalHours / 9);
    toHours = totalHours % 9;
    //console.log(toDays);
    //console.log(toHours); 
    outputText = toDays + " days " + toHours + " hours";
    
    
    return outputText;

}

/* function convertBusinessHoursToTotalHours(textInput){
    let splitArray = textInput.split(" ");
    let outputText = "";
    let totalHours = 0;
    let toDays = 0;
    let toHours = 0;
    if(splitArray.length >= 4){
        totalHours = (Number(splitArray[0])*24) + Number(splitArray[2]);
    } else if(splitArray.length == 2 || splitArray.length == 3){
        totalHours = (Number(splitArray[0]));
    }

    return totalHours;
}

//console.log(convertBusinessHoursToText("13 hours"));

document.querySelector("#convertButton").addEventListener("click", function(){
    let value = document.getElementById("inputBox").value;
    let resultsSection = document.querySelector("#resultsSection");
    let newResults = document.createElement('p');
    newResults.textContent = convertBusinessHoursToText(value);

    resultsSection.appendChild(newResults);

    let resultsHoursSection = document.querySelector("#resultsHoursSection");
    let newHoursResults = document.createElement("p");

    newHoursResults.textContent = convertBusinessHoursToTotalHours(value);

    resultsHoursSection.appendChild(newHoursResults);
})




let valueTest = 31.77
//console.log((Math.floor(Math.round(valueTest)/9)) + " " + Math.round(valueTest)%9);

*/
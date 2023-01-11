


function convertMultiple(textInput){

    // console.log(textInput);
     let splitArray = textInput.replaceAll("\n", " ").split(" ");
     splitArray = splitArray.filter(item => item);
     let toDays = 0;
     let toHours = 0;
     let counter = 0;
     let newArray =[];
 
     console.log(splitArray.length);
     console.log(splitArray);
     
     
     /*
     while(counter < splitArray.length ){
 
         
         if(splitArray[1 + counter] == "Days" || splitArray[1 + counter] == "Day"){
             toDays = Number(splitArray[0 + counter]);
             
             
             if(splitArray[4 + counter] >= 30){
                 toHours = Number(splitArray[2 + counter]) + 1;
             }else{
                 toHours = Number(splitArray[2 + counter]);
             }
 
             //totalHours = (toDays*24) + toHours
             counter += 8;
             //console.log(toDays + " days " + toHours + " hours")
             //console.log(splitArray[counter]);
             newArray.push(toDays, toHours)
        
         }
         else if(splitArray[1 + counter] == "Hours" || splitArray[1 + counter] == "Hour"){
             toDays = Number(0);
             if(splitArray[2 + counter] >= 30){
                 toHours = Number(splitArray[0 + counter]) + 1;
             }else{
                 toHours = Number(splitArray[0 + counter]);
             }
 
             //totalHours = toHours;
             counter += 6;
             //console.log(toDays + " days " + toHours + " hours ");
 
             newArray.push(toDays, toHours)
             
         }
 
         console.log(counter);
         
     }
     
     return newArray;
 
 */
 }
 
 //let cleanedArray = convertMultiple("2 Days 12 Hours 29 Minutes 4 Seconds 2 Hours 30 Minutes 10 Seconds 5 Days 15 Hours 30 Minutes 4 Seconds");
 
 //console.log(cleanedArray);
 function convertBusinessHours(cleanedArray){
     let convertedArray =[];
     let counter = 0;
     while(counter != cleanedArray.length){
         
         convertedArray.push((cleanedArray[counter] * 24 + cleanedArray[counter+1]));
         counter += 2;
     }
 
     //console.log(convertedArray);
     
     
     //console.log(totalHours);
     //toDays = Math.floor(totalHours / 9);
     //toHours = totalHours % 9;
     //console.log(toDays);
     //console.log(toHours); 
     //outputText = toDays + " days " + toHours + " hours";
 
     return convertedArray;
 }
 
 //let convertedArray = (convertBusinessHours(cleanedArray));
 
 function convertToText(array, pointer){
     let toDays = Math.floor(array[pointer]/9);
     let toHours = array[pointer] % 9;
 
     outputText = toDays + " Days " + toHours + " Hours";
     
     return outputText;
 }
 
 //console.log(convertToText(convertedArray, 0));
 
 
 //// Convert and Display ////
 document.querySelector("#convertButton").addEventListener("click", function(){
     let value = document.getElementById("textAreaBox").value;
 
     //console.log(value);
     
     
     let resultsSection = document.querySelector("#resultsSection");
     
     let resultsHoursSection = document.querySelector("#resultsHoursSection");
     
     let cleanedArray = convertMultiple(value);
     // console.log(cleanedArray);
  
     //onsole.log(cleanedArray);
     let convertedArray = convertBusinessHours(cleanedArray);
 
     console.log(convertedArray);
     for(let i = 0; i < convertedArray.length; i++){
         let newResults = document.createElement('p');
         newResults.textContent = convertToText(convertedArray, i);
         resultsSection.appendChild(newResults);
         
 
         //add raw hours
         let newHoursResults = document.createElement("p");
         
         newHoursResults.textContent = convertedArray[i];
         
         resultsHoursSection.appendChild(newHoursResults);
     }
 })
 
 //// Clear Results ////
 document.querySelector("#clearButton").addEventListener("click", function(){
     document.querySelector("#resultsSection").innerHTML = "";
     document.querySelector("#resultsHoursSection").innerHTML = "";
 })
 
 let average = 34;
 //let toDays = Math.floor(array[pointer]/9);
 //let toHours = array[pointer] % 9;
 console.log(Math.floor(average/9) + " Days " + (average%9) + " Hours");

 console.log(convertMultiple("3 days 2 hours 1 minute 2 seconds "));
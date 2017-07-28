'use strict'
const rdln = require('readline');
const cms = require('./commission').getCommission();
const betting = require('./betting');

rdln.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

const rdInf = rdln.createInterface({
  input: process.stdin,
  output:process.stdout
});
var state = "data";
var dataArr = [];
var resultArr ;
var resultInp ;


// Show Initial prompt to fill data 
function init(){
rdInf.setPrompt("\nPlease provide the dummy data input and press 'Enter' followed by 'ctrl+t'  \n");
rdInf.prompt();
}
// Read terminal Input and push multiline to array
// Initial State to accept dummy is 'data'
rdInf.on('line',function(data){
    if(state === "data"){
       dataArr.push(data);
    }else{
        //accept result string
resultInp = data.trim();
    }
    
})

// lisening terminal input on keypress event and capture key
process.stdin.on('keypress', (str, key) => {
    if (key.ctrl && key.name === 'c') {
        //end of process and out of terminal
        process.exit();
}else if(key.ctrl && key.name == 't'){
    //change state as answered received 
    state = "";
    rdInf.setPrompt("\nData has been submitted please submit the result and Press 'Ctrl+D' \n");
    rdInf.prompt();
}else if(key.ctrl && key.name == 'd'){
    // answer and dummy data received 
   processData();
    }
  
});

init();


function processData(){
   // send data to betting module to convert to object array
 betting.setData(dataArr); 
  // split result Result:<first>:<second>:<third>
 resultArr = resultInp.split(":") ;
 // remove first string from array
resultArr.shift();
// Show result
   renderResult();
}
// calculate amount collected from each product after deduction commission
// Amount collected from winners
function dividendCl(pdName,slot,dvd = 1){ // accept parameters : product name, winning order, divide 
    if (typeof(pdName) == 'undefined' ||  typeof(slot) == 'undefined' ) return
 
    // Total amount collected from each product after commission
    //dvd is the dividing method amont stake holders
    var totalAmountCollectd = amountAfterCommission (pdName)/dvd;
    // Winner amount received of each product
    var stakeHolderAmount = betting.getPunterAmount(pdName,slot.toString());
    //ratio of amount need to distribute individually 
    var yld = totalAmountCollectd / stakeHolderAmount;
    return(yld.toFixed(2));
}


// total amount received from each product 
//accepted parameters is product name
function amountAfterCommission(pdName){
    var pdTotal = betting.productTotal(pdName);
    //commission appled for each product
    var cRate = cms.get(pdName);
    return pdTotal - ( pdTotal * cRate / 100);

}
//Show result
function renderResult(){
    if(!dataArr.length) return;
    var winYield = dividendCl('w',resultArr[0]);
    var placeYield1 = dividendCl('p',resultArr[0],3);
    var placeYield2 = dividendCl('p',resultArr[1],3);
var placeYield3 = dividendCl('p',resultArr[2],3);
var exactaYield = dividendCl('e',resultArr.slice(0,2));
rdInf.setPrompt("\n Result is : \n");
    rdInf.prompt();
    try{
    console.log(` Win:2:$${winYield.trim()} \n Place:2:$${placeYield1.trim()} \n Place:3:$${placeYield2.trim()} \n Place:1:$${placeYield3.trim()} \n Exacta:2,3:$${exactaYield.trim()}`);
    }catch(e){
        console.log("data is not formatted");
        process.exit();
    }
}



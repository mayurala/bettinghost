//commond dummy data received from terminal
let raceData = [];

//Calculate product total for each product
//accepted parameter is product name in string
//return product total of each product
function productTotal(pdName){
    
return raceData.reduce((total,crt) =>{
    return crt.product.toLowerCase() == pdName? (total+crt.stake): total;
},0)
}
//Calculate winner total for each product
//accepted parameter is product name  and winner number in string
//return winner total of each product
function getPunterAmount(pdName,slot){
   
   return  raceData.filter((ct, idx) => {
         return ct.product.toLowerCase() == pdName.toLowerCase() && ct.selection.indexOf(slot.trim())> -1;
     }).reduce((pv,cv) =>{
return pv + cv.stake;
     },0);
     
}

//Process input data and convert to object array
module.exports.setData = (arr) => {
raceData = arr.map((n,x) =>{
        var splitArry = n.split(':')
        return{
            product: splitArry[1],
            selection: splitArry[2].toLowerCase(),
            stake: Number(splitArry[3])
        }
    })
    
}
exports.raceData = raceData;
exports.productTotal = productTotal;
exports.getPunterAmount = getPunterAmount;
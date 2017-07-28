//commond dummy data received from terminal
let raceData = [];

//Calculate product total for each product
//accepted parameter is product name in string
//return product total of each product
function productTotal(pdName){
    if (typeof(pdName) == 'undefined' ||typeof(raceData) == 'undefined' ) return;
    try{
return raceData.reduce((total,crt) =>{
    return crt.product.toLowerCase() == pdName? (total+crt.stake): total;
},0)}catch(e){
    process.exit();
    console.log('data is not formatted')}
}
//Calculate winner total for each product
//accepted parameter is product name  and winner number in string
//return winner total of each product
function getPunterAmount(pdName,slot){
   if (typeof(pdName) == 'undefined' || typeof(raceData) == 'undefined' || typeof(slot) == 'undefined' ) return
   try{
   return  raceData.filter((ct, idx) => {
         return ct.product.toLowerCase() == pdName.toLowerCase() && ct.selection.indexOf(slot.trim())> -1;
     }).reduce((pv,cv) =>{
return pv + cv.stake;
     },0);
   }catch(e){
       process.exit();
       console.log("data is not formatted")}
}

//Process input data and convert to object array
module.exports.setData = (arr) => {
  if (typeof(arr) == 'undefined') return
raceData = arr.map((n,x) =>{
        var splitArry = n.split(':');
        try{
        return{
            product: splitArry[1],
            selection: splitArry[2].toLowerCase(),
            stake: Number(splitArry[3])
        }
        }catch(e){ console.log("data is not formatted")}
    })
    
}
exports.raceData = raceData;
exports.productTotal = productTotal;
exports.getPunterAmount = getPunterAmount;
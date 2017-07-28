function getCommission(){
const commission = new Map();
commission.set('w', 15);
commission.set('p', 12);
commission.set('e', 18);
return commission;
}

exports.getCommission = getCommission
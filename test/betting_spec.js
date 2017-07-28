var expect = require('chai').expect;
var betting = require('../betting');
describe("betting" , function(){
    var stringArr;
     before(function(){
         stringArr =   ['Bet:W:2:8',
  'Bet:W:3:22',
  'Bet:W:4:57',
  'Bet:W:1:42',
  'Bet:W:2:98',
  'Bet:W:3:63',
  'Bet:W:4:15',
  'Bet:P:1:31',
  'Bet:P:2:89',
  'Bet:P:3:28',
  'Bet:P:4:72',
  'Bet:P:1:40',
  'Bet:P:2:16',
  'Bet:P:3:82',
  'Bet:E:2,3:98',
  'Bet:E:1,3:82',
  'Bet:E:3,2:27',
  'Bet:E:1,2:5',
  'Bet:E:2,3:61',
  'Bet:E:1,3:28',
  'Bet:E:3,2:25',
  'Bet:E:1,2:81',
  'Bet:E:2,3:47',
  'Bet:E:1,3:93',
  'Bet:E:3,2:51' ];    
});
beforeEach(function(){
betting.setData(stringArr);
})

       
    describe("Should check productTotal() return product total ",function(){
       
        it("Should return  w product total amount",function(){
expect(betting.productTotal('w')).to.equal(305 );
        })
        it("Should return  p product total amount",function(){
expect(betting.productTotal('p')).to.equal(358 );
        })
        it("Should return  p product total amount",function(){
expect(betting.productTotal('e')).to.equal(598 );
        })
    })

    describe("Should check getPunterAmount() return winner punter total ",function(){
        it("Should return  w  winner punter total amount",function(){
expect(betting.getPunterAmount('w','2')).to.equal(106 );
        })
        it("Should return  p  winner punter total amount",function(){
expect(betting.getPunterAmount('p','2')).to.equal(105 );
        })
        it("Should return  e  winner punter total amount",function(){
expect(betting.getPunterAmount('e','2,3')).to.equal(206 );
        })
    });
})
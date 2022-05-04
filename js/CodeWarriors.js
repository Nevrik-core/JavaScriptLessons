/* function numberToString(num) {
    return num + "";
  }
  numberToString(67);
  console.log(numberToString(67));
 */
/* 
  var stringToNumber = function(str){
 
    return +str;
  };

  console.log(stringToNumber('fdffds')); */

  class SmallestIntegerFinder {
    findSmallestInt(args) {

      return Math.min(...args);
    }
  }
 console.log(SmallestIntegerFinder([78,56,232,12,8]));
function smallestCommons(arr) {
   //create array of range of numbers given as params
   var start = Math.min(...arr);
   var end = Math.max(...arr);
   var allNums = [];
   var multiples = [];

   //array of all nums
   for (var i = start; i <= end; i++) {
      allNums.push(i);
   }
   //make array(object?) of common multiples, for each number
   for (var i = 1; i <= 7000000; i++) {
      var counter = 0;
      allNums.forEach(function(number, index) {
         if (i % number === 0) {
            var multiple = i;
            if (i === multiple) {
               counter++;
               if (counter === allNums.length) {
                  //console.log("common multiple:", i);
                  multiples.push(i);
               }
            }
         }
      });
   }
   console.log(multiples[0]);
   return multiples[0];
}
smallestCommons([1, 7]);

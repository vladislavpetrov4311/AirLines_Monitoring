function findMinPositiveMember() {
let x = [-99, -99, -99];
let result = 0;
let i = 4;

while (x[i % 3] <= 0) {
x[i % 3] = x[(i - 1) % 3] + x[(i - 3) % 3] + 100;
i++;
}

result = x[i % 3];

return result+' '+i;
}



document.getElementById("myForm2").addEventListener("submit", function(event) {
     event.preventDefault();



      var r1c2Value = document.getElementsByName("r1c2")[0].value;
      var r2c2Value = document.getElementsByName("r2c2")[0].value;
      var r3c2Value = document.getElementsByName("r3c2")[0].value;

          res = findMinPositiveMember();
          var valuesArray = res.split(" ");
          var X = parseInt(valuesArray[0]);
          var n = parseInt(valuesArray[1]);

       if(r1c2Value.length!= 0)
      {
         
         if(r1c2Value==n){
        const inputElement = document.querySelector('#r1c3');
        inputElement.value = X;
          }
          else{
          	const inputElement = document.querySelector('#r1c3');
        	inputElement.value = 'нужно n равное '+n;
          }
 
      }

      if(r2c2Value.length!= 0)
      {
         
         if(r2c2Value==n){
        const inputElement = document.querySelector('#r2c3');
        inputElement.value = X;
          }
          else{
          	const inputElement = document.querySelector('#r2c3');
        	inputElement.value = 'нужно n равное '+n;
          }
 
      }

      if(r3c2Value.length!= 0)
      {
         
         if(r3c2Value==n){
        const inputElement = document.querySelector('#r3c3');
        inputElement.value = X;
          }
          else{
          	const inputElement = document.querySelector('#r3c3');
        	inputElement.value = 'нужно n равное '+n;
          }
 
      }
     


     });
      
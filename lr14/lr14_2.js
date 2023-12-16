function g(n, a, c) {
return (a * n + c) % 10;
}

function f(n, a, c) {
if (n < 0 || n>9) {
return g(n, a, c) * f(n - 1 - g(n, a, c), a, c);
} if (n >= 0 && n<=9) {
return n;
} 
}


document.getElementById("myForm2").addEventListener("submit", function(event) {
     event.preventDefault();



      var r1c2Value = document.getElementsByName("r1c2")[0].value;
      var r2c2Value = document.getElementsByName("r2c2")[0].value;
      var r3c2Value = document.getElementsByName("r3c2")[0].value;

       if(r1c2Value.length!= 0)
      {

      var valuesArray = r1c2Value.split(" ");

      var a = parseInt(valuesArray[0]);
      var c = parseInt(valuesArray[1]);
      var m = parseInt(valuesArray[2]);

      var result = f(m, a, c);

      const inputElement = document.querySelector('#r1c3');
      inputElement.value = result;

      }

       if(r2c2Value.length!= 0)
      {

      var valuesArray = r2c2Value.split(" ");

      var a = parseInt(valuesArray[0]);
      var c = parseInt(valuesArray[1]);
      var m = parseInt(valuesArray[2]);

      var result = f(m, a, c);

      const inputElement = document.querySelector('#r2c3');
      inputElement.value = result;

      }

       if(r3c2Value.length!= 0)
      {

      var valuesArray = r3c2Value.split(" ");

      var a = parseInt(valuesArray[0]);
      var c = parseInt(valuesArray[1]);
      var m = parseInt(valuesArray[2]);

      var result = f(m, a, c);

      const inputElement = document.querySelector('#r3c3');
      inputElement.value = result;

      }

     });
      
      


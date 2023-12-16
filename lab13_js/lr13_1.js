function findNthMember(n) {
if (n < 2) {
return "n должно быть больше или равно 2";
}
let x0 = 0;
let x1 = 9;
let result = 0;

for (let i = 2; i <= n; i++) {
result = 2 * x1 - 3 * x0;
x0 = x1;
x1 = result;
}

return result;
}




document.getElementById("myForm").addEventListener("submit", function(event) {
     event.preventDefault();
      
      // Получаем значения полей ввода
      var row1col2Value = document.getElementsByName("row1col2")[0].value;
      var row2col2Value = document.getElementsByName("row2col2")[0].value;
      var row3col2Value = document.getElementsByName("row3col2")[0].value;

      
       
      
      if(row1col2Value.length!= 0)
      {

             res = findNthMember(row1col2Value);
             const inputElement = document.querySelector('#row1col3');
       		 inputElement.value = res;

      }

      if(row2col2Value.length!= 0)
      {

             res = findNthMember(row2col2Value);
             const inputElement = document.querySelector('#row2col3');
       		 inputElement.value = res;

      }

      if(row3col2Value.length!= 0)
      {

             res = findNthMember(row3col2Value);
             const inputElement = document.querySelector('#row3col3');
       		 inputElement.value = res;

      }


      });
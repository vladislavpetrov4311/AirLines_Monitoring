function calculateF(x) {
return -0.5 + 1.25*x - 3.25*x*x - 1.87*x*x*x + 0.5*x*x*x*x;
}



document.getElementById("myForm").addEventListener("submit", function(event) {
     event.preventDefault();
      
      // Получаем значения полей ввода
      var row1col2Value = document.getElementsByName("row1col2")[0].value;
      var row2col2Value = document.getElementsByName("row2col2")[0].value;
      var row3col2Value = document.getElementsByName("row3col2")[0].value;

      
       
      
      if(row1col2Value.length!= 0)
      {
         res = calculateF(row1col2Value);
         const inputElement = document.querySelector('#row1col3');
       	 inputElement.value = res;

      }

      if(row2col2Value.length!= 0)
      {
         res = calculateF(row2col2Value);
         const inputElement = document.querySelector('#row2col3');
       	 inputElement.value = res;

      }

      if(row3col2Value.length!= 0)
      {
         res = calculateF(row3col2Value);
         const inputElement = document.querySelector('#row3col3');
       	 inputElement.value = res;

      }



     });
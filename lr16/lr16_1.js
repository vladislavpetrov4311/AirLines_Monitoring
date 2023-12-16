
document.getElementById("myForm").addEventListener("submit", function(event) {
     event.preventDefault();
      
      // Получаем значения полей ввода
      var row1col2Value = document.getElementsByName("row1col2")[0].value;
      var row2col2Value = document.getElementsByName("row2col2")[0].value;
      var row3col2Value = document.getElementsByName("row3col2")[0].value;

      var numbers = [45, 25, 5, 8, 30];
       
      
      if(row1col2Value.length!= 0)
      {

      var valuesArray = row1col2Value.split(" ");

      var M = parseInt(valuesArray[0]);
      var a = parseInt(valuesArray[1]);

      let transformedArray = numbers.map((num, index) => {
      if (num > M) {
      return a;
      } else {
      return a / index;
      }
      });

         res = transformedArray;
         const inputElement = document.querySelector('#row1col3');
       	 inputElement.value = res;

      }

      if(row2col2Value.length!= 0)
      {

      var valuesArray = row2col2Value.split(" ");

      var M = parseInt(valuesArray[0]);
      var a = parseInt(valuesArray[1]);

      let transformedArray = numbers.map((num, index) => {
      if (num > M) {
      return a;
      } else {
      return a / index;
      }
      });

         res = transformedArray;
         const inputElement = document.querySelector('#row2col3');
          inputElement.value = res;

      }

      if(row3col2Value.length!= 0)
      {

      var valuesArray = row3col2Value.split(" ");

      var M = parseInt(valuesArray[0]);
      var a = parseInt(valuesArray[1]);

      let transformedArray = numbers.map((num, index) => {
      if (num > M) {
      return a;
      } else {
      return a / index;
      }
      });

         res = transformedArray;
         const inputElement = document.querySelector('#row3col3');
          inputElement.value = res;

      }



   });
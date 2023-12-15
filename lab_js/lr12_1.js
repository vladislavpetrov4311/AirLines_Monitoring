document.getElementById("myForm").addEventListener("submit", function(event) {
     event.preventDefault();
      
      // Получаем значения полей ввода
      var row1col2Value = document.getElementsByName("row1col2")[0].value;
      var row2col2Value = document.getElementsByName("row2col2")[0].value;
      var row3col2Value = document.getElementsByName("row3col2")[0].value;

      
       
      
      if(row1col2Value.length!= 0)
      {

      var valuesArray = row1col2Value.split(" ");

      var D = parseInt(valuesArray[0]);
      var L = parseInt(valuesArray[1]);
      var R = D/2;

      var S = 3.14*R*R + 3.14*R*L;

       const inputElement = document.querySelector('#row1col3');
       inputElement.value = S;

      }

      if(row2col2Value.length!= 0)
      {

      var valuesArray = row2col2Value.split(" ");

      var D = parseInt(valuesArray[0]);
      var L = parseInt(valuesArray[1]);
      var R = D/2;

      var S = 3.14*R*R + 3.14*R*L;

       const inputElement = document.querySelector('#row2col3');
       inputElement.value = S;
      }


      if(row3col2Value.length!= 0)
      {

      var valuesArray = row3col2Value.split(" ");

      var D = parseInt(valuesArray[0]);
      var L = parseInt(valuesArray[1]);
      var R = D/2;

      var S = 3.14*R*R + 3.14*R*L;

       const inputElement = document.querySelector('#row3col3');
       inputElement.value = S;
      }

      
    });







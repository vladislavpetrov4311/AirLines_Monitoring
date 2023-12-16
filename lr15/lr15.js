function del(s) {
return s.replace(/\s+/g, ' ');
}




document.getElementById("myForm").addEventListener("submit", function(event) {
     event.preventDefault();
      
      // Получаем значения полей ввода
      var row1col2Value = document.getElementsByName("row1col2")[0].value;
      var row2col2Value = document.getElementsByName("row2col2")[0].value;
      var row3col2Value = document.getElementsByName("row3col2")[0].value;

      
       
      
      if(row1col2Value.length!= 0)
      {

      var res = del(row1col2Value);
	  const inputElement = document.querySelector('#row1col3');
      inputElement.value = res;

      }

      if(row2col2Value.length!= 0)
      {

      var res = del(row2col2Value);
	  const inputElement = document.querySelector('#row2col3');
      inputElement.value = res;

      }

      if(row3col2Value.length!= 0)
      {

      var res = del(row3col2Value);
	  const inputElement = document.querySelector('#row3col3');
      inputElement.value = res;

      }

     });

     document.getElementById("myForm2").addEventListener("submit", function(event) {
     event.preventDefault();



      var r1c2Value = document.getElementsByName("r1c2")[0].value;
      var r2c2Value = document.getElementsByName("r2c2")[0].value;
      var r3c2Value = document.getElementsByName("r3c2")[0].value;

       if(r1c2Value.length!= 0)
      {

      var valuesArray = r1c2Value.split(" ");

      var A1 = parseInt(valuesArray[0]);
      var A2 = parseInt(valuesArray[1]);
      var B1 = parseInt(valuesArray[2]);
      var B2 = parseInt(valuesArray[3]);

      var distAO = ((A1 - 0)**2 + (A2 - 0)**2)**(1/2);
      var distBO = ((B1 - 0)**2 + (B2 - 0)**2)**(1/2);
      
      if(distAO>distBO)
      {
            const inputElement = document.querySelector('#r1c3');
            inputElement.value = 'B('+B1+','+B2+')';

      }
      else
      {
            const inputElement = document.querySelector('#r1c3');
            inputElement.value = 'A('+A1+','+A2+')';
      }

      }


      if(r2c2Value.length!= 0)
      {

      var valuesArray = r2c2Value.split(" ");

      var A1 = parseInt(valuesArray[0]);
      var A2 = parseInt(valuesArray[1]);
      var B1 = parseInt(valuesArray[2]);
      var B2 = parseInt(valuesArray[3]);

      var distAO = ((A1 - 0)**2 + (A2 - 0)**2)**(1/2);
      var distBO = ((B1 - 0)**2 + (B2 - 0)**2)**(1/2);
      
      if(distAO>distBO)
      {
            const inputElement = document.querySelector('#r2c3');
            inputElement.value = 'B('+B1+','+B2+')';

      }
      else
      {
            const inputElement = document.querySelector('#r2c3');
            inputElement.value = 'A('+A1+','+A2+')';
      }

      }


      if(r3c2Value.length!= 0)
      {

      var valuesArray = r3c2Value.split(" ");

      var A1 = parseInt(valuesArray[0]);
      var A2 = parseInt(valuesArray[1]);
      var B1 = parseInt(valuesArray[2]);
      var B2 = parseInt(valuesArray[3]);

      var distAO = ((A1 - 0)**2 + (A2 - 0)**2)**(1/2);
      var distBO = ((B1 - 0)**2 + (B2 - 0)**2)**(1/2);
      
      if(distAO>distBO)
      {
            const inputElement = document.querySelector('#r3c3');
            inputElement.value = 'B('+B1+','+B2+')';

      }
      else
      {
            const inputElement = document.querySelector('#r3c3');
            inputElement.value = 'A('+A1+','+A2+')';
      }

      }



});
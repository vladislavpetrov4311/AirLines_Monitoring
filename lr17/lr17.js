var formData = [];
var res = {};

function processData() {
  var inf1 = document.getElementsByName("input1")[0].value;
  var inf2 = document.getElementsByName("input2")[0].value;
  var inf3 = document.getElementsByName("input3")[0].value;
  var inf4 = document.getElementsByName("input4")[0].value;

  var objects = {
    inf1: inf1,
    inf2: inf2,
    inf3: inf3,
    inf4: inf4
  };

  formData.push(objects);
}


function processForm(data) {

 var recipients = {};

  for (var i = 0; i < data.length; i++) {
    var recipient = data[i].inf2;
    var weight = parseInt(data[i].inf3);
    var date = data[i].inf4.split(" ");
    
    var day = parseInt(date[0]);
    var month = parseInt(date[1]);
    var year = parseInt(date[2]);

    if (recipients[recipient] && month==recipients[recipient].month) {
      recipients[recipient].weight += weight;

    } else {
      recipients[recipient] = {
        weight: weight,
        month: month
      };
    }
  }



  for (var recipient in recipients) {
  	 var month2 = recipients[recipient].month;
   for (var otherRecipient in recipients) {
   	if(recipient != otherRecipient && recipients[otherRecipient].month==month2){
     
     res[recipient] = {
     	pol: recipient,
     	ves: recipients[recipient].weight,
     	dat: recipients[recipient].month
     }
   	}
   }
  }


 
}


document.getElementById("mainForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  processData(); 
  processForm(formData);
   

   var result1 = document.querySelector('#row1col3');
   var result2 = document.querySelector('#row2col3');
   var result3 = document.querySelector('#row3col3');

       if(result2.value == '0' && result3.value == '0')
       {

     var output = '';

   for (var el in res) {
  output += res[el].pol+':';
  output += res[el].ves;
   }
  
      var result = document.querySelector('#row1col3');
      result.value = output;

      }

      if(result1.value == '0' && result3.value == '0'){
           
           var output = '';

         for (var el in res) {
         output += res[el].pol+':';
         output += res[el].ves;
           }
  
      var result = document.querySelector('#row2col3');
      result.value = output;

      }

       if(result1.value == '0' && result2.value == '0'){
           
           var output = '';

         for (var el in res) {
         output += res[el].pol+':';
         output += res[el].ves;
           }
  
      var result = document.querySelector('#row3col3');
      result.value = output;

      }
    



});


 
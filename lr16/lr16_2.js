function getSum(matrix) {
let sumBelow = 0;
let sumAbove = 0;
let sumDiagonal = 0;

for (let i = 0; i < matrix.length; i++) {
if (matrix[i][0] < 0) {
for (let j = 0; j < matrix[i].length; j++) {
if (j > i) {
sumAbove += matrix[i][j];
} else if (j < i) {
sumBelow += matrix[i][j];
} else {
sumDiagonal += matrix[i][j];
}
}
}
}

return { sumBelow, sumAbove, sumDiagonal };
}


function createRandomMatrix(size) {
let matrix = [];
for (let i = 0; i < size; i++) {
let row = [];
for (let j = 0; j < size; j++) {
row.push(Math.floor(Math.random() * 100) - 50); // генерируем случайное число от -50 до 50
}
matrix.push(row);
}
return matrix;
}

function hasNegativeFirstElement(matrix) {
for (let i = 0; i < matrix.length; i++) {
if (matrix[i][0] < 0) {
return true;
}
}
return false;
}



document.getElementById("myForm2").addEventListener("submit", function(event) {
     event.preventDefault();



      var r1c2Value = document.getElementsByName("r1c2")[0].value;
      var r2c2Value = document.getElementsByName("r2c2")[0].value;
      var r3c2Value = document.getElementsByName("r3c2")[0].value;

       if(r1c2Value.length!= 0)
      {
 
            let size = r1c2Value;
            let matrix;

            do {
             matrix = createRandomMatrix(size);
           } while (!hasNegativeFirstElement(matrix));

          console.log(matrix);

          let result = getSum(matrix);

          console.log("Сумма элементов ниже:", result.sumBelow);
          console.log("Сумма элементов выше:", result.sumAbove);
          console.log("Сумма элементов побочной диагонали:", result.sumDiagonal);
              
               const inputElement = document.querySelector('#r1c3');
               inputElement.value = result.sumBelow+'_'+result.sumAbove+'_'+result.sumDiagonal;
      }

      if(r2c2Value.length!= 0)
      {
 
            let size = r2c2Value;
            let matrix;

            do {
             matrix = createRandomMatrix(size);
           } while (!hasNegativeFirstElement(matrix));

          console.log(matrix);

          let result = getSum(matrix);

          console.log("Сумма элементов ниже:", result.sumBelow);
          console.log("Сумма элементов выше:", result.sumAbove);
          console.log("Сумма элементов побочной диагонали:", result.sumDiagonal);
              
               const inputElement = document.querySelector('#r2c3');
               inputElement.value = result.sumBelow+'_'+result.sumAbove+'_'+result.sumDiagonal;
      }

      if(r3c2Value.length!= 0)
      {
 
            let size = r3c2Value;
            let matrix;

            do {
             matrix = createRandomMatrix(size);
           } while (!hasNegativeFirstElement(matrix));

          console.log(matrix);

          let result = getSum(matrix);

          console.log("Сумма элементов ниже:", result.sumBelow);
          console.log("Сумма элементов выше:", result.sumAbove);
          console.log("Сумма элементов побочной диагонали:", result.sumDiagonal);
              
               const inputElement = document.querySelector('#r3c3');
               inputElement.value = result.sumBelow+'_'+result.sumAbove+'_'+result.sumDiagonal;
      }

 });
 //we subtract two array and return remaining element of both array
function diffArray(array1, array2) {
let narray=[];//declare new array
for(let i=0;i<array1.length;i++){//iterate through the array1
let found = array2.find(element=> element==array1[i]);//finding specific element
 if(found==array1[i]){ //checking whether match found or not
     array2= array2.filter(function(value){ 
        return value !=array1[i];//removal of matched element
    });
    console.log(array2)
   } 
   else{
       narray.push(array1[i]);//in case of not matched we add to declarevariable
   }
 }
for (let j=0;j<array2.length;j++){
  narray.push(array2[j]);  //add remaining element from array2 
}
return narray;//returning the array
}
console.log(diffArray(array1, array2))
// expected output: 12
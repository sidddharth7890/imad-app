//conuter code 
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function (){
    
    
  //make request to the counter end point
  
  
  //capture the response and store it in variable
  
  
  //render the variable in the correct span
    counter = counter + 1;
    var span = document.getElementById('counter');
    span.innerHTML = counter.toString();
    
}; 
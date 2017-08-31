//conuter code 
var button = document.getElementById('counter');

button.onclick = function (){
    
    
  //make request to the counter end point
  var request = new XMLHttpRequest(); 
  //capture the response and store it in variable
  request.onreadystatechange = function (){
    if (request.readyState === XMLHttpRequest.DONE){
     //take some action   
    if (request.status === 200){
    var counter = request.responseText;    
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();    
    }    
    }  
     // not done yet
  };
  //render the variable in the correct span
    
    
    
}; 
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    //Create a Request to counter Endpoint
    var request = new XMLHttpRequest();
    
    //capture response and store it in variable
    request.onreadystatechange = function() {
      if(request.readyState === XMLHttpRequest.DONE){
          if(request.status === 200 ){
              alert('logged in successfully');
          }else if (request.status === 403  ){
              alert('incorrect username/password');
          }else if (request.status === 500 ){
              alert('something went wrong with server');
          }
        }
    };

    //Make the request
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    request.open('POST', 'http://rkvithlani.imad.hasura-app.io/login' ,true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username:username,password:password}));
};
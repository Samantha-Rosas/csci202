
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
      
      
   if (s < 20) {
    document.getElementById("txt").style.color = "green";
    document.body.style.backgroundImage = "url('https://media.giphy.com/media/12WQdoY19bowPm/giphy.gif')";
  } else if (s < 40) {
    document.getElementById("txt").style.color = "violet";
    document.body.style.backgroundImage = "url('https://media.giphy.com/media/vnNHyroyEwb4s/giphy.gif')";
  } else {
     document.getElementById("txt").style.color = "white";
    document.body.style.backgroundImage = "url('https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif')";
  }    
      
  
  }
  
  
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i; 
      
      
  }
  
  
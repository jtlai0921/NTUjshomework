 function mytime() {
     var a = new Date();
     var b = a.toLocaleTimeString();
     var c = a.toLocaleDateString();
     document.getElementById("time").innerHTML = c + "&nbsp" + b;
 }
 setInterval(function() { mytime() }, 1000);
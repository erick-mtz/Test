
 setInterval(function MyFunction() {
     var hourValue = document.getElementById("selectHour").value;
     if (hourValue < 10) {
         hourValue = "0" + hourValue;
         document.getElementById("displayHour").innerHTML = hourValue;
     }
     else{
        document.getElementById("displayHour").innerHTML = hourValue;

     }
 } , 1);

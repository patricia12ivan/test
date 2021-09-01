function get(x){
    let valorinput = document.getElementById("start").value;

 if(valorinput == x){
   alert("the numbers are equal")
  }
   else {
       alert("error")
       if(valorinput > x){
           alert(" the number is bigger ")
       }
       else{
           alert("the number is smaller")
       }

   }
}
   var x=Math.floor(Math.random()*100)

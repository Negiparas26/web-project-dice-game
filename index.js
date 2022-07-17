//alert("hello");


  var randomnumber=Math.floor(Math.random()* 6)+1;
  var randomdiceimg="images/dice"+randomnumber +".jpeg";
  var image1= document.querySelectorAll("img")[0];
  image1.setAttribute("src",randomdiceimg);

  var randomnumber2=Math.floor(Math.random()*6)+1;
  var randomdiceimg2="images/dice" +  randomnumber2 +".jpeg";
  var images2= document.querySelectorAll("img")[1];
  images2.setAttribute("src",randomdiceimg2);




if(randomnumber>randomnumber2){
  document.querySelector("h1").innerHTML="✨ Player 1 Wins !!";
}
else if(randomnumber<randomnumber2){
  document.querySelector("h1").innerHTML="✨ Player 2 Wins !!";
}
else
{
  document.querySelector("h1").innerHTML="💯 Draw !!!!"
}

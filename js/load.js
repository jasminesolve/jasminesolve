var i = 0;
var text = 'Jasminesolve';
var speed = 100;

function typeWriter(){
  if (i<text.length){
    document.getElementById("hd").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter,speed);
  }
}
window.addEventListener('load',typeWriter,false);

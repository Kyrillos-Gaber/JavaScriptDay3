let winname;
winname = window.open("", "","_blank");

function clo(){
  winname.close();
}



function startClock(){
  setInterval(function() {
    let dt = new Date();
    alert(`Clock Started ${dt.toLocaleTimeString()}`);
  }, 1000);
}





let addWin = window;
function openAd() {
  setTimeout(function(){
    addWin = window.open("./ad.html","_blank");
  }, 3000);
}







document.addEventListener('scroll', (e)=>{
  if (scrollY > 777) 
    alert("hi");
});






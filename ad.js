let str = "This is Addvertising";

let count = 0;

function print() {
  document.getElementById("idh").innerText = str.substring(0, count++);
}

let t = setInterval(print, 500);

setTimeout(() => {
  clearInterval(t);
  this.close();
}, str.length * 600);

function closeAd() {
  addWin.close();
}


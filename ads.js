
var target = [
"https://padsabs.com/by6kd44s?key=a6384742240bc915db53831edb351e51",
"https://padsabs.com/by6kd44s?key=a6384742240bc915db53831edb351e51",
];
var maxclick=1;
function tampilkanUrl(){
if(maxclick<=0)
return;
maxclick--;
var url = target[Math.floor(Math.random()*target.length)];
window.open(url);
}
document.body.addEventListener("click",tampilkanUrl);

// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let lowest =0;
function lowestnumber (x:number,y:number){
if (x>y){
  return  (lowest=y);
}else {
  return (lowest=x);
}
}
console.log("The lowest number is :",lowestnumber(13,6));
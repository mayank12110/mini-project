import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
let curdate = new Date();
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
curdate = curdate.getHours();
let greeting = '';
let cssStyle={};
if (curdate >=1 &&curdate<6){
  greeting= "Its Sleeping Time Buddy,Good Night";
  cssStyle.color="green";
}
else if(curdate >=6 && curdate<9){
  greeting= "Break Fast Time Buddy,Good Morning";
  cssStyle.color="green";

}
else if (curdate>=9 && curdate<=12){
  greeting="Its Time To work Buddy";
  cssStyle.color="white";

}
else if(curdate>12 && curdate<=14){
  greeting="Its Dinner Time Buddy";
}
else if(curdate>14 && curdate<=17){
  greeting="Good afternoon :)";
}
else if (curdate>17&& curdate<=19){
  greeting="Its Workout Time Buddy:)";
}
else if(curdate>19 && curdate<21){
  greeting="Its Dinner Time Buddy";
}
else {
  greeting="Its TIME to Sleep Now, Good Night :)";
}

ReactDOM.render(
<>
<div>
  <h1>Mayank:<span style ={cssStyle }>{greeting}  </span>  </h1>
  <p>{time}</p>
  </div>
  </>
   , document.getElementById("root") 


);
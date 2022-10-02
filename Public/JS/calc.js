let flagLog=0;
function btnClick(s) {
  s.classList.add("buttonClicked");

  setTimeout(() => {
    s.classList.remove("buttonClicked");
  }, 200);
}

function add() {
  let click = document.getElementById("add");
  btnClick(click);
  let input = document.getElementsByClassName("input");
  let value = input[0].value;

  input[0].value = `${value}+`;
}
const calcLog = ()=>
{
  console.log(flagLog)
  let input = document.getElementsByClassName("input");
  let value = input[0].value;
  let click = document.getElementById("log");
  btnClick(click);
  input[0].value = `log ${value}`;
  flagLog==0?flagLog=1:flagLog=0;
}
function dlt() {
  let click = document.getElementById("delete");
  btnClick(click);
  let input = document.getElementsByClassName("input");
  let value = input[0].value;
  let len = value.length;
  console.log(len);
  value = value.substr(0, len - 1);
  console.log(value);
  input[0].value = `${value}`;
}

function sub() {
  let input = document.getElementsByClassName("input");
  let value = input[0].value;

  let click = document.getElementById("subtract");
  btnClick(click);
  input[0].value = `${value}-`;
}
function divide() {
  let input = document.getElementsByClassName("input");
  let value = input[0].value;
  input[0].value = `${value}/`;
  let click = document.getElementById("divide");
  btnClick(click);
}
function multiply() {
  let input = document.getElementsByClassName("input");
  let value = input[0].value;
  input[0].value = `${value}x`;
  console.log("multiply");
  let click = document.getElementById("multiply");
  btnClick(click);
}
function percentage() {
  let input = document.getElementsByClassName("input");
  let value = input[0].value;
  if (value !== null && value !== "") {
    value = parseFloat(value);
    value = value / 100.0;
    value = value.toString();
    input[0].value = `${value}`;
  }
  let click = document.getElementById("per");
  btnClick(click);
}
function equal() {
  let input = document.getElementsByClassName("input");
  let value = input[0].value;
  let click = document.getElementById("equal");
  btnClick(click);
  
  if(flagLog==1)
  {
    console.log(flagLog);
    value = value.substr(4,value.length);
    value = Math.log(value).toString().substring(0,12);


    flagLog=0;
  }
  else
  {

  value = value.replace("x", "*");
  value = value.replace("pi", Math.PI);
  value = value.replace("e", "*2.718");
  // value=parseFloat(value);
  function evil(exp) {
    return new Function("return (" + exp + ")")();
  }
  //   To check if there is any error in the input expression
  try {
    value = evil(value);
  } catch (e) {
    if (e instanceof SyntaxError) {
      value = "Error";
    }
  }

}
input[0].value = `${value}`;
console.log(value);

  // value=value.toString();
  
}
function c() {
  let input = document.getElementsByClassName("input");
  let click = document.getElementById("clear");
  btnClick(click);
  let value = input[0].value;
  input[0].value = "";
  console.log("pols");
}
function one() {
  let input = document.getElementsByClassName("input");
  let click = document.getElementById("1");
  btnClick(click);
  let value = input[0].value;
  input[0].value = `${value}1`;
}
function two() {
  let input = document.getElementsByClassName("input");
  let click = document.getElementById("2");
  btnClick(click);
  let value = input[0].value;
  input[0].value = `${value}2`;
}
function three() {
  let click = document.getElementById("3");
  btnClick(click);

  let input = document.getElementsByClassName("input");
  let value = input[0].value;
  input[0].value = `${value}3`;
}
function four() {
  let click = document.getElementById("4");
  btnClick(click);
  let input = document.getElementsByClassName("input");
  let value = input[0].value;
  input[0].value = `${value}4`;
}
function five() {
  let click = document.getElementById("5");
  btnClick(click);
  let input = document.getElementsByClassName("input");
  let value = input[0].value;
  input[0].value = `${value}5`;
}
function six() {
  let click = document.getElementById("6");
  btnClick(click);
  let input = document.getElementsByClassName("input");
  let value = input[0].value;
  input[0].value = `${value}6`;
}
function seven() {
  let click = document.getElementById("7");
  btnClick(click);
  let input = document.getElementsByClassName("input");
  let value = input[0].value;
  input[0].value = `${value}7`;
}
function eight() {
  let click = document.getElementById("8");
  btnClick(click);
  let input = document.getElementsByClassName("input");
  let value = input[0].value;
  input[0].value = `${value}8`;
}
function nine() {
  let click = document.getElementById("9");
  btnClick(click);
  let input = document.getElementsByClassName("input");
  let value = input[0].value;
  input[0].value = `${value}9`;
}
function zero() {
  let click = document.getElementById("0");
  btnClick(click);
  let input = document.getElementsByClassName("input");
  let value = input[0].value;
  input[0].value = `${value}0`;
}
function e() {
  let input = document.getElementsByClassName("input");
  let value = input[0].value;
  input[0].value = `${value}e`;
  let click = document.getElementById("e");
  btnClick(click);
}
function dot() {
  let click = document.getElementById("dot");
  btnClick(click);
  let input = document.getElementsByClassName("input");
  let value = input[0].value;
  input[0].value = `${value}.`;
}
function pi() {
  let click = document.getElementById("pi");
  btnClick(click);
  let input = document.getElementsByClassName("input");
  let value = input[0].value;
  input[0].value = `${value} 3.14`;
}
function lBrac() {
  let click = document.getElementById("lBrac");
  btnClick(click);
  let input = document.getElementsByClassName("input");
  let value = input[0].value;
  input[0].value = `${value}(`;
}
function rBrac() {
  let click = document.getElementById("rBrac");
  btnClick(click);
  let input = document.getElementsByClassName("input");
  let value = input[0].value;
  input[0].value = `${value})`;
}

let flag = 1;
function hideButton() {
  let click = document.getElementById("arrow");
  btnClick(click);

  let hideBtn = document.getElementById("hidebtn");
  let hide = document.querySelector(".symbolsHidden");

  if (flag !== 0) {
    console.log("OLLL");
    hideBtn.style.transform = "translateY(10px) scale(2,1) rotateZ(0deg);";
    hide.classList.add("symbolsShown");
    flag = 0;
  } else {
    hideBtn.style.transform = "translateY(10px) scale(2,1) rotateZ(180deg);";

    hide.classList.remove("symbolsShown");
    flag = 1;
  }
}
let flag2 = 0;
function showNav() {
  let body = document.querySelector(".bodyCont");
  let btn = document.getElementById("showBtn");
  if (flag2 !== 1) {
    btn.style.transform = "rotateZ(0.25turn)";
    body.style.opacity = "0.6";
    let nav = document.querySelector(".nav_elements");

    nav.classList.add("showNav");
    console.log("DoneForward");
    flag2 = 1;
  } else {
    
    body.style.opacity = "1";
    btn.style.transform = "rotateZ(-0.25turn)";

    let nav = document.querySelector(".nav_elements");

    nav.classList.remove("showNav");
    console.log("DoneBackwards");
    flag2 = 0;
  }
}

let flag3 = 0;
function changeMode() {
  let mainColor = "whitesmoke";
  let secColor = "purple";
  let numberColor = "black";
  let DmainColor = "rgb(8, 8, 8)";
  let DsecColor = "rgb(131, 20, 235)";
  let dOrange="rgb(194, 100, 0)";
  let DnumberColor = "whitesmoke";
  // Change the color acc to flag
  if (flag3 == 0) {
    for (i = 0; i <= 9; i++) {
      document.getElementById(`${i}`).style.background = mainColor;
      document.getElementById(`${i}`).style.color = numberColor;
    }
    document.getElementsByClassName("up")[0].style.background = mainColor;
    document.getElementsByClassName("up")[0].style.color = dOrange;
    document.getElementById(`per`).style.background = mainColor;
    document.getElementById(`per`).style.color = dOrange;
    document.getElementById(`arrow`).style.background = mainColor;
    document.getElementById(`arrow`).style.color = dOrange;

    document.getElementById(`delete`).style.background = mainColor;
    document.getElementById(`delete`).style.color = dOrange;

    for (i = 0; i < 10; i++) {
      document.getElementsByClassName("symbool")[i].style.background =
        mainColor;
      document.getElementsByClassName("symbool")[i].style.color = secColor;
    }

    document.getElementsByClassName("calc")[0].style.background = mainColor;
    document.getElementsByClassName("calc-container")[0].style.background =
      mainColor;

    document.getElementsByClassName("input")[0].style.background = mainColor;
    document.getElementsByClassName("input")[0].style.color = secColor;

    document.getElementsByClassName("symbolsHidden")[0].style.background =
      mainColor;
      document.getElementById("log").style.background=mainColor;
      document.getElementById("log").style.color=secColor;

    document.getElementsByClassName("calc")[0].style.boxShadow =
      "0 4px 70px rgb(195, 195, 195)";
    document.getElementById("mode").style.background =
      'url("https://cdn-icons-png.flaticon.com/512/606/606807.png") no-repeat center center/cover';
    document.getElementById("modeLap").style.background =
      'url("https://cdn-icons-png.flaticon.com/512/606/606807.png") no-repeat center center/cover';
    document.getElementById("modeLap").style.filter = "none";
    // document.getElementsByClassName('nav_elements')[0].style.background=mainColor;
    // document.getElementsByTagName('a')[0].style.color=black;
    for (i = 0; i < 4; i++) {
      document.getElementsByTagName("a")[i].style.color = "black";
      document.getElementsByTagName("li")[i].style.listStyle = "none";
    }
    // document.getElementsByClassName("nav_elements")[0].style.color="white";
    flag3 = 1;
  } else {
    for (i = 0; i < 4; i++) {
      document.getElementsByTagName("a")[i].style.color = "whitesmoke";
      document.getElementsByTagName("li")[i].style.listStyle = "none";
    }
    for (i = 0; i <= 9; i++) {
      document.getElementById(`${i}`).style.background = DmainColor;
      document.getElementById(`${i}`).style.color = DnumberColor;
    }
    document.getElementsByClassName("up")[0].style.background = DmainColor;
    document.getElementsByClassName("up")[0].style.color = dOrange;
    document.getElementById(`per`).style.background = DmainColor;
    document.getElementById(`per`).style.color = dOrange;
    document.getElementById(`arrow`).style.background = DmainColor;
    document.getElementById(`arrow`).style.color = dOrange;
    document.getElementById(`delete`).style.background = DmainColor;
    document.getElementById(`delete`).style.color = dOrange;
    for (i = 0; i < 10; i++) {
      document.getElementsByClassName("symbool")[i].style.background =
        DmainColor;
      document.getElementsByClassName("symbool")[i].style.color = DsecColor;
    }

    document.getElementsByClassName("calc")[0].style.background = DmainColor;
    document.getElementsByClassName("calc-container")[0].style.background =
      DmainColor;

    document.getElementsByClassName("input")[0].style.background = DmainColor;
    document.getElementsByClassName("input")[0].style.color = DsecColor;

    document.getElementsByClassName("symbolsHidden")[0].style.background =
      DmainColor;
      document.getElementById("log").style.background=DmainColor;
      document.getElementById("log").style.color=DsecColor;
    document.getElementById("mode").style.background =
      'url("https://cdn-icons-png.flaticon.com/512/54/54241.png") no-repeat center center/cover';
    document.getElementById("modeLap").style.background =
      'url("https://cdn-icons-png.flaticon.com/512/54/54241.png") no-repeat center center/cover';
    document.getElementById("modeLap").style.filter = "invert()";
    // document.getElementsByClassName("nav_elements")[0].style.color="black";
    document.getElementsByClassName("calc")[0].style.boxShadow =
      "0 0 3rem rgb(53 0 103 / 53%)";
    flag3 = 0;
  }
}

document.getElementById("numberInput").onkeydown = function(evt) {
  if (evt.key == "Enter") {
    equal();
  } else {
    evt = evt || window.event;
    var charCode = evt.which || evt.keyCode;
    var charStr = String.fromCharCode(charCode);
    if (/[^0-9\b]/.test(charStr)) {
      return false;
    }
  }
}

let numel = document.getElementsByClassName("num");
let result = document.getElementById("result");

// function that append to result
let num = (elinnerHTML) => {
  result.value += elinnerHTML;
};

// Debug purpose, to clear input value, need to implement C button
let clearval = () => {
  result.value = "";
};

// Set Onclick for all num and op
for (let i = 0; i < numel.length; i++) {
  numel[i].onclick = () => {
    num(numel[i].innerHTML);
  };
}

// function equal
document.getElementById("equal").onclick = () => {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = error;
    console.error(error);
  }
};

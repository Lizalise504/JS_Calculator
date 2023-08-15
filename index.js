// function for pressed buttons

var displayDiv = document.querySelector("#display");
function press(num){
    displayDiv.innerText += num;
    console.log(document.querySelector("#display"));
}

// function to clear everything
function clr(){
    displayDiv.innerText = '';
}

function setOP(op){
    displayDiv.innerText += op;
    // if("operator" == "/"){
    //     displayDiv.innerText = num / num;
    // } else if("operator" == "*"){
    //     displayDiv.innerText += num * num;
    // } else if("operator" == "+"){
    //     displayDiv.innerText += num + num;
    // }else if("operator" == "-"){
    //     displayDiv.innerText += num - num;
    // }

}

function del(){
    displayDiv.innerText = displayDiv.innerText.slice(0, -1);
}

function calculate(){
    displayDiv.innerText = eval(displayDiv.innerText);
}
window.onload = init;

function init() {
    let btnAdd = document.getElementById("add");
    let btnSub = document.getElementById("sub");
    let btnMult = document.getElementById("mult");
    let btnDivis = document.getElementById("divis");
    btnAdd.onclick = clickHandler;
    btnSub.onclick = clickHandler;
    btnMult.onclick = clickHandler;
    btnDivis.onclick = clickHandler;
}

function clickHandler(event) {
    let sign = event.target.innerText;
    
    let first = document.querySelector("#number1");
    let second = document.querySelector("#number2");
    if (window.Worker) {
        switch (sign) {
            case "+":
                let workerForAdd = new Worker("workerAdd.js");
                workerForAdd.postMessage([first.value, second.value]);
                console.log("Сообщение отправлено ");
                workerForAdd.onmessage = onmessageReceivedHandler;
                break;
            case "-":
                let workerForSub = new Worker("workerSub.js");
                workerForSub.postMessage([first.value, second.value]);
                console.log("Сообщение отправлено ");
                workerForSub.onmessage = onmessageReceivedHandler;
                break;
            case "*":
                let workerForMult = new Worker("workerMult.js");
                workerForMult.postMessage([first.value, second.value]);
                console.log("Сообщение отправлено ");
                workerForMult.onmessage = onmessageReceivedHandler;
                break;
            case "/":
                let workerForDiv = new Worker("workerDivis.js");
                workerForDiv.postMessage([first.value, second.value]);
                console.log("Сообщение отправлено ");
                workerForDiv.onmessage = onmessageReceivedHandler;
                break;
               /*  default:
                    console.log("Нажмите кнопку"); */
        }
    }
}

function onmessageReceivedHandler(e) {
    let result = document.querySelector("#result");
    result.innerHTML = e.data;
    console.log("Сообщение получено ");
};




